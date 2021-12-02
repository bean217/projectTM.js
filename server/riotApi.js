const axios = require('axios');
const utils = require('./utils');
const get_max_rank = utils.get_max_rank;

const RiotApiURL = 'https://na1.api.riotgames.com';

async function check_api(api_key) {
    try {
        const apiResult = await axios.get(
            `${RiotApiURL}/lol/platform/v3/champion-rotations?api_key=${api_key}`
            );
        if (apiResult.status >= 200 && apiResult.status <= 299) {
            return true;
        }
        return false;
    } catch (err) {
        // do nothing
        return false;
    }
}

async function get_summoner(api_key, summonerName) {
    let summonerInfo = {
        name: summonerName,
    };

    let errMsg = { 
        errMsg: "",
    };

    let gotRankData = true;
    let gotMMRData = true;

    await axios.get(
        `${RiotApiURL}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api_key}`
        )
        .then(async res => {
            // console.log(res.data);
            summonerInfo.id = res.data.id;
            summonerInfo.level = res.data.summonerLevel;
            summonerInfo.iconId = res.data.profileIconId;

            await axios.get(
                `${RiotApiURL}/lol/league/v4/entries/by-summoner/${summonerInfo.id}?api_key=${api_key}`
                )
                .then(res => {
                    // console.log(res.data);
                    summonerInfo.rank = get_max_rank(res.data);
                    if (summonerInfo.rank == null) gotRankData = false;
                })
                .catch(
                    err => {
                        // console.log(`Encountered an error in server/riotApi.js::get_summoner()`);
                        gotRankData = false;
                        // errMsg.errMsg = `Could not fetch ranked data`;
                    }
                );

            await axios.get(
                `https://na.whatismymmr.com/api/v1/summoner?name=${summonerName}`
                )
                .then(res => {
                    // console.log(res.data);
                    summonerInfo.ranked_mmr = res.data.ranked.avg;
                    summonerInfo.normal_mmr = res.data.normal.avg;
                    summonerInfo.aram_mmr = res.data.ARAM.avg;
                })
                .catch(
                    err => {
                        // console.log(`Encountered an error in server/riotApi.js::get_summoner()`);
                        gotMMRData = false;
                        // errMsg.errMsg = `Insufficient MMR Data for ${summonerName}`;

                        // if summoner has rank data, assign their MMR to the avg of their highest rank
                        if (gotRankData) {
                            // TODO: placeholder for now
                        }
                    }
                );
        })
        .catch(err => {
            // If the player could not be found from the api, return an error
            // console.log(`Encountered an error in server/riotApi.js::get_summoner() - ${err}`);
            errMsg.errMsg = `'${summonerName}' not found`;
        });

        // if summoner has no rank or MMR data, report error
        console.log("MMR:"+gotMMRData + " RANK:"+gotRankData);
        console.log("TEST");
        if (!gotRankData && !gotMMRData) {
            errMsg.errMsg = `Insufficient matchmaking data for ${summonerName}`;
        }

        console.log(errMsg.errMsg.length === 0 ? summonerInfo : errMsg);
        return errMsg.errMsg.length === 0 ? summonerInfo : errMsg;
}

module.exports = { 
    check_api: check_api,
    get_summoner: get_summoner,
};
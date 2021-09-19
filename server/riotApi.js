const axios = require('axios');

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
    try {
        const apiResult = await axios.get(
            `${RiotApiURL}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api_key}`
        )
        .then(res => console.log(res.data))
        .catch(err => console.log(err));

    } catch (err) {
        console.log("ERROR");
        // do nothing
    }
}

module.exports = { 
    check_api: check_api,
    get_summoner: get_summoner,
};
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

module.exports = { 
    check_api: check_api,
};
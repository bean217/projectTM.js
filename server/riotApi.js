const axios = require('axios');

const RiotApiURL = 'https://na1.api.riotgames.com';

async function check_api(api_key) {
    try {
        const apiResult = await axios.get(`${RiotApiURL}/lol/platform/v3/champion-rotations?api_key=${api_key}`);
        if (apiResult.status >= 200 && apiResult.status <= 299) {
            return true;
        }
        return false;
    } catch (err) {
        // do nothing
        return false;
    }

    // await axios.get(`${RiotApiURL}/lol/platform/v3/champion-rotations?api_key=${api_key}`)
    //     .then(res => { // got a response (could still be false)
    //         console.log("STATUS = " + res.status);
    //         if (res.status == 200) { // accept if response is a 200 status code
    //             result = true;
    //         }
    //     })
    //     .catch(err => err); // response failed, therefore key may be invalid
        console.log(`RESULT: ${result}`);
}

module.exports = { 
    check_api: check_api,
};
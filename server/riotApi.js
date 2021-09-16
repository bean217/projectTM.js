const fetch = require('node-fetch');

const RiotApiURL = 'https://na1.api.riotgames.com';

function check_api(api_key) {
    var result;
    fetch(`${RiotApiURL}/lol/platform/v3/champion-rotations?${api_key}`, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(result = res)
        .then(console.log(res))
        .catch(json => console.log(json));
    
    return result;
}

module.exports = { 
    check_api: check_api,
};
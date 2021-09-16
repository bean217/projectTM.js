const RiotApiURL = 'https://na1.api.riotgames.com';

export function check_api(api_key) {

    fetch(RiotApiURL + '{0}/lol/platform/v3/champion-rotations', {
        method: 'GET',
        headers: 
        {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
            "Accept-Language": "en-US,en;q=0.5",
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "Origin": "https://developer.riotgames.com",
            "X-Riot-Token": api_key,
        },
    })
        .then(res => res.json())
        .catch(json => console.log(json));
}
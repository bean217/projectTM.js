const riotApi = require('./riotApi');
const check_api = riotApi.check_api;
const get_summoner = riotApi.get_summoner;

const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.post("/getsummoner", async (req, res) => {
    console.log(`POST /getsummoner - Got body: { ${req.body.summonerName}, ${req.body.api_key} }`)
    res.status(200).json({ result: await get_summoner(req.body.api_key, req.body.summonerName) }); 
});

app.post("/check_key", async (req, res) => {
    console.log(`POST /check_key - Got body: { ${req.body.key} }`);
    res.status(200).json({ result: await check_api(req.body.key) });
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
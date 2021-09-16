const riotApi = require('./riotApi');
const check_api = riotApi.check_api;

const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/check_key", (req, res) => {
    console.log(`Got body: ${req.body.key}`);
    res.status(200).json({result: check_api(req.body.key)});
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
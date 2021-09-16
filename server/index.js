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
    res.sendStatus(200);
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
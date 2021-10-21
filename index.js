const express = require("express");

const port = process.env.PORT || '3000';

const app = express();
let logs = ""
app.use(express.json());
app.use(express.urlencoded({
    extended: false
  }));

app.get('/', (req, res) => {
    res.send(logs)
});
app.get('/logs', (req, res) => {
    res.send(logs)
});
app.post('/log', (req, res) => {
    logs = `${logs} \n\r` + JSON.stringify(req.body)
    console.log(req.body)
    res.send("Ok")
});
app.listen(port, () => console.log(`server started on port ${port}`));
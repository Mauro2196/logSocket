const express = require('express')
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

let logs = []
let logId = 0
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/logs', (req, res) => {
    res.send(logs)
});
app.post('/log', (req, res) => {
    logObj = { 
        id: logId += 1, 
        date: getdate(),
        log: req.body
    };
    logs.push(logObj);
    console.log(req.body)
    io.emit('log message', logs);
    res.send("Ok")
});
http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});

function getdate() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime
}
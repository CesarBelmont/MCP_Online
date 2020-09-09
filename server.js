const express = require("express");
const app = express();
var path = require('path');
const port = 8080;
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/task')));
app.use('/task/Stimuli', express.static(__dirname + '/task/Stimuli'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile('./MainTask.html', { root: __dirname });
});

app.get('/MainTask.html', (req, res) => {
    res.sendFile('./MainTask.html', { root: __dirname });
});

app.get('/task/Info.html', (req, res) => {
    res.sendFile('./task/Info.html', { root: __dirname });
});

app.get('/task/PhaseI.html', (req, res) => {
    res.sendFile('./task/PhaseI.html', { root: __dirname });
});

app.get('/task/PhaseII.html', (req, res) => {
    res.sendFile('./task/PhaseII.html', { root: __dirname });
});

app.get('/task/PhaseIII.html', (req, res) => {
    res.sendFile('./task/PhaseIII.html', { root: __dirname });
});

app.post('/task/End.html', (req, res) => {
    res.sendFile('./task/End.html', { root: __dirname });
    var fs = require('fs');
    var data = req.body.data;
    fs.appendFile('data.txt', data, function (err) {
        if (err) throw err;       
    });
    
});

app.listen(port, () => console.log(`listo en el puerto ${port}!`));

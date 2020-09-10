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
    var id = req.body.id;
    var finalScore = req.body.finalscore;
    var cueprobID= req.body.cueprobID;
    var action1= req.body.action1;
    var decision1=req.body.decision1;
    var responseT1= req.body.responseT1;
    var cuesL= req.body.cuesL;
    var cuesR= req.body.cuesR;
    var seqID= req.body.seqID;
    var action2=req.body.action2;
    var decision2=req.body.decision2;
    var responseT2=req.body.responseT2;
    var cuetestL=req.body.cuetestL;
    var cuetestR=req.body.cuetestR;
    var action3=req.body.action3;
    var decision3=req.body.decision3;
    var responseT3=req.body.responseT3;
    var cuetestL2=req.body.cuetestL2;
    var cuetestR2 = req.body.cuetestR2;
    fs.appendFile('data.txt', id + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', finalScore + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', cueprobID + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', action1 + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', decision1 + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', responseT1 + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', cuesL + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', cuesR + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', seqID + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', action2 + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', decision2 + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', responseT2 + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', cuetestL + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', cuetestR + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', action3 + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', decision3 + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', responseT3 + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', cuetestL2 + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });
    fs.appendFile('data.txt', cuetestR2 + '\n\r', function (err) {
        if (err) {
            console.log(err);
        };
    });   
});

app.listen(port, () => console.log(`listo en el puerto ${port}!`));

const express = require("express");
const app = express();
var path = require('path');
const port = 8080;
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/task')));
app.use('/task/Stimuli', express.static(__dirname + '/task/Stimuli'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.sendFile('./Team.html', { root: __dirname });
});

app.get('/MainTask.html', (req, res) => {
    res.sendFile('./MainTask.html', { root: __dirname });
});

app.post('/task/Info.html', (req, res) => { 
    res.sendFile('./task/Info.html', { root: __dirname });
    var pass = req.body.pass;
    console.log(pass);
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
    var id = req.cookies['userID'];
    var finalScore = req.cookies['Points'];
    var cueprobID = req.cookies['cueProb'];
    var action1 = JSON.parse(req.cookies['action1']);
    var decision1 = JSON.parse(req.cookies['decision1']);
    var responseT1 = JSON.parse(req.cookies['responseT1']);
    var cuesL = JSON.parse(req.cookies['cuesL']);
    var cuesR = JSON.parse(req.cookies['cuesR']);
    var seqID = req.cookies['seqID'];
    var action2 = JSON.parse(req.cookies['action2']);
    var decision2 = JSON.parse(req.cookies['decision2']);
    var responseT2 = JSON.parse(req.cookies['responseT2']);
    var cuetestL = JSON.parse(req.cookies['CueTestL']);
    var cuetestR = JSON.parse(req.cookies['CueTestR']);
    var action3 = JSON.parse(req.cookies['action3']);
    var decision3 = JSON.parse(req.cookies['decision3']);
    var responseT3 = JSON.parse(req.cookies['responseT3']);
    var cuetestL2 = JSON.parse(req.cookies['CueTestL2']);
    var cuetestR2 = JSON.parse(req.cookies['CueTestR2']);
    var trial = JSON.parse(req.cookies['Trial']);
    var trial2 = JSON.parse(req.cookies['Trial2']);
    var trial3 = JSON.parse(req.cookies['Trial3']);
    var datap1 = [];
    var datap2 = [];
    var datap3 = [];
    
    for (i = 0; i < action1.length; i++) {
        datap1[i] = {
            "trial": trial[i],
            "id": id,
            "finalScore": finalScore,
            "cueprobID": cueprobID,
            "seqID": seqID,
            "action": action1[i],
            "decision": decision1[i],
            "responseTime": responseT1[i],
            "CuesL": cuesL[i],
            "CuesR": cuesR[i],
            "Phase": 1
        }
    }
    for (i = 0; i < action2.length; i++) {
        datap2[i] = {
            "trial": trial2[i],
            "id": id,
            "finalScore": finalScore,
            "cueprobID": cueprobID,
            "seqID": seqID,
            "action": action2[i],
            "decision": decision2[i],
            "responseTime": responseT2[i],
            "CuesL": cuetestL[i],
            "CuesR": cuetestR[i],
            "Phase": 2
        };
    }
    for (i = 0; i < action3.length; i++) {
        datap3[i] = {
            "trial": trial3[i],
            "id": id,
            "finalScore": finalScore,
            "cueprobID": cueprobID,
            "seqID": seqID,
            "action": action3[i],
            "decision": decision3[i],
            "responseTime": responseT3[i],
            "CuesL": cuetestL2[i],
            "CuesR": cuetestR2[i],
            "Phase": 3
        };
        
    }

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();

    let file = [];
    fs.writeFileSync('./Data/data.json', JSON.stringify(file), function (err) {
        if (err) throw err;
    });

    fs.readFile('./Data/data.json', function (err, data) {
        if (err) {
            console.log(err);
        }
        var json = JSON.parse(data);
        json.push(datap1);
        json.push(datap2);
        json.push(datap3);
        fs.writeFileSync('./Data/data.json', JSON.stringify(json, null, 2), function (err) {
            if (err) throw err;
        });
        fs.copyFileSync('./Data/data.json', './Data/' + id + '_'+day+'_'+month+'_'+year+'.json', function (err) {
            if (err) throw err;
        });
        fs.unlink('./Data/data.json', function (err) {
            if (err) throw err;
        });
    });  
});

app.listen(port, () => console.log(`Ready in port ${port}!`));

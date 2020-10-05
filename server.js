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
    var id = req.body.id;
    var finalScore = req.body.finalscore;
    var cueprobID = req.body.cueprobID;
    var action1 = (req.body.action1).split(",");
    var decision1 = (req.body.decision1).split(",");
    var responseT1 = (req.body.responseT1).split(",");
    var cuesL = (req.body.cuesL).split(",");
    var cuesR = (req.body.cuesR).split(",");
    var seqID = req.body.seqID;
    var action2 = (req.body.action2).split(",");
    var decision2 = (req.body.decision2).split(",");
    var responseT2 = (req.body.responseT2).split(",");
    var cuetestL = (req.body.cuetestL).split(",");
    var cuetestR = (req.body.cuetestR).split(",");
    var action3 = (req.body.action3).split(",");
    var decision3 = (req.body.decision3).split(",");
    var responseT3 = (req.body.responseT3).split(",");
    var cuetestL2 = (req.body.cuetestL2).split(",");
    var cuetestR2 = (req.body.cuetestR2).split(",");
    var trial = (req.body.Trial).split(",");
    var trial2 = (req.body.Trial2).split(",");
    var trial3 = (req.body.Trial3).split(",");
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

var models = require("../models/models");

module.exports.getBenh = (req, res, next) => {
    models.Benh.find({}).exec((err, result) => {
        var response = {
            benh: []
        };
        if (err) {
            res.statusCode = 400;
            res.end(JSON.stringify({error: err}));
        } else {
            response.benh = result;
            res.end(JSON.stringify(response));
        }
    });
};

module.exports.createBenh = (req, res, next) => {
    var Benh = req.body;
    var benh = new models.Benh({
        TenBenh: Benh.TenBenh,
        TrieuChung: {
            TrieuChung1: Benh.TrieuChung1,
            TrieuChung2: Benh.TrieuChung2
        },
        BieuHien: Benh.BieuHien
    });
    
    benh.save(function (err) {
        if (err) {
            res.statusCode = 400;
            res.end(JSON.stringify({error: err}));
        } else {
            res.end("insert success");
        }
    });
};

module.exports.getBenhByTrieuChung = (req, res, next) => {
    var trieuchung = req.query.trieuchung;
    var response = {
        benh: []
    };
    models.Benh.find({ 'TrieuChung.TrieuChung1': { '$regex': trieuchung } })
        .exec((err, result) => {
            response.benh = result;
            res.end(JSON.stringify(response));
        });
};
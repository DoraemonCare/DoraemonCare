var models = require("../models/models");
var _ = require('underscore');
var async = require('async');

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
        TrieuChung: Benh.TrieuChung,
        MoTa: Benh.MoTa,
        CachDieuTri: Benh.CachDieuTri
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

    models.Benh.find({ 'TrieuChung': { '$regex': trieuchung } })
    .exec((err, result) => {
        res.end(JSON.stringify({ benh: result }));
    });
};

module.exports.getBenhByTenBenh = (req, res, next) => {
    var tenbenh = req.query.tenbenh;
    models.Benh.find({ 'TenBenh': { '$regex': tenbenh } })
        .exec((err, result) => {
            res.end(JSON.stringify({ benh: result }));
        });
};

module.exports.getBenhById = (req, res, next) => {
    var tenbenh = req.query.tenbenh;
    models.Benh.findOne({ 'TenBenh': tenbenh })
        .exec((err, benh) => {
             res.end(JSON.stringify(result));
        });
};
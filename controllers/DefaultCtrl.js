var BenhCtrl = require('./BenhCtrl');

module.exports.getBenh = (req, res, next) => {
    BenhCtrl.getBenh(req, res, next);
};

module.exports.createBenh = (req, res, next) => {
    BenhCtrl.createBenh(req, res, next);
};

module.exports.getBenhByTrieuChung = (req, res, next) => {
    BenhCtrl.getBenhByTrieuChung(req, res, next);
};

module.exports.getBenhByTenBenh = (req, res, next) => {
    BenhCtrl.getBenhByTenBenh(req, res, next);
};
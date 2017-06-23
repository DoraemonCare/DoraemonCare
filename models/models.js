var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.connect('mongodb://localhost/DoraemonDB');
mongoose.connect('mongodb://doraemonadmin:tronghuy229@ds131782.mlab.com:31782/doraemoncaredb');

var BenhSchema = new Schema({
  TenBenh: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  TrieuChung: {
    type: String
  },
  MoTa: {
    type: String
  },
  CachDieuTri: {
    type: String
  }
});

module.exports.Benh = mongoose.model('Benh', BenhSchema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/DoraemonDB');

var BenhSchema = new Schema({
  TenBenh: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  TrieuChung: {
    TrieuChung1: {
      type: String
    },
    TrieuChung2: {
      type: String
    }
  },
  BieuHien: {
    type: String
  }
});

module.exports.Benh = mongoose.model('Benh', BenhSchema);
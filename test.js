//var models = require(__dirname + '/models');
// var fs = require('fs');

// fs.readdir(__dirname + '/models', (err, files) => {
//     console.log(files);
//     files.forEach((file) => {
//         console.log(file.replace('.js', ''));
//     })
// })

//models.sequelize.sync();

// var models = require('./models');
// models.sequelize.sync();
//models.blogSchema

//   "host": "salty-journey-61143.herokuapp.com",
//   "schemes": [
//     "https"
//   ],

// var str = ["la", "sd", "ttt"];
// str.splice(1, 1)
// console.log("ket qua: " + str);


    // var arrayTrieuChung = trieuchung.split(",");
    // var response = {
    //     benh: []
    // };
    // var benhSuperArray = [];
    // var benhArray = [];

    // benhArray = _.map(arrayTrieuChung, (key) => {
    //     console.log(key);
    //     models.Benh.find({ 'TrieuChung': { '$regex': key } }).exec(() => {
            
    //     });
    //     models.Benh.find({ 'TrieuChung': { '$regex': key } })
    //         .exec((err, result) => {
    //             console.log(result);
    //             return {
    //                 benh: result
    //             }
    //         });
    // });
    //console.log(benhArray);
    
    // async.series([
    //     (callback) => {
    //         for (var i = 0; i < arrayTrieuChung.length; i++) {
    //             var element = arrayTrieuChung[i];
    //             models.Benh.find({ 'TrieuChung': { '$regex': element } })
    //                 .exec((err, result) => {
    //                     benhArray.concat(result);
    //                     if (i == arrayTrieuChung.length - 1) {
    //                         callback(null, "one");               
    //                     }    
    //                 });
    //         }
    //     },
    //     (callback) => {
            // benhArray.forEach((array) => {
            //     benhSuperArray.concat(array);
            // });
    //         callback(null, "two");
    //     }
    // ],
    //     (err, result) => {
    //         console.log(benhArray);
    //         console.log(benhSuperArray);
    //         for (var i = 0; i < benhSuperArray.length; i++){
    //                 for (var j = i + 1 ; j <= benhSuperArray.length; j++) {
    //                     if (benhSuperArray[i] === benhSuperArray[j]) {
    //                         benhSuperArray.splice(j, 1);
    //                     }
    //                 }
    //             }
    //         console.log(result);
    //         console.log(benhArray);
    //         console.log(benhSuperArray);
    //     });

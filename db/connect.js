/**
 * Created by SONY on 2016/8/11.
 */
var mongoose = require("mongoose");

module.exports = {
    connect : function(){
        mongoose.connect('mongodb://localhost/mongoosedb-demo');
    },
close :function () {
    mongoose.close();
}
}
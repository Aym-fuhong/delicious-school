/**
 * Created by SONY on 2016/8/10.
 */
var db = require('./connect');
var User = require('../entity/user');

var aym = new User({
    name:"haha",
    password:"123456",
    phone:"15678945623"
});
db.connect();
aym.save(function(err){
    if(err) throw err;
    console.log("user saved");
    db.close;
});
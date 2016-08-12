/**
 * Created by SONY on 2016/8/11.
 */
var db = require('./connect');
var User = require('../entity/user');
let bodyParser = require("body-parser");
var express = require("express");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
exports.find = function (req,res) {
    username = req.body.name;
    userpass = req.body.password;
    console.log(username+"==================="+userpass);
    db.connect();
    User.findOne({name:username,password:userpass},function(err,users){
        if(err) throw  err;
        res.redirect("main.html?users="+users);
        //res.send(users);
        db.close;
    });
}
exports.save = function (req,res) {
    var aym = new User({
        name:"cat",
        password:"123456",
        phone:"15678945623"
    });
    db.connect();
    aym.save(function(err){
        if(err) throw err;
        res.send("success");
        db.close;
    });
}
// function find(name){
//     db.connect();
//     let a ="";
//     User.findOne({name:name},function(err,users){
//         if(err) throw  err;
//         a = users.name;
//         //console.log(users);
//         db.close();
//     });
//     return a;
// }
//  module.exports = find;
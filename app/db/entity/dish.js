let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let dishSchema = new Schema({
  dishname: String,
  dishprice: String,
  dishstore: String
});

// the collection's name is `dishes`

module.exports = Dish;

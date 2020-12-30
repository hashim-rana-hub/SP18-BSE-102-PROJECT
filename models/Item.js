var mongoose = require("mongoose");

var items_Schema = mongoose.Schema({
    b_name:String,
    isbn:String,
    a_name:String,
    audi:String,
});

const Items = mongoose.model("Items", items_Schema);
module.exports = Items;

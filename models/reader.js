var mongoose = require("mongoose");

var reader_schema = mongoose.Schema({
    r_name:String,
    cnic:String,
    email:String,
    nmbr:String,
});

const Readers = mongoose.model("Readers", reader_schema);
module.exports = Readers;
var express = require('express');
var router = express.Router();
var Readers = require("../models/reader");


router.get('/', async function(req, res, next) {
    let lists = await Readers.find();
   // console.log(items);
   res.render("Items/readerlist", {lists});
 });

 router.get('/add', async function(req, res, next) {
    res.render("add-reader");
  });

 router.post('/dbAdd', async function(req, res, next) {
    // console.log(req.body); 
    let read = new Readers(req.body);
    await read.save();
    res.redirect("/readerRoutes");
  });

  router.get('/delete/:id', async function(req, res, next) {
    let item = await Readers.findByIdAndDelete(req.params.id);
    res.redirect("/readerRoutes");
   });

   router.get('/edit/:id', async function(req, res, next) {
    let item = await Readers.findById(req.params.id);
    res.render("edit-readers", {item});
   });

   router.post('/update/:id', async function(req, res, next) {
    let item = await Items.findById(req.params.id);
    item.r_name = req.body.r_name;
    item.cnic = req.body.cnic;
    item.email = req.body.email;
    item.nmbr = req.body.nmbr;
    await item.save();

    res.redirect("/readerRoutes");
  });
 


module.exports = router; 
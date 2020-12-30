var express = require('express');
var router = express.Router();
var Items = require("../models/Item");
var Reader_DB = require("../models/reader") 


/* GET home page. */
router.get('/', async function(req, res, next) {
   let items = await Items.find();
  // console.log(items);
  res.render("Items/booklist", {items});
});

router.get('/books', async function(req, res, next) {
  let items = await Items.find();
//  console.log(read);
 res.render("Items/booklist2", {items});
});

// Add Item page
router.get('/add', async function(req, res, next) {
  res.render("addbooks");
});

router.get('/addReader', async function(req, res, next) {
  res.render("add-reader");
});

router.get('/reader', async function(req, res, next) {
  res.render("add-reader");
});

// will store the data in database
router.post('/', async function(req, res, next) {
  // console.log(req.body); 
  let items = new Items(req.body);
  await items.save();
  res.redirect("/itemsRoutes");
});

router.get('/delete/:id', async function(req, res, next) {
 let item = await Items.findByIdAndDelete(req.params.id);
 res.redirect("/itemsRoutes");
});

router.get('/edit/:id', async function(req, res, next) {
  let item = await Items.findById(req.params.id);
  res.render("editbooklist", {item});
 });


  router.post('/update/:id', async function(req, res, next) {
    let item = await Items.findById(req.params.id);
    item.b_name = req.body.b_name;
    item.isbn = req.body.isbn;
    item.a_name = req.body.a_name;
    item.audi = req.body.audi;
    await item.save();

    res.redirect("/itemsRoutes");
  });
 

module.exports = router; 

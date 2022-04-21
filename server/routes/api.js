const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();
//get, post, delete, path,

//create new entry in dbnpm run dev
//this is http://locahost:3000/api/admin
router.post('/admin', adminController.addItem, (req, res) => {
  console.log('In the post route');
  //console.log(res.locals.newKey)
  return res.status(200).json('hello'); //json sends the response
});

module.exports = router;

// Student.create() ==> returns a promise
const { Inventory } = require('../models/jewelryModel');

const adminController = {};

adminController.addItem = (req, res, next) => {
  //console.log(req)
  //write a db query to Inventory.create({...}).then().catch()
  //Shanon said she prefers promise chaining, but I could do async/await

  //Make
  //res.locals.newKey = value;
  return next();
};

module.exports = adminController;

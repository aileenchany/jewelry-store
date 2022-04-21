// Student.create() ==> returns a promise
const { Inventory } = require('../models/jewelryModel');
// const Inventory = require('../models/jewelryModel');
const adminController = {};

adminController.getItems = async (req, res, next) => {
  try {
    const allItems = await Inventory.find();
    // console.log(allItems);
    res.locals.itemsList = allItems;
    return next();
  } catch (err) {
    // return next({
    //   log: 'Express error handler caught getItems middleware error',
    //   status: 500,
    //   message: { err: 'An error occurred on admin Controller' },
    // });
    console.log(err);
  }
};

adminController.addItem = async (req, res, next) => {
  console.log('Hello from admin controller', req.body);
  //console.log(req)
  //write a db query to Inventory.create({...}).then().catch()
  //Shanon said she prefers promise chaining, but I could do async/await
  //Make
  //res.locals.newKey = value;
  const { title, description, img, qty, price } = req.body;
  try {
    const dbQuery = await Inventory.create({
      title,
      description,
      img,
      qty,
      price,
    });
    res.locals.item = dbQuery;
    return next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = adminController;

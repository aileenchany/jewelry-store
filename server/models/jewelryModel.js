const mongoose = require('mongoose');
require('dotenv').config();
const mongo_uri = process.env.MONGO_URI;
const { Schema } = mongoose;

mongoose
  .connect(`${mongo_uri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'jewelry',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const inventorySchema = new Schema({
  title: { type: String },
  description: { type: String },
  img: { type: String },
  qty: { type: Number },
  price: { type: Number },
});

const Inventory = mongoose.model('inventory', inventorySchema);

module.exports = { Inventory };
// module.exports = Inventory;

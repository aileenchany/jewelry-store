const mongoose = require('mongoose');
require('dotenv').config();
const mongo_uri = process.env.MONGO_URI;

mongoose
  .connect(`${mongo_uri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'jewelry',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

const inventorySchema = new Schema({
  title: String,
  description: String,
  img: String,
  qty: Number,
  likes: Number,
});

const Inventory = mongoose.model('inventory', inventorySchema);

module.exports = { Inventory };

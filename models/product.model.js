const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  discountPercentage: Number,
  thumbnail: String,
  description: String,
  category:String,
  rating:Number,
  stock: Number,
  status: String,
  position: Number,
  deleted: Boolean,
  deletedAt: Date
});

const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
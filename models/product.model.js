const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

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
  slug: {
    type: String,
    slug: "title",
    unique: true
  },
  deleted: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true,
  deletedAt: Date
});

const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
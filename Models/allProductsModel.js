import mongoose from "mongoose";

const allProductSchema = new mongoose.Schema({
  id: Number,
  name: String,
  category: String,
  image: String,
  new_price: Number,
  old_price: Number,
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});
export default mongoose.model("AllProducts", allProductSchema);

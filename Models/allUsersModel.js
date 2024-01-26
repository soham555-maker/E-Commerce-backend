import mongoose from "mongoose";

const allUserSchema = new mongoose.Schema({
  name: String,
  email:{
    type:String,
    unique: true
  },
  password:{
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  cart: {
    type: Object,
    default: {}
  }
});
export default mongoose.model("Users", allUserSchema);

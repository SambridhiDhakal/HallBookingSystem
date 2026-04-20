// Require Mongoose
import mongoose from 'mongoose';

// Define a schema
const Schema = mongoose.Schema;

const CartModelSchema = new Schema({
  itemName: [
    { type: String, lowercase: true, trim: true, required: [true, "Need items Name"] }
  ],
});

// Compile model from schema
export const Cart = mongoose.model("CartModel", CartModelSchema);


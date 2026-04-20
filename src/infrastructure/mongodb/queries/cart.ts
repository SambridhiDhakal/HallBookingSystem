import mongoose from 'mongoose';

const addItemsToCart = async (mongoDbCart: any, items: any) =>
  new mongoDbCart({
    _id: new mongoose.Types.ObjectId(),
    ...items,
  }).save();

export default  {
  addItemsToCart,
}
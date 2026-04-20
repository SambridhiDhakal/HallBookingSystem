import cartQueries from "../infrastructure/mongodb/queries/cart"

export const addItems = (dependencies: any) => async (items: any) => {
  const { mongoDbClient } = dependencies; // All infrastructure dependencies can be destructured from this
  const mongoDbCart = mongoDbClient.Cart;


  const result = await cartQueries.addItemsToCart(mongoDbCart, items);

  return result;
}
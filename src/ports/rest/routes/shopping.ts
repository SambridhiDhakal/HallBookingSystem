import express, { NextFunction, Response, Request } from "express";
import dependencies from '../../../infrastructure/dependencies';
import { addItems } from '../../../controllers/shopping';

const router = express.Router();

router.post("/cart", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { items } = req.body;
    console.log("test i am here");
    const result = await addItems(dependencies)(items);
    res.status(200).json((result));
  } catch (error) {
    console.log(`Error in retrieving shopping cart: ${JSON.stringify((error as Error).message)}`);
    res.status(500).json();
  }
})

export = router;

import express from "express";
import dotenv from "dotenv-safe";
import cors from 'cors';
import shoppingRoutes from "./ports/rest/routes/shopping";

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(cors())
app.use(express.json());

dotenv.config(); //allows environment variables to be accessed.

// Health check
app.use("/healthcheck", (req: any, res: any, next: any) => {
  res.status(200).json({ message: "Successful" });
});

app.use("/shopping", shoppingRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

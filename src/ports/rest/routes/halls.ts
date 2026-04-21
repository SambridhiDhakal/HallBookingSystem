import { Router } from "express";
import { getHalls } from "../../../controllers/halls";

const router = Router();

router.get("/", getHalls);

export default router;
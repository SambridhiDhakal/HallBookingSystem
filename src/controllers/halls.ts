import { Request, Response } from "express";
import { halls } from "../infrastructure/data";

export const getHalls = (_req: Request, res: Response) => {
  res.status(200).json(halls);
};
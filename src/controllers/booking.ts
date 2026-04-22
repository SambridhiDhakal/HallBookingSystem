import { Request, Response } from "express";
import { bookings, halls } from "../infrastructure/data";

export const createBooking = (req: Request, res: Response) => {
  const { hallId, userName, date, startTime, endTime, expectedGuests } = req.body;

  //Checking hall existence
  const hall = halls.find(h => h.id === hallId);
  if (!hall) {
    return res.status(400).json({ message: "Hall not found" });
  }

  //Checking hall capacity
  if (expectedGuests > hall.capacity) {
    return res.status(400).json({ message: "Exceeds hall capacity" });
  }

  //Creating booking
  const newBooking = {
    id: bookings.length + 1,
    hallId,
    userName,
    date,
    startTime,
    endTime,
    expectedGuests
  };

  bookings.push(newBooking);

  // 4. Return response
  res.status(201).json(newBooking);
};
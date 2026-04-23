import { Request, Response } from "express";
import { bookings, halls } from "../infrastructure/data";
import { buildBooking, exceedsCapacity, findHallById } from "./helpers/bookingHelpers";

export const getBookings = (_req: Request, res: Response) => {
  return res.status(200).json(bookings);
};

export const createBooking = (req: Request, res: Response) => {
  const { hallId, userName, date, startTime, endTime, guests } = req.body;

  const hall = findHallById(hallId);

  if (!hall) {
    return res.status(400).json({ message: "Hall not found" });
  }

  if (exceedsCapacity(hall.capacity, guests)) {
    return res.status(400).json({ message: "Exceeds hall capacity" });
  }

  const newBooking = buildBooking(
    hallId,
    userName,
    date,
    startTime,
    endTime,
    guests
  );

  bookings.push(newBooking);

  return res.status(201).json(newBooking);
};
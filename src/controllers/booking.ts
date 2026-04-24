import { Request, Response } from "express";
import { bookings } from "../infrastructure/data";
import { buildBooking, exceedsCapacity, findHallById } from "./helpers/bookingHelpers";

export const getBookings = (_req: Request, res: Response) => {
  console.log("GET /bookings called");
  return res.status(200).json(bookings);
};

export const createBooking = (req: Request, res: Response) => {
  try {
    const { hallId, userName, date, startTime, endTime, expectedGuests } = req.body;

    console.log("Creating booking for:", userName);

    const hall = findHallById(hallId);

    if (!hall) {
      console.error("Error: Hall not found");
      return res.status(400).json({ message: "Hall not found" });
    }

    if (exceedsCapacity(hall.capacity, expectedGuests)) {
      console.error("Error: Guest count exceeds capacity");
      return res.status(400).json({ message: "Exceeds hall capacity" });
    }

    const newBooking = buildBooking(
      hallId,
      userName,
      date,
      startTime,
      endTime,
      expectedGuests
    );

    bookings.push(newBooking);

    console.log("Booking created successfully:", newBooking.id);

    return res.status(201).json(newBooking);

  } catch (error) {
    console.error("Create booking error:", error);
    return res.status(500).json({
      message: "Something went wrong while creating booking"
    });
  }
};
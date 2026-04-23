import { Request, Response } from "express";
import { bookings } from "../infrastructure/data";

export const getAllBookings = (_req: Request, res: Response) => {
  return res.status(200).json(bookings);
};

export const approveBooking = (req: Request, res: Response) => {
  const bookingId = Number(req.params.id);

  const booking = bookings.find((b) => b.id === bookingId);

  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  booking.status = "Approved";

  return res.status(200).json({
    message: "Booking approved successfully",
    booking
  });
};

export const rejectBooking = (req: Request, res: Response) => {
  const bookingId = Number(req.params.id);

  const booking = bookings.find((b) => b.id === bookingId);

  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  booking.status = "Rejected";

  return res.status(200).json({
    message: "Booking rejected successfully",
    booking
  });
};
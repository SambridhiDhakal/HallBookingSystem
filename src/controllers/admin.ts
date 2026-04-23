import { Request, Response } from "express";
import {
  getAllBookingsHelper,
  approveBookingHelper,
  rejectBookingHelper
} from "./helpers/adminHelpers";

//to get all bookings
export const getAllBookings = (_req: Request, res: Response) => {
  return res.status(200).json(getAllBookingsHelper());
};

//to approve bookings
export const approveBooking = (req: Request, res: Response) => {
  const bookingId = Number(req.params.id);

  const booking = approveBookingHelper(bookingId);

  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  return res.status(200).json({
    message: "Booking approved successfully",
    booking
  });
};

//to reject bookings if not possible
export const rejectBooking = (req: Request, res: Response) => {
  const bookingId = Number(req.params.id);

  const booking = rejectBookingHelper(bookingId);

  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  return res.status(200).json({
    message: "Booking rejected successfully",
    booking
  });
};
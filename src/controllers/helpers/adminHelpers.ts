import { bookings } from "../../infrastructure/data";

export const getAllBookingsHelper = () => {
  return bookings;
};

export const approveBookingHelper = (id: number) => {
  const booking = bookings.find((b) => b.id === id);

  if (!booking) {
    return null;
  }

  booking.status = "Approved";
  return booking;
};

export const rejectBookingHelper = (id: number) => {
  const booking = bookings.find((b) => b.id === id);

  if (!booking) {
    return null;
  }

  booking.status = "Rejected";
  return booking;
};
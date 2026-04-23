import { bookings, halls } from "../../infrastructure/data";
import { Booking } from "../../domain/interfaces/booking";

export const findHallById = (hallId: number) => {
  return halls.find((hall) => hall.id === hallId);
};

export const exceedsCapacity = (hallCapacity: number, guests: number) => {
  return guests > hallCapacity;
};

export const buildBooking = (
  hallId: number,
  userName: string,
  date: string,
  startTime: string,
  endTime: string,
  expectedGuests: number
): Booking => {
  return {
id: bookings.length + 1,
    hallId,
    userName,
    date,
    startTime,
    endTime,
    expectedGuests,
    status: "Pending"
  };
};
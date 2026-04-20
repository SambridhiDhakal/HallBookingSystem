import { Hall } from "../domain/interfaces/hall";
import { Booking } from "../domain/interfaces/booking";

export const halls: Hall[] = [
  { id: 1, name: "Waterloo Ballroom", capacity: 50 },
  { id: 2, name: "Ontario A", capacity: 100 },
  { id: 3, name: "Georgian", capacity: 200 }
];

export const bookings: Booking[] = [];
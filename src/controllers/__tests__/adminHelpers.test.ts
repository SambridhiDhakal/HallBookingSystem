import { bookings } from "../../infrastructure/data";
import {
  getAllBookingsHelper,
  approveBookingHelper,
  rejectBookingHelper
} from "../helpers/adminHelpers";

describe("Admin Helpers", () => {

  beforeEach(() => {
    bookings.length = 0;

    bookings.push({
      id: 1,
      hallId: 1,
      userName: "Sam",
      date: "2026-04-30",
      startTime: "10:00",
      endTime: "12:00",
      expectedGuests: 90,
      status: "Pending"
    });
  });

  test("should return all bookings", () => {
    const result = getAllBookingsHelper();

    expect(result.length).toBe(1);
    expect(result[0].userName).toBe("Sam");
  });

  test("should approve booking", () => {
    const result = approveBookingHelper(1);

    expect(result).not.toBeNull();
    expect(result?.status).toBe("Approved");
  });

  test("should reject booking", () => {
    const result = rejectBookingHelper(1);

    expect(result).not.toBeNull();
    expect(result?.status).toBe("Rejected");
  });

  test("should return null if booking not found", () => {
    const result = approveBookingHelper(99);

    expect(result).toBeNull();
  });
});
import { buildBooking, exceedsCapacity, findHallById } from "../helpers/bookingHelpers";

describe("Booking Helpers", () => {
  test("should find a hall by id", () => {
    const hall = findHallById(1);

    expect(hall).toBeDefined();
    expect(hall?.name).toBe("Waterloo Ballroom");
  });

  test("should return undefined for invalid hall id", () => {
    const hall = findHallById(99);

    expect(hall).toBeUndefined();
  });

  test("should return true if guests exceed capacity", () => {
    const result = exceedsCapacity(50, 60);

    expect(result).toBe(true);
  });

  test("should return false if guests do not exceed capacity", () => {
    const result = exceedsCapacity(100, 60);

    expect(result).toBe(false);
  });

  test("should build a booking object correctly", () => {
    const booking = buildBooking(
      1,
      "Sam",
      "2026-04-25",
      "10:00",
      "12:00",
      30
    );

    expect(booking.hallId).toBe(1);
    expect(booking.userName).toBe("Sam");
    expect(booking.expectedGuests).toBe(30);
    expect(booking.status).toBe("Pending");
  });
});
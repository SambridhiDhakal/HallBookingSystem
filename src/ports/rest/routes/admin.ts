import { Router } from "express";
import {
  getAllBookings,
  approveBooking,
  rejectBooking
} from "../../../controllers/admin";
import { authenticateToken } from "../../../middlewares/authMiddleware";
import { authorizeAdmin } from "../../../middlewares/adminMiddleware";

const router = Router();

router.get("/bookings", authenticateToken, authorizeAdmin, getAllBookings);
router.patch("/bookings/:id/approve", authenticateToken, authorizeAdmin, approveBooking);
router.patch("/bookings/:id/reject", authenticateToken, authorizeAdmin, rejectBooking);

export default router;
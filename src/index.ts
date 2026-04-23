import express from "express";
import cors from "cors";
import hallsRoutes from "./ports/rest/routes/halls";
import bookingsRoutes from "./ports/rest/routes/booking";
import authRoutes from "./ports/rest/routes/auth";
import adminRoutes from "./ports/rest/routes/admin";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({ message: "Server is running" });
});

const port = 3000;

app.use("/halls", hallsRoutes);
app.use("/bookings", bookingsRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
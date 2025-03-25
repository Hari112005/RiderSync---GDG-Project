import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./Routes/authRoutes.js";
import cookieParser from "cookie-parser";
// import rideRoutes from "./routes/rideRoutes.js";
// import paymentRoutes from "./Payment/paymentServices.js";

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
// app.use("/api/rides", rideRoutes);
// app.use("/api/payments", paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bookRoutes from "./src/routes/bookRoute.js";
import orderRoutes from "./src/routes/orderRoute.js";
import userRoutes from "./src/routes/userRoute.js";
import adminRoutes from "./src/stats/adminStats.js";
import connectDB from "./src/config/mongodb.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// endpoints
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

//database connection
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Your App listening on port ${PORT}`);
});

// EcexmlCufAlU40nO
// raipreetham8

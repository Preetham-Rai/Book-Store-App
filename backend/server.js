import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoutes from "./src/books/book.route.js";
import orderRoutes from "./src/orders/order.route.js";
import userRoutes from "./src/users/user.route.js";
import adminRoutes from "./src/stats/admin.stats.js";
const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main()
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// EcexmlCufAlU40nO
// raipreetham8

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import logger from "./middleware/logger.js";
import auth from "./middleware/auth.js";
import errorHandler from "./middleware/errorHandler.js";
import productsRouter from "./routes/productsRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;
const apikey = process.env.API_KEY;

// Middleware setup
app.use(bodyParser.json());
app.use(logger);
app.use(auth);


// Routes
app.use("/api/products", productsRouter);

// Root route
app.get("/", (req, res) => {
  res.send(
    "Welcome to the Product API! Go to /api/products to see all products."
  );
});

// Error handling middleware (must be last)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;

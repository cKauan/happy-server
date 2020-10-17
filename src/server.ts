import express from "express";
import dotenv from "dotenv";
import path from "path";
import "express-async-errors";
import cors from "cors";
import "./database/Connection";
import errorHandler from "./errors/handler";
import routes from "./routes";
const app = express();
const port = process.env.PORT || 5500;


dotenv.config();
app.use(cors());
app.use(express.json());

app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.use(errorHandler);
app.listen(port, () => console.log("Server is running"))

import express from "express";
import path from "path";
import 'express-async-errors';
import cors from 'cors';
import "./database/Connection";
import errorHandler from './errors/handler';

const app = express();
import routes from "./routes";

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);
app.listen(process.env.PORT || 5500, () => console.log('server running')); 

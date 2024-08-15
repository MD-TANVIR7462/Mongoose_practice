import { Request, Response } from "express";
require("dotenv").config();
import express from "express";
import cors from "cors";
const app = express();

//parser........
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Mongoosess");
});

export default app;

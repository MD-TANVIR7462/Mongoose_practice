import { Request, Response } from "express";
require("dotenv").config();
import express from "express";
import cors from "cors";
import { studentRoutes } from "./modules/student_modules/student.route";
const app = express();

//parser........
app.use(express.json());
app.use(cors());
//routes
app.use('/api/v1/students', studentRoutes)
app.use('/api/v1/faculties', studentRoutes)




app.get("/", (req: Request, res: Response) => {
  res.send("Hello Mongoosess");
});

export default app;

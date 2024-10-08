import { Request, Response } from "express";
require("dotenv").config();
import express from "express";
import cors from "cors";
import { studentRoutes } from "./modules/student_modules/student.route";
import { facultiRoutes } from "./modules/faculty_modules/feculty.route";
const app = express();

//parser........
app.use(express.json());
app.use(cors());
//routes
app.use('/api/v1/students', studentRoutes)
app.use('/api/v1/faculties', facultiRoutes)




app.get("/", (req: Request, res: Response) => {
  res.send("Hello Mongoosess");
});

export default app;

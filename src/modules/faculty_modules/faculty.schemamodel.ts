import { Schema, model } from "mongoose";
import { Tfaculty } from "./faculty.interface";
import { userNameSchema } from "../student_modules/student.shemamodel";

const facultySchema = new Schema<Tfaculty>({
  id: { type: String, required: true, unique: true, trim: true },
  name: { type: userNameSchema, required: [true, "name is recuired"] },
  email: { type: String, required: true },
  department: { type: String, required: true },
  salary: { type: Number, required: true },
  contactNO: { type: Number, required: true },
  isActive: {
    type: String,
    required: [true, "isActive required"],
    enum: {
      values: ["active", "blocked"],
      message: "{VALUE} is not Valid it should be 'active' or 'blocked'",
    },
    default: "active",
  },
  designation: { type: String, required: true },
  subjects: {
    type: [String],
    required: [true, "Minimum One Subject recuired"],
  },
  address: { type: String, required: [true, "address is required"] },
  image: { type: String, required: true },
  joiningDate: { type: String, required: true },
  leaveDate: { type: String },
  qualifications: { type: [String], required: true },
});

export const facultyModel = model<Tfaculty>("faculty", facultySchema);

import { Schema, model, connect } from "mongoose";
import {
  Tgaurdian,
  TlocalGaurdian,
  Tstudent,
  TuserName,
} from "./student.interface";

const userNameSchema = new Schema<TuserName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  middleName: { type: String },
});
const gaurdianSchema = new Schema<Tgaurdian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNumber: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNumber: { type: String, required: true },
});
const localGaurdianSchema = new Schema<TlocalGaurdian>({
  localGaurdianName: { type: String, required: true },
  localGaurdianOcupation: { type: String, required: true },
  localGaurdianNumber: { type: String, required: true },
});

const studentSchema = new Schema<Tstudent>({
  id: { type: String, required: true },
  name: userNameSchema,
  gender: { type: String, required: true, enum: ["male", "female"] },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: Number, required: true },
  bloodGroup: {
    type: String,
    required: true,
    enum: ["AB+", "AB+", "A+", "B+", "O+", "AB+", "A-", " B-", "O-"],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gaurdian: gaurdianSchema,
  localGaurdian: localGaurdianSchema,
  profileImage: { type: String, required: true },
  isActive: { type: String, required: true, enum: ["active", "inactive"] },
});

export const studentModel = model<Tstudent>("student", studentSchema);

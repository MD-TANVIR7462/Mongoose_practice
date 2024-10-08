import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import {
  Tguardian,
  TlocalGuardian,
  Tstudent,
  TuserName,
} from "./student.interface";

export const userNameSchema = new Schema<TuserName>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  lastName: { type: String, required: [true, "Last name is required"] },
  middleName: { type: String },
});

const gaurdianSchema = new Schema<Tguardian>({
  fatherName: { type: String, required: [true, "Father's name is required"] },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  fatherContactNumber: {
    type: String,
    required: [true, "Father's contact number is required"],
  },
  motherName: { type: String, required: [true, "Mother's name is required"] },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
  motherContactNumber: {
    type: String,
    required: [true, "Mother's contact number is required"],
  },
});

const localGaurdianSchema = new Schema<TlocalGuardian>({
  localGuardianName: {
    type: String,
    required: [true, "Local guardian's name is required"],
  },
  localGuardianOccupation: {
    type: String,
    required: [true, "Local guardian's occupation is required"],
  },
  localGuardianNumber: {
    type: String,
    required: [true, "Local guardian's contact number is required"],
  },
});

const studentSchema = new Schema<Tstudent>({
  id: {
    type: String,
    required: [true, "Student ID is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
  },
  name: { type: userNameSchema, required: [true, "Student name is required"] },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: {
      values: ["male", "female", "other"],
      message:
        "{VALUE} is not valid! Gender must be 'male', 'female', or 'other'",
    },
  },
  dateOfBirth: { type: String, required: [true, "Date of birth is required"] },
  email: { type: String, required: [true, "Email is required"], unique: true },
  contactNo: { type: String, required: [true, "Contact number is required"] },
  emergencyContactNo: {
    type: String,
    required: [true, "Emergency contact number is required"],
  },
  bloodGroup: {
    type: String,
    required: [true, "Blood group is required"],
    enum: {
      values: ["AB+", "AB-", "A+", "A-", "B+", "B-", "O+", "O-"],
      message: "{VALUE} is not Valid",
    },
  },
  presentAddress: {
    type: String,
    required: [true, "Present address is required"],
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent address is required"],
  },
  guardian: {
    type: gaurdianSchema,
    required: [true, "Guardian details are required"],
  },
  localGuardian: {
    type: localGaurdianSchema,
    required: [true, "Local guardian details are required"],
  },
  profileImage: { type: String, required: [true, "Profile image is required"] },
  isActive: {
    type: String,
    required: [true, "Status is required"],
    enum: {
      values: ["active", "inactive"],
      message: "{VALUE} is not Valid Status must be 'active' or 'inactive'",
    },
    default: "active",
  },
});

//midlewere for hashing passwords
studentSchema.pre("save", async function (next) {
  const user = this;
  const bcryptSalt = process.env.Bcrypt_salt;
  user.password = await bcrypt.hash(user.password, Number(bcryptSalt));
  next();
});

studentSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const studentModel = model<Tstudent>("student", studentSchema);

import { Schema, model, connect } from "mongoose";
import { Tstudent } from "./student.interface";




const userSchema = new Schema<Tstudent>({
    id: { type: String, required: true },
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        middleName: { type: String },
    },
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
    gaurdian: {
        fatherName: { type: String, required: true },
        fatherOccupation: { type: String, required: true },
        fatherContactNumber: { type: String, required: true },
        motherName: { type: String, required: true },
        motherOccupation: { type: String, required: true },
        motherContactNumber: { type: String, required: true },
    },
    localGaurdian: {
        localGaurdianName: { type: String, required: true },
        localGaurdianOcupation: { type: String, required: true },
        localGaurdianNumber: { type: String, required: true },
    },
    profileImage: { type: String, required: true },
    isActive: { type: String, required: true, enum: ["active", "inactive"] },
});

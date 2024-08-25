"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facultyModel = void 0;
const mongoose_1 = require("mongoose");
const student_shemamodel_1 = require("../student_modules/student.shemamodel");
const facultySchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: [true, "Faculty ID is required"],
        unique: true,
        trim: true
    },
    name: {
        type: student_shemamodel_1.userNameSchema,
        required: [true, "Faculty name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true
    },
    department: {
        type: String,
        required: [true, "Department is required"],
        trim: true
    },
    salary: {
        type: Number,
        required: [true, "Salary is required"],
        trim: true
    },
    contactNO: {
        type: Number,
        required: [true, "Contact number is required"],
        trim: true
    },
    isActive: {
        type: String,
        required: [true, "Status (isActive) is required"],
        enum: {
            values: ["active", "blocked"],
            message: "{VALUE} is not valid. It should be 'active' or 'blocked'."
        },
        default: "active",
        trim: true
    },
    designation: {
        type: String,
        required: [true, "Designation is required"],
        trim: true
    },
    subjects: {
        type: [String],
        required: [true, "At least one subject is required"],
        trim: true
    },
    address: {
        type: String,
        required: [true, "Address is required"],
        trim: true
    },
    image: {
        type: String,
        required: [true, "Image URL is required"],
        trim: true
    },
    joiningDate: {
        type: String,
        required: [true, "Joining date is required"],
        trim: true
    },
    leaveDate: {
        type: String,
        trim: true
    },
    qualifications: {
        type: [String],
        required: [true, "Qualifications are required"],
        trim: true
    },
});
exports.facultyModel = (0, mongoose_1.model)("faculty", facultySchema);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentZodSchema = exports.localGuardianZodSchema = exports.guardianZodSchema = exports.userNameZodSchema = void 0;
const zod_1 = require("zod");
// User Name Schema Validation
exports.userNameZodSchema = zod_1.z.object({
    firstName: zod_1.z.string().nonempty("First name is required").trim(),
    lastName: zod_1.z.string().nonempty("Last name is required"),
    middleName: zod_1.z.string().optional(),
});
// Guardian Schema Validation
exports.guardianZodSchema = zod_1.z.object({
    fatherName: zod_1.z.string().nonempty("Father's name is required"),
    fatherOccupation: zod_1.z.string().nonempty("Father's occupation is required"),
    fatherContactNumber: zod_1.z.string().nonempty("Father's contact number is required"),
    motherName: zod_1.z.string().nonempty("Mother's name is required"),
    motherOccupation: zod_1.z.string().nonempty("Mother's occupation is required"),
    motherContactNumber: zod_1.z.string().nonempty("Mother's contact number is required"),
});
// Local Guardian Schema Validation
exports.localGuardianZodSchema = zod_1.z.object({
    localGuardianName: zod_1.z.string().nonempty("Local guardian's name is required"),
    localGuardianOccupation: zod_1.z.string().nonempty("Local guardian's occupation is required"),
    localGuardianNumber: zod_1.z.string().nonempty("Local guardian's contact number is required"),
});
// Student Schema Validation
exports.studentZodSchema = zod_1.z.object({
    id: zod_1.z.string().nonempty("Student ID is required"),
    password: zod_1.z.string().nonempty("Student ID is required").trim(),
    name: exports.userNameZodSchema,
    gender: zod_1.z.enum(["male", "female", "other"], {
        required_error: "Gender is required",
        invalid_type_error: "Gender must be 'male', 'female', or 'other'",
    }),
    dateOfBirth: zod_1.z.string().nonempty("Date of birth is required"),
    email: zod_1.z.string().nonempty("Email is required").email("Invalid email format"),
    contactNo: zod_1.z.string().nonempty("Contact number is required"),
    emergencyContactNo: zod_1.z.string().nonempty("Emergency contact number is required"),
    bloodGroup: zod_1.z.enum(["AB+", "AB-", "A+", "A-", "B+", "B-", "O+", "O-"], {
        required_error: "Blood group is required",
        invalid_type_error: "Invalid blood group",
    }),
    presentAddress: zod_1.z.string().nonempty("Present address is required"),
    permanentAddress: zod_1.z.string().nonempty("Permanent address is required"),
    guardian: exports.guardianZodSchema,
    localGuardian: exports.localGuardianZodSchema,
    profileImage: zod_1.z.string().nonempty("Profile image is required"),
    isActive: zod_1.z.enum(["active", "inactive"], {
        required_error: "Status is required",
        invalid_type_error: "Status must be 'active' or 'inactive'",
    }).default("active"),
});

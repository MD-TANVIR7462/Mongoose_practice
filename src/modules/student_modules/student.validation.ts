import { z } from "zod";

// User Name Schema Validation
export const userNameZodSchema = z.object({
  firstName: z.string().nonempty("First name is required").trim(),
  lastName: z.string().nonempty("Last name is required"),
  middleName: z.string().optional(),
});

// Guardian Schema Validation
export const guardianZodSchema = z.object({
  fatherName: z.string().nonempty("Father's name is required"),
  fatherOccupation: z.string().nonempty("Father's occupation is required"),
  fatherContactNumber: z.string().nonempty("Father's contact number is required"),
  motherName: z.string().nonempty("Mother's name is required"),
  motherOccupation: z.string().nonempty("Mother's occupation is required"),
  motherContactNumber: z.string().nonempty("Mother's contact number is required"),
});

// Local Guardian Schema Validation
export const localGuardianZodSchema = z.object({
  localGuardianName: z.string().nonempty("Local guardian's name is required"),
  localGuardianOccupation: z.string().nonempty("Local guardian's occupation is required"),
  localGuardianNumber: z.string().nonempty("Local guardian's contact number is required"),
});

// Student Schema Validation
export const studentZodSchema = z.object({
  id: z.string().nonempty("Student ID is required"),
  name: userNameZodSchema,
  gender: z.enum(["male", "female", "other"], {
    required_error: "Gender is required",
    invalid_type_error: "Gender must be 'male', 'female', or 'other'",
  }),
  dateOfBirth: z.string().nonempty("Date of birth is required"),
  email: z.string().nonempty("Email is required").email("Invalid email format"),
  contactNo: z.string().nonempty("Contact number is required"),
  emergencyContactNo: z.string().nonempty("Emergency contact number is required").transform(Number),
  bloodGroup: z.enum(["AB+", "AB-", "A+", "A-", "B+", "B-", "O+", "O-"], {
    required_error: "Blood group is required",
    invalid_type_error: "Invalid blood group",
  }),
  presentAddress: z.string().nonempty("Present address is required"),
  permanentAddress: z.string().nonempty("Permanent address is required"),
  guardian: guardianZodSchema,
  localGuardian: localGuardianZodSchema,
  profileImage: z.string().nonempty("Profile image is required"),
  isActive: z.enum(["active", "inactive"], {
    required_error: "Status is required",
    invalid_type_error: "Status must be 'active' or 'inactive'",
  }).default("active"),
});

export type TuserName = {
  firstName: string;
  lastName: string;
  middleName?: string;
};
export type Tguardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
};
export type TlocalGuardian = {
  localGuardianName: string;
  localGuardianOccupation: string;
  localGuardianNumber: string;
};
export type Tstudent = {
  id: string;
  name: TuserName;
  gender: "male" | "female"|"other";
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: "AB+" | "AB-" | "A+" | "A-" | "B+" | "B-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: Tguardian;
  localGuardian: TlocalGuardian;
  profileImage?: string;
  isActive: "active" | "inactive";
};

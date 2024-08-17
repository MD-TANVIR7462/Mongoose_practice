export type TuserName = {
    firstName: string;
    lastName: string;
    middleName: string;
};
export type Tgaurdian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNumber: string;
    motherName: string;
    motherOccupation: string;
    motherContactNumber: string;
};
export type TlocalGaurdian = {
    localGaurdianName: string;
    localGaurdianOcupation: string;
    localGaurdianNumber: string;
}
export type Tstudent = {
    id: string;
    name: TuserName;
    gender: "male" | "female";
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContactNo: number;
    bloodGroup: "AB+" | "AB+" | "A+" | "B+" | "O+" | "AB+" | "A-" | " B-" | "O-";
    presentAddress: string;
    permanentAddress: string;
    gaurdian: Tgaurdian;
    localGaurdian: TlocalGaurdian;
    profileImage?: string;
    isActive: "active" | "inactive"
};


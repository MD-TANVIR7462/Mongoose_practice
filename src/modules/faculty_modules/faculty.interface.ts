import { TuserName } from "../student_modules/student.interface"

export type Tfaculty={
    id:string,
    name:TuserName,
    email:string,
    department:string,
    salary:number,
    contactNO:number,
    isActive:"active"|"blocked"
    designation:string,
    subjects:string[]
    teachingExperience:number
    address:string,
    image:string,
    joiningDate:string,
    leaveDate?:string,
    qualifications:string[]
} 



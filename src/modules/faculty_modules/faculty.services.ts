import { Tfaculty } from "./faculty.interface";
import { facultyModel } from "./faculty.schemamodel";

const createfaculty = async(faculty:Tfaculty)=>{
const result = facultyModel.create(faculty)
return result
}
 
export const facultySercices = {
    createfaculty,
}
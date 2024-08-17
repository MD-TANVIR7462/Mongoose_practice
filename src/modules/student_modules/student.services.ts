import { ObjectId } from "mongoose";
import { Tstudent } from "./student.interface";
import { studentModel } from "./student.shemamodel";

const createStudent = async (student: Tstudent) => {
    const result = await studentModel.create(student)
    return result

}
const getAllStudent = async () => {
    const result = await studentModel.find()
    return result
}

const getSigleStudent = async(id:ObjectId) => {
const result = await studentModel.findById(id)
return result
}


export const studentServices = {
    createStudent,
    getAllStudent,
    getSigleStudent
}
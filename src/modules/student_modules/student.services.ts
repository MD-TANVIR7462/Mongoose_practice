import { Tstudent } from "./student.interface";
import { studentModel } from "./student.shemamodel";

const createStudent = async (student: Tstudent) => {
  const result = await studentModel.create(student);
  return result;
};
const getAllStudent = async () => {
  const result = await studentModel.find();
  return result;
};

const getSigleStudent = async (id: string) => {
  const result = await studentModel.findById(id);
  if (result !== null) {
    return result;
  }
  const jsonResult = `No student find with ${id} this Id`;
  return jsonResult;
};
const deleteStudent = async (_id: string) => {
  const result = await studentModel.deleteOne({ _id });
  return result;
};

export const studentServices = {
  createStudent,
  getAllStudent,
  getSigleStudent,
  deleteStudent,
};

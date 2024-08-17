import { Request, Response } from "express";
import { studentServices } from "./student.services";

const createStudent = async (req: Request, res: Response) => {
    try {
        const student = req.body;
        const result = await studentServices.createStudent(student);
        res.status(200).json({
            success: true,
            message: "Student Created Successfully",
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "error while creating student",
            data: err,
        });
    }
};

const getallStudent = async (req: Request, res: Response) => {
    try {
        const result = await studentServices.getAllStudent()
        res.status(200).json({
            success: true,
            message: "succfully retrive all students",
            data: result
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "error while fetching students",
            data: err,
        });
    }
}




export const studentControler = {
    createStudent,
    getallStudent
};

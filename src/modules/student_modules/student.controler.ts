import { Request, Response } from "express";
import { studentServices } from "./student.services";
import {z} from "zod"

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
        const result = await studentServices.getAllStudent();
        res.status(200).json({
            success: true,
            message: "succfully retrive all students",
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "error while fetching students",
            data: err,
        });
    }
};

const getSingleStudent = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await studentServices.getSigleStudent(id);
        res.status(200).json({
            success: true,
            message: "succfully retrieved single student",
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "error while fetching student",
            data: err,
        });
    }
};


const deleteStudent = async (req: Request, res: Response) => {
    try {
        const deletedID = req.params.id
        const result = await studentServices.deleteStudent(deletedID)
        res.status(200).json({
            success: true,
            message: "student deleted successfully",
            data: result
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "error while deleting student",
            data: err,
        })
    }
}

    export const studentControler = {
        createStudent,
        getallStudent,
        getSingleStudent,
        deleteStudent
    }

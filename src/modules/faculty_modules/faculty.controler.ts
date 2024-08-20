import { Request, Response } from "express";
import { facultySercices } from "./faculty.services";

const createFaculty = async (req: Request, res: Response) => {
    try {
        const facultyData = req.body
        const result = await facultySercices.createfaculty(facultyData)
        res.status(200).json({
            success: true,
            dmessage: "Faculty Created Successfully",
            data: result
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Error while creating faculty",
            data: err
        })
    }

}

export const facultyControler = {
    createFaculty
}
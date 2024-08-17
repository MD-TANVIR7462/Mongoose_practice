import express from "express"
import { studentControler } from "./student.controler"
const router = express.Router()

router.post('/create-student', studentControler.createStudent)
router.get('/get-students',studentControler.getallStudent)
router.get('/get-single-student',studentControler.getSingleStudent)


export const studentRoutes = router
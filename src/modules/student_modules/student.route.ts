import express from "express"
import { studentControler } from "./student.controler"
const router = express.Router()

router.post('/create-student', studentControler.createStudent)
router.get('/get-students',studentControler.getallStudent)


export const studentRoutes = router
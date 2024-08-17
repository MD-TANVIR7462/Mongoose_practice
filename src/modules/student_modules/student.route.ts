import express from "express"
import { studentControler } from "./student.controler"
const router = express.Router()

router.post('/create-student', studentControler.createStudent)
router.get('/',studentControler.getallStudent)
router.get('/:id',studentControler.getSingleStudent)


export const studentRoutes = router
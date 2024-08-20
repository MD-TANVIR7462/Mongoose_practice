import express from "express"
import { facultyControler } from "./faculty.controler"
const router = express.Router()

router.post('/',facultyControler.createFaculty)

  


export const facultiRoutes = router
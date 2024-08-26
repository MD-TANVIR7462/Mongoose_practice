"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentControler = void 0;
const student_services_1 = require("./student.services");
const student_validation_1 = require("./student.validation");
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = req.body;
        const zodValidatedStudent = student_validation_1.studentZodSchema.parse(student);
        const result = yield student_services_1.studentServices.createStudent(zodValidatedStudent);
        res.status(200).json({
            success: true,
            message: "Student Created Successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "error while creating student",
            data: err,
        });
    }
});
const getallStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_services_1.studentServices.getAllStudent();
        res.status(200).json({
            success: true,
            message: "succfully retrive all students",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "error while fetching students",
            data: err,
        });
    }
});
const getSingleStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield student_services_1.studentServices.getSigleStudent(id);
        res.status(200).json({
            success: true,
            message: "succfully retrieved single student",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "error while fetching student",
            data: err,
        });
    }
});
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedID = req.params.id;
        const result = yield student_services_1.studentServices.deleteStudent(deletedID);
        res.status(200).json({
            success: true,
            message: "student deleted successfully",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "error while deleting student",
            data: err,
        });
    }
});
exports.studentControler = {
    createStudent,
    getallStudent,
    getSingleStudent,
    deleteStudent
};

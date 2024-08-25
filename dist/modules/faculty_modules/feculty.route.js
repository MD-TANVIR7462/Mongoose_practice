"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facultiRoutes = void 0;
const express_1 = __importDefault(require("express"));
const faculty_controler_1 = require("./faculty.controler");
const router = express_1.default.Router();
router.post('/', faculty_controler_1.facultyControler.createFaculty);
exports.facultiRoutes = router;

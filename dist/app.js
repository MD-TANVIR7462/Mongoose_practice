"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const student_route_1 = require("./modules/student_modules/student.route");
const feculty_route_1 = require("./modules/faculty_modules/feculty.route");
const app = (0, express_1.default)();
//parser........
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//routes
app.use('/api/v1/students', student_route_1.studentRoutes);
app.use('/api/v1/faculties', feculty_route_1.facultiRoutes);
app.get("/", (req, res) => {
    res.send("Hello Mongoosess");
});
exports.default = app;

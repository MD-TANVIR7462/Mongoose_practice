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
exports.facultySercices = void 0;
const faculty_schemamodel_1 = require("./faculty.schemamodel");
const createfaculty = (faculty) => __awaiter(void 0, void 0, void 0, function* () {
    const result = faculty_schemamodel_1.facultyModel.create(faculty);
    return result;
});
exports.facultySercices = {
    createfaculty,
};

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const student_controler_1 = require("./student.controler");
const router = express_1.default.Router();
router.get("/", student_controler_1.studentControler.getallStudent);
router.post(
  "/create-student",
  student_controler_1.studentControler.createStudent
);
router.get("/:id", student_controler_1.studentControler.getSingleStudent);
router.delete("/:id", student_controler_1.studentControler.deleteStudent);
exports.studentRoutes = router;

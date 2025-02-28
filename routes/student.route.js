const router = require("express").Router();
const studentController = require("../controllers/student.controller");

// router.get("/api/v1/students", studentController.getAllStudents);
router.post("/api/v1/students", studentController.createStudent);
router.get("/api/v1/students/:studentId", studentController.getStudentById);
router.put("/api/v1/students/:studentId", studentController.updateStudent);
router.delete("/api/v1/students/:studentId", studentController.deleteStudent);
router.get("/api/v1/students", studentController.filter);
module.exports = router;
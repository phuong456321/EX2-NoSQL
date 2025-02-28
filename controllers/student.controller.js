const Student = require("../models/student.model");
class StudentController {
  async getAllStudents(req, res) {
    try {
      const students = await Student.find();
      return res.status(200).json(students);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async createStudent(req, res) {
    try {
      const body = req.body;
      const newStudent = new Student(body);
      const student = await newStudent.save();
      return res.status(201).json(student);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
  async getStudentById(req, res) {
    try {
      const { studentId } = req.params;
      const student = await Student.findOne({ studentId });
      return res.status(200).json(student);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async filter(req, res) {
    try {
      const query = req.query;
      if (query.grade) {
        query.grade = { $gte: query.grade };
      }
      const students = await Student.find(query);
      return res.status(200).json(students);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async updateStudent(req, res) {
    try {
      const { studentId } = req.params;
      const body = req.body;
      const student = await Student.findOneAndUpdate({ studentId }, body, { new: true });
      return res.status(200).json(student);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async deleteStudent(req, res) {
    try {
      const { studentId } = req.params;
      const student = await Student.findOneAndDelete({ studentId });
      return res.status(200).json(student);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }


}

module.exports = new StudentController();

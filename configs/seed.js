const mongoose = require("mongoose");
const Student = require("../models/student.model");
require("dotenv").config();

const firstNames = [
  "Nguyen",
  "Tran",
  "Le",
  "Pham",
  "Hoang",
  "Vu",
  "Dang",
  "Bui",
  "Do",
  "Ho",
];
const midNames = [
  "Van",
  "Thi",
  "Ngoc",
  "Minh",
  "Hong",
  "Quoc",
  "Duc",
  "Anh",
  "Trung",
  "Tuan",
];
const lastNames = [
  "Nguyen",
  "Tran",
  "Le",
  "Pham",
  "Hoang",
  "Vu",
  "Dang",
  "Bui",
  "Do",
  "Ho",
];

const randomName = () => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const midName = midNames[Math.floor(Math.random() * midNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${midName} ${lastName}`;
};

const seedStudents = async () => {
  const students = [];
  for (let i = 0; i < 20; i++) {
    const student = {
      studentId: i,
      name: randomName(),
      age: Math.floor(Math.random() * (25 - 18 + 1)) + 18,
      gender: ["male", "female", "other"][Math.floor(Math.random() * 3)],
      dateOfBirth: new Date(
        Math.floor(Math.random() * (2022 - 1990 + 1)) + 1990,
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28) + 1
      ),
      major: ["IT", "Business", "Marketing", "Computer Science", "Law"][
        Math.floor(Math.random() * 5)
      ],
      grade: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
    };
    students.push(student);
  }
  try {
    await Student.insertMany(students);
    console.log("Seed data success");
  } catch (err) {
    console.log("Seed data failed");
  }
};

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(async () => {
    await Student.deleteMany({});
    seedStudents()})
  .catch((err) => console.log(err));
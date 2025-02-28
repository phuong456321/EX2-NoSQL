const express = require("express");
const app = express();
const studentRouter = require("./routes/student.route");

require("dotenv").config();
require("./configs/database/mongo.db");

app.use(express.json());
app.use(express.urlencoded());

app.use(studentRouter);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));

app.get("/", (req, res) => res.send("Hello World!"));
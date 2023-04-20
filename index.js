const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port = 8089;
const routesUrls = require("./routes/routes");
const cors = require("cors");
const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw console.log("ERROR IS ====<>", error);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB is Connected");
});

// app.get("/", (req, res) => {
//   res.send("HELLO FIRST REQUEST .... ");
// });

app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
app.listen(port, () => {
  connect();
  console.log("BACK__END IS RUNNING ...!");
});

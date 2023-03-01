const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const {fileURLToPath} = require("url");

const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose
  .connect(
    "mongodb+srv://Jayesh_Bhole:atlas12345@cluster0.2pgthe0.mongodb.net/bookstore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

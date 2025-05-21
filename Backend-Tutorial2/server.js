import express from "express";

const app = express();
const PORT = 8001;

// app.use((req, res, next) => {
//   console.log("This is the First Middleware");
//   next()
// });

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/profile", (req, res, next) => {
  res.send("This is profile page");
  console.log("This is the profile Page middleWare");
  next(new Error("Something went wrong "));
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});
app.use((err, req, res, next) => {
  console.log("Somethins went wrong", err.stack);
  res.status(500).send("Something went wrong");
  next();
});

app.listen(PORT || 8001, () => {
  console.log(`Server running on PORT ${PORT || 8001}`);
});

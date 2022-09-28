const express = require("express");
const cors = require("cors");
const { BadRequestError, errorHandler } = require("./app/api-error");

const app = express();
const contactsRouter = require("./app/routes/contact.route");

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

app.use((req, res, next) => {
  next(new BadRequestError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
  errorHandler.handleError(err, res);
});

module.exports = app;

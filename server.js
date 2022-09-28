const { default: mongoose } = require("mongoose");
const app = require("./app");
const config = require("./app/config");

mongoose
  .connect(config.db.uri)
  .then(() => {
    console.log("Connected to the database!!");
  })
  .catch((error) => {
    console.log(error);
    process.exit();
  });

const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`server is runging on port ${PORT}..`);
});

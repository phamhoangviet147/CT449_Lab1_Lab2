const config = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    uri: "mongodb+srv://hviet:hviet111@cluster0.8r9hv.mongodb.net/ctu?retryWrites=true&w=majority",
  },
};
module.exports = config;

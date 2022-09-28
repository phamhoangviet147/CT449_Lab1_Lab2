// const express = require("express");
// const contacts = require("../controllers/contact.controller");

// const router = express.Router();

// router
//   .route("/")
//   .get(contacts.findAll)
//   .post(contacts.create)
//   .delete(contacts.deleteAll);

// router.route("/favorite").get(contacts.findAllFavorite);

// router
//   .route("/:id")
//   .get(contacts.findOne)
//   .put(contacts.update)
//   .delete(contacts.delete);

// module.exports = router;
const express = require("express");
const contacts = require("../controllers/contact.controller");

module.exports = (app) => {
  const router = express.Router();

  router.post("/", contacts.create);

  router.get("/", contacts.findAll);

  router.get("/favorite", contacts.findAllFavorite);

  router.put("/:id", contacts.update);

  router.delete("/:id", contacts.delete);

  router.delete("/", contacts.deleteAll);
  router.get("/:id", contacts.findOne);

  app.use("/api/contacts", router);
};

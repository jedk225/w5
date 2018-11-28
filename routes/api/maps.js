const router = require("express").Router();
const mapControllers = require("../../controllers/mapControllers");

// Matches with "/api/books"
router.route("/")
  .get(mapControllers.findAll)
  .post(mapControllers.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(mapControllers.findById)
  .put(mapControllers.update)
  .delete(mapControllers.remove);

module.exports = router;

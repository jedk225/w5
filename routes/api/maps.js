const router = require("express").Router();
const mapControllers = require("../../controllers/mapControllers");


router.route("/")
  .get(mapControllers.findAll)
  .post(mapControllers.create);


router
  .route("/api/maps/:id")
  .get(mapControllers.findAll)
  .put(mapControllers.update)
  .delete(mapControllers.remove);

module.exports = router;

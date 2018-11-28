const router = require("express").Router();
const mapRoutes = require("./maps");

// Book routes
router.use("/maps", mapRoutes);

module.exports = router;
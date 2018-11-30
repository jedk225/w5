const router = require("express").Router()
const ProjectAPI = require("./projects");
const mapRoutes = require("./maps");

router.use("/projects", ProjectAPI)
// Book routes
router.use("/maps", mapRoutes);

module.exports = router;
<<<<<<< HEAD
const router = require("express").Router()
const ProjectAPI = require("./projects");


router.use("/projects", ProjectAPI)
=======
const router = require("express").Router();
const mapRoutes = require("./maps");

// Book routes
router.use("/maps", mapRoutes);
>>>>>>> master

module.exports = router;
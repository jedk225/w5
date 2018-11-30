const router = require("express").Router()
const ProjectAPI = require("./projects");


router.use("/projects", ProjectAPI)

module.exports = router;
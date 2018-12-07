const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const mapController = require("../controllers/mapControllers")
// API Routes
router.use("/api", apiRoutes);
router.route("/:id")
    .get( mapController.findAll )
router.use("*", function(req, res){
  res.send("Gabe is always right");
})

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

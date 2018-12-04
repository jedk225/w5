const router = require('express').Router()
const projectController = require('../../controllers/projectController')

router.route("/")
    .get(function(req, res){
        res.send("Hello")
    })
    .post(projectController.create)

router.route("/:id")
    .get(projectController.lookUpByProjectId)
        
module.exports = router;
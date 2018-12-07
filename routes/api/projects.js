const router = require('express').Router()
const projectController = require('../../controllers/projectController')

router.route("/")
    .post(projectController.create)

router.route("/:id")
    .get( function(req, res){
        projectController.lookUpByProjectId(req)
    })
    
router
    .route("/verify")
    .post(projectController.verifyProject)

router
    .route("/projectexists")
    .post(projectController.projectExists)

module.exports = router;
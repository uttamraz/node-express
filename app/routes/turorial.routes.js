const tutorials = require("../controllers/tutorial.controller");
const validate = require("../validations/validation");
const { createValidation, findOneValidation } = require("../validations/tutorial.validation");

var router = require("express").Router();
// Create a new tutorial
router.post("/", validate(createValidation), tutorials.create);

// Retrieve all tutorials
router.get("/", tutorials.findAll);

// Retrieve all published tutorials
router.get("/published", tutorials.findAllPublished);

// Retrieve a single tutorial with id
router.get("/:id", validate(findOneValidation), tutorials.findOne);

// Update a tutorial with id
router.put("/:id", tutorials.update);

// Delete a tutorial with id
router.delete("/:id", tutorials.delete);

// Delete all tutorials
router.delete("/", tutorials.deleteAll);

module.exports = router;


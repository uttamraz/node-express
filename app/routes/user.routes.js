const users = require("../controllers/user.controller");
const validate = require("../validations/validation");
const { createValidation, findOneValidation } = require("../validations/user.validation");

var router = require("express").Router();
// Create a new user
router.post("/", validate(createValidation), users.create);

// Retrieve all users
router.get("/", users.findAll);

// Retrieve all active users
router.get("/active", users.findAllActive);

// Retrieve a single user with id
router.get("/:id", validate(findOneValidation), users.findOne);

// Update a user with id
router.put("/:id", users.update);

// Delete a user with id
router.delete("/:id", users.delete);

// Delete all users
router.delete("/", users.deleteAll);

module.exports = router;


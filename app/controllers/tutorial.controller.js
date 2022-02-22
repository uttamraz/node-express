const { Tutorials, Sequelize: { Op } } = require("../models");
const { validationResult } = require("express-validator");
// const Tutorials = db.Tutorials;
// const Op = db.Sequelize.Op;

// Create and Save a new tutorial
exports.create = (req, res) => {
  // Create a tutorial
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save tutorial in the database
  Tutorials.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tutorial."
      });
    });
};

// Retrieve all tutorial from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Tutorials.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorial."
      });
    });
};

// Find a single tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorials.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving tutorial with id=" + id
      });
    });
};

// Update a tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tutorials.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update tutorial with id=${id}. Maybe tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating tutorial with id=" + id
      });
    });
};

// Delete a tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorials.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete tutorial with id=${id}. Maybe tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete tutorial with id=" + id
      });
    });
};

// Delete all tutorial from the database.
exports.deleteAll = (req, res) => {
  Tutorials.destroy({
    where: {},
    truncate: false
  })
    .then(num => {
      res.send({ message: `${num} tutorial were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorial."
      });
    });
};

// find all published tutorial
exports.findAllPublished = (req, res) => {
  Tutorials.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorial."
      });
    });
};

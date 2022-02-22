const express = require("express");
const cors = require("cors");

const tutorialRoute = require("./app/routes/turorial.routes");
const userRoute = require("./app/routes/user.routes");

const app = express();
app.options('*', cors())

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Swagger Docs
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const db = require("./app/models");

db.dbSequelize.sync();
// // drop the table if it already exists
// db.dbSequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Nodejs-Express application." });
});

app.use('/api/tutorial', tutorialRoute);
app.use('/api/user', userRoute);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

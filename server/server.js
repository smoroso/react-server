const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const config = require("config");
const routes = require("server/routes/routes");

const server = express();

server.use(bodyParser.json());
server.use(helmet());

routes(server);

server.listen(config.port, () => {
  console.log(`Process ${process.pid} is listening to all incoming requests on port ${config.port}`);
});

module.exports = server;

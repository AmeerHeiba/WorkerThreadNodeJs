const routes = require("express").Router();
const { blockWithoutWorker, blockWithWorker } = require("../controllers/blocker.controller");

routes.get("/WOWorker", blockWithoutWorker);
routes.get("/Worker", blockWithWorker);

module.exports = routes
const routes = require("express").Router();

const {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} = require("../controllers/user.controller");


// APIS
routes.get("/", getUsers);

routes.get("/:id", getUser);

routes.post("/", createUser);

routes.put("/:id", updateUser);

routes.delete("/:id", deleteUser);

module.exports = routes;

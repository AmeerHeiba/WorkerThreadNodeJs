const { Users } = require("../models/User");
const { request, response } = require("express");

/**
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.getUsers = (req, res) => {
  res.status(200).json(Users);
};

module.exports.getUser = (req, res) => {
  const userId = req.params.id;
  const user = Users.find((user) => user.id == userId);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports.createUser = (req, res) => {
  const user = req.body;
  Users.push(user);
  res.status(201).json(user);
};


module.exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const userIndex = Users.findIndex((user) => user.id == userId);
  
    if (userIndex !== -1) {
      const newUser = req.body;
      Users[userIndex] = { ...Users[userIndex], ...newUser }; // Update the specific user properties
      res.status(200).json(Users[userIndex]);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  };
  

module.exports.deleteUser = (req, res) => {
  const userId = +req.params.id;
  const userIdx = Users.findIndex((user) => user.id == userId);
  if (userId > -1) {
    Users.splice(userIdx, 1);
    res.status(200).json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// nada => none blocking execuse => no heavy code written

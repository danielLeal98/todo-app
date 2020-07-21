const express = require("express");

module.exports = function (server) {
  //API Routes
  const router = express.Router();
  //middlare a partir da url /api
  server.use("/api", router);

  //TODO Routes
  const todoService = require("../api/todo/todoService");
  todoService.register(router, "/todos"); //vai usar todos os metodos do file
  //registrando todos os metodos
};

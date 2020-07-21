const port = 3003;

//é o cara que faz a conversão do corpo da requisição quando chegar
//se for um json ele vai fazer um parse
const bodyParser = require("body-parser");

//servidor node
const express = require("express");

//startar servidor
const server = express();
const allowCors = require("./cors");

//criação de um middware para a requisição
//sempre que chegar uma req que usa urlencode quem faz é o bodyoarser
///extended aceita mais tipos de dados
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function () {
  console.log(`Backend está rodando na porta ${port}.`);
});

module.exports = server;

const Todo = require("./todo");

Todo.methods(["get", "post", "put", "delete"]);
Todo.updateOptions({ new: true, runValidators: true });
//parametro quando o conteudo for atualizado retornar o atualizado

module.exports = Todo;

// Configuring the database
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const url =
  "mongodb+srv://danieljudo:danieljudo@cluster0-g6fdk.mongodb.net/testeMongo?retryWrites=true&w=majority";
// Connecting to the database

mongoose.connect(url || "mongodb://localhost/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("conectado", () => {
  console.log("Mongose conectado!!");
});

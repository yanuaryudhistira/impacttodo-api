const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// ----------------------------------------------------------------------------

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());

//-----------------------------------------------------------------------------

let todoList = [{
    todo: "join impactbyte coding bootcamp",
  },
  {
    todo: "become a fullstack web developer",
  }
];

//-----------------------------------------------------------------------------

app.get("/todo/search", (req, res) => {
  let keyword = req.query.todo;
  let result = todoList.filter(word =>
    todo.word.toLowerCase().includes(keyword.toLowerCase())
  );
  res.send(result);
});

//-----------------------------------------------------------------------------

app.post("/todo", (req, res) => {
  let newTodo = {
    todo: req.body.todo,
  };
  todoList.push(newTodo);
  res.send(todoList);
});

//-----------------------------------------------------------------------------

app.get("/", (req, res) => {
  res.send("Impacttodo Server!");
});

app.get("/todo", (req, res) => {
  res.send(todoList);
});

app.get("/todo/:id", (req, res) => {
  res.send(todoList[req.params.id]);
});

//-----------------------------------------------------------------------------

app.put('/todo/:id', (req, res) => {
  todoList[req.params.id] = req.body.todo
  res.send(todoList);
});

//-----------------------------------------------------------------------------

app.delete("/todo/:id", (req, res) => {
  todoList.splice(req.params.id, 1);
  res.send(todoList);
});

//-----------------------------------------------------------------------------

app.listen(PORT, () => console.log(`impacttodo listening on port ${3000}`));

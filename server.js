const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

let todoList = [{
    todo: "learn NodeJs",
    done: false
  },
  {
    todo: "Learn ReactJs",
    done: false
  }
];

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req,res) => {
  res.send(
    "welcome to my server"
  );
});

app.get("/todo", (req, res) => {
  res.send({
    data: todoList
  });
});

app.get("/todo/:id", (req, res) => {
  let length = todoList.length;
  let index = req.params.id;

  if (index > length - 1) {
    res.send("not found");
  } else {
    res.send({
      data: todoList[index]
    });
  }
});

app.post("/todo", (req, res) => {
  let todo = req.body.todo;
  let done = JSON.parse(req.body.done);

  if (todo === "") {
    res.send("todo cannot be empty");
  } else {
    let newTodo = {
      todo: todo,
      done: done
    };
    todoList.push(newTodo);
    res.send({
      sucess: true,
      data: newTodo
    });
  }
});

app.delete("/todo/:id", (req, res) => {
  let length = todoList.length;
  let index = req.params.id;

  if (index > length - 1) {
    res.send({
      sucess: false,
      message: "data not found"
    });
  } else {
    todoList.splice(index, 1);
    res.send({
      success: true,
      data: todoList
    });
  }
});

app.listen(PORT, () => console.log(`Example app listening on port ${3000}`));

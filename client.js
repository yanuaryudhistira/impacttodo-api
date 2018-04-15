// const axios = require("axios");
let API_url = "http://localhost:3000"
let container = document.getElementById("container");

//Create
function create(todo, status = pending) {
  return axios
    .post(`${API_url}/todo`, {
      todo: todo,
      status: status
    })
    .then(function(rawResponse) {
      console.log("-------------------------------------------");
      console.log("create new todo");
      console.log(rawResponse.data);
      getAll();
    })
    .catch(function(error) {
      console.log(error);
    });
};

//get all
function getAll() {
  return axios
    .get(`${API_url}/todo`)
    .then(rawResponse => {
      let result = "";
      let datas = rawResponse.data;
      for (var i = 0; i < datas.length; i++) {
        result += `<div class="list-todo">${data.todo}</div>`;
      }
      container.innerHTML = result;
    });
    .catch(function(error) {
      console.log(error);
    });
};

//get one
function getOne() {
  return axios
    .get(`${API_url}/todo/1`)
    .then(rawResponse => {
      console.log("-------------------------------------------");
      console.log("get One");
      console.log(rawResponse.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

function delete() => {
  return axios
  .delete(`${API_url}/todo/0`)
  .then(rawResponse => {
    console.log("Delete data");
    console.log(rawResponse.data);
  })
  .catch(error => {
    console.log(error);
  });
};

getAll();

// const axios = require("axios");
let API_url = "http://localhost:3000";
let container = document.getElementById("container");

//-----------------------------------------------------------------------------

function create(todo, status = "success") {
  return axios
    .post(`${API_url}/todo`, {
      todo: todo,
      status: status
    })
    .then(function(rawResponse) {
      console.log(rawResponse.data);
      getAll();
    })
    .catch(function(error) {
      console.log(error);
    });
};

//-----------------------------------------------------------------------------

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
    })
    .catch(function(error) {
      console.log(error);
    });
};

function getOne() {
  return axios
    .get(`${API_url}/todo/1`)
    .then(rawResponse => {
      console.log(rawResponse.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

//-----------------------------------------------------------------------------

function deleteOne() {
  return axios
  .delete(`${API_url}/todo/0`)
  .then(rawResponse => {
    console.log(rawResponse.data);
  })
  .catch(function(error) {
    console.log(error);
  });
};

//-----------------------------------------------------------------------------

getAll();

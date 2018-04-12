const axios = require("axios");
const API_url = "http://localhost:3000"

//get ALL
const getAll = () => {
  return axios
    .get(`${API_url}/todo`)
    .then(rawResponse => {
      console.log("-------------------------------------------");
      console.log("get All");
      console.log(rawResponse.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

//get One
const getOne = () => {
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

//Create new todo
const createNew = () => {
  return axios
    .post(`${API_url}/todo`, {
      todo: "New Todo",
      done: false
    })
    .then(function(rawResponse) {
      console.log("-------------------------------------------");
      console.log("Create new todo");
      console.log(rawResponse.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

const deleteData = () => {
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
// getOne();
// createNew();
// createNew();
// deleteData();
// getAll();

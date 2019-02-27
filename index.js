const express = require('express')
const app = express()
const firebase = require("firebase");
var config = {
    apiKey: "AIzaSyBdZ9qCwG7tYD_CZQEYSYqsoNcgA5wj3r4",
    authDomain: "darq-8e9c0.firebaseapp.com",
    databaseURL: "https://darq-8e9c0.firebaseio.com",
    projectId: "darq-8e9c0",
    storageBucket: "darq-8e9c0.appspot.com",
    messagingSenderId: "953079671231"
  };
firebase.initializeApp(config);
const port = 3000

const db = firebase.firestore();

//app.get('/', (req, res) => {
   
//})

app.post('/tags', req, res => {

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
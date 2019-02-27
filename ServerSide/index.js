const express = require('express')
const bodyParser = require("body-parser");
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
 // res.send("hello world");
//})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/event', (req, res) => {
    const event = req.body;
    addTags(event.tags)
    let addDoc = db.collection('events').add(event).then(ref => {
        console.log('Added document with ID: ', ref.id);
    });
    res.send();
})

function addTags(tagsToAdd) {
    tagsToAdd.forEach((tag) => {
        let newAmount = 1;
        const tagsRef = db.collection('tags').doc(tag);
        const getDoc = tagsRef.get()
        .then(doc => {
          
        if (doc.exists) {
          newAmount += doc.data().amount;   
        }
        tagsRef.set({amount: newAmount});
        })
    })
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
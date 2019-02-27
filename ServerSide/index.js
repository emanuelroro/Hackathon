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
//
//})

app.post('/event', (req, res) => {
    const event = req.body.event;
    let addDoc = db.collection('events').add(event).then(ref => {
        console.log('Added document with ID: ', ref.id);
      });
})

app.get('/events/getByTags', (req, res) => {
  let tags = ['catch'];
  
  let wantedEvents = [];
  let eventsDb = db.collection('events');
  const events = eventsDb.get().then((snapShot) => {
    
    snapShot.forEach((eve) => {
      if(conaitnsArr(eve.data().tags, tags)) {
        wantedEvents.push(eve.data());
      }
    });

    res.send(wantedEvents);
  }).catch(err => {
    console.log('Error getting documents', err);
  });

});

function conaitnsArr(eventTags, searchedTags) {
  let conaints = true;
  searchedTags.forEach((event) => {

    if (!eventTags.includes(event)) {
      conaints = false;
    }
  });

  return (conaints);
}


app.get('/events/getByTitle', (req, res) => {

    let searchedTitle = "";
    let eventsDb = db.collection('events');
    let wantedEvents = [];
    const events = eventsDb.get().then((snapShot) => {
      
      snapShot.forEach((eve) => {
        if(eve.data().title.includes(searchedTitle)) {
          wantedEvents.push(eve.data());
        }
      });

      res.send(wantedEvents);
    }).catch(err => {
      console.log('Error getting documents', err);
    });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
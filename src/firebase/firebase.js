import firebase from 'firebase/app'
import 'firebase/storage';

// Set the configuration for your app
  // TODO: Replace with your project's config object
  const config = {
    apiKey: "AIzaSyDYVwUCNfPnIWFvW8QVRfud20c5cMiz-5k",
    authDomain: "album-3.firebaseapp.com",
    databaseURL: "https://album-3.firebaseio.com",
    projectId: "album-3",
    storageBucket: "album-3.appspot.com",
    messagingSenderId: "486487853703",
    appId: "1:486487853703:web:a4c433269e0c8fd8"
  };
  firebase.initializeApp(config);

  // Get a reference to the storage service, which is used to create references in your storage bucket
const storage = firebase.storage();

// Create a storage reference from our storage service
const storageRef = storage.ref();

// Create a child reference
const imagesRef = storageRef.child('images');
// imagesRef now points to 'images'

// Child references can also take paths delimited by '/'
const spaceRef = storageRef.child('images/space.jpg');
// spaceRef now points to "images/space.jpg"
// imagesRef still points to "images"

var file = 'images/eroi.jpg';
ref.put(file).then(function(snapshot){
    console.log('Uploaded the file');
})

export {
  storage, fireabse as default
}
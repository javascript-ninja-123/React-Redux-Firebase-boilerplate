import firebase from 'firebase';
import {firebaseConfig} from '../config/secret';

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const auth = firebase.auth();



// CRUD
// Create  //post Restful API data to databse (push data to the server)
// Read   // populate data get Restful API (fetch data from the server)
// Update // first fetch data and update it and push again
// Delete // delete data

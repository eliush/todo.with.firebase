import { initializeApp } from 'firebase' ;

const app = initializeApp({
    apiKey: "AIzaSyAEYNMX9flWIUL7FRId_mt_6MW3C915AFs",
    authDomain: "todo-vuefirebase.firebaseapp.com",
    databaseURL: "https://todo-vuefirebase.firebaseio.com",
    projectId: "todo-vuefirebase",
    storageBucket: "todo-vuefirebase.appspot.com",
    messagingSenderId: "994056144013"
  }
)

export const db = app.database();
export const namesRef = db.ref('names');
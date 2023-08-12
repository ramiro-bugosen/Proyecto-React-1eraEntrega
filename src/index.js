import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import {addDoc, collection, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxBn1uh-hkNNZFfPZ7m_F2iugejGPzM8o",
  authDomain: "ecommerce-fastburger.firebaseapp.com",
  projectId: "ecommerce-fastburger",
  storageBucket: "ecommerce-fastburger.appspot.com",
  messagingSenderId: "895302681798",
  appId: "1:895302681798:web:d497964777dd9c4e8343c7"
};

// Iniciar Firebase
export const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
//iterar sobre los datos del mock para que me suba cada objeto a firestore

/*products.forEach((product) => {
  //addDoc funcion que llamo desde firestore, collection funcion desde firestore

  //db variable que llama a getFirestore, "products" es el nombre de nuestra colección
  addDoc(collection(db, 'products'), product)
    .then((docRef) => {
      console.log("documento agregado con id ", docRef.id)
    })
    .catch((error) => {
      console.error("error al agregar el documento", error)
    })
})

categories.forEach((categories) => {
  addDoc(collection(db, 'categories'), categories)
    .then((docRef) => {
      console.log("documento agregado con id ", docRef.id)
    })
    .catch((error) => {
      console.error("error al agregar el documento", error)
    })
})*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

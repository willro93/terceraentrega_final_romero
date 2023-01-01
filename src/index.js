import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyCB7KNA-X5STl4AZDXNZEFPbNdjkPpcTok",
  authDomain: "maguey-ecomerce-1ad4f.firebaseapp.com",
  projectId: "maguey-ecomerce-1ad4f",
  storageBucket: "maguey-ecomerce-1ad4f.appspot.com",
  messagingSenderId: "697205911289",
  appId: "1:697205911289:web:802d3cd1694e81c2b3fc28"
};

const app = initializeApp(firebaseConfig);

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

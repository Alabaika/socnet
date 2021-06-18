import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postData = [
  {message: "Hi, how are you?", likes: 15},
  {message: "It is may be cool", likes: 23},
  {message: "It is may be bad", likes: 47}
]

let dialogsData = [
  {id: 1, name: "Sasha"},
  {id: 2, name: "Krystyna"},
  {id: 3, name: "Tina"},
  {id: 4, name: "Syliko"},
  {id: 5, name: "Iordan"},
  {id: 6, name: "Iordan"}
]
let messagesData = [
  {message: "how are yo man?"},
  {message: "how are yo"},
  {message: "how are "},
  {message: "how are yo "},
  {message: "how are yo ma"}
]



ReactDOM.render(
  <React.StrictMode>
    <App messagesData={messagesData} dialogsData={dialogsData} postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

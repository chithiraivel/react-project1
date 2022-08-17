import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './Main';
import Home from './Home/Home';
// const el = React.createElement(
//   "div",
//   {},
//   React.createElement('h1',{},'every one')
// );


// const el =<h1 style={{color:'red',textAlign:'center'}}>hello<div>world {3+4}</div></h1>

// function El() {
//   return (
//   <h1 style={{color:'red',textAlign:'center'}}>hello<div>world {3+4}</div></h1>
//   );
// }

// function El1() {
//   return (
//   <h1>first</h1>
//   );
// }

// function El2() {
//   return (
//   <h1>second</h1>
//   );
// }

// function Main() {
//   return (
//   // <h1>main</h1>,
// <div>
//   <El1/>
//   <El2/>
//   <El/>
//   </div>
//   );
// }


// props

// function Main1(props){
//     console.log(props);
//     return <div>Main {props.name}</div>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

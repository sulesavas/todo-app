import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
var product ={
 name:"",
 price: "",
 desc: "En uygun fiyat",
}

function getName(name) {
  if(name) {
    return name;
  }

  else {
    return 'no name';
  }
}



const template = (
  <div id="product-details">
    <h1 id="header">Hello World</h1>
    <h2 id="product-name">name: {getName(product.name)}</h2>
    {(product.price && product.price>0) && <p>price:{product.price} TL</p>}
    <p id="product-desc">description: {product.desc ? product.desc : 'no desc'}</p>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


ReactDOM.render(template, root);
reportWebVitals();

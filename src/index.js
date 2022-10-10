import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './lib/Modal'
import Open from "./lib/Modal/Open.js";


ReactDOM.render(
  <React.StrictMode>
  <button onClick={Open}>Save</button> <Modal Text="Ceci est un modal" modalClass="" showClose={true} outsideClose={true}/>
  </React.StrictMode>,
  document.getElementById('root')
);


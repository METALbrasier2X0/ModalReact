import React from 'react'
import ReactDOM from 'react-dom';


import Closemodal from './Close.js';
import './Style.css';

/**
 * Code to show the home page
 * @return  {React element}             Containers that shows the home page   
 */



function Modal(props) {

   return (
      <>
      <div  id="confirmation" className="modal">
      <div className="modal-outside" onClick={Closemodal}> </div>
      <div className="modal-content">
      {props.showClose === true && <span className="close" onClick={Closemodal} id="close">&times;</span> }
      <p>{props.Text}</p>
      </div></div>
      </>
  );
}


export default Modal;
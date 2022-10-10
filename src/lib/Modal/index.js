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
      <div  id="confirmation" className="modal" style={{ backgroundColor: props.backgroundHue}}>
      {props.outsideClose === true && <div className="modal-outside" onClick={Closemodal}> </div> }
      <div id="content" className={`modal-content ${props.modalClass}`}>
      {props.showClose === true && <span className={`close ${props.closeClass}`} onClick={Closemodal} id="close">&times;</span> }
      <p>{props.Text}</p>
      </div></div>
      </>
  );
}


export default Modal;
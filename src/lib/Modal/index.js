import React from 'react'
import ReactDOM from 'react-dom';


import Closemodal from './Close.js';
import './Style.css';

/**
 * Code to show the home page
 * @param {Props}                       Props data - The input and options for generating the modal 
 * @return  {React element}             Containers that shows the modal  
 */


function Modal(props) {

   return (
      <>
      <div  id="confirmation" className={props.blockerClass} style={{ backgroundColor: props.backgroundHue}}>
      {props.outsideClose === true && <div className="modal-outside" onClick={Closemodal}> </div> }
      <div id="content" className={props.modalClass}>
      {props.showClose === true && <span className={props.closeClass} onClick={Closemodal} id="close">&times;</span> }
      {props.Content}
      </div></div>
      </>
  );
}

/*Default values */

Modal.defaultProps = {
    modalClass: "modal-content",
    closeClass: "close",
   blockerClass:"modal"}

export default Modal;
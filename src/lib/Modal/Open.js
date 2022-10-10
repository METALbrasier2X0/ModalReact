import React from 'react';
import ReactDOM from 'react-dom';


/**
 * Code to show the Modal
 * @return  {React element}             Functions that open the modal by changing it's display   
 */


function Open() {

   const modal = document.getElementById('confirmation');
   const content =  document.getElementById('content');
   modal.style.display = 'block';
}

export default Open;
import React from 'react';
import ReactDOM from 'react-dom';


/**
 * Code to show the home page
 * @return  {React element}             Function that closes the modal by chaning it's display
 */


function Closemodal() {

const modal = document.getElementById('confirmation');

modal.style.display = 'none';
}


export default Closemodal;
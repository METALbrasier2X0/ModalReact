# ModalReact

This is a React Library to Create modals in a React app

## Setup in Project :


```
  import Modal from 'modal-react-raphael' 
  import Open from 'modal-react-raphael/dist/Open.js' 
```

Open is the function to Open the modal, you need to call it with `Open()` or on any event like `{Open}`
than put `<Modal/>` on the page where you want your modal to be with the options you desire as Props.


## Options : 

* Content : (String) Content to show in the modal, you can also put JSX and HTML to integrate more complex integrations
* modalClass : (String) Replaces the class you want to attribute to the modal content
* closeClass: (String) Replaces the class you want to attribute to close div
* blockerClass: (String) Replaces the class you want to attribute to the div that support the modal (the main div)
* showClose : (Boolean) Show the Close X button in the modal
* outsideClose : (Boolean) Close the modal when clicking outside the modal
* backgroundHue : (String, HEX value) Choice for the background color




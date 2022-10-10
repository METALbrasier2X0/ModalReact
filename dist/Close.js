"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

/**
 * Code to show the home page
 * @return  {React element}             Function that closes the modal by chaning it's display
 */
function Closemodal() {
  var modal = document.getElementById('confirmation');
  modal.style.display = 'none';
}

var _default = Closemodal;
exports.default = _default;
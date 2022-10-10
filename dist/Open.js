"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

/**
 * Code to show the Modal
 * @return  {React element}             Functions that open the modal by changing it's display   
 */
function Open() {
  var modal = document.getElementById('confirmation');
  var content = document.getElementById('content');
  modal.style.display = 'block';
}

var _default = Open;
exports.default = _default;
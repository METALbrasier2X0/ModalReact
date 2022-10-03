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
 * @return  {React element}             Containers that shows the home page   
 */
function Open() {
  var modal = document.getElementById('confirmation');
  modal.style.display = 'block';
}

var _default = Open;
exports.default = _default;
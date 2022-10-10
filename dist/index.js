"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Close = _interopRequireDefault(require("./Close.js"));

require("./Style.css");

/**
 * Code to show the home page
 * @param {Props}                       Props data - The input and options for generating the modal 
 * @return  {React element}             Containers that shows the modal  
 */
function Modal(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "confirmation",
    className: props.blockerClass,
    style: {
      backgroundColor: props.backgroundHue
    }
  }, props.outsideClose === true && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-outside",
    onClick: _Close.default
  }, " "), /*#__PURE__*/_react.default.createElement("div", {
    id: "content",
    className: props.modalClass
  }, props.showClose === true && /*#__PURE__*/_react.default.createElement("span", {
    className: props.closeClass,
    onClick: _Close.default,
    id: "close"
  }, "\xD7"), props.Content)));
}
/*Default values */


Modal.defaultProps = {
  modalClass: "modal-content",
  closeClass: "close",
  blockerClass: "modal"
};
var _default = Modal;
exports.default = _default;
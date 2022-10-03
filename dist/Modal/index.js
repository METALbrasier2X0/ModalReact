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
 * @return  {React element}             Containers that shows the home page   
 */
function Modal(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "confirmation",
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-outside",
    onClick: _Close.default
  }, " "), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, props.showClose === true && /*#__PURE__*/_react.default.createElement("span", {
    className: "close",
    onClick: _Close.default,
    id: "close"
  }, "\xD7"), /*#__PURE__*/_react.default.createElement("p", null, props.Text))));
}

var _default = Modal;
exports.default = _default;
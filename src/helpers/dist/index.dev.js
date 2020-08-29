"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var closeHeader = (0, _mobxReact.inject)("NavStore")((0, _mobxReact.observer)(function (_ref) {
  var NavStore = _ref.NavStore;
  return NavStore.setIsOpen(false);
}));
exports.closeHeader = closeHeader;
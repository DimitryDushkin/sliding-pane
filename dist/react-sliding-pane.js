'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _pt = _interopDefault(require('prop-types'));
var React = _interopDefault(require('react'));
var Modal = _interopDefault(require('react-modal'));

var CLOSE_TIMEOUT = 500;
function ReactSlidingPane(_ref) {
  var isOpen = _ref.isOpen,
      title = _ref.title,
      subtitle = _ref.subtitle,
      onRequestClose = _ref.onRequestClose,
      onAfterOpen = _ref.onAfterOpen,
      children = _ref.children,
      className = _ref.className,
      overlayClassName = _ref.overlayClassName,
      closeIcon = _ref.closeIcon,
      _ref$from = _ref.from,
      from = _ref$from === void 0 ? "right" : _ref$from,
      width = _ref.width,
      shouldCloseOnEsc = _ref.shouldCloseOnEsc,
      _ref$hideHeader = _ref.hideHeader,
      hideHeader = _ref$hideHeader === void 0 ? false : _ref$hideHeader;
  var directionClass = "slide-pane_from_".concat(from);
  return /*#__PURE__*/React.createElement(Modal, {
    ariaHideApp: false,
    className: "slide-pane ".concat(directionClass, " ").concat(className || ""),
    style: {
      content: {
        width: width || "80%"
      }
    },
    overlayClassName: "slide-pane__overlay ".concat(overlayClassName || ""),
    closeTimeoutMS: CLOSE_TIMEOUT,
    isOpen: isOpen,
    shouldCloseOnEsc: shouldCloseOnEsc,
    onAfterOpen: onAfterOpen,
    onRequestClose: onRequestClose,
    contentLabel: "Modal \"".concat(title || "", "\"")
  }, !hideHeader && /*#__PURE__*/React.createElement("div", {
    className: "slide-pane__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "slide-pane__close",
    onClick: onRequestClose
  }, closeIcon || /*#__PURE__*/React.createElement(IconClose, null)), /*#__PURE__*/React.createElement("div", {
    className: "slide-pane__title-wrapper"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "slide-pane__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "slide-pane__subtitle"
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    className: "slide-pane__content"
  }, children));
}
ReactSlidingPane.propTypes = {
  isOpen: _pt.bool.isRequired,
  title: _pt.node,
  subtitle: _pt.node,
  from: _pt.oneOf(["left", "right", "bottom"]),
  children: _pt.node.isRequired,
  className: _pt.string,
  overlayClassName: _pt.string,
  width: _pt.string,
  closeIcon: _pt.node,
  shouldCloseOnEsc: _pt.bool,
  hideHeader: _pt.bool,
  onRequestClose: _pt.func.isRequired,
  onAfterOpen: _pt.func
};

function IconClose() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13 22"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z"
  }));
}

exports.ReactSlidingPane = ReactSlidingPane;
exports.default = ReactSlidingPane;

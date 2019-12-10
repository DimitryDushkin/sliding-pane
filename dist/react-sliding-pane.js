import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

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
      from = _ref$from === void 0 ? 'right' : _ref$from,
      width = _ref.width,
      shouldCloseOnEsc = _ref.shouldCloseOnEsc;
  var directionClass = "slide-pane_from_".concat(from);
  return React.createElement(Modal, {
    className: "slide-pane ".concat(directionClass, " ").concat(className || ''),
    style: {
      content: {
        width: width || '80%'
      }
    },
    overlayClassName: "slide-pane__overlay ".concat(overlayClassName || ''),
    closeTimeoutMS: CLOSE_TIMEOUT,
    isOpen: isOpen,
    shouldCloseOnEsc: shouldCloseOnEsc,
    onAfterOpen: onAfterOpen,
    onRequestClose: onRequestClose,
    contentLabel: "Modal \"".concat(title || '', "\"")
  }, React.createElement("div", {
    className: "slide-pane__header"
  }, React.createElement("div", {
    className: "slide-pane__close",
    onClick: onRequestClose
  }, closeIcon || React.createElement(IconClose, null)), React.createElement("div", {
    className: "slide-pane__title-wrapper"
  }, React.createElement("h2", {
    className: "slide-pane__title"
  }, title), React.createElement("div", {
    className: "slide-pane__subtitle"
  }, subtitle))), React.createElement("div", {
    className: "slide-pane__content"
  }, children));
}
ReactSlidingPane.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.any,
  subtitle: PropTypes.any,
  onRequestClose: PropTypes.func,
  onAfterOpen: PropTypes.func,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  overlayClassName: PropTypes.string,
  from: PropTypes.oneOf(['left', 'right', 'bottom']),
  width: PropTypes.string,
  closeIcon: PropTypes.any,
  shouldCloseOnEsc: PropTypes.bool
};

function IconClose() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13 22"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z"
  }));
}

export default ReactSlidingPane;

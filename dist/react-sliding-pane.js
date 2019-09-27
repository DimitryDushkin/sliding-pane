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
      width = _ref.width;
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
    onAfterOpen: onAfterOpen,
    onRequestClose: onRequestClose,
    contentLabel: "Modal \"".concat(title || '', "\"")
  }, React.createElement("div", {
    className: "slide-pane__header"
  }, closeIcon ? closeIcon : React.createElement(IconClose, null)), React.createElement("div", {
    className: "slide-pane__title-wrapper"
  }, React.createElement("h2", {
    className: "slide-pane__title"
  }, title), React.createElement("div", {
    className: "slide-pane__subtitle"
  }, subtitle))), React.createElement("div", {
    className: "slide-pane__close",
    onClick: onRequestClose
  }, React.createElement("div", {
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
  closeIcon: PropTypes.any
};

function IconClose() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    stroke:"black",
    strokeWidth:"2",
    d: "M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"
  }));
}

export default ReactSlidingPane;

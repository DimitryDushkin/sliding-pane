'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _pt = require('prop-types');
var React = require('react');
var Modal = require('react-modal');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _pt__default = /*#__PURE__*/_interopDefaultLegacy(_pt);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Modal__default = /*#__PURE__*/_interopDefaultLegacy(Modal);

var CLOSE_TIMEOUT = 500;

function useUpdateStateIfMounted(initialValue) {
  var isMountedRef = React.useRef(true);
  React.useEffect(function () {
    isMountedRef.current = true;
    return function () {
      isMountedRef.current = false;
    };
  }, []);
  var useStateResult = React.useState(initialValue);
  var state = useStateResult[0];
  var setState = useStateResult[1];

  var setStateIfMounted = function setStateIfMounted(value) {
    if (isMountedRef.current === true) {
      setState(value);
    }
  };

  return [state, setStateIfMounted];
}

function ReactSlidingPane(_ref) {
  var isOpen = _ref.isOpen,
      title = _ref.title,
      subtitle = _ref.subtitle,
      onRequestClose = _ref.onRequestClose,
      onAfterOpen = _ref.onAfterOpen,
      onAfterClose = _ref.onAfterClose,
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
  var directionClass = "slide-pane_from_".concat(from); // Not usign array destruction to reduce bundle size by not introducing polyfill

  var state = useUpdateStateIfMounted(false);
  var wasOpen = state[0];
  var setWasOpen = state[1];

  var handleAfterOpen = function handleAfterOpen() {
    // Timeout fixes animation in Safari
    onAfterOpen === null || onAfterOpen === void 0 ? void 0 : onAfterOpen();
    setTimeout(function () {
      setWasOpen(true);
    }, 0);
  };

  var handleAfterClose = function handleAfterClose() {
    onAfterClose === null || onAfterClose === void 0 ? void 0 : onAfterClose();
    setTimeout(function () {
      setWasOpen(false);
    }, 0);
  };

  return /*#__PURE__*/React__default["default"].createElement(Modal__default["default"], {
    ariaHideApp: false,
    overlayClassName: {
      base: "slide-pane__overlay ".concat(overlayClassName || ""),
      afterOpen: wasOpen ? "overlay-after-open" : "",
      beforeClose: "overlay-before-close"
    },
    className: {
      base: "slide-pane ".concat(directionClass, " ").concat(className || ""),
      afterOpen: wasOpen ? "content-after-open" : "",
      beforeClose: "content-before-close"
    },
    style: {
      content: {
        width: width || "80%"
      }
    },
    closeTimeoutMS: CLOSE_TIMEOUT,
    isOpen: isOpen !== null && isOpen !== void 0 ? isOpen : false,
    shouldCloseOnEsc: shouldCloseOnEsc,
    onAfterOpen: handleAfterOpen,
    onAfterClose: handleAfterClose,
    onRequestClose: onRequestClose,
    contentLabel: "Modal \"".concat(title || "", "\"")
  }, !hideHeader && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "slide-pane__header"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "slide-pane__close",
    onClick: onRequestClose,
    role: "button",
    tabIndex: 0
  }, closeIcon || /*#__PURE__*/React__default["default"].createElement(IconClose, null)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "slide-pane__title-wrapper"
  }, /*#__PURE__*/React__default["default"].createElement("h2", {
    className: "slide-pane__title"
  }, title), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "slide-pane__subtitle"
  }, subtitle))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "slide-pane__content"
  }, children));
}
ReactSlidingPane.propTypes = {
  isOpen: _pt__default["default"].bool,
  title: _pt__default["default"].node,
  subtitle: _pt__default["default"].node,
  from: _pt__default["default"].oneOf(["left", "right", "bottom"]),
  children: _pt__default["default"].node.isRequired,
  className: _pt__default["default"].string,
  overlayClassName: _pt__default["default"].string,
  width: _pt__default["default"].string,
  closeIcon: _pt__default["default"].node,
  shouldCloseOnEsc: _pt__default["default"].bool,
  hideHeader: _pt__default["default"].bool,
  onRequestClose: _pt__default["default"].func.isRequired,
  onAfterOpen: _pt__default["default"].func,
  onAfterClose: _pt__default["default"].func
};

function IconClose() {
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13 22"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z"
  }));
}

exports.ReactSlidingPane = ReactSlidingPane;
exports["default"] = ReactSlidingPane;

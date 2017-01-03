(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-addons-css-transition-group"), require("react"), require("react-modal"));
	else if(typeof define === 'function' && define.amd)
		define("ReactSlidingPane", ["react-addons-css-transition-group", "react", "react-modal"], factory);
	else if(typeof exports === 'object')
		exports["ReactSlidingPane"] = factory(require("react-addons-css-transition-group"), require("react"), require("react-modal"));
	else
		root["ReactSlidingPane"] = factory(root[undefined], root["React"], root["ReactModal"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_modal__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_addons_css_transition_group__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_styl__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_styl__);
/* harmony export (immutable) */ exports["default"] = ReactSlidingPane;






var CLOSE_TIMEOUT = 500;

function ReactSlidingPane(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_modal___default.a,
        {
            className: 'slide-pane ' + (props.className || ''),
            overlayClassName: 'slide-pane__overlay',
            closeTimeoutMS: CLOSE_TIMEOUT,
            isOpen: props.isOpen,
            onAfterOpen: props.onAfterOpen,
            onRequestClose: props.onRequestClose,
            contentLabel: 'Modal "' + props.title + '"' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'slide-pane__header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'slide-pane__close', onClick: props.onRequestClose },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'svg',
                    { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 13 22' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { fill: 'currentColor', fillRule: 'evenodd', d: 'M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z' })
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'slide-pane__title-wrapper' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h2',
                    { className: 'slide-pane__title' },
                    props.title
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'slide-pane__subtitle' },
                    props.subtitle
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'slide-pane__content' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_addons_css_transition_group___default.a,
                {
                    transitionName: 'content-appear',
                    transitionEnter: false,
                    transitionLeaveTimeout: CLOSE_TIMEOUT },
                props.isOpen ? props.children : null
            )
        )
    );
}

ReactSlidingPane.propTypes = {
    isOpen: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool.isRequired,
    title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].any,
    subtitle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].any,
    onRequestClose: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
    onAfterOpen: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
    children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].any.isRequired,
    className: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
};

/***/ }
/******/ ]);
});
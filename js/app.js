(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["app"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main-global.scss */ "./src/scss/main-global.scss");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var dev_vendors_dev_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dev-vendors/dev-widget */ "./src/js/dev-vendors/dev-widget.js");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
// scss


// js




var styles = ['color: #fff', 'background: #cf8e1f'].join(';');
var message = 'Developed by Glivera-team https://glivera-team.com/';
// eslint-disable-next-line no-console
console.info('%c%s', styles, message);
// -------------------  dev widget
if (utils_constants__WEBPACK_IMPORTED_MODULE_2__.ENV_STATUS.projectDevStatus) {
  // pageWidgetInit();
}
// -------------------  dev widget###
// -------------------  import sprite-icons svg
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(__webpack_require__("./src/images/icons/sprite-icons sync recursive \\.svg$"));
// -------------------  import sprite-icons svg###

// -------------------  init App
(0,utils__WEBPACK_IMPORTED_MODULE_1__.documentReady)(function () {
  var appInit = new _js_app__WEBPACK_IMPORTED_MODULE_4__["default"]();
});
// -------------------  init App##

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var layout_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! layout/layout */ "./src/js/layout/layout.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
    this.$htmlTag = document.querySelector('html');
    this.pageName = this.$htmlTag.dataset.templateName && this.$htmlTag.dataset.templateName.length > 0 ? this.$htmlTag.dataset.templateName : null;
    this.init = this.init.bind(this);
    this.init();
  }
  _createClass(App, [{
    key: "importPage",
    value: function importPage() {
      if (this.pageName && this.pageName !== null) {
        __webpack_require__("./src/js/pages lazy recursive ^\\.\\/.*$")("./".concat(this.pageName)).then(function (_ref) {
          var pageFunc = _ref.default;
          var newPage = pageFunc();
        }).catch(function (error) {
          console.error('Failed to load page, check data-template-name at root if correct');
          console.dir(error, error.stack);
        });
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      var initLayout = (0,layout_layout__WEBPACK_IMPORTED_MODULE_0__["default"])();
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.pageLoad)(function () {
        document.body.classList.add('body--loaded');
      });
      setTimeout(function () {
        _this.importPage();
      }, 0);
    }
  }]);
  return App;
}();


/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");

var header = function header() {
  var SELECTORS = {
    header: '.header',
    menuTrigger: '.js-header-menu-trigger'
  };
  var CLASSNAMES = {
    bodyOpenMenuState: 'body--open_menu_state',
    headerScrollState: 'header--scroll_state',
    headerScrollPos: 'header--pos_state'
  };
  var $body = document.body;
  var $header = document.querySelector(SELECTORS.header);
  var $menuTriggers = document.querySelectorAll(SELECTORS.menuTrigger);
  var isMenuOpen = false;
  var prevScrollPos = window.scrollY;
  var handleTriggerClick = function handleTriggerClick() {
    if (!isMenuOpen) {
      $body.classList.add(CLASSNAMES.bodyOpenMenuState);
      isMenuOpen = true;
    } else {
      $body.classList.remove(CLASSNAMES.bodyOpenMenuState);
      isMenuOpen = false;
    }
  };
  var headerScroll = function headerScroll(windowScrollTop) {
    if (windowScrollTop > 10 && !$header.classList.contains(CLASSNAMES.headerScrollState)) {
      $header.classList.add(CLASSNAMES.headerScrollState);
    } else if (windowScrollTop <= 10 && $header.classList.contains(CLASSNAMES.headerScrollState)) {
      $header.classList.remove(CLASSNAMES.headerScrollState);
    }
    if (prevScrollPos < window.scrollY) {
      $header.classList.add(CLASSNAMES.headerScrollPos);
    } else {
      $header.classList.remove(CLASSNAMES.headerScrollPos);
    }
    prevScrollPos = window.scrollY;
  };
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.exist)($header)) return;
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onWindowScroll)(headerScroll);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.exist)($menuTriggers)) return;
  $menuTriggers.forEach(function ($trigger) {
    $trigger.addEventListener('click', function () {
      handleTriggerClick();
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./src/js/dev-vendors/dev-widget.js":
/*!******************************************!*\
  !*** ./src/js/dev-vendors/dev-widget.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-plusplus */
var pageWidget = function pageWidget(pages) {
  var widgetWrap = document.createElement('div');
  widgetWrap.className = 'widget_wrap';
  var widgetList = '';
  for (var i = 0; i < pages.length; i++) {
    widgetList += "<li class=\"widget_item\"><a class=\"widget_link\" href=\"".concat(pages[i], ".html\">").concat(pages[i], "</a></li>");
  }
  widgetWrap.innerHTML = "<ul class=\"widget_list\">".concat(widgetList, "</ul>");
  document.body.appendChild(widgetWrap);
  var widgetStyles = '<style>body {position:relative} .widget_wrap{position:absolute;top:100px;left:0;z-index:9999;padding:10px 20px;background:#222;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:"Navigation menu";color:white;position:absolute;top:0;left:100%;width:auto;height:auto;padding:10px;text-transform:uppercase;background:#222;cursor:pointer}.widget_wrap:hover,.widget_wrap:active,.widget_wrap:focus{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline}  </style>';
  widgetWrap.innerHTML += widgetStyles;
};
var pageWidgetArray = [];
var pagesArray = ["article.pug","index.pug","ui.pug"];
var pageWidgetInit = function pageWidgetInit() {
  if (typeof pagesArray !== 'undefined' && pagesArray.length > 0) {
    // console.log('dev functions loaded');

    pagesArray.forEach(function (page) {
      var pageName = page.split('.').slice(0, -1).join('.');
      pageWidgetArray.push(pageName);
    });

    // console.log(pageWidgetArray);
    pageWidget(pageWidgetArray);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageWidgetInit);

/***/ }),

/***/ "./src/js/layout/layout.js":
/*!*********************************!*\
  !*** ./src/js/layout/layout.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./src/js/components/header.js");
// ------------------- imports

// ------------------- imports###

// ------------------  import components


// ------------------  import components###

var layout = function layout() {
  (0,utils__WEBPACK_IMPORTED_MODULE_0__.onWindowResize)(function () {
    (0,utils__WEBPACK_IMPORTED_MODULE_0__.calcViewportHeight)();
  });
  (0,utils__WEBPACK_IMPORTED_MODULE_0__.calcViewportHeight)();
  (0,_components_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);

/***/ }),

/***/ "./src/js/utils/constants.js":
/*!***********************************!*\
  !*** ./src/js/utils/constants.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BREAKPOINTS: () => (/* binding */ BREAKPOINTS),
/* harmony export */   BUILD_PATHS: () => (/* binding */ BUILD_PATHS),
/* harmony export */   DEFAULT_GSAP_EASE: () => (/* binding */ DEFAULT_GSAP_EASE),
/* harmony export */   ENV_STATUS: () => (/* binding */ ENV_STATUS),
/* harmony export */   RADIAN: () => (/* binding */ RADIAN)
/* harmony export */ });
var ENV_STATUS = {
  projectDevStatus: "development" === 'development',
  projectPreviewStatus: "development" === 'preview',
  projectWpBuildStatus: "development" === 'wp'
};
var phpVars = {
  themeUrl: ''
};
var BUILD_PATHS = {
  // eslint-disable-next-line no-undef
  spritePath:  false ? 0 : 'images/sprite/sprite.svg'
};
var RADIAN = Math.PI / 180;
var DEFAULT_GSAP_EASE = 'expo';
// similar css ease — cubic-bezier(.19, 1, .22, 1)

var BREAKPOINTS = {
  mediaPoint1: 1024,
  mediaPoint2: 768,
  mediaPoint3: 480,
  mediaPoint4: 320
};

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcMobileRemValue: () => (/* binding */ calcMobileRemValue),
/* harmony export */   calcRemValue: () => (/* binding */ calcRemValue),
/* harmony export */   calcViewportHeight: () => (/* binding */ calcViewportHeight),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   debounceImmediate: () => (/* binding */ debounceImmediate),
/* harmony export */   detectUsersOS: () => (/* binding */ detectUsersOS),
/* harmony export */   documentReady: () => (/* binding */ documentReady),
/* harmony export */   exist: () => (/* binding */ exist),
/* harmony export */   getRandom: () => (/* binding */ getRandom),
/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt),
/* harmony export */   getWindowSize: () => (/* binding */ getWindowSize),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isTouchDevice: () => (/* binding */ isTouchDevice),
/* harmony export */   onWindowChangeOrientation: () => (/* binding */ onWindowChangeOrientation),
/* harmony export */   onWindowResize: () => (/* binding */ onWindowResize),
/* harmony export */   onWindowScroll: () => (/* binding */ onWindowScroll),
/* harmony export */   pageLoad: () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var ismobilejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ismobilejs */ "./node_modules/ismobilejs/esm/index.js");

var exist = function exist(elementOrArray) {
  if (!elementOrArray && elementOrArray !== 0) return false;
  if (elementOrArray.length === 0) {
    return false;
  }
  return true;
};
function debounce(delay, fn) {
  var timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(function () {
      fn.apply(void 0, args);
      timerId = null;
    }, delay);
  };
}
function debounceImmediate(delay, fn) {
  var fired = false;
  return function () {
    if (!fired) {
      fn.apply(void 0, arguments);
      fired = true;
      setTimeout(function () {
        fired = false;
      }, delay);
    }
  };
}
var isTouchDevice = function isTouchDevice() {
  return 'ontouchstart' in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
};
var calcViewportHeight = function calcViewportHeight() {
  var isMobileData = (0,ismobilejs__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var isApple = isMobileData.apple.phone;
  var isAndroid = isMobileData.android.phone;
  var isSeven = isMobileData.seven_inch;
  if (isApple || isAndroid || isSeven || isTouchDevice()) {
    var vh = window.innerHeight * 0.01;
    // console.log(vh);
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  }
};
var calcRemValue = function calcRemValue(_ref) {
  var windowWidth = _ref.windowWidth,
    windowHeight = _ref.windowHeight;
  var remValue = windowWidth * 0.5625 > windowHeight ? windowHeight / 800 * 10 : windowWidth / 1440 * 10;
  document.documentElement.style.setProperty('--rem', "".concat(remValue, "px"));
};
var calcMobileRemValue = function calcMobileRemValue(_ref2) {
  var windowHeight = _ref2.windowHeight;
  var mobileRemValue = windowHeight / 800 * 10;
  document.documentElement.style.setProperty('--mobile-rem', "".concat(mobileRemValue, "px"));
};
var getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
var getRandom = function getRandom(min, max) {
  return Math.random() * (max - min) + min;
};
function isFunction(func) {
  return func instanceof Function;
}
function getWindowSize() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  return {
    windowWidth: windowWidth,
    windowHeight: windowHeight
  };
}
var onWindowResize = function onWindowResize(cb) {
  if (!cb && !isFunction(cb)) return;
  var handleResize = function handleResize() {
    cb();
  };
  window.addEventListener('resize', debounce(15, handleResize));
  handleResize();
};
var detectUsersOS = function detectUsersOS() {
  if (window.navigator.userAgent.indexOf('Win') !== -1) return 'Windows OS';
  if (window.navigator.userAgent.indexOf('Mac') !== -1) return 'Macintosh';
  if (window.navigator.userAgent.indexOf('Linux') !== -1) return 'Linux OS';
  if (window.navigator.userAgent.indexOf('Android') !== -1) return 'Android OS';
  if (window.navigator.userAgent.indexOf('like Mac') !== -1) return 'iOS';
  return null;
};
var onWindowChangeOrientation = function onWindowChangeOrientation(cb) {
  if (!cb && !isFunction(cb) || !isTouchDevice()) return;
  var _getWindowSize = getWindowSize(),
    windowWidth = _getWindowSize.windowWidth;
  var handleResize = function handleResize() {
    var _getWindowSize2 = getWindowSize(),
      newWindowWidth = _getWindowSize2.windowWidth;
    if (windowWidth !== newWindowWidth) cb();
    windowWidth = newWindowWidth;
  };
  window.addEventListener('resize', debounce(100, handleResize));
};
var onWindowScroll = function onWindowScroll(cb) {
  if (!cb && !isFunction(cb)) return;
  var handleScroll = function handleScroll() {
    cb(window.pageYOffset);
  };
  window.addEventListener('scroll', debounce(15, handleScroll));
  handleScroll();
};
var documentReady = function documentReady(cb) {
  if (!cb && !isFunction(cb)) return;
  document.addEventListener('DOMContentLoaded', cb);
};
var pageLoad = function pageLoad(cb) {
  if (!cb && !isFunction(cb)) return;
  window.addEventListener('load', cb);
};

/***/ }),

/***/ "./node_modules/ismobilejs/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/ismobilejs/esm/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _isMobile__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isMobile */ "./node_modules/ismobilejs/esm/isMobile.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ismobilejs/esm/isMobile.js":
/*!*************************************************!*\
  !*** ./node_modules/ismobilejs/esm/isMobile.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isMobile)
/* harmony export */ });
var appleIphone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var appleUniversal = /\biOS-universal(?:.+)Mac\b/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i;
var androidTablet = /Android/i;
var amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
var amazonTablet = /Silk/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i;
var otherBlackBerry = /BlackBerry/i;
var otherBlackBerry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i;
var isAppleTabletOnIos13 = function (navigator) {
    return (typeof navigator !== 'undefined' &&
        navigator.platform === 'MacIntel' &&
        typeof navigator.maxTouchPoints === 'number' &&
        navigator.maxTouchPoints > 1 &&
        typeof MSStream === 'undefined');
};
function createMatch(userAgent) {
    return function (regex) { return regex.test(userAgent); };
}
function isMobile(param) {
    var nav = {
        userAgent: '',
        platform: '',
        maxTouchPoints: 0
    };
    if (!param && typeof navigator !== 'undefined') {
        nav = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0
        };
    }
    else if (typeof param === 'string') {
        nav.userAgent = param;
    }
    else if (param && param.userAgent) {
        nav = {
            userAgent: param.userAgent,
            platform: param.platform,
            maxTouchPoints: param.maxTouchPoints || 0
        };
    }
    var userAgent = nav.userAgent;
    var tmp = userAgent.split('[FBAN');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    tmp = userAgent.split('Twitter');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    var match = createMatch(userAgent);
    var result = {
        apple: {
            phone: match(appleIphone) && !match(windowsPhone),
            ipod: match(appleIpod),
            tablet: !match(appleIphone) &&
                (match(appleTablet) || isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone),
            universal: match(appleUniversal),
            device: (match(appleIphone) ||
                match(appleIpod) ||
                match(appleTablet) ||
                match(appleUniversal) ||
                isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone)
        },
        amazon: {
            phone: match(amazonPhone),
            tablet: !match(amazonPhone) && match(amazonTablet),
            device: match(amazonPhone) || match(amazonTablet)
        },
        android: {
            phone: (!match(windowsPhone) && match(amazonPhone)) ||
                (!match(windowsPhone) && match(androidPhone)),
            tablet: !match(windowsPhone) &&
                !match(amazonPhone) &&
                !match(androidPhone) &&
                (match(amazonTablet) || match(androidTablet)),
            device: (!match(windowsPhone) &&
                (match(amazonPhone) ||
                    match(amazonTablet) ||
                    match(androidPhone) ||
                    match(androidTablet))) ||
                match(/\bokhttp\b/i)
        },
        windows: {
            phone: match(windowsPhone),
            tablet: match(windowsTablet),
            device: match(windowsPhone) || match(windowsTablet)
        },
        other: {
            blackberry: match(otherBlackBerry),
            blackberry10: match(otherBlackBerry10),
            opera: match(otherOpera),
            firefox: match(otherFirefox),
            chrome: match(otherChrome),
            device: match(otherBlackBerry) ||
                match(otherBlackBerry10) ||
                match(otherOpera) ||
                match(otherFirefox) ||
                match(otherChrome)
        },
        any: false,
        phone: false,
        tablet: false
    };
    result.any =
        result.apple.device ||
            result.android.device ||
            result.windows.device ||
            result.other.device;
    result.phone =
        result.apple.phone || result.android.phone || result.windows.phone;
    result.tablet =
        result.apple.tablet || result.android.tablet || result.windows.tablet;
    return result;
}
//# sourceMappingURL=isMobile.js.map

/***/ }),

/***/ "./src/scss/main-global.scss":
/*!***********************************!*\
  !*** ./src/scss/main-global.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/icons/sprite-icons/arr.svg":
/*!***********************************************!*\
  !*** ./src/images/icons/sprite-icons/arr.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "arr-usage",
      viewBox: "0 0 17.21 8",
      url: "/images/sprite/" + "sprite.svg#arr-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/facebook.svg":
/*!****************************************************!*\
  !*** ./src/images/icons/sprite-icons/facebook.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "facebook-usage",
      viewBox: "0 0 10 19",
      url: "/images/sprite/" + "sprite.svg#facebook-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/linkedin.svg":
/*!****************************************************!*\
  !*** ./src/images/icons/sprite-icons/linkedin.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "linkedin-usage",
      viewBox: "0 0 20 20",
      url: "/images/sprite/" + "sprite.svg#linkedin-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/mail.svg":
/*!************************************************!*\
  !*** ./src/images/icons/sprite-icons/mail.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "mail-usage",
      viewBox: "0 0 16 11",
      url: "/images/sprite/" + "sprite.svg#mail-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/marker.svg":
/*!**************************************************!*\
  !*** ./src/images/icons/sprite-icons/marker.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "marker-usage",
      viewBox: "0 0 11 16",
      url: "/images/sprite/" + "sprite.svg#marker-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/phone.svg":
/*!*************************************************!*\
  !*** ./src/images/icons/sprite-icons/phone.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "phone-usage",
      viewBox: "0 0 17 16",
      url: "/images/sprite/" + "sprite.svg#phone-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/pininterest.svg":
/*!*******************************************************!*\
  !*** ./src/images/icons/sprite-icons/pininterest.svg ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "pininterest-usage",
      viewBox: "0 0 14 19",
      url: "/images/sprite/" + "sprite.svg#pininterest-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/twitter.svg":
/*!***************************************************!*\
  !*** ./src/images/icons/sprite-icons/twitter.svg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "twitter-usage",
      viewBox: "0 0 22 17",
      url: "/images/sprite/" + "sprite.svg#twitter-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons sync recursive \\.svg$":
/*!****************************************************!*\
  !*** ./src/images/icons/sprite-icons/ sync \.svg$ ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./arr.svg": "./src/images/icons/sprite-icons/arr.svg",
	"./facebook.svg": "./src/images/icons/sprite-icons/facebook.svg",
	"./linkedin.svg": "./src/images/icons/sprite-icons/linkedin.svg",
	"./mail.svg": "./src/images/icons/sprite-icons/mail.svg",
	"./marker.svg": "./src/images/icons/sprite-icons/marker.svg",
	"./phone.svg": "./src/images/icons/sprite-icons/phone.svg",
	"./pininterest.svg": "./src/images/icons/sprite-icons/pininterest.svg",
	"./twitter.svg": "./src/images/icons/sprite-icons/twitter.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/icons/sprite-icons sync recursive \\.svg$";

/***/ }),

/***/ "./src/js/pages lazy recursive ^\\.\\/.*$":
/*!******************************************************!*\
  !*** ./src/js/pages/ lazy ^\.\/.*$ namespace object ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./": [
		"./src/js/pages/index.js",
		"vendors-node_modules_swiper_modules_effect-fade_css-node_modules_swiper_modules_navigation_cs-672c39",
		"src_js_pages_index_js"
	],
	"./article": [
		"./src/js/pages/article.js",
		"src_js_pages_article_js"
	],
	"./article.js": [
		"./src/js/pages/article.js",
		"src_js_pages_article_js"
	],
	"./index": [
		"./src/js/pages/index.js",
		"vendors-node_modules_swiper_modules_effect-fade_css-node_modules_swiper_modules_navigation_cs-672c39",
		"src_js_pages_index_js"
	],
	"./index.js": [
		"./src/js/pages/index.js",
		"vendors-node_modules_swiper_modules_effect-fade_css-node_modules_swiper_modules_navigation_cs-672c39",
		"src_js_pages_index_js"
	],
	"./ui": [
		"./src/js/pages/ui.js",
		"src_js_pages_ui_js"
	],
	"./ui.js": [
		"./src/js/pages/ui.js",
		"src_js_pages_ui_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/js/pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=app.js.map
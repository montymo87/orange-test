"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_index_js"],{

/***/ "./src/js/components/company.js":
/*!**************************************!*\
  !*** ./src/js/components/company.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_company_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/company.scss */ "./src/scss/components/company.scss");

var company = function company() {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (company);

/***/ }),

/***/ "./src/js/components/form.js":
/*!***********************************!*\
  !*** ./src/js/components/form.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_form_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/form.scss */ "./src/scss/components/form.scss");

var form = function form() {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/js/components/project.js":
/*!**************************************!*\
  !*** ./src/js/components/project.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_project_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/project.scss */ "./src/scss/components/project.scss");

var project = function project() {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");
/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/effect-fade */ "./node_modules/swiper/modules/effect-fade.css");






var slider = function slider() {
  var classNames = {
    slider: '.js-slider',
    wrapper: '.js-slider-w',
    arrowNext: '.js-next-btn',
    arrowPrev: '.js-prev-btn',
    pagination: '.js-slider-pagination'
  };
  var $sliderWrappers = document.querySelectorAll(classNames.wrapper);
  if (!$sliderWrappers.length) return;
  $sliderWrappers.forEach(function ($wrapper) {
    var $slider = $wrapper;
    if (!$slider) return;
    var $prevArrow = $wrapper.querySelector(classNames.arrowPrev);
    var $nextArrow = $wrapper.querySelector(classNames.arrowNext);
    var $pagination = $wrapper.querySelector(classNames.pagination);
    var sliderInstance = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($slider, {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectFade, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay],
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        disableOnInteraction: false
      },
      speed: 3000,
      pagination: {
        el: $pagination,
        type: 'custom',
        renderCustom: function renderCustom(sliderInstance, current, total) {
          // eslint-disable-next-line
          return ' <span>0' + current + ' </span>' + '<span>0' + total + '</span>';
        }
      },
      observer: true,
      observeParents: true,
      autoHeight: true,
      loop: true,
      navigation: {
        prevEl: $prevArrow,
        nextEl: $nextArrow
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./src/js/components/task.js":
/*!***********************************!*\
  !*** ./src/js/components/task.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_task_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/task.scss */ "./src/scss/components/task.scss");

var task = function task() {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);

/***/ }),

/***/ "./src/js/pages/index.js":
/*!*******************************!*\
  !*** ./src/js/pages/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _components_company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/company */ "./src/js/components/company.js");
/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/task */ "./src/js/components/task.js");
/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/project */ "./src/js/components/project.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form */ "./src/js/components/form.js");





var index = function index() {
  (0,_components_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_components_company__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_task__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_components_project__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_components_form__WEBPACK_IMPORTED_MODULE_4__["default"])();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "./src/scss/components/company.scss":
/*!******************************************!*\
  !*** ./src/scss/components/company.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/form.scss":
/*!***************************************!*\
  !*** ./src/scss/components/form.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/project.scss":
/*!******************************************!*\
  !*** ./src/scss/components/project.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/task.scss":
/*!***************************************!*\
  !*** ./src/scss/components/task.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_index_js.js.map
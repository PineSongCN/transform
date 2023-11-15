exports.ids = [1];
exports.modules = {
  /***/ FNUm: /***/ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      "processSize",
      function() {
        return processSize;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      "Monaco",
      function() {
        return Monaco;
      }
    );
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      "F5FC"
    );
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      "cDcd"
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_1__
    );
    /* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      "T5UV"
    );
    /* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
      _monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__
    );
    /* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      "yFQW"
    );
    /* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
      evergreen_ui__WEBPACK_IMPORTED_MODULE_3__
    );

    function processSize(size) {
      return !/^\d+$/.test(size) ? size : `${size}px`;
    }
    const Monaco = ({
      language,
      value,
      defaultValue,
      height,
      width,
      options,
      onChange
    }) => {
      return /*#__PURE__*/ Object(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
      )(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
        defaultLanguage: language,
        defaultValue: defaultValue,
        value: value,
        height: height,
        width: width,
        options: options,
        onChange: onChange,
        loading: /*#__PURE__*/ Object(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
        )(evergreen_ui__WEBPACK_IMPORTED_MODULE_3__["Pane"], {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 400,
          flex: 1,
          children: /*#__PURE__*/ Object(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
          )(evergreen_ui__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {})
        })
      });
    };
    /* harmony default export */ __webpack_exports__["default"] = Monaco;

    /***/
  }
};

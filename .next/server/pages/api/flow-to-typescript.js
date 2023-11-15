module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require("../../ssr-module-cache.js"); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 4));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "/vEs": /***/ function(module, exports) {
      module.exports = require("@khanacademy/flow-to-ts");

      /***/
    },

    /***/ 4: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__("Dbfm");

      /***/
    },

    /***/ Dbfm: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _khanacademy_flow_to_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "/vEs"
      );
      /* harmony import */ var _khanacademy_flow_to_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _khanacademy_flow_to_ts__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "veNH"
      );
      /* harmony import */ var typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        typescript__WEBPACK_IMPORTED_MODULE_1__
      );

      /* harmony default export */ __webpack_exports__["default"] = (
        req,
        res
      ) => {
        try {
          const { value, declarationOnly, isTS } = req.body;
          const tsCode = isTS
            ? value
            : Object(
                _khanacademy_flow_to_ts__WEBPACK_IMPORTED_MODULE_0__["convert"]
              )(value);

          if (!declarationOnly) {
            res.status(200).send(tsCode);
            return;
          }

          let output = "";
          const options = {
            allowJs: true,
            declaration: true,
            emitDeclarationOnly: true,
            jsx: typescript__WEBPACK_IMPORTED_MODULE_1__["JsxEmit"].React,
            skipDefaultLibCheck: true,
            skipLibCheck: true
          };
          const host = typescript__WEBPACK_IMPORTED_MODULE_1__[
            "createCompilerHost"
          ](options);

          host.getSourceFile = filename => {
            if (filename === "file.ts") {
              return typescript__WEBPACK_IMPORTED_MODULE_1__[
                "createSourceFile"
              ](filename, tsCode, undefined);
            }

            return typescript__WEBPACK_IMPORTED_MODULE_1__["createSourceFile"](
              filename,
              "",
              undefined
            );
          };

          host.writeFile = (_name, text) => {
            output = text;
          };

          const program = typescript__WEBPACK_IMPORTED_MODULE_1__[
            "createProgram"
          ](["file.ts"], options, host);
          program.emit();
          res.status(200).send(output);
        } catch (e) {
          console.log(e);
          res.status(500).send(e.message);
        }
      };

      /***/
    },

    /***/ veNH: /***/ function(module, exports) {
      module.exports = require("typescript");

      /***/
    }

    /******/
  }
);

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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 9));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ 9: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__("WbEe");

      /***/
    },

    /***/ PJMN: /***/ function(module, exports) {
      module.exports = require("crypto");

      /***/
    },

    /***/ WbEe: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var ts_json_schema_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "YRNV"
      );
      /* harmony import */ var ts_json_schema_generator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        ts_json_schema_generator__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "jle/"
      );
      /* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        os__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "PJMN"
      );
      /* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        crypto__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "oyvS"
      );
      /* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        path__WEBPACK_IMPORTED_MODULE_3__
      );
      /* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        "mw/K"
      );
      /* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        fs__WEBPACK_IMPORTED_MODULE_4__
      );
      var _os$tmpdir;

      const tmpDir =
        (_os$tmpdir = os__WEBPACK_IMPORTED_MODULE_1___default.a.tmpdir) ===
          null || _os$tmpdir === void 0
          ? void 0
          : _os$tmpdir.call(os__WEBPACK_IMPORTED_MODULE_1___default.a);
      /* harmony default export */ __webpack_exports__["default"] = (
        req,
        res
      ) => {
        const filePath =
          path__WEBPACK_IMPORTED_MODULE_3___default.a.join(
            tmpDir,
            crypto__WEBPACK_IMPORTED_MODULE_2___default.a
              .randomBytes(16)
              .toString("hex")
          ) + ".ts";

        try {
          fs__WEBPACK_IMPORTED_MODULE_4___default.a.writeFileSync(
            filePath,
            req.body,
            {
              encoding: "utf-8"
            }
          );
          const config = {
            path: filePath,
            expose: "all",
            jsDoc: "extended",
            type: "*"
          };
          const schema = ts_json_schema_generator__WEBPACK_IMPORTED_MODULE_0__[
            "createGenerator"
          ](config).createSchema(config.type);
          res.status(200).send(JSON.stringify(schema, null, 2));
        } catch (e) {
          res.status(500).send(e.message);
        }

        fs__WEBPACK_IMPORTED_MODULE_4___default.a.unlinkSync(filePath);
      };

      /***/
    },

    /***/ YRNV: /***/ function(module, exports) {
      module.exports = require("ts-json-schema-generator");

      /***/
    },

    /***/ "jle/": /***/ function(module, exports) {
      module.exports = require("os");

      /***/
    },

    /***/ "mw/K": /***/ function(module, exports) {
      module.exports = require("fs");

      /***/
    },

    /***/ oyvS: /***/ function(module, exports) {
      module.exports = require("path");

      /***/
    }

    /******/
  }
);

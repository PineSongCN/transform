exports.ids = [0];
exports.modules = {
  /***/ "2nTQ": /***/ function(
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* WEBPACK VAR INJECTION */ (function(module) {
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function() {
          return run;
        }
      );
      /* harmony import */ var _json_typegen_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "dKrm"
      );

      let WASM_VECTOR_LEN = 0;

      let cachegetUint8Memory0 = null;
      function getUint8Memory0() {
        if (
          cachegetUint8Memory0 === null ||
          cachegetUint8Memory0.buffer !==
            _json_typegen_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[
              /* memory */ "e"
            ].buffer
        ) {
          cachegetUint8Memory0 = new Uint8Array(
            _json_typegen_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[
              /* memory */ "e"
            ].buffer
          );
        }
        return cachegetUint8Memory0;
      }

      const lTextEncoder =
        typeof TextEncoder === "undefined"
          ? (0, module.require)("util").TextEncoder
          : TextEncoder;

      let cachedTextEncoder = new lTextEncoder("utf-8");

      if (false) {
      }

      const encodeString =
        typeof cachedTextEncoder.encodeInto === "function"
          ? function(arg, view) {
              return cachedTextEncoder.encodeInto(arg, view);
            }
          : function(arg, view) {
              const buf = cachedTextEncoder.encode(arg);
              view.set(buf);
              return {
                read: arg.length,
                written: buf.length
              };
            };

      function passStringToWasm0(arg, malloc, realloc) {
        if (realloc === undefined) {
          const buf = cachedTextEncoder.encode(arg);
          const ptr = malloc(buf.length);
          getUint8Memory0()
            .subarray(ptr, ptr + buf.length)
            .set(buf);
          WASM_VECTOR_LEN = buf.length;
          return ptr;
        }

        let len = arg.length;
        let ptr = malloc(len);

        const mem = getUint8Memory0();

        let offset = 0;

        for (; offset < len; offset++) {
          const code = arg.charCodeAt(offset);
          if (code > 0x7f) break;
          mem[ptr + offset] = code;
        }

        if (offset !== len) {
          if (offset !== 0) {
            arg = arg.slice(offset);
          }
          ptr = realloc(ptr, len, (len = offset + arg.length * 3));
          const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
          const ret = encodeString(arg, view);

          offset += ret.written;
        }

        WASM_VECTOR_LEN = offset;
        return ptr;
      }

      let cachegetInt32Memory0 = null;
      function getInt32Memory0() {
        if (
          cachegetInt32Memory0 === null ||
          cachegetInt32Memory0.buffer !==
            _json_typegen_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[
              /* memory */ "e"
            ].buffer
        ) {
          cachegetInt32Memory0 = new Int32Array(
            _json_typegen_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[
              /* memory */ "e"
            ].buffer
          );
        }
        return cachegetInt32Memory0;
      }

      const lTextDecoder =
        typeof TextDecoder === "undefined"
          ? (0, module.require)("util").TextDecoder
          : TextDecoder;

      let cachedTextDecoder = new lTextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
      });

      cachedTextDecoder.decode();

      function getStringFromWasm0(ptr, len) {
        return cachedTextDecoder.decode(
          getUint8Memory0().subarray(ptr, ptr + len)
        );
      }
      /**
       * @param {string} name
       * @param {string} input
       * @param {string} options
       * @returns {string}
       */
      function run(name, input, options) {
        try {
          const retptr = _json_typegen_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[
            /* __wbindgen_add_to_stack_pointer */ "a"
          ](-16);
          var ptr0 = passStringToWasm0(
            name,
            _json_typegen_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[
              /* __wbindgen_malloc */ "c"
            ],
            _json_typegen_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[
              /* __wbindgen_realloc */ "d"
            ]
          );
          var len0 = WASM_VECTOR_LEN;
          var ptr1 = passStringToWasm0(
            input,
            _json_typegen_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[
              /* __wbindgen_malloc */ "c"
            ],
            _json_typegen_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[
              /* __wbindgen_realloc */ "d"
            ]
          );
          var len1 = WASM_VECTOR_LEN;
          var ptr2 = passStringToWasm0(
            options,
            _json_typegen_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[
              /* __wbindgen_malloc */ "c"
            ],
            _json_typegen_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[
              /* __wbindgen_realloc */ "d"
            ]
          );
          var len2 = WASM_VECTOR_LEN;
          _json_typegen_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[
            /* run */ "f"
          ](retptr, ptr0, len0, ptr1, len1, ptr2, len2);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          _json_typegen_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[
            /* __wbindgen_add_to_stack_pointer */ "a"
          ](16);
          _json_typegen_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[
            /* __wbindgen_free */ "b"
          ](r0, r1);
        }
      }

      /* WEBPACK VAR INJECTION */
    }.call(this, __webpack_require__("Az8m")(module)));

    /***/
  },

  /***/ Az8m: /***/ function(module, exports) {
    /* WEBPACK VAR INJECTION */ (function(__dirname) {
      module.exports = /******/ (function() {
        // webpackBootstrap
        /******/ var __webpack_modules__ = {
          /***/ 931: /***/ function(module) {
            module.exports = function(originalModule) {
              if (!originalModule.webpackPolyfill) {
                var module = Object.create(originalModule);
                // module.parent = undefined by default
                if (!module.children) module.children = [];
                Object.defineProperty(module, "loaded", {
                  enumerable: true,
                  get: function() {
                    return module.l;
                  }
                });
                Object.defineProperty(module, "id", {
                  enumerable: true,
                  get: function() {
                    return module.i;
                  }
                });
                Object.defineProperty(module, "exports", {
                  enumerable: true
                });
                module.webpackPolyfill = 1;
              }
              return module;
            };

            /***/
          }

          /******/
        }; // The module cache
        /************************************************************************/
        /******/ /******/ var __webpack_module_cache__ = {}; // The require function
        /******/

        /******/ /******/ function __nccwpck_require__(moduleId) {
          /******/ // Check if module is in cache
          /******/ if (__webpack_module_cache__[moduleId]) {
            /******/ return __webpack_module_cache__[moduleId].exports;
            /******/
          } // Create a new module (and put it into the cache)
          /******/ /******/ var module = (__webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {}
            /******/
          }); // Execute the module function
          /******/

          /******/ /******/ var threw = true;
          /******/ try {
            /******/ __webpack_modules__[moduleId](
              module,
              module.exports,
              __nccwpck_require__
            );
            /******/ threw = false;
            /******/
          } finally {
            /******/ if (threw) delete __webpack_module_cache__[moduleId];
            /******/
          } // Return the exports of the module
          /******/

          /******/ /******/ return module.exports;
          /******/
        } /* webpack/runtime/compat */
        /******/

        /************************************************************************/
        /******/ /******/

        /******/ __nccwpck_require__.ab =
          __dirname +
          "/"; /************************************************************************/ // module exports must be returned from runtime so entry inlining is disabled // startup // Load entry module and return exports
        /******/ /******/ /******/ /******/ return __nccwpck_require__(931);
        /******/
      })();
      /* WEBPACK VAR INJECTION */
    }.call(this, "/"));

    /***/
  },

  /***/ P0Z9: /***/ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _json_typegen_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      "2nTQ"
    );
    /* harmony reexport (safe) */ __webpack_require__.d(
      __webpack_exports__,
      "run",
      function() {
        return _json_typegen_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__["a"];
      }
    );

    /***/
  },

  /***/ dKrm: /***/ function(module, exports, __webpack_require__) {
    "use strict";
    // Instantiate WebAssembly module
    var wasmExports = __webpack_require__.w[module.i];

    // export exports from WebAssembly module
    module.exports = wasmExports;
    // exec imports from WebAssembly module (for esm order)

    // exec wasm module
    wasmExports["g"]();

    /***/
  }
};

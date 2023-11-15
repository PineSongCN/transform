module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require("../ssr-module-cache.js"); // object to store loaded chunks // "0" means "already loaded"
  /******/
  /******/ /******/ /******/ var installedChunks = {
    /******/ 15: 0
    /******/
  }; // The require function
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
  } // This file contains only the entry chunk. // The chunk loading function for additional chunks
  /******/
  /******/ /******/ /******/ __webpack_require__.e = function requireEnsure(
    chunkId
  ) {
    /******/ var promises = []; // require() chunk loading for javascript // "0" is the signal for "already loaded"
    /******/
    /******/
    /******/ /******/
    /******/ /******/ if (installedChunks[chunkId] !== 0) {
      /******/ var chunk = require("../" + ({}[chunkId] || chunkId) + ".js");
      /******/ var moreModules = chunk.modules,
        chunkIds = chunk.ids;
      /******/ for (var moduleId in moreModules) {
        /******/ modules[moduleId] = moreModules[moduleId];
        /******/
      }
      /******/ for (var i = 0; i < chunkIds.length; i++)
        /******/ installedChunks[chunkIds[i]] = 0;
      /******/
    }
    /******/ return Promise.all(promises);
    /******/
  }; // expose the modules object (__webpack_modules__)
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
  /******/ /******/ __webpack_require__.p = ""; // uncaught error handler for webpack runtime
  /******/
  /******/ /******/ __webpack_require__.oe = function(err) {
    /******/ process.nextTick(function() {
      /******/ throw err; // catch this error by using import().catch()
      /******/
    });
    /******/
  }; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 13));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "/T1H": /***/ function(module, exports) {
      module.exports = require("next/dynamic");

      /***/
    },

    /***/ 13: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__("cKjH");

      /***/
    },

    /***/ "3RGy": /***/ function(module, exports) {
      module.exports = require("clipboard-copy");

      /***/
    },

    /***/ "3sCE": /***/ function(module, exports) {
      module.exports = require("lodash/flatten");

      /***/
    },

    /***/ "4Q3z": /***/ function(module, exports) {
      module.exports = require("next/router");

      /***/
    },

    /***/ "6OzC": /***/ function(module, exports) {
      module.exports = require("lodash/find");

      /***/
    },

    /***/ CFy2: /***/ function(module, exports) {
      module.exports = require("css-to-tailwindcss");

      /***/
    },

    /***/ F5FC: /***/ function(module, exports) {
      module.exports = require("react/jsx-runtime");

      /***/
    },

    /***/ T5UV: /***/ function(module, exports) {
      module.exports = require("@monaco-editor/react");

      /***/
    },

    /***/ aNEW: /***/ function(module, exports) {
      module.exports = require("react-dropzone");

      /***/
    },

    /***/ "c+hz": /***/ function(module, exports) {
      module.exports = function() {
        return new Worker("/_next/" + "static/940adc89d62d8eef7806.worker.js");
      };

      /***/
    },

    /***/ cDcd: /***/ function(module, exports) {
      module.exports = require("react");

      /***/
    },

    /***/ cKjH: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "default",
        function() {
          return CssToTailwind3;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "getStaticProps",
        function() {
          return getStaticProps;
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
      /* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "mw/K"
      );
      /* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        fs__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "oyvS"
      );
      /* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        path__WEBPACK_IMPORTED_MODULE_3__
      );
      /* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        "/T1H"
      );
      /* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        next_dynamic__WEBPACK_IMPORTED_MODULE_4__
      );
      /* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        "yFQW"
      );
      /* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        evergreen_ui__WEBPACK_IMPORTED_MODULE_5__
      );
      /* harmony import */ var css_to_tailwindcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        "CFy2"
      );
      /* harmony import */ var css_to_tailwindcss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        css_to_tailwindcss__WEBPACK_IMPORTED_MODULE_6__
      );
      /* harmony import */ var _components_ConversionPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        "sN8P"
      );
      /* harmony import */ var _hooks_useSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        "xC0i"
      );

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            );
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              );
            });
          }
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      const Monaco = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(
        () =>
          __webpack_require__
            .e(/* import() */ 1)
            .then(__webpack_require__.bind(null, "FNUm")),
        {
          ssr: false,
          loadableGenerated: {
            webpack: () => [/*require.resolve*/ "FNUm"],
            modules: ["css-to-tailwind.tsx -> " + "../components/Monaco"]
          }
        }
      );

      const evalConfig = configValue =>
        eval(`const module = {}; ${configValue}; module.exports;`);

      const DEFAULT_POSTCSS_PLUGINS = [__webpack_require__("r9Pz")];

      function decorateResult(result) {
        return `/*
  Based on TailwindCSS recommendations,
  consider using classes instead of the \`@apply\` directive
  @see https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction
*/
${result}`;
      }

      function CssToTailwindSettings({ open, toggle, onConfirm, settings }) {
        const { 0: tailwindConfig, 1: setTailwindConfig } = Object(
          react__WEBPACK_IMPORTED_MODULE_1__["useState"]
        )(settings.tailwindConfig);
        const { 0: remInPx, 1: setRemInPx } = Object(
          react__WEBPACK_IMPORTED_MODULE_1__["useState"]
        )(settings.remInPx);
        const {
          0: arbitraryPropertiesIsEnabled,
          1: setArbitraryPropertiesIsEnabled
        } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(
          settings.arbitraryPropertiesIsEnabled || false
        );
        return /*#__PURE__*/ Object(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
        )(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Dialog"], {
          title: "Converter Configuration",
          isShown: open,
          onCloseComplete: toggle,
          onConfirm: async close => {
            const isSuccess = await onConfirm({
              tailwindConfig,
              remInPx,
              arbitraryPropertiesIsEnabled
            });

            if (isSuccess) {
              close();
            }
          },
          onCancel: close => {
            setTailwindConfig(settings.tailwindConfig);
            setRemInPx(settings.remInPx);
            close();
          },
          children: /*#__PURE__*/ Object(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"]
          )(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [
              /*#__PURE__*/ Object(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
              )(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
                children: "Root font size in pixels"
              }),
              /*#__PURE__*/ Object(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
              )(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Text"], {
                children:
                  "Used to convert rem CSS values to their px equivalents"
              }),
              /*#__PURE__*/ Object(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
              )(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["TextInput"], {
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
                placeholder: "Enter URL",
                onChange: e => setRemInPx(e.target.value),
                value: remInPx || "",
                marginTop: "4px"
              }),
              /*#__PURE__*/ Object(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"]
              )(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
                marginTop: 24,
                children: [
                  "Enable arbitrary properties",
                  /*#__PURE__*/ Object(
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
                  )("a", {
                    href:
                      "https://tailwindcss.com/docs/adding-custom-styles#arbitrary-properties",
                    target: "_blank",
                    style: {
                      verticalAlign: "middle"
                    },
                    children: /*#__PURE__*/ Object(
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
                    )(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
                      content: "Open the TailwindCSS docs...",
                      children: /*#__PURE__*/ Object(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
                      )(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
                        icon: "help",
                        color: "info",
                        marginLeft: 8,
                        size: 16
                      })
                    })
                  })
                ]
              }),
              /*#__PURE__*/ Object(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
              )(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Switch"], {
                checked: arbitraryPropertiesIsEnabled,
                onChange: e =>
                  setArbitraryPropertiesIsEnabled(e.target.checked),
                marginTop: "4px"
              }),
              /*#__PURE__*/ Object(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"]
              )(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
                marginTop: 24,
                children: [
                  "Tailwind configuration",
                  /*#__PURE__*/ Object(
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
                  )("a", {
                    href: "https://tailwindcss.com/docs/configuration",
                    target: "_blank",
                    style: {
                      verticalAlign: "middle"
                    },
                    children: /*#__PURE__*/ Object(
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
                    )(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
                      content: "Open the TailwindCSS docs...",
                      children: /*#__PURE__*/ Object(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
                      )(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
                        icon: "help",
                        color: "info",
                        marginLeft: 8,
                        size: 16
                      })
                    })
                  })
                ]
              }),
              /*#__PURE__*/ Object(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
              )(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["Pane"], {
                height: 300,
                children: /*#__PURE__*/ Object(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
                )(Monaco, {
                  language: "javascript",
                  value: tailwindConfig,
                  onChange: setTailwindConfig,
                  options: {
                    fontSize: 14,
                    readOnly: false,
                    codeLens: false,
                    fontFamily: "Menlo, Consolas, monospace, sans-serif",
                    minimap: {
                      enabled: false
                    },
                    quickSuggestions: false,
                    lineNumbers: "on",
                    renderValidationDecorations: "off"
                  },
                  height: 300
                })
              })
            ]
          })
        });
      }

      function CssToTailwind3({ defaultSettings }) {
        const [rawSettings, setRawSettings] = Object(
          _hooks_useSettings__WEBPACK_IMPORTED_MODULE_8__[/* useSettings */ "a"]
        )("css-to-tailwind", defaultSettings);
        const converterConfig = Object(
          react__WEBPACK_IMPORTED_MODULE_1__["useMemo"]
        )(() => {
          const config = {
            remInPx: rawSettings.remInPx
              ? parseInt(rawSettings.remInPx, 10)
              : null,
            arbitraryPropertiesIsEnabled: !!rawSettings.arbitraryPropertiesIsEnabled
          };

          if (isNaN(config["remInPx"])) {
            evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["toaster"].danger(
              "Invalid `REM in PIXELS` value (only `number` or `null` allowed). Fallback to `null` value"
            );
            config["remInPx"] = null;
          }

          try {
            config["tailwindConfig"] = evalConfig(rawSettings.tailwindConfig);
          } catch (e) {
            evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["toaster"].danger(
              "Something went wrong trying to resolve TailwindCSS config. Fallback to default tailwind config",
              {
                description: e.message
              }
            );
          }

          return config;
        }, [rawSettings]);
        const tailwindConverter = Object(
          react__WEBPACK_IMPORTED_MODULE_1__["useMemo"]
        )(() => {
          try {
            return new css_to_tailwindcss__WEBPACK_IMPORTED_MODULE_6__[
              "TailwindConverter"
            ](
              _objectSpread(
                {
                  postCSSPlugins: DEFAULT_POSTCSS_PLUGINS
                },
                converterConfig
              )
            );
          } catch (e) {
            evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["toaster"].danger(
              "Unable to create TailwindConverter. Invalid configuration passed",
              {
                description: e.message
              }
            );
            return new css_to_tailwindcss__WEBPACK_IMPORTED_MODULE_6__[
              "TailwindConverter"
            ]({
              postCSSPlugins: DEFAULT_POSTCSS_PLUGINS
            });
          }
        }, [converterConfig]);
        const transformer = Object(
          react__WEBPACK_IMPORTED_MODULE_1__["useCallback"]
        )(
          async ({ value }) => {
            try {
              return decorateResult(
                (
                  await tailwindConverter.convertCSS(value)
                ).convertedRoot.toString()
              );
            } catch (e) {
              evergreen_ui__WEBPACK_IMPORTED_MODULE_5__["toaster"].danger(
                "Unable to convert CSS",
                {
                  description: e.message
                }
              );
              return "Unable to convert CSS";
            }
          },
          [tailwindConverter]
        );
        return /*#__PURE__*/ Object(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
        )(
          _components_ConversionPanel__WEBPACK_IMPORTED_MODULE_7__[
            /* default */ "a"
          ],
          {
            transformer: transformer,
            editorTitle: "CSS",
            editorLanguage: "css",
            editorDefaultValue: "css3",
            resultTitle: "TailwindCSS 3.x",
            resultLanguage: "css",
            settings: rawSettings,
            editorProps: {
              settingElement: ({ open, toggle }) => {
                return /*#__PURE__*/ Object(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]
                )(
                  CssToTailwindSettings,
                  {
                    open: open,
                    toggle: toggle,
                    onConfirm: async rawSettings => {
                      setRawSettings(rawSettings);
                      return true;
                    },
                    settings: rawSettings
                  },
                  `${rawSettings.tailwindConfig}${rawSettings.remInPx}`
                );
              }
            }
          }
        );
      }
      async function getStaticProps() {
        const rawTailwindConfig = await fs__WEBPACK_IMPORTED_MODULE_2__[
          "promises"
        ].readFile(
          path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(
            "./node_modules/css-to-tailwindcss/node_modules/tailwindcss/stubs/simpleConfig.stub.js"
          ),
          "utf-8"
        );
        return {
          props: {
            defaultSettings: {
              tailwindConfig: rawTailwindConfig,
              remInPx: "16",
              arbitraryPropertiesIsEnabled: false
            }
          }
        };
      }

      /***/
    },

    /***/ kiQV: /***/ function(module) {
      module.exports = JSON.parse(
        '{"name":"transform","version":"2.0.2","repository":"https://github.com/ritz078/transform","author":"ritz078 <rkritesh078@gmail.com>","license":"MIT","scripts":{"dev:inspect":"NODE_OPTIONS=\\"--inspect\\" next dev","dev":"next dev","start":"next start","format":"prettier --write \'**/*.ts\' \'**/*.tsx\'","build":"next build","now-build":"next build","postinstall":"patch-package","build:analyze":"ANALYZE=true yarn build"},"engines":{"node":"16.x"},"dependencies":{"@babel/plugin-transform-flow-strip-types":"^7.16.0","@babel/plugin-transform-typescript":"^7.16.1","@babel/standalone":"^7.14.7","@graphql-codegen/core":"^1.17.10","@graphql-codegen/flow":"^1.19.3","@graphql-codegen/flow-operations":"^1.18.11","@graphql-codegen/flow-resolvers":"^1.17.16","@graphql-codegen/fragment-matcher":"^2.0.1","@graphql-codegen/introspection":"^1.18.2","@graphql-codegen/java":"^2.0.2","@graphql-codegen/java-resolvers":"^1.18.3","@graphql-codegen/schema-ast":"^1.18.3","@graphql-codegen/typescript":"^1.22.3","@graphql-codegen/typescript-apollo-angular":"^2.3.6","@graphql-codegen/typescript-mongodb":"^1.19.3","@graphql-codegen/typescript-operations":"^1.18.2","@graphql-codegen/typescript-react-apollo":"^2.2.7","@graphql-codegen/typescript-resolvers":"^1.19.4","@graphql-codegen/typescript-stencil-apollo":"^1.18.7","@graphql-codegen/typescript-urql":"^2.0.9","@iarna/toml":"^3.0.0","@khanacademy/flow-to-ts":"^0.5.2","@lemonneko/easi-gen":"^0.0.36","@monaco-editor/react":"^4.2.1","@openapi-contrib/json-schema-to-openapi-schema":"^2.0.0","@svgr/core":"^5.5.0","@svgr/plugin-jsx":"^5.5.0","@types/jsonld":"^1.5.5","@walmartlabs/json-to-simple-graphql-schema":"^2.0.4","autoprefixer":"^10.2.6","autoprefixer9":"npm:autoprefixer@9.x.x","axios":"^0.21.1","babel-plugin-json-to-proptypes":"^0.1.0","babel-plugin-object-styles-to-template":"^0.2.2","babel-standalone":"^6.26.0","clipboard-copy":"^4.0.1","css-to-tailwindcss":"^1.0.4","evergreen-ui":"^4.28.0","flowgen":"^1.14.1","formik":"^2.2.9","generate-schema":"^2.6.0","gofmt.js":"^0.0.2","graphql":"^15.5.1","html2pug":"^4.0.0","htmltojsx":"^0.3.0","is-capitalized":"^1.0.0","is-svg":"^4.3.1","json-schema-to-typescript":"^10.1.4","json-schema-to-zod":"^0.1.2","json-to-go":"gist:0d0b8324131c80eeb7e1df20001be32f","json-to-zod":"^1.1.2","json-ts":"^1.6.4","json_typegen_wasm":"^0.7.0","jsonld":"^5.2.0","jsonschema-protobuf":"^1.0.2","lodash":"^4.17.21","markdown":"^0.5.0","next":"10.2.3","nprogress":"^0.2.0","postcss":"^8.3.5","postcss-js":"^3.0.3","postcss-nested":"^6.0.0","postcss7":"npm:postcss@7.x.x","prettier":"^1.18.2","react":"^17.0.2","react-dom":"^17.0.2","react-dropzone":"^11.0.1","recast":"^0.20.5","rust-keywords":"^1.1.0","sha1":"^1.1.1","stringify-object":"^3.3.0","svg-to-dataurl":"^1.0.0","svgo":"^1.3.2","tempy":"^1.0.1","text-encoding-utf-8":"^1.0.2","transform-json-types":"^0.7.0","ts-json-schema-generator":"^0.93.0","ts-to-zod":"^1.11.0","typescript":"4.3.4","xml-js":"^1.6.11","yaml":"^1.10.2"},"devDependencies":{"@types/lodash":"^4.14.170","@types/node":"^15.12.5","@types/prettier":"^2.3.0","@types/react":"^17.0.11","@types/svgo":"^1.3.3","husky":"^4.2.5","imagemin-lint-staged":"^0.4.0","lint-staged":"^11.0.0","patch-package":"^6.4.7","postinstall-postinstall":"^2.0.0","pretty-quick":"^3.1.1","ui-box":"2.1.0","webpack":"^4.44.1","worker-loader":"^2.0.0"},"husky":{"hooks":{"pre-commit":"pretty-quick --staged && lint-staged"}},"lint-staged":{"./assets/*/*.svg":["imagemin-lint-staged"]}}'
      );

      /***/
    },

    /***/ "mw/K": /***/ function(module, exports) {
      module.exports = require("fs");

      /***/
    },

    /***/ oyvS: /***/ function(module, exports) {
      module.exports = require("path");

      /***/
    },

    /***/ qQ3w: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* unused harmony export Wrapper */
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function() {
          return getWorker;
        }
      );
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      const resolves = {};
      const rejects = {};
      let globalMsgId = 0; // Activate calculation in the worker, returning a promise

      function sendMsg(payload, worker) {
        const msgId = globalMsgId++;
        const msg = {
          id: msgId,
          payload
        };
        return new Promise(function(resolve, reject) {
          // save callbacks for later
          resolves[msgId] = resolve;
          rejects[msgId] = reject;
          worker.postMessage(msg); // TODO: CHECK FOR MEMORY LEAK
        });
      } // Handle incoming calculation result

      function handleMsg(msg) {
        const { id, err, payload } = msg.data;

        if (payload) {
          const resolve = resolves[id];

          if (resolve) {
            resolve(payload);
          }
        } else {
          // error condition
          const reject = rejects[id];

          if (reject) {
            if (err) {
              reject(new Error(err));
            } else {
              reject("Got nothing");
            }
          }
        } // purge used callbacks

        delete resolves[id];
        delete rejects[id];
      }

      class Wrapper {
        constructor(worker) {
          _defineProperty(this, "worker", void 0);

          this.worker = worker;
          this.worker.onmessage = handleMsg;
        }

        send(str) {
          return sendMsg(str, this.worker);
        }
      }
      function getWorker(Worker) {
        return new Wrapper(new Worker());
      }

      /***/
    },

    /***/ r9Pz: /***/ function(module, exports) {
      module.exports = require("postcss-nested");

      /***/
    },

    /***/ sN8P: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";

      // NAMESPACE OBJECT: ./constants/data.ts
      var data_namespaceObject = {};
      __webpack_require__.r(data_namespaceObject);
      __webpack_require__.d(data_namespaceObject, "json", function() {
        return json;
      });
      __webpack_require__.d(data_namespaceObject, "html", function() {
        return html;
      });
      __webpack_require__.d(data_namespaceObject, "svg", function() {
        return svg;
      });
      __webpack_require__.d(data_namespaceObject, "css", function() {
        return css;
      });
      __webpack_require__.d(data_namespaceObject, "css2", function() {
        return css2;
      });
      __webpack_require__.d(data_namespaceObject, "css3", function() {
        return css3;
      });
      __webpack_require__.d(data_namespaceObject, "javascript", function() {
        return javascript;
      });
      __webpack_require__.d(data_namespaceObject, "yaml", function() {
        return yaml;
      });
      __webpack_require__.d(data_namespaceObject, "xml", function() {
        return xml;
      });
      __webpack_require__.d(data_namespaceObject, "markdown", function() {
        return markdown;
      });
      __webpack_require__.d(data_namespaceObject, "flow", function() {
        return flow;
      });
      __webpack_require__.d(data_namespaceObject, "graphql", function() {
        return graphql;
      });
      __webpack_require__.d(data_namespaceObject, "graphql1", function() {
        return graphql1;
      });
      __webpack_require__.d(
        data_namespaceObject,
        "graphqlDocument",
        function() {
          return graphqlDocument;
        }
      );
      __webpack_require__.d(data_namespaceObject, "graphqlMongodb", function() {
        return graphqlMongodb;
      });
      __webpack_require__.d(data_namespaceObject, "jsObject", function() {
        return jsObject;
      });
      __webpack_require__.d(data_namespaceObject, "jsonSchema", function() {
        return jsonSchema;
      });
      __webpack_require__.d(data_namespaceObject, "jsonLd", function() {
        return jsonLd;
      });
      __webpack_require__.d(data_namespaceObject, "jsonLdContext", function() {
        return jsonLdContext;
      });
      __webpack_require__.d(data_namespaceObject, "typescript", function() {
        return typescript;
      });
      __webpack_require__.d(
        data_namespaceObject,
        "typeScriptInterface",
        function() {
          return typeScriptInterface;
        }
      );
      __webpack_require__.d(data_namespaceObject, "toml", function() {
        return toml;
      });
      __webpack_require__.d(data_namespaceObject, "cadence", function() {
        return cadence;
      });

      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__("F5FC");

      // EXTERNAL MODULE: external "evergreen-ui"
      var external_evergreen_ui_ = __webpack_require__("yFQW");

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__("cDcd");

      // EXTERNAL MODULE: external "next/dynamic"
      var dynamic_ = __webpack_require__("/T1H");
      var dynamic_default = /*#__PURE__*/ __webpack_require__.n(dynamic_);

      // EXTERNAL MODULE: external "clipboard-copy"
      var external_clipboard_copy_ = __webpack_require__("3RGy");
      var external_clipboard_copy_default = /*#__PURE__*/ __webpack_require__.n(
        external_clipboard_copy_
      );

      // CONCATENATED MODULE: ./assets/svgs/Npm.tsx

      function Npm() {
        return /*#__PURE__*/ Object(jsx_runtime_["jsxs"])("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          id: "npm",
          x: "0px",
          y: "0px",
          enableBackground: "new 0 0 780 250",
          viewBox: "0 0 780 250",
          xmlSpace: "preserve",
          height: 20,
          style: {
            marginRight: 10
          },
          children: [
            /*#__PURE__*/ Object(jsx_runtime_["jsx"])("style", {
              dangerouslySetInnerHTML: {
                __html: ".st0{fill:#C12127;}"
              }
            }),
            /*#__PURE__*/ Object(jsx_runtime_["jsx"])("path", {
              d:
                "M240 250h100v-50h100V0H240v250zM340 50h50v100h-50V50zM480 0v200h100V50h50v150h50V50h50v150h50V0H480zM0 200h100V50h50v150h50V0H0v200z",
              className: "st0"
            })
          ]
        });
      }
      // EXTERNAL MODULE: external "react-dropzone"
      var external_react_dropzone_ = __webpack_require__("aNEW");

      // CONCATENATED MODULE: ./components/EditorPanel.tsx

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            );
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              );
            });
          }
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      const Monaco = dynamic_default()(
        () =>
          __webpack_require__
            .e(/* import() */ 1)
            .then(__webpack_require__.bind(null, "FNUm")),
        {
          ssr: false,
          loadableGenerated: {
            webpack: () => [/*require.resolve*/ "FNUm"],
            modules: [
              "../components/EditorPanel.tsx -> " + "../components/Monaco"
            ]
          }
        }
      );
      function EditorPanel({
        editable = true,
        title,
        settingElement,
        hasLoad,
        acceptFiles,
        hasClear,
        hasCopy = true,
        topNotifications,
        language,
        defaultValue,
        onChange,
        id,
        packageDetails
      }) {
        const { 0: showSettingsDialogue, 1: setSettingsDialog } = Object(
          external_react_["useState"]
        )(false);
        const { 0: value, 1: setValue } = Object(external_react_["useState"])(
          defaultValue
        );
        const { 0: fetchingUrl, 1: setFetchingUrl } = Object(
          external_react_["useState"]
        )("");
        const options = {
          fontSize: 14,
          readOnly: !editable,
          codeLens: false,
          fontFamily: "Menlo, Consolas, monospace, sans-serif",
          minimap: {
            enabled: false
          },
          quickSuggestions: false,
          lineNumbers: "on",
          renderValidationDecorations: "off"
        };

        const _toggleSettingsDialog = Object(
          external_react_["useCallback"]
        )(() => setSettingsDialog(!showSettingsDialogue), [
          showSettingsDialogue
        ]);

        Object(external_react_["useEffect"])(() => {
          // @ts-ignore
          window.__webpack_public_path__ = "/_next/static/";
        }, []);
        const getSettings = Object(external_react_["useCallback"])(
          () =>
            /*#__PURE__*/ Object(jsx_runtime_["jsxs"])(
              jsx_runtime_["Fragment"],
              {
                children: [
                  /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
                    external_evergreen_ui_["Button"],
                    {
                      marginRight: 10,
                      iconBefore: "cog",
                      onClick: _toggleSettingsDialog,
                      height: 28,
                      children: "Settings"
                    }
                  ),
                  settingElement({
                    toggle: _toggleSettingsDialog,
                    open: showSettingsDialogue
                  })
                ]
              }
            ),
          [showSettingsDialogue]
        );
        const onFilePicked = Object(external_react_["useCallback"])(
          (files, close = () => {}) => {
            if (!(files && files.length)) return;
            const file = files[0];
            const reader = new FileReader();
            reader.readAsText(file, "utf-8");

            reader.onload = () => {
              setValue(reader.result);
              onChange(reader.result);
              close();
            };
          },
          []
        );
        const { getRootProps } = Object(
          external_react_dropzone_["useDropzone"]
        )({
          onDrop: files => onFilePicked(files),
          disabled: !editable,
          accept: acceptFiles,
          onDropRejected: () =>
            external_evergreen_ui_["toaster"].danger(
              "This file type is not supported.",
              {
                id
              }
            )
        });
        const copyValue = Object(external_react_["useCallback"])(() => {
          external_clipboard_copy_default()(value);
          external_evergreen_ui_["toaster"].success("Copied to clipboard.", {
            id
          });
        }, [value]);
        const fetchFile = Object(external_react_["useCallback"])(
          close => {
            (async () => {
              if (!fetchingUrl) return;
              const res = await fetch(fetchingUrl);
              const value = await res.text();
              setValue(value);
              setFetchingUrl("");
              close();
              onChange(value);
            })();
          },
          [fetchingUrl, onChange]
        ); // whenever defaultValue changes, change the value of the editor.

        Object(external_react_["useEffect"])(() => {
          setValue(defaultValue);
        }, [defaultValue]);
        return /*#__PURE__*/ Object(jsx_runtime_["jsxs"])(
          external_evergreen_ui_["Pane"],
          {
            display: "flex",
            flex: 1,
            flexDirection: "column",
            overflow: "hidden",
            children: [
              /*#__PURE__*/ Object(jsx_runtime_["jsxs"])(
                external_evergreen_ui_["Pane"],
                {
                  display: "flex",
                  height: 40,
                  paddingX: 10,
                  alignItems: "center",
                  borderBottom: true,
                  zIndex: 2,
                  backgroundColor: "#FFFFFF",
                  flexShrink: 0,
                  children: [
                    /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
                      external_evergreen_ui_["Pane"],
                      {
                        flex: 1,
                        children: /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
                          external_evergreen_ui_["Heading"],
                          {
                            size: 500,
                            marginTop: 0,
                            children: title
                          }
                        )
                      }
                    ),
                    settingElement && getSettings(),
                    hasLoad &&
                      /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
                        external_evergreen_ui_["Popover"],
                        {
                          content: ({ close }) =>
                            /*#__PURE__*/ Object(jsx_runtime_["jsxs"])(
                              external_evergreen_ui_["Pane"],
                              {
                                paddingY: 20,
                                paddingX: 20,
                                display: "flex",
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                backgroundColor: "#FFFFFF",
                                children: [
                                  /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
                                    external_evergreen_ui_["FilePicker"],
                                    {
                                      width: "100%",
                                      name: "filepicker",
                                      onChange: files =>
                                        onFilePicked(files, close),
                                      accept: acceptFiles
                                    }
                                  ),
                                  /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
                                    external_evergreen_ui_["Heading"],
                                    {
                                      paddingY: 10,
                                      size: 200,
                                      children: "OR"
                                    }
                                  ),
                                  /*#__PURE__*/ Object(jsx_runtime_["jsxs"])(
                                    external_evergreen_ui_["Pane"],
                                    {
                                      display: "flex",
                                      flexDirection: "row",
                                      children: [
                                        /*#__PURE__*/ Object(
                                          jsx_runtime_["jsx"]
                                        )(external_evergreen_ui_["TextInput"], {
                                          borderBottomRightRadius: 0,
                                          borderTopRightRadius: 0,
                                          placeholder: "Enter URL",
                                          onChange: e =>
                                            setFetchingUrl(e.target.value)
                                        }),
                                        /*#__PURE__*/ Object(
                                          jsx_runtime_["jsx"]
                                        )(external_evergreen_ui_["Button"], {
                                          borderLeftWidth: 0,
                                          borderBottomLeftRadius: 0,
                                          borderTopLeftRadius: 0,
                                          onClick: () => fetchFile(close),
                                          children: "Fetch URL"
                                        })
                                      ]
                                    }
                                  )
                                ]
                              }
                            ),
                          shouldCloseOnExternalClick: true,
                          children: /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
                            external_evergreen_ui_["Tooltip"],
                            {
                              content: "Load File",
                              children: /*#__PURE__*/ Object(
                                jsx_runtime_["jsx"]
                              )(external_evergreen_ui_["IconButton"], {
                                height: 28,
                                marginRight: 10,
                                icon: "upload"
                              })
                            }
                          )
                        }
                      ),
                    hasClear &&
                      /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
                        external_evergreen_ui_["Tooltip"],
                        {
                          content: "Clear",
                          children: /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
                            external_evergreen_ui_["IconButton"],
                            {
                              height: 28,
                              icon: "trash",
                              intent: "danger",
                              marginRight: 10,
                              onClick: () => setValue("")
                            }
                          )
                        }
                      ),
                    packageDetails &&
                      /*#__PURE__*/ Object(jsx_runtime_["jsx"])("a", {
                        href: packageDetails.url,
                        style: {
                          display: "inline-flex"
                        },
                        target: "_blank",
                        children: /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
                          external_evergreen_ui_["Tooltip"],
                          {
                            content: packageDetails.name,
                            children: /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
                              Npm,
                              {}
                            )
                          }
                        )
                      }),
                    hasCopy &&
                      /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
                        external_evergreen_ui_["Button"],
                        {
                          appearance: "primary",
                          marginRight: 10,
                          iconBefore: "duplicate",
                          onClick: copyValue,
                          height: 28,
                          children: "Copy"
                        }
                      )
                  ]
                }
              ),
              /*#__PURE__*/ Object(jsx_runtime_["jsxs"])(
                "div",
                _objectSpread(
                  _objectSpread(
                    {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        overflow: "hidden"
                      }
                    },
                    getRootProps()
                  ),
                  {},
                  {
                    children: [
                      topNotifications &&
                        topNotifications({
                          isSettingsOpen: showSettingsDialogue,
                          toggleSettings: _toggleSettingsDialog
                        }),
                      /*#__PURE__*/ Object(jsx_runtime_["jsx"])(Monaco, {
                        language: language,
                        value: value,
                        options: options,
                        onChange: value => {
                          setValue(value);
                          onChange(value);
                        }
                      })
                    ]
                  }
                )
              )
            ]
          }
        );
      }
      // CONCATENATED MODULE: ./constants/data.ts
      const json = JSON.stringify(
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false
        },
        null,
        2
      );
      const html = `<!-- Hello world -->
<div class="awesome" style="border: 1px solid red">
  <label for="name">Enter your name: </label>
  <input type="text" id="name" />
</div>
<p>Enter your HTML here</p>`;
      const svg = `<svg style="flex:1;" xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="10" y="10" height="100" width="100"
    style="stroke:#ff0000; fill: #0000ff"/>
</svg>`;
      const css = `.main-wrapper {
  flex-direction: row;
  display: flex;
  flex: 1;
}
#content {
  flex: 1;
}
ul {
  padding: 20px 0;
  flex: 1;
}
li {
  font-family:'Lato';
  color: whitesmoke;
  line-height: 44px;
}
`;
      const css2 = `.alert {
  position: relative;
  padding: 1.6rem 4.6rem;
  margin-bottom: 1.6rem;
  border: 1px solid #c53030;
  color: #fff;
  border-radius: 0.2rem;
  width: 100%;
}

.logo {
  margin-bottom: 1.6rem;
  background: url('logo.svg') no-repeat;
  display: flex;
  justify-content: center;
}

.button {
  background: #81e6d9;
  padding: 1.6rem 4.6rem;
  letter-spacing: 0.03rem;
  border-radius: 0.2rem;
}

.button:hover {
  background: #2c7a7b;
}

@media (min-width: 640px) {
  .button {
    padding: 0.5rem 1rem;
    width: 100%;
  }
}

@media (min-width: 1280px) {
  .button {
    padding: 3rem 7rem;
    margin-bottom: 2.4rem;
  }
}

.username {
  color: #718096;
  border-color: #bee3f8;
}

.username:focus {
  border-color: #3182ce;
}

.username::placeholder {
  color: #cbd5e0;
}

@media (min-width: 1280px) {
  .username {
    width: 50%;
  }
}

.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  padding: 2.4rem 3rem;
  border-top: 1px solid #fff5f5;
}
`;
      const css3 = `:root {
  --some-color: #090909;
}

.foo {
  padding: 0.875em 256px;
  margin-left: 16px;
  text-align: center;
  font-size: 12px;
  transition: color, background-color, border-color, text-decoration-color, fill,
    stroke 200ms cubic-bezier(0, 0, 0.2, 1);
  animation-delay: 200ms;

  &:hover {
    filter: blur(4px) brightness(0.5) sepia(100%) contrast(1) hue-rotate(30deg)
      invert(0) opacity(0.05) saturate(1.5);
    color: hsl(27, 96%, 61%);
    font-size: 1.25rem;
  }

  &[aria-disabled="true"] {
    width: 25%;
    color: var(--some-color);
    font-size: 1em;
  }

  @media (min-width: 768px) {
    top: auto;
    bottom: auto;
    left: 25%;
    right: 25%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    min-width: 100%;
    margin-right: -24px;
  }

  @supports (display: grid) {
    display: grid;
    grid-column: span 1 / span 1;
  }
}

.foo.bar {
  padding: 0.875rem 256px 15%;
  transform: translateX(12px) translateY(-0.5em) skew(1deg, 3deg)
    scale(-0.75, 1.05) rotate(-0.25turn);

  &::after {
    content: "*";
    animation: spin 1s linear infinite;
  }
}
`;
      const javascript = `const container = css({
  flex: 1,
  padding: 10,
  backgroundColor: 'orange',
  color: colors.white,

  '&:hover': {
    backgroundColor: 'tomato',
  },
});`;
      const yaml = `---
  foo: "bar"
  baz:
    - "qux"
    - "quxx"
  corge: null
  grault: 1
  garply: true
  waldo: "false"
  fred: "undefined"
  emptyarr: []
  emptyobj: {}
`;
      const xml = `<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
</note>
`;
      const markdown = `Heading
=======
## Sub-heading
Paragraphs are separated
by a blank line.
Two spaces at the end of a line
produces a line break.
Text attributes _italic_,
**bold**, \`monospace\`.
Horizontal rule:
---
Bullet list:
  * apples
  * oranges
  * pears
Numbered list:
  1. wash
  2. rinse
  3. repeat
A [link](http://example.com).
![Image](https://via.placeholder.com/150)
> Markdown uses email-style > characters for blockquoting.
`;
      const flow = `export type AlertType = 'success'

export type AlertProps = {
  type: AlertType,
  text: string,
  testId: string,
}

export type AlertTypeIconMap = {
  success: 'tick' | 'started',
}

const Alert = ({ type, text, testId }: AlertProps) => {
  const alertTypeIconMap: AlertTypeIconMap = {
    success: 'tick',
  }
  const styles = getStyles({ type })

  return (
      <View style={styles.iconContainer}>
        <Icon type={alertTypeIconMap[type]} />
      </View>
  )
}

export default Alert`;
      const graphql = `type Query {
	user: User!
}
type User {
	id: ID!
	profile: Profile!
	email: String!
	username: String!
}
type Profile {
	name: String!
	age: Int!
}`;
      const graphql1 = `scalar Date

schema {
  query: Query
}

type Query {
  me: User!
  user(id: ID!): User
  allUsers: [User]
  search(term: String!): [SearchResult!]!
  myChats: [Chat!]!
}

enum Role {
  USER,
  ADMIN,
}

interface Node {
  id: ID!
}

union SearchResult = User | Chat | ChatMessage

type User implements Node {
  id: ID!
  username: String!
  email: String!
  role: Role!
}

type Chat implements Node {
  id: ID!
  users: [User!]!
  messages: [ChatMessage!]!
}

type ChatMessage implements Node {
  id: ID!
  content: String!
  time: Date!
  user: User!
}
`;
      const graphqlDocument = `query findUser($userId: ID!) {
  user(id: $userId) {
    ...UserFields
  }
}

fragment UserFields on User {
  id
  username
  role
}`;
      const graphqlMongodb = `type User @entity {
  id: ID! @id
  username: String! @column
  email: String! @column @map(
    path: "login.email"
  )
  profile: Profile! @column
  chats: [Chat!]! @link
}

type Profile @entity(embedded: true,
  additionalFields: [
    { path: "dateOfBirth", type: "string" }
  ]) {
  name: String! @column
  age: Int
}

type Chat @entity {
  id: ID! @id
  users: [User!]! @link
  messages: [ChatMessage!]!
}

type ChatMessage @entity {
  id: ID! @id
  chat: Chat! @link
  content: String! @column
  author: User! @link
}`;
      const jsObject = `{
	title: {
		type: 'String',
		trim: true,
		index: true,
		required: true
	},
	year: {
		type: 'Number',
		max: 2012,
		validate: 'validateBookYear'
	},
	author: {
		type: 'ObjectId',
		ref: 'Author',
		index: true,
		required: true
	}
}`;
      const jsonSchema = `{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "Example Schema",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "age": {
      "description": "Age in years",
      "type": "integer",
      "minimum": 0
    },
    "height": {
      "type": ["number", "null"]
    },
    "favoriteFoods": {
      "type": "array",
      "minItems": 0,
      "maxItems": 2,
      "items": {
        "type": "string"
      }
    },
    "likesDogs": {
      "type": "boolean"
    }
  },
  "required": ["firstName", "lastName"]
}`;
      const jsonLd = `{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Jane Doe",
  "jobTitle": "Professor",
  "telephone": "(425) 123-4567",
  "url": "http://www.janedoe.com"
}
`;
      const jsonLdContext = `{
  "@context": "https://schema.org/"
}`;
      const typescript = `
import React from 'react';
export interface Props {
  /** The user's name */
  name: string;
  /** Should the name be rendered in bold */
  priority?: boolean
}

export interface FauxactClassComponent<Props extends {}, State = {}> {
  props: Props
  state: State

  setState: (prevState: State, props: Props) => Props
  callback?: () => void
  render(): FauxactClassComponent<any> | null
}

export const PrintName: React.FC<Props> = (props) => {
  return (
    <div>
      <p style={{ fontWeight: props.priority ? "bold" : "normal" }}>{props.name}</p>
    </div>
  )
}

export const ShowUser: React.FC<Props> = (props) => {
  return <PrintName name="Ned" />
}

let username = "Cersei"
export const ShowStoredUser: React.FC<Props> = (props) => {
  return <PrintName name={username} priority />
}

import { useState, useEffect } from 'react';

export const CounterExample: React.FC<{}> = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}`;
      const typeScriptInterface = `export interface Root {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Props {
  /** The user's name */
  name: string;
  /** Should the name be rendered in bold */
  priority?: boolean
}`;
      const toml = `userId = 1
id = 1
title = "delectus aut autem"
completed = false

[company]
id = 12
name = "Transform Inc"`;
      const cadence = `// Do not remove top level contract
// Just paste your structs in this contract
pub contract Example {
  pub struct ExampleStruct {
      pub var url: String
      pub twoCapacityArray: [String;2]
      pub deeeeepArray: [[[[String]]]]

      pub struct ExampleEmbed {
        pub var aNumber: Int

        init() {
          self.aNumber = 0
        }
      }

      init() {
          self.url = ""
          self.twoCapacityArray = []
          self.deeeeepArray = []
      }
  }

  pub event ExampleEvent(_ name: String, _ aDeeeeeepMap: {String:{String:{String:{String:String}}}})

  // This function will be ignored if 'Generate Interaction Code With Functions' disabled
  pub fun hello(): String {
    return "Hello"
  }
}
`;
      // EXTERNAL MODULE: ./package.json
      var package_0 = __webpack_require__("kiQV");

      // CONCATENATED MODULE: ./hooks/useSessionStorage.ts

      const prefix = `transform:${package_0.version}:`;
      function useSessionStorage(key, initialValue) {
        // State to store our value
        // Pass initial state function to useState so logic is only executed once
        const { 0: storedValue, 1: setStoredValue } = Object(
          external_react_["useState"]
        )(() => {
          try {
            // Get from local storage by key
            const item = false ? undefined : initialValue; // Parse stored json or if none return initialValue

            return key.startsWith("data:") ? item : JSON.parse(item);
          } catch (error) {
            // If error also return initialValue
            return initialValue;
          }
        }); // Return a wrapped version of useState's setter function that ...
        // ... persists the new value to sessionStorage.

        const setValue = value => {
          try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
              value instanceof Function ? value(storedValue) : value; // Save state

            setStoredValue(valueToStore); // Save to local storage

            if (false) {
            }
          } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
          }
        };

        return [storedValue, setValue];
      }
      // CONCATENATED MODULE: ./hooks/useData.ts

      function useData(type) {
        return type
          ? useSessionStorage(`data:${type}`, data_namespaceObject[type])
          : [,];
      }
      // EXTERNAL MODULE: external "next/router"
      var router_ = __webpack_require__("4Q3z");

      // EXTERNAL MODULE: ./utils/routes.tsx
      var routes = __webpack_require__("xlv/");

      // EXTERNAL MODULE: ./workers/prettier.worker.ts
      var prettier_worker = __webpack_require__("c+hz");
      var prettier_worker_default = /*#__PURE__*/ __webpack_require__.n(
        prettier_worker
      );

      // EXTERNAL MODULE: ./utils/workerWrapper.ts
      var workerWrapper = __webpack_require__("qQ3w");

      // CONCATENATED MODULE: ./components/ConversionPanel.tsx

      function ConversionPanel_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function ConversionPanel_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ConversionPanel_ownKeys(Object(source), true).forEach(function(
              key
            ) {
              ConversionPanel_defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            );
          } else {
            ConversionPanel_ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              );
            });
          }
        }
        return target;
      }

      function ConversionPanel_defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      let prettierWorker;

      function getEditorLanguage(lang) {
        const mapping = {
          flow: "typescript"
        };
        return mapping[lang] || lang;
      }

      const ConversionPanel = function({
        splitEditorProps,
        editorProps,
        resultEditorProps,
        transformer,
        splitLanguage,
        splitTitle,
        editorLanguage,
        editorTitle,
        resultLanguage,
        resultTitle,
        editorSettingsElement,
        settings,
        editorDefaultValue,
        splitEditorDefaultValue,
        resultSettingsElement
      }) {
        const [value, setValue] = useData(editorDefaultValue || editorLanguage);
        const [splitValue, setSplitValue] = useData(
          splitEditorDefaultValue || splitLanguage
        );
        const { 0: result, 1: setResult } = Object(external_react_["useState"])(
          ""
        );
        const { 0: message, 1: setMessage } = Object(
          external_react_["useState"]
        )("");
        const { 0: showUpdateSpinner, 1: toggleUpdateSpinner } = Object(
          external_react_["useState"]
        )(false);
        const router = Object(router_["useRouter"])();
        const route = Object(routes["a" /* activeRouteData */])(
          router.pathname
        );
        let packageDetails;

        if (route) {
          const { packageUrl, packageName } = route;
          packageDetails =
            packageName && packageUrl
              ? {
                  name: packageName,
                  url: packageUrl
                }
              : undefined;
        }

        Object(external_react_["useEffect"])(() => {
          async function transform() {
            try {
              toggleUpdateSpinner(true);
              prettierWorker =
                prettierWorker ||
                Object(workerWrapper["a" /* getWorker */])(
                  prettier_worker_default.a
                );
              const result = await transformer({
                value,
                splitEditorValue: splitTitle ? splitValue : undefined
              });
              let prettyResult = await prettierWorker.send({
                value: result,
                language: resultLanguage
              }); // Fix for #319

              if (prettyResult.startsWith(";<")) {
                prettyResult = prettyResult.slice(1);
              }

              setResult(prettyResult);
              setMessage("");
            } catch (e) {
              console.error(e);
              setMessage(e.message);
            }

            toggleUpdateSpinner(false);
          }

          transform();
        }, [splitValue, value, splitTitle, settings]);
        return /*#__PURE__*/ Object(jsx_runtime_["jsxs"])(
          jsx_runtime_["Fragment"],
          {
            children: [
              /*#__PURE__*/ Object(jsx_runtime_["jsxs"])(
                external_evergreen_ui_["Pane"],
                {
                  display: "flex",
                  flexDirection: "row",
                  overflow: "hidden",
                  flex: 1,
                  height: "calc(100vh - 40px)",
                  children: [
                    /*#__PURE__*/ Object(jsx_runtime_["jsxs"])(
                      external_evergreen_ui_["Pane"],
                      {
                        display: "flex",
                        flex: 1,
                        borderRight: true,
                        flexDirection: "column",
                        overflow: "hidden",
                        children: [
                          /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
                            EditorPanel,
                            ConversionPanel_objectSpread(
                              {
                                language: getEditorLanguage(editorLanguage),
                                onChange: setValue,
                                hasLoad: true,
                                defaultValue: value,
                                id: 1,
                                hasCopy: false,
                                title: editorTitle,
                                settingElement: editorSettingsElement,
                                hasClear: true
                              },
                              editorProps
                            )
                          ),
                          splitTitle &&
                            /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
                              external_evergreen_ui_["Pane"],
                              {
                                display: "flex",
                                flex: 1,
                                borderTop: true,
                                children: /*#__PURE__*/ Object(
                                  jsx_runtime_["jsx"]
                                )(
                                  EditorPanel,
                                  ConversionPanel_objectSpread(
                                    {
                                      title: splitTitle,
                                      defaultValue: splitValue,
                                      language: getEditorLanguage(
                                        splitLanguage
                                      ),
                                      id: 2,
                                      hasCopy: false,
                                      onChange: setSplitValue,
                                      hasLoad: true,
                                      hasClear: true
                                    },
                                    splitEditorProps
                                  )
                                )
                              }
                            )
                        ]
                      }
                    ),
                    /*#__PURE__*/ Object(jsx_runtime_["jsxs"])(
                      external_evergreen_ui_["Pane"],
                      {
                        display: "flex",
                        flex: 1,
                        position: "relative",
                        children: [
                          showUpdateSpinner &&
                            /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
                              external_evergreen_ui_["Pane"],
                              {
                                display: "inline-flex",
                                position: "absolute",
                                backgroundColor: "#fff",
                                zIndex: 9,
                                borderRadius: "50%",
                                paddingX: 8,
                                paddingY: 8,
                                elevation: 1,
                                top: 50,
                                right: 30,
                                children: /*#__PURE__*/ Object(
                                  jsx_runtime_["jsx"]
                                )(external_evergreen_ui_["Spinner"], {
                                  css: {
                                    "& circle": {
                                      stroke: "#0e7ccf"
                                    }
                                  },
                                  size: 32
                                })
                              }
                            ),
                          /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
                            EditorPanel,
                            ConversionPanel_objectSpread(
                              {
                                title: resultTitle,
                                defaultValue: result,
                                language: getEditorLanguage(resultLanguage),
                                id: 3,
                                editable: false,
                                hasPrettier: false,
                                settingElement: resultSettingsElement,
                                packageDetails: packageDetails
                              },
                              resultEditorProps
                            )
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              message &&
                /*#__PURE__*/ Object(jsx_runtime_["jsx"])(
                  external_evergreen_ui_["Alert"],
                  {
                    paddingY: 15,
                    paddingX: 20,
                    left: 240,
                    right: 0,
                    position: "absolute",
                    intent: "danger",
                    bottom: 0,
                    title: message,
                    backgroundColor: "#FAE2E2",
                    zIndex: 3
                  }
                )
            ]
          }
        );
      };

      /* harmony default export */ var components_ConversionPanel = (__webpack_exports__[
        "a"
      ] = /*#__PURE__*/ external_react_["memo"](ConversionPanel));

      /***/
    },

    /***/ xC0i: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return /* binding */ useSettings;
      });

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__("cDcd");

      // EXTERNAL MODULE: ./package.json
      var package_0 = __webpack_require__("kiQV");

      // CONCATENATED MODULE: ./hooks/useLocalStorage.ts

      const prefix = `transform:${package_0["version"]}:`;
      function useLocalStorage(key, initialValue) {
        // State to store our value
        // Pass initial state function to useState so logic is only executed once
        const { 0: storedValue, 1: setStoredValue } = Object(
          external_react_["useState"]
        )(() => {
          try {
            // Get from local storage by key
            const item = false ? undefined : initialValue; // Parse stored json or if none return initialValue

            return JSON.parse(item);
          } catch (error) {
            // If error also return initialValue
            return initialValue;
          }
        }); // Return a wrapped version of useState's setter function that ...
        // ... persists the new value to sessionStorage.

        const setValue = value => {
          try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
              value instanceof Function ? value(storedValue) : value; // Save state

            setStoredValue(valueToStore); // Save to local storage

            if (false) {
            }
          } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
          }
        };

        return [storedValue, setValue];
      }
      // CONCATENATED MODULE: ./hooks/useSettings.ts

      function useSettings(name, initialValue) {
        return useLocalStorage(`settings:${name}`, initialValue);
      }

      /***/
    },

    /***/ "xlv/": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "b",
        function() {
          return categorizedRoutes;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "c",
        function() {
          return routes;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function() {
          return activeRouteData;
        }
      );
      /* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "3sCE"
      );
      /* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        lodash_flatten__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "6OzC"
      );
      /* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        lodash_find__WEBPACK_IMPORTED_MODULE_1__
      );
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            );
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              );
            });
          }
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      const categorizedRoutes = [
        {
          category: "SVG",
          content: [
            {
              label: "to JSX",
              path: "/",
              packageName: "@svgr/core",
              packageUrl: "https://github.com/smooth-code/svgr",
              title: "Transform | A polyglot web converter."
            },
            {
              label: "to React Native",
              path: "/svg-to-react-native",
              packageName: "@svgr/core",
              packageUrl: "https://github.com/smooth-code/svgr"
            }
          ]
        },
        {
          category: "HTML",
          content: [
            {
              label: "to JSX",
              path: "/html-to-jsx"
            },
            {
              label: "to Pug",
              path: "/html-to-pug",
              packageName: "html2pug",
              packageUrl: "https://github.com/izolate/html2pug"
            }
          ]
        },
        {
          category: "JSON",
          content: [
            {
              label: "to React PropTypes",
              path: "/json-to-proptypes",
              title: "Transform | All important transforms at one place."
            },
            {
              label: "to Flow",
              path: "/json-to-flow"
            },
            {
              label: "to GraphQL",
              path: "/json-to-graphql",
              packageName: "@walmartlabs/json-to-simple-graphql-schema",
              packageUrl:
                "https://github.com/walmartlabs/json-to-simple-graphql-schema"
            },
            {
              label: "to TypeScript",
              path: "/json-to-typescript",
              packageUrl: "https://www.npmjs.com/package/json_typegen_wasm",
              packageName: "json_typegen_wasm"
            },
            {
              label: "to MobX-State-Tree Model",
              path: "/json-to-mobx-state-tree"
            },
            {
              label: "to Sarcastic",
              path: "/json-to-sarcastic",
              packageName: "transform-json-types",
              packageUrl: "https://github.com/transform-it/transform-json-types"
            },
            {
              label: "to io-ts",
              path: "/json-to-io-ts",
              packageName: "transform-json-types",
              packageUrl: "https://github.com/transform-it/transform-json-types"
            },
            {
              label: "to Rust Serde",
              path: "/json-to-rust-serde",
              desc: "An online REPL for converting JSON to Rust Serde Structs."
            },
            {
              label: "to Mongoose Schema",
              path: "/json-to-mongoose",
              packageName: "generate-schema",
              packageUrl: "https://github.com/nijikokun/generate-schema"
            },
            {
              label: "to Big Query Schema",
              path: "/json-to-big-query",
              packageName: "generate-schema",
              packageUrl: "https://github.com/nijikokun/generate-schema"
            },
            {
              label: "to MySQL",
              path: "/json-to-mysql",
              packageName: "generate-schema",
              packageUrl: "https://github.com/nijikokun/generate-schema"
            },
            {
              label: "to Scala Case Class",
              path: "/json-to-scala-case-class"
            },
            {
              label: "to Go Struct",
              path: "/json-to-go",
              packageName: "json-to-go",
              packageUrl: "https://github.com/mholt/json-to-go"
            },
            {
              label: "to Go Bson",
              path: "/json-to-go-bson"
            },
            {
              label: "to YAML",
              path: "/json-to-yaml",
              packageName: "json2yaml",
              packageUrl: "https://github.com/jeffsu/json2yaml"
            },
            {
              label: "to JSDoc",
              path: "/json-to-jsdoc"
            },
            {
              label: "to Kotlin",
              path: "/json-to-kotlin",
              packageUrl: "https://www.npmjs.com/package/json_typegen_wasm",
              packageName: "json_typegen_wasm"
            },
            {
              label: "to Java",
              path: "/json-to-java",
              packageUrl: "https://www.npmjs.com/package/json_typegen_wasm",
              packageName: "json_typegen_wasm"
            },
            {
              label: "to JSON Schema",
              path: "/json-to-json-schema",
              packageUrl: "https://www.npmjs.com/package/json_typegen_wasm",
              packageName: "json_typegen_wasm"
            },
            {
              label: "to TOML",
              path: "/json-to-toml",
              packageUrl: "https://www.npmjs.com/package/@iarna/toml",
              packageName: "@iarna/toml"
            },
            {
              label: "to Zod Schema",
              path: "/json-to-zod",
              packageUrl: "https://www.npmjs.com/package/json-to-zod",
              packageName: "json-to-zod"
            }
          ]
        },
        {
          category: "JSON Schema",
          content: [
            {
              label: "to TypeScript",
              path: "/json-schema-to-typescript",
              packageName: "json-schema-to-typescript",
              packageUrl: "https://github.com/bcherny/json-schema-to-typescript"
            },
            {
              label: "to OpenAPI Schema",
              path: "json-schema-to-openapi-schema",
              packageName: "json-schema-to-openapi-schema",
              packageUrl:
                "https://github.com/openapi-contrib/json-schema-to-openapi-schema"
            },
            {
              label: "to Protobuf",
              path: "json-schema-to-protobuf",
              packageName: "jsonschema-protobuf",
              packageUrl: "https://github.com/okdistribute/jsonschema-protobuf"
            },
            {
              label: "to Zod Schema",
              path: "json-schema-to-zod",
              packageName: "json-schema-to-zod",
              packageUrl: "https://www.npmjs.com/package/json-schema-to-zod"
            }
          ]
        },
        {
          category: "CSS",
          content: [
            {
              label: "to JS Objects",
              path: "/css-to-js",
              packageName: "transform-css-to-js",
              packageUrl: "https://github.com/transform-it/transform-css-to-js"
            },
            {
              label: "to template literal",
              path: "/object-styles-to-template-literal",
              packageUrl:
                "https://github.com/satya164/babel-plugin-object-styles-to-template",
              packageName: "babel-plugin-object-styles-to-template"
            },
            {
              label: "to TailwindCSS",
              path: "/css-to-tailwind",
              packageUrl: "https://github.com/Jackardios/css-to-tailwindcss",
              packageName: "css-to-tailwindcss"
            }
          ]
        },
        {
          category: "JavaScript",
          content: [
            {
              label: "to JSON",
              path: "/js-object-to-json",
              desc: "An online REPL for converting JS Object to JSON."
            }
          ]
        },
        {
          category: "GraphQL",
          content: [
            {
              label: "to TypeScript",
              path: "/graphql-to-typescript"
            },
            {
              label: "to Flow",
              path: "/graphql-to-flow"
            },
            {
              label: "to JAVA",
              path: "/graphql-to-java"
            },
            {
              label: "to Resolvers Signature",
              path: "/graphql-to-resolvers-signature"
            },
            {
              label: "to Introspection JSON",
              path: "/graphql-to-introspection-json"
            },
            {
              label: "to Schema AST",
              path: "/graphql-to-schema-ast"
            },
            {
              label: "to Fragment Matcher",
              path: "/graphql-to-fragment-matcher"
            },
            {
              label: "to Components",
              path: "/graphql-to-components"
            },
            {
              label: "to TypeScript MongoDB",
              path: "/graphql-to-typescript-mongodb"
            }
          ].map(x =>
            _objectSpread(
              _objectSpread({}, x),
              {},
              {
                packageUrl:
                  "https://github.com/dotansimha/graphql-code-generator",
                packageName: "graphql-code-generator"
              }
            )
          )
        },
        {
          category: "JSON-LD",
          content: [
            {
              label: "to N-Quads",
              path: "/jsonld-to-nquads"
            },
            {
              label: "to Expanded",
              path: "/jsonld-to-expanded"
            },
            {
              label: "to Compacted",
              path: "/jsonld-to-compacted"
            },
            {
              label: "to Flattened",
              path: "/jsonld-to-flattened"
            },
            {
              label: "to Framed",
              path: "/jsonld-to-framed"
            },
            {
              label: "to Normalized",
              path: "jsonld-to-normalized"
            }
          ].map(x =>
            _objectSpread(
              _objectSpread({}, x),
              {},
              {
                packageName: "jsonld",
                packageUrl: "https://github.com/digitalbazaar/jsonld.js"
              }
            )
          )
        },
        {
          category: "TypeScript",
          content: [
            {
              label: "to Flow",
              path: "/typescript-to-flow",
              packageName: "flowgen",
              packageUrl: "https://github.com/joarwilk/flowgen"
            },
            {
              label: "to TypeScript Declaration",
              path: "/typescript-to-typescript-declaration"
            },
            {
              label: "to JSON Schema",
              path: "/typescript-to-json-schema",
              packageName: "ts-json-schema-generator",
              packageUrl: "https://github.com/vega/ts-json-schema-generator"
            },
            {
              label: "to plain JavaScript",
              path: "/typescript-to-javascript"
            },
            {
              label: "to Zod Schema",
              path: "/typescript-to-zod",
              packageName: "ts-to-zod",
              packageUrl: "https://www.npmjs.com/package/ts-to-zod"
            }
          ]
        },
        {
          category: "Flow",
          iconName: "",
          content: [
            {
              label: "to TypeScript",
              path: "/flow-to-typescript"
            },
            {
              label: "to TypeScript Declaration",
              path: "/flow-to-typescript-declaration"
            },
            {
              label: "to plain JavaScript",
              path: "/flow-to-javascript"
            }
          ]
        },
        {
          category: "Others",
          iconName: "",
          content: [
            {
              label: "XML to JSON",
              path: "/xml-to-json",
              packageName: "xml-js",
              packageUrl: "https://github.com/nashwaan/xml-js"
            },
            {
              label: "YAML to JSON",
              path: "/yaml-to-json",
              packageName: "yaml",
              packageUrl: "https://github.com/tj/js-yaml"
            },
            {
              label: "YAML to TOML",
              path: "/yaml-to-toml"
            },
            {
              label: "Markdown to HTML",
              path: "/markdown-to-html",
              packageName: "markdown",
              packageUrl: "https://github.com/evilstreak/markdown-js"
            },
            {
              label: "TOML to JSON",
              path: "/toml-to-json",
              packageUrl: "https://www.npmjs.com/package/@iarna/toml",
              packageName: "@iarna/toml"
            },
            {
              label: "TOML to YAML",
              path: "/toml-to-yaml"
            },
            {
              label: "Cadence to Go",
              path: "/cadence-to-go"
            }
          ]
        }
      ];
      const routes = lodash_flatten__WEBPACK_IMPORTED_MODULE_0___default()(
        categorizedRoutes.map((
          a // @ts-ignore
        ) =>
          a.content.map(x => {
            const _label =
              a.category.toLowerCase() !== "others"
                ? `${a.category} ${x.label}`
                : x.label;

            return _objectSpread(
              _objectSpread({}, x),
              {},
              {
                category: a.category,
                searchTerm: _label,
                desc: x.desc || `An online playground to convert ${_label}`
              }
            );
          })
        )
      );
      function activeRouteData(pathname) {
        return lodash_find__WEBPACK_IMPORTED_MODULE_1___default()(
          routes,
          o => o.path === pathname
        );
      }

      /***/
    },

    /***/ yFQW: /***/ function(module, exports) {
      module.exports = require("evergreen-ui");

      /***/
    }

    /******/
  }
);

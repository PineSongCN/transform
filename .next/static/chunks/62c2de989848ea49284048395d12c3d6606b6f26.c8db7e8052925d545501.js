("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [3],
  {
    "2qu3": function(e, n, t) {
      "use strict";
      var r = t("oI91"),
        o = t("/GRZ"),
        a = t("i2R6");
      function i(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function c(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? i(Object(t), !0).forEach(function(n) {
                r(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : i(Object(t)).forEach(function(n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function l(e, n) {
        var t;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (t = (function(e, n) {
              if (!e) return;
              if ("string" === typeof e) return s(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === t && e.constructor && (t = e.constructor.name);
              if ("Map" === t || "Set" === t) return Array.from(e);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return s(e, n);
            })(e)) ||
            (n && e && "number" === typeof e.length)
          ) {
            t && (e = t);
            var r = 0,
              o = function() {};
            return {
              s: o,
              n: function() {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function(e) {
                throw e;
              },
              f: o
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          i = !0,
          c = !1;
        return {
          s: function() {
            t = e[Symbol.iterator]();
          },
          n: function() {
            var e = t.next();
            return (i = e.done), e;
          },
          e: function(e) {
            (c = !0), (a = e);
          },
          f: function() {
            try {
              i || null == t.return || t.return();
            } finally {
              if (c) throw a;
            }
          }
        };
      }
      function s(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      (n.__esModule = !0), (n.default = void 0);
      var u,
        p = (u = t("q1tI")) && u.__esModule ? u : { default: u },
        f = t("8L3h"),
        d = t("jwwS");
      var g = [],
        m = [],
        h = !1;
      function b(e) {
        var n = e(),
          t = { loading: !0, loaded: null, error: null };
        return (
          (t.promise = n
            .then(function(e) {
              return (t.loading = !1), (t.loaded = e), e;
            })
            .catch(function(e) {
              throw ((t.loading = !1), (t.error = e), e);
            })),
          t
        );
      }
      function y(e) {
        var n = { loading: !1, loaded: {}, error: null },
          t = [];
        try {
          Object.keys(e).forEach(function(r) {
            var o = b(e[r]);
            o.loading
              ? (n.loading = !0)
              : ((n.loaded[r] = o.loaded), (n.error = o.error)),
              t.push(o.promise),
              o.promise
                .then(function(e) {
                  n.loaded[r] = e;
                })
                .catch(function(e) {
                  n.error = e;
                });
          });
        } catch (r) {
          n.error = r;
        }
        return (
          (n.promise = Promise.all(t)
            .then(function(e) {
              return (n.loading = !1), e;
            })
            .catch(function(e) {
              throw ((n.loading = !1), e);
            })),
          n
        );
      }
      function v(e, n) {
        return p.default.createElement(
          (function(e) {
            return e && e.__esModule ? e.default : e;
          })(e),
          n
        );
      }
      function j(e, n) {
        var t = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              render: v,
              webpack: null,
              modules: null
            },
            n
          ),
          r = null;
        function o() {
          if (!r) {
            var n = new O(e, t);
            r = {
              getCurrentValue: n.getCurrentValue.bind(n),
              subscribe: n.subscribe.bind(n),
              retry: n.retry.bind(n),
              promise: n.promise.bind(n)
            };
          }
          return r.promise();
        }
        if (!h && "function" === typeof t.webpack) {
          var a = t.webpack();
          m.push(function(e) {
            var n,
              t = l(a);
            try {
              for (t.s(); !(n = t.n()).done; ) {
                var r = n.value;
                if (-1 !== e.indexOf(r)) return o();
              }
            } catch (i) {
              t.e(i);
            } finally {
              t.f();
            }
          });
        }
        var i = function(e, n) {
          o();
          var a = p.default.useContext(d.LoadableContext),
            i = (0, f.useSubscription)(r);
          return (
            p.default.useImperativeHandle(
              n,
              function() {
                return { retry: r.retry };
              },
              []
            ),
            a &&
              Array.isArray(t.modules) &&
              t.modules.forEach(function(e) {
                a(e);
              }),
            p.default.useMemo(
              function() {
                return i.loading || i.error
                  ? p.default.createElement(t.loading, {
                      isLoading: i.loading,
                      pastDelay: i.pastDelay,
                      timedOut: i.timedOut,
                      error: i.error,
                      retry: r.retry
                    })
                  : i.loaded
                  ? t.render(i.loaded, e)
                  : null;
              },
              [e, i]
            )
          );
        };
        return (
          (i.preload = function() {
            return o();
          }),
          (i.displayName = "LoadableComponent"),
          p.default.forwardRef(i)
        );
      }
      var O = (function() {
        function e(n, t) {
          o(this, e),
            (this._loadFn = n),
            (this._opts = t),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          a(e, [
            {
              key: "promise",
              value: function() {
                return this._res.promise;
              }
            },
            {
              key: "retry",
              value: function() {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var n = this._res,
                  t = this._opts;
                n.loading &&
                  ("number" === typeof t.delay &&
                    (0 === t.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function() {
                          e._update({ pastDelay: !0 });
                        }, t.delay))),
                  "number" === typeof t.timeout &&
                    (this._timeout = setTimeout(function() {
                      e._update({ timedOut: !0 });
                    }, t.timeout))),
                  this._res.promise
                    .then(function() {
                      e._update({}), e._clearTimeouts();
                    })
                    .catch(function(n) {
                      e._update({}), e._clearTimeouts();
                    }),
                  this._update({});
              }
            },
            {
              key: "_update",
              value: function(e) {
                (this._state = c(
                  c({}, this._state),
                  {},
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading
                  },
                  e
                )),
                  this._callbacks.forEach(function(e) {
                    return e();
                  });
              }
            },
            {
              key: "_clearTimeouts",
              value: function() {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              }
            },
            {
              key: "getCurrentValue",
              value: function() {
                return this._state;
              }
            },
            {
              key: "subscribe",
              value: function(e) {
                var n = this;
                return (
                  this._callbacks.add(e),
                  function() {
                    n._callbacks.delete(e);
                  }
                );
              }
            }
          ]),
          e
        );
      })();
      function w(e) {
        return j(b, e);
      }
      function x(e, n) {
        for (var t = []; e.length; ) {
          var r = e.pop();
          t.push(r(n));
        }
        return Promise.all(t).then(function() {
          if (e.length) return x(e, n);
        });
      }
      (w.Map = function(e) {
        if ("function" !== typeof e.render)
          throw new Error(
            "LoadableMap requires a `render(loaded, props)` function"
          );
        return j(y, e);
      }),
        (w.preloadAll = function() {
          return new Promise(function(e, n) {
            x(g).then(e, n);
          });
        }),
        (w.preloadReady = function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function(n) {
            var t = function() {
              return (h = !0), n();
            };
            x(m, e).then(t, t);
          });
        }),
        (window.__NEXT_PRELOADREADY = w.preloadReady);
      var k = w;
      n.default = k;
    },
    "8c1N": function(e, n) {
      function t() {
        return new DOMException(
          "The request is not allowed",
          "NotAllowedError"
        );
      }
      e.exports = async function(e) {
        try {
          await (async function(e) {
            if (!navigator.clipboard) throw t();
            return navigator.clipboard.writeText(e);
          })(e);
        } catch (n) {
          try {
            await (async function(e) {
              const n = document.createElement("span");
              (n.textContent = e),
                (n.style.whiteSpace = "pre"),
                (n.style.webkitUserSelect = "auto"),
                (n.style.userSelect = "all"),
                document.body.appendChild(n);
              const r = window.getSelection(),
                o = window.document.createRange();
              r.removeAllRanges(), o.selectNode(n), r.addRange(o);
              let a = !1;
              try {
                a = window.document.execCommand("copy");
              } finally {
                r.removeAllRanges(), window.document.body.removeChild(n);
              }
              if (!a) throw t();
            })(e);
          } catch (r) {
            throw r || n || t();
          }
        }
      };
    },
    Vvt1: function(e, n, t) {
      e.exports = t("a6RD");
    },
    X1Co: function(e, n, t) {
      "use strict";
      (n.__esModule = !0),
        (n.default = function(e, n) {
          if (e && n) {
            var t = Array.isArray(n) ? n : n.split(","),
              r = e.name || "",
              o = e.type || "",
              a = o.replace(/\/.*$/, "");
            return t.some(function(e) {
              var n = e.trim();
              return "." === n.charAt(0)
                ? r.toLowerCase().endsWith(n.toLowerCase())
                : n.endsWith("/*")
                ? a === n.replace(/\/.*$/, "")
                : o === n;
            });
          }
          return !0;
        });
    },
    a6RD: function(e, n, t) {
      "use strict";
      var r = t("oI91");
      function o(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function a(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? o(Object(t), !0).forEach(function(n) {
                r(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function(n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      (n.__esModule = !0),
        (n.noSSR = l),
        (n.default = function(e, n) {
          var t = i.default,
            r = {
              loading: function(e) {
                e.error, e.isLoading;
                return e.pastDelay, null;
              }
            };
          e instanceof Promise
            ? (r.loader = function() {
                return e;
              })
            : "function" === typeof e
            ? (r.loader = e)
            : "object" === typeof e && (r = a(a({}, r), e));
          if (
            ((r = a(a({}, r), n)),
            "object" === typeof e &&
              !(e instanceof Promise) &&
              (e.render &&
                (r.render = function(n, t) {
                  return e.render(t, n);
                }),
              e.modules))
          ) {
            t = i.default.Map;
            var o = {},
              c = e.modules();
            Object.keys(c).forEach(function(e) {
              var n = c[e];
              "function" !== typeof n.then
                ? (o[e] = n)
                : (o[e] = function() {
                    return n.then(function(e) {
                      return e.default || e;
                    });
                  });
            }),
              (r.loader = o);
          }
          r.loadableGenerated &&
            delete (r = a(a({}, r), r.loadableGenerated)).loadableGenerated;
          if ("boolean" === typeof r.ssr) {
            if (!r.ssr) return delete r.ssr, l(t, r);
            delete r.ssr;
          }
          return t(r);
        });
      c(t("q1tI"));
      var i = c(t("2qu3"));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, n) {
        return delete n.webpack, delete n.modules, e(n);
      }
    },
    "c+hz": function(e, n) {
      e.exports = function() {
        return new Worker("/_next/static/fe7ea9985797f946053f.worker.js");
      };
    },
    jwwS: function(e, n, t) {
      "use strict";
      var r;
      (n.__esModule = !0), (n.LoadableContext = void 0);
      var o = ((r = t("q1tI")) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext(null);
      n.LoadableContext = o;
    },
    kiQV: function(e) {
      e.exports = JSON.parse(
        '{"name":"transform","version":"2.0.2","repository":"https://github.com/ritz078/transform","author":"ritz078 <rkritesh078@gmail.com>","license":"MIT","scripts":{"dev:inspect":"NODE_OPTIONS=\\"--inspect\\" next dev","dev":"next dev","start":"next start","format":"prettier --write \'**/*.ts\' \'**/*.tsx\'","build":"next build","now-build":"next build","postinstall":"patch-package","build:analyze":"ANALYZE=true yarn build"},"engines":{"node":"16.x"},"dependencies":{"@babel/plugin-transform-flow-strip-types":"^7.16.0","@babel/plugin-transform-typescript":"^7.16.1","@babel/standalone":"^7.14.7","@graphql-codegen/core":"^1.17.10","@graphql-codegen/flow":"^1.19.3","@graphql-codegen/flow-operations":"^1.18.11","@graphql-codegen/flow-resolvers":"^1.17.16","@graphql-codegen/fragment-matcher":"^2.0.1","@graphql-codegen/introspection":"^1.18.2","@graphql-codegen/java":"^2.0.2","@graphql-codegen/java-resolvers":"^1.18.3","@graphql-codegen/schema-ast":"^1.18.3","@graphql-codegen/typescript":"^1.22.3","@graphql-codegen/typescript-apollo-angular":"^2.3.6","@graphql-codegen/typescript-mongodb":"^1.19.3","@graphql-codegen/typescript-operations":"^1.18.2","@graphql-codegen/typescript-react-apollo":"^2.2.7","@graphql-codegen/typescript-resolvers":"^1.19.4","@graphql-codegen/typescript-stencil-apollo":"^1.18.7","@graphql-codegen/typescript-urql":"^2.0.9","@iarna/toml":"^3.0.0","@khanacademy/flow-to-ts":"^0.5.2","@lemonneko/easi-gen":"^0.0.36","@monaco-editor/react":"^4.2.1","@openapi-contrib/json-schema-to-openapi-schema":"^2.0.0","@svgr/core":"^5.5.0","@svgr/plugin-jsx":"^5.5.0","@types/jsonld":"^1.5.5","@walmartlabs/json-to-simple-graphql-schema":"^2.0.4","autoprefixer":"^10.2.6","autoprefixer9":"npm:autoprefixer@9.x.x","axios":"^0.21.1","babel-plugin-json-to-proptypes":"^0.1.0","babel-plugin-object-styles-to-template":"^0.2.2","babel-standalone":"^6.26.0","clipboard-copy":"^4.0.1","css-to-tailwindcss":"^1.0.4","evergreen-ui":"^4.28.0","flowgen":"^1.14.1","formik":"^2.2.9","generate-schema":"^2.6.0","gofmt.js":"^0.0.2","graphql":"^15.5.1","html2pug":"^4.0.0","htmltojsx":"^0.3.0","is-capitalized":"^1.0.0","is-svg":"^4.3.1","json-schema-to-typescript":"^10.1.4","json-schema-to-zod":"^0.1.2","json-to-go":"gist:0d0b8324131c80eeb7e1df20001be32f","json-to-zod":"^1.1.2","json-ts":"^1.6.4","json_typegen_wasm":"^0.7.0","jsonld":"^5.2.0","jsonschema-protobuf":"^1.0.2","lodash":"^4.17.21","markdown":"^0.5.0","next":"10.2.3","nprogress":"^0.2.0","postcss":"^8.3.5","postcss-js":"^3.0.3","postcss-nested":"^6.0.0","postcss7":"npm:postcss@7.x.x","prettier":"^1.18.2","react":"^17.0.2","react-dom":"^17.0.2","react-dropzone":"^11.0.1","recast":"^0.20.5","rust-keywords":"^1.1.0","sha1":"^1.1.1","stringify-object":"^3.3.0","svg-to-dataurl":"^1.0.0","svgo":"^1.3.2","tempy":"^1.0.1","text-encoding-utf-8":"^1.0.2","transform-json-types":"^0.7.0","ts-json-schema-generator":"^0.93.0","ts-to-zod":"^1.11.0","typescript":"4.3.4","xml-js":"^1.6.11","yaml":"^1.10.2"},"devDependencies":{"@types/lodash":"^4.14.170","@types/node":"^15.12.5","@types/prettier":"^2.3.0","@types/react":"^17.0.11","@types/svgo":"^1.3.3","husky":"^4.2.5","imagemin-lint-staged":"^0.4.0","lint-staged":"^11.0.0","patch-package":"^6.4.7","postinstall-postinstall":"^2.0.0","pretty-quick":"^3.1.1","ui-box":"2.1.0","webpack":"^4.44.1","worker-loader":"^2.0.0"},"husky":{"hooks":{"pre-commit":"pretty-quick --staged && lint-staged"}},"lint-staged":{"./assets/*/*.svg":["imagemin-lint-staged"]}}'
      );
    },
    oI91: function(e, n) {
      e.exports = function(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[n] = t),
          e
        );
      };
    },
    qQ3w: function(e, n, t) {
      "use strict";
      function r(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      t.d(n, "a", function() {
        return u;
      });
      var o = t("cpVT"),
        a = {},
        i = {},
        c = 0;
      function l(e) {
        var n = e.data,
          t = n.id,
          r = n.err,
          o = n.payload;
        if (o) {
          var c = a[t];
          c && c(o);
        } else {
          var l = i[t];
          l && l(r ? new Error(r) : "Got nothing");
        }
        delete a[t], delete i[t];
      }
      var s = (function() {
        function e(n) {
          !(function(e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            Object(o.a)(this, "worker", void 0),
            (this.worker = n),
            (this.worker.onmessage = l);
        }
        var n, t, s;
        return (
          (n = e),
          (t = [
            {
              key: "send",
              value: function(e) {
                return (function(e, n) {
                  var t = c++,
                    r = { id: t, payload: e };
                  return new Promise(function(e, o) {
                    (a[t] = e), (i[t] = o), n.postMessage(r);
                  });
                })(e, this.worker);
              }
            }
          ]) && r(n.prototype, t),
          s && r(n, s),
          e
        );
      })();
      function u(e) {
        return new s(new e());
      }
    },
    rg98: function(e, n, t) {
      "use strict";
      function r(e, n, t, r, o, a, i) {
        try {
          var c = e[a](i),
            l = c.value;
        } catch (s) {
          return void t(s);
        }
        c.done ? n(l) : Promise.resolve(l).then(r, o);
      }
      function o(e) {
        return function() {
          var n = this,
            t = arguments;
          return new Promise(function(o, a) {
            var i = e.apply(n, t);
            function c(e) {
              r(i, o, a, c, l, "next", e);
            }
            function l(e) {
              r(i, o, a, c, l, "throw", e);
            }
            c(void 0);
          });
        };
      }
      t.d(n, "a", function() {
        return o;
      });
    },
    sN8P: function(e, n, t) {
      "use strict";
      var r = {};
      t.r(r),
        t.d(r, "json", function() {
          return Le;
        }),
        t.d(r, "html", function() {
          return Me;
        }),
        t.d(r, "svg", function() {
          return Ue;
        }),
        t.d(r, "css", function() {
          return Be;
        }),
        t.d(r, "css2", function() {
          return Ve;
        }),
        t.d(r, "css3", function() {
          return Ge;
        }),
        t.d(r, "javascript", function() {
          return He;
        }),
        t.d(r, "yaml", function() {
          return Je;
        }),
        t.d(r, "xml", function() {
          return Ke;
        }),
        t.d(r, "markdown", function() {
          return We;
        }),
        t.d(r, "flow", function() {
          return Xe;
        }),
        t.d(r, "graphql", function() {
          return Ye;
        }),
        t.d(r, "graphql1", function() {
          return Qe;
        }),
        t.d(r, "graphqlDocument", function() {
          return $e;
        }),
        t.d(r, "graphqlMongodb", function() {
          return Ze;
        }),
        t.d(r, "jsObject", function() {
          return en;
        }),
        t.d(r, "jsonSchema", function() {
          return nn;
        }),
        t.d(r, "jsonLd", function() {
          return tn;
        }),
        t.d(r, "jsonLdContext", function() {
          return rn;
        }),
        t.d(r, "typescript", function() {
          return on;
        }),
        t.d(r, "typeScriptInterface", function() {
          return an;
        }),
        t.d(r, "toml", function() {
          return cn;
        }),
        t.d(r, "cadence", function() {
          return ln;
        });
      var o = t("nKUr"),
        a = t("cpVT"),
        i = t("vJKn"),
        c = t.n(i),
        l = t("rg98"),
        s = t("xvhg"),
        u = t("Ar1z"),
        p = t("uu8G"),
        f = t("jUWi"),
        d = t("Cino"),
        g = t("XW99"),
        m = t("eqHG"),
        h = t("RZpr"),
        b = t("wx14"),
        y = t("Ff2n"),
        v = t("KQm4"),
        j = t("1OyB"),
        O = t("vuIU"),
        w = t("md7G"),
        x = t("foSv"),
        k = t("JX7q"),
        D = t("Ji7U"),
        S = t("rePB"),
        C = t("q1tI"),
        P = t.n(C),
        E = t("17x9"),
        A = t.n(E),
        F = t("AnIz"),
        _ = t.n(F),
        R = t("IZhw"),
        I = t("TsTy"),
        T = "evergreen-file-picker",
        q = (function(e) {
          function n() {
            var e;
            return (
              Object(j.a)(this, n),
              (e = Object(w.a)(this, Object(x.a)(n).call(this))),
              Object(S.a)(Object(k.a)(e), "fileInputRef", function(n) {
                e.fileInput = n;
              }),
              Object(S.a)(Object(k.a)(e), "handleFileChange", function(n) {
                var t = Object(v.a)(n.target.files);
                e.setState({ files: t }), Object(I.a)(e.props.onChange, t);
              }),
              Object(S.a)(Object(k.a)(e), "handleButtonClick", function() {
                e.fileInput.click();
              }),
              Object(S.a)(Object(k.a)(e), "handleBlur", function(n) {
                n &&
                  n.target &&
                  (n.target.files = e.fileInput && e.fileInput.files),
                  Object(I.a)(e.props.onBlur, n);
              }),
              (e.state = { files: [] }),
              e
            );
          }
          return (
            Object(D.a)(n, e),
            Object(O.a)(n, [
              {
                key: "render",
                value: function() {
                  var e,
                    n,
                    t = this.props,
                    r = t.name,
                    o = t.accept,
                    a = t.required,
                    i = t.multiple,
                    c = t.disabled,
                    l = t.capture,
                    s = t.height,
                    u = (t.onChange, t.placeholder),
                    p = Object(y.a)(t, [
                      "name",
                      "accept",
                      "required",
                      "multiple",
                      "disabled",
                      "capture",
                      "height",
                      "onChange",
                      "placeholder"
                    ]),
                    f = this.state.files;
                  return (
                    (e =
                      0 === f.length
                        ? ""
                        : 1 === f.length
                        ? f[0].name
                        : "".concat(f.length, " files")),
                    (n =
                      0 === f.length
                        ? "Select file"
                        : 1 === f.length
                        ? "Replace file"
                        : "Replace files"),
                    P.a.createElement(
                      _.a,
                      Object(b.a)(
                        { display: "flex", className: "".concat(T, "-root") },
                        p
                      ),
                      P.a.createElement(_.a, {
                        innerRef: this.fileInputRef,
                        className: "".concat(T, "-file-input"),
                        is: "input",
                        type: "file",
                        name: r,
                        accept: o,
                        required: a,
                        multiple: i,
                        disabled: c,
                        capture: l,
                        onChange: this.handleFileChange,
                        display: "none"
                      }),
                      P.a.createElement(R.a, {
                        className: "".concat(T, "-text-input"),
                        readOnly: !0,
                        value: e,
                        placeholder: u,
                        borderTopRightRadius: "0 !important",
                        borderBottomRightRadius: "0 !important",
                        height: s,
                        flex: 1,
                        textOverflow: "ellipsis",
                        onBlur: this.handleBlur
                      }),
                      P.a.createElement(
                        d.a,
                        {
                          className: "".concat(T, "-button"),
                          onClick: this.handleButtonClick,
                          disabled: c,
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                          height: s,
                          flexShrink: 0,
                          type: "button",
                          onBlur: this.handleBlur
                        },
                        n
                      )
                    )
                  );
                }
              }
            ]),
            n
          );
        })(C.PureComponent);
      (q.displayName = "FilePicker"),
        Object(S.a)(q, "propTypes", {
          name: A.a.string,
          accept: A.a.oneOfType([A.a.string, A.a.arrayOf(A.a.string)]),
          required: A.a.bool,
          multiple: A.a.bool,
          disabled: A.a.bool,
          capture: A.a.bool,
          height: A.a.number,
          onChange: A.a.func,
          onBlur: A.a.func,
          placeholder: A.a.string
        }),
        Object(S.a)(q, "defaultProps", {
          placeholder: "Select a file to upload\u2026"
        });
      var z = t("BVuG"),
        N = t("glFX"),
        L = t("Vvt1"),
        M = t.n(L),
        U = t("8c1N"),
        B = t.n(U);
      function V() {
        return Object(o.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          id: "npm",
          x: "0px",
          y: "0px",
          enableBackground: "new 0 0 780 250",
          viewBox: "0 0 780 250",
          xmlSpace: "preserve",
          height: 20,
          style: { marginRight: 10 },
          children: [
            Object(o.jsx)("style", {
              dangerouslySetInnerHTML: { __html: ".st0{fill:#C12127;}" }
            }),
            Object(o.jsx)("path", {
              d:
                "M240 250h100v-50h100V0H240v250zM340 50h50v100h-50V50zM480 0v200h100V50h50v150h50V50h50v150h50V0H480zM0 200h100V50h50v150h50V0H0v200z",
              className: "st0"
            })
          ]
        });
      }
      function G(e, n, t, r) {
        return new (t || (t = Promise))(function(o, a) {
          function i(e) {
            try {
              l(r.next(e));
            } catch (n) {
              a(n);
            }
          }
          function c(e) {
            try {
              l(r.throw(e));
            } catch (n) {
              a(n);
            }
          }
          function l(e) {
            var n;
            e.done
              ? o(e.value)
              : ((n = e.value),
                n instanceof t
                  ? n
                  : new t(function(e) {
                      e(n);
                    })).then(i, c);
          }
          l((r = r.apply(e, n || [])).next());
        });
      }
      function H(e, n) {
        var t,
          r,
          o,
          a,
          i = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: []
          };
        return (
          (a = { next: c(0), throw: c(1), return: c(2) }),
          "function" === typeof Symbol &&
            (a[Symbol.iterator] = function() {
              return this;
            }),
          a
        );
        function c(a) {
          return function(c) {
            return (function(a) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((t = 1),
                    r &&
                      (o =
                        2 & a[0]
                          ? r.return
                          : a[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, a[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                    case 0:
                    case 1:
                      o = a;
                      break;
                    case 4:
                      return i.label++, { value: a[1], done: !1 };
                    case 5:
                      i.label++, (r = a[1]), (a = [0]);
                      continue;
                    case 7:
                      (a = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                        (6 === a[0] || 2 === a[0])
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                        i.label = a[1];
                        break;
                      }
                      if (6 === a[0] && i.label < o[1]) {
                        (i.label = o[1]), (o = a);
                        break;
                      }
                      if (o && i.label < o[2]) {
                        (i.label = o[2]), i.ops.push(a);
                        break;
                      }
                      o[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  a = n.call(e, i);
                } catch (c) {
                  (a = [6, c]), (r = 0);
                } finally {
                  t = o = 0;
                }
              if (5 & a[0]) throw a[1];
              return { value: a[0] ? a[1] : void 0, done: !0 };
            })([a, c]);
          };
        }
      }
      function J(e, n) {
        var t = "function" === typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var r,
          o,
          a = t.call(e),
          i = [];
        try {
          for (; (void 0 === n || n-- > 0) && !(r = a.next()).done; )
            i.push(r.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            r && !r.done && (t = a.return) && t.call(a);
          } finally {
            if (o) throw o.error;
          }
        }
        return i;
      }
      var K = new Map([
        ["avi", "video/avi"],
        ["gif", "image/gif"],
        ["ico", "image/x-icon"],
        ["jpeg", "image/jpeg"],
        ["jpg", "image/jpeg"],
        ["mkv", "video/x-matroska"],
        ["mov", "video/quicktime"],
        ["mp4", "video/mp4"],
        ["pdf", "application/pdf"],
        ["png", "image/png"],
        ["zip", "application/zip"],
        ["doc", "application/msword"],
        [
          "docx",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ]
      ]);
      function W(e, n) {
        var t = (function(e) {
          var n = e.name;
          if (n && -1 !== n.lastIndexOf(".") && !e.type) {
            var t = n
                .split(".")
                .pop()
                .toLowerCase(),
              r = K.get(t);
            r &&
              Object.defineProperty(e, "type", {
                value: r,
                writable: !1,
                configurable: !1,
                enumerable: !0
              });
          }
          return e;
        })(e);
        if ("string" !== typeof t.path) {
          var r = e.webkitRelativePath;
          Object.defineProperty(t, "path", {
            value:
              "string" === typeof n
                ? n
                : "string" === typeof r && r.length > 0
                ? r
                : e.name,
            writable: !1,
            configurable: !1,
            enumerable: !0
          });
        }
        return t;
      }
      var X = [".DS_Store", "Thumbs.db"];
      function Y(e) {
        return G(this, void 0, void 0, function() {
          return H(this, function(n) {
            return [
              2,
              ((t = e),
              t.dataTransfer && e.dataTransfer
                ? $(e.dataTransfer, e.type)
                : Q(e))
            ];
            var t;
          });
        });
      }
      function Q(e) {
        return (null !== e.target && e.target.files
          ? ee(e.target.files)
          : []
        ).map(function(e) {
          return W(e);
        });
      }
      function $(e, n) {
        return G(this, void 0, void 0, function() {
          var t;
          return H(this, function(r) {
            switch (r.label) {
              case 0:
                return e.items
                  ? ((t = ee(e.items).filter(function(e) {
                      return "file" === e.kind;
                    })),
                    "drop" !== n ? [2, t] : [4, Promise.all(t.map(ne))])
                  : [3, 2];
              case 1:
                return [2, Z(te(r.sent()))];
              case 2:
                return [
                  2,
                  Z(
                    ee(e.files).map(function(e) {
                      return W(e);
                    })
                  )
                ];
            }
          });
        });
      }
      function Z(e) {
        return e.filter(function(e) {
          return -1 === X.indexOf(e.name);
        });
      }
      function ee(e) {
        for (var n = [], t = 0; t < e.length; t++) {
          var r = e[t];
          n.push(r);
        }
        return n;
      }
      function ne(e) {
        if ("function" !== typeof e.webkitGetAsEntry) return re(e);
        var n = e.webkitGetAsEntry();
        return n && n.isDirectory ? ae(n) : re(e);
      }
      function te(e) {
        return e.reduce(function(e, n) {
          return (function() {
            for (var e = [], n = 0; n < arguments.length; n++)
              e = e.concat(J(arguments[n]));
            return e;
          })(e, Array.isArray(n) ? te(n) : [n]);
        }, []);
      }
      function re(e) {
        var n = e.getAsFile();
        if (!n) return Promise.reject(e + " is not a File");
        var t = W(n);
        return Promise.resolve(t);
      }
      function oe(e) {
        return G(this, void 0, void 0, function() {
          return H(this, function(n) {
            return [2, e.isDirectory ? ae(e) : ie(e)];
          });
        });
      }
      function ae(e) {
        var n = e.createReader();
        return new Promise(function(e, t) {
          var r = [];
          !(function o() {
            var a = this;
            n.readEntries(
              function(n) {
                return G(a, void 0, void 0, function() {
                  var a, i, c;
                  return H(this, function(l) {
                    switch (l.label) {
                      case 0:
                        if (n.length) return [3, 5];
                        l.label = 1;
                      case 1:
                        return l.trys.push([1, 3, , 4]), [4, Promise.all(r)];
                      case 2:
                        return (a = l.sent()), e(a), [3, 4];
                      case 3:
                        return (i = l.sent()), t(i), [3, 4];
                      case 4:
                        return [3, 6];
                      case 5:
                        (c = Promise.all(n.map(oe))),
                          r.push(c),
                          o(),
                          (l.label = 6);
                      case 6:
                        return [2];
                    }
                  });
                });
              },
              function(e) {
                t(e);
              }
            );
          })();
        });
      }
      function ie(e) {
        return G(this, void 0, void 0, function() {
          return H(this, function(n) {
            return [
              2,
              new Promise(function(n, t) {
                e.file(
                  function(t) {
                    var r = W(t, e.fullPath);
                    n(r);
                  },
                  function(e) {
                    t(e);
                  }
                );
              })
            ];
          });
        });
      }
      var ce = t("X1Co"),
        le = t.n(ce);
      function se(e, n) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, n) {
            if (
              !(Symbol.iterator in Object(e)) &&
              "[object Arguments]" !== Object.prototype.toString.call(e)
            )
              return;
            var t = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (t.push(i.value), !n || t.length !== n);
                r = !0
              );
            } catch (l) {
              (o = !0), (a = l);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (o) throw a;
              }
            }
            return t;
          })(e, n) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      var ue = function(e) {
          e = Array.isArray(e) && 1 === e.length ? e[0] : e;
          var n = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
          return {
            code: "file-invalid-type",
            message: "File type must be ".concat(n)
          };
        },
        pe = function(e) {
          return {
            code: "file-too-large",
            message: "File is larger than ".concat(e, " bytes")
          };
        },
        fe = function(e) {
          return {
            code: "file-too-small",
            message: "File is smaller than ".concat(e, " bytes")
          };
        },
        de = { code: "too-many-files", message: "Too many files" };
      function ge(e, n) {
        var t = "application/x-moz-file" === e.type || le()(e, n);
        return [t, t ? null : ue(n)];
      }
      function me(e, n, t) {
        if (he(e.size))
          if (he(n) && he(t)) {
            if (e.size > t) return [!1, pe(t)];
            if (e.size < n) return [!1, fe(n)];
          } else {
            if (he(n) && e.size < n) return [!1, fe(n)];
            if (he(t) && e.size > t) return [!1, pe(t)];
          }
        return [!0, null];
      }
      function he(e) {
        return void 0 !== e && null !== e;
      }
      function be(e) {
        var n = e.files,
          t = e.accept,
          r = e.minSize,
          o = e.maxSize;
        return (
          !(!e.multiple && n.length > 1) &&
          n.every(function(e) {
            var n = se(ge(e, t), 1)[0],
              a = se(me(e, r, o), 1)[0];
            return n && a;
          })
        );
      }
      function ye(e) {
        return "function" === typeof e.isPropagationStopped
          ? e.isPropagationStopped()
          : "undefined" !== typeof e.cancelBubble && e.cancelBubble;
      }
      function ve(e) {
        return e.dataTransfer
          ? Array.prototype.some.call(e.dataTransfer.types, function(e) {
              return "Files" === e || "application/x-moz-file" === e;
            })
          : !!e.target && !!e.target.files;
      }
      function je(e) {
        e.preventDefault();
      }
      function Oe(e) {
        return -1 !== e.indexOf("MSIE") || -1 !== e.indexOf("Trident/");
      }
      function we(e) {
        return -1 !== e.indexOf("Edge/");
      }
      function xe() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : window.navigator.userAgent;
        return Oe(e) || we(e);
      }
      function ke() {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
          n[t] = arguments[t];
        return function(e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            r[o - 1] = arguments[o];
          return n.some(function(n) {
            return !ye(e) && n && n.apply(void 0, [e].concat(r)), ye(e);
          });
        };
      }
      function De(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var n = 0, t = new Array(e.length); n < e.length; n++)
                t[n] = e[n];
              return t;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function Se(e, n) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, n) {
            if (
              !(Symbol.iterator in Object(e)) &&
              "[object Arguments]" !== Object.prototype.toString.call(e)
            )
              return;
            var t = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (t.push(i.value), !n || t.length !== n);
                r = !0
              );
            } catch (l) {
              (o = !0), (a = l);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (o) throw a;
              }
            }
            return t;
          })(e, n) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      function Ce(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function Pe(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Ce(t, !0).forEach(function(n) {
                Ee(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Ce(t).forEach(function(n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function Ee(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[n] = t),
          e
        );
      }
      function Ae(e, n) {
        if (null == e) return {};
        var t,
          r,
          o = (function(e, n) {
            if (null == e) return {};
            var t,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (t = a[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      var Fe = Object(C.forwardRef)(function(e, n) {
        var t = e.children,
          r = Re(Ae(e, ["children"])),
          o = r.open,
          a = Ae(r, ["open"]);
        return (
          Object(C.useImperativeHandle)(
            n,
            function() {
              return { open: o };
            },
            [o]
          ),
          P.a.createElement(C.Fragment, null, t(Pe({}, a, { open: o })))
        );
      });
      (Fe.displayName = "Dropzone"),
        (Fe.propTypes = {
          children: A.a.func,
          accept: A.a.oneOfType([A.a.string, A.a.arrayOf(A.a.string)]),
          multiple: A.a.bool,
          preventDropOnDocument: A.a.bool,
          noClick: A.a.bool,
          noKeyboard: A.a.bool,
          noDrag: A.a.bool,
          noDragEventsBubbling: A.a.bool,
          minSize: A.a.number,
          maxSize: A.a.number,
          disabled: A.a.bool,
          getFilesFromEvent: A.a.func,
          onFileDialogCancel: A.a.func,
          onDragEnter: A.a.func,
          onDragLeave: A.a.func,
          onDragOver: A.a.func,
          onDrop: A.a.func,
          onDropAccepted: A.a.func,
          onDropRejected: A.a.func
        });
      var _e = {
        isFocused: !1,
        isFileDialogActive: !1,
        isDragActive: !1,
        isDragAccept: !1,
        isDragReject: !1,
        draggedFiles: [],
        acceptedFiles: [],
        fileRejections: []
      };
      function Re() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.accept,
          t = e.disabled,
          r = void 0 !== t && t,
          o = e.getFilesFromEvent,
          a = void 0 === o ? Y : o,
          i = e.maxSize,
          c = void 0 === i ? 1 / 0 : i,
          l = e.minSize,
          s = void 0 === l ? 0 : l,
          u = e.multiple,
          p = void 0 === u || u,
          f = e.onDragEnter,
          d = e.onDragLeave,
          g = e.onDragOver,
          m = e.onDrop,
          h = e.onDropAccepted,
          b = e.onDropRejected,
          y = e.onFileDialogCancel,
          v = e.preventDropOnDocument,
          j = void 0 === v || v,
          O = e.noClick,
          w = void 0 !== O && O,
          x = e.noKeyboard,
          k = void 0 !== x && x,
          D = e.noDrag,
          S = void 0 !== D && D,
          P = e.noDragEventsBubbling,
          E = void 0 !== P && P,
          A = Object(C.useRef)(null),
          F = Object(C.useRef)(null),
          _ = Object(C.useReducer)(Ie, _e),
          R = Se(_, 2),
          I = R[0],
          T = R[1],
          q = I.isFocused,
          z = I.isFileDialogActive,
          N = I.draggedFiles,
          L = Object(C.useCallback)(
            function() {
              F.current &&
                (T({ type: "openDialog" }),
                (F.current.value = null),
                F.current.click());
            },
            [T]
          ),
          M = function() {
            z &&
              setTimeout(function() {
                F.current &&
                  (F.current.files.length ||
                    (T({ type: "closeDialog" }),
                    "function" === typeof y && y()));
              }, 300);
          };
        Object(C.useEffect)(
          function() {
            return (
              window.addEventListener("focus", M, !1),
              function() {
                window.removeEventListener("focus", M, !1);
              }
            );
          },
          [F, z, y]
        );
        var U = Object(C.useCallback)(
            function(e) {
              A.current &&
                A.current.isEqualNode(e.target) &&
                ((32 !== e.keyCode && 13 !== e.keyCode) ||
                  (e.preventDefault(), L()));
            },
            [A, F]
          ),
          B = Object(C.useCallback)(function() {
            T({ type: "focus" });
          }, []),
          V = Object(C.useCallback)(function() {
            T({ type: "blur" });
          }, []),
          G = Object(C.useCallback)(
            function() {
              w || (xe() ? setTimeout(L, 0) : L());
            },
            [F, w]
          ),
          H = Object(C.useRef)([]),
          J = function(e) {
            (A.current && A.current.contains(e.target)) ||
              (e.preventDefault(), (H.current = []));
          };
        Object(C.useEffect)(
          function() {
            return (
              j &&
                (document.addEventListener("dragover", je, !1),
                document.addEventListener("drop", J, !1)),
              function() {
                j &&
                  (document.removeEventListener("dragover", je),
                  document.removeEventListener("drop", J));
              }
            );
          },
          [A, j]
        );
        var K = Object(C.useCallback)(
            function(e) {
              e.preventDefault(),
                e.persist(),
                ne(e),
                (H.current = [].concat(De(H.current), [e.target])),
                ve(e) &&
                  Promise.resolve(a(e)).then(function(n) {
                    (ye(e) && !E) ||
                      (T({
                        draggedFiles: n,
                        isDragActive: !0,
                        type: "setDraggedFiles"
                      }),
                      f && f(e));
                  });
            },
            [a, f, E]
          ),
          W = Object(C.useCallback)(
            function(e) {
              if ((e.preventDefault(), e.persist(), ne(e), e.dataTransfer))
                try {
                  e.dataTransfer.dropEffect = "copy";
                } catch (n) {}
              return ve(e) && g && g(e), !1;
            },
            [g, E]
          ),
          X = Object(C.useCallback)(
            function(e) {
              e.preventDefault(), e.persist(), ne(e);
              var n = H.current.filter(function(e) {
                  return A.current && A.current.contains(e);
                }),
                t = n.indexOf(e.target);
              -1 !== t && n.splice(t, 1),
                (H.current = n),
                n.length > 0 ||
                  (T({
                    isDragActive: !1,
                    type: "setDraggedFiles",
                    draggedFiles: []
                  }),
                  ve(e) && d && d(e));
            },
            [A, d, E]
          ),
          Q = Object(C.useCallback)(
            function(e) {
              e.preventDefault(),
                e.persist(),
                ne(e),
                (H.current = []),
                ve(e) &&
                  Promise.resolve(a(e)).then(function(t) {
                    if (!ye(e) || E) {
                      var r = [],
                        o = [];
                      t.forEach(function(e) {
                        var t = Se(ge(e, n), 2),
                          a = t[0],
                          i = t[1],
                          l = Se(me(e, s, c), 2),
                          u = l[0],
                          p = l[1];
                        if (a && u) r.push(e);
                        else {
                          var f = [i, p].filter(function(e) {
                            return e;
                          });
                          o.push({ file: e, errors: f });
                        }
                      }),
                        !p &&
                          r.length > 1 &&
                          (r.forEach(function(e) {
                            o.push({ file: e, errors: [de] });
                          }),
                          r.splice(0)),
                        T({
                          acceptedFiles: r,
                          fileRejections: o,
                          type: "setFiles"
                        }),
                        m && m(r, o, e),
                        o.length > 0 && b && b(o, e),
                        r.length > 0 && h && h(r, e);
                    }
                  }),
                T({ type: "reset" });
            },
            [p, n, s, c, a, m, h, b, E]
          ),
          $ = function(e) {
            return r ? null : e;
          },
          Z = function(e) {
            return k ? null : $(e);
          },
          ee = function(e) {
            return S ? null : $(e);
          },
          ne = function(e) {
            E && e.stopPropagation();
          },
          te = Object(C.useMemo)(
            function() {
              return function() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = e.refKey,
                  t = void 0 === n ? "ref" : n,
                  o = e.onKeyDown,
                  a = e.onFocus,
                  i = e.onBlur,
                  c = e.onClick,
                  l = e.onDragEnter,
                  s = e.onDragOver,
                  u = e.onDragLeave,
                  p = e.onDrop,
                  f = Ae(e, [
                    "refKey",
                    "onKeyDown",
                    "onFocus",
                    "onBlur",
                    "onClick",
                    "onDragEnter",
                    "onDragOver",
                    "onDragLeave",
                    "onDrop"
                  ]);
                return Pe(
                  Ee(
                    {
                      onKeyDown: Z(ke(o, U)),
                      onFocus: Z(ke(a, B)),
                      onBlur: Z(ke(i, V)),
                      onClick: $(ke(c, G)),
                      onDragEnter: ee(ke(l, K)),
                      onDragOver: ee(ke(s, W)),
                      onDragLeave: ee(ke(u, X)),
                      onDrop: ee(ke(p, Q))
                    },
                    t,
                    A
                  ),
                  r || k ? {} : { tabIndex: 0 },
                  {},
                  f
                );
              };
            },
            [A, U, B, V, G, K, W, X, Q, k, S, r]
          ),
          re = Object(C.useCallback)(function(e) {
            e.stopPropagation();
          }, []),
          oe = Object(C.useMemo)(
            function() {
              return function() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.refKey,
                  r = void 0 === t ? "ref" : t,
                  o = e.onChange,
                  a = e.onClick,
                  i = Ae(e, ["refKey", "onChange", "onClick"]),
                  c = Ee(
                    {
                      accept: n,
                      multiple: p,
                      type: "file",
                      style: { display: "none" },
                      onChange: $(ke(o, Q)),
                      onClick: $(ke(a, re)),
                      autoComplete: "off",
                      tabIndex: -1
                    },
                    r,
                    F
                  );
                return Pe({}, c, {}, i);
              };
            },
            [F, n, p, Q, r]
          ),
          ae = N.length,
          ie =
            ae > 0 &&
            be({ files: N, accept: n, minSize: s, maxSize: c, multiple: p }),
          ce = ae > 0 && !ie;
        return Pe({}, I, {
          isDragAccept: ie,
          isDragReject: ce,
          isFocused: q && !r,
          getRootProps: te,
          getInputProps: oe,
          rootRef: A,
          inputRef: F,
          open: $(L)
        });
      }
      function Ie(e, n) {
        switch (n.type) {
          case "focus":
            return Pe({}, e, { isFocused: !0 });
          case "blur":
            return Pe({}, e, { isFocused: !1 });
          case "openDialog":
            return Pe({}, e, { isFileDialogActive: !0 });
          case "closeDialog":
            return Pe({}, e, { isFileDialogActive: !1 });
          case "setDraggedFiles":
            var t = n.isDragActive;
            return Pe({}, e, { draggedFiles: n.draggedFiles, isDragActive: t });
          case "setFiles":
            return Pe({}, e, {
              acceptedFiles: n.acceptedFiles,
              fileRejections: n.fileRejections
            });
          case "reset":
            return Pe({}, e, {
              isFileDialogActive: !1,
              isDragActive: !1,
              draggedFiles: [],
              acceptedFiles: [],
              fileRejections: []
            });
          default:
            return e;
        }
      }
      function Te(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function qe(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Te(Object(t), !0).forEach(function(n) {
                Object(a.a)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Te(Object(t)).forEach(function(n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var ze = M()(
        function() {
          return t.e(20).then(t.bind(null, "FNUm"));
        },
        {
          ssr: !1,
          loadableGenerated: {
            webpack: function() {
              return ["FNUm"];
            },
            modules: ["../components/EditorPanel.tsx -> ../components/Monaco"]
          }
        }
      );
      function Ne(e) {
        var n = e.editable,
          t = void 0 === n || n,
          r = e.title,
          a = e.settingElement,
          i = e.hasLoad,
          s = e.acceptFiles,
          p = e.hasClear,
          f = e.hasCopy,
          b = void 0 === f || f,
          y = e.topNotifications,
          v = e.language,
          j = e.defaultValue,
          O = e.onChange,
          w = e.id,
          x = e.packageDetails,
          k = Object(C.useState)(!1),
          D = k[0],
          S = k[1],
          P = Object(C.useState)(j),
          E = P[0],
          A = P[1],
          F = Object(C.useState)(""),
          _ = F[0],
          I = F[1],
          T = {
            fontSize: 14,
            readOnly: !t,
            codeLens: !1,
            fontFamily: "Menlo, Consolas, monospace, sans-serif",
            minimap: { enabled: !1 },
            quickSuggestions: !1,
            lineNumbers: "on",
            renderValidationDecorations: "off"
          },
          L = Object(C.useCallback)(
            function() {
              return S(!D);
            },
            [D]
          );
        Object(C.useEffect)(function() {
          window.__webpack_public_path__ = "/_next/static/";
        }, []);
        var M = Object(C.useCallback)(
            function() {
              return Object(o.jsxs)(o.Fragment, {
                children: [
                  Object(o.jsx)(d.a, {
                    marginRight: 10,
                    iconBefore: "cog",
                    onClick: L,
                    height: 28,
                    children: "Settings"
                  }),
                  a({ toggle: L, open: D })
                ]
              });
            },
            [D]
          ),
          U = Object(C.useCallback)(function(e) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function() {};
            if (e && e.length) {
              var t = e[0],
                r = new FileReader();
              r.readAsText(t, "utf-8"),
                (r.onload = function() {
                  A(r.result), O(r.result), n();
                });
            }
          }, []),
          G = Re({
            onDrop: function(e) {
              return U(e);
            },
            disabled: !t,
            accept: s,
            onDropRejected: function() {
              return g.a.danger("This file type is not supported.", { id: w });
            }
          }).getRootProps,
          H = Object(C.useCallback)(
            function() {
              B()(E), g.a.success("Copied to clipboard.", { id: w });
            },
            [E]
          ),
          J = Object(C.useCallback)(
            function(e) {
              Object(l.a)(
                c.a.mark(function n() {
                  var t, r;
                  return c.a.wrap(function(n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (_) {
                            n.next = 2;
                            break;
                          }
                          return n.abrupt("return");
                        case 2:
                          return (n.next = 4), fetch(_);
                        case 4:
                          return (t = n.sent), (n.next = 7), t.text();
                        case 7:
                          (r = n.sent), A(r), I(""), e(), O(r);
                        case 12:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            [_, O]
          );
        return (
          Object(C.useEffect)(
            function() {
              A(j);
            },
            [j]
          ),
          Object(o.jsxs)(u.a, {
            display: "flex",
            flex: 1,
            flexDirection: "column",
            overflow: "hidden",
            children: [
              Object(o.jsxs)(u.a, {
                display: "flex",
                height: 40,
                paddingX: 10,
                alignItems: "center",
                borderBottom: !0,
                zIndex: 2,
                backgroundColor: "#FFFFFF",
                flexShrink: 0,
                children: [
                  Object(o.jsx)(u.a, {
                    flex: 1,
                    children: Object(o.jsx)(m.a, {
                      size: 500,
                      marginTop: 0,
                      children: r
                    })
                  }),
                  a && M(),
                  i &&
                    Object(o.jsx)(h.a, {
                      content: function(e) {
                        var n = e.close;
                        return Object(o.jsxs)(u.a, {
                          paddingY: 20,
                          paddingX: 20,
                          display: "flex",
                          flex: 1,
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          backgroundColor: "#FFFFFF",
                          children: [
                            Object(o.jsx)(q, {
                              width: "100%",
                              name: "filepicker",
                              onChange: function(e) {
                                return U(e, n);
                              },
                              accept: s
                            }),
                            Object(o.jsx)(m.a, {
                              paddingY: 10,
                              size: 200,
                              children: "OR"
                            }),
                            Object(o.jsxs)(u.a, {
                              display: "flex",
                              flexDirection: "row",
                              children: [
                                Object(o.jsx)(R.a, {
                                  borderBottomRightRadius: 0,
                                  borderTopRightRadius: 0,
                                  placeholder: "Enter URL",
                                  onChange: function(e) {
                                    return I(e.target.value);
                                  }
                                }),
                                Object(o.jsx)(d.a, {
                                  borderLeftWidth: 0,
                                  borderBottomLeftRadius: 0,
                                  borderTopLeftRadius: 0,
                                  onClick: function() {
                                    return J(n);
                                  },
                                  children: "Fetch URL"
                                })
                              ]
                            })
                          ]
                        });
                      },
                      shouldCloseOnExternalClick: !0,
                      children: Object(o.jsx)(z.a, {
                        content: "Load File",
                        children: Object(o.jsx)(N.a, {
                          height: 28,
                          marginRight: 10,
                          icon: "upload"
                        })
                      })
                    }),
                  p &&
                    Object(o.jsx)(z.a, {
                      content: "Clear",
                      children: Object(o.jsx)(N.a, {
                        height: 28,
                        icon: "trash",
                        intent: "danger",
                        marginRight: 10,
                        onClick: function() {
                          return A("");
                        }
                      })
                    }),
                  x &&
                    Object(o.jsx)("a", {
                      href: x.url,
                      style: { display: "inline-flex" },
                      target: "_blank",
                      children: Object(o.jsx)(z.a, {
                        content: x.name,
                        children: Object(o.jsx)(V, {})
                      })
                    }),
                  b &&
                    Object(o.jsx)(d.a, {
                      appearance: "primary",
                      marginRight: 10,
                      iconBefore: "duplicate",
                      onClick: H,
                      height: 28,
                      children: "Copy"
                    })
                ]
              }),
              Object(o.jsxs)(
                "div",
                qe(
                  qe(
                    {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        overflow: "hidden"
                      }
                    },
                    G()
                  ),
                  {},
                  {
                    children: [
                      y && y({ isSettingsOpen: D, toggleSettings: L }),
                      Object(o.jsx)(ze, {
                        language: v,
                        value: E,
                        options: T,
                        onChange: function(e) {
                          A(e), O(e);
                        }
                      })
                    ]
                  }
                )
              )
            ]
          })
        );
      }
      var Le = JSON.stringify(
          { userId: 1, id: 1, title: "delectus aut autem", completed: !1 },
          null,
          2
        ),
        Me =
          '\x3c!-- Hello world --\x3e\n<div class="awesome" style="border: 1px solid red">\n  <label for="name">Enter your name: </label>\n  <input type="text" id="name" />\n</div>\n<p>Enter your HTML here</p>',
        Ue =
          '<svg style="flex:1;" xmlns="http://www.w3.org/2000/svg"\n  xmlns:xlink="http://www.w3.org/1999/xlink">\n  <rect x="10" y="10" height="100" width="100"\n    style="stroke:#ff0000; fill: #0000ff"/>\n</svg>',
        Be =
          ".main-wrapper {\n  flex-direction: row;\n  display: flex;\n  flex: 1;\n}\n#content {\n  flex: 1;\n}\nul {\n  padding: 20px 0;\n  flex: 1;\n}\nli {\n  font-family:'Lato';\n  color: whitesmoke;\n  line-height: 44px;\n}\n",
        Ve =
          ".alert {\n  position: relative;\n  padding: 1.6rem 4.6rem;\n  margin-bottom: 1.6rem;\n  border: 1px solid #c53030;\n  color: #fff;\n  border-radius: 0.2rem;\n  width: 100%;\n}\n\n.logo {\n  margin-bottom: 1.6rem;\n  background: url('logo.svg') no-repeat;\n  display: flex;\n  justify-content: center;\n}\n\n.button {\n  background: #81e6d9;\n  padding: 1.6rem 4.6rem;\n  letter-spacing: 0.03rem;\n  border-radius: 0.2rem;\n}\n\n.button:hover {\n  background: #2c7a7b;\n}\n\n@media (min-width: 640px) {\n  .button {\n    padding: 0.5rem 1rem;\n    width: 100%;\n  }\n}\n\n@media (min-width: 1280px) {\n  .button {\n    padding: 3rem 7rem;\n    margin-bottom: 2.4rem;\n  }\n}\n\n.username {\n  color: #718096;\n  border-color: #bee3f8;\n}\n\n.username:focus {\n  border-color: #3182ce;\n}\n\n.username::placeholder {\n  color: #cbd5e0;\n}\n\n@media (min-width: 1280px) {\n  .username {\n    width: 50%;\n  }\n}\n\n.footer {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row-reverse;\n  padding: 2.4rem 3rem;\n  border-top: 1px solid #fff5f5;\n}\n",
        Ge =
          ':root {\n  --some-color: #090909;\n}\n\n.foo {\n  padding: 0.875em 256px;\n  margin-left: 16px;\n  text-align: center;\n  font-size: 12px;\n  transition: color, background-color, border-color, text-decoration-color, fill,\n    stroke 200ms cubic-bezier(0, 0, 0.2, 1);\n  animation-delay: 200ms;\n\n  &:hover {\n    filter: blur(4px) brightness(0.5) sepia(100%) contrast(1) hue-rotate(30deg)\n      invert(0) opacity(0.05) saturate(1.5);\n    color: hsl(27, 96%, 61%);\n    font-size: 1.25rem;\n  }\n\n  &[aria-disabled="true"] {\n    width: 25%;\n    color: var(--some-color);\n    font-size: 1em;\n  }\n\n  @media (min-width: 768px) {\n    top: auto;\n    bottom: auto;\n    left: 25%;\n    right: 25%;\n  }\n\n  @media (min-width: 768px) and (max-width: 1024px) {\n    min-width: 100%;\n    margin-right: -24px;\n  }\n\n  @supports (display: grid) {\n    display: grid;\n    grid-column: span 1 / span 1;\n  }\n}\n\n.foo.bar {\n  padding: 0.875rem 256px 15%;\n  transform: translateX(12px) translateY(-0.5em) skew(1deg, 3deg)\n    scale(-0.75, 1.05) rotate(-0.25turn);\n\n  &::after {\n    content: "*";\n    animation: spin 1s linear infinite;\n  }\n}\n',
        He =
          "const container = css({\n  flex: 1,\n  padding: 10,\n  backgroundColor: 'orange',\n  color: colors.white,\n\n  '&:hover': {\n    backgroundColor: 'tomato',\n  },\n});",
        Je =
          '---\n  foo: "bar"\n  baz:\n    - "qux"\n    - "quxx"\n  corge: null\n  grault: 1\n  garply: true\n  waldo: "false"\n  fred: "undefined"\n  emptyarr: []\n  emptyobj: {}\n',
        Ke =
          "<note>\n    <to>Tove</to>\n    <from>Jani</from>\n    <heading>Reminder</heading>\n    <body>Don't forget me this weekend!</body>\n</note>\n",
        We =
          "Heading\n=======\n## Sub-heading\nParagraphs are separated\nby a blank line.\nTwo spaces at the end of a line\nproduces a line break.\nText attributes _italic_,\n**bold**, `monospace`.\nHorizontal rule:\n---\nBullet list:\n  * apples\n  * oranges\n  * pears\nNumbered list:\n  1. wash\n  2. rinse\n  3. repeat\nA [link](http://example.com).\n![Image](https://via.placeholder.com/150)\n> Markdown uses email-style > characters for blockquoting.\n",
        Xe =
          "export type AlertType = 'success'\n\nexport type AlertProps = {\n  type: AlertType,\n  text: string,\n  testId: string,\n}\n\nexport type AlertTypeIconMap = {\n  success: 'tick' | 'started',\n}\n\nconst Alert = ({ type, text, testId }: AlertProps) => {\n  const alertTypeIconMap: AlertTypeIconMap = {\n    success: 'tick',\n  }\n  const styles = getStyles({ type })\n\n  return (\n      <View style={styles.iconContainer}>\n        <Icon type={alertTypeIconMap[type]} />\n      </View>\n  )\n}\n\nexport default Alert",
        Ye =
          "type Query {\n\tuser: User!\n}\ntype User {\n\tid: ID!\n\tprofile: Profile!\n\temail: String!\n\tusername: String!\n}\ntype Profile {\n\tname: String!\n\tage: Int!\n}",
        Qe =
          "scalar Date\n\nschema {\n  query: Query\n}\n\ntype Query {\n  me: User!\n  user(id: ID!): User\n  allUsers: [User]\n  search(term: String!): [SearchResult!]!\n  myChats: [Chat!]!\n}\n\nenum Role {\n  USER,\n  ADMIN,\n}\n\ninterface Node {\n  id: ID!\n}\n\nunion SearchResult = User | Chat | ChatMessage\n\ntype User implements Node {\n  id: ID!\n  username: String!\n  email: String!\n  role: Role!\n}\n\ntype Chat implements Node {\n  id: ID!\n  users: [User!]!\n  messages: [ChatMessage!]!\n}\n\ntype ChatMessage implements Node {\n  id: ID!\n  content: String!\n  time: Date!\n  user: User!\n}\n",
        $e =
          "query findUser($userId: ID!) {\n  user(id: $userId) {\n    ...UserFields\n  }\n}\n\nfragment UserFields on User {\n  id\n  username\n  role\n}",
        Ze =
          'type User @entity {\n  id: ID! @id\n  username: String! @column\n  email: String! @column @map(\n    path: "login.email"\n  )\n  profile: Profile! @column\n  chats: [Chat!]! @link\n}\n\ntype Profile @entity(embedded: true,\n  additionalFields: [\n    { path: "dateOfBirth", type: "string" }\n  ]) {\n  name: String! @column\n  age: Int\n}\n\ntype Chat @entity {\n  id: ID! @id\n  users: [User!]! @link\n  messages: [ChatMessage!]!\n}\n\ntype ChatMessage @entity {\n  id: ID! @id\n  chat: Chat! @link\n  content: String! @column\n  author: User! @link\n}',
        en =
          "{\n\ttitle: {\n\t\ttype: 'String',\n\t\ttrim: true,\n\t\tindex: true,\n\t\trequired: true\n\t},\n\tyear: {\n\t\ttype: 'Number',\n\t\tmax: 2012,\n\t\tvalidate: 'validateBookYear'\n\t},\n\tauthor: {\n\t\ttype: 'ObjectId',\n\t\tref: 'Author',\n\t\tindex: true,\n\t\trequired: true\n\t}\n}",
        nn =
          '{\n  "$schema": "http://json-schema.org/draft-04/schema#",\n  "title": "Example Schema",\n  "type": "object",\n  "properties": {\n    "firstName": {\n      "type": "string"\n    },\n    "lastName": {\n      "type": "string"\n    },\n    "age": {\n      "description": "Age in years",\n      "type": "integer",\n      "minimum": 0\n    },\n    "height": {\n      "type": ["number", "null"]\n    },\n    "favoriteFoods": {\n      "type": "array",\n      "minItems": 0,\n      "maxItems": 2,\n      "items": {\n        "type": "string"\n      }\n    },\n    "likesDogs": {\n      "type": "boolean"\n    }\n  },\n  "required": ["firstName", "lastName"]\n}',
        tn =
          '{\n  "@context": "https://schema.org/",\n  "@type": "Person",\n  "name": "Jane Doe",\n  "jobTitle": "Professor",\n  "telephone": "(425) 123-4567",\n  "url": "http://www.janedoe.com"\n}\n',
        rn = '{\n  "@context": "https://schema.org/"\n}',
        on =
          '\nimport React from \'react\';\nexport interface Props {\n  /** The user\'s name */\n  name: string;\n  /** Should the name be rendered in bold */\n  priority?: boolean\n}\n\nexport interface FauxactClassComponent<Props extends {}, State = {}> {\n  props: Props\n  state: State\n\n  setState: (prevState: State, props: Props) => Props\n  callback?: () => void\n  render(): FauxactClassComponent<any> | null\n}\n\nexport const PrintName: React.FC<Props> = (props) => {\n  return (\n    <div>\n      <p style={{ fontWeight: props.priority ? "bold" : "normal" }}>{props.name}</p>\n    </div>\n  )\n}\n\nexport const ShowUser: React.FC<Props> = (props) => {\n  return <PrintName name="Ned" />\n}\n\nlet username = "Cersei"\nexport const ShowStoredUser: React.FC<Props> = (props) => {\n  return <PrintName name={username} priority />\n}\n\nimport { useState, useEffect } from \'react\';\n\nexport const CounterExample: React.FC<{}> = () => {\n  const [count, setCount] = useState(0);\n\n  const handleClick = () => setCount(count + 1)\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={handleClick}>\n        Click me\n      </button>\n    </div>\n  );\n}',
        an =
          "export interface Root {\n  userId: number;\n  id: number;\n  title: string;\n  completed: boolean;\n}\n\nexport interface Props {\n  /** The user's name */\n  name: string;\n  /** Should the name be rendered in bold */\n  priority?: boolean\n}",
        cn =
          'userId = 1\nid = 1\ntitle = "delectus aut autem"\ncompleted = false\n\n[company]\nid = 12\nname = "Transform Inc"',
        ln =
          '// Do not remove top level contract\n// Just paste your structs in this contract\npub contract Example {\n  pub struct ExampleStruct {\n      pub var url: String\n      pub twoCapacityArray: [String;2]\n      pub deeeeepArray: [[[[String]]]]\n\n      pub struct ExampleEmbed {\n        pub var aNumber: Int\n\n        init() {\n          self.aNumber = 0\n        }\n      }\n\n      init() {\n          self.url = ""\n          self.twoCapacityArray = []\n          self.deeeeepArray = []\n      }\n  }\n\n  pub event ExampleEvent(_ name: String, _ aDeeeeeepMap: {String:{String:{String:{String:String}}}})\n\n  // This function will be ignored if \'Generate Interaction Code With Functions\' disabled\n  pub fun hello(): String {\n    return "Hello"\n  }\n}\n',
        sn = t("kiQV"),
        un = "transform:".concat(sn.version, ":");
      function pn(e) {
        return e
          ? (function(e, n) {
              var t = Object(C.useState)(function() {
                  try {
                    var t = window.sessionStorage.getItem(un + e) || n;
                    return e.startsWith("data:") ? t : JSON.parse(t);
                  } catch (r) {
                    return n;
                  }
                }),
                r = t[0],
                o = t[1];
              return [
                r,
                function(n) {
                  try {
                    var t = n instanceof Function ? n(r) : n;
                    o(t),
                      window.sessionStorage.setItem(
                        un + e,
                        e.startsWith("data:") ? t : JSON.stringify(t)
                      );
                  } catch (a) {
                    console.log(a);
                  }
                }
              ];
            })("data:".concat(e), r[e])
          : [,];
      }
      var fn,
        dn = t("20a2"),
        gn = t("xlv/"),
        mn = t("c+hz"),
        hn = t.n(mn),
        bn = t("qQ3w");
      function yn(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function vn(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? yn(Object(t), !0).forEach(function(n) {
                Object(a.a)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : yn(Object(t)).forEach(function(n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function jn(e) {
        return { flow: "typescript" }[e] || e;
      }
      var On = function(e) {
        var n,
          t = e.splitEditorProps,
          r = e.editorProps,
          a = e.resultEditorProps,
          i = e.transformer,
          d = e.splitLanguage,
          g = e.splitTitle,
          m = e.editorLanguage,
          h = e.editorTitle,
          b = e.resultLanguage,
          y = e.resultTitle,
          v = e.editorSettingsElement,
          j = e.settings,
          O = e.editorDefaultValue,
          w = e.splitEditorDefaultValue,
          x = e.resultSettingsElement,
          k = pn(O || m),
          D = Object(s.a)(k, 2),
          S = D[0],
          P = D[1],
          E = pn(w || d),
          A = Object(s.a)(E, 2),
          F = A[0],
          _ = A[1],
          R = Object(C.useState)(""),
          I = R[0],
          T = R[1],
          q = Object(C.useState)(""),
          z = q[0],
          N = q[1],
          L = Object(C.useState)(!1),
          M = L[0],
          U = L[1],
          B = Object(dn.useRouter)(),
          V = Object(gn.a)(B.pathname);
        if (V) {
          var G = V.packageUrl,
            H = V.packageName;
          n = H && G ? { name: H, url: G } : void 0;
        }
        return (
          Object(C.useEffect)(
            function() {
              function e() {
                return (e = Object(l.a)(
                  c.a.mark(function e() {
                    var n, t;
                    return c.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                U(!0),
                                (fn = fn || Object(bn.a)(hn.a)),
                                (e.next = 5),
                                i({
                                  value: S,
                                  splitEditorValue: g ? F : void 0
                                })
                              );
                            case 5:
                              return (
                                (n = e.sent),
                                (e.next = 8),
                                fn.send({ value: n, language: b })
                              );
                            case 8:
                              (t = e.sent).startsWith(";<") && (t = t.slice(1)),
                                T(t),
                                N(""),
                                (e.next = 18);
                              break;
                            case 14:
                              (e.prev = 14),
                                (e.t0 = e.catch(0)),
                                console.error(e.t0),
                                N(e.t0.message);
                            case 18:
                              U(!1);
                            case 19:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 14]]
                    );
                  })
                )).apply(this, arguments);
              }
              !(function() {
                e.apply(this, arguments);
              })();
            },
            [F, S, g, j]
          ),
          Object(o.jsxs)(o.Fragment, {
            children: [
              Object(o.jsxs)(u.a, {
                display: "flex",
                flexDirection: "row",
                overflow: "hidden",
                flex: 1,
                height: "calc(100vh - 40px)",
                children: [
                  Object(o.jsxs)(u.a, {
                    display: "flex",
                    flex: 1,
                    borderRight: !0,
                    flexDirection: "column",
                    overflow: "hidden",
                    children: [
                      Object(o.jsx)(
                        Ne,
                        vn(
                          {
                            language: jn(m),
                            onChange: P,
                            hasLoad: !0,
                            defaultValue: S,
                            id: 1,
                            hasCopy: !1,
                            title: h,
                            settingElement: v,
                            hasClear: !0
                          },
                          r
                        )
                      ),
                      g &&
                        Object(o.jsx)(u.a, {
                          display: "flex",
                          flex: 1,
                          borderTop: !0,
                          children: Object(o.jsx)(
                            Ne,
                            vn(
                              {
                                title: g,
                                defaultValue: F,
                                language: jn(d),
                                id: 2,
                                hasCopy: !1,
                                onChange: _,
                                hasLoad: !0,
                                hasClear: !0
                              },
                              t
                            )
                          )
                        })
                    ]
                  }),
                  Object(o.jsxs)(u.a, {
                    display: "flex",
                    flex: 1,
                    position: "relative",
                    children: [
                      M &&
                        Object(o.jsx)(u.a, {
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
                          children: Object(o.jsx)(p.a, {
                            css: { "& circle": { stroke: "#0e7ccf" } },
                            size: 32
                          })
                        }),
                      Object(o.jsx)(
                        Ne,
                        vn(
                          {
                            title: y,
                            defaultValue: I,
                            language: jn(b),
                            id: 3,
                            editable: !1,
                            hasPrettier: !1,
                            settingElement: x,
                            packageDetails: n
                          },
                          a
                        )
                      )
                    ]
                  })
                ]
              }),
              z &&
                Object(o.jsx)(f.a, {
                  paddingY: 15,
                  paddingX: 20,
                  left: 240,
                  right: 0,
                  position: "absolute",
                  intent: "danger",
                  bottom: 0,
                  title: z,
                  backgroundColor: "#FAE2E2",
                  zIndex: 3
                })
            ]
          })
        );
      };
      n.a = C.memo(On);
    },
    xvhg: function(e, n, t) {
      "use strict";
      function r(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function o(e, n) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, n) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
              var t = [],
                r = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var i, c = e[Symbol.iterator]();
                  !(r = (i = c.next()).done) &&
                  (t.push(i.value), !n || t.length !== n);
                  r = !0
                );
              } catch (l) {
                (o = !0), (a = l);
              } finally {
                try {
                  r || null == c.return || c.return();
                } finally {
                  if (o) throw a;
                }
              }
              return t;
            }
          })(e, n) ||
          (function(e, n) {
            if (e) {
              if ("string" === typeof e) return r(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? r(e, n)
                  : void 0
              );
            }
          })(e, n) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      t.d(n, "a", function() {
        return o;
      });
    }
  }
]);

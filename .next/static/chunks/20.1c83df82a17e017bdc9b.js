("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [20],
  {
    FNUm: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "processSize", function() {
          return ge;
        }),
        n.d(t, "Monaco", function() {
          return pe;
        });
      var r = n("nKUr"),
        o = n("q1tI"),
        i = n.n(o);
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function(t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function(t) {
                s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function g() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function(e) {
          return t.reduceRight(function(e, t) {
            return t(e);
          }, e);
        };
      }
      function p(e) {
        return function t() {
          for (
            var n = this, r = arguments.length, o = new Array(r), i = 0;
            i < r;
            i++
          )
            o[i] = arguments[i];
          return o.length >= e.length
            ? e.apply(this, o)
            : function() {
                for (
                  var e = arguments.length, r = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  r[i] = arguments[i];
                return t.apply(n, [].concat(o, r));
              };
        };
      }
      function h(e) {
        return {}.toString.call(e).includes("Object");
      }
      function b(e) {
        return "function" === typeof e;
      }
      var m = p(function(e, t) {
          throw new Error(e[t] || e.default);
        })({
          initialIsRequired: "initial state is required",
          initialType: "initial state should be an object",
          initialContent: "initial state shouldn't be an empty object",
          handlerType: "handler should be an object or a function",
          handlersType: "all handlers should be a functions",
          selectorType: "selector should be a function",
          changeType: "provided value of changes should be an object",
          changeField:
            'it seams you want to change a field in the state which is not specified in the "initial" state',
          default: "an unknown error accured in `state-local` package"
        }),
        v = {
          changes: function(e, t) {
            return (
              h(t) || m("changeType"),
              Object.keys(t).some(function(t) {
                return (
                  (n = e), (r = t), !Object.prototype.hasOwnProperty.call(n, r)
                );
                var n, r;
              }) && m("changeField"),
              t
            );
          },
          selector: function(e) {
            b(e) || m("selectorType");
          },
          handler: function(e) {
            b(e) || h(e) || m("handlerType"),
              h(e) &&
                Object.values(e).some(function(e) {
                  return !b(e);
                }) &&
                m("handlersType");
          },
          initial: function(e) {
            var t;
            e || m("initialIsRequired"),
              h(e) || m("initialType"),
              (t = e),
              Object.keys(t).length || m("initialContent");
          }
        };
      function y(e, t) {
        return b(t) ? t(e.current) : t;
      }
      function O(e, t) {
        return (e.current = f(f({}, e.current), t)), t;
      }
      function j(e, t, n) {
        return (
          b(t)
            ? t(e.current)
            : Object.keys(n).forEach(function(n) {
                var r;
                return null === (r = t[n]) || void 0 === r
                  ? void 0
                  : r.call(t, e.current[n]);
              }),
          n
        );
      }
      var w = {
          create: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            v.initial(e), v.handler(t);
            var n = { current: e },
              r = p(j)(n, t),
              o = p(O)(n),
              i = p(v.changes)(e),
              a = p(y)(n);
            function c() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : function(e) {
                      return e;
                    };
              return v.selector(e), e(n.current);
            }
            function u(e) {
              g(r, o, i, a)(e);
            }
            return [c, u];
          }
        },
        M = {
          paths: {
            vs:
              "https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/monaco-editor/0.25.2/min/vs"
          }
        };
      var E = function(e) {
        return {}.toString.call(e).includes("Object");
      };
      var k = {
          configIsRequired: "the configuration object is required",
          configType: "the configuration object should be an object",
          default:
            "an unknown error accured in `@monaco-editor/loader` package",
          deprecation:
            "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
        },
        C = (function(e) {
          return function t() {
            for (
              var n = this, r = arguments.length, o = new Array(r), i = 0;
              i < r;
              i++
            )
              o[i] = arguments[i];
            return o.length >= e.length
              ? e.apply(this, o)
              : function() {
                  for (
                    var e = arguments.length, r = new Array(e), i = 0;
                    i < e;
                    i++
                  )
                    r[i] = arguments[i];
                  return t.apply(n, [].concat(o, r));
                };
          };
        })(function(e, t) {
          throw new Error(e[t] || e.default);
        })(k),
        P = {
          config: function(e) {
            return (
              e || C("configIsRequired"),
              E(e) || C("configType"),
              e.urls
                ? (console.warn(k.deprecation),
                  { paths: { vs: e.urls.monacoBase } })
                : e
            );
          }
        },
        R = function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return function(e) {
            return t.reduceRight(function(e, t) {
              return t(e);
            }, e);
          };
        };
      var S = function e(t, n) {
          return (
            Object.keys(n).forEach(function(r) {
              n[r] instanceof Object &&
                t[r] &&
                Object.assign(n[r], e(t[r], n[r]));
            }),
            u(u({}, t), n)
          );
        },
        T = { type: "cancelation", msg: "operation is manually canceled" };
      var N,
        V,
        I = function(e) {
          var t = !1,
            n = new Promise(function(n, r) {
              e.then(function(e) {
                return t ? r(T) : n(e);
              }),
                e.catch(r);
            });
          return (
            (n.cancel = function() {
              return (t = !0);
            }),
            n
          );
        },
        x = w.create({
          config: M,
          isInitialized: !1,
          resolve: null,
          reject: null,
          monaco: null
        }),
        L =
          ((V = 2),
          (function(e) {
            if (Array.isArray(e)) return e;
          })((N = x)) ||
            (function(e, t) {
              if (
                "undefined" !== typeof Symbol &&
                Symbol.iterator in Object(e)
              ) {
                var n = [],
                  r = !0,
                  o = !1,
                  i = void 0;
                try {
                  for (
                    var a, c = e[Symbol.iterator]();
                    !(r = (a = c.next()).done) &&
                    (n.push(a.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (u) {
                  (o = !0), (i = u);
                } finally {
                  try {
                    r || null == c.return || c.return();
                  } finally {
                    if (o) throw i;
                  }
                }
                return n;
              }
            })(N, V) ||
            (function(e, t) {
              if (e) {
                if ("string" === typeof e) return l(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? l(e, t)
                    : void 0
                );
              }
            })(N, V) ||
            (function() {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()),
        A = L[0],
        q = L[1];
      function D(e) {
        return document.body.appendChild(e);
      }
      function z(e) {
        var t = A(function(e) {
            return { config: e.config, reject: e.reject };
          }),
          n = (function(e) {
            var t = document.createElement("script");
            return e && (t.src = e), t;
          })("".concat(t.config.paths.vs, "/loader.js"));
        return (
          (n.onload = function() {
            return e();
          }),
          (n.onerror = t.reject),
          n
        );
      }
      function _() {
        var e = A(function(e) {
            return { config: e.config, resolve: e.resolve, reject: e.reject };
          }),
          t = window.require;
        t.config(e.config),
          t(
            ["vs/editor/editor.main"],
            function(t) {
              U(t), e.resolve(t);
            },
            function(t) {
              e.reject(t);
            }
          );
      }
      function U(e) {
        A().monaco || q({ monaco: e });
      }
      var F = new Promise(function(e, t) {
          return q({ resolve: e, reject: t });
        }),
        B = {
          config: function(e) {
            q(function(t) {
              return { config: S(t.config, P.config(e)) };
            });
          },
          init: function() {
            if (
              !A(function(e) {
                return { isInitialized: e.isInitialized };
              }).isInitialized
            ) {
              if (window.monaco && window.monaco.editor)
                return U(window.monaco), I(Promise.resolve(window.monaco));
              R(D, z)(_), q({ isInitialized: !0 });
            }
            return I(F);
          },
          __getMonacoInstance: function() {
            return A(function(e) {
              return e.monaco;
            });
          }
        },
        J = n("17x9"),
        W = n.n(J);
      const $ = {
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
      };
      var G = function({ content: e }) {
        return i.a.createElement("div", { style: $ }, e);
      };
      var K = {
        wrapper: {
          display: "flex",
          position: "relative",
          textAlign: "initial"
        },
        fullWidth: { width: "100%" },
        hide: { display: "none" }
      };
      function Y({
        width: e,
        height: t,
        isEditorReady: n,
        loading: r,
        _ref: o,
        className: a,
        wrapperClassName: c
      }) {
        return i.a.createElement(
          "section",
          { style: { ...K.wrapper, width: e, height: t }, className: c },
          !n && i.a.createElement(G, { content: r }),
          i.a.createElement("div", {
            ref: o,
            style: { ...K.fullWidth, ...(!n && K.hide) },
            className: a
          })
        );
      }
      Y.propTypes = {
        width: W.a.oneOfType([W.a.number, W.a.string]).isRequired,
        height: W.a.oneOfType([W.a.number, W.a.string]).isRequired,
        loading: W.a.oneOfType([W.a.element, W.a.string]).isRequired,
        isEditorReady: W.a.bool.isRequired,
        className: W.a.string,
        wrapperClassName: W.a.string
      };
      var H = Y,
        Q = Object(o.memo)(H);
      var X = function(e) {
        Object(o.useEffect)(e, []);
      };
      var Z = function(e, t, n = !0) {
        const r = Object(o.useRef)(!0);
        Object(o.useEffect)(
          r.current || !n
            ? () => {
                r.current = !1;
              }
            : e,
          t
        );
      };
      function ee() {}
      function te(e, t, n, r) {
        return (
          (function(e, t) {
            return e.editor.getModel(ne(e, t));
          })(e, r) ||
          (function(e, t, n, r) {
            return e.editor.createModel(t, n, r && ne(e, r));
          })(e, t, n, r)
        );
      }
      function ne(e, t) {
        return e.Uri.parse(t);
      }
      function re({
        original: e,
        modified: t,
        language: n,
        originalLanguage: r,
        modifiedLanguage: a,
        originalModelPath: c,
        modifiedModelPath: u,
        keepCurrentOriginalModel: l,
        keepCurrentModifiedModel: s,
        theme: d,
        loading: f,
        options: g,
        height: p,
        width: h,
        className: b,
        wrapperClassName: m,
        beforeMount: v,
        onMount: y
      }) {
        const [O, j] = Object(o.useState)(!1),
          [w, M] = Object(o.useState)(!0),
          E = Object(o.useRef)(null),
          k = Object(o.useRef)(null),
          C = Object(o.useRef)(null),
          P = Object(o.useRef)(y),
          R = Object(o.useRef)(v);
        X(() => {
          const e = B.init();
          return (
            e
              .then(e => (k.current = e) && M(!1))
              .catch(
                e =>
                  "cancelation" !==
                    (null === e || void 0 === e ? void 0 : e.type) &&
                  console.error("Monaco initialization: error:", e)
              ),
            () =>
              E.current
                ? (function() {
                    const e = E.current.getModel();
                    var t, n;
                    l ||
                      null === (t = e.original) ||
                      void 0 === t ||
                      t.dispose();
                    s ||
                      null === (n = e.modified) ||
                      void 0 === n ||
                      n.dispose();
                    E.current.dispose();
                  })()
                : e.cancel()
          );
        }),
          Z(
            () => {
              const e = E.current.getModifiedEditor();
              e.getOption(k.current.editor.EditorOption.readOnly)
                ? e.setValue(t)
                : t !== e.getValue() &&
                  (e.executeEdits("", [
                    {
                      range: e.getModel().getFullModelRange(),
                      text: t,
                      forceMoveMarkers: !0
                    }
                  ]),
                  e.pushUndoStop());
            },
            [t],
            O
          ),
          Z(
            () => {
              E.current.getModel().original.setValue(e);
            },
            [e],
            O
          ),
          Z(
            () => {
              const { original: e, modified: t } = E.current.getModel();
              k.current.editor.setModelLanguage(e, r || n),
                k.current.editor.setModelLanguage(t, a || n);
            },
            [n, r, a],
            O
          ),
          Z(
            () => {
              k.current.editor.setTheme(d);
            },
            [d],
            O
          ),
          Z(
            () => {
              E.current.updateOptions(g);
            },
            [g],
            O
          );
        const S = Object(o.useCallback)(() => {
            R.current(k.current);
            const o = k.current.editor.createModel(
                e,
                r || n,
                c && k.current.Uri.parse(c)
              ),
              i = k.current.editor.createModel(
                t,
                a || n,
                u && k.current.Uri.parse(u)
              );
            E.current.setModel({ original: o, modified: i });
          }, [n, t, a, e, r, c, u]),
          T = Object(o.useCallback)(() => {
            (E.current = k.current.editor.createDiffEditor(C.current, {
              automaticLayout: !0,
              ...g
            })),
              S(),
              k.current.editor.setTheme(d),
              j(!0);
          }, [g, d, S]);
        return (
          Object(o.useEffect)(() => {
            O && P.current(E.current, k.current);
          }, [O]),
          Object(o.useEffect)(() => {
            !w && !O && T();
          }, [w, O, T]),
          i.a.createElement(Q, {
            width: h,
            height: p,
            isEditorReady: O,
            loading: f,
            _ref: C,
            className: b,
            wrapperClassName: m
          })
        );
      }
      (re.propTypes = {
        original: W.a.string,
        modified: W.a.string,
        language: W.a.string,
        originalLanguage: W.a.string,
        modifiedLanguage: W.a.string,
        originalModelPath: W.a.string,
        modifiedModelPath: W.a.string,
        keepCurrentOriginalModel: W.a.bool,
        keepCurrentModifiedModel: W.a.bool,
        theme: W.a.string,
        loading: W.a.oneOfType([W.a.element, W.a.string]),
        options: W.a.object,
        width: W.a.oneOfType([W.a.number, W.a.string]),
        height: W.a.oneOfType([W.a.number, W.a.string]),
        className: W.a.string,
        wrapperClassName: W.a.string,
        beforeMount: W.a.func,
        onMount: W.a.func
      }),
        (re.defaultProps = {
          theme: "light",
          loading: "Loading...",
          options: {},
          keepCurrentOriginalModel: !1,
          keepCurrentModifiedModel: !1,
          width: "100%",
          height: "100%",
          beforeMount: ee,
          onMount: ee
        });
      var oe = function(e) {
        const t = Object(o.useRef)();
        return (
          Object(o.useEffect)(() => {
            t.current = e;
          }, [e]),
          t.current
        );
      };
      const [ie, ae] = w.create({ backup: null }),
        ce = new Map();
      function ue({
        defaultValue: e,
        defaultLanguage: t,
        defaultPath: n,
        value: r,
        language: a,
        path: c,
        theme: u,
        line: l,
        loading: s,
        options: d,
        overrideServices: f,
        saveViewState: g,
        keepCurrentModel: p,
        width: h,
        height: b,
        className: m,
        wrapperClassName: v,
        beforeMount: y,
        onMount: O,
        onChange: j,
        onValidate: w
      }) {
        const [M, E] = Object(o.useState)(!1),
          [k, C] = Object(o.useState)(!0),
          P = Object(o.useRef)(null),
          R = Object(o.useRef)(null),
          S = Object(o.useRef)(null),
          T = Object(o.useRef)(O),
          N = Object(o.useRef)(y),
          V = Object(o.useRef)(null),
          I = Object(o.useRef)(r),
          x = oe(c);
        X(() => {
          const e = B.init();
          return (
            e
              .then(e => (P.current = e) && C(!1))
              .catch(
                e =>
                  "cancelation" !==
                    (null === e || void 0 === e ? void 0 : e.type) &&
                  console.error("Monaco initialization: error:", e)
              ),
            () =>
              R.current
                ? (function() {
                    var e, t;
                    null === (e = V.current) || void 0 === e || e.dispose(),
                      p
                        ? g && ce.set(c, R.current.saveViewState())
                        : null === (t = R.current.getModel()) ||
                          void 0 === t ||
                          t.dispose();
                    R.current.dispose();
                  })()
                : e.cancel()
          );
        }),
          Z(
            () => {
              const n = te(P.current, e || r, t || a, c);
              n !== R.current.getModel() &&
                (g && ce.set(x, R.current.saveViewState()),
                R.current.setModel(n),
                g && R.current.restoreViewState(ce.get(c)));
            },
            [c],
            M
          ),
          Z(
            () => {
              R.current.updateOptions(d);
            },
            [d],
            M
          ),
          Z(
            () => {
              R.current.getOption(P.current.editor.EditorOption.readOnly)
                ? R.current.setValue(r)
                : r !== R.current.getValue() &&
                  (R.current.executeEdits("", [
                    {
                      range: R.current.getModel().getFullModelRange(),
                      text: r,
                      forceMoveMarkers: !0
                    }
                  ]),
                  R.current.pushUndoStop());
            },
            [r],
            M
          ),
          Z(
            () => {
              P.current.editor.setModelLanguage(R.current.getModel(), a);
            },
            [a],
            M
          ),
          Z(
            () => {
              void 0 !== l && R.current.revealLine(l);
            },
            [l],
            M
          ),
          Z(
            () => {
              P.current.editor.setTheme(u);
            },
            [u],
            M
          );
        const L = Object(o.useCallback)(() => {
          N.current(P.current);
          const o = c || n,
            i = te(P.current, r || e, t || a, o);
          (R.current = P.current.editor.create(
            S.current,
            { model: i, automaticLayout: !0, ...d },
            f
          )),
            g && R.current.restoreViewState(ce.get(o)),
            P.current.editor.setTheme(u),
            ie().backup || ae({ backup: P.current.editor.setModelMarkers }),
            E(!0);
        }, [e, t, n, r, a, c, d, f, g, u]);
        return (
          Object(o.useEffect)(() => {
            M && T.current(R.current, P.current);
          }, [M]),
          Object(o.useEffect)(() => {
            !k && !M && L();
          }, [k, M, L]),
          (I.current = r),
          Object(o.useEffect)(() => {
            var e, t;
            M &&
              j &&
              (null === (e = V.current) || void 0 === e || e.dispose(),
              (V.current =
                null === (t = R.current) || void 0 === t
                  ? void 0
                  : t.onDidChangeModelContent(e => {
                      const t = R.current.getValue();
                      I.current !== t && j(t, e);
                    })));
          }, [M, j]),
          Object(o.useEffect)(() => {
            M &&
              (P.current.editor.setModelMarkers = function(e, t, n) {
                var r;
                null === (r = ie().backup) ||
                  void 0 === r ||
                  r.call(P.current.editor, e, t, n),
                  null === w || void 0 === w || w(n);
              });
          }, [M, w]),
          i.a.createElement(Q, {
            width: h,
            height: b,
            isEditorReady: M,
            loading: s,
            _ref: S,
            className: m,
            wrapperClassName: v
          })
        );
      }
      (ue.propTypes = {
        defaultValue: W.a.string,
        defaultPath: W.a.string,
        defaultLanguage: W.a.string,
        value: W.a.string,
        language: W.a.string,
        path: W.a.string,
        theme: W.a.string,
        line: W.a.number,
        loading: W.a.oneOfType([W.a.element, W.a.string]),
        options: W.a.object,
        overrideServices: W.a.object,
        saveViewState: W.a.bool,
        keepCurrentModel: W.a.bool,
        width: W.a.oneOfType([W.a.number, W.a.string]),
        height: W.a.oneOfType([W.a.number, W.a.string]),
        className: W.a.string,
        wrapperClassName: W.a.string,
        beforeMount: W.a.func,
        onMount: W.a.func,
        onChange: W.a.func,
        onValidate: W.a.func
      }),
        (ue.defaultProps = {
          theme: "light",
          loading: "Loading...",
          options: {},
          overrideServices: {},
          saveViewState: !0,
          keepCurrentModel: !1,
          width: "100%",
          height: "100%",
          beforeMount: ee,
          onMount: ee,
          onValidate: ee
        });
      var le = ue,
        se = Object(o.memo)(le),
        de = n("Ar1z"),
        fe = n("uu8G");
      function ge(e) {
        return /^\d+$/.test(e) ? "".concat(e, "px") : e;
      }
      var pe = function(e) {
        var t = e.language,
          n = e.value,
          o = e.defaultValue,
          i = e.height,
          a = e.width,
          c = e.options,
          u = e.onChange;
        return Object(r.jsx)(se, {
          defaultLanguage: t,
          defaultValue: o,
          value: n,
          height: i,
          width: a,
          options: c,
          onChange: u,
          loading: Object(r.jsx)(de.a, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 400,
            flex: 1,
            children: Object(r.jsx)(fe.a, {})
          })
        });
      };
      t.default = pe;
    }
  }
]);

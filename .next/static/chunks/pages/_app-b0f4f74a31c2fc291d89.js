_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [29],
  {
    "/0+H": function(e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function() {
          return i(o.default.useContext(a.AmpStateContext));
        });
      var r,
        o = (r = n("q1tI")) && r.__esModule ? r : { default: r },
        a = n("lwAK");
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          a = e.hasQuery,
          i = void 0 !== a && a;
        return n || (o && i);
      }
    },
    "48fX": function(e, t, n) {
      var r = n("qhzo");
      e.exports = function(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && r(e, t);
      };
    },
    "5fIB": function(e, t, n) {
      var r = n("7eYB");
      e.exports = function(e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    7: function(e, t, n) {
      n("74v/"), (e.exports = n("nOHt"));
    },
    "74v/": function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function() {
          return n("cha2");
        }
      ]);
    },
    "8Kt/": function(e, t, n) {
      "use strict";
      var r = n("oI91");
      function o(e, t) {
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
      (t.__esModule = !0), (t.defaultHead = p), (t.default = void 0);
      var a,
        i = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return { default: e };
          var t = f();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        c = (a = n("Xuae")) && a.__esModule ? a : { default: a },
        s = n("lwAK"),
        u = n("FYa8"),
        l = n("/0+H");
      function f() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [i.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              i.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width"
              })
            ),
          t
        );
      }
      function d(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === i.default.Fragment
          ? e.concat(
              i.default.Children.toArray(t.props.children).reduce(function(
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var h = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(e, t) {
        return e
          .reduce(function(e, t) {
            var n = i.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(d, [])
          .reverse()
          .concat(p(t.inAmpMode))
          .filter(
            (function() {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function(o) {
                var a = !0,
                  i = !1;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  i = !0;
                  var c = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(c) ? (a = !1) : e.add(c);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (var s = 0, u = h.length; s < u; s++) {
                      var l = h[s];
                      if (o.props.hasOwnProperty(l))
                        if ("charSet" === l) n.has(l) ? (a = !1) : n.add(l);
                        else {
                          var f = o.props[l],
                            p = r[l] || new Set();
                          ("name" === l && i) || !p.has(f)
                            ? (p.add(f), (r[l] = p))
                            : (a = !1);
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function(e, n) {
            var a = e.key || n;
            if (
              !t.inAmpMode &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/"
              ].some(function(t) {
                return e.props.href.startsWith(t);
              })
            ) {
              var c = (function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? o(Object(n), !0).forEach(function(t) {
                        r(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : o(Object(n)).forEach(function(t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })({}, e.props || {});
              return (
                (c["data-href"] = c.href),
                (c.href = void 0),
                (c["data-optimized-fonts"] = !0),
                i.default.cloneElement(e, c)
              );
            }
            return i.default.cloneElement(e, { key: a });
          });
      }
      function v(e) {
        var t = e.children,
          n = (0, i.useContext)(s.AmpStateContext),
          r = (0, i.useContext)(u.HeadManagerContext);
        return i.default.createElement(
          c.default,
          {
            reduceComponentsToState: m,
            headManager: r,
            inAmpMode: (0, l.isInAmpMode)(n)
          },
          t
        );
      }
      v.rewind = function() {};
      var g = v;
      t.default = g;
    },
    FYa8: function(e, t, n) {
      "use strict";
      var r;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var o = ((r = n("q1tI")) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({});
      t.HeadManagerContext = o;
    },
    Mj6V: function(e, t, n) {
      var r, o;
      void 0 ===
        (o =
          "function" ===
          typeof (r = function() {
            var e = { version: "0.2.0" },
              t = (e.settings = {
                minimum: 0.08,
                easing: "ease",
                positionUsing: "",
                speed: 200,
                trickle: !0,
                trickleRate: 0.02,
                trickleSpeed: 800,
                showSpinner: !0,
                barSelector: '[role="bar"]',
                spinnerSelector: '[role="spinner"]',
                parent: "body",
                template:
                  '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
              });
            function n(e, t, n) {
              return e < t ? t : e > n ? n : e;
            }
            function r(e) {
              return 100 * (-1 + e);
            }
            function o(e, n, o) {
              var a;
              return (
                ((a =
                  "translate3d" === t.positionUsing
                    ? { transform: "translate3d(" + r(e) + "%,0,0)" }
                    : "translate" === t.positionUsing
                    ? { transform: "translate(" + r(e) + "%,0)" }
                    : { "margin-left": r(e) + "%" }).transition =
                  "all " + n + "ms " + o),
                a
              );
            }
            (e.configure = function(e) {
              var n, r;
              for (n in e)
                void 0 !== (r = e[n]) && e.hasOwnProperty(n) && (t[n] = r);
              return this;
            }),
              (e.status = null),
              (e.set = function(r) {
                var c = e.isStarted();
                (r = n(r, t.minimum, 1)), (e.status = 1 === r ? null : r);
                var s = e.render(!c),
                  u = s.querySelector(t.barSelector),
                  l = t.speed,
                  f = t.easing;
                return (
                  s.offsetWidth,
                  a(function(n) {
                    "" === t.positionUsing &&
                      (t.positionUsing = e.getPositioningCSS()),
                      i(u, o(r, l, f)),
                      1 === r
                        ? (i(s, { transition: "none", opacity: 1 }),
                          s.offsetWidth,
                          setTimeout(function() {
                            i(s, {
                              transition: "all " + l + "ms linear",
                              opacity: 0
                            }),
                              setTimeout(function() {
                                e.remove(), n();
                              }, l);
                          }, l))
                        : setTimeout(n, l);
                  }),
                  this
                );
              }),
              (e.isStarted = function() {
                return "number" === typeof e.status;
              }),
              (e.start = function() {
                e.status || e.set(0);
                var n = function() {
                  setTimeout(function() {
                    e.status && (e.trickle(), n());
                  }, t.trickleSpeed);
                };
                return t.trickle && n(), this;
              }),
              (e.done = function(t) {
                return t || e.status
                  ? e.inc(0.3 + 0.5 * Math.random()).set(1)
                  : this;
              }),
              (e.inc = function(t) {
                var r = e.status;
                return r
                  ? ("number" !== typeof t &&
                      (t = (1 - r) * n(Math.random() * r, 0.1, 0.95)),
                    (r = n(r + t, 0, 0.994)),
                    e.set(r))
                  : e.start();
              }),
              (e.trickle = function() {
                return e.inc(Math.random() * t.trickleRate);
              }),
              (function() {
                var t = 0,
                  n = 0;
                e.promise = function(r) {
                  return r && "resolved" !== r.state()
                    ? (0 === n && e.start(),
                      t++,
                      n++,
                      r.always(function() {
                        0 === --n ? ((t = 0), e.done()) : e.set((t - n) / t);
                      }),
                      this)
                    : this;
                };
              })(),
              (e.render = function(n) {
                if (e.isRendered()) return document.getElementById("nprogress");
                s(document.documentElement, "nprogress-busy");
                var o = document.createElement("div");
                (o.id = "nprogress"), (o.innerHTML = t.template);
                var a,
                  c = o.querySelector(t.barSelector),
                  u = n ? "-100" : r(e.status || 0),
                  l = document.querySelector(t.parent);
                return (
                  i(c, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + u + "%,0,0)"
                  }),
                  t.showSpinner ||
                    ((a = o.querySelector(t.spinnerSelector)) && f(a)),
                  l != document.body && s(l, "nprogress-custom-parent"),
                  l.appendChild(o),
                  o
                );
              }),
              (e.remove = function() {
                u(document.documentElement, "nprogress-busy"),
                  u(
                    document.querySelector(t.parent),
                    "nprogress-custom-parent"
                  );
                var e = document.getElementById("nprogress");
                e && f(e);
              }),
              (e.isRendered = function() {
                return !!document.getElementById("nprogress");
              }),
              (e.getPositioningCSS = function() {
                var e = document.body.style,
                  t =
                    "WebkitTransform" in e
                      ? "Webkit"
                      : "MozTransform" in e
                      ? "Moz"
                      : "msTransform" in e
                      ? "ms"
                      : "OTransform" in e
                      ? "O"
                      : "";
                return t + "Perspective" in e
                  ? "translate3d"
                  : t + "Transform" in e
                  ? "translate"
                  : "margin";
              });
            var a = (function() {
                var e = [];
                function t() {
                  var n = e.shift();
                  n && n(t);
                }
                return function(n) {
                  e.push(n), 1 == e.length && t();
                };
              })(),
              i = (function() {
                var e = ["Webkit", "O", "Moz", "ms"],
                  t = {};
                function n(e) {
                  return e
                    .replace(/^-ms-/, "ms-")
                    .replace(/-([\da-z])/gi, function(e, t) {
                      return t.toUpperCase();
                    });
                }
                function r(t) {
                  var n = document.body.style;
                  if (t in n) return t;
                  for (
                    var r,
                      o = e.length,
                      a = t.charAt(0).toUpperCase() + t.slice(1);
                    o--;

                  )
                    if ((r = e[o] + a) in n) return r;
                  return t;
                }
                function o(e) {
                  return (e = n(e)), t[e] || (t[e] = r(e));
                }
                function a(e, t, n) {
                  (t = o(t)), (e.style[t] = n);
                }
                return function(e, t) {
                  var n,
                    r,
                    o = arguments;
                  if (2 == o.length)
                    for (n in t)
                      void 0 !== (r = t[n]) &&
                        t.hasOwnProperty(n) &&
                        a(e, n, r);
                  else a(e, o[1], o[2]);
                };
              })();
            function c(e, t) {
              return (
                ("string" == typeof e ? e : l(e)).indexOf(" " + t + " ") >= 0
              );
            }
            function s(e, t) {
              var n = l(e),
                r = n + t;
              c(n, t) || (e.className = r.substring(1));
            }
            function u(e, t) {
              var n,
                r = l(e);
              c(e, t) &&
                ((n = r.replace(" " + t + " ", " ")),
                (e.className = n.substring(1, n.length - 1)));
            }
            function l(e) {
              return (" " + (e.className || "") + " ").replace(/\s+/gi, " ");
            }
            function f(e) {
              e && e.parentNode && e.parentNode.removeChild(e);
            }
            return e;
          })
            ? r.call(t, n, t, e)
            : r) || (e.exports = o);
    },
    T0f4: function(e, t) {
      function n(t) {
        return (
          (e.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          n(t)
        );
      }
      e.exports = n;
    },
    Xuae: function(e, t, n) {
      "use strict";
      var r = n("mPvQ"),
        o = n("/GRZ"),
        a = n("i2R6"),
        i = (n("qXWd"), n("48fX")),
        c = n("tCBg"),
        s = n("T0f4");
      function u(e) {
        var t = (function() {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function() {
          var n,
            r = s(e);
          if (t) {
            var o = s(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return c(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var l = n("q1tI"),
        f = (function(e) {
          i(n, e);
          var t = u(n);
          function n(e) {
            var a;
            return (
              o(this, n),
              ((a = t.call(this, e))._hasHeadManager = void 0),
              (a.emitChange = function() {
                a._hasHeadManager &&
                  a.props.headManager.updateHead(
                    a.props.reduceComponentsToState(
                      r(a.props.headManager.mountedInstances),
                      a.props
                    )
                  );
              }),
              (a._hasHeadManager =
                a.props.headManager && a.props.headManager.mountedInstances),
              a
            );
          }
          return (
            a(n, [
              {
                key: "componentDidMount",
                value: function() {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                }
              },
              {
                key: "componentDidUpdate",
                value: function() {
                  this.emitChange();
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                }
              },
              {
                key: "render",
                value: function() {
                  return null;
                }
              }
            ]),
            n
          );
        })(l.Component);
      t.default = f;
    },
    YFqc: function(e, t, n) {
      e.exports = n("cTJO");
    },
    cTJO: function(e, t, n) {
      "use strict";
      var r = n("zoAU"),
        o = n("7KCV");
      (t.__esModule = !0), (t.default = void 0);
      var a = o(n("q1tI")),
        i = n("elyg"),
        c = n("nOHt"),
        s = n("vNVm"),
        u = {};
      function l(e, t, n, r) {
        if (e && (0, i.isLocalURL)(t)) {
          e.prefetch(t, n, r).catch(function(e) {
            0;
          });
          var o =
            r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
          u[t + "%" + n + (o ? "%" + o : "")] = !0;
        }
      }
      var f = function(e) {
        var t = !1 !== e.prefetch,
          n = (0, c.useRouter)(),
          o = (n && n.asPath) || "/",
          f = a.default.useMemo(
            function() {
              var t = (0, i.resolveHref)(o, e.href, !0),
                n = r(t, 2),
                a = n[0],
                c = n[1];
              return {
                href: a,
                as: e.as ? (0, i.resolveHref)(o, e.as) : c || a
              };
            },
            [o, e.href, e.as]
          ),
          p = f.href,
          d = f.as,
          h = e.children,
          m = e.replace,
          v = e.shallow,
          g = e.scroll,
          b = e.locale;
        "string" === typeof h && (h = a.default.createElement("a", null, h));
        var y = a.Children.only(h),
          j = y && "object" === typeof y && y.ref,
          O = (0, s.useIntersection)({ rootMargin: "200px" }),
          x = r(O, 2),
          w = x[0],
          k = x[1],
          M = a.default.useCallback(
            function(e) {
              w(e),
                j &&
                  ("function" === typeof j
                    ? j(e)
                    : "object" === typeof j && (j.current = e));
            },
            [j, w]
          );
        (0, a.useEffect)(
          function() {
            var e = k && t && (0, i.isLocalURL)(p),
              r = "undefined" !== typeof b ? b : n && n.locale,
              o = u[p + "%" + d + (r ? "%" + r : "")];
            e && !o && l(n, p, d, { locale: r });
          },
          [d, p, k, b, t, n]
        );
        var _ = {
          ref: M,
          onClick: function(e) {
            y.props &&
              "function" === typeof y.props.onClick &&
              y.props.onClick(e),
              e.defaultPrevented ||
                (function(e, t, n, r, o, a, c, s) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function(e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      (0, i.isLocalURL)(n))) &&
                    (e.preventDefault(),
                    null == c && (c = r.indexOf("#") < 0),
                    t[o ? "replace" : "push"](n, r, {
                      shallow: a,
                      locale: s,
                      scroll: c
                    }));
                })(e, n, p, d, m, v, g, b);
          },
          onMouseEnter: function(e) {
            (0, i.isLocalURL)(p) &&
              (y.props &&
                "function" === typeof y.props.onMouseEnter &&
                y.props.onMouseEnter(e),
              l(n, p, d, { priority: !0 }));
          }
        };
        if (e.passHref || ("a" === y.type && !("href" in y.props))) {
          var C = "undefined" !== typeof b ? b : n && n.locale,
            S =
              n &&
              n.isLocaleDomain &&
              (0, i.getDomainLocale)(
                d,
                C,
                n && n.locales,
                n && n.domainLocales
              );
          _.href =
            S ||
            (0, i.addBasePath)((0, i.addLocale)(d, C, n && n.defaultLocale));
        }
        return a.default.cloneElement(y, _);
      };
      t.default = f;
    },
    cha2: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function() {
          return C;
        });
      var r = n("nKUr"),
        o = n("cpVT"),
        a = n("q1tI"),
        i = n("Ar1z"),
        c = n("BVuG"),
        s = n("glFX"),
        u = n("Cino"),
        l = n("eqHG"),
        f = n("raqX"),
        p = n("xlv/"),
        d = n("YFqc"),
        h = n.n(d),
        m = n("20a2"),
        v = n("aS0K");
      function g() {
        var e = Object(m.useRouter)();
        return Object(r.jsxs)(i.a, {
          width: 240,
          height: "calc(100vh - 40px)",
          borderRight: !0,
          display: "flex",
          flexDirection: "column",
          paddingTop: 20,
          backgroundColor: "#FFFFFF",
          children: [
            Object(r.jsx)(i.a, {
              paddingX: 15,
              children: Object(r.jsx)(v.a, {})
            }),
            Object(r.jsx)(i.a, {
              display: "flex",
              flex: 1,
              overflowY: "scroll",
              flexDirection: "column",
              paddingBottom: 10,
              children: p.b.map(function(t) {
                return Object(r.jsxs)(
                  a.Fragment,
                  {
                    children: [
                      Object(r.jsx)(i.a, {
                        paddingX: 10,
                        marginTop: 15,
                        marginBottom: 2,
                        children: Object(r.jsx)(l.a, {
                          marginLeft: 5,
                          size: 400,
                          children: t.category
                        })
                      }),
                      t.content
                        .sort(function(e, t) {
                          return e.label.localeCompare(t.label);
                        })
                        .map(function(t) {
                          var n = e.pathname === t.path;
                          return Object(r.jsx)(
                            h.a,
                            {
                              href: t.path,
                              prefetch: !1,
                              children: Object(r.jsx)("a", {
                                style: { textDecoration: "none" },
                                children: Object(r.jsx)(i.a, {
                                  paddingLeft: 16,
                                  paddingY: 3,
                                  backgroundColor: n ? "#f3f3f3" : void 0,
                                  borderLeft: n
                                    ? "3px solid #009688"
                                    : "3px solid transparent",
                                  css: {
                                    "&:hover": { backgroundColor: "#f5f5f5" }
                                  },
                                  children: Object(r.jsx)(f.a, {
                                    fontSize: 13,
                                    children: t.label
                                  })
                                })
                              })
                            },
                            t.label
                          );
                        })
                    ]
                  },
                  t.category
                );
              })
            }),
            Object(r.jsxs)(i.a, {
              borderTop: !0,
              children: [
                Object(r.jsx)("a", {
                  href:
                    "https://vercel.com?utm_source=ritz078&utm_campaign=oss",
                  target: "_blank",
                  children: Object(r.jsx)("img", {
                    src:
                      "https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg",
                    alt: "Vercel",
                    style: {
                      height: 40,
                      display: "block",
                      margin: "10px auto 0"
                    }
                  })
                }),
                Object(r.jsxs)(l.a, {
                  size: 400,
                  paddingY: 15,
                  textAlign: "center",
                  children: [
                    "Created by",
                    " ",
                    Object(r.jsx)("a", {
                      href: "https://twitter.com/ritz078",
                      target: "_blank",
                      children: "@ritz078"
                    })
                  ]
                })
              ]
            })
          ]
        });
      }
      n("iJnL");
      var b = n("Mj6V"),
        y = n.n(b),
        j = n("g4pe"),
        O = n.n(j),
        x = function(e) {
          var t = e.title,
            n = e.description,
            o = e.url;
          return Object(r.jsxs)(O.a, {
            children: [
              Object(r.jsx)("title", { children: t }),
              Object(r.jsx)("link", {
                rel: "icon",
                href: "/static/favicon.png",
                type: "image/png"
              }),
              Object(r.jsx)("meta", { content: n, name: "description" }),
              Object(r.jsx)("meta", { name: "og:url", content: o }),
              Object(r.jsx)("meta", { name: "og:title", content: t }),
              Object(r.jsx)("meta", { name: "og:description", content: n }),
              Object(r.jsx)("meta", {
                name: "og:image",
                content: "https://transform.tools/cover.png"
              }),
              Object(r.jsx)("meta", { name: "og:type", content: "website" }),
              Object(r.jsx)("meta", { name: "twitter:title", content: t }),
              Object(r.jsx)("meta", {
                name: "twitter:description",
                content: n
              }),
              Object(r.jsx)("meta", {
                name: "twitter:image",
                content: "https://transform.tools/cover.png"
              }),
              Object(r.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image"
              }),
              Object(r.jsx)("meta", {
                name: "twitter:creator",
                content: "ritz078"
              }),
              Object(r.jsx)("link", {
                rel: "manifest",
                href: "/static/site.webmanifest"
              })
            ]
          });
        },
        w = "__transform_tools_isDarkMode";
      function k(e, t) {
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
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(n), !0).forEach(function(t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var _ = Object(r.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "90px",
        height: "19px",
        viewBox: "0 0 306 62",
        style: { marginTop: -4 },
        children: Object(r.jsx)("path", {
          fill: "#fff",
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 1,
          d:
            "M172.339 71.14V98h-7.91V71.14h-3.376v-7.382h3.375V51.207h7.91v12.55h6.153v7.384h-6.152zm11.989-7.382h7.91v3.058c1.453-1.523 2.742-2.566 3.867-3.129 1.149-.585 2.508-.878 4.078-.878 2.086 0 4.266.68 6.54 2.039L203.1 72.09c-1.5-1.078-2.964-1.617-4.394-1.617-4.313 0-6.469 3.257-6.469 9.773V98h-7.91V63.758zm52.138 0h7.945V98h-7.945v-3.586c-3.258 3.047-6.762 4.57-10.512 4.57-4.734 0-8.648-1.71-11.742-5.132-3.07-3.493-4.606-7.852-4.606-13.079 0-5.132 1.536-9.41 4.606-12.832 3.07-3.421 6.914-5.132 11.531-5.132 3.985 0 7.559 1.64 10.723 4.921v-3.972zm-18.774 17.015c0 3.282.88 5.954 2.637 8.016 1.805 2.086 4.078 3.129 6.82 3.129 2.93 0 5.297-1.008 7.102-3.023 1.805-2.086 2.707-4.735 2.707-7.946 0-3.21-.902-5.86-2.707-7.945-1.805-2.04-4.148-3.059-7.031-3.059-2.719 0-4.992 1.032-6.82 3.094-1.805 2.086-2.708 4.664-2.708 7.734zm37.162-17.015h7.945v3.164c2.766-2.742 5.883-4.113 9.352-4.113 3.984 0 7.09 1.253 9.316 3.761 1.922 2.133 2.883 5.614 2.883 10.442V98h-7.945V78.875c0-3.375-.47-5.707-1.407-6.996-.914-1.313-2.578-1.969-4.992-1.969-2.625 0-4.488.867-5.59 2.602-1.078 1.71-1.617 4.699-1.617 8.965V98h-7.945V63.758zm59.837 5.836l-6.54 3.48c-1.03-2.11-2.308-3.164-3.831-3.164-.727 0-1.348.24-1.864.72-.515.481-.773 1.097-.773 1.847 0 1.312 1.523 2.613 4.57 3.902 4.196 1.805 7.02 3.469 8.473 4.992 1.453 1.524 2.18 3.574 2.18 6.152 0 3.305-1.22 6.07-3.657 8.297-2.367 2.11-5.226 3.164-8.578 3.164-5.742 0-9.808-2.8-12.199-8.402l6.75-3.129c.938 1.64 1.652 2.684 2.145 3.129.96.89 2.109 1.336 3.445 1.336 2.672 0 4.008-1.219 4.008-3.656 0-1.407-1.032-2.719-3.094-3.938-.797-.398-1.594-.785-2.39-1.16-.798-.375-1.606-.762-2.426-1.16-2.297-1.125-3.914-2.25-4.852-3.375-1.195-1.43-1.793-3.27-1.793-5.52 0-2.976 1.02-5.437 3.059-7.382 2.086-1.946 4.617-2.918 7.593-2.918 4.383 0 7.641 2.261 9.774 6.785zm17.966 1.547V98h-7.945V71.14h-2.813v-7.382h2.813V50.539c0-4.312.75-7.36 2.25-9.14 2.062-2.485 5.062-3.727 9-3.727 1.406 0 3.175.41 5.308 1.23v8.086l-.808-.422c-1.711-.867-3.118-1.3-4.22-1.3-1.405 0-2.355.504-2.847 1.511-.492.985-.738 2.883-.738 5.696v11.285h8.613v7.383h-8.613zm12.903 9.492c0-4.946 1.77-9.153 5.309-12.621 3.539-3.469 7.851-5.203 12.937-5.203 5.11 0 9.446 1.746 13.008 5.238 3.516 3.492 5.274 7.781 5.274 12.867 0 5.133-1.77 9.434-5.309 12.902-3.562 3.446-7.933 5.168-13.113 5.168-5.133 0-9.434-1.757-12.903-5.273-3.468-3.469-5.203-7.828-5.203-13.078zm8.086.14c0 3.422.914 6.13 2.742 8.122 1.875 2.015 4.348 3.023 7.418 3.023 3.094 0 5.567-.996 7.418-2.988 1.852-1.993 2.778-4.653 2.778-7.98 0-3.329-.926-5.99-2.778-7.981-1.875-2.016-4.347-3.024-7.418-3.024-3.023 0-5.472 1.008-7.347 3.024-1.875 2.015-2.813 4.617-2.813 7.804zm37.267-17.015h7.91v3.058c1.453-1.523 2.742-2.566 3.867-3.129 1.149-.585 2.508-.878 4.079-.878 2.085 0 4.265.68 6.539 2.039l-3.622 7.242c-1.5-1.078-2.964-1.617-4.394-1.617-4.313 0-6.469 3.257-6.469 9.773V98h-7.91V63.758zm28.478 0h7.91v3.164c1.523-1.594 2.824-2.672 3.902-3.234 1.149-.586 2.59-.88 4.324-.88 3.868 0 6.926 1.688 9.176 5.063 2.485-3.375 5.848-5.062 10.09-5.062 7.711 0 11.566 4.675 11.566 14.027V98h-7.945V78.98c0-3.28-.398-5.601-1.195-6.96-.82-1.383-2.168-2.075-4.043-2.075-2.18 0-3.768.82-4.764 2.461-.996 1.64-1.494 4.278-1.494 7.91V98h-7.945V79.086c0-6.094-1.758-9.14-5.274-9.14-2.226 0-3.85.831-4.869 2.495-1.02 1.664-1.53 4.29-1.53 7.875V98h-7.91V63.758z",
          transform: "translate(-161 -37)"
        })
      });
      function C(e) {
        var t = (function() {
            var e = Object(a.useState)(!1),
              t = e[0],
              n = e[1];
            return (
              Object(a.useEffect)(function() {
                n(JSON.parse(localStorage.getItem(w) || "false"));
              }, []),
              {
                isDarkMode: t,
                toggleDarkMode: function() {
                  n(function(e) {
                    return !e;
                  }),
                    localStorage.setItem(w, JSON.stringify(!t));
                }
              }
            );
          })(),
          n = t.isDarkMode,
          o = t.toggleDarkMode,
          l = Object(m.useRouter)();
        Object(a.useEffect)(function() {
          var e,
            t = function() {
              clearTimeout(e), y.a.done();
            },
            n = function() {
              return y.a.start();
            },
            r = function() {
              (e = setTimeout(n, 300)),
                l.events.on("routeChangeComplete", t),
                l.events.on("routeChangeError", t);
            };
          return (
            l.events.on("routeChangeStart", r),
            function() {
              l.events.off("routeChangeComplete", t),
                l.events.off("routeChangeError", t),
                l.events.off("routeChangeStart", r),
                e && clearTimeout(e);
            }
          );
        }, []);
        var f = e.Component,
          d = e.pageProps,
          h = Object(p.a)(l.pathname);
        return Object(r.jsxs)(r.Fragment, {
          children: [
            "/" !== l.pathname && l.pathname
              ? Object(r.jsx)(x, {
                  title: null === h || void 0 === h ? void 0 : h.searchTerm,
                  url: "https://transform.tools".concat(l.pathname),
                  description: null === h || void 0 === h ? void 0 : h.desc
                })
              : Object(r.jsx)(x, {
                  title: "Transform",
                  url: "https://transform.tools".concat(l.pathname),
                  description:
                    "A polyglot web converter that's going to save you a lot of time."
                }),
            Object(r.jsxs)(i.a, {
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              is: "header",
              height: 40,
              backgroundColor: "#0e7ccf",
              paddingRight: 20,
              children: [
                Object(r.jsx)(i.a, {
                  flex: 1,
                  display: "flex",
                  paddingX: 20,
                  className: "logo-transform",
                  children: _
                }),
                Object(r.jsx)(i.a, {
                  display: "flex",
                  alignItems: "center",
                  children: Object(r.jsx)(c.a, {
                    content: "Toggle dark mode",
                    children: Object(r.jsx)(s.a, {
                      height: 20,
                      marginRight: 10,
                      icon: "moon",
                      onClick: o
                    })
                  })
                }),
                Object(r.jsxs)(i.a, {
                  display: "flex",
                  alignItems: "center",
                  children: [
                    Object(r.jsx)("a", {
                      style: { display: "inline-block", height: 20 },
                      href: "https://github.com/ritz078/transform",
                      children: Object(r.jsx)("img", {
                        src:
                          "https://img.shields.io/github/stars/ritz078/transform?style=social",
                        alt: ""
                      })
                    }),
                    Object(r.jsx)("a", {
                      href: "https://github.com/ritz078/transform",
                      target: "_blank",
                      children: Object(r.jsx)(u.a, {
                        appearance: "minimal",
                        height: 40,
                        css: { color: "#fff !important" },
                        children: "GitHub"
                      })
                    })
                  ]
                })
              ]
            }),
            Object(r.jsxs)(i.a, {
              backgroundColor: "#FFFFFF",
              className: n ? "dark" : "light",
              display: "flex",
              flexDirection: "row",
              children: [Object(r.jsx)(g, {}), Object(r.jsx)(f, M({}, d))]
            })
          ]
        });
      }
    },
    g4pe: function(e, t, n) {
      e.exports = n("8Kt/");
    },
    iJnL: function(e, t, n) {},
    kG2m: function(e, t) {
      e.exports = function() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    lwAK: function(e, t, n) {
      "use strict";
      var r;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var o = ((r = n("q1tI")) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({});
      t.AmpStateContext = o;
    },
    mPvQ: function(e, t, n) {
      var r = n("5fIB"),
        o = n("rlHP"),
        a = n("KckH"),
        i = n("kG2m");
      e.exports = function(e) {
        return r(e) || o(e) || a(e) || i();
      };
    },
    oI91: function(e, t) {
      e.exports = function(e, t, n) {
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
      };
    },
    qXWd: function(e, t) {
      e.exports = function(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    rlHP: function(e, t) {
      e.exports = function(e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    tCBg: function(e, t, n) {
      var r = n("C+bE"),
        o = n("qXWd");
      e.exports = function(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? o(e) : t;
      };
    },
    vNVm: function(e, t, n) {
      "use strict";
      var r = n("zoAU");
      (t.__esModule = !0),
        (t.useIntersection = function(e) {
          var t = e.rootMargin,
            n = e.disabled || !i,
            s = (0, o.useRef)(),
            u = (0, o.useState)(!1),
            l = r(u, 2),
            f = l[0],
            p = l[1],
            d = (0, o.useCallback)(
              function(e) {
                s.current && (s.current(), (s.current = void 0)),
                  n ||
                    f ||
                    (e &&
                      e.tagName &&
                      (s.current = (function(e, t, n) {
                        var r = (function(e) {
                            var t = e.rootMargin || "",
                              n = c.get(t);
                            if (n) return n;
                            var r = new Map(),
                              o = new IntersectionObserver(function(e) {
                                e.forEach(function(e) {
                                  var t = r.get(e.target),
                                    n =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && n && t(n);
                                });
                              }, e);
                            return (
                              c.set(
                                t,
                                (n = { id: t, observer: o, elements: r })
                              ),
                              n
                            );
                          })(n),
                          o = r.id,
                          a = r.observer,
                          i = r.elements;
                        return (
                          i.set(e, t),
                          a.observe(e),
                          function() {
                            i.delete(e),
                              a.unobserve(e),
                              0 === i.size && (a.disconnect(), c.delete(o));
                          }
                        );
                      })(
                        e,
                        function(e) {
                          return e && p(e);
                        },
                        { rootMargin: t }
                      )));
              },
              [n, t, f]
            );
          return (
            (0, o.useEffect)(
              function() {
                if (!i && !f) {
                  var e = (0, a.requestIdleCallback)(function() {
                    return p(!0);
                  });
                  return function() {
                    return (0, a.cancelIdleCallback)(e);
                  };
                }
              },
              [f]
            ),
            [d, f]
          );
        });
      var o = n("q1tI"),
        a = n("0G5g"),
        i = "undefined" !== typeof IntersectionObserver;
      var c = new Map();
    }
  },
  [[7, 1, 2, 0, 19]]
]);

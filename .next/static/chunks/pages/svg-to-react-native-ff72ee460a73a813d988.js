_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [83],
  {
    "3Eae": function(e, t) {
      e.exports = e =>
        "data:image/svg+xml," +
        encodeURIComponent(e)
          .replace(/'/g, "%27")
          .replace(/"/g, "%22");
    },
    FKQq: function(e, t) {
      e.exports = function() {
        return new Worker("/_next/static/4a2ee510204c48aaaea6.worker.js");
      };
    },
    T344: function(e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "default", function() {
          return S;
        });
      var n,
        o,
        i,
        c = r("nKUr"),
        a = r("vJKn"),
        s = r.n(a),
        l = r("cpVT"),
        u = r("rg98"),
        p = r("q1tI"),
        b = r("cMPw"),
        f = r.n(b),
        O = r("edk3"),
        j = r("yf1O"),
        d = r("ucdA"),
        m = r.n(d),
        g = r("qQ3w"),
        v = r("FKQq"),
        y = r.n(v),
        h = r("kFOS"),
        w = r.n(h);
      function x(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? x(Object(r), !0).forEach(function(t) {
                Object(l.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : x(Object(r)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function S() {
        var e = Object(p.useState)(j.a),
          t = e[0],
          r = e[1],
          a = Object(p.useState)(""),
          l = a[0],
          b = a[1],
          d = Object(p.useCallback)(
            (function() {
              var e = Object(u.a)(
                s.a.mark(function e(r) {
                  var c, a;
                  return s.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((c = r.value), m()(c))) {
                            e.next = 3;
                            break;
                          }
                          throw new Error("This is not a valid svg code.");
                        case 3:
                          return (
                            (n = n || Object(g.a)(y.a)),
                            (i = i || Object(g.a)(w.a)),
                            (e.next = 7),
                            n.send({
                              value: c,
                              settings: P(P({}, t.optimizeSvg ? t : {}), j.d)
                            })
                          );
                        case 7:
                          return (
                            (a = e.sent),
                            b(a),
                            (o = o || Object(g.a)(f.a)),
                            (e.next = 12),
                            i.send({ native: !0, value: a })
                          );
                        case 12:
                          return (a = e.sent), e.abrupt("return", a);
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function(t) {
                return e.apply(this, arguments);
              };
            })(),
            [t]
          );
        return Object(c.jsx)(c.Fragment, {
          children: Object(c.jsx)(O.a, {
            settings: t,
            setSettings: r,
            transformer: d,
            babelWorker: f.a,
            name: "SVG to React Native",
            resultTitle: "React Native",
            formFields: Object(j.c)(j.a),
            optimizedValue: l
          })
        });
      }
    },
    cMPw: function(e, t) {
      e.exports = function() {
        return new Worker("/_next/static/3a7ae37dd82e912ac77c.worker.js");
      };
    },
    edk3: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return C;
      });
      var n = r("nKUr"),
        o = r("q1tI"),
        i = r.n(o),
        c = r("3o63"),
        a = r("sN8P"),
        s = r("jUWi"),
        l = r("eqHG"),
        u = r("Ar1z"),
        p = r("wx14"),
        b = r("Ff2n"),
        f = r("1OyB"),
        O = r("vuIU"),
        j = r("md7G"),
        d = r("foSv"),
        m = r("Ji7U"),
        g = r("rePB"),
        v = r("TSYQ"),
        y = r.n(v),
        h = r("17x9"),
        w = r.n(h),
        x = r("raqX");
      function P(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var S = (function(e) {
        function t() {
          return (
            Object(f.a)(this, t),
            Object(j.a)(this, Object(d.a)(t).apply(this, arguments))
          );
        }
        return (
          Object(m.a)(t, e),
          Object(O.a)(t, [
            {
              key: "render",
              value: function() {
                return i.a.createElement(
                  x.a,
                  Object(p.a)({ is: "strong", fontWeight: 600 }, this.props)
                );
              }
            }
          ]),
          t
        );
      })(o.PureComponent);
      (S.displayName = "Strong"),
        Object(g.a)(
          S,
          "propTypes",
          (function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? P(Object(r), !0).forEach(function(t) {
                    Object(g.a)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : P(Object(r)).forEach(function(t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          })({}, x.a.propTypes)
        );
      var k = r("9/s7");
      function D(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var E = (function(e) {
        function t() {
          return (
            Object(f.a)(this, t),
            Object(j.a)(this, Object(d.a)(t).apply(this, arguments))
          );
        }
        return (
          Object(m.a)(t, e),
          Object(O.a)(t, [
            {
              key: "render",
              value: function() {
                var e = this.props,
                  r = e.theme,
                  n = e.className,
                  o = e.color,
                  c = e.isInteractive,
                  a = e.isSolid,
                  s = Object(b.a)(e, [
                    "theme",
                    "className",
                    "color",
                    "isInteractive",
                    "isSolid"
                  ]),
                  l = r.getBadgeProps({ color: o, isSolid: a }),
                  u = l.color,
                  f = l.backgroundColor,
                  O = c ? "interactive" : "default",
                  j = y()(n, r.getBadgeClassName(O));
                return i.a.createElement(
                  S,
                  Object(p.a)(
                    { size: 300 },
                    t.styles,
                    { color: u, backgroundColor: f },
                    s,
                    { className: j }
                  )
                );
              }
            }
          ]),
          t
        );
      })(o.PureComponent);
      (E.displayName = "Badge"),
        Object(g.a)(
          E,
          "propTypes",
          (function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? D(Object(r), !0).forEach(function(t) {
                    Object(g.a)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : D(Object(r)).forEach(function(t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          })({}, S.propTypes, {
            color: w.a.string.isRequired,
            isInteractive: w.a.bool,
            theme: w.a.object.isRequired
          })
        ),
        Object(g.a)(E, "defaultProps", {
          color: "neutral",
          isInteractive: !1,
          isSolid: !1
        }),
        Object(g.a)(E, "styles", {
          display: "inline-block",
          boxSizing: "border-box",
          height: 16,
          paddingTop: 0,
          paddingRight: 6,
          paddingBottom: 0,
          paddingLeft: 6,
          borderRadius: 2,
          textAlign: "center",
          textDecoration: "none",
          textTransform: "uppercase"
        });
      var T = Object(k.a)(E),
        N = r("3Eae"),
        F = r.n(N),
        C = function(e) {
          var t = e.transformer,
            r = e.resultTitle,
            i = e.formFields,
            p = e.optimizedValue,
            b = e.settings,
            f = e.setSettings,
            O = Object(o.useCallback)(function(e) {
              var t = e.open,
                r = e.toggle;
              return Object(n.jsx)(c.b, {
                initialValues: b,
                open: t,
                toggle: r,
                title: "SVGO Settings",
                onSubmit: f,
                formsFields: i
              });
            }, []);
          return Object(n.jsx)(a.a, {
            transformer: t,
            editorTitle: "SVG",
            resultLanguage: "javascript",
            resultTitle: r,
            editorLanguage: "html",
            editorDefaultValue: "svg",
            settings: b,
            editorProps: {
              settingElement: O,
              topNotifications: function(e) {
                var t = e.toggleSettings;
                return (
                  b.optimizeSvg &&
                  Object(n.jsx)(s.a, {
                    intent: "warning",
                    backgroundColor: "#FEF8E7",
                    title: Object(n.jsxs)(n.Fragment, {
                      children: [
                        "SVGO optimization is turned on. You can turn it off or configure it in",
                        " ",
                        Object(n.jsx)(l.a, {
                          size: 400,
                          is: "a",
                          color: "blue",
                          onClick: t,
                          children: "settings"
                        })
                      ]
                    })
                  })
                );
              },
              previewElement: function(e) {
                return Object(n.jsxs)(u.a, {
                  display: "flex",
                  flexDirection: "row",
                  flex: 1,
                  children: [
                    Object(n.jsxs)(u.a, {
                      display: "flex",
                      flex: 1,
                      position: "relative",
                      children: [
                        Object(n.jsx)("img", {
                          style: {
                            flex: 1,
                            width: "100%",
                            borderRight: "1px solid #eee"
                          },
                          src: F()(e),
                          alt: "original"
                        }),
                        Object(n.jsx)(T, {
                          position: "absolute",
                          bottom: 10,
                          right: 10,
                          color: "green",
                          isSolid: !0,
                          children: "Original"
                        })
                      ]
                    }),
                    Object(n.jsxs)(u.a, {
                      display: "flex",
                      flex: 1,
                      position: "relative",
                      children: [
                        p &&
                          Object(n.jsx)("img", {
                            style: { flex: 1, width: "100%" },
                            src: F()(p),
                            alt: "optimized"
                          }),
                        Object(n.jsx)(T, {
                          position: "absolute",
                          bottom: 10,
                          right: 10,
                          color: "green",
                          isSolid: !0,
                          children: "Result"
                        })
                      ]
                    })
                  ]
                });
              },
              acceptFiles: "image/svg+xml"
            }
          });
        };
    },
    jc4r: function(e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/svg-to-react-native",
        function() {
          return r("T344");
        }
      ]);
    },
    kFOS: function(e, t) {
      e.exports = function() {
        return new Worker("/_next/static/dcc88a43a9f41ac6c011.worker.js");
      };
    },
    yf1O: function(e, t, r) {
      "use strict";
      r.d(t, "d", function() {
        return s;
      }),
        r.d(t, "b", function() {
          return l;
        }),
        r.d(t, "a", function() {
          return u;
        }),
        r.d(t, "c", function() {
          return p;
        });
      var n = r("cpVT"),
        o = r("3o63"),
        i = r("LvDl");
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function(t) {
                Object(n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var s = {
          cleanupAttrs: !0,
          inlineStyles: !0,
          minifyStyles: !0,
          convertStyleToAttrs: !0,
          removeDoctype: !0,
          removeXMLProcInst: !1,
          removeComments: !0,
          removeMetadata: !0,
          removeDimensions: !1
        },
        l = a(
          a({ optimizeSvg: !0 }, s),
          {},
          {
            removeComments: !0,
            removeMetadata: !0,
            removeTitle: !0,
            removeDesc: !0,
            removeUselessDefs: !0,
            removeEditorsNSData: !0,
            removeEmptyAttrs: !0,
            removeHiddenElems: !0,
            removeEmptyText: !0,
            removeEmptyContainers: !0,
            removeViewBox: !1,
            cleanupEnableBackground: !0,
            convertColors: !0,
            convertPathData: !0,
            convertTransform: !0,
            removeUnknownsAndDefaults: !0,
            removeNonInheritableGroupAttrs: !0,
            removeUselessStrokeAndFill: !0,
            removeUnusedNS: !0,
            cleanupIDs: !0,
            cleanupNumericValues: !1,
            moveElemsAttrsToGroup: !0,
            moveGroupAttrsToElems: !0,
            collapseGroups: !0,
            removeRasterImages: !0,
            mergePaths: !0,
            convertShapeToPath: !0,
            sortAttrs: !0
          }
        ),
        u = Object(i.omit)(l, Object.keys(s)),
        p = function(e) {
          return Object.keys(e).map(function(e) {
            return a(
              { label: Object(i.lowerCase)(e), type: o.a.SWITCH, key: e },
              "optimizeSvg" !== e
                ? {
                    isDisabled: function(e) {
                      return !e.optimizeSvg;
                    },
                    props: { paddingLeft: 20, borderLeft: "2px solid #FDF8F3" }
                  }
                : {}
            );
          });
        };
    }
  },
  [["jc4r", 1, 2, 14, 0, 3, 5, 6, 15]]
]);

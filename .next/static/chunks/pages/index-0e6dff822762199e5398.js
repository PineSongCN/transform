_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [48],
  {
    "/EDR": function(e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function() {
          return r("23aj");
        }
      ]);
    },
    "23aj": function(e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "default", function() {
          return v;
        });
      var n,
        o,
        i = r("nKUr"),
        s = r("vJKn"),
        a = r.n(s),
        c = r("rg98"),
        l = r("q1tI"),
        u = r("edk3"),
        p = r("yf1O"),
        b = r("ucdA"),
        f = r.n(b),
        O = r("qQ3w"),
        j = r("kFOS"),
        d = r.n(j),
        m = r("FKQq"),
        g = r.n(m);
      function v() {
        var e = Object(l.useState)(p.b),
          t = e[0],
          r = e[1],
          s = Object(l.useState)(""),
          b = s[0],
          j = s[1],
          m = Object(l.useCallback)(
            (function() {
              var e = Object(c.a)(
                a.a.mark(function e(r) {
                  var i, s;
                  return a.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((i = r.value), f()(i))) {
                            e.next = 3;
                            break;
                          }
                          throw new Error("This is not a valid svg code.");
                        case 3:
                          if (
                            ((o = o || Object(O.a)(d.a)),
                            (n = n || Object(O.a)(g.a)),
                            (s = i),
                            !t.optimizeSvg)
                          ) {
                            e.next = 10;
                            break;
                          }
                          return (
                            (e.next = 9), n.send({ value: i, settings: t })
                          );
                        case 9:
                          s = e.sent;
                        case 10:
                          return j(s), (e.next = 13), o.send({ value: s });
                        case 13:
                          return (s = e.sent), e.abrupt("return", s);
                        case 15:
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
        return Object(i.jsx)(u.a, {
          transformer: m,
          formFields: Object(p.c)(p.b),
          setSettings: r,
          optimizedValue: b,
          settings: t,
          name: "SVG to JSX",
          resultTitle: "JSX"
        });
      }
    },
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
    edk3: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return F;
      });
      var n = r("nKUr"),
        o = r("q1tI"),
        i = r.n(o),
        s = r("3o63"),
        a = r("sN8P"),
        c = r("jUWi"),
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
        x = r.n(h),
        S = r("raqX");
      function w(e, t) {
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
      var P = (function(e) {
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
                  S.a,
                  Object(p.a)({ is: "strong", fontWeight: 600 }, this.props)
                );
              }
            }
          ]),
          t
        );
      })(o.PureComponent);
      (P.displayName = "Strong"),
        Object(g.a)(
          P,
          "propTypes",
          (function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? w(Object(r), !0).forEach(function(t) {
                    Object(g.a)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : w(Object(r)).forEach(function(t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          })({}, S.a.propTypes)
        );
      var k = r("9/s7");
      function E(e, t) {
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
      var D = (function(e) {
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
                  s = e.isInteractive,
                  a = e.isSolid,
                  c = Object(b.a)(e, [
                    "theme",
                    "className",
                    "color",
                    "isInteractive",
                    "isSolid"
                  ]),
                  l = r.getBadgeProps({ color: o, isSolid: a }),
                  u = l.color,
                  f = l.backgroundColor,
                  O = s ? "interactive" : "default",
                  j = y()(n, r.getBadgeClassName(O));
                return i.a.createElement(
                  P,
                  Object(p.a)(
                    { size: 300 },
                    t.styles,
                    { color: u, backgroundColor: f },
                    c,
                    { className: j }
                  )
                );
              }
            }
          ]),
          t
        );
      })(o.PureComponent);
      (D.displayName = "Badge"),
        Object(g.a)(
          D,
          "propTypes",
          (function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? E(Object(r), !0).forEach(function(t) {
                    Object(g.a)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : E(Object(r)).forEach(function(t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          })({}, P.propTypes, {
            color: x.a.string.isRequired,
            isInteractive: x.a.bool,
            theme: x.a.object.isRequired
          })
        ),
        Object(g.a)(D, "defaultProps", {
          color: "neutral",
          isInteractive: !1,
          isSolid: !1
        }),
        Object(g.a)(D, "styles", {
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
      var T = Object(k.a)(D),
        N = r("3Eae"),
        C = r.n(N),
        F = function(e) {
          var t = e.transformer,
            r = e.resultTitle,
            i = e.formFields,
            p = e.optimizedValue,
            b = e.settings,
            f = e.setSettings,
            O = Object(o.useCallback)(function(e) {
              var t = e.open,
                r = e.toggle;
              return Object(n.jsx)(s.b, {
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
                  Object(n.jsx)(c.a, {
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
                          src: C()(e),
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
                            src: C()(p),
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
    kFOS: function(e, t) {
      e.exports = function() {
        return new Worker("/_next/static/dcc88a43a9f41ac6c011.worker.js");
      };
    },
    yf1O: function(e, t, r) {
      "use strict";
      r.d(t, "d", function() {
        return c;
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
      function s(e, t) {
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
            ? s(Object(r), !0).forEach(function(t) {
                Object(n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var c = {
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
          a({ optimizeSvg: !0 }, c),
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
        u = Object(i.omit)(l, Object.keys(c)),
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
  [["/EDR", 1, 2, 14, 0, 3, 5, 6, 15]]
]);
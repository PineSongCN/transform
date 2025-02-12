_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [90],
  {
    "/blW": function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return m;
        });
      var r = n("nKUr"),
        o = n("vJKn"),
        a = n.n(o),
        c = n("rg98"),
        s = n("xvhg"),
        i = n("sN8P"),
        u = n("3o63"),
        p = n("xC0i"),
        l = n("q1tI"),
        f = n("gqkn"),
        b = [
          {
            type: u.a.SWITCH,
            key: "keepComments",
            label: "Keep TSDoc Comments"
          },
          {
            type: u.a.SWITCH,
            key: "skipParseJSDoc",
            label: "Skip the creation of zod validators from JSDoc annotations"
          }
        ];
      function m() {
        var t = "JSON to Zod Schema",
          e = Object(p.a)(t, { keepComments: !1, skipParseJSDoc: !1 }),
          n = Object(s.a)(e, 2),
          o = n[0],
          m = n[1],
          S = Object(l.useCallback)(
            (function() {
              var t = Object(c.a)(
                a.a.mark(function t(e) {
                  var n, r, c, s, i, u, p;
                  return a.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = e.value),
                            (r = o.keepComments),
                            (c = o.skipParseJSDoc),
                            (s = new URLSearchParams({
                              keepComments: r,
                              skipParseJSDoc: c
                            }).toString()),
                            (t.next = 5),
                            Object(f.a)(
                              "/api/typescript-to-zod?".concat(s),
                              n,
                              "text/plain"
                            )
                          );
                        case 5:
                          if (((i = t.sent), (u = i.schema), !(p = i.error))) {
                            t.next = 10;
                            break;
                          }
                          throw new Error(p);
                        case 10:
                          return t.abrupt("return", u);
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function(e) {
                return t.apply(this, arguments);
              };
            })(),
            [o]
          ),
          d = Object(l.useCallback)(function(e) {
            var n = e.open,
              a = e.toggle;
            return Object(r.jsx)(u.b, {
              title: t,
              onSubmit: m,
              open: n,
              toggle: a,
              formsFields: b,
              initialValues: o
            });
          }, []);
        return Object(r.jsx)(i.a, {
          transformer: S,
          editorTitle: "TypeScript",
          editorLanguage: "typescript",
          editorDefaultValue: "typeScriptInterface",
          resultTitle: "Zod Schema",
          resultLanguage: "typescript",
          editorSettingsElement: d,
          settings: o
        });
      }
    },
    Uhad: function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/typescript-to-zod",
        function() {
          return n("/blW");
        }
      ]);
    },
    xC0i: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return c;
      });
      var r = n("q1tI"),
        o = n("kiQV"),
        a = "transform:".concat(o.version, ":");
      function c(t, e) {
        return (function(t, e) {
          var n = Object(r.useState)(function() {
              try {
                var n = window.localStorage.getItem(a + t) || e;
                return JSON.parse(n);
              } catch (r) {
                return e;
              }
            }),
            o = n[0],
            c = n[1];
          return [
            o,
            function(e) {
              try {
                var n = e instanceof Function ? e(o) : e;
                c(n), window.localStorage.setItem(a + t, JSON.stringify(n));
              } catch (r) {
                console.log(r);
              }
            }
          ];
        })("settings:".concat(t), e);
      }
    }
  },
  [["Uhad", 1, 2, 0, 3, 5, 6, 7]]
]);

_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [53],
  {
    XH1d: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return b;
        });
      var r = n("nKUr"),
        o = n("vJKn"),
        a = n.n(o),
        c = n("rg98"),
        s = n("xvhg"),
        i = n("sN8P"),
        u = n("3o63"),
        l = n("xC0i"),
        f = n("q1tI"),
        m = [
          { type: u.a.TEXT_INPUT, key: "rootName", label: "Root Schema Name" }
        ];
      function b() {
        var t = "JSON Schema to Zod Schema",
          e = Object(l.a)(t, { rootName: "schema" }),
          o = Object(s.a)(e, 2),
          b = o[0],
          p = o[1],
          d = Object(f.useCallback)(
            (function() {
              var t = Object(c.a)(
                a.a.mark(function t(e) {
                  var r, o, c;
                  return a.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r = e.value),
                            (t.next = 3),
                            Promise.all([
                              n.e(21),
                              n.e(27),
                              n.e(4),
                              n.e(8),
                              n.e(95)
                            ]).then(n.t.bind(null, "XO+A", 7))
                          );
                        case 3:
                          return (
                            (o = t.sent),
                            (c = o.jsonSchemaToZod),
                            t.abrupt("return", c(JSON.parse(r), b.rootName, !0))
                          );
                        case 6:
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
            [b]
          ),
          h = Object(f.useCallback)(function(e) {
            var n = e.open,
              o = e.toggle;
            return Object(r.jsx)(u.b, {
              title: t,
              onSubmit: p,
              open: n,
              toggle: o,
              formsFields: m,
              initialValues: b
            });
          }, []);
        return Object(r.jsx)(i.a, {
          transformer: d,
          editorTitle: "JSON Schema",
          editorLanguage: "json",
          editorDefaultValue: "jsonSchema",
          resultTitle: "Zod Schema",
          resultLanguage: "typescript",
          editorSettingsElement: h,
          settings: b
        });
      }
    },
    iaDb: function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/json-schema-to-zod",
        function() {
          return n("XH1d");
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
  [["iaDb", 1, 2, 0, 3, 5, 6]]
]);

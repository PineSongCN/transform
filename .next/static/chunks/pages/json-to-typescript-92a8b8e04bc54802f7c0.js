_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [72],
  {
    C34a: function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/json-to-typescript",
        function() {
          return n("KQY3");
        }
      ]);
    },
    KQY3: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return y;
        });
      var r = n("nKUr"),
        a = n("vJKn"),
        o = n.n(a),
        i = n("rg98"),
        s = n("xvhg"),
        c = n("sN8P"),
        u = n("3o63"),
        l = n("xC0i"),
        p = n("q1tI"),
        f = [{ type: u.a.SWITCH, key: "typealias", label: "Create Mono Type" }];
      function y() {
        var t = "JSON to Typescript",
          e = Object(l.a)(t, { typealias: !1 }),
          a = Object(s.a)(e, 2),
          y = a[0],
          b = a[1],
          g = Object(p.useCallback)(
            (function() {
              var t = Object(i.a)(
                o.a.mark(function t(e) {
                  var r, a, i;
                  return o.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r = e.value),
                            (t.next = 3),
                            Promise.all([n.e(10), n.e(11)]).then(
                              n.bind(null, "P0Z9")
                            )
                          );
                        case 3:
                          return (
                            (a = t.sent),
                            (i = a.run),
                            t.abrupt(
                              "return",
                              i(
                                "Root",
                                r,
                                JSON.stringify({
                                  output_mode: y.typealias
                                    ? "typescript/typealias"
                                    : "typescript"
                                })
                              )
                            )
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
            [y]
          ),
          d = Object(p.useCallback)(function(e) {
            var n = e.open,
              a = e.toggle;
            return Object(r.jsx)(u.b, {
              title: t,
              onSubmit: b,
              open: n,
              toggle: a,
              formsFields: f,
              initialValues: y
            });
          }, []);
        return Object(r.jsx)(c.a, {
          transformer: g,
          editorTitle: "JSON",
          editorLanguage: "json",
          resultTitle: "TypeScript",
          resultLanguage: "typescript",
          editorSettingsElement: d,
          settings: y
        });
      }
    },
    xC0i: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      });
      var r = n("q1tI"),
        a = n("kiQV"),
        o = "transform:".concat(a.version, ":");
      function i(t, e) {
        return (function(t, e) {
          var n = Object(r.useState)(function() {
              try {
                var n = window.localStorage.getItem(o + t) || e;
                return JSON.parse(n);
              } catch (r) {
                return e;
              }
            }),
            a = n[0],
            i = n[1];
          return [
            a,
            function(e) {
              try {
                var n = e instanceof Function ? e(a) : e;
                i(n), window.localStorage.setItem(o + t, JSON.stringify(n));
              } catch (r) {
                console.log(r);
              }
            }
          ];
        })("settings:".concat(t), e);
      }
    }
  },
  [["C34a", 1, 2, 0, 3, 5, 6]]
]);

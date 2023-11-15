_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [31],
  {
    DsdP: function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/cadence-to-go",
        function() {
          return n("x4UX");
        }
      ]);
    },
    x4UX: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function() {
          return f;
        });
      var r = n("nKUr"),
        a = n("vJKn"),
        o = n.n(a),
        s = n("rg98"),
        u = n("sN8P"),
        c = n("q1tI"),
        i = n("PtE8"),
        l = n("3o63");
      function f() {
        var e,
          t = Object(c.useState)({ generateContractCode: !1 }),
          n = t[0],
          a = t[1];
        c.useEffect(console.log, [n]);
        var f = Object(c.useCallback)(
            (function() {
              var t = Object(s.a)(
                o.a.mark(function t(r) {
                  var a, s;
                  return o.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((a = r.value), e)) {
                            t.next = 5;
                            break;
                          }
                          return (t.next = 4), Object(i.a)();
                        case 4:
                          e = t.sent;
                        case 5:
                          return (
                            (s = e(a, !n.generateContractCode)),
                            t.abrupt("return", s)
                          );
                        case 7:
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
            [n]
          ),
          p = Object(c.useCallback)(function(e) {
            var t = e.open,
              o = e.toggle;
            return Object(r.jsx)(l.b, {
              initialValues: n,
              open: t,
              toggle: o,
              title: "Output Settings",
              onSubmit: a,
              formsFields: [
                {
                  key: "generateContractCode",
                  type: l.a.SWITCH,
                  label: "Generate Interaction Code With Functions"
                }
              ]
            });
          }, []);
        return Object(r.jsx)(u.a, {
          transformer: f,
          editorTitle: "Cadence types",
          editorLanguage: "text",
          editorDefaultValue: "cadence",
          resultTitle: "Go types",
          resultLanguage: "go",
          settings: n,
          resultSettingsElement: p
        });
      }
    }
  },
  [["DsdP", 1, 2, 25, 0, 3, 4, 5, 6]]
]);

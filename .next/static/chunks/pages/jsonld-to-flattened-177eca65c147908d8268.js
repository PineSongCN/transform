_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [77],
  {
    GgVR: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return c;
        });
      var r = n("nKUr"),
        a = n("vJKn"),
        s = n.n(a),
        u = n("rg98"),
        o = n("sN8P"),
        i = n("q1tI"),
        l = n("Rr3F");
      function c() {
        var t = Object(i.useCallback)(
          (function() {
            var t = Object(u.a)(
              s.a.mark(function t(e) {
                var n, r, a;
                return s.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.value),
                          (r = e.splitEditorValue),
                          (t.next = 3),
                          Object(l.flatten)(JSON.parse(n), JSON.parse(r))
                        );
                      case 3:
                        return (
                          (a = t.sent),
                          t.abrupt("return", JSON.stringify(a, null, 2))
                        );
                      case 5:
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
          []
        );
        return Object(r.jsx)(o.a, {
          transformer: t,
          editorTitle: "JSON-LD",
          editorDefaultValue: "jsonLd",
          splitTitle: "Context",
          splitLanguage: "json",
          splitEditorDefaultValue: "jsonLdContext",
          editorLanguage: "json",
          resultTitle: "Flattened",
          resultLanguage: "json"
        });
      }
    },
    L2b3: function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/jsonld-to-flattened",
        function() {
          return n("GgVR");
        }
      ]);
    }
  },
  [["L2b3", 1, 2, 0, 3, 9]]
]);

_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [75],
  {
    "UPn/": function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return l;
        });
      var r = n("nKUr"),
        a = n("vJKn"),
        s = n.n(a),
        o = n("rg98"),
        u = n("sN8P"),
        i = n("q1tI"),
        c = n("Rr3F");
      function l() {
        var t = Object(i.useCallback)(
          (function() {
            var t = Object(o.a)(
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
                          Object(c.compact)(JSON.parse(n), JSON.parse(r))
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
        return Object(r.jsx)(u.a, {
          transformer: t,
          editorTitle: "JSON-LD",
          editorDefaultValue: "jsonLd",
          splitTitle: "Context",
          splitLanguage: "json",
          splitEditorDefaultValue: "jsonLdContext",
          editorLanguage: "json",
          resultTitle: "Compacted",
          resultLanguage: "json"
        });
      }
    },
    kkpA: function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/jsonld-to-compacted",
        function() {
          return n("UPn/");
        }
      ]);
    }
  },
  [["kkpA", 1, 2, 0, 3, 9]]
]);

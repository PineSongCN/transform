_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [79],
  {
    "0vnu": function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/jsonld-to-normalized",
        function() {
          return n("tXcp");
        }
      ]);
    },
    tXcp: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return l;
        });
      var r = n("nKUr"),
        a = n("vJKn"),
        u = n.n(a),
        o = n("rg98"),
        s = n("sN8P"),
        c = n("q1tI"),
        i = n("Rr3F");
      function l() {
        var t = Object(c.useCallback)(
          (function() {
            var t = Object(o.a)(
              u.a.mark(function t(e) {
                var n;
                return u.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.value),
                          t.abrupt("return", Object(i.normalize)(JSON.parse(n)))
                        );
                      case 2:
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
        return Object(r.jsx)(s.a, {
          transformer: t,
          editorTitle: "JSON-LD",
          editorDefaultValue: "jsonLd",
          editorLanguage: "json",
          resultTitle: "Normalized",
          resultLanguage: "plaintext"
        });
      }
    }
  },
  [["0vnu", 1, 2, 0, 3, 9]]
]);

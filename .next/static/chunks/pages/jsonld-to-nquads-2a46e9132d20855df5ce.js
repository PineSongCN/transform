_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [80],
  {
    "0Dpn": function(t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "default", function() {
          return f;
        });
      var r = e("nKUr"),
        a = e("vJKn"),
        u = e.n(a),
        s = e("rg98"),
        o = e("sN8P"),
        c = e("q1tI"),
        i = e("Rr3F");
      function f() {
        var t = Object(c.useCallback)(
          (function() {
            var t = Object(s.a)(
              u.a.mark(function t(n) {
                var e;
                return u.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e = n.value),
                          t.abrupt(
                            "return",
                            Object(i.toRDF)(JSON.parse(e), {
                              format: "application/n-quads"
                            })
                          )
                        );
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function(n) {
              return t.apply(this, arguments);
            };
          })(),
          []
        );
        return Object(r.jsx)(o.a, {
          transformer: t,
          editorTitle: "JSON-LD",
          editorDefaultValue: "jsonLd",
          editorLanguage: "json",
          resultTitle: "N-Quads",
          resultLanguage: "plaintext"
        });
      }
    },
    d52z: function(t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/jsonld-to-nquads",
        function() {
          return e("0Dpn");
        }
      ]);
    }
  },
  [["d52z", 1, 2, 0, 3, 9]]
]);
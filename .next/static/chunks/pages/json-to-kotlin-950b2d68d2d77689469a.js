_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [63],
  {
    "CB/M": function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/json-to-kotlin",
        function() {
          return n("He22");
        }
      ]);
    },
    He22: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return c;
        });
      var r = n("nKUr"),
        o = n("vJKn"),
        u = n.n(o),
        s = n("rg98"),
        a = n("sN8P"),
        i = n("q1tI");
      function c() {
        var t = Object(i.useCallback)(
          (function() {
            var t = Object(s.a)(
              u.a.mark(function t(e) {
                var r, o, s;
                return u.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (r = e.value),
                          (t.next = 3),
                          Promise.all([n.e(10), n.e(11), n.e(18)]).then(
                            n.bind(null, "P0Z9")
                          )
                        );
                      case 3:
                        return (
                          (o = t.sent),
                          (s = o.run),
                          t.abrupt(
                            "return",
                            s(
                              "Root",
                              r,
                              JSON.stringify({ output_mode: "kotlin" })
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
          []
        );
        return Object(r.jsx)(a.a, {
          transformer: t,
          editorTitle: "JSON",
          editorLanguage: "json",
          resultTitle: "Kotlin",
          resultLanguage: "kotlin"
        });
      }
    }
  },
  [["CB/M", 1, 2, 0, 3]]
]);

_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [93],
  {
    XNyI: function(t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "default", function() {
          return _;
        });
      var r = e("nKUr"),
        a = e("vJKn"),
        o = e.n(a),
        u = e("rg98"),
        s = e("sN8P"),
        c = e("q1tI"),
        i = e("jzzL"),
        f = e.n(i),
        l = e("PxxK"),
        p = e.n(l);
      function _() {
        var t = Object(c.useCallback)(
          (function() {
            var t = Object(u.a)(
              o.a.mark(function t(n) {
                var e;
                return o.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e = n.value),
                          t.abrupt("return", p.a.stringify(f.a.parse(e)))
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
        return Object(r.jsx)(s.a, {
          transformer: t,
          editorTitle: "YAML",
          editorLanguage: "yaml",
          resultTitle: "TOML",
          resultLanguage: "toml"
        });
      }
    },
    nooI: function(t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/yaml-to-toml",
        function() {
          return e("XNyI");
        }
      ]);
    }
  },
  [["nooI", 1, 2, 0, 3, 4, 8, 12, 13]]
]);
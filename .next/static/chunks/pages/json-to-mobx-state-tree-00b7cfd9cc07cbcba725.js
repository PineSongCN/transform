_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [64],
  {
    ZKf4: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return E;
        });
      var r,
        a = n("nKUr"),
        o = n("vJKn"),
        u = n.n(o),
        c = n("rg98"),
        s = n("sN8P"),
        _ = n("q1tI"),
        i = n("cMPw"),
        f = n.n(i),
        T = n("qQ3w"),
        O = n("j3Ko");
      function E() {
        var t = Object(_.useCallback)(
          (function() {
            var t = Object(c.a)(
              u.a.mark(function t(e) {
                var n;
                return u.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.value),
                          (r = r || Object(T.a)(f.a)),
                          t.abrupt(
                            "return",
                            r.send({ type: O.a.JSON_TO_MOBX_TREE, value: n })
                          )
                        );
                      case 3:
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
        return Object(a.jsx)(s.a, {
          transformer: t,
          editorTitle: "JSON",
          editorLanguage: "json",
          resultTitle: "MobX-State-Tree Model",
          resultLanguage: "javascript"
        });
      }
    },
    cMPw: function(t, e) {
      t.exports = function() {
        return new Worker("/_next/static/3a7ae37dd82e912ac77c.worker.js");
      };
    },
    j3Ko: function(t, e, n) {
      "use strict";
      var r;
      n.d(e, "a", function() {
        return r;
      }),
        (function(t) {
          (t[(t.JSON_TO_PROPTYPES = 1)] = "JSON_TO_PROPTYPES"),
            (t[(t.OBJECT_STYLES_TO_TEMPLATE = 2)] =
              "OBJECT_STYLES_TO_TEMPLATE"),
            (t[(t.JSON_TO_MOBX_TREE = 3)] = "JSON_TO_MOBX_TREE");
        })(r || (r = {}));
    },
    rZy9: function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/json-to-mobx-state-tree",
        function() {
          return n("ZKf4");
        }
      ]);
    }
  },
  [["rZy9", 1, 2, 0, 3]]
]);

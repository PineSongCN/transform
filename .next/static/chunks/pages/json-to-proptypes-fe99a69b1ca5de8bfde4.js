_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [67],
  {
    G9uG: function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/json-to-proptypes",
        function() {
          return n("HHm8");
        }
      ]);
    },
    HHm8: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return T;
        });
      var r = n("nKUr"),
        u = n("vJKn"),
        a = n.n(u),
        o = n("rg98"),
        c = n("q1tI"),
        s = n("sN8P"),
        _ = n("qQ3w"),
        i = n("j3Ko");
      function T() {
        var t = Object(c.useCallback)(
          (function() {
            var t = Object(o.a)(
              a.a.mark(function t(e) {
                var r, u;
                return a.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (r = e.value),
                          (u = n("cMPw")),
                          t.abrupt(
                            "return",
                            Object(_.a)(u).send({
                              value: r,
                              type: i.a.JSON_TO_PROPTYPES
                            })
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
        return Object(r.jsx)(s.a, {
          transformer: t,
          editorTitle: "JSON",
          resultLanguage: "javascript",
          resultTitle: "PropTypes",
          editorLanguage: "json"
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
    }
  },
  [["G9uG", 1, 2, 0, 3]]
]);

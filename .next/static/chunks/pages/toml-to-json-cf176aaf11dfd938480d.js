_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [84],
  {
    "a+HQ": function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function() {
          return a;
        });
      var r = n("nKUr"),
        o = n("sN8P"),
        s = n("q1tI"),
        u = n("PxxK");
      function a() {
        var e = Object(s.useCallback)(function(e) {
          var t = e.value;
          return Promise.resolve(JSON.stringify(Object(u.parse)(t)));
        }, []);
        return Object(r.jsx)(o.a, {
          transformer: e,
          editorTitle: "TOML",
          editorLanguage: "toml",
          resultTitle: "JSON",
          resultLanguage: "json"
        });
      }
    },
    "c+Sw": function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/toml-to-json",
        function() {
          return n("a+HQ");
        }
      ]);
    }
  },
  [["c+Sw", 1, 2, 0, 3, 4, 8, 13]]
]);

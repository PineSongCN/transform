_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [71],
  {
    K6kd: function(e, t, n) {
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
          return Promise.resolve(Object(u.stringify)(JSON.parse(t)));
        }, []);
        return Object(r.jsx)(o.a, {
          transformer: e,
          editorTitle: "JSON",
          editorLanguage: "json",
          resultTitle: "TOML",
          resultLanguage: "toml"
        });
      }
    },
    f9ah: function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/json-to-toml",
        function() {
          return n("K6kd");
        }
      ]);
    }
  },
  [["f9ah", 1, 2, 0, 3, 4, 8, 13]]
]);
_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [85],
  {
    IvYQ: function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/toml-to-yaml",
        function() {
          return n("hXb/");
        }
      ]);
    },
    "hXb/": function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function() {
          return f;
        });
      var r = n("nKUr"),
        o = n("sN8P"),
        s = n("q1tI"),
        a = n("jzzL"),
        u = n.n(a),
        i = n("PxxK"),
        l = n.n(i);
      function f() {
        var e = Object(s.useCallback)(function(e) {
          var t = e.value;
          return Promise.resolve(u.a.stringify(l.a.parse(t)));
        }, []);
        return Object(r.jsx)(o.a, {
          transformer: e,
          editorTitle: "TOML",
          editorLanguage: "toml",
          resultTitle: "YAML",
          resultLanguage: "yaml"
        });
      }
    }
  },
  [["IvYQ", 1, 2, 0, 3, 4, 8, 12, 13]]
]);

_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [89],
  {
    "6opr": function(t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/typescript-to-typescript-declaration",
        function() {
          return r("iy9O");
        }
      ]);
    },
    iy9O: function(t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, "default", function() {
          return p;
        });
      var i = r("nKUr"),
        o = r("sN8P"),
        n = r("q1tI"),
        s = r("gqkn"),
        c = r("jUWi");
      function p() {
        var t = Object(n.useCallback)(function(t) {
          var e = t.value;
          return Object(s.a)("/api/flow-to-typescript", {
            value: e,
            declarationOnly: !0,
            isTS: !0
          });
        }, []);
        return Object(i.jsx)(o.a, {
          transformer: t,
          editorTitle: "TypeScript",
          editorLanguage: "typescript",
          resultTitle: "TypeScript",
          resultLanguage: "typescript",
          resultEditorProps: {
            topNotifications: function() {
              return Object(i.jsx)(c.a, {
                backgroundColor: "#e7f7ff",
                title: "This code is converted on the server."
              });
            }
          }
        });
      }
    }
  },
  [["6opr", 1, 2, 0, 3, 7]]
]);
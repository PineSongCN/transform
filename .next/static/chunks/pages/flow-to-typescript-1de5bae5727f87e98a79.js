_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [35],
  {
    JPO9: function(t, e, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/flow-to-typescript",
        function() {
          return o("quZ2");
        }
      ]);
    },
    quZ2: function(t, e, o) {
      "use strict";
      o.r(e),
        o.d(e, "default", function() {
          return a;
        });
      var r = o("nKUr"),
        n = o("sN8P"),
        i = o("q1tI"),
        u = o("gqkn"),
        s = o("jUWi");
      function a() {
        var t = Object(i.useCallback)(function(t) {
          var e = t.value;
          return Object(u.a)("/api/flow-to-typescript", {
            value: e,
            declarationOnly: !1
          });
        }, []);
        return Object(r.jsx)(n.a, {
          transformer: t,
          editorTitle: "Flow",
          editorLanguage: "plaintext",
          editorDefaultValue: "flow",
          resultTitle: "TypeScript",
          resultLanguage: "typescript",
          resultEditorProps: {
            topNotifications: function() {
              return Object(r.jsx)(s.a, {
                backgroundColor: "#e7f7ff",
                title: "This code is converted on the server."
              });
            }
          }
        });
      }
    }
  },
  [["JPO9", 1, 2, 0, 3, 7]]
]);

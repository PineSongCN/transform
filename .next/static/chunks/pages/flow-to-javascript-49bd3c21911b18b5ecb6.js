_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [34],
  {
    "v/nm": function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/flow-to-javascript",
        function() {
          return n("wxDv");
        }
      ]);
    },
    wxDv: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return u;
        });
      var o = n("nKUr"),
        r = n("sN8P"),
        a = n("q1tI"),
        i = n("gqkn"),
        s = n("jUWi");
      function u() {
        var t = Object(a.useCallback)(function(t) {
          var e = t.value;
          return Object(i.a)("/api/flow-to-javascript", e, "plain/text");
        }, []);
        return Object(o.jsx)(r.a, {
          transformer: t,
          editorTitle: "Flow",
          editorLanguage: "plaintext",
          editorDefaultValue: "flow",
          resultTitle: "JavaScript",
          resultLanguage: "javascript",
          resultEditorProps: {
            topNotifications: function() {
              return Object(o.jsx)(s.a, {
                backgroundColor: "#e7f7ff",
                title: "This code is converted on the server."
              });
            }
          }
        });
      }
    }
  },
  [["v/nm", 1, 2, 0, 3, 7]]
]);

_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [50],
  {
    "7l6t": function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function() {
          return p;
        });
      var r = n("nKUr"),
        a = n("vJKn"),
        o = n.n(a),
        s = n("rg98"),
        c = n("sN8P"),
        u = n("q1tI"),
        i = n("gqkn"),
        f = n("jUWi");
      function p() {
        var e = Object(u.useCallback)(
          (function() {
            var e = Object(s.a)(
              o.a.mark(function e(t) {
                var n, r;
                return o.a.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.value),
                          (e.next = 3),
                          Object(i.a)(
                            "/api/json-schema-to-openapi-schema",
                            JSON.parse(n)
                          )
                        );
                      case 3:
                        return (
                          (r = e.sent),
                          e.abrupt("return", JSON.stringify(r, null, 2))
                        );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function(t) {
              return e.apply(this, arguments);
            };
          })(),
          []
        );
        return Object(r.jsx)(c.a, {
          transformer: e,
          editorTitle: "JSON Schema",
          editorLanguage: "json",
          editorDefaultValue: "jsonSchema",
          resultTitle: "Open API Schema",
          resultLanguage: "json",
          resultEditorProps: {
            topNotifications: function() {
              return Object(r.jsx)(f.a, {
                backgroundColor: "#e7f7ff",
                title: "This code is converted on the server."
              });
            }
          }
        });
      }
    },
    wKbt: function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/json-schema-to-openapi-schema",
        function() {
          return n("7l6t");
        }
      ]);
    }
  },
  [["wKbt", 1, 2, 0, 3, 7]]
]);

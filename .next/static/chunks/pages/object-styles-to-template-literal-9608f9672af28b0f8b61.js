_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [82],
  {
    CQTR: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return E;
        });
      var s,
        a = n("nKUr"),
        r = n("xvhg"),
        o = n("sN8P"),
        i = n("cMPw"),
        c = n.n(i),
        l = n("q1tI"),
        u = n("qQ3w"),
        f = n("j3Ko"),
        T = n("3o63"),
        _ = n("xC0i"),
        O = n("jUWi"),
        p = [
          { label: "Transpile css tags", key: "css", type: T.a.SWITCH },
          { label: "Transpile styled tags", key: "styled", type: T.a.SWITCH }
        ];
      function E() {
        var t = Object(_.a)("object-styles-to-template-literal", {
            css: !0,
            styled: !0
          }),
          e = Object(r.a)(t, 2),
          n = e[0],
          i = e[1],
          E = Object(l.useCallback)(
            function(t) {
              var e = t.value;
              return (s = s || Object(u.a)(c.a)).send({
                value: e,
                type: f.a.OBJECT_STYLES_TO_TEMPLATE,
                settings: n
              });
            },
            [n]
          ),
          g = Object(l.useCallback)(
            function(t) {
              var e = t.open,
                s = t.toggle;
              return Object(a.jsx)(T.b, {
                onSubmit: i,
                initialValues: n,
                title: "Settings",
                open: e,
                toggle: s,
                formsFields: p
              });
            },
            [n]
          );
        return Object(a.jsx)(o.a, {
          resultLanguage: "javascript",
          editorLanguage: "javascript",
          editorTitle: "Object Styles",
          resultTitle: "Template Literal",
          transformer: E,
          editorSettingsElement: g,
          resultEditorProps: {
            topNotifications: function() {
              return (
                (!n.css || !n.styled) &&
                Object(a.jsx)(O.a, {
                  intent: "warning",
                  backgroundColor: "#FEF8E7",
                  title: "You have turned off "
                    .concat(n.css ? "" : "css")
                    .concat(
                      n.styled ? "" : ",styled",
                      " tags transpilation. Change it in settings."
                    )
                })
              );
            }
          },
          settings: n
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
      var s;
      n.d(e, "a", function() {
        return s;
      }),
        (function(t) {
          (t[(t.JSON_TO_PROPTYPES = 1)] = "JSON_TO_PROPTYPES"),
            (t[(t.OBJECT_STYLES_TO_TEMPLATE = 2)] =
              "OBJECT_STYLES_TO_TEMPLATE"),
            (t[(t.JSON_TO_MOBX_TREE = 3)] = "JSON_TO_MOBX_TREE");
        })(s || (s = {}));
    },
    "wB/p": function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/object-styles-to-template-literal",
        function() {
          return n("CQTR");
        }
      ]);
    },
    xC0i: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return o;
      });
      var s = n("q1tI"),
        a = n("kiQV"),
        r = "transform:".concat(a.version, ":");
      function o(t, e) {
        return (function(t, e) {
          var n = Object(s.useState)(function() {
              try {
                var n = window.localStorage.getItem(r + t) || e;
                return JSON.parse(n);
              } catch (s) {
                return e;
              }
            }),
            a = n[0],
            o = n[1];
          return [
            a,
            function(e) {
              try {
                var n = e instanceof Function ? e(a) : e;
                o(n), window.localStorage.setItem(r + t, JSON.stringify(n));
              } catch (s) {
                console.log(s);
              }
            }
          ];
        })("settings:".concat(t), e);
      }
    }
  },
  [["wB/p", 1, 2, 0, 3, 5, 6]]
]);

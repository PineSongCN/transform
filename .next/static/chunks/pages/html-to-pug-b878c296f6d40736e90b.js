_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [47],
  {
    EhNT: function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/html-to-pug",
        function() {
          return n("K5CU");
        }
      ]);
    },
    K5CU: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return g;
        });
      var a = n("nKUr"),
        o = n("xvhg"),
        r = n("sN8P"),
        s = n("q1tI"),
        u = n("xC0i"),
        c = n("3o63"),
        i = n("gqkn"),
        l = [
          { key: "tabs", type: c.a.SWITCH, label: "Use Tabs" },
          { key: "commas", type: c.a.SWITCH, label: "Commas" },
          { key: "doubleQuotes", type: c.a.SWITCH, label: "Use double quotes" },
          { key: "fragment", type: c.a.SWITCH, label: "Use Fragment" }
        ],
        f = { tabs: !0, commas: !0, doubleQuotes: !1, fragment: !1 };
      function g() {
        var t = "HTML to Pug",
          e = Object(u.a)(t, f),
          n = Object(o.a)(e, 2),
          g = n[0],
          b = n[1],
          m = Object(s.useCallback)(function(e) {
            var n = e.open,
              o = e.toggle;
            return Object(a.jsx)(c.b, {
              title: t,
              onSubmit: b,
              open: n,
              toggle: o,
              formsFields: l,
              initialValues: g
            });
          }, []),
          p = Object(s.useCallback)(
            function(t) {
              var e = t.value;
              return Object(i.a)("/api/html-to-pug", { value: e, settings: g });
            },
            [g]
          );
        return Object(a.jsx)(r.a, {
          transformer: p,
          editorTitle: "HTML",
          editorLanguage: "html",
          resultTitle: "Pug",
          resultLanguage: "pug",
          resultSettingsElement: m,
          settings: g
        });
      }
    },
    xC0i: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return s;
      });
      var a = n("q1tI"),
        o = n("kiQV"),
        r = "transform:".concat(o.version, ":");
      function s(t, e) {
        return (function(t, e) {
          var n = Object(a.useState)(function() {
              try {
                var n = window.localStorage.getItem(r + t) || e;
                return JSON.parse(n);
              } catch (a) {
                return e;
              }
            }),
            o = n[0],
            s = n[1];
          return [
            o,
            function(e) {
              try {
                var n = e instanceof Function ? e(o) : e;
                s(n), window.localStorage.setItem(r + t, JSON.stringify(n));
              } catch (a) {
                console.log(a);
              }
            }
          ];
        })("settings:".concat(t), e);
      }
    }
  },
  [["EhNT", 1, 2, 0, 3, 5, 6, 7]]
]);

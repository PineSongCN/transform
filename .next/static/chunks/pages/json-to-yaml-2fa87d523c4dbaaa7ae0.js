_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [73],
  {
    "8oxB": function(t, e) {
      var n,
        r,
        o = (t.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function u() {
        throw new Error("clearTimeout has not been defined");
      }
      function c(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === i || !n) && setTimeout)
          return (n = setTimeout), setTimeout(t, 0);
        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }
      !(function() {
        try {
          n = "function" === typeof setTimeout ? setTimeout : i;
        } catch (t) {
          n = i;
        }
        try {
          r = "function" === typeof clearTimeout ? clearTimeout : u;
        } catch (t) {
          r = u;
        }
      })();
      var s,
        a = [],
        l = !1,
        f = -1;
      function h() {
        l &&
          s &&
          ((l = !1), s.length ? (a = s.concat(a)) : (f = -1), a.length && p());
      }
      function p() {
        if (!l) {
          var t = c(h);
          l = !0;
          for (var e = a.length; e; ) {
            for (s = a, a = []; ++f < e; ) s && s[f].run();
            (f = -1), (e = a.length);
          }
          (s = null),
            (l = !1),
            (function(t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === u || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }
      function m(t, e) {
        (this.fun = t), (this.array = e);
      }
      function d() {}
      (o.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        a.push(new m(t, e)), 1 !== a.length || l || c(p);
      }),
        (m.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = d),
        (o.addListener = d),
        (o.once = d),
        (o.off = d),
        (o.removeListener = d),
        (o.removeAllListeners = d),
        (o.emit = d),
        (o.prependListener = d),
        (o.prependOnceListener = d),
        (o.listeners = function(t) {
          return [];
        }),
        (o.binding = function(t) {
          throw new Error("process.binding is not supported");
        }),
        (o.cwd = function() {
          return "/";
        }),
        (o.chdir = function(t) {
          throw new Error("process.chdir is not supported");
        }),
        (o.umask = function() {
          return 0;
        });
    },
    Auxr: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return c;
        });
      var r = n("nKUr"),
        o = n("sN8P"),
        i = n("q1tI"),
        u = n("jzzL");
      function c() {
        var t = Object(i.useCallback)(function(t) {
          var e = t.value;
          return Promise.resolve(Object(u.stringify)(JSON.parse(e)));
        }, []);
        return Object(r.jsx)(o.a, {
          transformer: t,
          editorTitle: "JSON",
          editorLanguage: "json",
          resultTitle: "YAML",
          resultLanguage: "yaml"
        });
      }
    },
    oSqU: function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/json-to-yaml",
        function() {
          return n("Auxr");
        }
      ]);
    }
  },
  [["oSqU", 1, 2, 0, 3, 4, 12]]
]);

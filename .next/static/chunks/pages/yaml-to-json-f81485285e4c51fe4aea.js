_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [92],
  {
    "32SV": function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return l;
        });
      var r = n("nKUr"),
        o = n("vJKn"),
        i = n.n(o),
        u = n("rg98"),
        c = n("sN8P"),
        s = n("q1tI"),
        a = n("jzzL"),
        f = n.n(a);
      function l() {
        var t = Object(s.useCallback)(
          (function() {
            var t = Object(u.a)(
              i.a.mark(function t(e) {
                var n;
                return i.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.value),
                          t.abrupt("return", JSON.stringify(f.a.parse(n)))
                        );
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function(e) {
              return t.apply(this, arguments);
            };
          })(),
          []
        );
        return Object(r.jsx)(c.a, {
          transformer: t,
          editorTitle: "YAML",
          editorLanguage: "yaml",
          resultTitle: "JSON",
          resultLanguage: "json"
        });
      }
    },
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
        f = !1,
        l = -1;
      function h() {
        f &&
          s &&
          ((f = !1), s.length ? (a = s.concat(a)) : (l = -1), a.length && p());
      }
      function p() {
        if (!f) {
          var t = c(h);
          f = !0;
          for (var e = a.length; e; ) {
            for (s = a, a = []; ++l < e; ) s && s[l].run();
            (l = -1), (e = a.length);
          }
          (s = null),
            (f = !1),
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
        a.push(new m(t, e)), 1 !== a.length || f || c(p);
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
    v4Rl: function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/yaml-to-json",
        function() {
          return n("32SV");
        }
      ]);
    }
  },
  [["v4Rl", 1, 2, 0, 3, 4, 12]]
]);

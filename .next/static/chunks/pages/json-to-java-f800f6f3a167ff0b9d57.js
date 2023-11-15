_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [60],
  {
    NcDY: function(t, n, c) {
      "use strict";
      c.r(n),
        c.d(n, "default", function() {
          return u;
        });
      var a = c("nKUr"),
        o = c("vJKn"),
        e = c.n(o),
        s = c("rg98"),
        r = c("sN8P"),
        i = c("q1tI");
      function u() {
        var t = Object(i.useCallback)(
          (function() {
            var t = Object(s.a)(
              e.a.mark(function t(n) {
                var a, o, s, r, i, u, l, p;
                return e.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (a = n.value),
                          (t.next = 3),
                          Promise.all([c.e(10), c.e(11), c.e(18)]).then(
                            c.bind(null, "P0Z9")
                          )
                        );
                      case 3:
                        return (
                          (o = t.sent),
                          (s = o.run),
                          (r = s(
                            "Root",
                            a,
                            JSON.stringify({ output_mode: "kotlin" })
                          ).split("\n")),
                          (i = ""),
                          (u = ""),
                          (l = []),
                          (p = []),
                          r.forEach(function(t) {
                            var n = t;
                            if (")" === (t = t.trim())) {
                              for (
                                var c = [], a = [], o = [], e = 0;
                                e < l.length;
                                e++
                              ) {
                                var s = p[e],
                                  r = l[e],
                                  f =
                                    r.charAt(0).toUpperCase() + r.substring(1);
                                c.push("".concat(s, " ").concat(r)),
                                  a.push(
                                    "\tpublic "
                                      .concat(s, " get")
                                      .concat(f, "() {\n\t\treturn this.")
                                      .concat(r, ";\n\t}\n")
                                  ),
                                  o.push(
                                    "\tpublic void set"
                                      .concat(f, "(")
                                      .concat(s, " ")
                                      .concat(r, ") {\n\t\tthis.")
                                      .concat(r, " = ")
                                      .concat(r, ";\n\t}\n")
                                  );
                              }
                              var h = "\tpublic "
                                  .concat(u, "(")
                                  .concat(c.join(", "), ") {"),
                                b = [];
                              l.forEach(function(t) {
                                b.push("this.".concat(t, " = ").concat(t, ";"));
                              }),
                                (h += "\n\t\t".concat(
                                  b.join("\n\t\t"),
                                  "\n\t}\n"
                                )),
                                (i += "\n"
                                  .concat(h, "\n")
                                  .concat(a.join("\n"), "\n")
                                  .concat(o.join("\n"), "}")),
                                (u = ""),
                                (l = []),
                                (p = []);
                            } else if (t.startsWith("data class ")) {
                              var v = t.indexOf("("),
                                g = t.substring(11, v);
                              (i += "public class ".concat(g, " {")), (u = g);
                            } else if (t.startsWith("val")) {
                              var d = t.replace("?", ""),
                                j = d.indexOf(":"),
                                _ = d.substring(4, j),
                                N = d.indexOf(":") + 2,
                                O = d.substring(N, d.length - 1);
                              (O = (O = O.replace("<Any>?", "<?>")).replace(
                                "<Any>",
                                "<?>"
                              )),
                                l.push(_),
                                p.push(O),
                                (i += "\tprivate "
                                  .concat(O, " ")
                                  .concat(_, ";"));
                            } else if (t.startsWith("typealias")) {
                              var w = t.indexOf(" ="),
                                x = t.substring(10, w),
                                k = t.indexOf("=") + 2,
                                y = t.substring(k, t.length - 1),
                                E = x.charAt(0).toLowerCase() + x.substring(1),
                                m = x,
                                J = "\tpublic "
                                  .concat(y, " get")
                                  .concat(m, "() {\n\t\treturn this.")
                                  .concat(E, ";\n\t}\n\n"),
                                P = "\tpublic void set"
                                  .concat(m, "(")
                                  .concat(y, " ")
                                  .concat(E, ") {\n\t\tthis.")
                                  .concat(E, " = ")
                                  .concat(E, ";\n\t}\n\n"),
                                A = "\tpublic "
                                  .concat(x, "(")
                                  .concat(y, " ")
                                  .concat(E, ") {\n\t\tthis.")
                                  .concat(E, " = ")
                                  .concat(E, ";\n\t}\n");
                              (i += "public class "
                                .concat(x, " {\n\tprivate ")
                                .concat(y, " ")
                                .concat(E, ";\n")),
                                (i += "\n"
                                  .concat(A, "\n")
                                  .concat(J)
                                  .concat(P, "}"));
                            } else
                              t.startsWith("import")
                                ? (i += "".concat(t, ";"))
                                : (i += n);
                            i += "\n";
                          }),
                          t.abrupt("return", i)
                        );
                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function(n) {
              return t.apply(this, arguments);
            };
          })(),
          []
        );
        return Object(a.jsx)(r.a, {
          transformer: t,
          editorTitle: "JSON",
          editorLanguage: "json",
          resultTitle: "Java",
          resultLanguage: "java"
        });
      }
    },
    Yak3: function(t, n, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/json-to-java",
        function() {
          return c("NcDY");
        }
      ]);
    }
  },
  [["Yak3", 1, 2, 0, 3]]
]);

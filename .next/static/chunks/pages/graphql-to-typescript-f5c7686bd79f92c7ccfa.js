_N_E = ("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [44],
  {
    "2tlT": function(t, e, T) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/graphql-to-typescript",
        function() {
          return T("ZFPk");
        }
      ]);
    },
    IjUz: function(t, e, T) {
      "use strict";
      var _;
      T.d(e, "a", function() {
        return _;
      }),
        (function(t) {
          (t[(t.TO_TYPESCRIPT = 1)] = "TO_TYPESCRIPT"),
            (t[(t.TO_FLOW = 2)] = "TO_FLOW"),
            (t[(t.TO_INTROSPECTION_JSON = 3)] = "TO_INTROSPECTION_JSON"),
            (t[(t.TO_FRAGMENT_MATCHER = 4)] = "TO_FRAGMENT_MATCHER"),
            (t[(t.TO_SCHEMA_AST = 5)] = "TO_SCHEMA_AST"),
            (t[(t.TO_JAVA = 6)] = "TO_JAVA"),
            (t[(t.TO_REACT_APOLLO = 7)] = "TO_REACT_APOLLO"),
            (t[(t.TO_APOLLO_ANGULAR = 8)] = "TO_APOLLO_ANGULAR"),
            (t[(t.TO_STENCIL_APOLLO = 9)] = "TO_STENCIL_APOLLO"),
            (t[(t.TO_JAVA_RESOLVERS_SIGNATURE = 10)] =
              "TO_JAVA_RESOLVERS_SIGNATURE"),
            (t[(t.TO_TYPESCRIPT_RESOLVERS_SIGNATURE = 11)] =
              "TO_TYPESCRIPT_RESOLVERS_SIGNATURE"),
            (t[(t.TO_FLOW_RESOLVERS_SIGNATURE = 12)] =
              "TO_FLOW_RESOLVERS_SIGNATURE"),
            (t[(t.TO_URQL = 13)] = "TO_URQL"),
            (t[(t.TO_TYPESCRIPT_MONGODB = 14)] = "TO_TYPESCRIPT_MONGODB");
        })(_ || (_ = {}));
    },
    RVlQ: function(t, e) {
      t.exports = function() {
        return new Worker("/_next/static/d10bdc1a40887d586be1.worker.js");
      };
    },
    ZFPk: function(t, e, T) {
      "use strict";
      T.r(e),
        T.d(e, "default", function() {
          return l;
        });
      var _,
        r = T("nKUr"),
        O = T("vJKn"),
        n = T.n(O),
        a = T("rg98"),
        u = T("q1tI"),
        E = T("sN8P"),
        i = T("qQ3w"),
        o = T("RVlQ"),
        c = T.n(o),
        s = T("IjUz"),
        R = { acceptFiles: ".graphql, .gql" };
      function l() {
        var t = Object(u.useCallback)(
          (function() {
            var t = Object(a.a)(
              n.a.mark(function t(e) {
                var T, r;
                return n.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (T = e.value),
                          (r = e.splitEditorValue),
                          (_ = _ || Object(i.a)(c.a)),
                          t.abrupt(
                            "return",
                            _.send({
                              type: s.a.TO_TYPESCRIPT,
                              value: T,
                              document: r
                            })
                          )
                        );
                      case 3:
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
        return Object(r.jsx)(E.a, {
          transformer: t,
          resultTitle: "TypeScript",
          editorTitle: "GraphQL Schema",
          editorLanguage: "graphql",
          editorDefaultValue: "graphql1",
          resultLanguage: "typescript",
          editorProps: R,
          splitEditorProps: R,
          splitTitle: "Document",
          splitLanguage: "graphql",
          splitEditorDefaultValue: "graphqlDocument"
        });
      }
    }
  },
  [["2tlT", 1, 2, 0, 3]]
]);

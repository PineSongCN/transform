("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [96],
  {
    "13z+": function(e, n, t) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.jsonToZod = void 0);
      const o = t("axwP"),
        s = r(t("FegH"));
      n.jsonToZod = (e, n = "schema", t) => {
        const r = (e, n) => {
          switch (typeof e) {
            case "string":
              return "z.string()";
            case "number":
              return "z.number()";
            case "bigint":
              return "z.number().int()";
            case "boolean":
              return "z.boolean()";
            case "object":
              if (null === e) return "z.null()";
              if (n.find(n => Object.is(n, e)))
                throw "Circular objects are not supported";
              if ((n.push(e), Array.isArray(e))) {
                const t = e
                  .map(e => r(e, n))
                  .reduce((e, n) => (e.includes(n) ? e : [...e, n]), []);
                return 1 === t.length
                  ? `z.array(${t[0]})`
                  : t.length > 1
                  ? `z.array(z.union([${t}]))`
                  : "z.array(z.unknown())";
              }
              return `z.object({${Object.entries(e).map(
                ([e, t]) => `'${e}':${r(t, n)}`
              )}})`;
            case "undefined":
              return "z.undefined()";
            case "function":
              return "z.function()";
            case "symbol":
            default:
              return "z.unknown()";
          }
        };
        return t
          ? o.format(`import {z} from "zod"\n\nexport const ${n}=${r(e, [])}`, {
              parser: "babel",
              plugins: [s.default]
            })
          : o.format(`const ${n}=${r(e, [])}`, {
              parser: "babel",
              plugins: [s.default]
            });
      };
    },
    hJoI: function(e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.jsonToZod = void 0);
      const r = t("13z+");
      Object.defineProperty(n, "jsonToZod", {
        enumerable: !0,
        get: function() {
          return r.jsonToZod;
        }
      }),
        (n.default = r.jsonToZod);
    }
  }
]);

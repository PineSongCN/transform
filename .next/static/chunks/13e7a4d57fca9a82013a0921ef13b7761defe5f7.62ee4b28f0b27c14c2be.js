("object" !== typeof self
  ? self
  : (this.webpackJsonp_N_E =
      "object" !== typeof self ? self : this.webpackJsonp_N_E || [])
).push([
  [9],
  {
    "/rHk": function(e, t, n) {
      "use strict";
      const o = "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        i = "http://www.w3.org/2001/XMLSchema#";
      e.exports = {
        LINK_HEADER_REL: "http://www.w3.org/ns/json-ld#context",
        LINK_HEADER_CONTEXT: "http://www.w3.org/ns/json-ld#context",
        RDF: o,
        RDF_LIST: o + "List",
        RDF_FIRST: o + "first",
        RDF_REST: o + "rest",
        RDF_NIL: o + "nil",
        RDF_TYPE: o + "type",
        RDF_PLAIN_LITERAL: o + "PlainLiteral",
        RDF_XML_LITERAL: o + "XMLLiteral",
        RDF_JSON_LITERAL: o + "JSON",
        RDF_OBJECT: o + "object",
        RDF_LANGSTRING: o + "langString",
        XSD: i,
        XSD_BOOLEAN: i + "boolean",
        XSD_DOUBLE: i + "double",
        XSD_INTEGER: i + "integer",
        XSD_STRING: i + "string"
      };
    },
    "0ecE": function(e, t, n) {
      "use strict";
      const o = n("ia45"),
        i = n("WVB1"),
        { isArray: r, isObject: a, isString: s, isUndefined: l } = n("aPrt"),
        { isAbsolute: c, isRelative: u, prependBase: d } = n("3deL"),
        { asArray: p, compareShortestLeast: f } = n("ia45"),
        h = new Map(),
        v = /^@[a-zA-Z]+$/,
        y = {};
      function g(e, t, n, o, i, r) {
        if (null === t || !s(t) || y.isKeyword(t)) return t;
        if (t.match(v)) return null;
        if (
          (o &&
            o.hasOwnProperty(t) &&
            !0 !== i.get(t) &&
            y.createTermDefinition({
              activeCtx: e,
              localCtx: o,
              term: t,
              defined: i,
              options: r
            }),
          (n = n || {}).vocab)
        ) {
          const n = e.mappings.get(t);
          if (null === n) return null;
          if (a(n) && "@id" in n) return n["@id"];
        }
        const l = t.indexOf(":");
        if (l > 0) {
          const n = t.substr(0, l),
            a = t.substr(l + 1);
          if ("_" === n || 0 === a.indexOf("//")) return t;
          o &&
            o.hasOwnProperty(n) &&
            y.createTermDefinition({
              activeCtx: e,
              localCtx: o,
              term: n,
              defined: i,
              options: r
            });
          const s = e.mappings.get(n);
          if (s && s._prefix) return s["@id"] + a;
          if (c(t)) return t;
        }
        if (n.vocab && "@vocab" in e) return e["@vocab"] + t;
        if (n.base && "@base" in e) {
          if (e["@base"]) return d(d(r.base, e["@base"]), t);
        } else if (n.base) return d(r.base, t);
        return t;
      }
      function m(e, t) {
        if (!e || "object" !== typeof e || !t || "object" !== typeof t)
          return e === t;
        const n = Array.isArray(e);
        if (n !== Array.isArray(t)) return !1;
        if (n) {
          if (e.length !== t.length) return !1;
          for (let n = 0; n < e.length; ++n) if (!m(e[n], t[n])) return !1;
          return !0;
        }
        const o = Object.keys(e),
          i = Object.keys(t);
        if (o.length !== i.length) return !1;
        for (const r in e) {
          let n = e[r],
            o = t[r];
          if (
            ("@container" === r &&
              Array.isArray(n) &&
              Array.isArray(o) &&
              ((n = n.slice().sort()), (o = o.slice().sort())),
            !m(n, o))
          )
            return !1;
        }
        return !0;
      }
      (e.exports = y),
        (y.process = async ({
          activeCtx: e,
          localCtx: t,
          options: n,
          propagate: l = !0,
          overrideProtected: f = !1,
          cycles: h = new Set()
        }) => {
          a(t) && "@context" in t && r(t["@context"]) && (t = t["@context"]);
          if (0 === p(t).length) return e;
          const v = await n.contextResolver.resolve({
            activeCtx: e,
            context: t,
            documentLoader: n.documentLoader,
            base: n.base
          });
          a(v[0].document) &&
            "boolean" === typeof v[0].document["@propagate"] &&
            (l = v[0].document["@propagate"]);
          let m = e;
          l || m.previousContext || ((m = m.clone()), (m.previousContext = e));
          for (const r of v) {
            let { document: l } = r;
            if (((e = m), null === l)) {
              if (!f && 0 !== Object.keys(e.protected).length) {
                const a = (n && n.protectedMode) || "error";
                if ("error" === a)
                  throw new i(
                    "Tried to nullify a context with protected terms outside of a term definition.",
                    "jsonld.SyntaxError",
                    { code: "invalid context nullification" }
                  );
                if ("warn" === a) {
                  console.warn("WARNING: invalid context nullification");
                  const t = r.getProcessed(e);
                  if (t) {
                    m = e = t;
                    continue;
                  }
                  const i = e;
                  m = e = y.getInitialContext(n).clone();
                  for (const [n, r] of Object.entries(i.protected))
                    r && (e.mappings[n] = o.clone(i.mappings[n]));
                  (e.protected = o.clone(i.protected)), r.setProcessed(i, m);
                  continue;
                }
                throw new i("Invalid protectedMode.", "jsonld.SyntaxError", {
                  code: "invalid protected mode",
                  context: t,
                  protectedMode: a
                });
              }
              m = e = y.getInitialContext(n).clone();
              continue;
            }
            const p = r.getProcessed(e);
            if (p) {
              m = e = p;
              continue;
            }
            if ((a(l) && "@context" in l && (l = l["@context"]), !a(l)))
              throw new i(
                "Invalid JSON-LD syntax; @context must be an object.",
                "jsonld.SyntaxError",
                { code: "invalid local context", context: l }
              );
            m = m.clone();
            const v = new Map();
            if ("@version" in l) {
              if (1.1 !== l["@version"])
                throw new i(
                  "Unsupported JSON-LD version: " + l["@version"],
                  "jsonld.UnsupportedVersion",
                  { code: "invalid @version value", context: l }
                );
              if (e.processingMode && "json-ld-1.0" === e.processingMode)
                throw new i(
                  "@version: " +
                    l["@version"] +
                    " not compatible with " +
                    e.processingMode,
                  "jsonld.ProcessingModeConflict",
                  { code: "processing mode conflict", context: l }
                );
              (m.processingMode = "json-ld-1.1"),
                (m["@version"] = l["@version"]),
                v.set("@version", !0);
            }
            if (
              ((m.processingMode = m.processingMode || e.processingMode),
              "@base" in l)
            ) {
              let e = l["@base"];
              if (null === e || c(e));
              else {
                if (!u(e))
                  throw new i(
                    'Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.',
                    "jsonld.SyntaxError",
                    { code: "invalid base IRI", context: l }
                  );
                e = d(m["@base"], e);
              }
              (m["@base"] = e), v.set("@base", !0);
            }
            if ("@vocab" in l) {
              const e = l["@vocab"];
              if (null === e) delete m["@vocab"];
              else {
                if (!s(e))
                  throw new i(
                    'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.',
                    "jsonld.SyntaxError",
                    { code: "invalid vocab mapping", context: l }
                  );
                if (!c(e) && y.processingMode(m, 1))
                  throw new i(
                    'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.',
                    "jsonld.SyntaxError",
                    { code: "invalid vocab mapping", context: l }
                  );
                m["@vocab"] = g(
                  m,
                  e,
                  { vocab: !0, base: !0 },
                  void 0,
                  void 0,
                  n
                );
              }
              v.set("@vocab", !0);
            }
            if ("@language" in l) {
              const e = l["@language"];
              if (null === e) delete m["@language"];
              else {
                if (!s(e))
                  throw new i(
                    'Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.',
                    "jsonld.SyntaxError",
                    { code: "invalid default language", context: l }
                  );
                m["@language"] = e.toLowerCase();
              }
              v.set("@language", !0);
            }
            if ("@direction" in l) {
              const t = l["@direction"];
              if ("json-ld-1.0" === e.processingMode)
                throw new i(
                  "Invalid JSON-LD syntax; @direction not compatible with " +
                    e.processingMode,
                  "jsonld.SyntaxError",
                  { code: "invalid context member", context: l }
                );
              if (null === t) delete m["@direction"];
              else {
                if ("ltr" !== t && "rtl" !== t)
                  throw new i(
                    'Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".',
                    "jsonld.SyntaxError",
                    { code: "invalid base direction", context: l }
                  );
                m["@direction"] = t;
              }
              v.set("@direction", !0);
            }
            if ("@propagate" in l) {
              const n = l["@propagate"];
              if ("json-ld-1.0" === e.processingMode)
                throw new i(
                  "Invalid JSON-LD syntax; @propagate not compatible with " +
                    e.processingMode,
                  "jsonld.SyntaxError",
                  { code: "invalid context entry", context: l }
                );
              if ("boolean" !== typeof n)
                throw new i(
                  "Invalid JSON-LD syntax; @propagate value must be a boolean.",
                  "jsonld.SyntaxError",
                  { code: "invalid @propagate value", context: t }
                );
              v.set("@propagate", !0);
            }
            if ("@import" in l) {
              const o = l["@import"];
              if ("json-ld-1.0" === e.processingMode)
                throw new i(
                  "Invalid JSON-LD syntax; @import not compatible with " +
                    e.processingMode,
                  "jsonld.SyntaxError",
                  { code: "invalid context entry", context: l }
                );
              if (!s(o))
                throw new i(
                  "Invalid JSON-LD syntax; @import must be a string.",
                  "jsonld.SyntaxError",
                  { code: "invalid @import value", context: t }
                );
              const r = await n.contextResolver.resolve({
                activeCtx: e,
                context: o,
                documentLoader: n.documentLoader,
                base: n.base
              });
              if (1 !== r.length)
                throw new i(
                  "Invalid JSON-LD syntax; @import must reference a single context.",
                  "jsonld.SyntaxError",
                  { code: "invalid remote context", context: t }
                );
              const a = r[0].getProcessed(e);
              if (a) l = a;
              else {
                const n = r[0].document;
                if ("@import" in n)
                  throw new i(
                    "Invalid JSON-LD syntax: imported context must not include @import.",
                    "jsonld.SyntaxError",
                    { code: "invalid context entry", context: t }
                  );
                for (const e in n) l.hasOwnProperty(e) || (l[e] = n[e]);
                r[0].setProcessed(e, l);
              }
              v.set("@import", !0);
            }
            v.set("@protected", l["@protected"] || !1);
            for (const e in l)
              if (
                (y.createTermDefinition({
                  activeCtx: m,
                  localCtx: l,
                  term: e,
                  defined: v,
                  options: n,
                  overrideProtected: f
                }),
                a(l[e]) && "@context" in l[e])
              ) {
                const t = l[e]["@context"];
                let o = !0;
                if (s(t)) {
                  const e = d(n.base, t);
                  h.has(e) ? (o = !1) : h.add(e);
                }
                if (o)
                  try {
                    await y.process({
                      activeCtx: m.clone(),
                      localCtx: l[e]["@context"],
                      overrideProtected: !0,
                      options: n,
                      cycles: h
                    });
                  } catch (x) {
                    throw new i(
                      "Invalid JSON-LD syntax; invalid scoped context.",
                      "jsonld.SyntaxError",
                      {
                        code: "invalid scoped context",
                        context: l[e]["@context"],
                        term: e
                      }
                    );
                  }
              }
            r.setProcessed(e, m);
          }
          return m;
        }),
        (y.createTermDefinition = ({
          activeCtx: e,
          localCtx: t,
          term: n,
          defined: o,
          options: l,
          overrideProtected: u = !1
        }) => {
          if (o.has(n)) {
            if (o.get(n)) return;
            throw new i(
              "Cyclical context definition detected.",
              "jsonld.CyclicalContext",
              { code: "cyclic IRI mapping", context: t, term: n }
            );
          }
          let d;
          if (
            (o.set(n, !1),
            t.hasOwnProperty(n) && (d = t[n]),
            "@type" === n &&
              a(d) &&
              "@set" === (d["@container"] || "@set") &&
              y.processingMode(e, 1.1))
          ) {
            const e = ["@container", "@id", "@protected"],
              o = Object.keys(d);
            if (0 === o.length || o.some(t => !e.includes(t)))
              throw new i(
                "Invalid JSON-LD syntax; keywords cannot be overridden.",
                "jsonld.SyntaxError",
                { code: "keyword redefinition", context: t, term: n }
              );
          } else {
            if (y.isKeyword(n))
              throw new i(
                "Invalid JSON-LD syntax; keywords cannot be overridden.",
                "jsonld.SyntaxError",
                { code: "keyword redefinition", context: t, term: n }
              );
            if (n.match(v))
              return void console.warn(
                'WARNING: terms beginning with "@" are reserved for future use and ignored',
                { term: n }
              );
            if ("" === n)
              throw new i(
                "Invalid JSON-LD syntax; a term cannot be an empty string.",
                "jsonld.SyntaxError",
                { code: "invalid term definition", context: t }
              );
          }
          const p = e.mappings.get(n);
          e.mappings.has(n) && e.mappings.delete(n);
          let f = !1;
          if (((s(d) || null === d) && ((f = !0), (d = { "@id": d })), !a(d)))
            throw new i(
              "Invalid JSON-LD syntax; @context term values must be strings or objects.",
              "jsonld.SyntaxError",
              { code: "invalid term definition", context: t }
            );
          const h = {};
          e.mappings.set(n, h), (h.reverse = !1);
          const x = ["@container", "@id", "@language", "@reverse", "@type"];
          y.processingMode(e, 1.1) &&
            x.push(
              "@context",
              "@direction",
              "@index",
              "@nest",
              "@prefix",
              "@protected"
            );
          for (const r in d)
            if (!x.includes(r))
              throw new i(
                "Invalid JSON-LD syntax; a term definition must not contain " +
                  r,
                "jsonld.SyntaxError",
                { code: "invalid term definition", context: t }
              );
          const b = n.indexOf(":");
          if (((h._termHasColon = b > 0), "@reverse" in d)) {
            if ("@id" in d)
              throw new i(
                "Invalid JSON-LD syntax; a @reverse term definition must not contain @id.",
                "jsonld.SyntaxError",
                { code: "invalid reverse property", context: t }
              );
            if ("@nest" in d)
              throw new i(
                "Invalid JSON-LD syntax; a @reverse term definition must not contain @nest.",
                "jsonld.SyntaxError",
                { code: "invalid reverse property", context: t }
              );
            const r = d["@reverse"];
            if (!s(r))
              throw new i(
                "Invalid JSON-LD syntax; a @context @reverse value must be a string.",
                "jsonld.SyntaxError",
                { code: "invalid IRI mapping", context: t }
              );
            if (!y.isKeyword(r) && r.match(v))
              return (
                console.warn(
                  'WARNING: values beginning with "@" are reserved for future use and ignored',
                  { reverse: r }
                ),
                void (p ? e.mappings.set(n, p) : e.mappings.delete(n))
              );
            const a = g(e, r, { vocab: !0, base: !1 }, t, o, l);
            if (!c(a))
              throw new i(
                "Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.",
                "jsonld.SyntaxError",
                { code: "invalid IRI mapping", context: t }
              );
            (h["@id"] = a), (h.reverse = !0);
          } else if ("@id" in d) {
            let r = d["@id"];
            if (r && !s(r))
              throw new i(
                "Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.",
                "jsonld.SyntaxError",
                { code: "invalid IRI mapping", context: t }
              );
            if (null === r) h["@id"] = null;
            else {
              if (!y.isKeyword(r) && r.match(v))
                return (
                  console.warn(
                    'WARNING: values beginning with "@" are reserved for future use and ignored',
                    { id: r }
                  ),
                  void (p ? e.mappings.set(n, p) : e.mappings.delete(n))
                );
              if (r !== n) {
                if (
                  ((r = g(e, r, { vocab: !0, base: !1 }, t, o, l)),
                  !c(r) && !y.isKeyword(r))
                )
                  throw new i(
                    "Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.",
                    "jsonld.SyntaxError",
                    { code: "invalid IRI mapping", context: t }
                  );
                if (n.match(/(?::[^:])|\//)) {
                  if (
                    g(
                      e,
                      n,
                      { vocab: !0, base: !1 },
                      t,
                      new Map(o).set(n, !0),
                      l
                    ) !== r
                  )
                    throw new i(
                      "Invalid JSON-LD syntax; term in form of IRI must expand to definition.",
                      "jsonld.SyntaxError",
                      { code: "invalid IRI mapping", context: t }
                    );
                }
                (h["@id"] = r),
                  (h._prefix =
                    f && !h._termHasColon && r.match(/[:\/\?#\[\]@]$/));
              }
            }
          }
          if (!("@id" in h))
            if (h._termHasColon) {
              const i = n.substr(0, b);
              if (
                (t.hasOwnProperty(i) &&
                  y.createTermDefinition({
                    activeCtx: e,
                    localCtx: t,
                    term: i,
                    defined: o,
                    options: l
                  }),
                e.mappings.has(i))
              ) {
                const t = n.substr(b + 1);
                h["@id"] = e.mappings.get(i)["@id"] + t;
              } else h["@id"] = n;
            } else if ("@type" === n) h["@id"] = n;
            else {
              if (!("@vocab" in e))
                throw new i(
                  "Invalid JSON-LD syntax; @context terms must define an @id.",
                  "jsonld.SyntaxError",
                  { code: "invalid IRI mapping", context: t, term: n }
                );
              h["@id"] = e["@vocab"] + n;
            }
          if (
            ((!0 === d["@protected"] ||
              (!0 === o.get("@protected") && !1 !== d["@protected"])) &&
              ((e.protected[n] = !0), (h.protected = !0)),
            o.set(n, !0),
            "@type" in d)
          ) {
            let n = d["@type"];
            if (!s(n))
              throw new i(
                "Invalid JSON-LD syntax; an @context @type value must be a string.",
                "jsonld.SyntaxError",
                { code: "invalid type mapping", context: t }
              );
            if ("@json" === n || "@none" === n) {
              if (y.processingMode(e, 1))
                throw new i(
                  `Invalid JSON-LD syntax; an @context @type value must not be "${n}" in JSON-LD 1.0 mode.`,
                  "jsonld.SyntaxError",
                  { code: "invalid type mapping", context: t }
                );
            } else if ("@id" !== n && "@vocab" !== n) {
              if (((n = g(e, n, { vocab: !0, base: !1 }, t, o, l)), !c(n)))
                throw new i(
                  "Invalid JSON-LD syntax; an @context @type value must be an absolute IRI.",
                  "jsonld.SyntaxError",
                  { code: "invalid type mapping", context: t }
                );
              if (0 === n.indexOf("_:"))
                throw new i(
                  "Invalid JSON-LD syntax; an @context @type value must be an IRI, not a blank node identifier.",
                  "jsonld.SyntaxError",
                  { code: "invalid type mapping", context: t }
                );
            }
            h["@type"] = n;
          }
          if ("@container" in d) {
            const n = s(d["@container"])
                ? [d["@container"]]
                : d["@container"] || [],
              o = ["@list", "@set", "@index", "@language"];
            let a = !0;
            const l = n.includes("@set");
            if (y.processingMode(e, 1.1)) {
              if ((o.push("@graph", "@id", "@type"), n.includes("@list"))) {
                if (1 !== n.length)
                  throw new i(
                    "Invalid JSON-LD syntax; @context @container with @list must have no other values",
                    "jsonld.SyntaxError",
                    { code: "invalid container mapping", context: t }
                  );
              } else if (n.includes("@graph")) {
                if (
                  n.some(
                    e =>
                      "@graph" !== e &&
                      "@id" !== e &&
                      "@index" !== e &&
                      "@set" !== e
                  )
                )
                  throw new i(
                    "Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set",
                    "jsonld.SyntaxError",
                    { code: "invalid container mapping", context: t }
                  );
              } else a &= n.length <= (l ? 2 : 1);
              if (
                n.includes("@type") &&
                ((h["@type"] = h["@type"] || "@id"),
                !["@id", "@vocab"].includes(h["@type"]))
              )
                throw new i(
                  "Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.",
                  "jsonld.SyntaxError",
                  { code: "invalid type mapping", context: t }
                );
            } else (a &= !r(d["@container"])), (a &= n.length <= 1);
            if (
              ((a &= n.every(e => o.includes(e))),
              (a &= !(l && n.includes("@list"))),
              !a)
            )
              throw new i(
                "Invalid JSON-LD syntax; @context @container value must be one of the following: " +
                  o.join(", "),
                "jsonld.SyntaxError",
                { code: "invalid container mapping", context: t }
              );
            if (h.reverse && !n.every(e => ["@index", "@set"].includes(e)))
              throw new i(
                "Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.",
                "jsonld.SyntaxError",
                { code: "invalid reverse property", context: t }
              );
            h["@container"] = n;
          }
          if ("@index" in d) {
            if (!("@container" in d) || !h["@container"].includes("@index"))
              throw new i(
                `Invalid JSON-LD syntax; @index without @index in @container: "${d["@index"]}" on term "${n}".`,
                "jsonld.SyntaxError",
                { code: "invalid term definition", context: t }
              );
            if (!s(d["@index"]) || 0 === d["@index"].indexOf("@"))
              throw new i(
                `Invalid JSON-LD syntax; @index must expand to an IRI: "${d["@index"]}" on term "${n}".`,
                "jsonld.SyntaxError",
                { code: "invalid term definition", context: t }
              );
            h["@index"] = d["@index"];
          }
          if (
            ("@context" in d && (h["@context"] = d["@context"]),
            "@language" in d && !("@type" in d))
          ) {
            let e = d["@language"];
            if (null !== e && !s(e))
              throw new i(
                "Invalid JSON-LD syntax; @context @language value must be a string or null.",
                "jsonld.SyntaxError",
                { code: "invalid language mapping", context: t }
              );
            null !== e && (e = e.toLowerCase()), (h["@language"] = e);
          }
          if ("@prefix" in d) {
            if (n.match(/:|\//))
              throw new i(
                "Invalid JSON-LD syntax; @context @prefix used on a compact IRI term",
                "jsonld.SyntaxError",
                { code: "invalid term definition", context: t }
              );
            if (y.isKeyword(h["@id"]))
              throw new i(
                "Invalid JSON-LD syntax; keywords may not be used as prefixes",
                "jsonld.SyntaxError",
                { code: "invalid term definition", context: t }
              );
            if ("boolean" !== typeof d["@prefix"])
              throw new i(
                "Invalid JSON-LD syntax; @context value for @prefix must be boolean",
                "jsonld.SyntaxError",
                { code: "invalid @prefix value", context: t }
              );
            h._prefix = !0 === d["@prefix"];
          }
          if ("@direction" in d) {
            const e = d["@direction"];
            if (null !== e && "ltr" !== e && "rtl" !== e)
              throw new i(
                'Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".',
                "jsonld.SyntaxError",
                { code: "invalid base direction", context: t }
              );
            h["@direction"] = e;
          }
          if ("@nest" in d) {
            const e = d["@nest"];
            if (!s(e) || ("@nest" !== e && 0 === e.indexOf("@")))
              throw new i(
                "Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.",
                "jsonld.SyntaxError",
                { code: "invalid @nest value", context: t }
              );
            h["@nest"] = e;
          }
          const w = h["@id"];
          if ("@context" === w || "@preserve" === w)
            throw new i(
              "Invalid JSON-LD syntax; @context and @preserve cannot be aliased.",
              "jsonld.SyntaxError",
              { code: "invalid keyword alias", context: t }
            );
          if (
            p &&
            p.protected &&
            !u &&
            ((e.protected[n] = !0), (h.protected = !0), !m(p, h))
          ) {
            const e = (l && l.protectedMode) || "error";
            if ("error" === e)
              throw new i(
                `Invalid JSON-LD syntax; tried to redefine "${n}" which is a protected term.`,
                "jsonld.SyntaxError",
                { code: "protected term redefinition", context: t, term: n }
              );
            if ("warn" === e)
              return void console.warn("WARNING: protected term redefinition", {
                term: n
              });
            throw new i("Invalid protectedMode.", "jsonld.SyntaxError", {
              code: "invalid protected mode",
              context: t,
              term: n,
              protectedMode: e
            });
          }
        }),
        (y.expandIri = (e, t, n, o) => g(e, t, n, void 0, void 0, o)),
        (y.getInitialContext = e => {
          const t = JSON.stringify({ processingMode: e.processingMode }),
            n = h.get(t);
          if (n) return n;
          const i = {
            processingMode: e.processingMode,
            mappings: new Map(),
            inverse: null,
            getInverse: function() {
              const e = this;
              if (e.inverse) return e.inverse;
              const t = (e.inverse = {}),
                n = (e.fastCurieMap = {}),
                o = {},
                i = (e["@language"] || "@none").toLowerCase(),
                s = e["@direction"],
                l = e.mappings,
                c = [...l.keys()].sort(f);
              for (const r of c) {
                const e = l.get(r);
                if (null === e) continue;
                let c = e["@container"] || "@none";
                if (
                  ((c = []
                    .concat(c)
                    .sort()
                    .join("")),
                  null === e["@id"])
                )
                  continue;
                const u = p(e["@id"]);
                for (const l of u) {
                  let u = t[l];
                  const d = y.isKeyword(l);
                  if (u) d || e._termHasColon || o[l].push(r);
                  else if (((t[l] = u = {}), !d && !e._termHasColon)) {
                    o[l] = [r];
                    const e = { iri: l, terms: o[l] };
                    l[0] in n ? n[l[0]].push(e) : (n[l[0]] = [e]);
                  }
                  if (
                    (u[c] ||
                      (u[c] = { "@language": {}, "@type": {}, "@any": {} }),
                    (u = u[c]),
                    a(r, u["@any"], "@none"),
                    e.reverse)
                  )
                    a(r, u["@type"], "@reverse");
                  else if ("@none" === e["@type"])
                    a(r, u["@any"], "@none"),
                      a(r, u["@language"], "@none"),
                      a(r, u["@type"], "@none");
                  else if ("@type" in e) a(r, u["@type"], e["@type"]);
                  else if ("@language" in e && "@direction" in e) {
                    const t = e["@language"],
                      n = e["@direction"];
                    a(
                      r,
                      u["@language"],
                      t && n
                        ? `${t}_${n}`.toLowerCase()
                        : t
                        ? t.toLowerCase()
                        : n
                        ? `_${n}`
                        : "@null"
                    );
                  } else
                    "@language" in e
                      ? a(
                          r,
                          u["@language"],
                          (e["@language"] || "@null").toLowerCase()
                        )
                      : "@direction" in e
                      ? e["@direction"]
                        ? a(r, u["@language"], `_${e["@direction"]}`)
                        : a(r, u["@language"], "@none")
                      : s
                      ? (a(r, u["@language"], `_${s}`),
                        a(r, u["@language"], "@none"),
                        a(r, u["@type"], "@none"))
                      : (a(r, u["@language"], i),
                        a(r, u["@language"], "@none"),
                        a(r, u["@type"], "@none"));
                }
              }
              for (const a in n) r(n, a, 1);
              return t;
            },
            clone: function() {
              const e = {};
              (e.mappings = o.clone(this.mappings)),
                (e.clone = this.clone),
                (e.inverse = null),
                (e.getInverse = this.getInverse),
                (e.protected = o.clone(this.protected)),
                this.previousContext &&
                  (e.previousContext = this.previousContext.clone());
              (e.revertToPreviousContext = this.revertToPreviousContext),
                "@base" in this && (e["@base"] = this["@base"]);
              "@language" in this && (e["@language"] = this["@language"]);
              "@vocab" in this && (e["@vocab"] = this["@vocab"]);
              return e;
            },
            revertToPreviousContext: function() {
              if (!this.previousContext) return this;
              return this.previousContext.clone();
            },
            protected: {}
          };
          return 1e4 === h.size && h.clear(), h.set(t, i), i;
          function r(e, t, n) {
            const o = e[t],
              i = (e[t] = {});
            let a, s;
            for (const r of o)
              (a = r.iri),
                (s = n >= a.length ? "" : a[n]),
                s in i ? i[s].push(r) : (i[s] = [r]);
            for (const l in i) "" !== l && r(i, l, n + 1);
          }
          function a(e, t, n) {
            t.hasOwnProperty(n) || (t[n] = e);
          }
        }),
        (y.getContextValue = (e, t, n) => {
          if (null === t) {
            if ("@context" === n) return;
            return null;
          }
          if (e.mappings.has(t)) {
            const o = e.mappings.get(t);
            if (l(n)) return o;
            if (o.hasOwnProperty(n)) return o[n];
          }
          return ("@language" === n && n in e) || ("@direction" === n && n in e)
            ? e[n]
            : "@context" !== n
            ? null
            : void 0;
        }),
        (y.processingMode = (e, t) =>
          t.toString() >= "1.1"
            ? !e.processingMode || e.processingMode >= "json-ld-" + t.toString()
            : "json-ld-1.0" === e.processingMode),
        (y.isKeyword = e => {
          if (!s(e) || "@" !== e[0]) return !1;
          switch (e) {
            case "@base":
            case "@container":
            case "@context":
            case "@default":
            case "@direction":
            case "@embed":
            case "@explicit":
            case "@graph":
            case "@id":
            case "@included":
            case "@index":
            case "@json":
            case "@language":
            case "@list":
            case "@nest":
            case "@none":
            case "@omitDefault":
            case "@prefix":
            case "@preserve":
            case "@protected":
            case "@requireAll":
            case "@reverse":
            case "@set":
            case "@type":
            case "@value":
            case "@version":
            case "@vocab":
              return !0;
          }
          return !1;
        });
    },
    23: function(e, t) {},
    "3deL": function(e, t, n) {
      "use strict";
      const o = n("aPrt"),
        i = {};
      (e.exports = i),
        (i.parsers = {
          simple: {
            keys: ["href", "scheme", "authority", "path", "query", "fragment"],
            regex: /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/
          },
          full: {
            keys: [
              "href",
              "protocol",
              "scheme",
              "authority",
              "auth",
              "user",
              "password",
              "hostname",
              "port",
              "path",
              "directory",
              "file",
              "query",
              "fragment"
            ],
            regex: /^(([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?(?:(((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/
          }
        }),
        (i.parse = (e, t) => {
          const n = {},
            o = i.parsers[t || "full"],
            r = o.regex.exec(e);
          let a = o.keys.length;
          for (; a--; ) n[o.keys[a]] = void 0 === r[a] ? null : r[a];
          return (
            (("https" === n.scheme && "443" === n.port) ||
              ("http" === n.scheme && "80" === n.port)) &&
              ((n.href = n.href.replace(":" + n.port, "")),
              (n.authority = n.authority.replace(":" + n.port, "")),
              (n.port = null)),
            (n.normalizedPath = i.removeDotSegments(n.path)),
            n
          );
        }),
        (i.prependBase = (e, t) => {
          if (null === e) return t;
          if (i.isAbsolute(t)) return t;
          (e && !o.isString(e)) || (e = i.parse(e || ""));
          const n = i.parse(t),
            r = { protocol: e.protocol || "" };
          if (null !== n.authority)
            (r.authority = n.authority), (r.path = n.path), (r.query = n.query);
          else if (((r.authority = e.authority), "" === n.path))
            (r.path = e.path),
              null !== n.query ? (r.query = n.query) : (r.query = e.query);
          else {
            if (0 === n.path.indexOf("/")) r.path = n.path;
            else {
              let t = e.path;
              (t = t.substr(0, t.lastIndexOf("/") + 1)),
                (t.length > 0 || e.authority) &&
                  "/" !== t.substr(-1) &&
                  (t += "/"),
                (t += n.path),
                (r.path = t);
            }
            r.query = n.query;
          }
          "" !== n.path && (r.path = i.removeDotSegments(r.path));
          let a = r.protocol;
          return (
            null !== r.authority && (a += "//" + r.authority),
            (a += r.path),
            null !== r.query && (a += "?" + r.query),
            null !== n.fragment && (a += "#" + n.fragment),
            "" === a && (a = "./"),
            a
          );
        }),
        (i.removeBase = (e, t) => {
          if (null === e) return t;
          (e && !o.isString(e)) || (e = i.parse(e || ""));
          let n = "";
          if (
            ("" !== e.href
              ? (n += (e.protocol || "") + "//" + (e.authority || ""))
              : t.indexOf("//") && (n += "//"),
            0 !== t.indexOf(n))
          )
            return t;
          const r = i.parse(t.substr(n.length)),
            a = e.normalizedPath.split("/"),
            s = r.normalizedPath.split("/"),
            l = r.fragment || r.query ? 0 : 1;
          for (; a.length > 0 && s.length > l && a[0] === s[0]; )
            a.shift(), s.shift();
          let c = "";
          if (a.length > 0) {
            a.pop();
            for (let e = 0; e < a.length; ++e) c += "../";
          }
          return (
            (c += s.join("/")),
            null !== r.query && (c += "?" + r.query),
            null !== r.fragment && (c += "#" + r.fragment),
            "" === c && (c = "./"),
            c
          );
        }),
        (i.removeDotSegments = e => {
          if (0 === e.length) return "";
          const t = e.split("/"),
            n = [];
          for (; t.length > 0; ) {
            const e = t.shift(),
              o = 0 === t.length;
            "." !== e
              ? ".." !== e
                ? n.push(e)
                : (n.pop(), o && n.push(""))
              : o && n.push("");
          }
          return (
            "/" === e[0] && n.length > 0 && "" !== n[0] && n.unshift(""),
            1 === n.length && "" === n[0] ? "/" : n.join("/")
          );
        });
      const r = /^([A-Za-z][A-Za-z0-9+-.]*|_):[^\s]*$/;
      (i.isAbsolute = e => o.isString(e) && r.test(e)),
        (i.isRelative = e => o.isString(e));
    },
    "5u1s": function(e, t, n) {
      "use strict";
      const { isKeyword: o } = n("0ecE"),
        i = n("yS/M"),
        r = n("aPrt"),
        a = n("ia45"),
        s = n("3deL"),
        l = n("WVB1"),
        { createNodeMap: c, mergeNodeMapGraphs: u } = n("eWym"),
        d = {};
      function p(e) {
        const t = {};
        for (const n in e) void 0 !== e[n] && (t["@" + n] = [e[n]]);
        return [t];
      }
      function f(e, t, n) {
        for (let o = n.length - 1; o >= 0; --o) {
          const i = n[o];
          if (i.graph === t && i.subject["@id"] === e["@id"]) return !0;
        }
        return !1;
      }
      function h(e, t, n) {
        const o = "@" + n;
        let i = o in e ? e[o][0] : t[n];
        if ("embed" === n)
          if (!0 === i) i = "@once";
          else if (!1 === i) i = "@never";
          else if (
            "@always" !== i &&
            "@never" !== i &&
            "@link" !== i &&
            "@first" !== i &&
            "@last" !== i &&
            "@once" !== i
          )
            throw new l(
              "Invalid JSON-LD syntax; invalid value of @embed.",
              "jsonld.SyntaxError",
              { code: "invalid @embed value", frame: e }
            );
        return i;
      }
      function v(e) {
        if (!r.isArray(e) || 1 !== e.length || !r.isObject(e[0]))
          throw new l(
            "Invalid JSON-LD syntax; a JSON-LD frame must be a single object.",
            "jsonld.SyntaxError",
            { frame: e }
          );
        if ("@id" in e[0])
          for (const t of a.asArray(e[0]["@id"]))
            if (
              (!r.isObject(t) && !s.isAbsolute(t)) ||
              (r.isString(t) && 0 === t.indexOf("_:"))
            )
              throw new l(
                "Invalid JSON-LD syntax; invalid @id in frame.",
                "jsonld.SyntaxError",
                { code: "invalid frame", frame: e }
              );
        if ("@type" in e[0])
          for (const t of a.asArray(e[0]["@type"]))
            if (
              (!r.isObject(t) && !s.isAbsolute(t)) ||
              (r.isString(t) && 0 === t.indexOf("_:"))
            )
              throw new l(
                "Invalid JSON-LD syntax; invalid @type in frame.",
                "jsonld.SyntaxError",
                { code: "invalid frame", frame: e }
              );
      }
      function y(e, t, n, s) {
        let l = !0,
          c = !1;
        for (const u in n) {
          let d = !1;
          const p = a.getValues(t, u),
            f = 0 === a.getValues(n, u).length;
          if ("@id" === u) {
            if (
              (r.isEmptyObject(n["@id"][0] || {})
                ? (d = !0)
                : n["@id"].length >= 0 && (d = n["@id"].includes(p[0])),
              !s.requireAll)
            )
              return d;
          } else if ("@type" === u) {
            if (((l = !1), f)) {
              if (p.length > 0) return !1;
              d = !0;
            } else if (
              1 === n["@type"].length &&
              r.isEmptyObject(n["@type"][0])
            )
              d = p.length > 0;
            else
              for (const e of n["@type"])
                d =
                  !(!r.isObject(e) || !("@default" in e)) ||
                  d || p.some(t => t === e);
            if (!s.requireAll) return d;
          } else {
            if (o(u)) continue;
            {
              const t = a.getValues(n, u)[0];
              let o = !1;
              if (
                (t && (v([t]), (o = "@default" in t)),
                (l = !1),
                0 === p.length && o)
              )
                continue;
              if (p.length > 0 && f) return !1;
              if (void 0 === t) {
                if (p.length > 0) return !1;
                d = !0;
              } else if (i.isList(t)) {
                const n = t["@list"][0];
                if (i.isList(p[0])) {
                  const t = p[0]["@list"];
                  i.isValue(n)
                    ? (d = t.some(e => w(n, e)))
                    : (i.isSubject(n) || i.isSubjectReference(n)) &&
                      (d = t.some(t => b(e, n, t, s)));
                }
              } else
                d = i.isValue(t)
                  ? p.some(e => w(t, e))
                  : i.isSubjectReference(t)
                  ? p.some(n => b(e, t, n, s))
                  : !!r.isObject(t) && p.length > 0;
            }
          }
          if (!d && s.requireAll) return !1;
          c = c || d;
        }
        return l || c;
      }
      function g(e, t) {
        const n = e.uniqueEmbeds[e.graph],
          o = n[t],
          i = o.parent,
          s = o.property,
          l = { "@id": t };
        if (r.isArray(i)) {
          for (let r = 0; r < i.length; ++r)
            if (a.compareValues(i[r], l)) {
              i[r] = l;
              break;
            }
        } else {
          const e = r.isArray(i[s]);
          a.removeValue(i, s, l, { propertyIsArray: e }),
            a.addValue(i, s, l, { propertyIsArray: e });
        }
        const c = e => {
          const t = Object.keys(n);
          for (const o of t)
            o in n &&
              r.isObject(n[o].parent) &&
              n[o].parent["@id"] === e &&
              (delete n[o], c(o));
        };
        c(t);
      }
      function m(e, t) {
        if (r.isArray(e)) return e.map(e => m(e, t));
        if (r.isObject(e)) {
          if ("@preserve" in e) return e["@preserve"][0];
          if (i.isValue(e)) return e;
          if (i.isList(e)) return (e["@list"] = m(e["@list"], t)), e;
          if ("@id" in e) {
            const n = e["@id"];
            if (t.link.hasOwnProperty(n)) {
              const o = t.link[n].indexOf(e);
              if (-1 !== o) return t.link[n][o];
              t.link[n].push(e);
            } else t.link[n] = [e];
          }
          for (const n in e)
            "@id" === n && t.bnodesToClear.includes(e[n])
              ? delete e["@id"]
              : (e[n] = m(e[n], t));
        }
        return e;
      }
      function x(e, t, n) {
        r.isObject(e)
          ? a.addValue(e, t, n, { propertyIsArray: !0 })
          : e.push(n);
      }
      function b(e, t, n, o) {
        if (!("@id" in n)) return !1;
        const i = e.subjects[n["@id"]];
        return i && y(e, i, t, o);
      }
      function w(e, t) {
        const n = t["@value"],
          o = t["@type"],
          i = t["@language"],
          a = e["@value"]
            ? r.isArray(e["@value"])
              ? e["@value"]
              : [e["@value"]]
            : [],
          s = e["@type"]
            ? r.isArray(e["@type"])
              ? e["@type"]
              : [e["@type"]]
            : [],
          l = e["@language"]
            ? r.isArray(e["@language"])
              ? e["@language"]
              : [e["@language"]]
            : [];
        return (
          (0 === a.length && 0 === s.length && 0 === l.length) ||
          (!(!a.includes(n) && !r.isEmptyObject(a[0])) &&
            !!(
              (!o && 0 === s.length) ||
              s.includes(o) ||
              (o && r.isEmptyObject(s[0]))
            ) &&
              !!(
                (!i && 0 === l.length) ||
                l.includes(i) ||
                (i && r.isEmptyObject(l[0]))
              ))
        );
      }
      (e.exports = d),
        (d.frameMergedOrDefault = (e, t, n) => {
          const o = {
              options: n,
              embedded: !1,
              graph: "@default",
              graphMap: { "@default": {} },
              subjectStack: [],
              link: {},
              bnodeMap: {}
            },
            i = new a.IdentifierIssuer("_:b");
          c(e, o.graphMap, "@default", i),
            n.merged &&
              ((o.graphMap["@merged"] = u(o.graphMap)), (o.graph = "@merged")),
            (o.subjects = o.graphMap[o.graph]);
          const r = [];
          return (
            d.frame(o, Object.keys(o.subjects).sort(), t, r),
            n.pruneBlankNodeIdentifiers &&
              (n.bnodesToClear = Object.keys(o.bnodeMap).filter(
                e => 1 === o.bnodeMap[e].length
              )),
            (n.link = {}),
            m(r, n)
          );
        }),
        (d.frame = (e, t, n, s, c = null) => {
          v(n), (n = n[0]);
          const u = e.options,
            m = {
              embed: h(n, u, "embed"),
              explicit: h(n, u, "explicit"),
              requireAll: h(n, u, "requireAll")
            };
          e.link.hasOwnProperty(e.graph) || (e.link[e.graph] = {});
          const b = e.link[e.graph],
            j = (function(e, t, n, o) {
              const i = {};
              for (const r of t) {
                const t = e.graphMap[e.graph][r];
                y(e, t, n, o) && (i[r] = t);
              }
              return i;
            })(e, t, n, m),
            I = Object.keys(j).sort();
          for (const v of I) {
            const y = j[v];
            if (
              (null === c
                ? (e.uniqueEmbeds = { [e.graph]: {} })
                : (e.uniqueEmbeds[e.graph] = e.uniqueEmbeds[e.graph] || {}),
              "@link" === m.embed && v in b)
            ) {
              x(s, c, b[v]);
              continue;
            }
            const I = { "@id": v };
            if (
              (0 === v.indexOf("_:") &&
                a.addValue(e.bnodeMap, v, I, { propertyIsArray: !0 }),
              (b[v] = I),
              ("@first" === m.embed || "@last" === m.embed) && e.is11)
            )
              throw new l(
                "Invalid JSON-LD syntax; invalid value of @embed.",
                "jsonld.SyntaxError",
                { code: "invalid @embed value", frame: n }
              );
            if (e.embedded || !e.uniqueEmbeds[e.graph].hasOwnProperty(v))
              if (
                !e.embedded ||
                ("@never" !== m.embed && !f(y, e.graph, e.subjectStack))
              )
                if (
                  !e.embedded ||
                  ("@first" != m.embed && "@once" != m.embed) ||
                  !e.uniqueEmbeds[e.graph].hasOwnProperty(v)
                ) {
                  if (
                    ("@last" === m.embed &&
                      v in e.uniqueEmbeds[e.graph] &&
                      g(e, v),
                    (e.uniqueEmbeds[e.graph][v] = { parent: s, property: c }),
                    e.subjectStack.push({ subject: y, graph: e.graph }),
                    v in e.graphMap)
                  ) {
                    let t = !1,
                      o = null;
                    "@graph" in n
                      ? ((o = n["@graph"][0]),
                        (t = !("@merged" === v || "@default" === v)),
                        r.isObject(o) || (o = {}))
                      : ((t = "@merged" !== e.graph), (o = {})),
                      t &&
                        d.frame(
                          { ...e, graph: v, embedded: !1 },
                          Object.keys(e.graphMap[v]).sort(),
                          [o],
                          I,
                          "@graph"
                        );
                  }
                  "@included" in n &&
                    d.frame(
                      { ...e, embedded: !1 },
                      t,
                      n["@included"],
                      I,
                      "@included"
                    );
                  for (const t of Object.keys(y).sort())
                    if (o(t)) {
                      if (((I[t] = a.clone(y[t])), "@type" === t))
                        for (const n of y["@type"])
                          0 === n.indexOf("_:") &&
                            a.addValue(e.bnodeMap, n, I, {
                              propertyIsArray: !0
                            });
                    } else if (!m.explicit || t in n)
                      for (const o of y[t]) {
                        const r = t in n ? n[t] : p(m);
                        if (i.isList(o)) {
                          const r =
                              n[t] && n[t][0] && n[t][0]["@list"]
                                ? n[t][0]["@list"]
                                : p(m),
                            s = { "@list": [] };
                          x(I, t, s);
                          const l = o["@list"];
                          for (const t of l)
                            i.isSubjectReference(t)
                              ? d.frame(
                                  { ...e, embedded: !0 },
                                  [t["@id"]],
                                  r,
                                  s,
                                  "@list"
                                )
                              : x(s, "@list", a.clone(t));
                        } else
                          i.isSubjectReference(o)
                            ? d.frame(
                                { ...e, embedded: !0 },
                                [o["@id"]],
                                r,
                                I,
                                t
                              )
                            : w(r[0], o) && x(I, t, a.clone(o));
                      }
                  for (const e of Object.keys(n).sort()) {
                    if ("@type" === e) {
                      if (!r.isObject(n[e][0]) || !("@default" in n[e][0]))
                        continue;
                    } else if (o(e)) continue;
                    const t = n[e][0] || {};
                    if (!h(t, u, "omitDefault") && !(e in I)) {
                      let n = "@null";
                      "@default" in t && (n = a.clone(t["@default"])),
                        r.isArray(n) || (n = [n]),
                        (I[e] = [{ "@preserve": n }]);
                    }
                  }
                  for (const t of Object.keys(n["@reverse"] || {}).sort()) {
                    const o = n["@reverse"][t];
                    for (const n of Object.keys(e.subjects)) {
                      a.getValues(e.subjects[n], t).some(e => e["@id"] === v) &&
                        ((I["@reverse"] = I["@reverse"] || {}),
                        a.addValue(I["@reverse"], t, [], {
                          propertyIsArray: !0
                        }),
                        d.frame(
                          { ...e, embedded: !0 },
                          [n],
                          o,
                          I["@reverse"][t],
                          c
                        ));
                    }
                  }
                  x(s, c, I), e.subjectStack.pop();
                } else x(s, c, I);
              else x(s, c, I);
          }
        }),
        (d.cleanupNull = (e, t) => {
          if (r.isArray(e)) {
            return e.map(e => d.cleanupNull(e, t)).filter(e => e);
          }
          if ("@null" === e) return null;
          if (r.isObject(e)) {
            if ("@id" in e) {
              const n = e["@id"];
              if (t.link.hasOwnProperty(n)) {
                const o = t.link[n].indexOf(e);
                if (-1 !== o) return t.link[n][o];
                t.link[n].push(e);
              } else t.link[n] = [e];
            }
            for (const n in e) e[n] = d.cleanupNull(e[n], t);
          }
          return e;
        });
    },
    "7hfO": function(e, t, n) {
      "use strict";
      const o = n("cVYw"),
        i = {};
      (e.exports = i),
        (i.setupDocumentLoaders = function(e) {
          "undefined" !== typeof XMLHttpRequest &&
            ((e.documentLoaders.xhr = o), e.useDocumentLoader("xhr"));
        }),
        (i.setupGlobals = function(e) {
          "undefined" === typeof globalThis.JsonLdProcessor &&
            Object.defineProperty(globalThis, "JsonLdProcessor", {
              writable: !0,
              enumerable: !1,
              configurable: !0,
              value: e.JsonLdProcessor
            });
        });
    },
    "8oxB": function(e, t) {
      var n,
        o,
        i = (e.exports = {});
      function r() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === r || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function() {
        try {
          n = "function" === typeof setTimeout ? setTimeout : r;
        } catch (e) {
          n = r;
        }
        try {
          o = "function" === typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          o = a;
        }
      })();
      var l,
        c = [],
        u = !1,
        d = -1;
      function p() {
        u &&
          l &&
          ((u = !1), l.length ? (c = l.concat(c)) : (d = -1), c.length && f());
      }
      function f() {
        if (!u) {
          var e = s(p);
          u = !0;
          for (var t = c.length; t; ) {
            for (l = c, c = []; ++d < t; ) l && l[d].run();
            (d = -1), (t = c.length);
          }
          (l = null),
            (u = !1),
            (function(e) {
              if (o === clearTimeout) return clearTimeout(e);
              if ((o === a || !o) && clearTimeout)
                return (o = clearTimeout), clearTimeout(e);
              try {
                o(e);
              } catch (t) {
                try {
                  return o.call(null, e);
                } catch (t) {
                  return o.call(this, e);
                }
              }
            })(e);
        }
      }
      function h(e, t) {
        (this.fun = e), (this.array = t);
      }
      function v() {}
      (i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new h(e, t)), 1 !== c.length || u || s(f);
      }),
        (h.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = v),
        (i.addListener = v),
        (i.once = v),
        (i.off = v),
        (i.removeListener = v),
        (i.removeAllListeners = v),
        (i.emit = v),
        (i.prependListener = v),
        (i.prependOnceListener = v),
        (i.listeners = function(e) {
          return [];
        }),
        (i.binding = function(e) {
          throw new Error("process.binding is not supported");
        }),
        (i.cwd = function() {
          return "/";
        }),
        (i.chdir = function(e) {
          throw new Error("process.chdir is not supported");
        }),
        (i.umask = function() {
          return 0;
        });
    },
    CfyG: function(e, t, n) {
      (function(e) {
        var o =
            ("undefined" !== typeof e && e) ||
            ("undefined" !== typeof self && self) ||
            window,
          i = Function.prototype.apply;
        function r(e, t) {
          (this._id = e), (this._clearFn = t);
        }
        (t.setTimeout = function() {
          return new r(i.call(setTimeout, o, arguments), clearTimeout);
        }),
          (t.setInterval = function() {
            return new r(i.call(setInterval, o, arguments), clearInterval);
          }),
          (t.clearTimeout = t.clearInterval = function(e) {
            e && e.close();
          }),
          (r.prototype.unref = r.prototype.ref = function() {}),
          (r.prototype.close = function() {
            this._clearFn.call(o, this._id);
          }),
          (t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
          }),
          (t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
          }),
          (t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
          n("YBdB"),
          (t.setImmediate =
            ("undefined" !== typeof self && self.setImmediate) ||
            ("undefined" !== typeof e && e.setImmediate) ||
            (this && this.setImmediate)),
          (t.clearImmediate =
            ("undefined" !== typeof self && self.clearImmediate) ||
            ("undefined" !== typeof e && e.clearImmediate) ||
            (this && this.clearImmediate));
      }.call(this, n("ntbh")));
    },
    DYhM: function(e, t, n) {
      "use strict";
      const { isArray: o, isObject: i, isString: r } = n("aPrt"),
        { asArray: a } = n("ia45"),
        { prependBase: s } = n("3deL"),
        l = n("WVB1"),
        c = n("kJPQ");
      function u(e) {
        throw new l(
          "Invalid JSON-LD syntax; @context must be an object.",
          "jsonld.SyntaxError",
          { code: "invalid local context", context: e }
        );
      }
      function d({ context: e, base: t }) {
        if (!e) return;
        const n = e["@context"];
        if (r(n)) e["@context"] = s(t, n);
        else if (o(n))
          for (let o = 0; o < n.length; ++o) {
            const e = n[o];
            r(e)
              ? (n[o] = s(t, e))
              : i(e) && d({ context: { "@context": e }, base: t });
          }
        else if (i(n)) for (const o in n) d({ context: n[o], base: t });
      }
      e.exports = class {
        constructor({ sharedCache: e }) {
          (this.perOpCache = new Map()), (this.sharedCache = e);
        }
        async resolve({
          activeCtx: e,
          context: t,
          documentLoader: n,
          base: s,
          cycles: l = new Set()
        }) {
          t && i(t) && t["@context"] && (t = t["@context"]), (t = a(t));
          const d = [];
          for (const a of t) {
            if (r(a)) {
              let t = this._get(a);
              t ||
                (t = await this._resolveRemoteContext({
                  activeCtx: e,
                  url: a,
                  documentLoader: n,
                  base: s,
                  cycles: l
                })),
                o(t) ? d.push(...t) : d.push(t);
              continue;
            }
            if (null === a) {
              d.push(new c({ document: null }));
              continue;
            }
            i(a) || u(t);
            const p = JSON.stringify(a);
            let f = this._get(p);
            f ||
              ((f = new c({ document: a })),
              this._cacheResolvedContext({
                key: p,
                resolved: f,
                tag: "static"
              })),
              d.push(f);
          }
          return d;
        }
        _get(e) {
          let t = this.perOpCache.get(e);
          if (!t) {
            const n = this.sharedCache.get(e);
            n && ((t = n.get("static")), t && this.perOpCache.set(e, t));
          }
          return t;
        }
        _cacheResolvedContext({ key: e, resolved: t, tag: n }) {
          if ((this.perOpCache.set(e, t), void 0 !== n)) {
            let o = this.sharedCache.get(e);
            o || ((o = new Map()), this.sharedCache.set(e, o)), o.set(n, t);
          }
          return t;
        }
        async _resolveRemoteContext({
          activeCtx: e,
          url: t,
          documentLoader: n,
          base: o,
          cycles: i
        }) {
          t = s(o, t);
          const { context: r, remoteDoc: a } = await this._fetchContext({
            activeCtx: e,
            url: t,
            documentLoader: n,
            cycles: i
          });
          d({ context: r, base: (o = a.documentUrl || t) });
          const l = await this.resolve({
            activeCtx: e,
            context: r,
            documentLoader: n,
            base: o,
            cycles: i
          });
          return (
            this._cacheResolvedContext({ key: t, resolved: l, tag: a.tag }), l
          );
        }
        async _fetchContext({
          activeCtx: e,
          url: t,
          documentLoader: n,
          cycles: a
        }) {
          if (a.size > 10)
            throw new l(
              "Maximum number of @context URLs exceeded.",
              "jsonld.ContextUrlError",
              {
                code:
                  "json-ld-1.0" === e.processingMode
                    ? "loading remote context failed"
                    : "context overflow",
                max: 10
              }
            );
          if (a.has(t))
            throw new l(
              "Cyclical @context URLs detected.",
              "jsonld.ContextUrlError",
              {
                code:
                  "json-ld-1.0" === e.processingMode
                    ? "recursive context inclusion"
                    : "context overflow",
                url: t
              }
            );
          let s, c;
          a.add(t);
          try {
            (c = await n(t)),
              (s = c.document || null),
              r(s) && (s = JSON.parse(s));
          } catch (u) {
            throw new l(
              "Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context.",
              "jsonld.InvalidUrl",
              { code: "loading remote context failed", url: t, cause: u }
            );
          }
          if (!i(s))
            throw new l(
              "Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object.",
              "jsonld.InvalidUrl",
              { code: "invalid remote context", url: t }
            );
          return (
            (s =
              "@context" in s
                ? { "@context": s["@context"] }
                : { "@context": {} }),
            c.contextUrl &&
              (o(s["@context"]) || (s["@context"] = [s["@context"]]),
              s["@context"].push(c.contextUrl)),
            { context: s, remoteDoc: c }
          );
        }
      };
    },
    HwNo: function(e, t, n) {
      "use strict";
      e.exports = function(e) {
        e.prototype[Symbol.iterator] = function*() {
          for (let e = this.head; e; e = e.next) yield e.value;
        };
      };
    },
    HyWp: function(e, t, n) {
      "use strict";
      const o = n("XPeR"),
        i = Symbol("max"),
        r = Symbol("length"),
        a = Symbol("lengthCalculator"),
        s = Symbol("allowStale"),
        l = Symbol("maxAge"),
        c = Symbol("dispose"),
        u = Symbol("noDisposeOnSet"),
        d = Symbol("lruList"),
        p = Symbol("cache"),
        f = Symbol("updateAgeOnGet"),
        h = () => 1;
      const v = (e, t, n) => {
          const o = e[p].get(t);
          if (o) {
            const t = o.value;
            if (y(e, t)) {
              if ((m(e, o), !e[s])) return;
            } else
              n && (e[f] && (o.value.now = Date.now()), e[d].unshiftNode(o));
            return t.value;
          }
        },
        y = (e, t) => {
          if (!t || (!t.maxAge && !e[l])) return !1;
          const n = Date.now() - t.now;
          return t.maxAge ? n > t.maxAge : e[l] && n > e[l];
        },
        g = e => {
          if (e[r] > e[i])
            for (let t = e[d].tail; e[r] > e[i] && null !== t; ) {
              const n = t.prev;
              m(e, t), (t = n);
            }
        },
        m = (e, t) => {
          if (t) {
            const n = t.value;
            e[c] && e[c](n.key, n.value),
              (e[r] -= n.length),
              e[p].delete(n.key),
              e[d].removeNode(t);
          }
        };
      class x {
        constructor(e, t, n, o, i) {
          (this.key = e),
            (this.value = t),
            (this.length = n),
            (this.now = o),
            (this.maxAge = i || 0);
        }
      }
      const b = (e, t, n, o) => {
        let i = n.value;
        y(e, i) && (m(e, n), e[s] || (i = void 0)),
          i && t.call(o, i.value, i.key, e);
      };
      e.exports = class {
        constructor(e) {
          if (
            ("number" === typeof e && (e = { max: e }),
            e || (e = {}),
            e.max && ("number" !== typeof e.max || e.max < 0))
          )
            throw new TypeError("max must be a non-negative number");
          this[i] = e.max || 1 / 0;
          const t = e.length || h;
          if (
            ((this[a] = "function" !== typeof t ? h : t),
            (this[s] = e.stale || !1),
            e.maxAge && "number" !== typeof e.maxAge)
          )
            throw new TypeError("maxAge must be a number");
          (this[l] = e.maxAge || 0),
            (this[c] = e.dispose),
            (this[u] = e.noDisposeOnSet || !1),
            (this[f] = e.updateAgeOnGet || !1),
            this.reset();
        }
        set max(e) {
          if ("number" !== typeof e || e < 0)
            throw new TypeError("max must be a non-negative number");
          (this[i] = e || 1 / 0), g(this);
        }
        get max() {
          return this[i];
        }
        set allowStale(e) {
          this[s] = !!e;
        }
        get allowStale() {
          return this[s];
        }
        set maxAge(e) {
          if ("number" !== typeof e)
            throw new TypeError("maxAge must be a non-negative number");
          (this[l] = e), g(this);
        }
        get maxAge() {
          return this[l];
        }
        set lengthCalculator(e) {
          "function" !== typeof e && (e = h),
            e !== this[a] &&
              ((this[a] = e),
              (this[r] = 0),
              this[d].forEach(e => {
                (e.length = this[a](e.value, e.key)), (this[r] += e.length);
              })),
            g(this);
        }
        get lengthCalculator() {
          return this[a];
        }
        get length() {
          return this[r];
        }
        get itemCount() {
          return this[d].length;
        }
        rforEach(e, t) {
          t = t || this;
          for (let n = this[d].tail; null !== n; ) {
            const o = n.prev;
            b(this, e, n, t), (n = o);
          }
        }
        forEach(e, t) {
          t = t || this;
          for (let n = this[d].head; null !== n; ) {
            const o = n.next;
            b(this, e, n, t), (n = o);
          }
        }
        keys() {
          return this[d].toArray().map(e => e.key);
        }
        values() {
          return this[d].toArray().map(e => e.value);
        }
        reset() {
          this[c] &&
            this[d] &&
            this[d].length &&
            this[d].forEach(e => this[c](e.key, e.value)),
            (this[p] = new Map()),
            (this[d] = new o()),
            (this[r] = 0);
        }
        dump() {
          return this[d]
            .map(
              e =>
                !y(this, e) && {
                  k: e.key,
                  v: e.value,
                  e: e.now + (e.maxAge || 0)
                }
            )
            .toArray()
            .filter(e => e);
        }
        dumpLru() {
          return this[d];
        }
        set(e, t, n) {
          if ((n = n || this[l]) && "number" !== typeof n)
            throw new TypeError("maxAge must be a number");
          const o = n ? Date.now() : 0,
            s = this[a](t, e);
          if (this[p].has(e)) {
            if (s > this[i]) return m(this, this[p].get(e)), !1;
            const a = this[p].get(e).value;
            return (
              this[c] && (this[u] || this[c](e, a.value)),
              (a.now = o),
              (a.maxAge = n),
              (a.value = t),
              (this[r] += s - a.length),
              (a.length = s),
              this.get(e),
              g(this),
              !0
            );
          }
          const f = new x(e, t, s, o, n);
          return f.length > this[i]
            ? (this[c] && this[c](e, t), !1)
            : ((this[r] += f.length),
              this[d].unshift(f),
              this[p].set(e, this[d].head),
              g(this),
              !0);
        }
        has(e) {
          if (!this[p].has(e)) return !1;
          const t = this[p].get(e).value;
          return !y(this, t);
        }
        get(e) {
          return v(this, e, !0);
        }
        peek(e) {
          return v(this, e, !1);
        }
        pop() {
          const e = this[d].tail;
          return e ? (m(this, e), e.value) : null;
        }
        del(e) {
          m(this, this[p].get(e));
        }
        load(e) {
          this.reset();
          const t = Date.now();
          for (let n = e.length - 1; n >= 0; n--) {
            const o = e[n],
              i = o.e || 0;
            if (0 === i) this.set(o.k, o.v);
            else {
              const e = i - t;
              e > 0 && this.set(o.k, o.v, e);
            }
          }
        }
        prune() {
          this[p].forEach((e, t) => v(this, t, !1));
        }
      };
    },
    MLrd: function(e, t, n) {
      "use strict";
      const o = n("rilC"),
        i = n("RY+T"),
        r = n("QoR2"),
        a = n("p1cm");
      let s;
      try {
        s = n(23);
      } catch (c) {}
      const l = {};
      (e.exports = l),
        (l.NQuads = n("ZeHd")),
        (l.IdentifierIssuer = n("isx2")),
        (l._rdfCanonizeNative = function(e) {
          return e && (s = e), s;
        }),
        (l.canonize = async function(e, t) {
          if (
            (Array.isArray(e) || (e = l.NQuads.legacyDatasetToQuads(e)),
            t.useNative)
          ) {
            if (!s) throw new Error("rdf-canonize-native not available");
            return new Promise((n, o) =>
              s.canonize(e, t, (e, t) => (e ? o(e) : n(t)))
            );
          }
          if ("URDNA2015" === t.algorithm) return new o(t).main(e);
          if ("URGNA2012" === t.algorithm) return new i(t).main(e);
          if (!("algorithm" in t))
            throw new Error(
              "No RDF Dataset Canonicalization algorithm specified."
            );
          throw new Error(
            "Invalid RDF Dataset Canonicalization algorithm: " + t.algorithm
          );
        }),
        (l._canonizeSync = function(e, t) {
          if (
            (Array.isArray(e) || (e = l.NQuads.legacyDatasetToQuads(e)),
            t.useNative)
          ) {
            if (s) return s.canonizeSync(e, t);
            throw new Error("rdf-canonize-native not available");
          }
          if ("URDNA2015" === t.algorithm) return new r(t).main(e);
          if ("URGNA2012" === t.algorithm) return new a(t).main(e);
          if (!("algorithm" in t))
            throw new Error(
              "No RDF Dataset Canonicalization algorithm specified."
            );
          throw new Error(
            "Invalid RDF Dataset Canonicalization algorithm: " + t.algorithm
          );
        });
    },
    QM42: function(e, t, n) {
      "use strict";
      e.exports = class {
        constructor() {
          this._requests = {};
        }
        wrapLoader(e) {
          const t = this;
          return (
            (t._loader = e),
            function() {
              return t.add.apply(t, arguments);
            }
          );
        }
        async add(e) {
          let t = this._requests[e];
          if (t) return Promise.resolve(t);
          t = this._requests[e] = this._loader(e);
          try {
            return await t;
          } finally {
            delete this._requests[e];
          }
        }
      };
    },
    QUJA: function(e, t, n) {
      "use strict";
      const { isSubjectReference: o } = n("yS/M"),
        { createMergedNodeMap: i } = n("eWym"),
        r = {};
      (e.exports = r),
        (r.flatten = e => {
          const t = i(e),
            n = [],
            r = Object.keys(t).sort();
          for (let i = 0; i < r.length; ++i) {
            const e = t[r[i]];
            o(e) || n.push(e);
          }
          return n;
        });
    },
    QoR2: function(e, t, n) {
      "use strict";
      const o = n("isx2"),
        i = n("WnYu"),
        r = n("x57E"),
        a = n("ZeHd");
      function s(e, t) {
        return e.hash < t.hash ? -1 : e.hash > t.hash ? 1 : 0;
      }
      e.exports = class {
        constructor() {
          (this.name = "URDNA2015"),
            (this.blankNodeInfo = new Map()),
            (this.canonicalIssuer = new o("_:c14n")),
            (this.hashAlgorithm = "sha256"),
            (this.quads = null);
        }
        main(e) {
          this.quads = e;
          for (const o of e)
            this._addBlankNodeQuadInfo({ quad: o, component: o.subject }),
              this._addBlankNodeQuadInfo({ quad: o, component: o.object }),
              this._addBlankNodeQuadInfo({ quad: o, component: o.graph });
          const t = new Map(),
            n = [...this.blankNodeInfo.keys()];
          for (const o of n)
            this._hashAndTrackBlankNode({ id: o, hashToBlankNodes: t });
          const i = [...t.keys()].sort(),
            r = [];
          for (const o of i) {
            const e = t.get(o);
            if (e.length > 1) {
              r.push(e);
              continue;
            }
            const n = e[0];
            this.canonicalIssuer.getId(n);
          }
          for (const a of r) {
            const e = [];
            for (const t of a) {
              if (this.canonicalIssuer.hasId(t)) continue;
              const n = new o("_:b");
              n.getId(t);
              const i = this.hashNDegreeQuads(t, n);
              e.push(i);
            }
            e.sort(s);
            for (const t of e) {
              const e = t.issuer.getOldIds();
              for (const t of e) this.canonicalIssuer.getId(t);
            }
          }
          const l = [];
          for (const o of this.quads) {
            const e = { ...o };
            (e.subject = this._useCanonicalId({ component: e.subject })),
              (e.object = this._useCanonicalId({ component: e.object })),
              (e.graph = this._useCanonicalId({ component: e.graph })),
              l.push(a.serializeQuad(e));
          }
          return l.sort(), l.join("");
        }
        hashFirstDegreeQuads(e) {
          const t = [],
            n = this.blankNodeInfo.get(e),
            o = n.quads;
          for (const i of o) {
            const n = {
              subject: null,
              predicate: i.predicate,
              object: null,
              graph: null
            };
            (n.subject = this.modifyFirstDegreeComponent(
              e,
              i.subject,
              "subject"
            )),
              (n.object = this.modifyFirstDegreeComponent(
                e,
                i.object,
                "object"
              )),
              (n.graph = this.modifyFirstDegreeComponent(e, i.graph, "graph")),
              t.push(a.serializeQuad(n));
          }
          t.sort();
          const r = new i(this.hashAlgorithm);
          for (const i of t) r.update(i);
          return (n.hash = r.digest()), n.hash;
        }
        hashRelatedBlankNode(e, t, n, o) {
          let r;
          r = this.canonicalIssuer.hasId(e)
            ? this.canonicalIssuer.getId(e)
            : n.hasId(e)
            ? n.getId(e)
            : this.blankNodeInfo.get(e).hash;
          const a = new i(this.hashAlgorithm);
          return (
            a.update(o),
            "g" !== o && a.update(this.getRelatedPredicate(t)),
            a.update(r),
            a.digest()
          );
        }
        hashNDegreeQuads(e, t) {
          const n = new i(this.hashAlgorithm),
            o = this.createHashToRelated(e, t),
            a = [...o.keys()].sort();
          for (const i of a) {
            n.update(i);
            let e,
              a = "";
            const s = new r(o.get(i));
            for (; s.hasNext(); ) {
              const n = s.next();
              let o = t.clone(),
                i = "";
              const r = [];
              let l = !1;
              for (const e of n)
                if (
                  (this.canonicalIssuer.hasId(e)
                    ? (i += this.canonicalIssuer.getId(e))
                    : (o.hasId(e) || r.push(e), (i += o.getId(e))),
                  0 !== a.length && i > a)
                ) {
                  l = !0;
                  break;
                }
              if (!l) {
                for (const e of r) {
                  const t = this.hashNDegreeQuads(e, o);
                  if (
                    ((i += o.getId(e)),
                    (i += `<${t.hash}>`),
                    (o = t.issuer),
                    0 !== a.length && i > a)
                  ) {
                    l = !0;
                    break;
                  }
                }
                l || ((0 === a.length || i < a) && ((a = i), (e = o)));
              }
            }
            n.update(a), (t = e);
          }
          return { hash: n.digest(), issuer: t };
        }
        modifyFirstDegreeComponent(e, t) {
          return "BlankNode" !== t.termType
            ? t
            : { termType: "BlankNode", value: t.value === e ? "_:a" : "_:z" };
        }
        getRelatedPredicate(e) {
          return `<${e.predicate.value}>`;
        }
        createHashToRelated(e, t) {
          const n = new Map(),
            o = this.blankNodeInfo.get(e).quads;
          for (const i of o)
            this._addRelatedBlankNodeHash({
              quad: i,
              component: i.subject,
              position: "s",
              id: e,
              issuer: t,
              hashToRelated: n
            }),
              this._addRelatedBlankNodeHash({
                quad: i,
                component: i.object,
                position: "o",
                id: e,
                issuer: t,
                hashToRelated: n
              }),
              this._addRelatedBlankNodeHash({
                quad: i,
                component: i.graph,
                position: "g",
                id: e,
                issuer: t,
                hashToRelated: n
              });
          return n;
        }
        _hashAndTrackBlankNode({ id: e, hashToBlankNodes: t }) {
          const n = this.hashFirstDegreeQuads(e),
            o = t.get(n);
          o ? o.push(e) : t.set(n, [e]);
        }
        _addBlankNodeQuadInfo({ quad: e, component: t }) {
          if ("BlankNode" !== t.termType) return;
          const n = t.value,
            o = this.blankNodeInfo.get(n);
          o
            ? o.quads.add(e)
            : this.blankNodeInfo.set(n, { quads: new Set([e]), hash: null });
        }
        _addRelatedBlankNodeHash({
          quad: e,
          component: t,
          position: n,
          id: o,
          issuer: i,
          hashToRelated: r
        }) {
          if ("BlankNode" !== t.termType || t.value === o) return;
          const a = t.value,
            s = this.hashRelatedBlankNode(a, e, i, n),
            l = r.get(s);
          l ? l.push(a) : r.set(s, [a]);
        }
        _useCanonicalId({ component: e }) {
          return "BlankNode" !== e.termType ||
            e.value.startsWith(this.canonicalIssuer.prefix)
            ? e
            : {
                termType: "BlankNode",
                value: this.canonicalIssuer.getId(e.value)
              };
        }
      };
    },
    "RY+T": function(e, t, n) {
      "use strict";
      const o = n("rilC");
      e.exports = class extends o {
        constructor() {
          super(), (this.name = "URGNA2012"), (this.hashAlgorithm = "sha1");
        }
        modifyFirstDegreeComponent(e, t, n) {
          return "BlankNode" !== t.termType
            ? t
            : "graph" === n
            ? { termType: "BlankNode", value: "_:g" }
            : { termType: "BlankNode", value: t.value === e ? "_:a" : "_:z" };
        }
        getRelatedPredicate(e) {
          return e.predicate.value;
        }
        async createHashToRelated(e, t) {
          const n = new Map(),
            o = this.blankNodeInfo.get(e).quads;
          let i = 0;
          for (const r of o) {
            let o, a;
            if ("BlankNode" === r.subject.termType && r.subject.value !== e)
              (a = r.subject.value), (o = "p");
            else {
              if ("BlankNode" !== r.object.termType || r.object.value === e)
                continue;
              (a = r.object.value), (o = "r");
            }
            ++i % 100 === 0 && (await this._yield());
            const s = await this.hashRelatedBlankNode(a, r, t, o),
              l = n.get(s);
            l ? l.push(a) : n.set(s, [a]);
          }
          return n;
        }
      };
    },
    Rr3F: function(e, t, n) {
      const o = n("S0UH"),
        i = n("7hfO"),
        r = n("ia45"),
        a = n("DYhM"),
        s = r.IdentifierIssuer,
        l = n("WVB1"),
        c = n("HyWp"),
        u = n("ZcLO"),
        { expand: d } = n("UMoo"),
        { flatten: p } = n("QUJA"),
        { fromRDF: f } = n("b1yc"),
        { toRDF: h } = n("dkat"),
        { frameMergedOrDefault: v, cleanupNull: y } = n("5u1s"),
        { isArray: g, isObject: m, isString: x } = n("aPrt"),
        { isSubjectReference: b } = n("yS/M"),
        {
          expandIri: w,
          getInitialContext: j,
          process: I,
          processingMode: N
        } = n("0ecE"),
        { compact: S, compactIri: O } = n("TWiP"),
        { createNodeMap: k, createMergedNodeMap: C, mergeNodeMaps: L } = n(
          "eWym"
        ),
        T = function(e) {
          const t = {},
            T = new c({ max: 100 });
          function A(t, { documentLoader: n = e.documentLoader, ...o }) {
            return Object.assign({}, { documentLoader: n }, o, t);
          }
          return (
            (e.compact = async function(t, n, o) {
              if (arguments.length < 2)
                throw new TypeError("Could not compact, too few arguments.");
              if (null === n)
                throw new l(
                  "The compaction context must not be null.",
                  "jsonld.CompactError",
                  { code: "invalid local context" }
                );
              if (null === t) return null;
              let i;
              (o = A(o, {
                base: x(t) ? t : "",
                compactArrays: !0,
                compactToRelative: !0,
                graph: !1,
                skipExpansion: !1,
                link: !1,
                issuer: new s("_:b"),
                contextResolver: new a({ sharedCache: T })
              })).link && (o.skipExpansion = !0),
                o.compactToRelative || delete o.base,
                (i = o.skipExpansion ? t : await e.expand(t, o));
              const c = await e.processContext(j(o), n, o);
              let u = await S({
                activeCtx: c,
                element: i,
                options: o,
                compactionMap: o.compactionMap
              });
              o.compactArrays && !o.graph && g(u)
                ? 1 === u.length
                  ? (u = u[0])
                  : 0 === u.length && (u = {})
                : o.graph && m(u) && (u = [u]),
                m(n) && "@context" in n && (n = n["@context"]),
                (n = r.clone(n)),
                g(n) || (n = [n]);
              const d = n;
              n = [];
              for (let e = 0; e < d.length; ++e)
                (!m(d[e]) || Object.keys(d[e]).length > 0) && n.push(d[e]);
              const p = n.length > 0;
              if ((1 === n.length && (n = n[0]), g(u))) {
                const e = O({
                    activeCtx: c,
                    iri: "@graph",
                    relativeTo: { vocab: !0 }
                  }),
                  t = u;
                (u = {}), p && (u["@context"] = n), (u[e] = t);
              } else if (m(u) && p) {
                const e = u;
                u = { "@context": n };
                for (const t in e) u[t] = e[t];
              }
              return u;
            }),
            (e.expand = async function(t, n) {
              if (arguments.length < 1)
                throw new TypeError("Could not expand, too few arguments.");
              !1 ===
                (n = A(n, {
                  keepFreeFloatingNodes: !1,
                  contextResolver: new a({ sharedCache: T })
                })).expansionMap && (n.expansionMap = void 0);
              const o = {},
                i = [];
              if ("expandContext" in n) {
                const e = r.clone(n.expandContext);
                m(e) && "@context" in e
                  ? (o.expandContext = e)
                  : (o.expandContext = { "@context": e }),
                  i.push(o.expandContext);
              }
              let s;
              if (x(t)) {
                const r = await e.get(t, n);
                (s = r.documentUrl),
                  (o.input = r.document),
                  r.contextUrl &&
                    ((o.remoteContext = { "@context": r.contextUrl }),
                    i.push(o.remoteContext));
              } else o.input = r.clone(t);
              "base" in n || (n.base = s || "");
              let l = j(n);
              for (const e of i)
                l = await I({ activeCtx: l, localCtx: e, options: n });
              let c = await d({
                activeCtx: l,
                element: o.input,
                options: n,
                expansionMap: n.expansionMap
              });
              return (
                m(c) && "@graph" in c && 1 === Object.keys(c).length
                  ? (c = c["@graph"])
                  : null === c && (c = []),
                g(c) || (c = [c]),
                c
              );
            }),
            (e.flatten = async function(t, n, o) {
              if (arguments.length < 1)
                return new TypeError("Could not flatten, too few arguments.");
              (n = "function" === typeof n ? null : n || null),
                (o = A(o, {
                  base: x(t) ? t : "",
                  contextResolver: new a({ sharedCache: T })
                }));
              const i = await e.expand(t, o),
                r = p(i);
              if (null === n) return r;
              (o.graph = !0), (o.skipExpansion = !0);
              const s = await e.compact(r, n, o);
              return s;
            }),
            (e.frame = async function(t, n, o) {
              if (arguments.length < 2)
                throw new TypeError("Could not frame, too few arguments.");
              if (
                ((o = A(o, {
                  base: x(t) ? t : "",
                  embed: "@once",
                  explicit: !1,
                  requireAll: !1,
                  omitDefault: !1,
                  bnodesToClear: [],
                  contextResolver: new a({ sharedCache: T })
                })),
                x(n))
              ) {
                const t = await e.get(n, o);
                if (((n = t.document), t.contextUrl)) {
                  let e = n["@context"];
                  e
                    ? g(e)
                      ? e.push(t.contextUrl)
                      : (e = [e, t.contextUrl])
                    : (e = t.contextUrl),
                    (n["@context"] = e);
                }
              }
              const i = (n && n["@context"]) || {},
                r = await e.processContext(j(o), i, o);
              o.hasOwnProperty("omitGraph") || (o.omitGraph = N(r, 1.1)),
                o.hasOwnProperty("pruneBlankNodeIdentifiers") ||
                  (o.pruneBlankNodeIdentifiers = N(r, 1.1));
              const s = await e.expand(t, o),
                l = { ...o };
              (l.isFrame = !0), (l.keepFreeFloatingNodes = !0);
              const c = await e.expand(n, l),
                u = Object.keys(n).map(e => w(r, e, { vocab: !0 }));
              (l.merged = !u.includes("@graph")), (l.is11 = N(r, 1.1));
              const d = v(s, c, l);
              (l.graph = !o.omitGraph),
                (l.skipExpansion = !0),
                (l.link = {}),
                (l.framing = !0);
              let p = await e.compact(d, i, l);
              return (l.link = {}), (p = y(p, l)), p;
            }),
            (e.link = async function(t, n, o) {
              const i = {};
              return (
                n && (i["@context"] = n),
                (i["@embed"] = "@link"),
                e.frame(t, i, o)
              );
            }),
            (e.normalize = e.canonize = async function(t, n) {
              if (arguments.length < 1)
                throw new TypeError("Could not canonize, too few arguments.");
              if (
                "inputFormat" in
                (n = A(n, {
                  base: x(t) ? t : "",
                  algorithm: "URDNA2015",
                  skipExpansion: !1,
                  contextResolver: new a({ sharedCache: T })
                }))
              ) {
                if (
                  "application/n-quads" !== n.inputFormat &&
                  "application/nquads" !== n.inputFormat
                )
                  throw new l(
                    "Unknown canonicalization input format.",
                    "jsonld.CanonizeError"
                  );
                const e = u.parse(t);
                return o.canonize(e, n);
              }
              const i = { ...n };
              delete i.format, (i.produceGeneralizedRdf = !1);
              const r = await e.toRDF(t, i);
              return o.canonize(r, n);
            }),
            (e.fromRDF = async function(e, n) {
              if (arguments.length < 1)
                throw new TypeError(
                  "Could not convert from RDF, too few arguments."
                );
              n = A(n, { format: x(e) ? "application/n-quads" : void 0 });
              const { format: o } = n;
              let { rdfParser: i } = n;
              if (o) {
                if (((i = i || t[o]), !i))
                  throw new l("Unknown input format.", "jsonld.UnknownFormat", {
                    format: o
                  });
              } else i = () => e;
              const r = await i(e);
              return f(r, n);
            }),
            (e.toRDF = async function(t, n) {
              if (arguments.length < 1)
                throw new TypeError(
                  "Could not convert to RDF, too few arguments."
                );
              let o;
              o = (n = A(n, {
                base: x(t) ? t : "",
                skipExpansion: !1,
                contextResolver: new a({ sharedCache: T })
              })).skipExpansion
                ? t
                : await e.expand(t, n);
              const i = h(o, n);
              if (n.format) {
                if (
                  "application/n-quads" === n.format ||
                  "application/nquads" === n.format
                )
                  return u.serialize(i);
                throw new l("Unknown output format.", "jsonld.UnknownFormat", {
                  format: n.format
                });
              }
              return i;
            }),
            (e.createNodeMap = async function(t, n) {
              if (arguments.length < 1)
                throw new TypeError(
                  "Could not create node map, too few arguments."
                );
              n = A(n, {
                base: x(t) ? t : "",
                contextResolver: new a({ sharedCache: T })
              });
              const o = await e.expand(t, n);
              return C(o, n);
            }),
            (e.merge = async function(t, n, o) {
              if (arguments.length < 1)
                throw new TypeError("Could not merge, too few arguments.");
              if (!g(t))
                throw new TypeError(
                  'Could not merge, "docs" must be an array.'
                );
              (n = "function" === typeof n ? null : n || null),
                (o = A(o, { contextResolver: new a({ sharedCache: T }) }));
              const i = await Promise.all(
                t.map(t => {
                  const n = { ...o };
                  return e.expand(t, n);
                })
              );
              let l = !0;
              "mergeNodes" in o && (l = o.mergeNodes);
              const c = o.issuer || new s("_:b"),
                u = { "@default": {} };
              for (let e = 0; e < i.length; ++e) {
                const t = r.relabelBlankNodes(i[e], {
                    issuer: new s("_:b" + e + "-")
                  }),
                  n = l || 0 === e ? u : { "@default": {} };
                if ((k(t, n, "@default", c), n !== u))
                  for (const e in n) {
                    const t = n[e];
                    if (!(e in u)) {
                      u[e] = t;
                      continue;
                    }
                    const o = u[e];
                    for (const e in t) e in o || (o[e] = t[e]);
                  }
              }
              const d = L(u),
                p = [],
                f = Object.keys(d).sort();
              for (let e = 0; e < f.length; ++e) {
                const t = d[f[e]];
                b(t) || p.push(t);
              }
              if (null === n) return p;
              (o.graph = !0), (o.skipExpansion = !0);
              const h = await e.compact(p, n, o);
              return h;
            }),
            Object.defineProperty(e, "documentLoader", {
              get: () => e._documentLoader,
              set: t => (e._documentLoader = t)
            }),
            (e.documentLoader = async e => {
              throw new l(
                "Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.",
                "jsonld.LoadDocumentError",
                { code: "loading document failed", url: e }
              );
            }),
            (e.get = async function(t, n) {
              let o;
              o =
                "function" === typeof n.documentLoader
                  ? n.documentLoader
                  : e.documentLoader;
              const i = await o(t);
              try {
                if (!i.document)
                  throw new l(
                    "No remote document found at the given URL.",
                    "jsonld.NullRemoteDocument"
                  );
                x(i.document) && (i.document = JSON.parse(i.document));
              } catch (r) {
                throw new l(
                  "Could not retrieve a JSON-LD document from the URL.",
                  "jsonld.LoadDocumentError",
                  { code: "loading document failed", cause: r, remoteDoc: i }
                );
              }
              return i;
            }),
            (e.processContext = async function(e, t, n) {
              return (
                (n = A(n, {
                  base: "",
                  contextResolver: new a({ sharedCache: T })
                })),
                null === t
                  ? j(n)
                  : ((t = r.clone(t)),
                    (m(t) && "@context" in t) || (t = { "@context": t }),
                    I({ activeCtx: e, localCtx: t, options: n }))
              );
            }),
            (e.getContextValue = n("0ecE").getContextValue),
            (e.documentLoaders = {}),
            (e.useDocumentLoader = function(t) {
              if (!(t in e.documentLoaders))
                throw new l(
                  'Unknown document loader type: "' + t + '"',
                  "jsonld.UnknownDocumentLoader",
                  { type: t }
                );
              e.documentLoader = e.documentLoaders[t].apply(
                e,
                Array.prototype.slice.call(arguments, 1)
              );
            }),
            (e.registerRDFParser = function(e, n) {
              t[e] = n;
            }),
            (e.unregisterRDFParser = function(e) {
              delete t[e];
            }),
            e.registerRDFParser("application/n-quads", u.parse),
            e.registerRDFParser("application/nquads", u.parse),
            (e.url = n("3deL")),
            (e.util = r),
            Object.assign(e, r),
            (e.promises = e),
            (e.RequestQueue = n("QM42")),
            (e.JsonLdProcessor = n("gyLF")(e)),
            i.setupGlobals(e),
            i.setupDocumentLoaders(e),
            e
          );
        },
        A = function() {
          return T(function() {
            return A();
          });
        };
      T(A), (e.exports = A);
    },
    S0UH: function(e, t, n) {
      e.exports = n("MLrd");
    },
    TWiP: function(e, t, n) {
      "use strict";
      const o = n("WVB1"),
        { isArray: i, isObject: r, isString: a, isUndefined: s } = n("aPrt"),
        {
          isList: l,
          isValue: c,
          isGraph: u,
          isSimpleGraph: d,
          isSubjectReference: p
        } = n("yS/M"),
        {
          expandIri: f,
          getContextValue: h,
          isKeyword: v,
          process: y,
          processingMode: g
        } = n("0ecE"),
        { removeBase: m, prependBase: x } = n("3deL"),
        { addValue: b, asArray: w, compareShortestLeast: j } = n("ia45"),
        I = {};
      function N(e, t, n) {
        if ("@nest" !== f(e, t, { vocab: !0 }, n))
          throw new o(
            "JSON-LD compact error; nested property must have an @nest value resolving to @nest.",
            "jsonld.SyntaxError",
            { code: "invalid @nest value" }
          );
      }
      (e.exports = I),
        (I.compact = async ({
          activeCtx: e,
          activeProperty: t = null,
          element: n,
          options: f = {},
          compactionMap: m = () => {}
        }) => {
          if (i(n)) {
            let o = [];
            for (let i = 0; i < n.length; ++i) {
              let r = await I.compact({
                activeCtx: e,
                activeProperty: t,
                element: n[i],
                options: f,
                compactionMap: m
              });
              (null === r &&
                ((r = await m({
                  unmappedValue: n[i],
                  activeCtx: e,
                  activeProperty: t,
                  parent: n,
                  index: i,
                  options: f
                })),
                void 0 === r)) ||
                o.push(r);
            }
            if (f.compactArrays && 1 === o.length) {
              0 === (h(e, t, "@container") || []).length && (o = o[0]);
            }
            return o;
          }
          const x = h(e, t, "@context");
          if (
            (s(x) ||
              (e = await y({
                activeCtx: e,
                localCtx: x,
                propagate: !0,
                overrideProtected: !0,
                options: f
              })),
            r(n))
          ) {
            if (f.link && "@id" in n && f.link.hasOwnProperty(n["@id"])) {
              const e = f.link[n["@id"]];
              for (let t = 0; t < e.length; ++t)
                if (e[t].expanded === n) return e[t].compacted;
            }
            if (c(n) || p(n)) {
              const o = I.compactValue({
                activeCtx: e,
                activeProperty: t,
                value: n,
                options: f
              });
              return (
                f.link &&
                  p(n) &&
                  (f.link.hasOwnProperty(n["@id"]) || (f.link[n["@id"]] = []),
                  f.link[n["@id"]].push({ expanded: n, compacted: o })),
                o
              );
            }
            if (l(n)) {
              if ((h(e, t, "@container") || []).includes("@list"))
                return I.compact({
                  activeCtx: e,
                  activeProperty: t,
                  element: n["@list"],
                  options: f,
                  compactionMap: m
                });
            }
            const x = "@reverse" === t,
              j = {},
              S = e;
            c(n) || p(n) || (e = e.revertToPreviousContext());
            const O = h(S, t, "@context");
            s(O) ||
              (e = await y({
                activeCtx: e,
                localCtx: O,
                propagate: !0,
                overrideProtected: !0,
                options: f
              })),
              f.link &&
                "@id" in n &&
                (f.link.hasOwnProperty(n["@id"]) || (f.link[n["@id"]] = []),
                f.link[n["@id"]].push({ expanded: n, compacted: j }));
            let k = n["@type"] || [];
            k.length > 1 && (k = Array.from(k).sort());
            const C = e;
            for (const t of k) {
              const n = I.compactIri({
                  activeCtx: C,
                  iri: t,
                  relativeTo: { vocab: !0 }
                }),
                o = h(S, n, "@context");
              s(o) ||
                (e = await y({
                  activeCtx: e,
                  localCtx: o,
                  options: f,
                  propagate: !1
                }));
            }
            const L = Object.keys(n).sort();
            for (const s of L) {
              const p = n[s];
              if ("@id" !== s)
                if ("@type" !== s)
                  if ("@reverse" !== s)
                    if ("@preserve" !== s)
                      if ("@index" !== s)
                        if (
                          "@graph" !== s &&
                          "@list" !== s &&
                          "@included" !== s &&
                          v(s)
                        ) {
                          const t = I.compactIri({
                            activeCtx: e,
                            iri: s,
                            relativeTo: { vocab: !0 }
                          });
                          b(j, t, p);
                        } else {
                          if (!i(p))
                            throw new o(
                              "JSON-LD expansion error; expanded value must be an array.",
                              "jsonld.SyntaxError"
                            );
                          if (0 === p.length) {
                            const t = I.compactIri({
                                activeCtx: e,
                                iri: s,
                                value: p,
                                relativeTo: { vocab: !0 },
                                reverse: x
                              }),
                              n = e.mappings.has(t)
                                ? e.mappings.get(t)["@nest"]
                                : null;
                            let o = j;
                            n &&
                              (N(e, n, f), r(j[n]) || (j[n] = {}), (o = j[n])),
                              b(o, t, p, { propertyIsArray: !0 });
                          }
                          for (const t of p) {
                            const n = I.compactIri({
                                activeCtx: e,
                                iri: s,
                                value: t,
                                relativeTo: { vocab: !0 },
                                reverse: x
                              }),
                              o = e.mappings.has(n)
                                ? e.mappings.get(n)["@nest"]
                                : null;
                            let p = j;
                            o &&
                              (N(e, o, f), r(j[o]) || (j[o] = {}), (p = j[o]));
                            const v = h(e, n, "@container") || [],
                              y = u(t),
                              g = l(t);
                            let S;
                            g ? (S = t["@list"]) : y && (S = t["@graph"]);
                            let O = await I.compact({
                              activeCtx: e,
                              activeProperty: n,
                              element: g || y ? S : t,
                              options: f,
                              compactionMap: m
                            });
                            if (g) {
                              if ((i(O) || (O = [O]), v.includes("@list"))) {
                                b(p, n, O, {
                                  valueIsArray: !0,
                                  allowDuplicate: !0
                                });
                                continue;
                              }
                              (O = {
                                [I.compactIri({
                                  activeCtx: e,
                                  iri: "@list",
                                  relativeTo: { vocab: !0 }
                                })]: O
                              }),
                                "@index" in t &&
                                  (O[
                                    I.compactIri({
                                      activeCtx: e,
                                      iri: "@index",
                                      relativeTo: { vocab: !0 }
                                    })
                                  ] = t["@index"]);
                            }
                            if (y)
                              if (
                                v.includes("@graph") &&
                                (v.includes("@id") ||
                                  (v.includes("@index") && d(t)))
                              ) {
                                let o;
                                p.hasOwnProperty(n)
                                  ? (o = p[n])
                                  : (p[n] = o = {});
                                const i =
                                  (v.includes("@id")
                                    ? t["@id"]
                                    : t["@index"]) ||
                                  I.compactIri({
                                    activeCtx: e,
                                    iri: "@none",
                                    relativeTo: { vocab: !0 }
                                  });
                                b(o, i, O, {
                                  propertyIsArray:
                                    !f.compactArrays || v.includes("@set")
                                });
                              } else
                                v.includes("@graph") && d(t)
                                  ? (i(O) &&
                                      O.length > 1 &&
                                      (O = { "@included": O }),
                                    b(p, n, O, {
                                      propertyIsArray:
                                        !f.compactArrays || v.includes("@set")
                                    }))
                                  : (i(O) &&
                                      1 === O.length &&
                                      f.compactArrays &&
                                      (O = O[0]),
                                    (O = {
                                      [I.compactIri({
                                        activeCtx: e,
                                        iri: "@graph",
                                        relativeTo: { vocab: !0 }
                                      })]: O
                                    }),
                                    "@id" in t &&
                                      (O[
                                        I.compactIri({
                                          activeCtx: e,
                                          iri: "@id",
                                          relativeTo: { vocab: !0 }
                                        })
                                      ] = t["@id"]),
                                    "@index" in t &&
                                      (O[
                                        I.compactIri({
                                          activeCtx: e,
                                          iri: "@index",
                                          relativeTo: { vocab: !0 }
                                        })
                                      ] = t["@index"]),
                                    b(p, n, O, {
                                      propertyIsArray:
                                        !f.compactArrays || v.includes("@set")
                                    }));
                            else if (
                              v.includes("@language") ||
                              v.includes("@index") ||
                              v.includes("@id") ||
                              v.includes("@type")
                            ) {
                              let o, i;
                              if (
                                (p.hasOwnProperty(n)
                                  ? (o = p[n])
                                  : (p[n] = o = {}),
                                v.includes("@language"))
                              )
                                c(O) && (O = O["@value"]), (i = t["@language"]);
                              else if (v.includes("@index")) {
                                const o = h(e, n, "@index") || "@index",
                                  r = I.compactIri({
                                    activeCtx: e,
                                    iri: o,
                                    relativeTo: { vocab: !0 }
                                  });
                                if ("@index" === o)
                                  (i = t["@index"]), delete O[r];
                                else {
                                  let e;
                                  if ((([i, ...e] = w(O[o] || [])), a(i)))
                                    switch (e.length) {
                                      case 0:
                                        delete O[o];
                                        break;
                                      case 1:
                                        O[o] = e[0];
                                        break;
                                      default:
                                        O[o] = e;
                                    }
                                  else i = null;
                                }
                              } else if (v.includes("@id")) {
                                const t = I.compactIri({
                                  activeCtx: e,
                                  iri: "@id",
                                  relativeTo: { vocab: !0 }
                                });
                                (i = O[t]), delete O[t];
                              } else if (v.includes("@type")) {
                                const o = I.compactIri({
                                  activeCtx: e,
                                  iri: "@type",
                                  relativeTo: { vocab: !0 }
                                });
                                let r;
                                switch (
                                  (([i, ...r] = w(O[o] || [])), r.length)
                                ) {
                                  case 0:
                                    delete O[o];
                                    break;
                                  case 1:
                                    O[o] = r[0];
                                    break;
                                  default:
                                    O[o] = r;
                                }
                                1 === Object.keys(O).length &&
                                  "@id" in t &&
                                  (O = await I.compact({
                                    activeCtx: e,
                                    activeProperty: n,
                                    element: { "@id": t["@id"] },
                                    options: f,
                                    compactionMap: m
                                  }));
                              }
                              i ||
                                (i = I.compactIri({
                                  activeCtx: e,
                                  iri: "@none",
                                  relativeTo: { vocab: !0 }
                                })),
                                b(o, i, O, {
                                  propertyIsArray: v.includes("@set")
                                });
                            } else {
                              const e =
                                !f.compactArrays ||
                                v.includes("@set") ||
                                v.includes("@list") ||
                                (i(O) && 0 === O.length) ||
                                "@list" === s ||
                                "@graph" === s;
                              b(p, n, O, { propertyIsArray: e });
                            }
                          }
                        }
                      else {
                        if ((h(e, t, "@container") || []).includes("@index"))
                          continue;
                        const n = I.compactIri({
                          activeCtx: e,
                          iri: s,
                          relativeTo: { vocab: !0 }
                        });
                        b(j, n, p);
                      }
                    else {
                      const n = await I.compact({
                        activeCtx: e,
                        activeProperty: t,
                        element: p,
                        options: f,
                        compactionMap: m
                      });
                      (i(n) && 0 === n.length) || b(j, s, n);
                    }
                  else {
                    const t = await I.compact({
                      activeCtx: e,
                      activeProperty: "@reverse",
                      element: p,
                      options: f,
                      compactionMap: m
                    });
                    for (const n in t)
                      if (e.mappings.has(n) && e.mappings.get(n).reverse) {
                        const o = t[n],
                          i =
                            (h(e, n, "@container") || []).includes("@set") ||
                            !f.compactArrays;
                        b(j, n, o, { propertyIsArray: i }), delete t[n];
                      }
                    if (Object.keys(t).length > 0) {
                      const n = I.compactIri({
                        activeCtx: e,
                        iri: s,
                        relativeTo: { vocab: !0 }
                      });
                      b(j, n, t);
                    }
                  }
                else {
                  let t = w(p).map(e =>
                    I.compactIri({
                      activeCtx: S,
                      iri: e,
                      relativeTo: { vocab: !0 }
                    })
                  );
                  1 === t.length && (t = t[0]);
                  const n = I.compactIri({
                      activeCtx: e,
                      iri: "@type",
                      relativeTo: { vocab: !0 }
                    }),
                    o =
                      ((h(e, n, "@container") || []).includes("@set") &&
                        g(e, 1.1)) ||
                      (i(t) && 0 === p.length);
                  b(j, n, t, { propertyIsArray: o });
                }
              else {
                let t = w(p).map(t =>
                  I.compactIri({
                    activeCtx: e,
                    iri: t,
                    relativeTo: { vocab: !1 },
                    base: f.base
                  })
                );
                1 === t.length && (t = t[0]);
                j[
                  I.compactIri({
                    activeCtx: e,
                    iri: "@id",
                    relativeTo: { vocab: !0 }
                  })
                ] = t;
              }
            }
            return j;
          }
          return n;
        }),
        (I.compactIri = ({
          activeCtx: e,
          iri: t,
          value: n = null,
          relativeTo: i = { vocab: !1 },
          reverse: a = !1,
          base: s = null
        }) => {
          if (null === t) return t;
          e.isPropertyTermScoped &&
            e.previousContext &&
            (e = e.previousContext);
          const d = e.getInverse();
          if (
            v(t) &&
            t in d &&
            "@none" in d[t] &&
            "@type" in d[t]["@none"] &&
            "@none" in d[t]["@none"]["@type"]
          )
            return d[t]["@none"]["@type"]["@none"];
          if (i.vocab && t in d) {
            const o = e["@language"] || "@none",
              i = [];
            r(n) &&
              "@index" in n &&
              !("@graph" in n) &&
              i.push("@index", "@index@set"),
              r(n) && "@preserve" in n && (n = n["@preserve"][0]),
              u(n)
                ? ("@index" in n &&
                    i.push(
                      "@graph@index",
                      "@graph@index@set",
                      "@index",
                      "@index@set"
                    ),
                  "@id" in n && i.push("@graph@id", "@graph@id@set"),
                  i.push("@graph", "@graph@set", "@set"),
                  "@index" in n ||
                    i.push(
                      "@graph@index",
                      "@graph@index@set",
                      "@index",
                      "@index@set"
                    ),
                  "@id" in n || i.push("@graph@id", "@graph@id@set"))
                : r(n) &&
                  !c(n) &&
                  i.push("@id", "@id@set", "@type", "@set@type");
            let s = "@language",
              d = "@null";
            if (a) (s = "@type"), (d = "@reverse"), i.push("@set");
            else if (l(n)) {
              "@index" in n || i.push("@list");
              const e = n["@list"];
              if (0 === e.length) (s = "@any"), (d = "@none");
              else {
                let t = 0 === e.length ? o : null,
                  n = null;
                for (let o = 0; o < e.length; ++o) {
                  const i = e[o];
                  let r = "@none",
                    a = "@none";
                  if (c(i))
                    if ("@direction" in i) {
                      r = `${(i["@language"] || "").toLowerCase()}_${
                        i["@direction"]
                      }`;
                    } else
                      "@language" in i
                        ? (r = i["@language"].toLowerCase())
                        : "@type" in i
                        ? (a = i["@type"])
                        : (r = "@null");
                  else a = "@id";
                  if (
                    (null === t ? (t = r) : r !== t && c(i) && (t = "@none"),
                    null === n ? (n = a) : a !== n && (n = "@none"),
                    "@none" === t && "@none" === n)
                  )
                    break;
                }
                (t = t || "@none"),
                  (n = n || "@none"),
                  "@none" !== n ? ((s = "@type"), (d = n)) : (d = t);
              }
            } else {
              if (c(n))
                if ("@language" in n && !("@index" in n)) {
                  i.push("@language", "@language@set"), (d = n["@language"]);
                  const e = n["@direction"];
                  e && (d = `${d}_${e}`);
                } else
                  "@direction" in n && !("@index" in n)
                    ? (d = `_${n["@direction"]}`)
                    : "@type" in n && ((s = "@type"), (d = n["@type"]));
              else (s = "@type"), (d = "@id");
              i.push("@set");
            }
            i.push("@none"),
              r(n) && !("@index" in n) && i.push("@index", "@index@set"),
              c(n) &&
                1 === Object.keys(n).length &&
                i.push("@language", "@language@set");
            const p = (function(e, t, n, o, i, a) {
              null === a && (a = "@null");
              const s = [];
              if (("@id" === a || "@reverse" === a) && r(n) && "@id" in n) {
                "@reverse" === a && s.push("@reverse");
                const t = I.compactIri({
                  activeCtx: e,
                  iri: n["@id"],
                  relativeTo: { vocab: !0 }
                });
                e.mappings.has(t) &&
                e.mappings.get(t) &&
                e.mappings.get(t)["@id"] === n["@id"]
                  ? s.push.apply(s, ["@vocab", "@id"])
                  : s.push.apply(s, ["@id", "@vocab"]);
              } else {
                s.push(a);
                const e = s.find(e => e.includes("_"));
                e && s.push(e.replace(/^[^_]+_/, "_"));
              }
              s.push("@none");
              const l = e.inverse[t];
              for (const r of o) {
                if (!(r in l)) continue;
                const e = l[r][i];
                for (const t of s) if (t in e) return e[t];
              }
              return null;
            })(e, t, n, i, s, d);
            if (null !== p) return p;
          }
          if (i.vocab && "@vocab" in e) {
            const n = e["@vocab"];
            if (0 === t.indexOf(n) && t !== n) {
              const o = t.substr(n.length);
              if (!e.mappings.has(o)) return o;
            }
          }
          let p = null;
          const f = [];
          let h = e.fastCurieMap;
          const y = t.length - 1;
          for (let o = 0; o < y && t[o] in h; ++o)
            (h = h[t[o]]), "" in h && f.push(h[""][0]);
          for (let o = f.length - 1; o >= 0; --o) {
            const i = f[o],
              r = i.terms;
            for (const o of r) {
              const r = o + ":" + t.substr(i.iri.length);
              e.mappings.get(o)._prefix &&
                (!e.mappings.has(r) ||
                  (null === n && e.mappings.get(r)["@id"] === t)) &&
                (null === p || j(r, p) < 0) &&
                (p = r);
            }
          }
          if (null !== p) return p;
          for (const [r, l] of e.mappings)
            if (l && l._prefix && t.startsWith(r + ":"))
              throw new o(
                `Absolute IRI "${t}" confused with prefix "${r}".`,
                "jsonld.SyntaxError",
                { code: "IRI confused with prefix", context: e }
              );
          return i.vocab
            ? t
            : "@base" in e
            ? e["@base"]
              ? m(x(s, e["@base"]), t)
              : t
            : m(s, t);
        }),
        (I.compactValue = ({
          activeCtx: e,
          activeProperty: t,
          value: n,
          options: o
        }) => {
          if (c(n)) {
            const o = h(e, t, "@type"),
              i = h(e, t, "@language"),
              r = h(e, t, "@direction"),
              s = h(e, t, "@container") || [],
              l = "@index" in n && !s.includes("@index");
            if (!l && "@none" !== o) {
              if (n["@type"] === o) return n["@value"];
              if (
                "@language" in n &&
                n["@language"] === i &&
                "@direction" in n &&
                n["@direction"] === r
              )
                return n["@value"];
              if ("@language" in n && n["@language"] === i) return n["@value"];
              if ("@direction" in n && n["@direction"] === r)
                return n["@value"];
            }
            const c = Object.keys(n).length,
              u = 1 === c || (2 === c && "@index" in n && !l),
              d = "@language" in e,
              p = a(n["@value"]),
              f = e.mappings.has(t) && null === e.mappings.get(t)["@language"];
            if (u && "@none" !== o && (!d || !p || f)) return n["@value"];
            const v = {};
            return (
              l &&
                (v[
                  I.compactIri({
                    activeCtx: e,
                    iri: "@index",
                    relativeTo: { vocab: !0 }
                  })
                ] = n["@index"]),
              "@type" in n
                ? (v[
                    I.compactIri({
                      activeCtx: e,
                      iri: "@type",
                      relativeTo: { vocab: !0 }
                    })
                  ] = I.compactIri({
                    activeCtx: e,
                    iri: n["@type"],
                    relativeTo: { vocab: !0 }
                  }))
                : "@language" in n &&
                  (v[
                    I.compactIri({
                      activeCtx: e,
                      iri: "@language",
                      relativeTo: { vocab: !0 }
                    })
                  ] = n["@language"]),
              "@direction" in n &&
                (v[
                  I.compactIri({
                    activeCtx: e,
                    iri: "@direction",
                    relativeTo: { vocab: !0 }
                  })
                ] = n["@direction"]),
              (v[
                I.compactIri({
                  activeCtx: e,
                  iri: "@value",
                  relativeTo: { vocab: !0 }
                })
              ] = n["@value"]),
              v
            );
          }
          const i = f(e, t, { vocab: !0 }, o),
            r = h(e, t, "@type"),
            s = I.compactIri({
              activeCtx: e,
              iri: n["@id"],
              relativeTo: { vocab: "@vocab" === r },
              base: o.base
            });
          return "@id" === r || "@vocab" === r || "@graph" === i
            ? s
            : {
                [I.compactIri({
                  activeCtx: e,
                  iri: "@id",
                  relativeTo: { vocab: !0 }
                })]: s
              };
        });
    },
    UMoo: function(e, t, n) {
      "use strict";
      const o = n("WVB1"),
        {
          isArray: i,
          isObject: r,
          isEmptyObject: a,
          isString: s,
          isUndefined: l
        } = n("aPrt"),
        { isList: c, isValue: u, isGraph: d, isSubject: p } = n("yS/M"),
        {
          expandIri: f,
          getContextValue: h,
          isKeyword: v,
          process: y,
          processingMode: g
        } = n("0ecE"),
        { isAbsolute: m } = n("3deL"),
        { addValue: x, asArray: b, getValues: w, validateTypeValue: j } = n(
          "ia45"
        ),
        I = {};
      e.exports = I;
      const N = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/;
      async function S({
        activeCtx: e,
        activeProperty: t,
        expandedActiveProperty: n,
        element: d,
        expandedParent: w,
        options: O = {},
        insideList: L,
        typeKey: T,
        typeScopedContext: A,
        expansionMap: D
      }) {
        const E = Object.keys(d).sort(),
          R = [];
        let _;
        const M =
          d[T] && "@json" === f(e, i(d[T]) ? d[T][0] : d[T], { vocab: !0 }, O);
        for (const S of E) {
          let T,
            E = d[S];
          if ("@context" === S) continue;
          let P = f(e, S, { vocab: !0 }, O);
          if (
            (null === P || (!m(P) && !v(P))) &&
            ((P = D({
              unmappedProperty: S,
              activeCtx: e,
              activeProperty: t,
              parent: d,
              options: O,
              insideList: L,
              value: E,
              expandedParent: w
            })),
            void 0 === P)
          )
            continue;
          if (v(P)) {
            if ("@reverse" === n)
              throw new o(
                "Invalid JSON-LD syntax; a keyword cannot be used as a @reverse property.",
                "jsonld.SyntaxError",
                { code: "invalid reverse property map", value: E }
              );
            if (P in w && "@included" !== P && "@type" !== P)
              throw new o(
                "Invalid JSON-LD syntax; colliding keywords detected.",
                "jsonld.SyntaxError",
                { code: "colliding keywords", keyword: P }
              );
          }
          if ("@id" === P) {
            if (!s(E)) {
              if (!O.isFrame)
                throw new o(
                  'Invalid JSON-LD syntax; "@id" value must a string.',
                  "jsonld.SyntaxError",
                  { code: "invalid @id value", value: E }
                );
              if (r(E)) {
                if (!a(E))
                  throw new o(
                    'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
                    "jsonld.SyntaxError",
                    { code: "invalid @id value", value: E }
                  );
              } else {
                if (!i(E))
                  throw new o(
                    'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
                    "jsonld.SyntaxError",
                    { code: "invalid @id value", value: E }
                  );
                if (!E.every(e => s(e)))
                  throw new o(
                    'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
                    "jsonld.SyntaxError",
                    { code: "invalid @id value", value: E }
                  );
              }
            }
            x(
              w,
              "@id",
              b(E).map(t => (s(t) ? f(e, t, { base: !0 }, O) : t)),
              { propertyIsArray: O.isFrame }
            );
            continue;
          }
          if ("@type" === P) {
            r(E) &&
              (E = Object.fromEntries(
                Object.entries(E).map(([e, t]) => [
                  f(A, e, { vocab: !0 }),
                  b(t).map(e => f(A, e, { base: !0, vocab: !0 }))
                ])
              )),
              j(E, O.isFrame),
              x(
                w,
                "@type",
                b(E).map(e => (s(e) ? f(A, e, { base: !0, vocab: !0 }, O) : e)),
                { propertyIsArray: O.isFrame }
              );
            continue;
          }
          if ("@included" === P && g(e, 1.1)) {
            const n = b(
              await I.expand({
                activeCtx: e,
                activeProperty: t,
                element: E,
                options: O,
                expansionMap: D
              })
            );
            if (!n.every(e => p(e)))
              throw new o(
                "Invalid JSON-LD syntax; values of @included must expand to node objects.",
                "jsonld.SyntaxError",
                { code: "invalid @included value", value: E }
              );
            x(w, "@included", n, { propertyIsArray: !0 });
            continue;
          }
          if ("@graph" === P && !r(E) && !i(E))
            throw new o(
              'Invalid JSON-LD syntax; "@graph" value must not be an object or an array.',
              "jsonld.SyntaxError",
              { code: "invalid @graph value", value: E }
            );
          if ("@value" === P) {
            (_ = E),
              M && g(e, 1.1)
                ? (w["@value"] = E)
                : x(w, "@value", E, { propertyIsArray: O.isFrame });
            continue;
          }
          if ("@language" === P) {
            if (null === E) continue;
            if (!s(E) && !O.isFrame)
              throw new o(
                'Invalid JSON-LD syntax; "@language" value must be a string.',
                "jsonld.SyntaxError",
                { code: "invalid language-tagged string", value: E }
              );
            E = b(E).map(e => (s(e) ? e.toLowerCase() : e));
            for (const e of E)
              s(e) &&
                !e.match(N) &&
                console.warn(`@language must be valid BCP47: ${e}`);
            x(w, "@language", E, { propertyIsArray: O.isFrame });
            continue;
          }
          if ("@direction" === P) {
            if (!s(E) && !O.isFrame)
              throw new o(
                'Invalid JSON-LD syntax; "@direction" value must be a string.',
                "jsonld.SyntaxError",
                { code: "invalid base direction", value: E }
              );
            E = b(E);
            for (const e of E)
              if (s(e) && "ltr" !== e && "rtl" !== e)
                throw new o(
                  'Invalid JSON-LD syntax; "@direction" must be "ltr" or "rtl".',
                  "jsonld.SyntaxError",
                  { code: "invalid base direction", value: E }
                );
            x(w, "@direction", E, { propertyIsArray: O.isFrame });
            continue;
          }
          if ("@index" === P) {
            if (!s(E))
              throw new o(
                'Invalid JSON-LD syntax; "@index" value must be a string.',
                "jsonld.SyntaxError",
                { code: "invalid @index value", value: E }
              );
            x(w, "@index", E);
            continue;
          }
          if ("@reverse" === P) {
            if (!r(E))
              throw new o(
                'Invalid JSON-LD syntax; "@reverse" value must be an object.',
                "jsonld.SyntaxError",
                { code: "invalid @reverse value", value: E }
              );
            if (
              ((T = await I.expand({
                activeCtx: e,
                activeProperty: "@reverse",
                element: E,
                options: O,
                expansionMap: D
              })),
              "@reverse" in T)
            )
              for (const e in T["@reverse"])
                x(w, e, T["@reverse"][e], { propertyIsArray: !0 });
            let t = w["@reverse"] || null;
            for (const e in T) {
              if ("@reverse" === e) continue;
              null === t && (t = w["@reverse"] = {}),
                x(t, e, [], { propertyIsArray: !0 });
              const n = T[e];
              for (let i = 0; i < n.length; ++i) {
                const r = n[i];
                if (u(r) || c(r))
                  throw new o(
                    'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                    "jsonld.SyntaxError",
                    { code: "invalid reverse property value", value: T }
                  );
                x(t, e, r, { propertyIsArray: !0 });
              }
            }
            continue;
          }
          if ("@nest" === P) {
            R.push(S);
            continue;
          }
          let J = e;
          const B = h(e, S, "@context");
          l(B) ||
            (J = await y({
              activeCtx: e,
              localCtx: B,
              propagate: !0,
              overrideProtected: !0,
              options: O
            }));
          const F = h(J, S, "@container") || [];
          if (F.includes("@language") && r(E)) {
            T = k(J, E, h(J, S, "@direction"), O);
          } else if (F.includes("@index") && r(E)) {
            const t = F.includes("@graph"),
              n = h(J, S, "@index") || "@index",
              o = "@index" !== n && f(e, n, { vocab: !0 }, O);
            T = await C({
              activeCtx: J,
              options: O,
              activeProperty: S,
              value: E,
              expansionMap: D,
              asGraph: t,
              indexKey: n,
              propertyIndex: o
            });
          } else if (F.includes("@id") && r(E)) {
            const e = F.includes("@graph");
            T = await C({
              activeCtx: J,
              options: O,
              activeProperty: S,
              value: E,
              expansionMap: D,
              asGraph: e,
              indexKey: "@id"
            });
          } else if (F.includes("@type") && r(E))
            T = await C({
              activeCtx: J.revertToPreviousContext(),
              options: O,
              activeProperty: S,
              value: E,
              expansionMap: D,
              asGraph: !1,
              indexKey: "@type"
            });
          else {
            const o = "@list" === P;
            if (o || "@set" === P) {
              let e = t;
              o && "@graph" === n && (e = null),
                (T = await I.expand({
                  activeCtx: J,
                  activeProperty: e,
                  element: E,
                  options: O,
                  insideList: o,
                  expansionMap: D
                }));
            } else
              T =
                "@json" === h(e, S, "@type")
                  ? { "@type": "@json", "@value": E }
                  : await I.expand({
                      activeCtx: J,
                      activeProperty: S,
                      element: E,
                      options: O,
                      insideList: !1,
                      expansionMap: D
                    });
          }
          if (
            null !== T ||
            "@value" === P ||
            ((T = D({
              unmappedValue: E,
              expandedProperty: P,
              activeCtx: J,
              activeProperty: t,
              parent: d,
              options: O,
              insideList: L,
              key: S,
              expandedParent: w
            })),
            void 0 !== T)
          )
            if (
              ("@list" !== P &&
                !c(T) &&
                F.includes("@list") &&
                (T = { "@list": b(T) }),
              F.includes("@graph") &&
                !F.some(e => "@id" === e || "@index" === e) &&
                (T = b(T).map(e => ({ "@graph": b(e) }))),
              J.mappings.has(S) && J.mappings.get(S).reverse)
            ) {
              const e = (w["@reverse"] = w["@reverse"] || {});
              T = b(T);
              for (let t = 0; t < T.length; ++t) {
                const n = T[t];
                if (u(n) || c(n))
                  throw new o(
                    'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                    "jsonld.SyntaxError",
                    { code: "invalid reverse property value", value: T }
                  );
                x(e, P, n, { propertyIsArray: !0 });
              }
            } else x(w, P, T, { propertyIsArray: !0 });
        }
        if ("@value" in w)
          if ("@json" === w["@type"] && g(e, 1.1));
          else if ((r(_) || i(_)) && !O.isFrame)
            throw new o(
              'Invalid JSON-LD syntax; "@value" value must not be an object or an array.',
              "jsonld.SyntaxError",
              { code: "invalid value object value", value: _ }
            );
        for (const a of R) {
          const s = i(d[a]) ? d[a] : [d[a]];
          for (const i of s) {
            if (
              !r(i) ||
              Object.keys(i).some(t => "@value" === f(e, t, { vocab: !0 }, O))
            )
              throw new o(
                "Invalid JSON-LD syntax; nested value must be a node object.",
                "jsonld.SyntaxError",
                { code: "invalid @nest value", value: i }
              );
            await S({
              activeCtx: e,
              activeProperty: t,
              expandedActiveProperty: n,
              element: i,
              expandedParent: w,
              options: O,
              insideList: L,
              typeScopedContext: A,
              typeKey: T,
              expansionMap: D
            });
          }
        }
      }
      function O({ activeCtx: e, activeProperty: t, value: n, options: o }) {
        if (null === n || void 0 === n) return null;
        const i = f(e, t, { vocab: !0 }, o);
        if ("@id" === i) return f(e, n, { base: !0 }, o);
        if ("@type" === i) return f(e, n, { vocab: !0, base: !0 }, o);
        const r = h(e, t, "@type");
        if (("@id" === r || "@graph" === i) && s(n))
          return { "@id": f(e, n, { base: !0 }, o) };
        if ("@vocab" === r && s(n))
          return { "@id": f(e, n, { vocab: !0, base: !0 }, o) };
        if (v(i)) return n;
        const a = {};
        if (r && !["@id", "@vocab", "@none"].includes(r)) a["@type"] = r;
        else if (s(n)) {
          const n = h(e, t, "@language");
          null !== n && (a["@language"] = n);
          const o = h(e, t, "@direction");
          null !== o && (a["@direction"] = o);
        }
        return (
          ["boolean", "number", "string"].includes(typeof n) ||
            (n = n.toString()),
          (a["@value"] = n),
          a
        );
      }
      function k(e, t, n, r) {
        const a = [],
          l = Object.keys(t).sort();
        for (const c of l) {
          const l = f(e, c, { vocab: !0 }, r);
          let u = t[c];
          i(u) || (u = [u]);
          for (const e of u) {
            if (null === e) continue;
            if (!s(e))
              throw new o(
                "Invalid JSON-LD syntax; language map values must be strings.",
                "jsonld.SyntaxError",
                { code: "invalid language map value", languageMap: t }
              );
            const i = { "@value": e };
            "@none" !== l && (i["@language"] = c.toLowerCase()),
              n && (i["@direction"] = n),
              a.push(i);
          }
        }
        return a;
      }
      async function C({
        activeCtx: e,
        options: t,
        activeProperty: n,
        value: r,
        expansionMap: a,
        asGraph: s,
        indexKey: c,
        propertyIndex: p
      }) {
        const v = [],
          g = Object.keys(r).sort(),
          m = "@type" === c;
        for (let b of g) {
          if (m) {
            const n = h(e, b, "@context");
            l(n) ||
              (e = await y({
                activeCtx: e,
                localCtx: n,
                propagate: !1,
                options: t
              }));
          }
          let g,
            w = r[b];
          i(w) || (w = [w]),
            (w = await I.expand({
              activeCtx: e,
              activeProperty: n,
              element: w,
              options: t,
              insideList: !1,
              insideIndex: !0,
              expansionMap: a
            })),
            (g = p
              ? "@none" === b
                ? "@none"
                : O({ activeCtx: e, activeProperty: c, value: b, options: t })
              : f(e, b, { vocab: !0 }, t)),
            "@id" === c ? (b = f(e, b, { base: !0 }, t)) : m && (b = g);
          for (let e of w) {
            if ((s && !d(e) && (e = { "@graph": [e] }), "@type" === c))
              "@none" === g ||
                (e["@type"]
                  ? (e["@type"] = [b].concat(e["@type"]))
                  : (e["@type"] = [b]));
            else {
              if (u(e) && !["@language", "@type", "@index"].includes(c))
                throw new o(
                  `Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${c}".`,
                  "jsonld.SyntaxError",
                  { code: "invalid value object", value: e }
                );
              p
                ? "@none" !== g &&
                  x(e, p, g, { propertyIsArray: !0, prependValue: !0 })
                : "@none" === g || c in e || (e[c] = b);
            }
            v.push(e);
          }
        }
        return v;
      }
      I.expand = async ({
        activeCtx: e,
        activeProperty: t = null,
        element: n,
        options: c = {},
        insideList: u = !1,
        insideIndex: d = !1,
        typeScopedContext: p = null,
        expansionMap: v = () => {}
      }) => {
        if (null === n || void 0 === n) return null;
        if (
          ("@default" === t && (c = Object.assign({}, c, { isFrame: !1 })),
          !i(n) && !r(n))
        ) {
          if (!u && (null === t || "@graph" === f(e, t, { vocab: !0 }, c))) {
            const o = await v({
              unmappedValue: n,
              activeCtx: e,
              activeProperty: t,
              options: c,
              insideList: u
            });
            return void 0 === o ? null : o;
          }
          return O({ activeCtx: e, activeProperty: t, value: n, options: c });
        }
        if (i(n)) {
          let o = [];
          const r = h(e, t, "@container") || [];
          u = u || r.includes("@list");
          for (let a = 0; a < n.length; ++a) {
            let r = await I.expand({
              activeCtx: e,
              activeProperty: t,
              element: n[a],
              options: c,
              expansionMap: v,
              insideIndex: d,
              typeScopedContext: p
            });
            u && i(r) && (r = { "@list": r }),
              (null === r &&
                ((r = await v({
                  unmappedValue: n[a],
                  activeCtx: e,
                  activeProperty: t,
                  parent: n,
                  index: a,
                  options: c,
                  expandedParent: o,
                  insideList: u
                })),
                void 0 === r)) ||
                (i(r) ? (o = o.concat(r)) : o.push(r));
          }
          return o;
        }
        const x = f(e, t, { vocab: !0 }, c),
          j = h(e, t, "@context");
        p = p || (e.previousContext ? e : null);
        let N = Object.keys(n).sort(),
          k = !d;
        if (k && p && N.length <= 2 && !N.includes("@context"))
          for (const o of N) {
            const t = f(p, o, { vocab: !0 }, c);
            if ("@value" === t) {
              (k = !1), (e = p);
              break;
            }
            if ("@id" === t && 1 === N.length) {
              k = !1;
              break;
            }
          }
        k && (e = e.revertToPreviousContext()),
          l(j) ||
            (e = await y({
              activeCtx: e,
              localCtx: j,
              propagate: !0,
              overrideProtected: !0,
              options: c
            })),
          "@context" in n &&
            (e = await y({
              activeCtx: e,
              localCtx: n["@context"],
              options: c
            })),
          (p = e);
        let C = null;
        for (const o of N) {
          if ("@type" === f(e, o, { vocab: !0 }, c)) {
            C = C || o;
            const t = n[o],
              i = Array.isArray(t)
                ? t.length > 1
                  ? t.slice().sort()
                  : t
                : [t];
            for (const n of i) {
              const t = h(p, n, "@context");
              l(t) ||
                (e = await y({
                  activeCtx: e,
                  localCtx: t,
                  options: c,
                  propagate: !1
                }));
            }
          }
        }
        let L = {};
        await S({
          activeCtx: e,
          activeProperty: t,
          expandedActiveProperty: x,
          element: n,
          expandedParent: L,
          options: c,
          insideList: u,
          typeKey: C,
          typeScopedContext: p,
          expansionMap: v
        }),
          (N = Object.keys(L));
        let T = N.length;
        if ("@value" in L) {
          if ("@type" in L && ("@language" in L || "@direction" in L))
            throw new o(
              'Invalid JSON-LD syntax; an element containing "@value" may not contain both "@type" and either "@language" or "@direction".',
              "jsonld.SyntaxError",
              { code: "invalid value object", element: L }
            );
          let i = T - 1;
          if (
            ("@type" in L && (i -= 1),
            "@index" in L && (i -= 1),
            "@language" in L && (i -= 1),
            "@direction" in L && (i -= 1),
            0 !== i)
          )
            throw new o(
              'Invalid JSON-LD syntax; an element containing "@value" may only have an "@index" property and either "@type" or either or both "@language" or "@direction".',
              "jsonld.SyntaxError",
              { code: "invalid value object", element: L }
            );
          const r = null === L["@value"] ? [] : b(L["@value"]),
            l = w(L, "@type");
          if (g(e, 1.1) && l.includes("@json") && 1 === l.length);
          else if (0 === r.length) {
            const o = await v({
              unmappedValue: L,
              activeCtx: e,
              activeProperty: t,
              element: n,
              options: c,
              insideList: u
            });
            L = void 0 !== o ? o : null;
          } else {
            if (!r.every(e => s(e) || a(e)) && "@language" in L)
              throw new o(
                "Invalid JSON-LD syntax; only strings may be language-tagged.",
                "jsonld.SyntaxError",
                { code: "invalid language-tagged value", element: L }
              );
            if (
              !l.every(e => (m(e) && !(s(e) && 0 === e.indexOf("_:"))) || a(e))
            )
              throw new o(
                'Invalid JSON-LD syntax; an element containing "@value" and "@type" must have an absolute IRI for the value of "@type".',
                "jsonld.SyntaxError",
                { code: "invalid typed value", element: L }
              );
          }
        } else if ("@type" in L && !i(L["@type"])) L["@type"] = [L["@type"]];
        else if ("@set" in L || "@list" in L) {
          if (T > 1 && (2 !== T || !("@index" in L)))
            throw new o(
              'Invalid JSON-LD syntax; if an element has the property "@set" or "@list", then it can have at most one other property that is "@index".',
              "jsonld.SyntaxError",
              { code: "invalid set or list object", element: L }
            );
          "@set" in L &&
            ((L = L["@set"]), (N = Object.keys(L)), (T = N.length));
        } else if (1 === T && "@language" in L) {
          const o = await v(L, {
            unmappedValue: L,
            activeCtx: e,
            activeProperty: t,
            element: n,
            options: c,
            insideList: u
          });
          L = void 0 !== o ? o : null;
        }
        if (
          r(L) &&
          !c.keepFreeFloatingNodes &&
          !u &&
          (null === t || "@graph" === x) &&
          (0 === T || "@value" in L || "@list" in L || (1 === T && "@id" in L))
        ) {
          const o = await v({
            unmappedValue: L,
            activeCtx: e,
            activeProperty: t,
            element: n,
            options: c,
            insideList: u
          });
          L = void 0 !== o ? o : null;
        }
        return L;
      };
    },
    "Vyf+": function(e, t, n) {
      "use strict";
      e.exports = function(e) {
        return (function e(t) {
          if (null === t || "object" !== typeof t || null != t.toJSON)
            return JSON.stringify(t);
          if (Array.isArray(t) && 0 === t.length) return "[]";
          if (Array.isArray(t) && 1 === t.length) return "[" + e(t[0]) + "]";
          if (Array.isArray(t))
            return (
              "[" +
              t.reduce((t, n, o) => (t = 1 === o ? e(t) : t) + "," + e(n)) +
              "]"
            );
          const n = Object.keys(t);
          if (0 === n.length) return "{}";
          if (1 === n.length) return "{" + e(n[0]) + ":" + e(t[n[0]]) + "}";
          return (
            "{" +
            n
              .sort()
              .reduce(
                (n, o, i) =>
                  (n = 1 === i ? e(n) + ":" + e(t[n]) : n) +
                  "," +
                  e(o) +
                  ":" +
                  e(t[o])
              ) +
            "}"
          );
        })(e);
      };
    },
    WVB1: function(e, t, n) {
      "use strict";
      e.exports = class extends Error {
        constructor(
          e = "An unspecified JSON-LD error occurred.",
          t = "jsonld.Error",
          n = {}
        ) {
          super(e), (this.name = t), (this.message = e), (this.details = n);
        }
      };
    },
    WnYu: function(e, t, n) {
      "use strict";
      n("YBdB");
      const o = self.crypto || self.msCrypto;
      e.exports = class {
        constructor(e) {
          if (!o || !o.subtle) throw new Error("crypto.subtle not found.");
          if ("sha256" === e) this.algorithm = { name: "SHA-256" };
          else {
            if ("sha1" !== e) throw new Error(`Unsupport algorithm "${e}".`);
            this.algorithm = { name: "SHA-1" };
          }
          this._content = "";
        }
        update(e) {
          this._content += e;
        }
        async digest() {
          const e = new TextEncoder().encode(this._content),
            t = new Uint8Array(await o.subtle.digest(this.algorithm, e));
          let n = "";
          for (let o = 0; o < t.length; ++o)
            n += t[o].toString(16).padStart(2, "0");
          return n;
        }
      };
    },
    XPeR: function(e, t, n) {
      "use strict";
      function o(e) {
        var t = this;
        if (
          (t instanceof o || (t = new o()),
          (t.tail = null),
          (t.head = null),
          (t.length = 0),
          e && "function" === typeof e.forEach)
        )
          e.forEach(function(e) {
            t.push(e);
          });
        else if (arguments.length > 0)
          for (var n = 0, i = arguments.length; n < i; n++)
            t.push(arguments[n]);
        return t;
      }
      function i(e, t, n) {
        var o = t === e.head ? new s(n, null, t, e) : new s(n, t, t.next, e);
        return (
          null === o.next && (e.tail = o),
          null === o.prev && (e.head = o),
          e.length++,
          o
        );
      }
      function r(e, t) {
        (e.tail = new s(t, e.tail, null, e)),
          e.head || (e.head = e.tail),
          e.length++;
      }
      function a(e, t) {
        (e.head = new s(t, null, e.head, e)),
          e.tail || (e.tail = e.head),
          e.length++;
      }
      function s(e, t, n, o) {
        if (!(this instanceof s)) return new s(e, t, n, o);
        (this.list = o),
          (this.value = e),
          t ? ((t.next = this), (this.prev = t)) : (this.prev = null),
          n ? ((n.prev = this), (this.next = n)) : (this.next = null);
      }
      (e.exports = o),
        (o.Node = s),
        (o.create = o),
        (o.prototype.removeNode = function(e) {
          if (e.list !== this)
            throw new Error("removing node which does not belong to this list");
          var t = e.next,
            n = e.prev;
          return (
            t && (t.prev = n),
            n && (n.next = t),
            e === this.head && (this.head = t),
            e === this.tail && (this.tail = n),
            e.list.length--,
            (e.next = null),
            (e.prev = null),
            (e.list = null),
            t
          );
        }),
        (o.prototype.unshiftNode = function(e) {
          if (e !== this.head) {
            e.list && e.list.removeNode(e);
            var t = this.head;
            (e.list = this),
              (e.next = t),
              t && (t.prev = e),
              (this.head = e),
              this.tail || (this.tail = e),
              this.length++;
          }
        }),
        (o.prototype.pushNode = function(e) {
          if (e !== this.tail) {
            e.list && e.list.removeNode(e);
            var t = this.tail;
            (e.list = this),
              (e.prev = t),
              t && (t.next = e),
              (this.tail = e),
              this.head || (this.head = e),
              this.length++;
          }
        }),
        (o.prototype.push = function() {
          for (var e = 0, t = arguments.length; e < t; e++)
            r(this, arguments[e]);
          return this.length;
        }),
        (o.prototype.unshift = function() {
          for (var e = 0, t = arguments.length; e < t; e++)
            a(this, arguments[e]);
          return this.length;
        }),
        (o.prototype.pop = function() {
          if (this.tail) {
            var e = this.tail.value;
            return (
              (this.tail = this.tail.prev),
              this.tail ? (this.tail.next = null) : (this.head = null),
              this.length--,
              e
            );
          }
        }),
        (o.prototype.shift = function() {
          if (this.head) {
            var e = this.head.value;
            return (
              (this.head = this.head.next),
              this.head ? (this.head.prev = null) : (this.tail = null),
              this.length--,
              e
            );
          }
        }),
        (o.prototype.forEach = function(e, t) {
          t = t || this;
          for (var n = this.head, o = 0; null !== n; o++)
            e.call(t, n.value, o, this), (n = n.next);
        }),
        (o.prototype.forEachReverse = function(e, t) {
          t = t || this;
          for (var n = this.tail, o = this.length - 1; null !== n; o--)
            e.call(t, n.value, o, this), (n = n.prev);
        }),
        (o.prototype.get = function(e) {
          for (var t = 0, n = this.head; null !== n && t < e; t++) n = n.next;
          if (t === e && null !== n) return n.value;
        }),
        (o.prototype.getReverse = function(e) {
          for (var t = 0, n = this.tail; null !== n && t < e; t++) n = n.prev;
          if (t === e && null !== n) return n.value;
        }),
        (o.prototype.map = function(e, t) {
          t = t || this;
          for (var n = new o(), i = this.head; null !== i; )
            n.push(e.call(t, i.value, this)), (i = i.next);
          return n;
        }),
        (o.prototype.mapReverse = function(e, t) {
          t = t || this;
          for (var n = new o(), i = this.tail; null !== i; )
            n.push(e.call(t, i.value, this)), (i = i.prev);
          return n;
        }),
        (o.prototype.reduce = function(e, t) {
          var n,
            o = this.head;
          if (arguments.length > 1) n = t;
          else {
            if (!this.head)
              throw new TypeError("Reduce of empty list with no initial value");
            (o = this.head.next), (n = this.head.value);
          }
          for (var i = 0; null !== o; i++) (n = e(n, o.value, i)), (o = o.next);
          return n;
        }),
        (o.prototype.reduceReverse = function(e, t) {
          var n,
            o = this.tail;
          if (arguments.length > 1) n = t;
          else {
            if (!this.tail)
              throw new TypeError("Reduce of empty list with no initial value");
            (o = this.tail.prev), (n = this.tail.value);
          }
          for (var i = this.length - 1; null !== o; i--)
            (n = e(n, o.value, i)), (o = o.prev);
          return n;
        }),
        (o.prototype.toArray = function() {
          for (
            var e = new Array(this.length), t = 0, n = this.head;
            null !== n;
            t++
          )
            (e[t] = n.value), (n = n.next);
          return e;
        }),
        (o.prototype.toArrayReverse = function() {
          for (
            var e = new Array(this.length), t = 0, n = this.tail;
            null !== n;
            t++
          )
            (e[t] = n.value), (n = n.prev);
          return e;
        }),
        (o.prototype.slice = function(e, t) {
          (t = t || this.length) < 0 && (t += this.length),
            (e = e || 0) < 0 && (e += this.length);
          var n = new o();
          if (t < e || t < 0) return n;
          e < 0 && (e = 0), t > this.length && (t = this.length);
          for (var i = 0, r = this.head; null !== r && i < e; i++) r = r.next;
          for (; null !== r && i < t; i++, r = r.next) n.push(r.value);
          return n;
        }),
        (o.prototype.sliceReverse = function(e, t) {
          (t = t || this.length) < 0 && (t += this.length),
            (e = e || 0) < 0 && (e += this.length);
          var n = new o();
          if (t < e || t < 0) return n;
          e < 0 && (e = 0), t > this.length && (t = this.length);
          for (var i = this.length, r = this.tail; null !== r && i > t; i--)
            r = r.prev;
          for (; null !== r && i > e; i--, r = r.prev) n.push(r.value);
          return n;
        }),
        (o.prototype.splice = function(e, t, ...n) {
          e > this.length && (e = this.length - 1),
            e < 0 && (e = this.length + e);
          for (var o = 0, r = this.head; null !== r && o < e; o++) r = r.next;
          var a = [];
          for (o = 0; r && o < t; o++)
            a.push(r.value), (r = this.removeNode(r));
          null === r && (r = this.tail),
            r !== this.head && r !== this.tail && (r = r.prev);
          for (o = 0; o < n.length; o++) r = i(this, r, n[o]);
          return a;
        }),
        (o.prototype.reverse = function() {
          for (
            var e = this.head, t = this.tail, n = e;
            null !== n;
            n = n.prev
          ) {
            var o = n.prev;
            (n.prev = n.next), (n.next = o);
          }
          return (this.head = t), (this.tail = e), this;
        });
      try {
        n("HwNo")(o);
      } catch (l) {}
    },
    YBdB: function(e, t, n) {
      (function(e, t) {
        !(function(e, n) {
          "use strict";
          if (!e.setImmediate) {
            var o,
              i = 1,
              r = {},
              a = !1,
              s = e.document,
              l = Object.getPrototypeOf && Object.getPrototypeOf(e);
            (l = l && l.setTimeout ? l : e),
              "[object process]" === {}.toString.call(e.process)
                ? (o = function(e) {
                    t.nextTick(function() {
                      u(e);
                    });
                  })
                : (function() {
                    if (e.postMessage && !e.importScripts) {
                      var t = !0,
                        n = e.onmessage;
                      return (
                        (e.onmessage = function() {
                          t = !1;
                        }),
                        e.postMessage("", "*"),
                        (e.onmessage = n),
                        t
                      );
                    }
                  })()
                ? (function() {
                    var t = "setImmediate$" + Math.random() + "$",
                      n = function(n) {
                        n.source === e &&
                          "string" === typeof n.data &&
                          0 === n.data.indexOf(t) &&
                          u(+n.data.slice(t.length));
                      };
                    e.addEventListener
                      ? e.addEventListener("message", n, !1)
                      : e.attachEvent("onmessage", n),
                      (o = function(n) {
                        e.postMessage(t + n, "*");
                      });
                  })()
                : e.MessageChannel
                ? (function() {
                    var e = new MessageChannel();
                    (e.port1.onmessage = function(e) {
                      u(e.data);
                    }),
                      (o = function(t) {
                        e.port2.postMessage(t);
                      });
                  })()
                : s && "onreadystatechange" in s.createElement("script")
                ? (function() {
                    var e = s.documentElement;
                    o = function(t) {
                      var n = s.createElement("script");
                      (n.onreadystatechange = function() {
                        u(t),
                          (n.onreadystatechange = null),
                          e.removeChild(n),
                          (n = null);
                      }),
                        e.appendChild(n);
                    };
                  })()
                : (o = function(e) {
                    setTimeout(u, 0, e);
                  }),
              (l.setImmediate = function(e) {
                "function" !== typeof e && (e = new Function("" + e));
                for (
                  var t = new Array(arguments.length - 1), n = 0;
                  n < t.length;
                  n++
                )
                  t[n] = arguments[n + 1];
                var a = { callback: e, args: t };
                return (r[i] = a), o(i), i++;
              }),
              (l.clearImmediate = c);
          }
          function c(e) {
            delete r[e];
          }
          function u(e) {
            if (a) setTimeout(u, 0, e);
            else {
              var t = r[e];
              if (t) {
                a = !0;
                try {
                  !(function(e) {
                    var t = e.callback,
                      n = e.args;
                    switch (n.length) {
                      case 0:
                        t();
                        break;
                      case 1:
                        t(n[0]);
                        break;
                      case 2:
                        t(n[0], n[1]);
                        break;
                      case 3:
                        t(n[0], n[1], n[2]);
                        break;
                      default:
                        t.apply(void 0, n);
                    }
                  })(t);
                } finally {
                  c(e), (a = !1);
                }
              }
            }
          }
        })(
          "undefined" === typeof self
            ? "undefined" === typeof e
              ? this
              : e
            : self
        );
      }.call(this, n("ntbh"), n("8oxB")));
    },
    ZcLO: function(e, t, n) {
      "use strict";
      e.exports = n("S0UH").NQuads;
    },
    ZeHd: function(e, t, n) {
      "use strict";
      const o = "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
        i = "http://www.w3.org/2001/XMLSchema#string",
        r = "NamedNode",
        a = "BlankNode",
        s = "Literal",
        l = "DefaultGraph",
        c = {};
      function u(e, t) {
        return (
          e.subject.termType === t.subject.termType &&
          e.object.termType === t.object.termType &&
          e.subject.value === t.subject.value &&
            e.predicate.value === t.predicate.value &&
            e.object.value === t.object.value &&
            (e.object.termType !== s ||
              (e.object.datatype.termType === t.object.datatype.termType &&
                e.object.language === t.object.language &&
                e.object.datatype.value === t.object.datatype.value))
        );
      }
      (c.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g),
        (c.empty = new RegExp("^[ \\t]*$")),
        (c.quad = new RegExp(
          '^[ \\t]*(?:(?:<([^:]+:[^>]*)>)|(_:(?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd_0-9])(?:(?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd_0-9-\xb7\u0300-\u036f\u203f-\u2040.])*(?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd_0-9-\xb7\u0300-\u036f\u203f-\u2040]))?))[ \\t]+(?:<([^:]+:[^>]*)>)[ \\t]+(?:(?:<([^:]+:[^>]*)>)|(_:(?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd_0-9])(?:(?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd_0-9-\xb7\u0300-\u036f\u203f-\u2040.])*(?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd_0-9-\xb7\u0300-\u036f\u203f-\u2040]))?)|(?:"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"(?:(?:\\^\\^(?:<([^:]+:[^>]*)>))|(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*)))?))[ \\t]*(?:\\.|(?:(?:(?:<([^:]+:[^>]*)>)|(_:(?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd_0-9])(?:(?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd_0-9-\xb7\u0300-\u036f\u203f-\u2040.])*(?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd_0-9-\xb7\u0300-\u036f\u203f-\u2040]))?))[ \\t]*\\.))[ \\t]*$'
        )),
        (e.exports = class e {
          static parse(e) {
            const t = [],
              n = {},
              d = e.split(c.eoln);
            let f = 0;
            for (const h of d) {
              if ((f++, c.empty.test(h))) continue;
              const e = h.match(c.quad);
              if (null === e)
                throw new Error("N-Quads parse error on line " + f + ".");
              const d = {
                subject: null,
                predicate: null,
                object: null,
                graph: null
              };
              if (
                (void 0 !== e[1]
                  ? (d.subject = { termType: r, value: e[1] })
                  : (d.subject = { termType: a, value: e[2] }),
                (d.predicate = { termType: r, value: e[3] }),
                void 0 !== e[4]
                  ? (d.object = { termType: r, value: e[4] })
                  : void 0 !== e[5]
                  ? (d.object = { termType: a, value: e[5] })
                  : ((d.object = {
                      termType: s,
                      value: void 0,
                      datatype: { termType: r }
                    }),
                    void 0 !== e[7]
                      ? (d.object.datatype.value = e[7])
                      : void 0 !== e[8]
                      ? ((d.object.datatype.value = o),
                        (d.object.language = e[8]))
                      : (d.object.datatype.value = i),
                    (d.object.value = e[6].replace(p, function(e, t, n, o) {
                      if (t)
                        switch (t) {
                          case "t":
                            return "\t";
                          case "b":
                            return "\b";
                          case "n":
                            return "\n";
                          case "r":
                            return "\r";
                          case "f":
                            return "\f";
                          case '"':
                            return '"';
                          case "'":
                            return "'";
                          case "\\":
                            return "\\";
                        }
                      if (n) return String.fromCharCode(parseInt(n, 16));
                      if (o) throw new Error("Unsupported U escape");
                    }))),
                void 0 !== e[9]
                  ? (d.graph = { termType: r, value: e[9] })
                  : void 0 !== e[10]
                  ? (d.graph = { termType: a, value: e[10] })
                  : (d.graph = { termType: l, value: "" }),
                d.graph.value in n)
              ) {
                let e = !0;
                const o = n[d.graph.value];
                for (const t of o)
                  if (u(t, d)) {
                    e = !1;
                    break;
                  }
                e && (o.push(d), t.push(d));
              } else (n[d.graph.value] = [d]), t.push(d);
            }
            return t;
          }
          static serialize(t) {
            Array.isArray(t) || (t = e.legacyDatasetToQuads(t));
            const n = [];
            for (const o of t) n.push(e.serializeQuad(o));
            return n.sort().join("");
          }
          static serializeQuad(e) {
            const t = e.subject,
              n = e.predicate,
              s = e.object,
              l = e.graph;
            let c = "";
            return (
              t.termType === r ? (c += `<${t.value}>`) : (c += `${t.value}`),
              (c += ` <${n.value}> `),
              s.termType === r
                ? (c += `<${s.value}>`)
                : s.termType === a
                ? (c += s.value)
                : ((c += `"${(function(e) {
                    return e.replace(d, function(e) {
                      switch (e) {
                        case '"':
                          return '\\"';
                        case "\\":
                          return "\\\\";
                        case "\n":
                          return "\\n";
                        case "\r":
                          return "\\r";
                      }
                    });
                  })(s.value)}"`),
                  s.datatype.value === o
                    ? s.language && (c += `@${s.language}`)
                    : s.datatype.value !== i &&
                      (c += `^^<${s.datatype.value}>`)),
              l.termType === r
                ? (c += ` <${l.value}>`)
                : l.termType === a && (c += ` ${l.value}`),
              (c += " .\n"),
              c
            );
          }
          static legacyDatasetToQuads(e) {
            const t = [],
              n = { "blank node": a, IRI: r, literal: s };
            for (const c in e) {
              e[c].forEach(e => {
                const u = {};
                for (const t in e) {
                  const a = e[t],
                    l = { termType: n[a.type], value: a.value };
                  l.termType === s &&
                    ((l.datatype = { termType: r }),
                    "datatype" in a && (l.datatype.value = a.datatype),
                    "language" in a
                      ? ("datatype" in a || (l.datatype.value = o),
                        (l.language = a.language))
                      : "datatype" in a || (l.datatype.value = i)),
                    (u[t] = l);
                }
                (u.graph =
                  "@default" === c
                    ? { termType: l, value: "" }
                    : { termType: c.startsWith("_:") ? a : r, value: c }),
                  t.push(u);
              });
            }
            return t;
          }
        });
      const d = /["\\\n\r]/g;
      const p = /(?:\\([tbnrf"'\\]))|(?:\\u([0-9A-Fa-f]{4}))|(?:\\U([0-9A-Fa-f]{8}))/g;
    },
    aPrt: function(e, t, n) {
      "use strict";
      const o = {};
      (e.exports = o),
        (o.isArray = Array.isArray),
        (o.isBoolean = e =>
          "boolean" === typeof e ||
          "[object Boolean]" === Object.prototype.toString.call(e)),
        (o.isDouble = e =>
          o.isNumber(e) &&
          (-1 !== String(e).indexOf(".") || Math.abs(e) >= 1e21)),
        (o.isEmptyObject = e => o.isObject(e) && 0 === Object.keys(e).length),
        (o.isNumber = e =>
          "number" === typeof e ||
          "[object Number]" === Object.prototype.toString.call(e)),
        (o.isNumeric = e => !isNaN(parseFloat(e)) && isFinite(e)),
        (o.isObject = e =>
          "[object Object]" === Object.prototype.toString.call(e)),
        (o.isString = e =>
          "string" === typeof e ||
          "[object String]" === Object.prototype.toString.call(e)),
        (o.isUndefined = e => "undefined" === typeof e);
    },
    b1yc: function(e, t, n) {
      "use strict";
      const o = n("WVB1"),
        i = n("yS/M"),
        r = n("aPrt"),
        a = n("ia45"),
        {
          RDF_LIST: s,
          RDF_FIRST: l,
          RDF_REST: c,
          RDF_NIL: u,
          RDF_TYPE: d,
          RDF_JSON_LITERAL: p,
          XSD_BOOLEAN: f,
          XSD_DOUBLE: h,
          XSD_INTEGER: v,
          XSD_STRING: y
        } = n("/rHk"),
        g = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/,
        m = {};
      function x(e, t, n) {
        if (e.termType.endsWith("Node")) return { "@id": e.value };
        const i = { "@value": e.value };
        if (e.language) i["@language"] = e.language;
        else {
          let s = e.datatype.value;
          if ((s || (s = y), s === p)) {
            s = "@json";
            try {
              i["@value"] = JSON.parse(i["@value"]);
            } catch (a) {
              throw new o(
                "JSON literal could not be parsed.",
                "jsonld.InvalidJsonLiteral",
                { code: "invalid JSON literal", value: i["@value"], cause: a }
              );
            }
          }
          if (t) {
            if (s === f)
              "true" === i["@value"]
                ? (i["@value"] = !0)
                : "false" === i["@value"] && (i["@value"] = !1);
            else if (r.isNumeric(i["@value"]))
              if (s === v) {
                const e = parseInt(i["@value"], 10);
                e.toFixed(0) === i["@value"] && (i["@value"] = e);
              } else s === h && (i["@value"] = parseFloat(i["@value"]));
            [f, v, h, y].includes(s) || (i["@type"] = s);
          } else if (
            "i18n-datatype" === n &&
            s.startsWith("https://www.w3.org/ns/i18n#")
          ) {
            const [, e, t] = s.split(/[#_]/);
            e.length > 0 &&
              ((i["@language"] = e),
              e.match(g) ||
                console.warn(`@language must be valid BCP47: ${e}`)),
              (i["@direction"] = t);
          } else s !== y && (i["@type"] = s);
        }
        return i;
      }
      (e.exports = m),
        (m.fromRDF = async (
          e,
          { useRdfType: t = !1, useNativeTypes: n = !1, rdfDirection: o = null }
        ) => {
          const p = {},
            f = { "@default": p },
            h = {};
          for (const i of e) {
            const e =
              "DefaultGraph" === i.graph.termType ? "@default" : i.graph.value;
            e in f || (f[e] = {}),
              "@default" === e || e in p || (p[e] = { "@id": e });
            const r = f[e],
              s = i.subject.value,
              l = i.predicate.value,
              c = i.object;
            s in r || (r[s] = { "@id": s });
            const v = r[s],
              y = c.termType.endsWith("Node");
            if (
              (y && !(c.value in r) && (r[c.value] = { "@id": c.value }),
              l === d && !t && y)
            ) {
              a.addValue(v, "@type", c.value, { propertyIsArray: !0 });
              continue;
            }
            const g = x(c, n, o);
            if ((a.addValue(v, l, g, { propertyIsArray: !0 }), y))
              if (c.value === u) {
                const e = r[c.value];
                "usages" in e || (e.usages = []),
                  e.usages.push({ node: v, property: l, value: g });
              } else
                c.value in h
                  ? (h[c.value] = !1)
                  : (h[c.value] = { node: v, property: l, value: g });
          }
          for (const a in f) {
            const e = f[a];
            if (!(u in e)) continue;
            const t = e[u];
            if (t.usages) {
              for (let n of t.usages) {
                let t = n.node,
                  o = n.property,
                  a = n.value;
                const u = [],
                  d = [];
                let p = Object.keys(t).length;
                for (
                  ;
                  o === c &&
                  r.isObject(h[t["@id"]]) &&
                  r.isArray(t[l]) &&
                  1 === t[l].length &&
                  r.isArray(t[c]) &&
                  1 === t[c].length &&
                  (3 === p ||
                    (4 === p &&
                      r.isArray(t["@type"]) &&
                      1 === t["@type"].length &&
                      t["@type"][0] === s)) &&
                  (u.push(t[l][0]),
                  d.push(t["@id"]),
                  (n = h[t["@id"]]),
                  (t = n.node),
                  (o = n.property),
                  (a = n.value),
                  (p = Object.keys(t).length),
                  i.isBlankNode(t));

                );
                delete a["@id"], (a["@list"] = u.reverse());
                for (const n of d) delete e[n];
              }
              delete t.usages;
            }
          }
          const v = [],
            y = Object.keys(p).sort();
          for (const r of y) {
            const e = p[r];
            if (r in f) {
              const t = (e["@graph"] = []),
                n = f[r],
                o = Object.keys(n).sort();
              for (const e of o) {
                const o = n[e];
                i.isSubjectReference(o) || t.push(o);
              }
            }
            i.isSubjectReference(e) || v.push(e);
          }
          return v;
        });
    },
    cVYw: function(e, t, n) {
      "use strict";
      const { parseLinkHeader: o, buildHeaders: i } = n("ia45"),
        { LINK_HEADER_CONTEXT: r } = n("/rHk"),
        a = n("WVB1"),
        s = n("QM42"),
        { prependBase: l } = n("3deL"),
        c = /(^|(\r\n))link:/i;
      e.exports = (
        { secure: e, headers: t = {}, xhr: n } = { headers: {} }
      ) => {
        t = i(t);
        return new s().wrapLoader(async function i(s) {
          if (0 !== s.indexOf("http:") && 0 !== s.indexOf("https:"))
            throw new a(
              'URL could not be dereferenced; only "http" and "https" URLs are supported.',
              "jsonld.InvalidUrl",
              { code: "loading document failed", url: s }
            );
          if (e && 0 !== s.indexOf("https"))
            throw new a(
              'URL could not be dereferenced; secure mode is enabled and the URL\'s scheme is not "https".',
              "jsonld.InvalidUrl",
              { code: "loading document failed", url: s }
            );
          let u;
          try {
            u = await (function(e, t, n) {
              const o = new (e = e || XMLHttpRequest)();
              return new Promise((e, i) => {
                (o.onload = () => e(o)),
                  (o.onerror = e => i(e)),
                  o.open("GET", t, !0);
                for (const t in n) o.setRequestHeader(t, n[t]);
                o.send();
              });
            })(n, s, t);
          } catch (v) {
            throw new a(
              "URL could not be dereferenced, an error occurred.",
              "jsonld.LoadDocumentError",
              { code: "loading document failed", url: s, cause: v }
            );
          }
          if (u.status >= 400)
            throw new a(
              "URL could not be dereferenced: " + u.statusText,
              "jsonld.LoadDocumentError",
              {
                code: "loading document failed",
                url: s,
                httpStatusCode: u.status
              }
            );
          let d = { contextUrl: null, documentUrl: s, document: u.response },
            p = null;
          const f = u.getResponseHeader("Content-Type");
          let h;
          c.test(u.getAllResponseHeaders()) &&
            (h = u.getResponseHeader("Link"));
          if (h && "application/ld+json" !== f) {
            const e = o(h),
              t = e[r];
            if (Array.isArray(t))
              throw new a(
                "URL could not be dereferenced, it has more than one associated HTTP Link Header.",
                "jsonld.InvalidUrl",
                { code: "multiple context link headers", url: s }
              );
            t && (d.contextUrl = t.target),
              (p = e.alternate),
              p &&
                "application/ld+json" == p.type &&
                !(f || "").match(/^application\/(\w*\+)?json$/) &&
                (d = await i(l(s, p.target)));
          }
          return d;
        });
      };
    },
    dkat: function(e, t, n) {
      "use strict";
      const { createNodeMap: o } = n("eWym"),
        { isKeyword: i } = n("0ecE"),
        r = n("yS/M"),
        a = n("Vyf+"),
        s = n("aPrt"),
        l = n("ia45"),
        {
          RDF_FIRST: c,
          RDF_REST: u,
          RDF_NIL: d,
          RDF_TYPE: p,
          RDF_JSON_LITERAL: f,
          RDF_LANGSTRING: h,
          XSD_BOOLEAN: v,
          XSD_DOUBLE: y,
          XSD_INTEGER: g,
          XSD_STRING: m
        } = n("/rHk"),
        { isAbsolute: x } = n("3deL"),
        b = {};
      function w(e, t, n, o, r) {
        const a = Object.keys(t).sort();
        for (const s of a) {
          const a = t[s],
            l = Object.keys(a).sort();
          for (let t of l) {
            const l = a[t];
            if ("@type" === t) t = p;
            else if (i(t)) continue;
            for (const i of l) {
              const a = {
                termType: s.startsWith("_:") ? "BlankNode" : "NamedNode",
                value: s
              };
              if (!x(s)) continue;
              const l = {
                termType: t.startsWith("_:") ? "BlankNode" : "NamedNode",
                value: t
              };
              if (!x(t)) continue;
              if ("BlankNode" === l.termType && !r.produceGeneralizedRdf)
                continue;
              const c = j(i, o, e, n, r.rdfDirection);
              c && e.push({ subject: a, predicate: l, object: c, graph: n });
            }
          }
        }
      }
      function j(e, t, n, o, i) {
        const l = {};
        if (r.isValue(e)) {
          (l.termType = "Literal"),
            (l.value = void 0),
            (l.datatype = { termType: "NamedNode" });
          let t = e["@value"];
          const n = e["@type"] || null;
          if ("@json" === n) (l.value = a(t)), (l.datatype.value = f);
          else if (s.isBoolean(t))
            (l.value = t.toString()), (l.datatype.value = n || v);
          else if (s.isDouble(t) || n === y)
            s.isDouble(t) || (t = parseFloat(t)),
              (l.value = t.toExponential(15).replace(/(\d)0*e\+?/, "$1E")),
              (l.datatype.value = n || y);
          else if (s.isNumber(t))
            (l.value = t.toFixed(0)), (l.datatype.value = n || g);
          else if ("i18n-datatype" === i && "@direction" in e) {
            const n =
              "https://www.w3.org/ns/i18n#" +
              (e["@language"] || "") +
              `_${e["@direction"]}`;
            (l.datatype.value = n), (l.value = t);
          } else
            "@language" in e
              ? ((l.value = t),
                (l.datatype.value = n || h),
                (l.language = e["@language"]))
              : ((l.value = t), (l.datatype.value = n || m));
        } else if (r.isList(e)) {
          const r = (function(e, t, n, o, i) {
            const r = { termType: "NamedNode", value: c },
              a = { termType: "NamedNode", value: u },
              s = { termType: "NamedNode", value: d },
              l = e.pop(),
              p = l ? { termType: "BlankNode", value: t.getId() } : s;
            let f = p;
            for (const c of e) {
              const e = j(c, t, n, o, i),
                s = { termType: "BlankNode", value: t.getId() };
              n.push({ subject: f, predicate: r, object: e, graph: o }),
                n.push({ subject: f, predicate: a, object: s, graph: o }),
                (f = s);
            }
            if (l) {
              const e = j(l, t, n, o, i);
              n.push({ subject: f, predicate: r, object: e, graph: o }),
                n.push({ subject: f, predicate: a, object: s, graph: o });
            }
            return p;
          })(e["@list"], t, n, o, i);
          (l.termType = r.termType), (l.value = r.value);
        } else {
          const t = s.isObject(e) ? e["@id"] : e;
          (l.termType = t.startsWith("_:") ? "BlankNode" : "NamedNode"),
            (l.value = t);
        }
        return "NamedNode" !== l.termType || x(l.value) ? l : null;
      }
      (e.exports = b),
        (b.toRDF = (e, t) => {
          const n = new l.IdentifierIssuer("_:b"),
            i = { "@default": {} };
          o(e, i, "@default", n);
          const r = [],
            a = Object.keys(i).sort();
          for (const o of a) {
            let e;
            if ("@default" === o) e = { termType: "DefaultGraph", value: "" };
            else {
              if (!x(o)) continue;
              (e = o.startsWith("_:")
                ? { termType: "BlankNode" }
                : { termType: "NamedNode" }),
                (e.value = o);
            }
            w(r, i[o], e, n, t);
          }
          return r;
        });
    },
    eWym: function(e, t, n) {
      "use strict";
      const { isKeyword: o } = n("0ecE"),
        i = n("yS/M"),
        r = n("aPrt"),
        a = n("ia45"),
        s = n("WVB1"),
        l = {};
      (e.exports = l),
        (l.createMergedNodeMap = (e, t) => {
          const n = (t = t || {}).issuer || new a.IdentifierIssuer("_:b"),
            o = { "@default": {} };
          return l.createNodeMap(e, o, "@default", n), l.mergeNodeMaps(o);
        }),
        (l.createNodeMap = (e, t, n, c, u, d) => {
          if (r.isArray(e)) {
            for (const o of e) l.createNodeMap(o, t, n, c, void 0, d);
            return;
          }
          if (!r.isObject(e)) return void (d && d.push(e));
          if (i.isValue(e)) {
            if ("@type" in e) {
              let t = e["@type"];
              0 === t.indexOf("_:") && (e["@type"] = t = c.getId(t));
            }
            return void (d && d.push(e));
          }
          if (d && i.isList(e)) {
            const o = [];
            return (
              l.createNodeMap(e["@list"], t, n, c, u, o),
              void d.push({ "@list": o })
            );
          }
          if ("@type" in e) {
            const t = e["@type"];
            for (const e of t) 0 === e.indexOf("_:") && c.getId(e);
          }
          r.isUndefined(u) &&
            (u = i.isBlankNode(e) ? c.getId(e["@id"]) : e["@id"]),
            d && d.push({ "@id": u });
          const p = t[n],
            f = (p[u] = p[u] || {});
          f["@id"] = u;
          const h = Object.keys(e).sort();
          for (let r of h) {
            if ("@id" === r) continue;
            if ("@reverse" === r) {
              const o = { "@id": u },
                r = e["@reverse"];
              for (const e in r) {
                const s = r[e];
                for (const r of s) {
                  let s = r["@id"];
                  i.isBlankNode(r) && (s = c.getId(s)),
                    l.createNodeMap(r, t, n, c, s),
                    a.addValue(p[s], e, o, {
                      propertyIsArray: !0,
                      allowDuplicate: !1
                    });
                }
              }
              continue;
            }
            if ("@graph" === r) {
              u in t || (t[u] = {}), l.createNodeMap(e[r], t, u, c);
              continue;
            }
            if ("@included" === r) {
              l.createNodeMap(e[r], t, n, c);
              continue;
            }
            if ("@type" !== r && o(r)) {
              if (
                "@index" === r &&
                r in f &&
                (e[r] !== f[r] || e[r]["@id"] !== f[r]["@id"])
              )
                throw new s(
                  "Invalid JSON-LD syntax; conflicting @index property detected.",
                  "jsonld.SyntaxError",
                  { code: "conflicting indexes", subject: f }
                );
              f[r] = e[r];
              continue;
            }
            const d = e[r];
            if ((0 === r.indexOf("_:") && (r = c.getId(r)), 0 !== d.length))
              for (let e of d)
                if (
                  ("@type" === r &&
                    (e = 0 === e.indexOf("_:") ? c.getId(e) : e),
                  i.isSubject(e) || i.isSubjectReference(e))
                ) {
                  if ("@id" in e && !e["@id"]) continue;
                  const o = i.isBlankNode(e) ? c.getId(e["@id"]) : e["@id"];
                  a.addValue(
                    f,
                    r,
                    { "@id": o },
                    { propertyIsArray: !0, allowDuplicate: !1 }
                  ),
                    l.createNodeMap(e, t, n, c, o);
                } else if (i.isValue(e))
                  a.addValue(f, r, e, {
                    propertyIsArray: !0,
                    allowDuplicate: !1
                  });
                else if (i.isList(e)) {
                  const o = [];
                  l.createNodeMap(e["@list"], t, n, c, u, o),
                    (e = { "@list": o }),
                    a.addValue(f, r, e, {
                      propertyIsArray: !0,
                      allowDuplicate: !1
                    });
                } else
                  l.createNodeMap(e, t, n, c, u),
                    a.addValue(f, r, e, {
                      propertyIsArray: !0,
                      allowDuplicate: !1
                    });
            else a.addValue(f, r, [], { propertyIsArray: !0 });
          }
        }),
        (l.mergeNodeMapGraphs = e => {
          const t = {};
          for (const n of Object.keys(e).sort())
            for (const i of Object.keys(e[n]).sort()) {
              const r = e[n][i];
              i in t || (t[i] = { "@id": i });
              const s = t[i];
              for (const e of Object.keys(r).sort())
                if (o(e) && "@type" !== e) s[e] = a.clone(r[e]);
                else
                  for (const t of r[e])
                    a.addValue(s, e, a.clone(t), {
                      propertyIsArray: !0,
                      allowDuplicate: !1
                    });
            }
          return t;
        }),
        (l.mergeNodeMaps = e => {
          const t = e["@default"],
            n = Object.keys(e).sort();
          for (const o of n) {
            if ("@default" === o) continue;
            const n = e[o];
            let r = t[o];
            r
              ? "@graph" in r || (r["@graph"] = [])
              : (t[o] = r = { "@id": o, "@graph": [] });
            const a = r["@graph"];
            for (const e of Object.keys(n).sort()) {
              const t = n[e];
              i.isSubjectReference(t) || a.push(t);
            }
          }
          return t;
        });
    },
    gyLF: function(e, t, n) {
      "use strict";
      e.exports = e => {
        class t {
          toString() {
            return "[object JsonLdProcessor]";
          }
        }
        return (
          Object.defineProperty(t, "prototype", {
            writable: !1,
            enumerable: !1
          }),
          Object.defineProperty(t.prototype, "constructor", {
            writable: !0,
            enumerable: !1,
            configurable: !0,
            value: t
          }),
          (t.compact = function(t, n) {
            return arguments.length < 2
              ? Promise.reject(
                  new TypeError("Could not compact, too few arguments.")
                )
              : e.compact(t, n);
          }),
          (t.expand = function(t) {
            return arguments.length < 1
              ? Promise.reject(
                  new TypeError("Could not expand, too few arguments.")
                )
              : e.expand(t);
          }),
          (t.flatten = function(t) {
            return arguments.length < 1
              ? Promise.reject(
                  new TypeError("Could not flatten, too few arguments.")
                )
              : e.flatten(t);
          }),
          t
        );
      };
    },
    ia45: function(e, t, n) {
      "use strict";
      const o = n("yS/M"),
        i = n("aPrt"),
        r = n("S0UH").IdentifierIssuer,
        a = n("WVB1"),
        s = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g,
        l = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/,
        c = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g,
        u = { accept: "application/ld+json, application/json" },
        d = {};
      function p(e, t) {
        if (i.isArray(t)) for (let n = 0; n < t.length; ++n) t[n] = p(e, t[n]);
        else if (o.isList(t)) t["@list"] = p(e, t["@list"]);
        else if (i.isObject(t)) {
          o.isBlankNode(t) && (t["@id"] = e.getId(t["@id"]));
          const n = Object.keys(t).sort();
          for (let o = 0; o < n.length; ++o) {
            const i = n[o];
            "@id" !== i && (t[i] = p(e, t[i]));
          }
        }
        return t;
      }
      (e.exports = d),
        (d.IdentifierIssuer = r),
        (d.clone = function(e) {
          if (e && "object" === typeof e) {
            let t;
            if (i.isArray(e)) {
              t = [];
              for (let n = 0; n < e.length; ++n) t[n] = d.clone(e[n]);
            } else if (e instanceof Map) {
              t = new Map();
              for (const [n, o] of e) t.set(n, d.clone(o));
            } else if (e instanceof Set) {
              t = new Set();
              for (const n of e) t.add(d.clone(n));
            } else if (i.isObject(e)) {
              t = {};
              for (const n in e) t[n] = d.clone(e[n]);
            } else t = e.toString();
            return t;
          }
          return e;
        }),
        (d.asArray = function(e) {
          return Array.isArray(e) ? e : [e];
        }),
        (d.buildHeaders = (e = {}) => {
          if (Object.keys(e).some(e => "accept" === e.toLowerCase()))
            throw new RangeError(
              'Accept header may not be specified; only "' +
                u.accept +
                '" is supported.'
            );
          return Object.assign({ Accept: u.accept }, e);
        }),
        (d.parseLinkHeader = e => {
          const t = {},
            n = e.match(s);
          for (let o = 0; o < n.length; ++o) {
            let e = n[o].match(l);
            if (!e) continue;
            const i = { target: e[1] },
              r = e[2];
            for (; (e = c.exec(r)); ) i[e[1]] = void 0 === e[2] ? e[3] : e[2];
            const a = i.rel || "";
            Array.isArray(t[a])
              ? t[a].push(i)
              : t.hasOwnProperty(a)
              ? (t[a] = [t[a], i])
              : (t[a] = i);
          }
          return t;
        }),
        (d.validateTypeValue = (e, t) => {
          if (
            !i.isString(e) &&
            (!i.isArray(e) || !e.every(e => i.isString(e)))
          ) {
            if (t && i.isObject(e))
              switch (Object.keys(e).length) {
                case 0:
                  return;
                case 1:
                  if (
                    "@default" in e &&
                    d.asArray(e["@default"]).every(e => i.isString(e))
                  )
                    return;
              }
            throw new a(
              'Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.',
              "jsonld.SyntaxError",
              { code: "invalid type value", value: e }
            );
          }
        }),
        (d.hasProperty = (e, t) => {
          if (e.hasOwnProperty(t)) {
            const n = e[t];
            return !i.isArray(n) || n.length > 0;
          }
          return !1;
        }),
        (d.hasValue = (e, t, n) => {
          if (d.hasProperty(e, t)) {
            let r = e[t];
            const a = o.isList(r);
            if (i.isArray(r) || a) {
              a && (r = r["@list"]);
              for (let e = 0; e < r.length; ++e)
                if (d.compareValues(n, r[e])) return !0;
            } else if (!i.isArray(n)) return d.compareValues(n, r);
          }
          return !1;
        }),
        (d.addValue = (e, t, n, o) => {
          if (
            ("propertyIsArray" in (o = o || {}) || (o.propertyIsArray = !1),
            "valueIsArray" in o || (o.valueIsArray = !1),
            "allowDuplicate" in o || (o.allowDuplicate = !0),
            "prependValue" in o || (o.prependValue = !1),
            o.valueIsArray)
          )
            e[t] = n;
          else if (i.isArray(n)) {
            0 === n.length &&
              o.propertyIsArray &&
              !e.hasOwnProperty(t) &&
              (e[t] = []),
              o.prependValue && ((n = n.concat(e[t])), (e[t] = []));
            for (let i = 0; i < n.length; ++i) d.addValue(e, t, n[i], o);
          } else if (e.hasOwnProperty(t)) {
            const r = !o.allowDuplicate && d.hasValue(e, t, n);
            i.isArray(e[t]) || (r && !o.propertyIsArray) || (e[t] = [e[t]]),
              r || (o.prependValue ? e[t].unshift(n) : e[t].push(n));
          } else e[t] = o.propertyIsArray ? [n] : n;
        }),
        (d.getValues = (e, t) => [].concat(e[t] || [])),
        (d.removeProperty = (e, t) => {
          delete e[t];
        }),
        (d.removeValue = (e, t, n, o) => {
          "propertyIsArray" in (o = o || {}) || (o.propertyIsArray = !1);
          const i = d.getValues(e, t).filter(e => !d.compareValues(e, n));
          0 === i.length
            ? d.removeProperty(e, t)
            : 1 !== i.length || o.propertyIsArray
            ? (e[t] = i)
            : (e[t] = i[0]);
        }),
        (d.relabelBlankNodes = (e, t) =>
          p((t = t || {}).issuer || new r("_:b"), e)),
        (d.compareValues = (e, t) =>
          e === t ||
          !(
            !o.isValue(e) ||
            !o.isValue(t) ||
            e["@value"] !== t["@value"] ||
            e["@type"] !== t["@type"] ||
            e["@language"] !== t["@language"] ||
            e["@index"] !== t["@index"]
          ) ||
            (!!(i.isObject(e) && "@id" in e && i.isObject(t) && "@id" in t) &&
              e["@id"] === t["@id"])),
        (d.compareShortestLeast = (e, t) =>
          e.length < t.length
            ? -1
            : t.length < e.length
            ? 1
            : e === t
            ? 0
            : e < t
            ? -1
            : 1);
    },
    isx2: function(e, t, n) {
      "use strict";
      e.exports = class e {
        constructor(e, t = new Map(), n = 0) {
          (this.prefix = e), (this._existing = t), (this.counter = n);
        }
        clone() {
          const { prefix: t, _existing: n, counter: o } = this;
          return new e(t, new Map(n), o);
        }
        getId(e) {
          const t = e && this._existing.get(e);
          if (t) return t;
          const n = this.prefix + this.counter;
          return this.counter++, e && this._existing.set(e, n), n;
        }
        hasId(e) {
          return this._existing.has(e);
        }
        getOldIds() {
          return [...this._existing.keys()];
        }
      };
    },
    kJPQ: function(e, t, n) {
      "use strict";
      const o = n("HyWp");
      e.exports = class {
        constructor({ document: e }) {
          (this.document = e), (this.cache = new o({ max: 10 }));
        }
        getProcessed(e) {
          return this.cache.get(e);
        }
        setProcessed(e, t) {
          this.cache.set(e, t);
        }
      };
    },
    p1cm: function(e, t, n) {
      "use strict";
      const o = n("QoR2");
      e.exports = class extends o {
        constructor() {
          super(), (this.name = "URGNA2012"), (this.hashAlgorithm = "sha1");
        }
        modifyFirstDegreeComponent(e, t, n) {
          return "BlankNode" !== t.termType
            ? t
            : "graph" === n
            ? { termType: "BlankNode", value: "_:g" }
            : { termType: "BlankNode", value: t.value === e ? "_:a" : "_:z" };
        }
        getRelatedPredicate(e) {
          return e.predicate.value;
        }
        createHashToRelated(e, t) {
          const n = new Map(),
            o = this.blankNodeInfo.get(e).quads;
          for (const i of o) {
            let o, r;
            if ("BlankNode" === i.subject.termType && i.subject.value !== e)
              (r = i.subject.value), (o = "p");
            else {
              if ("BlankNode" !== i.object.termType || i.object.value === e)
                continue;
              (r = i.object.value), (o = "r");
            }
            const a = this.hashRelatedBlankNode(r, i, t, o),
              s = n.get(a);
            s ? s.push(r) : n.set(a, [r]);
          }
          return n;
        }
      };
    },
    rilC: function(e, t, n) {
      "use strict";
      (function(t) {
        const o = n("isx2"),
          i = n("WnYu"),
          r = n("x57E"),
          a = n("ZeHd");
        function s(e, t) {
          return e.hash < t.hash ? -1 : e.hash > t.hash ? 1 : 0;
        }
        e.exports = class {
          constructor() {
            (this.name = "URDNA2015"),
              (this.blankNodeInfo = new Map()),
              (this.canonicalIssuer = new o("_:c14n")),
              (this.hashAlgorithm = "sha256"),
              (this.quads = null);
          }
          async main(e) {
            this.quads = e;
            for (const o of e)
              this._addBlankNodeQuadInfo({ quad: o, component: o.subject }),
                this._addBlankNodeQuadInfo({ quad: o, component: o.object }),
                this._addBlankNodeQuadInfo({ quad: o, component: o.graph });
            const t = new Map(),
              n = [...this.blankNodeInfo.keys()];
            let i = 0;
            for (const o of n)
              ++i % 100 === 0 && (await this._yield()),
                await this._hashAndTrackBlankNode({
                  id: o,
                  hashToBlankNodes: t
                });
            const r = [...t.keys()].sort(),
              l = [];
            for (const o of r) {
              const e = t.get(o);
              if (e.length > 1) {
                l.push(e);
                continue;
              }
              const n = e[0];
              this.canonicalIssuer.getId(n);
            }
            for (const a of l) {
              const e = [];
              for (const t of a) {
                if (this.canonicalIssuer.hasId(t)) continue;
                const n = new o("_:b");
                n.getId(t);
                const i = await this.hashNDegreeQuads(t, n);
                e.push(i);
              }
              e.sort(s);
              for (const t of e) {
                const e = t.issuer.getOldIds();
                for (const t of e) this.canonicalIssuer.getId(t);
              }
            }
            const c = [];
            for (const o of this.quads) {
              const e = { ...o };
              (e.subject = this._useCanonicalId({ component: e.subject })),
                (e.object = this._useCanonicalId({ component: e.object })),
                (e.graph = this._useCanonicalId({ component: e.graph })),
                c.push(a.serializeQuad(e));
            }
            return c.sort(), c.join("");
          }
          async hashFirstDegreeQuads(e) {
            const t = [],
              n = this.blankNodeInfo.get(e),
              o = n.quads;
            for (const i of o) {
              const n = {
                subject: null,
                predicate: i.predicate,
                object: null,
                graph: null
              };
              (n.subject = this.modifyFirstDegreeComponent(
                e,
                i.subject,
                "subject"
              )),
                (n.object = this.modifyFirstDegreeComponent(
                  e,
                  i.object,
                  "object"
                )),
                (n.graph = this.modifyFirstDegreeComponent(
                  e,
                  i.graph,
                  "graph"
                )),
                t.push(a.serializeQuad(n));
            }
            t.sort();
            const r = new i(this.hashAlgorithm);
            for (const i of t) r.update(i);
            return (n.hash = await r.digest()), n.hash;
          }
          async hashRelatedBlankNode(e, t, n, o) {
            let r;
            r = this.canonicalIssuer.hasId(e)
              ? this.canonicalIssuer.getId(e)
              : n.hasId(e)
              ? n.getId(e)
              : this.blankNodeInfo.get(e).hash;
            const a = new i(this.hashAlgorithm);
            return (
              a.update(o),
              "g" !== o && a.update(this.getRelatedPredicate(t)),
              a.update(r),
              a.digest()
            );
          }
          async hashNDegreeQuads(e, t) {
            const n = new i(this.hashAlgorithm),
              o = await this.createHashToRelated(e, t),
              a = [...o.keys()].sort();
            for (const i of a) {
              n.update(i);
              let e,
                a = "";
              const s = new r(o.get(i));
              let l = 0;
              for (; s.hasNext(); ) {
                const n = s.next();
                ++l % 3 === 0 && (await this._yield());
                let o = t.clone(),
                  i = "";
                const r = [];
                let c = !1;
                for (const e of n)
                  if (
                    (this.canonicalIssuer.hasId(e)
                      ? (i += this.canonicalIssuer.getId(e))
                      : (o.hasId(e) || r.push(e), (i += o.getId(e))),
                    0 !== a.length && i > a)
                  ) {
                    c = !0;
                    break;
                  }
                if (!c) {
                  for (const e of r) {
                    const t = await this.hashNDegreeQuads(e, o);
                    if (
                      ((i += o.getId(e)),
                      (i += `<${t.hash}>`),
                      (o = t.issuer),
                      0 !== a.length && i > a)
                    ) {
                      c = !0;
                      break;
                    }
                  }
                  c || ((0 === a.length || i < a) && ((a = i), (e = o)));
                }
              }
              n.update(a), (t = e);
            }
            return { hash: await n.digest(), issuer: t };
          }
          modifyFirstDegreeComponent(e, t) {
            return "BlankNode" !== t.termType
              ? t
              : { termType: "BlankNode", value: t.value === e ? "_:a" : "_:z" };
          }
          getRelatedPredicate(e) {
            return `<${e.predicate.value}>`;
          }
          async createHashToRelated(e, t) {
            const n = new Map(),
              o = this.blankNodeInfo.get(e).quads;
            let i = 0;
            for (const r of o)
              ++i % 100 === 0 && (await this._yield()),
                await Promise.all([
                  this._addRelatedBlankNodeHash({
                    quad: r,
                    component: r.subject,
                    position: "s",
                    id: e,
                    issuer: t,
                    hashToRelated: n
                  }),
                  this._addRelatedBlankNodeHash({
                    quad: r,
                    component: r.object,
                    position: "o",
                    id: e,
                    issuer: t,
                    hashToRelated: n
                  }),
                  this._addRelatedBlankNodeHash({
                    quad: r,
                    component: r.graph,
                    position: "g",
                    id: e,
                    issuer: t,
                    hashToRelated: n
                  })
                ]);
            return n;
          }
          async _hashAndTrackBlankNode({ id: e, hashToBlankNodes: t }) {
            const n = await this.hashFirstDegreeQuads(e),
              o = t.get(n);
            o ? o.push(e) : t.set(n, [e]);
          }
          _addBlankNodeQuadInfo({ quad: e, component: t }) {
            if ("BlankNode" !== t.termType) return;
            const n = t.value,
              o = this.blankNodeInfo.get(n);
            o
              ? o.quads.add(e)
              : this.blankNodeInfo.set(n, { quads: new Set([e]), hash: null });
          }
          async _addRelatedBlankNodeHash({
            quad: e,
            component: t,
            position: n,
            id: o,
            issuer: i,
            hashToRelated: r
          }) {
            if ("BlankNode" !== t.termType || t.value === o) return;
            const a = t.value,
              s = await this.hashRelatedBlankNode(a, e, i, n),
              l = r.get(s);
            l ? l.push(a) : r.set(s, [a]);
          }
          _useCanonicalId({ component: e }) {
            return "BlankNode" !== e.termType ||
              e.value.startsWith(this.canonicalIssuer.prefix)
              ? e
              : {
                  termType: "BlankNode",
                  value: this.canonicalIssuer.getId(e.value)
                };
          }
          async _yield() {
            return new Promise(e => t(e));
          }
        };
      }.call(this, n("CfyG").setImmediate));
    },
    x57E: function(e, t, n) {
      "use strict";
      e.exports = class {
        constructor(e) {
          (this.current = e.sort()), (this.done = !1), (this.dir = new Map());
          for (let t = 0; t < e.length; ++t) this.dir.set(e[t], !0);
        }
        hasNext() {
          return !this.done;
        }
        next() {
          const { current: e, dir: t } = this,
            n = e.slice();
          let o = null,
            i = 0;
          const r = e.length;
          for (let a = 0; a < r; ++a) {
            const n = e[a],
              s = t.get(n);
            (null === o || n > o) &&
              ((s && a > 0 && n > e[a - 1]) ||
                (!s && a < r - 1 && n > e[a + 1])) &&
              ((o = n), (i = a));
          }
          if (null === o) this.done = !0;
          else {
            const n = t.get(o) ? i - 1 : i + 1;
            (e[i] = e[n]), (e[n] = o);
            for (const i of e) i > o && t.set(i, !t.get(i));
          }
          return n;
        }
      };
    },
    "yS/M": function(e, t, n) {
      "use strict";
      const o = n("aPrt"),
        i = {};
      (e.exports = i),
        (i.isSubject = e => {
          if (
            o.isObject(e) &&
            !("@value" in e || "@set" in e || "@list" in e)
          ) {
            return Object.keys(e).length > 1 || !("@id" in e);
          }
          return !1;
        }),
        (i.isSubjectReference = e =>
          o.isObject(e) && 1 === Object.keys(e).length && "@id" in e),
        (i.isValue = e => o.isObject(e) && "@value" in e),
        (i.isList = e => o.isObject(e) && "@list" in e),
        (i.isGraph = e =>
          o.isObject(e) &&
          "@graph" in e &&
          1 ===
            Object.keys(e).filter(e => "@id" !== e && "@index" !== e).length),
        (i.isSimpleGraph = e => i.isGraph(e) && !("@id" in e)),
        (i.isBlankNode = e =>
          !!o.isObject(e) &&
          ("@id" in e
            ? 0 === e["@id"].indexOf("_:")
            : 0 === Object.keys(e).length ||
              !("@value" in e || "@set" in e || "@list" in e)));
    }
  }
]);

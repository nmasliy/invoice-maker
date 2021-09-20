(this["webpackJsonpinvoice-generator"] =
    this["webpackJsonpinvoice-generator"] || []).push([
    [0],
    {
        151: function (e, a, t) {
            e.exports = t.p + "invoice/static/media/icon-close.3e91b1e1.svg";
        },
        18: function (e, a, t) {
            e.exports = {
                editableTextWrapper: "styles_editableTextWrapper__32iQG",
                child: "styles_child__3P-5g",
                left: "styles_left__11o9V",
                right: "styles_right__3t2OV",
                noDataWrapper: "styles_noDataWrapper__1mnKU",
                noDataTitle: "styles_noDataTitle__3E9Zq",
                payBlock: "styles_payBlock__2kS2v",
                discountErr: "styles_discountErr__1X9Vw",
                addBtnWrapper: "styles_addBtnWrapper__3uhJg",
                addBtnWrapperText: "styles_addBtnWrapperText__hpghk",
            };
        },
        259: function (e, a, t) {
            e.exports =
                t.p + "invoice/static/media/logo-placeholder.294afd10.svg";
        },
        260: function (e, a, t) {
            e.exports = t.p + "invoice/static/media/icon-edit.52a3a163.svg";
        },
        261: function (e, a, t) {
            e.exports = t.p + "invoice/static/media/icon-from.81539852.svg";
        },
        262: function (e, a, t) {
            e.exports = t.p + "invoice/static/media/icon-to.d59df9dc.svg";
        },
        263: function (e, a, t) {
            e.exports = t.p + "invoice/static/media/icon-plus.dba9424e.svg";
        },
        264: function (e, a, t) {
            e.exports = t.p + "invoice/static/media/icon-pay.8b247379.svg";
        },
        265: function (e, a, t) {
            e.exports =
                t.p + "invoice/static/media/GraphikRegular.e2a1876e.otf";
        },
        266: function (e, a, t) {
            e.exports = t.p + "invoice/static/media/GraphikMedium.4a127c95.otf";
        },
        267: function (e, a, t) {
            e.exports =
                t.p + "invoice/static/media/GraphikSemibold.99c54fc5.otf";
        },
        268: function (e, a, t) {
            e.exports = t.p + "invoice/static/media/GraphikBold.8a604ed5.otf";
        },
        269: function (e, a, t) {
            e.exports = t.p + "invoice/static/media/icon_send.99b79584.svg";
        },
        270: function (e, a, t) {
            e.exports = t.p + "invoice/static/media/icon_send_2.023ee158.svg";
        },
        271: function (e, a, t) {
            e.exports = t.p + "invoice/static/media/icon_download.d2fab8bf.svg";
        },
        272: function (e, a, t) {
            e.exports = t.p + "invoice/static/media/icon_preview.20e5c2a5.svg";
        },
        274: function (e, a, t) {
            e.exports = t(644);
        },
        282: function (e, a) {},
        284: function (e, a) {},
        313: function (e, a) {},
        314: function (e, a) {},
        35: function (e, a, t) {
            e.exports = {
                modal: "styles_modal__3RVMn",
                backdrop: "styles_backdrop__3q6W3",
                fadeIn: "styles_fadeIn__w0hHO",
                header: "styles_header__2n3bD",
                inner: "styles_inner__6cAE6",
                overflowDisable: "styles_overflowDisable__16NF6",
                innerContent: "styles_innerContent__15-15",
                closeIcon: "styles_closeIcon__28Yo1",
            };
        },
        425: function (e, a) {},
        643: function (e, a, t) {},
        644: function (e, a, t) {
            "use strict";
            t.r(a);
            var n,
                l = t(1),
                i = t.n(l),
                c = t(75),
                o = t.n(c),
                r = t(12),
                s = t(10),
                m = t(46),
                d = {
                    title: "",
                    description: "",
                    quantity: "1",
                    tax: "0",
                    rate: "0.00",
                },
                p = {
                    USD: "USD",
                    CADA: "CADA",
                    EUR: "EUR",
                    UAH: "UAH",
                    RUB: "RUB",
                },
                u = {
                    logo: "",
                    discountPercentage: "0.00",
                    discountAmount: "0.00",
                    discountLabel: "Discount",
                    documentType: "Invoice",
                    companyName: "",
                    name: "",
                    companyPhone: "",
                    companyMobile: "",
                    companyEmail: "",
                    companyWebsite: "",
                    companyAddress: "",
                    companyAddress2: "",
                    billTo: "Bill To",
                    billFrom: "From",
                    shipTo: "Ship to",
                    clientName: "",
                    clientBusinessName: "",
                    clientMobile: "",
                    clientPhone: "",
                    clientEmail: "",
                    shippingCostAmount: "0.00",
                    amountPaid: "0.00",
                    shippingCostLabel: "Shipping Cost",
                    shippingAddress: "",
                    trackingN: "",
                    clientAddress: "",
                    clientAddress2: "",
                    invoiceTitleLabel: "Invoice no.:",
                    invoiceTitle: "",
                    invoiceDateLabel: "Invoice date:",
                    invoiceDate: "",
                    invoiceDueDateLabel: "Due:",
                    invoiceDueDate: "",
                    productLineDescription: "DESCRIPTION",
                    productLineQuantity: "QTY",
                    productLineTax: "TAX",
                    productLineQuantityRate: "RATE",
                    productLineQuantityAmount: "AMOUNT",
                    productLines: [Object(r.a)({}, d)],
                    subTotalLabel: "Subtotal:",
                    taxLabel: "Sales Tax",
                    totalLabel: "Total",
                    balanceLabel: "Balance Due:",
                    amountPaidLabel: "Amount paid",
                    currency: p.USD,
                    paymentLabel: "Payment instruction",
                    payEmail: "",
                    payPayableTo: "",
                    payBankTransfer: "",
                    payOther: "",
                    notesLabel: "Notes",
                    notes: "",
                },
                f = t(14),
                g = {
                    view: { display: "block" },
                    "document-type": {
                        fontWeight: 600,
                        fontSize: "46px",
                        textAlign: "right",
                    },
                    dark: { color: "#000" },
                    "justify-end": { justifyContent: "flex-end" },
                    white: { color: "#fff" },
                    "bg-dark": { backgroundColor: "#0075FF" },
                    "bg-gray": { backgroundColor: "#e3e3e3" },
                    "light-bold": { fontWeight: 500 },
                    flex: {
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                    },
                    "w-auto": { flex: 1, paddingRight: "8px" },
                    "ml-30": { flex: 1 },
                    "no-wrap": { whiteSpace: "nowrap" },
                    "h-50": { height: "50px" },
                    left: { textAlign: "left" },
                    "w-100": { width: "100%" },
                    "w-50": { width: "50%" },
                    "w-55": { width: "55%" },
                    "w-45": { width: "45%" },
                    "w-60": { width: "60%" },
                    "w-38": { width: "31%" },
                    "word-break": { wordBreak: "break-word" },
                    "w-40": { width: "40%" },
                    "w-48": { width: "48%" },
                    "w-17": { width: "17%" },
                    "w-18": { width: "18%" },
                    feature: {
                        fontSize: "14px",
                        letterSpacing: "0.2px",
                        color: "#9595A8",
                    },
                    row: { borderBottom: "1px solid ".concat("#e3e3e3") },
                    "mt-40": { marginTop: "40px" },
                    "mt-50": { marginTop: "50px" },
                    "mt-30": { marginTop: "30px" },
                    "mt-20": { marginTop: "20px" },
                    "mt-10": { marginTop: "10px" },
                    "mb-5": { marginBottom: "5px" },
                    "mb-26": { marginBottom: "26px" },
                    "p-4-13": { padding: "4px 13px" },
                    "p-5": { padding: "5px" },
                    "pb-10": { paddingBottom: "10px" },
                    "pb-14": { paddingBottom: "14px" },
                    right: { textAlign: "right" },
                    bold: { fontWeight: "bold" },
                    "semi-bold": { fontWeight: 600 },
                    "sub-title": {
                        fontWeight: 600,
                        fontSize: "22px",
                        letterSpacing: "0.2px",
                        paddingBottom: "22px",
                    },
                    "fs-20": { fontSize: "20px" },
                    "fs-45": { fontSize: "45px" },
                    page: {
                        fontFamily: "Graphik",
                        fontSize: "13px",
                        wordBreak: "break-word",
                        color: "#000",
                        padding: "40px 35px",
                    },
                    span: { display: "block", padding: "4px 12px 4px 0" },
                    "justify-space-between": {
                        justifyContent: "space-between",
                    },
                    logo: { display: "block" },
                    title: { fontSize: "17px", fontWeight: 600 },
                    "align-center": { alignItems: "center" },
                    "mt-100": { marginTop: "100px" },
                    "mt-25": { marginTop: "25px" },
                    "mb-21": { marginBottom: "21px" },
                    "mb-100": { marginBottom: "100px" },
                    "mr-10": { marginRight: "10px" },
                    labelPadding: { padding: "10px 10px 10px 12px" },
                },
                E = {
                    view: { display: "block" },
                    "document-type": {
                        fontWeight: 600,
                        fontSize: "41px",
                        textAlign: "right",
                    },
                    dark: { color: "#000" },
                    "justify-end": { justifyContent: "flex-end" },
                    white: { color: "#fff" },
                    "bg-dark": { backgroundColor: "#0075FF" },
                    "bg-gray": { backgroundColor: "#e3e3e3" },
                    "light-bold": { fontWeight: 500 },
                    flex: {
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                    },
                    "w-auto": { flex: 1, paddingRight: "8px" },
                    "ml-30": { flex: 1 },
                    "no-wrap": { whiteSpace: "nowrap" },
                    "h-50": { height: "50px" },
                    left: { textAlign: "left" },
                    "w-100": { width: "100%" },
                    "w-50": { width: "50%" },
                    "w-55": { width: "55%" },
                    "w-45": { width: "45%" },
                    "w-60": { width: "60%" },
                    "w-38": { width: "31%" },
                    "word-break": { wordBreak: "break-word" },
                    "w-40": { width: "40%" },
                    "w-48": { width: "48%" },
                    "w-17": { width: "17%" },
                    "w-18": { width: "20%" },
                    feature: {
                        fontSize: "9px",
                        letterSpacing: "0.2px",
                        color: "#9595A8",
                    },
                    row: { borderBottom: "1px solid ".concat("#e3e3e3") },
                    "mt-40": { marginTop: "40px" },
                    "mt-50": { marginTop: "50px" },
                    "mt-30": { marginTop: "30px" },
                    "mt-20": { marginTop: "20px" },
                    "mt-10": { marginTop: "10px" },
                    "mb-5": { marginBottom: "5px" },
                    "mb-26": { marginBottom: "26px" },
                    "p-4-13": { padding: "4px 13px" },
                    "p-5": { padding: "5px" },
                    "pb-10": { paddingBottom: "10px" },
                    "pb-14": { paddingBottom: "14px" },
                    right: { textAlign: "right" },
                    bold: { fontWeight: "bold" },
                    "semi-bold": { fontWeight: 600 },
                    "sub-title": {
                        fontWeight: 600,
                        fontSize: "17px",
                        letterSpacing: "0.2px",
                        paddingBottom: "22px",
                    },
                    "fs-20": { fontSize: "15px" },
                    "fs-45": { fontSize: "40px" },
                    "fs-17": { fontSize: "12px" },
                    page: {
                        fontFamily: "Graphik",
                        fontSize: "8px",
                        wordBreak: "break-word",
                        color: "#000",
                        padding: "40px 35px",
                    },
                    span: {
                        display: "block",
                        fontSize: "8px",
                        padding: "4px 12px 4px 0",
                    },
                    "justify-space-between": {
                        justifyContent: "space-between",
                    },
                    logo: { display: "block" },
                    title: { fontSize: "12px", fontWeight: 600 },
                    "align-center": { alignItems: "center" },
                    "mt-100": { marginTop: "100px" },
                    "mt-25": { marginTop: "25px" },
                    "mb-21": { marginBottom: "21px" },
                    "mb-100": { marginBottom: "100px" },
                    "mr-10": { marginRight: "10px" },
                    labelPadding: { padding: "10px 10px 10px 12px" },
                },
                h = g,
                b = function (e, a) {
                    var t = {},
                        n = a ? E : h;
                    return (
                        e
                            .replace(/\s+/g, " ")
                            .split(" ")
                            .forEach(function (e) {
                                void 0 !== typeof n[e] &&
                                    Object.assign(t, n[e]);
                            }),
                        t
                    );
                },
                v = {
                    parseLocaleNumber: function () {
                        var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : 0,
                            a = String(e).replace(/[^0-9.]/g, "");
                        return (a = parseFloat(a).toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }));
                    },
                    getNumFromLocale: function (e) {
                        return parseFloat(
                            String(e || 0).replace(/[^0-9.]/g, "")
                        );
                    },
                    getInt: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0;
                        return parseInt(String(e || 0).replace(/[^0-9.]/g, ""));
                    },
                },
                y = function (e) {
                    var a = e.className,
                        t = e.placeholder,
                        n = e.label,
                        l = e.value,
                        c = e.suffix,
                        o = void 0 === c ? "" : c,
                        r = e.prefix,
                        s = void 0 === r ? "" : r,
                        m = e.type,
                        d = void 0 === m ? "string" : m,
                        p = e.onChange,
                        u = e.pdfMode,
                        g = e.isFile;
                    return i.a.createElement(
                        i.a.Fragment,
                        null,
                        u
                            ? i.a.createElement(
                                  f.Text,
                                  { style: b("span " + (a || ""), g) },
                                  (s || "") + l + (o || "")
                              )
                            : i.a.createElement(
                                  "div",
                                  null,
                                  !!n && i.a.createElement("label", null, n),
                                  i.a.createElement("input", {
                                      type: "text",
                                      className: "input " + (a || ""),
                                      placeholder: t || "",
                                      value: s + l + o || "",
                                      onKeyPress: function (e) {
                                          "number" === d && e.key
                                              ? new RegExp(/^[0-9.]$/g).test(
                                                    e.key
                                                )
                                                  ? "." === e.key &&
                                                    e.target.value.includes(
                                                        "."
                                                    ) &&
                                                    e.preventDefault()
                                                  : e.preventDefault()
                                              : "integer" === d &&
                                                (new RegExp(/^[0-9]$/g).test(
                                                    e.key
                                                ) ||
                                                    e.preventDefault());
                                      },
                                      onChange: p
                                          ? function (e) {
                                                var a = e.target.value;
                                                s && (a = a.replace(s, "")),
                                                    o && (a = a.replace(o, "")),
                                                    ("number" !== d &&
                                                        "integer" !== d) ||
                                                        ((a = a.replace(
                                                            /[^0-9.]/g,
                                                            ""
                                                        )),
                                                        (a = String(
                                                            "integer" === d
                                                                ? v.getInt(a)
                                                                : v.getNumFromLocale(
                                                                      a
                                                                  )
                                                        ))),
                                                    p(a);
                                            }
                                          : void 0,
                                  })
                              )
                    );
                },
                N = t(273),
                F = function (e) {
                    var a = e.className,
                        t = e.placeholder,
                        n = e.value,
                        l = e.onChange,
                        c = e.pdfMode,
                        o = e.rows,
                        r = e.isFile;
                    return i.a.createElement(
                        i.a.Fragment,
                        null,
                        c
                            ? i.a.createElement(
                                  f.Text,
                                  { style: b("span " + (a || ""), r) },
                                  n
                              )
                            : i.a.createElement(N.a, {
                                  minRows: o || 1,
                                  className: "input " + (a || ""),
                                  placeholder: t || "",
                                  value: n || "",
                                  onChange: l
                                      ? function (e) {
                                            return l(e.target.value);
                                        }
                                      : void 0,
                              })
                    );
                },
                w = t(258),
                x = t.n(w),
                M =
                    (t(594),
                    function (e) {
                        var a = e.className,
                            t = e.value,
                            n = e.selected,
                            l = e.onChange,
                            c = e.pdfMode,
                            o = e.isFile;
                        return i.a.createElement(
                            i.a.Fragment,
                            null,
                            c
                                ? i.a.createElement(
                                      f.Text,
                                      { style: b("span " + (a || ""), o) },
                                      t
                                  )
                                : i.a.createElement(x.a, {
                                      className: "input " + (a || ""),
                                      selected: n,
                                      onChange: l
                                          ? function (e) {
                                                return l(e);
                                            }
                                          : function (e) {
                                                return null;
                                            },
                                      dateFormat: "MMM dd, yyyy",
                                  })
                        );
                    }),
                C =
                    (t(641),
                    function (e) {
                        var a = e.className,
                            t = e.placeholder,
                            n = e.value,
                            c = e.width,
                            o = e.onChangeImage,
                            s = e.pdfMode,
                            m = e.isFile,
                            d = Object(l.useRef)(null),
                            p = function () {
                                var e;
                                null === d ||
                                    void 0 === d ||
                                    null === (e = d.current) ||
                                    void 0 === e ||
                                    e.click();
                            };
                        return s && m
                            ? n
                                ? i.a.createElement(f.Image, {
                                      style: Object(r.a)(
                                          Object(r.a)(
                                              {},
                                              b("image ".concat(a || ""))
                                          ),
                                          {},
                                          { maxWidth: c }
                                      ),
                                      src: n,
                                  })
                                : i.a.createElement(i.a.Fragment, null)
                            : s && !m
                            ? n
                                ? i.a.createElement("img", {
                                      style: Object(r.a)(
                                          Object(r.a)(
                                              {},
                                              b("image ".concat(a || ""))
                                          ),
                                          {},
                                          { maxWidth: c }
                                      ),
                                      src: n,
                                  })
                                : i.a.createElement(i.a.Fragment, null)
                            : i.a.createElement(
                                  "div",
                                  {
                                      className: "image "
                                          .concat(n ? "mb-5" : "", " ")
                                          .concat(a || ""),
                                  },
                                  n
                                      ? i.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "image__logo-wrapper",
                                            },
                                            i.a.createElement("img", {
                                                src: n,
                                                className: "image__img",
                                                alt: t,
                                                style: { maxWidth: c || 100 },
                                            }),
                                            i.a.createElement("button", {
                                                type: "button",
                                                className: "image__change",
                                                onClick: p,
                                            }),
                                            i.a.createElement("button", {
                                                type: "button",
                                                className: "image__remove",
                                                onClick: function () {
                                                    "function" === typeof o &&
                                                        o("");
                                                },
                                            })
                                        )
                                      : i.a.createElement(
                                            "button",
                                            {
                                                type: "button",
                                                className: "image__upload",
                                                onClick: p,
                                            },
                                            t
                                        ),
                                  i.a.createElement("input", {
                                      ref: d,
                                      tabIndex: -1,
                                      type: "file",
                                      accept: "image/*",
                                      className: "image__file",
                                      onChange: function () {
                                          var e;
                                          if (
                                              null === d ||
                                              void 0 === d ||
                                              null === (e = d.current) ||
                                              void 0 === e
                                                  ? void 0
                                                  : e.files
                                          ) {
                                              var a = d.current.files;
                                              if (
                                                  a.length > 0 &&
                                                  "function" === typeof o
                                              ) {
                                                  var t = new FileReader();
                                                  t.addEventListener(
                                                      "load",
                                                      function () {
                                                          "string" ===
                                                              typeof t.result &&
                                                              o(t.result);
                                                      }
                                                  ),
                                                      t.readAsDataURL(a[0]);
                                              }
                                          }
                                      },
                                  })
                              );
                    }),
                k = function (e) {
                    var a = e.pdfMode,
                        t = e.children;
                    return i.a.createElement(
                        i.a.Fragment,
                        null,
                        a
                            ? i.a.createElement(f.Document, null, t)
                            : i.a.createElement(i.a.Fragment, null, t)
                    );
                },
                A = t(259),
                O = t.n(A),
                T = function (e) {
                    var a = e.className,
                        t = e.pdfMode,
                        n = e.children;
                    return i.a.createElement(
                        i.a.Fragment,
                        null,
                        t
                            ? i.a.createElement(
                                  f.Page,
                                  { size: "A4", style: b("page " + (a || "")) },
                                  n
                              )
                            : i.a.createElement(
                                  "div",
                                  { className: "page " + (a || "") },
                                  n
                              )
                    );
                },
                j = function (e) {
                    var a = e.className,
                        t = e.style,
                        n = e.pdfMode,
                        l = e.onClick,
                        c = e.children,
                        o = e.isFile;
                    return i.a.createElement(
                        i.a.Fragment,
                        null,
                        n
                            ? i.a.createElement(
                                  f.View,
                                  {
                                      style: Object(r.a)(
                                          Object(r.a)(
                                              {},
                                              b("view " + (a || ""), o)
                                          ),
                                          t || {}
                                      ),
                                  },
                                  c
                              )
                            : i.a.createElement(
                                  "div",
                                  {
                                      style: t || {},
                                      onClick: l || void 0,
                                      className: "view " + (a || ""),
                                  },
                                  c
                              )
                    );
                },
                _ = function (e) {
                    var a = e.className,
                        t = e.pdfMode,
                        n = e.children,
                        l = e.isFile,
                        c = void 0 !== l && l;
                    return i.a.createElement(
                        i.a.Fragment,
                        null,
                        t
                            ? i.a.createElement(
                                  f.Text,
                                  { style: b("span " + (a || ""), c) },
                                  n
                              )
                            : i.a.createElement(
                                  "span",
                                  { className: "span " + (a || "") },
                                  n
                              )
                    );
                },
                L = function (e) {
                    var a = e.children,
                        t = e.className,
                        n = e.isFile,
                        l = e.labelStyle;
                    return i.a.createElement(
                        f.View,
                        { style: l },
                        i.a.createElement(
                            f.Text,
                            { style: b("span " + (t || ""), n) },
                            a
                        )
                    );
                },
                D = t(63),
                S = t(20),
                P = t(260),
                W = t.n(P),
                B = t(18),
                I = t.n(B),
                R = t(44),
                z = t.n(R);
            !(function (e) {
                (e.LEFT = "LEFT"), (e.RIGHT = "RIGHT");
            })(n || (n = {}));
            var U = function (e) {
                    var a,
                        t = e.direction,
                        l = void 0 === t ? n.LEFT : t,
                        c = e.pdfMode,
                        o = e.children,
                        r = e.className;
                    return c
                        ? i.a.createElement(f.View, { style: b(r || "") }, o)
                        : i.a.createElement(
                              "div",
                              {
                                  className: z()(
                                      I.a.editableTextWrapper,
                                      r,
                                      ((a = {}),
                                      Object(S.a)(a, I.a.right, l === n.RIGHT),
                                      Object(S.a)(a, I.a.left, l === n.LEFT),
                                      a)
                                  ),
                              },
                              i.a.createElement(
                                  "div",
                                  { className: I.a.child },
                                  o
                              ),
                              " ",
                              i.a.createElement(
                                  "div",
                                  { className: I.a.editBtnWrapper },
                                  i.a.createElement("img", {
                                      src: W.a,
                                      alt: "edit_img",
                                  })
                              )
                          );
                },
                G = function (e) {
                    var a = e.className,
                        t = e.value,
                        n = e.isFile,
                        l = e.pdfMode;
                    return t
                        ? i.a.createElement(
                              _,
                              { className: a, pdfMode: l, isFile: n },
                              t
                          )
                        : i.a.createElement(i.a.Fragment, null);
                },
                H = t(261),
                Q = t.n(H),
                V = function (e) {
                    return e.pdfMode
                        ? i.a.createElement(i.a.Fragment, null)
                        : i.a.createElement(
                              "div",
                              { className: I.a.noDataWrapper },
                              i.a.createElement(
                                  "div",
                                  null,
                                  i.a.createElement("img", {
                                      src: Q.a,
                                      alt: "icon-from",
                                  })
                              ),
                              i.a.createElement(
                                  "div",
                                  { className: "flex align-center" },
                                  i.a.createElement(
                                      "div",
                                      null,
                                      i.a.createElement(
                                          "div",
                                          { className: I.a.noDataTitle },
                                          "Add Business Details"
                                      ),
                                      i.a.createElement(
                                          "div",
                                          { className: "mt-10" },
                                          "Who is this invoice from? "
                                      )
                                  )
                              )
                          );
                },
                q = t(151),
                J = t.n(q),
                $ = t(35),
                K = t.n($),
                X = function (e) {
                    var a,
                        t = e.open,
                        n = e.onClose,
                        i = e.children,
                        c = e.headerText,
                        o = e.headerClass,
                        r = e.className,
                        s = void 0 === r ? "" : r,
                        m = e.innerClass,
                        d = void 0 === m ? "" : m,
                        p = e.closeOnOverlayClick,
                        u = void 0 !== p && p,
                        f = function (e) {
                            e.target === e.currentTarget && u && n();
                        },
                        g = z()(
                            ((a = {}),
                            Object(S.a)(a, s, !0),
                            Object(S.a)(a, K.a.modal, !0),
                            Object(S.a)(a, K.a.open, t),
                            Object(S.a)(a, K.a.backdrop, !0),
                            a)
                        );
                    return l.createElement(
                        l.Fragment,
                        null,
                        t &&
                            l.createElement(
                                "div",
                                { className: g, onClick: f },
                                l.createElement(
                                    "div",
                                    {
                                        className:
                                            K.a.inner + (d ? " " + d : ""),
                                    },
                                    !!c &&
                                        l.createElement(
                                            "div",
                                            {
                                                className:
                                                    K.a.header +
                                                    (o ? " " + o : ""),
                                            },
                                            l.createElement("div", null, c),
                                            l.createElement(
                                                "div",
                                                null,
                                                l.createElement("img", {
                                                    className: K.a.closeIcon,
                                                    src: J.a,
                                                    alt: "close-icon",
                                                    onClick: f,
                                                })
                                            ),
                                            " "
                                        ),
                                    !c &&
                                        l.createElement(
                                            "div",
                                            {
                                                className:
                                                    K.a.header +
                                                    (o ? " " + o : ""),
                                            },
                                            l.createElement(
                                                "div",
                                                null,
                                                l.createElement("img", {
                                                    className: K.a.closeIcon,
                                                    src: J.a,
                                                    alt: "close-icon",
                                                    onClick: f,
                                                })
                                            )
                                        ),
                                    l.createElement(
                                        "div",
                                        { className: K.a.innerContent },
                                        i
                                    )
                                )
                            )
                    );
                },
                Y = function (e) {
                    var a = e.className;
                    return i.a.createElement(
                        "button",
                        Object.assign({}, e, {
                            className: "button__blue" + (" " + a || !1),
                        })
                    );
                },
                Z = function (e) {
                    var a = e.invoice,
                        t = e.pdfMode,
                        n = e.isFile,
                        c = void 0 !== n && n,
                        o = e.handleChange,
                        m = (e.children, e.className, Object(l.useState)(!1)),
                        d = Object(s.a)(m, 2),
                        p = d[0],
                        u = d[1],
                        f = Object(l.useState)({
                            companyName: a.companyName,
                            name: a.name,
                            companyPhone: a.companyPhone,
                            companyMobile: a.companyMobile,
                            companyEmail: a.companyEmail,
                            companyWebsite: a.companyWebsite,
                            companyAddress: a.companyAddress,
                            companyAddress2: a.companyAddress2,
                        }),
                        g = Object(s.a)(f, 2),
                        E = g[0],
                        h = g[1],
                        b = function (e, a) {
                            var t = Object(r.a)({}, E);
                            (t[e] = a), h(t);
                        },
                        v = [
                            "companyName",
                            "name",
                            "companyPhone",
                            "companyMobile",
                            "companyEmail",
                            "companyWebsite",
                            "companyAddress",
                            "companyAddress2",
                        ].filter(function (e) {
                            return !!a[e];
                        });
                    return i.a.createElement(
                        j,
                        { className: "w-50", pdfMode: t },
                        i.a.createElement(
                            j,
                            {
                                onClick: function () {
                                    return u(!p);
                                },
                            },
                            i.a.createElement(
                                _,
                                {
                                    className: "left black title",
                                    pdfMode: t,
                                    isFile: c,
                                },
                                a.billFrom
                            ),
                            v.length
                                ? i.a.createElement(
                                      U,
                                      { pdfMode: t },
                                      i.a.createElement(G, {
                                          pdfMode: t,
                                          isFile: c,
                                          className: "sub-title left",
                                          value: a.companyName,
                                      }),
                                      i.a.createElement(G, {
                                          pdfMode: t,
                                          isFile: c,
                                          value: a.name,
                                      }),
                                      i.a.createElement(G, {
                                          pdfMode: t,
                                          isFile: c,
                                          value: a.companyPhone,
                                      }),
                                      i.a.createElement(G, {
                                          pdfMode: t,
                                          isFile: c,
                                          value: a.companyMobile,
                                      }),
                                      i.a.createElement(G, {
                                          pdfMode: t,
                                          isFile: c,
                                          value: a.companyEmail,
                                      }),
                                      i.a.createElement(G, {
                                          pdfMode: t,
                                          isFile: c,
                                          value: a.companyWebsite,
                                      }),
                                      i.a.createElement(G, {
                                          pdfMode: t,
                                          isFile: c,
                                          value: a.companyAddress,
                                      }),
                                      i.a.createElement(G, {
                                          pdfMode: t,
                                          isFile: c,
                                          value: a.companyAddress2,
                                      })
                                  )
                                : i.a.createElement(V, { pdfMode: t })
                        ),
                        !t &&
                            i.a.createElement(
                                X,
                                {
                                    headerText: "From",
                                    closeOnOverlayClick: !0,
                                    open: p,
                                    onClose: function () {
                                        return u(!1);
                                    },
                                },
                                i.a.createElement(
                                    "div",
                                    { className: "modal__child-wrapper" },
                                    i.a.createElement(
                                        "div",
                                        { className: "mw-50" },
                                        i.a.createElement(y, {
                                            label: "Business Name",
                                            value: E.companyName,
                                            onChange: function (e) {
                                                return b("companyName", e);
                                            },
                                        }),
                                        i.a.createElement(y, {
                                            label: "Owner name",
                                            value: E.name,
                                            onChange: function (e) {
                                                return b("name", e);
                                            },
                                        })
                                    ),
                                    i.a.createElement(
                                        "div",
                                        { className: "mw-50" },
                                        i.a.createElement(y, {
                                            label: "Phone",
                                            value: E.companyPhone,
                                            onChange: function (e) {
                                                return b("companyPhone", e);
                                            },
                                        }),
                                        i.a.createElement(y, {
                                            label: "Mobile",
                                            value: E.companyMobile,
                                            onChange: function (e) {
                                                return b("companyMobile", e);
                                            },
                                        })
                                    ),
                                    i.a.createElement(
                                        "div",
                                        { className: "mw-50" },
                                        i.a.createElement(y, {
                                            label: "Email",
                                            value: E.companyEmail,
                                            onChange: function (e) {
                                                return b("companyEmail", e);
                                            },
                                        }),
                                        i.a.createElement(y, {
                                            label: "Website",
                                            value: E.companyWebsite,
                                            onChange: function (e) {
                                                return b("companyWebsite", e);
                                            },
                                        })
                                    ),
                                    i.a.createElement(y, {
                                        label: "Address",
                                        value: E.companyAddress,
                                        onChange: function (e) {
                                            return b("companyAddress", e);
                                        },
                                    }),
                                    i.a.createElement(y, {
                                        label: "Address 2",
                                        value: E.companyAddress2,
                                        onChange: function (e) {
                                            return b("companyAddress2", e);
                                        },
                                    }),
                                    i.a.createElement(
                                        Y,
                                        {
                                            className: "mt-40 m-auto",
                                            onClick: function () {
                                                o(E), u(!1);
                                            },
                                        },
                                        v.length ? "Edit" : "Add",
                                        " Business Details"
                                    )
                                )
                            )
                    );
                },
                ee = t(262),
                ae = t.n(ee),
                te = function (e) {
                    return e.pdfMode
                        ? i.a.createElement(i.a.Fragment, null)
                        : i.a.createElement(
                              "div",
                              { className: I.a.noDataWrapper },
                              i.a.createElement(
                                  "div",
                                  null,
                                  i.a.createElement("img", {
                                      src: ae.a,
                                      alt: "icon-to",
                                  })
                              ),
                              i.a.createElement(
                                  "div",
                                  { className: "flex align-center" },
                                  i.a.createElement(
                                      "div",
                                      null,
                                      i.a.createElement(
                                          "div",
                                          { className: I.a.noDataTitle },
                                          "Add Client"
                                      ),
                                      i.a.createElement(
                                          "div",
                                          { className: "mt-10" },
                                          "Who is this invoice to?"
                                      )
                                  )
                              )
                          );
                },
                ne = t(263),
                le = t.n(ne),
                ie = function (e) {
                    var a = e.invoice,
                        t = e.pdfMode,
                        c = e.isFile,
                        o = (e.children, e.className, e.handleChange),
                        m = Object(l.useState)(!1),
                        d = Object(s.a)(m, 2),
                        p = d[0],
                        u = d[1],
                        f = Object(l.useState)(!1),
                        g = Object(s.a)(f, 2),
                        E = g[0],
                        h = g[1],
                        b = Object(l.useState)({
                            clientName: a.clientName,
                            clientMobile: a.clientMobile,
                            clientPhone: a.clientPhone,
                            clientEmail: a.clientEmail,
                            clientAddress: a.clientAddress,
                            clientAddress2: a.clientAddress2,
                            shippingAddress: a.shippingAddress,
                            trackingN: a.trackingN,
                        }),
                        v = Object(s.a)(b, 2),
                        N = v[0],
                        F = v[1],
                        w = function (e, a) {
                            var t = Object(r.a)({}, N);
                            (t[e] = a), F(t);
                        },
                        x = [
                            "clientName",
                            "clientMobile",
                            "clientPhone",
                            "clientEmail",
                            "clientAddress",
                            "clientAddress2",
                        ].filter(function (e) {
                            return !!a[e];
                        }),
                        M = ["shippingAddress", "trackingN"].filter(function (
                            e
                        ) {
                            return !!a[e];
                        });
                    return i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                            j,
                            { className: "w-50", pdfMode: t },
                            !(!x.length && M.length) &&
                                i.a.createElement(
                                    j,
                                    {
                                        onClick: function () {
                                            h(!!M.length), u(!p);
                                        },
                                    },
                                    i.a.createElement(
                                        _,
                                        {
                                            className: "right title black",
                                            pdfMode: t,
                                            isFile: c,
                                        },
                                        a.billTo
                                    ),
                                    x.length
                                        ? i.a.createElement(
                                              U,
                                              {
                                                  pdfMode: t,
                                                  direction: n.RIGHT,
                                              },
                                              i.a.createElement(G, {
                                                  pdfMode: t,
                                                  isFile: c,
                                                  className: "right sub-title",
                                                  value: a.clientName,
                                              }),
                                              i.a.createElement(G, {
                                                  pdfMode: t,
                                                  isFile: c,
                                                  className: "right",
                                                  value: a.clientMobile,
                                              }),
                                              i.a.createElement(G, {
                                                  pdfMode: t,
                                                  isFile: c,
                                                  className: "right",
                                                  value: a.clientPhone,
                                              }),
                                              i.a.createElement(G, {
                                                  pdfMode: t,
                                                  isFile: c,
                                                  className: "right",
                                                  value: a.clientEmail,
                                              }),
                                              i.a.createElement(G, {
                                                  pdfMode: t,
                                                  isFile: c,
                                                  className: "right",
                                                  value: a.clientAddress,
                                              }),
                                              i.a.createElement(G, {
                                                  pdfMode: t,
                                                  isFile: c,
                                                  className: "right",
                                                  value: a.clientAddress2,
                                              })
                                          )
                                        : i.a.createElement(te, { pdfMode: t })
                                ),
                            !!M.length &&
                                i.a.createElement(
                                    j,
                                    {
                                        onClick: function () {
                                            h(!!M.length), u(!p);
                                        },
                                    },
                                    i.a.createElement(
                                        _,
                                        {
                                            className:
                                                "right title black" +
                                                (x.length ? " mt-20" : ""),
                                            pdfMode: t,
                                            isFile: c,
                                        },
                                        a.shipTo
                                    ),
                                    i.a.createElement(
                                        U,
                                        { pdfMode: t, direction: n.RIGHT },
                                        i.a.createElement(G, {
                                            pdfMode: t,
                                            isFile: c,
                                            className: "right",
                                            value: a.shippingAddress,
                                        }),
                                        i.a.createElement(G, {
                                            pdfMode: t,
                                            isFile: c,
                                            className: "right",
                                            value: a.trackingN,
                                        })
                                    )
                                ),
                            !t &&
                                i.a.createElement(
                                    X,
                                    {
                                        headerText: "Bill to",
                                        closeOnOverlayClick: !0,
                                        open: p,
                                        onClose: function () {
                                            u(!1);
                                        },
                                    },
                                    i.a.createElement(
                                        "div",
                                        { className: "modal__child-wrapper" },
                                        i.a.createElement(
                                            "div",
                                            { className: "mw-50" },
                                            i.a.createElement(y, {
                                                label: "Business Name",
                                                value: N.clientName,
                                                onChange: function (e) {
                                                    return w("clientName", e);
                                                },
                                            }),
                                            " ",
                                            i.a.createElement(y, {
                                                label: "Phone",
                                                value: N.clientPhone,
                                                onChange: function (e) {
                                                    return w("clientPhone", e);
                                                },
                                            })
                                        ),
                                        i.a.createElement(
                                            "div",
                                            { className: "mw-50" },
                                            i.a.createElement(y, {
                                                label: "Mobile",
                                                value: N.clientMobile,
                                                onChange: function (e) {
                                                    return w("clientMobile", e);
                                                },
                                            }),
                                            i.a.createElement(y, {
                                                label: "Email",
                                                value: N.clientEmail,
                                                onChange: function (e) {
                                                    return w("clientEmail", e);
                                                },
                                            })
                                        ),
                                        i.a.createElement(y, {
                                            label: "Address 1",
                                            value: N.clientAddress,
                                            onChange: function (e) {
                                                return w("clientAddress", e);
                                            },
                                        }),
                                        i.a.createElement(y, {
                                            label: "Address 2",
                                            value: N.clientAddress2,
                                            onChange: function (e) {
                                                return w("clientAddress2", e);
                                            },
                                        }),
                                        !E &&
                                            i.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        I.a.addBtnWrapper +
                                                        " no-select",
                                                    onClick: function () {
                                                        return h(!0);
                                                    },
                                                },
                                                i.a.createElement("img", {
                                                    src: le.a,
                                                    alt: "plus icon",
                                                }),
                                                i.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            I.a
                                                                .addBtnWrapperText,
                                                    },
                                                    " Add shipping information"
                                                )
                                            ),
                                        E &&
                                            i.a.createElement(
                                                i.a.Fragment,
                                                null,
                                                i.a.createElement(y, {
                                                    label: "Shipping address",
                                                    value: N.shippingAddress,
                                                    onChange: function (e) {
                                                        return w(
                                                            "shippingAddress",
                                                            e
                                                        );
                                                    },
                                                }),
                                                i.a.createElement(
                                                    "div",
                                                    { className: "mw-50" },
                                                    i.a.createElement(y, {
                                                        label: "Tracking #",
                                                        value: N.trackingN,
                                                        onChange: function (e) {
                                                            return w(
                                                                "trackingN",
                                                                e
                                                            );
                                                        },
                                                    })
                                                )
                                            ),
                                        i.a.createElement(
                                            Y,
                                            {
                                                className: "mt-20 m-auto",
                                                onClick: function () {
                                                    o(N), u(!1);
                                                },
                                            },
                                            x.length || M.length
                                                ? "Edit"
                                                : "Add",
                                            " Client"
                                        )
                                    )
                                )
                        )
                    );
                },
                ce = t(264),
                oe = t.n(ce),
                re = function (e) {
                    return e.pdfMode
                        ? i.a.createElement(i.a.Fragment, null)
                        : i.a.createElement(
                              "div",
                              {
                                  className: z()(
                                      I.a.noDataWrapper,
                                      I.a.payBlock,
                                      "flex align-center flex-col justify-center"
                                  ),
                              },
                              i.a.createElement(
                                  "div",
                                  null,
                                  i.a.createElement("img", {
                                      src: oe.a,
                                      alt: "icon-pay",
                                  })
                              ),
                              i.a.createElement(
                                  "div",
                                  { className: I.a.noDataTitle },
                                  "Add Payment Options"
                              )
                          );
                },
                se = function (e) {
                    var a = e.invoice,
                        t = e.pdfMode,
                        n = e.isFile,
                        c = e.handleChange,
                        o = Object(l.useState)(!1),
                        m = Object(s.a)(o, 2),
                        d = m[0],
                        p = m[1],
                        u = Object(l.useState)({
                            payEmail: a.payEmail,
                            payPayableTo: a.payPayableTo,
                            payBankTransfer: a.payBankTransfer,
                            payOther: a.payOther,
                        }),
                        f = Object(s.a)(u, 2),
                        g = f[0],
                        E = f[1],
                        h = function (e, a) {
                            var t = Object(r.a)({}, g);
                            (t[e] = a), E(t);
                        },
                        b = [
                            "payEmail",
                            "payPayableTo",
                            "payBankTransfer",
                            "payOther",
                        ].filter(function (e) {
                            return !!a[e];
                        });
                    return !b.length && t
                        ? i.a.createElement(i.a.Fragment, null)
                        : i.a.createElement(
                              j,
                              { style: { maxWidth: "300px" } },
                              i.a.createElement(
                                  j,
                                  {
                                      onClick: function () {
                                          return p(!d);
                                      },
                                  },
                                  i.a.createElement(
                                      _,
                                      {
                                          className: "black title",
                                          pdfMode: t,
                                          isFile: n,
                                      },
                                      a.paymentLabel
                                  ),
                                  b.length
                                      ? i.a.createElement(
                                            U,
                                            { pdfMode: t },
                                            i.a.createElement(
                                                j,
                                                {
                                                    className:
                                                        "mb-0__last-child",
                                                },
                                                !!a.payEmail &&
                                                    i.a.createElement(
                                                        j,
                                                        { className: "mb-21" },
                                                        i.a.createElement(G, {
                                                            pdfMode: t,
                                                            isFile: n,
                                                            value: "Paypal email",
                                                        }),
                                                        i.a.createElement(G, {
                                                            pdfMode: t,
                                                            isFile: n,
                                                            value:
                                                                a.payEmail ||
                                                                "",
                                                        })
                                                    ),
                                                !!a.payPayableTo &&
                                                    i.a.createElement(
                                                        j,
                                                        { className: "mb-21" },
                                                        i.a.createElement(G, {
                                                            pdfMode: t,
                                                            isFile: n,
                                                            value: "Make checks payable to",
                                                        }),
                                                        i.a.createElement(G, {
                                                            pdfMode: t,
                                                            isFile: n,
                                                            value:
                                                                a.payPayableTo ||
                                                                "",
                                                        })
                                                    ),
                                                !!a.payBankTransfer &&
                                                    i.a.createElement(
                                                        j,
                                                        { className: "mb-21" },
                                                        i.a.createElement(G, {
                                                            pdfMode: t,
                                                            isFile: n,
                                                            value: "Bank transfer",
                                                        }),
                                                        i.a.createElement(G, {
                                                            pdfMode: t,
                                                            isFile: n,
                                                            value: a.payBankTransfer,
                                                        })
                                                    ),
                                                !!a.payOther &&
                                                    i.a.createElement(
                                                        j,
                                                        null,
                                                        i.a.createElement(G, {
                                                            pdfMode: t,
                                                            isFile: n,
                                                            value: "Other",
                                                        }),
                                                        i.a.createElement(G, {
                                                            pdfMode: t,
                                                            isFile: n,
                                                            value: a.payOther,
                                                        })
                                                    )
                                            )
                                        )
                                      : i.a.createElement(
                                            j,
                                            null,
                                            i.a.createElement(re, {
                                                pdfMode: t,
                                            })
                                        )
                              ),
                              !t &&
                                  i.a.createElement(
                                      X,
                                      {
                                          headerText: "Payment instruction",
                                          closeOnOverlayClick: !0,
                                          open: d,
                                          onClose: function () {
                                              return p(!1);
                                          },
                                      },
                                      i.a.createElement(
                                          j,
                                          { className: "modal__child-wrapper" },
                                          i.a.createElement(
                                              j,
                                              { className: "mw-50" },
                                              i.a.createElement(y, {
                                                  label: "Paypal email",
                                                  value: g.payEmail,
                                                  onChange: function (e) {
                                                      return h("payEmail", e);
                                                  },
                                              }),
                                              i.a.createElement(y, {
                                                  label: "Make checks payable to",
                                                  value: g.payPayableTo,
                                                  onChange: function (e) {
                                                      return h(
                                                          "payPayableTo",
                                                          e
                                                      );
                                                  },
                                              })
                                          ),
                                          i.a.createElement(
                                              j,
                                              { className: "mw-50" },
                                              i.a.createElement(
                                                  j,
                                                  null,
                                                  i.a.createElement(
                                                      L,
                                                      null,
                                                      "Bank transfer"
                                                  ),
                                                  i.a.createElement(F, {
                                                      className: "w-100",
                                                      rows: 2,
                                                      value: g.payBankTransfer,
                                                      onChange: function (e) {
                                                          return h(
                                                              "payBankTransfer",
                                                              e
                                                          );
                                                      },
                                                  })
                                              ),
                                              i.a.createElement(
                                                  j,
                                                  null,
                                                  i.a.createElement(
                                                      L,
                                                      null,
                                                      "Bank Other"
                                                  ),
                                                  i.a.createElement(F, {
                                                      className: "w-100",
                                                      rows: 2,
                                                      value: g.payOther,
                                                      onChange: function (e) {
                                                          return h(
                                                              "payOther",
                                                              e
                                                          );
                                                      },
                                                  })
                                              )
                                          ),
                                          i.a.createElement(
                                              Y,
                                              {
                                                  className: "mt-40 m-auto",
                                                  onClick: function () {
                                                      c(g), p(!1);
                                                  },
                                              },
                                              b.length ? "Edit" : "Add",
                                              " Payment instruction"
                                          )
                                      )
                                  )
                          );
                },
                me = t(649),
                de = function (e) {
                    var a = e.className,
                        t = e.options,
                        n = e.placeholder,
                        l = e.value,
                        c = e.onChange,
                        o = e.pdfMode,
                        r = e.isFile;
                    return i.a.createElement(
                        i.a.Fragment,
                        null,
                        o
                            ? i.a.createElement(
                                  f.Text,
                                  { style: b("span " + (a || ""), r) },
                                  l
                              )
                            : i.a.createElement(me.a, {
                                  closeOnSelect: !0,
                                  id: "test-id",
                                  options: t,
                                  placeholder: n,
                                  onChange: c,
                                  printOptions: "auto",
                                  search: !0,
                              })
                    );
                },
                pe = t(265),
                ue = t.n(pe),
                fe = t(266),
                ge = t.n(fe),
                Ee = t(267),
                he = t.n(Ee),
                be = t(268),
                ve = t.n(be);
            f.Font.register({
                family: "Graphik",
                fonts: [
                    { src: ue.a },
                    { src: ge.a, fontWeight: 500 },
                    { src: he.a, fontWeight: 600 },
                    { src: ve.a, fontWeight: 700 },
                ],
            });
            var ye = function (e) {
                    var a = e.invoice,
                        t = e.pdfMode,
                        n = void 0 !== t && t,
                        c = e.isFile,
                        o = e.setInvoice,
                        u = Object(l.useState)(),
                        f = Object(s.a)(u, 2),
                        g = f[0],
                        E = f[1],
                        h = Object(l.useState)(),
                        b = Object(s.a)(h, 2),
                        N = b[0],
                        w = b[1],
                        x = Object(l.useState)(),
                        A = Object(s.a)(x, 2),
                        S = A[0],
                        P = A[1],
                        W = Object(l.useState)(!1),
                        B = Object(s.a)(W, 2),
                        R = B[0],
                        z = B[1],
                        U = !!v.getNumFromLocale(a.amountPaid),
                        G =
                            "" !== a.invoiceDate
                                ? new Date(a.invoiceDate)
                                : new Date(),
                        H =
                            "" !== a.invoiceDueDate
                                ? new Date(a.invoiceDueDate)
                                : new Date(G.valueOf());
                    "" === a.invoiceDueDate && H.setDate(H.getDate() + 30);
                    var Q = (S || 0) - v.getNumFromLocale(a.amountPaid) || 0,
                        V = function (e) {
                            var a = e.subTotal,
                                t = void 0 === a ? 0 : a,
                                n = e.discountAmount,
                                l = void 0 === n ? 0 : n,
                                i = e.shippingCostAmount,
                                c = void 0 === i ? 0 : i,
                                o = e.taxAmount,
                                r = t - l + c + (void 0 === o ? 0 : o);
                            return P(r), z(t < l), r;
                        },
                        q = function (e, t) {
                            if ("productLines" !== e) {
                                var n = Object(r.a)({}, a),
                                    l = t;
                                "discountPercentage" === e ||
                                "discountAmount" === e ||
                                "shippingCostAmount" === e
                                    ? ("discountPercentage" === e
                                          ? ((l = Number(
                                                t < 0
                                                    ? "0"
                                                    : t > 100
                                                    ? "100"
                                                    : t
                                            ).toFixed(2)),
                                            (n.discountAmount = Number(
                                                (g || 0) *
                                                    ((v.getNumFromLocale(
                                                        l || "0"
                                                    ) || 0) /
                                                        100)
                                            ).toFixed(2)),
                                            (n.discountPercentage = l))
                                          : "discountAmount" === e
                                          ? ((l = Number(t).toFixed(2)),
                                            (n.discountPercentage = Number(
                                                g
                                                    ? ((v.getNumFromLocale(
                                                          t || "0"
                                                      ) || 0) /
                                                          (g || 0)) *
                                                          100
                                                    : "0"
                                            ).toFixed(2)),
                                            (n.discountAmount = l))
                                          : "shippingCostAmount" === e &&
                                            (n[e] = l),
                                      V({
                                          subTotal: g,
                                          discountAmount: v.getNumFromLocale(
                                              n.discountAmount
                                          ),
                                          shippingCostAmount:
                                              v.getNumFromLocale(
                                                  "shippingCostAmount" === e
                                                      ? t
                                                      : a.shippingCostAmount
                                              ),
                                          taxAmount: N,
                                      }))
                                    : (n[e] = l),
                                    o && o(n);
                            }
                        },
                        J = function (e) {
                            var t = Object(r.a)(Object(r.a)({}, a), e);
                            o && o(t);
                        },
                        $ = function (e, t, n) {
                            var l = a.productLines.map(function (a, l) {
                                if (l === e) {
                                    var i = Object(r.a)({}, a);
                                    return (i[t] = n), i;
                                }
                                return Object(r.a)({}, a);
                            });
                            o &&
                                o(
                                    Object(r.a)(
                                        Object(r.a)({}, a),
                                        {},
                                        { productLines: l }
                                    )
                                );
                        };
                    return (
                        Object(l.useEffect)(
                            function () {
                                var e = 0,
                                    t = 0;
                                a.productLines.forEach(function (a) {
                                    var n = v.getNumFromLocale(a.quantity),
                                        l = v.getNumFromLocale(a.rate),
                                        i = v.getInt(a.tax) / 100,
                                        c = n && l ? n * l : 0;
                                    (e += c), (t += i ? c * i : 0);
                                }),
                                    E(e),
                                    w(t),
                                    V({
                                        subTotal: e,
                                        discountAmount: v.getNumFromLocale(
                                            a.discountAmount
                                        ),
                                        shippingCostAmount: v.getNumFromLocale(
                                            a.shippingCostAmount
                                        ),
                                        taxAmount: t,
                                    });
                            },
                            [a.productLines]
                        ),
                        i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(
                                k,
                                { pdfMode: n },
                                i.a.createElement(
                                    T,
                                    {
                                        className: "invoice-wrapper",
                                        pdfMode: n,
                                    },
                                    i.a.createElement(
                                        j,
                                        {
                                            isFile: c,
                                            className:
                                                "flex justify-space-between",
                                            pdfMode: n,
                                        },
                                        i.a.createElement(
                                            j,
                                            {
                                                isFile: c,
                                                className: "w-50",
                                                pdfMode: n,
                                            },
                                            i.a.createElement(C, {
                                                className: "logo",
                                                placeholder: i.a.createElement(
                                                    "div",
                                                    null,
                                                    i.a.createElement("img", {
                                                        src: O.a,
                                                        alt: "",
                                                    }),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "Add Logo"
                                                    )
                                                ),
                                                value: a.logo,
                                                width: 100,
                                                pdfMode: n,
                                                isFile: c,
                                                onChangeImage: function (e) {
                                                    return q("logo", e);
                                                },
                                            })
                                        ),
                                        i.a.createElement(
                                            j,
                                            {
                                                isFile: c,
                                                className: n ? "w-40" : "w-50",
                                                pdfMode: n,
                                            },
                                            i.a.createElement(
                                                j,
                                                {
                                                    isFile: c,
                                                    className: "mb-5",
                                                    pdfMode: n,
                                                },
                                                i.a.createElement(y, {
                                                    className:
                                                        "right document-type mb-26",
                                                    placeholder: "Invoice",
                                                    isFile: c,
                                                    value: a.documentType,
                                                    onChange: function (e) {
                                                        return q(
                                                            "documentType",
                                                            e
                                                        );
                                                    },
                                                    pdfMode: n,
                                                })
                                            ),
                                            i.a.createElement(
                                                j,
                                                {
                                                    isFile: c,
                                                    className:
                                                        "flex align-center mb-5",
                                                    pdfMode: n,
                                                },
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className: "w-40",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(
                                                        L,
                                                        {
                                                            isFile: c,
                                                            className:
                                                                "feature",
                                                        },
                                                        a.invoiceTitleLabel
                                                    )
                                                ),
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className: "w-60",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(y, {
                                                        className: "right",
                                                        isFile: c,
                                                        placeholder: "INV-000",
                                                        value: a.invoiceTitle,
                                                        onChange: function (e) {
                                                            return q(
                                                                "invoiceTitle",
                                                                e
                                                            );
                                                        },
                                                        pdfMode: n,
                                                    })
                                                )
                                            ),
                                            i.a.createElement(
                                                j,
                                                {
                                                    isFile: c,
                                                    className:
                                                        "flex align-center mb-5",
                                                    pdfMode: n,
                                                },
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className: "w-40",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(
                                                        L,
                                                        {
                                                            isFile: c,
                                                            className:
                                                                "feature",
                                                        },
                                                        a.invoiceDateLabel
                                                    )
                                                ),
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className: "w-60",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(M, {
                                                        className: "right",
                                                        isFile: c,
                                                        value: Object(
                                                            D.default
                                                        )(G, "MMM dd, yyyy"),
                                                        selected: G,
                                                        onChange: function (e) {
                                                            return q(
                                                                "invoiceDate",
                                                                e &&
                                                                    !Array.isArray(
                                                                        e
                                                                    )
                                                                    ? Object(
                                                                          D.default
                                                                      )(
                                                                          e,
                                                                          "MMM dd, yyyy"
                                                                      )
                                                                    : ""
                                                            );
                                                        },
                                                        pdfMode: n,
                                                    })
                                                )
                                            ),
                                            i.a.createElement(
                                                j,
                                                {
                                                    isFile: c,
                                                    className:
                                                        "flex align-center mb-5",
                                                    pdfMode: n,
                                                },
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className: "w-40",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(
                                                        L,
                                                        {
                                                            isFile: c,
                                                            className:
                                                                "feature",
                                                        },
                                                        a.invoiceDueDateLabel
                                                    )
                                                ),
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className: "w-60",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(M, {
                                                        className: "right",
                                                        isFile: c,
                                                        value: Object(
                                                            D.default
                                                        )(H, "MMM dd, yyyy"),
                                                        selected: H,
                                                        onChange: function (e) {
                                                            return q(
                                                                "invoiceDueDate",
                                                                e &&
                                                                    !Array.isArray(
                                                                        e
                                                                    )
                                                                    ? Object(
                                                                          D.default
                                                                      )(
                                                                          e,
                                                                          "MMM dd, yyyy"
                                                                      )
                                                                    : ""
                                                            );
                                                        },
                                                        pdfMode: n,
                                                    })
                                                )
                                            )
                                        )
                                    ),
                                    i.a.createElement(
                                        j,
                                        {
                                            isFile: c,
                                            className: "flex gap-30 mt-40",
                                            pdfMode: n,
                                        },
                                        i.a.createElement(Z, {
                                            isFile: c,
                                            invoice: a,
                                            pdfMode: n,
                                            handleChange: J,
                                        }),
                                        i.a.createElement(ie, {
                                            isFile: c,
                                            invoice: a,
                                            pdfMode: n,
                                            handleChange: J,
                                        })
                                    ),
                                    i.a.createElement(
                                        j,
                                        {
                                            isFile: c,
                                            className:
                                                "mt-30 bg-dark flex mb-5 fs-13",
                                            pdfMode: n,
                                        },
                                        i.a.createElement(
                                            j,
                                            {
                                                isFile: c,
                                                className: "w-38 p-4-13",
                                                pdfMode: n,
                                            },
                                            i.a.createElement(
                                                _,
                                                {
                                                    isFile: c,
                                                    className:
                                                        "left light-bold white",
                                                    pdfMode: n,
                                                },
                                                a.productLineDescription
                                            )
                                        ),
                                        i.a.createElement(
                                            j,
                                            {
                                                isFile: c,
                                                className: "w-17 p-4-13",
                                                pdfMode: n,
                                            },
                                            i.a.createElement(
                                                _,
                                                {
                                                    isFile: c,
                                                    className:
                                                        "right light-bold white",
                                                    pdfMode: n,
                                                },
                                                a.productLineQuantityRate +
                                                    ", " +
                                                    a.currency
                                            )
                                        ),
                                        i.a.createElement(
                                            j,
                                            {
                                                isFile: c,
                                                className: "w-17 p-4-13",
                                                pdfMode: n,
                                            },
                                            i.a.createElement(
                                                _,
                                                {
                                                    isFile: c,
                                                    className:
                                                        "right light-bold white",
                                                    pdfMode: n,
                                                },
                                                a.productLineQuantity
                                            )
                                        ),
                                        i.a.createElement(
                                            j,
                                            {
                                                isFile: c,
                                                className: "w-17 p-4-13",
                                                pdfMode: n,
                                            },
                                            i.a.createElement(
                                                _,
                                                {
                                                    isFile: c,
                                                    className:
                                                        "right light-bold white",
                                                    pdfMode: n,
                                                },
                                                a.productLineTax
                                            )
                                        ),
                                        i.a.createElement(
                                            j,
                                            {
                                                isFile: c,
                                                className: "w-18 p-4-13",
                                                pdfMode: n,
                                            },
                                            i.a.createElement(
                                                _,
                                                {
                                                    isFile: c,
                                                    className:
                                                        "right light-bold white",
                                                    pdfMode: n,
                                                },
                                                a.productLineQuantityAmount +
                                                    ", " +
                                                    a.currency
                                            )
                                        )
                                    ),
                                    a.productLines.map(function (e, t) {
                                        return n && "" === e.title
                                            ? i.a.createElement(_, {
                                                  isFile: c,
                                                  key: t,
                                              })
                                            : i.a.createElement(
                                                  j,
                                                  {
                                                      isFile: c,
                                                      key: t,
                                                      className: "row flex",
                                                      pdfMode: n,
                                                  },
                                                  i.a.createElement(
                                                      j,
                                                      {
                                                          isFile: c,
                                                          className:
                                                              "w-38 p-4-13 pb-10",
                                                          pdfMode: n,
                                                      },
                                                      i.a.createElement(
                                                          j,
                                                          {
                                                              isFile: c,
                                                              className: "mb-5",
                                                          },
                                                          i.a.createElement(y, {
                                                              className:
                                                                  "word-break",
                                                              isFile: c,
                                                              value: e.title,
                                                              placeholder:
                                                                  "Title",
                                                              onChange:
                                                                  function (e) {
                                                                      return $(
                                                                          t,
                                                                          "title",
                                                                          e
                                                                      );
                                                                  },
                                                              pdfMode: n,
                                                          })
                                                      ),
                                                      i.a.createElement(F, {
                                                          className: "dark",
                                                          isFile: c,
                                                          rows: 2,
                                                          placeholder:
                                                              "Additional details",
                                                          value: e.description,
                                                          onChange: function (
                                                              e
                                                          ) {
                                                              return $(
                                                                  t,
                                                                  "description",
                                                                  e
                                                              );
                                                          },
                                                          pdfMode: n,
                                                      })
                                                  ),
                                                  i.a.createElement(
                                                      j,
                                                      {
                                                          isFile: c,
                                                          className:
                                                              "w-17 p-4-13 pb-10",
                                                          pdfMode: n,
                                                      },
                                                      i.a.createElement(y, {
                                                          className: " right",
                                                          isFile: c,
                                                          value: e.rate,
                                                          type: "number",
                                                          onChange: function (
                                                              e
                                                          ) {
                                                              return $(
                                                                  t,
                                                                  "rate",
                                                                  e
                                                              );
                                                          },
                                                          pdfMode: n,
                                                      })
                                                  ),
                                                  i.a.createElement(
                                                      j,
                                                      {
                                                          isFile: c,
                                                          className:
                                                              "w-17 p-4-13 pb-10",
                                                          pdfMode: n,
                                                      },
                                                      i.a.createElement(y, {
                                                          className: " right",
                                                          isFile: c,
                                                          value: e.quantity,
                                                          type: "integer",
                                                          onChange: function (
                                                              e
                                                          ) {
                                                              return $(
                                                                  t,
                                                                  "quantity",
                                                                  e,
                                                                  !0
                                                              );
                                                          },
                                                          pdfMode: n,
                                                      })
                                                  ),
                                                  i.a.createElement(
                                                      j,
                                                      {
                                                          isFile: c,
                                                          className:
                                                              "w-17 p-4-13 pb-10",
                                                          pdfMode: n,
                                                      },
                                                      i.a.createElement(y, {
                                                          className: " right",
                                                          isFile: c,
                                                          value: e.tax,
                                                          suffix: "%",
                                                          type: "integer",
                                                          onChange: function (
                                                              e
                                                          ) {
                                                              return $(
                                                                  t,
                                                                  "tax",
                                                                  e,
                                                                  !0
                                                              );
                                                          },
                                                          pdfMode: n,
                                                      })
                                                  ),
                                                  i.a.createElement(
                                                      j,
                                                      {
                                                          isFile: c,
                                                          className:
                                                              "w-18 p-4-13 pb-10",
                                                          pdfMode: n,
                                                      },
                                                      i.a.createElement(
                                                          _,
                                                          {
                                                              isFile: c,
                                                              className:
                                                                  " right",
                                                              pdfMode: n,
                                                          },
                                                          v.parseLocaleNumber(
                                                              (function (e, a) {
                                                                  var t =
                                                                          v.getNumFromLocale(
                                                                              e
                                                                          ),
                                                                      n =
                                                                          v.getNumFromLocale(
                                                                              a
                                                                          );
                                                                  return (
                                                                      t && n
                                                                          ? t *
                                                                            n
                                                                          : 0
                                                                  ).toFixed(2);
                                                              })(
                                                                  e.quantity,
                                                                  e.rate
                                                              )
                                                          )
                                                      )
                                                  ),
                                                  !n &&
                                                      i.a.createElement(
                                                          "button",
                                                          {
                                                              className:
                                                                  "link row__remove",
                                                              "aria-label":
                                                                  "Remove Row",
                                                              title: "Remove Row",
                                                              onClick:
                                                                  function () {
                                                                      return (function (
                                                                          e
                                                                      ) {
                                                                          var t =
                                                                              a.productLines.filter(
                                                                                  function (
                                                                                      a,
                                                                                      t
                                                                                  ) {
                                                                                      return (
                                                                                          t !==
                                                                                          e
                                                                                      );
                                                                                  }
                                                                              );
                                                                          o &&
                                                                              o(
                                                                                  Object(
                                                                                      r.a
                                                                                  )(
                                                                                      Object(
                                                                                          r.a
                                                                                      )(
                                                                                          {},
                                                                                          a
                                                                                      ),
                                                                                      {},
                                                                                      {
                                                                                          productLines:
                                                                                              t,
                                                                                      }
                                                                                  )
                                                                              );
                                                                      })(t);
                                                                  },
                                                          },
                                                          i.a.createElement(
                                                              "span",
                                                              {
                                                                  className:
                                                                      "icon icon-remove",
                                                              }
                                                          )
                                                      )
                                              );
                                    }),
                                    i.a.createElement(
                                        j,
                                        {
                                            isFile: c,
                                            className: "w-100 p-4-13 center",
                                            pdfMode: n,
                                        },
                                        !n &&
                                            i.a.createElement(
                                                "button",
                                                {
                                                    className: "add w-100",
                                                    onClick: function () {
                                                        var e = [].concat(
                                                            Object(m.a)(
                                                                a.productLines
                                                            ),
                                                            [Object(r.a)({}, d)]
                                                        );
                                                        o &&
                                                            o(
                                                                Object(r.a)(
                                                                    Object(r.a)(
                                                                        {},
                                                                        a
                                                                    ),
                                                                    {},
                                                                    {
                                                                        productLines:
                                                                            e,
                                                                    }
                                                                )
                                                            );
                                                    },
                                                },
                                                "Add New Invoice Item"
                                            )
                                    ),
                                    i.a.createElement(
                                        j,
                                        {
                                            isFile: c,
                                            className:
                                                "flex mt-50  justify-space-between",
                                            pdfMode: n,
                                        },
                                        i.a.createElement(
                                            j,
                                            {
                                                isFile: c,
                                                className: "w-50",
                                                pdfMode: n,
                                            },
                                            i.a.createElement(se, {
                                                isFile: c,
                                                invoice: a,
                                                pdfMode: n,
                                                handleChange: J,
                                            })
                                        ),
                                        i.a.createElement(
                                            j,
                                            {
                                                isFile: c,
                                                className: n ? "w-40" : "w-50",
                                                pdfMode: n,
                                            },
                                            i.a.createElement(
                                                j,
                                                {
                                                    isFile: c,
                                                    className:
                                                        "flex justify-space-between",
                                                    pdfMode: n,
                                                },
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className: "w-50 p-5",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(
                                                        _,
                                                        {
                                                            isFile: c,
                                                            className:
                                                                "left light-bold fs-15",
                                                            pdfMode: n,
                                                        },
                                                        a.subTotalLabel
                                                    )
                                                ),
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className: "w-50 p-5",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(
                                                        _,
                                                        {
                                                            isFile: c,
                                                            className:
                                                                "right light-bold dark",
                                                            pdfMode: n,
                                                        },
                                                        a.currency +
                                                            " " +
                                                            v.parseLocaleNumber(
                                                                g
                                                            )
                                                    )
                                                )
                                            ),
                                            i.a.createElement(
                                                j,
                                                {
                                                    isFile: c,
                                                    className: "flex",
                                                    pdfMode: n,
                                                },
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className:
                                                            "w-50 p-5 flex",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(
                                                        _,
                                                        {
                                                            isFile: c,
                                                            pdfMode: n,
                                                        },
                                                        a.discountLabel
                                                    ),
                                                    i.a.createElement(y, {
                                                        className:
                                                            "right ".concat(
                                                                a.discountPercentage
                                                                    ? ""
                                                                    : "color-gray-text"
                                                            ),
                                                        isFile: c,
                                                        value: String(
                                                            a.discountPercentage
                                                        ),
                                                        onChange: function (e) {
                                                            q(
                                                                "discountPercentage",
                                                                e
                                                            );
                                                        },
                                                        pdfMode: n,
                                                        type: "number",
                                                        suffix: "%",
                                                    })
                                                ),
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className: "w-50 p-5",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(y, {
                                                        className:
                                                            "right ".concat(
                                                                v.getNumFromLocale(
                                                                    a.discountAmount
                                                                )
                                                                    ? ""
                                                                    : "color-gray-text"
                                                            ),
                                                        isFile: c,
                                                        prefix:
                                                            a.currency + " ",
                                                        type: "number",
                                                        value: a.discountAmount,
                                                        onChange: function (e) {
                                                            q(
                                                                "discountAmount",
                                                                e
                                                            );
                                                        },
                                                        pdfMode: n,
                                                    })
                                                )
                                            ),
                                            R &&
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className:
                                                            "color-red " +
                                                            I.a.discountErr,
                                                    },
                                                    "Discount amount can't be more then subtotal amount"
                                                ),
                                            i.a.createElement(
                                                j,
                                                {
                                                    isFile: c,
                                                    className: "flex",
                                                    pdfMode: n,
                                                },
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className: "w-50 p-5",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(
                                                        _,
                                                        {
                                                            isFile: c,
                                                            pdfMode: n,
                                                        },
                                                        a.shippingCostLabel
                                                    )
                                                ),
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className: "w-50 p-5",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(y, {
                                                        className:
                                                            "right ".concat(
                                                                v.getNumFromLocale(
                                                                    a.shippingCostAmount
                                                                )
                                                                    ? ""
                                                                    : "color-gray-text"
                                                            ),
                                                        isFile: c,
                                                        type: "number",
                                                        prefix:
                                                            a.currency + " ",
                                                        value: a.shippingCostAmount,
                                                        onChange: function (e) {
                                                            return q(
                                                                "shippingCostAmount",
                                                                e
                                                            );
                                                        },
                                                        pdfMode: n,
                                                    })
                                                )
                                            ),
                                            i.a.createElement(
                                                j,
                                                {
                                                    isFile: c,
                                                    className: "flex",
                                                    pdfMode: n,
                                                },
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className: "w-50 p-5",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(y, {
                                                        value: a.taxLabel,
                                                        isFile: c,
                                                        onChange: function (e) {
                                                            return q(
                                                                "taxLabel",
                                                                e
                                                            );
                                                        },
                                                        pdfMode: n,
                                                    })
                                                ),
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className: "w-50 p-5",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(
                                                        _,
                                                        {
                                                            isFile: c,
                                                            className:
                                                                "right ".concat(
                                                                    N
                                                                        ? ""
                                                                        : "color-gray-text"
                                                                ),
                                                            pdfMode: n,
                                                        },
                                                        a.currency +
                                                            " " +
                                                            v.parseLocaleNumber(
                                                                N
                                                            )
                                                    )
                                                )
                                            ),
                                            n &&
                                                U &&
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className: "flex",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(
                                                        j,
                                                        {
                                                            isFile: c,
                                                            className:
                                                                "w-50 p-5",
                                                            pdfMode: n,
                                                        },
                                                        i.a.createElement(
                                                            _,
                                                            {
                                                                isFile: c,
                                                                className:
                                                                    "left semi-bold total-label",
                                                                pdfMode: n,
                                                            },
                                                            a.totalLabel
                                                        )
                                                    ),
                                                    i.a.createElement(
                                                        j,
                                                        {
                                                            isFile: c,
                                                            className:
                                                                "w-50 p-5",
                                                            pdfMode: n,
                                                        },
                                                        i.a.createElement(
                                                            _,
                                                            {
                                                                isFile: c,
                                                                className:
                                                                    "right semi-bold",
                                                                pdfMode: n,
                                                            },
                                                            a.currency +
                                                                " " +
                                                                v.parseLocaleNumber(
                                                                    S
                                                                )
                                                        )
                                                    )
                                                ),
                                            (!n || (n && U)) &&
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className: "flex",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(
                                                        j,
                                                        {
                                                            isFile: c,
                                                            className:
                                                                "w-50 p-5",
                                                            pdfMode: n,
                                                        },
                                                        i.a.createElement(
                                                            _,
                                                            {
                                                                isFile: c,
                                                                className:
                                                                    "left total-label",
                                                                pdfMode: n,
                                                            },
                                                            a.amountPaidLabel
                                                        )
                                                    ),
                                                    i.a.createElement(
                                                        j,
                                                        {
                                                            isFile: c,
                                                            className:
                                                                "w-50 p-5",
                                                            pdfMode: n,
                                                        },
                                                        i.a.createElement(y, {
                                                            className:
                                                                "right ".concat(
                                                                    U
                                                                        ? ""
                                                                        : "color-gray-text"
                                                                ),
                                                            isFile: c,
                                                            value: a.amountPaid,
                                                            type: "number",
                                                            prefix:
                                                                a.currency +
                                                                " ",
                                                            onChange: function (
                                                                e
                                                            ) {
                                                                return q(
                                                                    "amountPaid",
                                                                    e
                                                                );
                                                            },
                                                            pdfMode: n,
                                                        })
                                                    )
                                                ),
                                            (!n || (n && !U)) &&
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className:
                                                            "flex bg-gray h-50 justify-space-between",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(
                                                        j,
                                                        {
                                                            isFile: c,
                                                            className:
                                                                "w-50 p-5 flex  align-center",
                                                            pdfMode: n,
                                                        },
                                                        i.a.createElement(
                                                            j,
                                                            {
                                                                isFile: c,
                                                                className:
                                                                    "flex",
                                                                pdfMode: n,
                                                            },
                                                            i.a.createElement(
                                                                _,
                                                                {
                                                                    isFile: c,
                                                                    className:
                                                                        "left semi-bold total-label",
                                                                    pdfMode: n,
                                                                },
                                                                a.totalLabel
                                                            ),
                                                            !n &&
                                                                i.a.createElement(
                                                                    de,
                                                                    {
                                                                        isFile: c,
                                                                        value: a.currency,
                                                                        options:
                                                                            Object.keys(
                                                                                p
                                                                            ).map(
                                                                                function (
                                                                                    e
                                                                                ) {
                                                                                    return {
                                                                                        value: e,
                                                                                        name: e,
                                                                                    };
                                                                                }
                                                                            ),
                                                                        onChange:
                                                                            function (
                                                                                e
                                                                            ) {
                                                                                q(
                                                                                    "currency",
                                                                                    e
                                                                                );
                                                                            },
                                                                    }
                                                                )
                                                        )
                                                    ),
                                                    i.a.createElement(
                                                        j,
                                                        {
                                                            isFile: c,
                                                            className:
                                                                "flex align-center no-wrap",
                                                            pdfMode: n,
                                                        },
                                                        i.a.createElement(
                                                            _,
                                                            {
                                                                isFile: c,
                                                                className:
                                                                    "right semi-bold",
                                                                pdfMode: n,
                                                            },
                                                            a.currency +
                                                                " " +
                                                                v.parseLocaleNumber(
                                                                    S || 0
                                                                )
                                                        )
                                                    )
                                                ),
                                            U &&
                                                n &&
                                                i.a.createElement(
                                                    j,
                                                    {
                                                        isFile: c,
                                                        className:
                                                            "flex bg-gray justify-space-between",
                                                        pdfMode: n,
                                                    },
                                                    i.a.createElement(
                                                        j,
                                                        {
                                                            isFile: c,
                                                            className:
                                                                "w-50 p-5",
                                                            pdfMode: n,
                                                        },
                                                        i.a.createElement(
                                                            j,
                                                            {
                                                                isFile: c,
                                                                className:
                                                                    "flex",
                                                            },
                                                            i.a.createElement(
                                                                _,
                                                                {
                                                                    isFile: c,
                                                                    className:
                                                                        "left semi-bold total-label",
                                                                    pdfMode: n,
                                                                },
                                                                a.balanceLabel
                                                            ),
                                                            !n &&
                                                                i.a.createElement(
                                                                    de,
                                                                    {
                                                                        isFile: c,
                                                                        value: a.currency,
                                                                        options:
                                                                            Object.keys(
                                                                                p
                                                                            ).map(
                                                                                function (
                                                                                    e
                                                                                ) {
                                                                                    return {
                                                                                        value: e,
                                                                                        name: e,
                                                                                    };
                                                                                }
                                                                            ),
                                                                        onChange:
                                                                            function (
                                                                                e
                                                                            ) {
                                                                                q(
                                                                                    "currency",
                                                                                    e
                                                                                );
                                                                            },
                                                                    }
                                                                )
                                                        )
                                                    ),
                                                    i.a.createElement(
                                                        j,
                                                        {
                                                            isFile: c,
                                                            className:
                                                                "flex align-center no-wrap",
                                                            pdfMode: n,
                                                        },
                                                        i.a.createElement(
                                                            _,
                                                            {
                                                                isFile: c,
                                                                className:
                                                                    "right semi-bold",
                                                                pdfMode: n,
                                                            },
                                                            a.currency + " " + Q
                                                        )
                                                    )
                                                )
                                        )
                                    ),
                                    ((a.notes && n) || !n) &&
                                        i.a.createElement(
                                            j,
                                            {
                                                isFile: c,
                                                className: "mt-20 w-50",
                                                pdfMode: n,
                                            },
                                            i.a.createElement(
                                                _,
                                                {
                                                    isFile: c,
                                                    className: "bold title",
                                                    pdfMode: n,
                                                },
                                                a.notesLabel
                                            ),
                                            i.a.createElement(F, {
                                                isFile: c,
                                                placeholder:
                                                    "Additional details",
                                                className: "w-100",
                                                rows: 2,
                                                value: a.notes,
                                                onChange: function (e) {
                                                    return q("notes", e);
                                                },
                                                pdfMode: n,
                                            })
                                        )
                                )
                            )
                        )
                    );
                },
                Ne = t(269),
                Fe = t.n(Ne),
                we = t(270),
                xe = t.n(we),
                Me = t(271),
                Ce = t.n(Me),
                ke = t(272),
                Ae = t.n(ke),
                Oe = function (e) {
                    var a = e.data,
                        t = e.updatePdfMode,
                        n = Object(l.useState)(!1),
                        c = Object(s.a)(n, 2),
                        o = c[0],
                        r = c[1];
                    return (
                        Object(l.useEffect)(
                            function () {
                                r(!1);
                                var e = setTimeout(function () {
                                    r(!0);
                                }, 500);
                                return function () {
                                    return clearTimeout(e);
                                };
                            },
                            [a]
                        ),
                        i.a.createElement(
                            "div",
                            {
                                className:
                                    "pdf-btns-wrapp " + (o ? "" : "loading"),
                            },
                            i.a.createElement(
                                "div",
                                { className: "nbtn", title: "Send2 PDF" },
                                i.a.createElement("img", {
                                    src: xe.a,
                                    alt: "send-2-image",
                                })
                            ),
                            i.a.createElement(
                                "div",
                                { className: "nbtn", title: "Send PDF" },
                                i.a.createElement("img", {
                                    src: Fe.a,
                                    alt: "send-image",
                                })
                            ),
                            i.a.createElement(
                                "div",
                                { className: "nbtn", title: "Save PDF" },
                                i.a.createElement("img", {
                                    src: Ce.a,
                                    alt: "save-image",
                                }),
                                o &&
                                    i.a.createElement(f.PDFDownloadLink, {
                                        document: i.a.createElement(ye, {
                                            pdfMode: !0,
                                            isFile: !0,
                                            invoice: a,
                                        }),
                                        fileName: "".concat(
                                            a.invoiceTitle
                                                ? a.invoiceTitle.toLowerCase()
                                                : "invoice",
                                            ".pdf"
                                        ),
                                        "aria-label": "Save PDF",
                                    })
                            ),
                            i.a.createElement(
                                "div",
                                {
                                    className: "nbtn",
                                    title: "Preview PDF",
                                    onClick: t,
                                },
                                i.a.createElement("img", {
                                    src: Ae.a,
                                    alt: "preview-image",
                                })
                            )
                        )
                    );
                };
            var Te = function () {
                    var e = Object(l.useState)(Object(r.a)({}, u)),
                        a = Object(s.a)(e, 2),
                        t = a[0],
                        n = a[1],
                        c = Object(l.useState)(!1),
                        o = Object(s.a)(c, 2),
                        m = o[0],
                        d = o[1];
                    return i.a.createElement(
                            "div",
                            { className: "gen-wrap--wrap" },
                            i.a.createElement(
                                "div",
                                { className: "gen-wrap" },
                                !m &&
                                    i.a.createElement(ye, {
                                        invoice: t,
                                        setInvoice: n,
                                        pdfMode: m,
                                    }),
                                i.a.createElement(
                                    X,
                                    {
                                        innerClass: "preview-modal",
                                        headerClass: "header-modal",
                                        closeOnOverlayClick: !0,
                                        open: m,
                                        onClose: function () {
                                            return d(!1);
                                        },
                                    },
                                    i.a.createElement(ye, {
                                        invoice: t,
                                        setInvoice: n,
                                        pdfMode: m,
                                    })
                                )
                            ),
                            i.a.createElement(Oe, {
                                data: t,
                                updatePdfMode: function () {
                                    d(!m);
                                },
                            })
                        )
                    
                },
                je =
                    (t(643),
                    Boolean(
                        "localhost" === window.location.hostname ||
                            "[::1]" === window.location.hostname ||
                            window.location.hostname.match(
                                /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                            )
                    ));
            function _e(e, a) {
                navigator.serviceWorker
                    .register(e)
                    .then(function (e) {
                        e.onupdatefound = function () {
                            var t = e.installing;
                            null != t &&
                                (t.onstatechange = function () {
                                    "installed" === t.state &&
                                        (navigator.serviceWorker.controller
                                            ? (console.log(
                                                  "New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."
                                              ),
                                              a && a.onUpdate && a.onUpdate(e))
                                            : (console.log(
                                                  "Content is cached for offline use."
                                              ),
                                              a &&
                                                  a.onSuccess &&
                                                  a.onSuccess(e)));
                                });
                        };
                    })
                    .catch(function (e) {
                        console.error(
                            "Error during service worker registration:",
                            e
                        );
                    });
            }
            o.a.render(
                i.a.createElement(Te, null),
                document.getElementById("root")
            ),
                (function (e) {
                    if ("serviceWorker" in navigator) {
                        if (
                            new URL(".", window.location.href).origin !==
                            window.location.origin
                        )
                            return;
                        window.addEventListener("load", function () {
                            var a = "".concat(".", "/service-worker.js");
                            je
                                ? (!(function (e, a) {
                                      fetch(e, {
                                          headers: {
                                              "Service-Worker": "script",
                                          },
                                      })
                                          .then(function (t) {
                                              var n =
                                                  t.headers.get("content-type");
                                              404 === t.status ||
                                              (null != n &&
                                                  -1 ===
                                                      n.indexOf("javascript"))
                                                  ? navigator.serviceWorker.ready.then(
                                                        function (e) {
                                                            e.unregister().then(
                                                                function () {
                                                                    window.location.reload();
                                                                }
                                                            );
                                                        }
                                                    )
                                                  : _e(e, a);
                                          })
                                          .catch(function () {
                                              console.log(
                                                  "No internet connection found. App is running in offline mode."
                                              );
                                          });
                                  })(a, e),
                                  navigator.serviceWorker.ready.then(
                                      function () {
                                          console.log(
                                              "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA"
                                          );
                                      }
                                  ))
                                : _e(a, e);
                        });
                    }
                })();
        },
    },
    [[274, 1, 2]],
]);
//# sourceMappingURL=main.7565bbd6.chunk.js.map

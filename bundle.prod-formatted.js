!(function(t) {
  function n(r) {
    if (e[r]) return e[r].exports;
    var u = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(u.exports, u, u.exports, n), (u.l = !0), u.exports;
  }
  var e = {};
  (n.m = t), (n.c = e), (n.i = function(t) {
    return t;
  }), (n.d = function(t, e, r) {
    n.o(t, e) ||
      Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
  }), (n.n = function(t) {
    var e = t && t.__esModule
      ? function() {
          return t.default;
        }
      : function() {
          return t;
        };
    return n.d(e, "a", e), e;
  }), (n.o = function(t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }), (n.p = ""), n((n.s = 5));
})([
  function(t, n, e) {
    "use strict";
    var r = e(4);
    n.a = function(t) {
      return r[t];
    };
  },
  function(t, n, e) {
    "use strict";
    n.a = "AAA";
  },
  function(t, n, e) {
    "use strict";
    n.a = "BBB";
  },
  function(t, n, e) {
    "use strict";
    n.a = "CCC";
  },
  function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = e(1);
    e.d(n, "A", function() {
      return r.a;
    });
    var u = e(2);
    e.d(n, "B", function() {
      return u.a;
    });
    var o = e(3);
    e.d(n, "C", function() {
      return o.a;
    });
  },
  function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = e(0);
    console.log(e.i(r.a)("A"));
  }
]);

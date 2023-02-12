import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, H as append_hydration, J as set_input_value, K as listen, C as noop, o as onMount, v as binding_callbacks, D as create_slot, E as update_slot_base, F as get_all_dirty_from_scope, G as get_slot_changes, f as transition_in, t as transition_out, L as setContext, a as space, c as claim_space, M as toggle_class, N as createEventDispatcher, I as component_subscribe, O as onDestroy, j as afterUpdate, P as set_store_value, x as create_component, y as claim_component, z as mount_component, A as destroy_component, B as tick, e as empty, Q as getContext, R as hasContext, T as action_destroyer, g as group_outros, d as check_outros, U as bind, V as add_flush_callback, q as text, r as claim_text, W as head_selector, X as src_url_equal, Y as svg_element, Z as claim_svg_element, _ as is_function, u as set_data } from "../../chunks/index-9180a6cb.js";
import { w as writable } from "../../chunks/index-2f112dc9.js";
const PREFIX = "watashiato-";
const resizing = writable(false);
const storedHTML = localStorage.getItem(PREFIX + "html");
const storedJS = localStorage.getItem(PREFIX + "js");
const storedCSS = localStorage.getItem(PREFIX + "css");
const html = writable(storedHTML || "");
const js = writable(storedJS || "");
const css = writable(storedCSS || "");
const code = writable("");
html.subscribe((value) => {
  localStorage.setItem(PREFIX + "html", value);
});
js.subscribe((value) => {
  localStorage.setItem(PREFIX + "js", value);
});
css.subscribe((value) => {
  localStorage.setItem(PREFIX + "css", value);
});
const ideMode = writable(false);
const codemirror$1 = "";
const ayuMirage = "";
const eclipse = "";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var codemirrorExports$1 = {};
var codemirror = {
  get exports() {
    return codemirrorExports$1;
  },
  set exports(v) {
    codemirrorExports$1 = v;
  }
};
var hasRequiredCodemirror;
function requireCodemirror() {
  if (hasRequiredCodemirror)
    return codemirrorExports$1;
  hasRequiredCodemirror = 1;
  (function(module, exports) {
    (function(global2, factory) {
      module.exports = factory();
    })(commonjsGlobal, function() {
      var userAgent = navigator.userAgent;
      var platform = navigator.platform;
      var gecko = /gecko\/\d/i.test(userAgent);
      var ie_upto10 = /MSIE \d/.test(userAgent);
      var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
      var edge = /Edge\/(\d+)/.exec(userAgent);
      var ie = ie_upto10 || ie_11up || edge;
      var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
      var webkit = !edge && /WebKit\//.test(userAgent);
      var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
      var chrome = !edge && /Chrome\/(\d+)/.exec(userAgent);
      var chrome_version = chrome && +chrome[1];
      var presto = /Opera\//.test(userAgent);
      var safari = /Apple Computer/.test(navigator.vendor);
      var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
      var phantom = /PhantomJS/.test(userAgent);
      var ios = safari && (/Mobile\/\w+/.test(userAgent) || navigator.maxTouchPoints > 2);
      var android = /Android/.test(userAgent);
      var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
      var mac = ios || /Mac/.test(platform);
      var chromeOS = /\bCrOS\b/.test(userAgent);
      var windows = /win/i.test(platform);
      var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
      if (presto_version) {
        presto_version = Number(presto_version[1]);
      }
      if (presto_version && presto_version >= 15) {
        presto = false;
        webkit = true;
      }
      var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
      var captureRightClick = gecko || ie && ie_version >= 9;
      function classTest(cls) {
        return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*");
      }
      var rmClass = function(node, cls) {
        var current = node.className;
        var match = classTest(cls).exec(current);
        if (match) {
          var after = current.slice(match.index + match[0].length);
          node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
        }
      };
      function removeChildren(e) {
        for (var count = e.childNodes.length; count > 0; --count) {
          e.removeChild(e.firstChild);
        }
        return e;
      }
      function removeChildrenAndAdd(parent, e) {
        return removeChildren(parent).appendChild(e);
      }
      function elt(tag, content, className, style) {
        var e = document.createElement(tag);
        if (className) {
          e.className = className;
        }
        if (style) {
          e.style.cssText = style;
        }
        if (typeof content == "string") {
          e.appendChild(document.createTextNode(content));
        } else if (content) {
          for (var i2 = 0; i2 < content.length; ++i2) {
            e.appendChild(content[i2]);
          }
        }
        return e;
      }
      function eltP(tag, content, className, style) {
        var e = elt(tag, content, className, style);
        e.setAttribute("role", "presentation");
        return e;
      }
      var range;
      if (document.createRange) {
        range = function(node, start, end, endNode) {
          var r = document.createRange();
          r.setEnd(endNode || node, end);
          r.setStart(node, start);
          return r;
        };
      } else {
        range = function(node, start, end) {
          var r = document.body.createTextRange();
          try {
            r.moveToElementText(node.parentNode);
          } catch (e) {
            return r;
          }
          r.collapse(true);
          r.moveEnd("character", end);
          r.moveStart("character", start);
          return r;
        };
      }
      function contains(parent, child) {
        if (child.nodeType == 3) {
          child = child.parentNode;
        }
        if (parent.contains) {
          return parent.contains(child);
        }
        do {
          if (child.nodeType == 11) {
            child = child.host;
          }
          if (child == parent) {
            return true;
          }
        } while (child = child.parentNode);
      }
      function activeElt(doc3) {
        var activeElement;
        try {
          activeElement = doc3.activeElement;
        } catch (e) {
          activeElement = doc3.body || null;
        }
        while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
        return activeElement;
      }
      function addClass(node, cls) {
        var current = node.className;
        if (!classTest(cls).test(current)) {
          node.className += (current ? " " : "") + cls;
        }
      }
      function joinClasses(a, b) {
        var as = a.split(" ");
        for (var i2 = 0; i2 < as.length; i2++) {
          if (as[i2] && !classTest(as[i2]).test(b)) {
            b += " " + as[i2];
          }
        }
        return b;
      }
      var selectInput = function(node) {
        node.select();
      };
      if (ios) {
        selectInput = function(node) {
          node.selectionStart = 0;
          node.selectionEnd = node.value.length;
        };
      } else if (ie) {
        selectInput = function(node) {
          try {
            node.select();
          } catch (_e) {
          }
        };
      }
      function doc2(cm) {
        return cm.display.wrapper.ownerDocument;
      }
      function win(cm) {
        return doc2(cm).defaultView;
      }
      function bind2(f) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
          return f.apply(null, args);
        };
      }
      function copyObj(obj, target, overwrite) {
        if (!target) {
          target = {};
        }
        for (var prop2 in obj) {
          if (obj.hasOwnProperty(prop2) && (overwrite !== false || !target.hasOwnProperty(prop2))) {
            target[prop2] = obj[prop2];
          }
        }
        return target;
      }
      function countColumn(string, end, tabSize, startIndex, startValue) {
        if (end == null) {
          end = string.search(/[^\s\u00a0]/);
          if (end == -1) {
            end = string.length;
          }
        }
        for (var i2 = startIndex || 0, n = startValue || 0; ; ) {
          var nextTab = string.indexOf("	", i2);
          if (nextTab < 0 || nextTab >= end) {
            return n + (end - i2);
          }
          n += nextTab - i2;
          n += tabSize - n % tabSize;
          i2 = nextTab + 1;
        }
      }
      var Delayed = function() {
        this.id = null;
        this.f = null;
        this.time = 0;
        this.handler = bind2(this.onTimeout, this);
      };
      Delayed.prototype.onTimeout = function(self2) {
        self2.id = 0;
        if (self2.time <= +new Date()) {
          self2.f();
        } else {
          setTimeout(self2.handler, self2.time - +new Date());
        }
      };
      Delayed.prototype.set = function(ms, f) {
        this.f = f;
        var time = +new Date() + ms;
        if (!this.id || time < this.time) {
          clearTimeout(this.id);
          this.id = setTimeout(this.handler, ms);
          this.time = time;
        }
      };
      function indexOf(array, elt2) {
        for (var i2 = 0; i2 < array.length; ++i2) {
          if (array[i2] == elt2) {
            return i2;
          }
        }
        return -1;
      }
      var scrollerGap = 50;
      var Pass = { toString: function() {
        return "CodeMirror.Pass";
      } };
      var sel_dontScroll = { scroll: false }, sel_mouse = { origin: "*mouse" }, sel_move = { origin: "+move" };
      function findColumn(string, goal, tabSize) {
        for (var pos = 0, col = 0; ; ) {
          var nextTab = string.indexOf("	", pos);
          if (nextTab == -1) {
            nextTab = string.length;
          }
          var skipped = nextTab - pos;
          if (nextTab == string.length || col + skipped >= goal) {
            return pos + Math.min(skipped, goal - col);
          }
          col += nextTab - pos;
          col += tabSize - col % tabSize;
          pos = nextTab + 1;
          if (col >= goal) {
            return pos;
          }
        }
      }
      var spaceStrs = [""];
      function spaceStr(n) {
        while (spaceStrs.length <= n) {
          spaceStrs.push(lst(spaceStrs) + " ");
        }
        return spaceStrs[n];
      }
      function lst(arr) {
        return arr[arr.length - 1];
      }
      function map2(array, f) {
        var out = [];
        for (var i2 = 0; i2 < array.length; i2++) {
          out[i2] = f(array[i2], i2);
        }
        return out;
      }
      function insertSorted(array, value, score) {
        var pos = 0, priority = score(value);
        while (pos < array.length && score(array[pos]) <= priority) {
          pos++;
        }
        array.splice(pos, 0, value);
      }
      function nothing() {
      }
      function createObj(base, props) {
        var inst;
        if (Object.create) {
          inst = Object.create(base);
        } else {
          nothing.prototype = base;
          inst = new nothing();
        }
        if (props) {
          copyObj(props, inst);
        }
        return inst;
      }
      var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      function isWordCharBasic(ch) {
        return /\w/.test(ch) || ch > "" && (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
      }
      function isWordChar(ch, helper) {
        if (!helper) {
          return isWordCharBasic(ch);
        }
        if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) {
          return true;
        }
        return helper.test(ch);
      }
      function isEmpty(obj) {
        for (var n in obj) {
          if (obj.hasOwnProperty(n) && obj[n]) {
            return false;
          }
        }
        return true;
      }
      var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
      function isExtendingChar(ch) {
        return ch.charCodeAt(0) >= 768 && extendingChars.test(ch);
      }
      function skipExtendingChars(str, pos, dir) {
        while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) {
          pos += dir;
        }
        return pos;
      }
      function findFirst(pred, from2, to) {
        var dir = from2 > to ? -1 : 1;
        for (; ; ) {
          if (from2 == to) {
            return from2;
          }
          var midF = (from2 + to) / 2, mid = dir < 0 ? Math.ceil(midF) : Math.floor(midF);
          if (mid == from2) {
            return pred(mid) ? from2 : to;
          }
          if (pred(mid)) {
            to = mid;
          } else {
            from2 = mid + dir;
          }
        }
      }
      function iterateBidiSections(order, from2, to, f) {
        if (!order) {
          return f(from2, to, "ltr", 0);
        }
        var found = false;
        for (var i2 = 0; i2 < order.length; ++i2) {
          var part = order[i2];
          if (part.from < to && part.to > from2 || from2 == to && part.to == from2) {
            f(Math.max(part.from, from2), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr", i2);
            found = true;
          }
        }
        if (!found) {
          f(from2, to, "ltr");
        }
      }
      var bidiOther = null;
      function getBidiPartAt(order, ch, sticky) {
        var found;
        bidiOther = null;
        for (var i2 = 0; i2 < order.length; ++i2) {
          var cur = order[i2];
          if (cur.from < ch && cur.to > ch) {
            return i2;
          }
          if (cur.to == ch) {
            if (cur.from != cur.to && sticky == "before") {
              found = i2;
            } else {
              bidiOther = i2;
            }
          }
          if (cur.from == ch) {
            if (cur.from != cur.to && sticky != "before") {
              found = i2;
            } else {
              bidiOther = i2;
            }
          }
        }
        return found != null ? found : bidiOther;
      }
      var bidiOrdering = function() {
        var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
        var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
        function charType(code2) {
          if (code2 <= 247) {
            return lowTypes.charAt(code2);
          } else if (1424 <= code2 && code2 <= 1524) {
            return "R";
          } else if (1536 <= code2 && code2 <= 1785) {
            return arabicTypes.charAt(code2 - 1536);
          } else if (1774 <= code2 && code2 <= 2220) {
            return "r";
          } else if (8192 <= code2 && code2 <= 8203) {
            return "w";
          } else if (code2 == 8204) {
            return "b";
          } else {
            return "L";
          }
        }
        var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
        var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;
        function BidiSpan(level, from2, to) {
          this.level = level;
          this.from = from2;
          this.to = to;
        }
        return function(str, direction) {
          var outerType = direction == "ltr" ? "L" : "R";
          if (str.length == 0 || direction == "ltr" && !bidiRE.test(str)) {
            return false;
          }
          var len = str.length, types = [];
          for (var i2 = 0; i2 < len; ++i2) {
            types.push(charType(str.charCodeAt(i2)));
          }
          for (var i$12 = 0, prev = outerType; i$12 < len; ++i$12) {
            var type = types[i$12];
            if (type == "m") {
              types[i$12] = prev;
            } else {
              prev = type;
            }
          }
          for (var i$22 = 0, cur = outerType; i$22 < len; ++i$22) {
            var type$1 = types[i$22];
            if (type$1 == "1" && cur == "r") {
              types[i$22] = "n";
            } else if (isStrong.test(type$1)) {
              cur = type$1;
              if (type$1 == "r") {
                types[i$22] = "R";
              }
            }
          }
          for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
            var type$2 = types[i$3];
            if (type$2 == "+" && prev$1 == "1" && types[i$3 + 1] == "1") {
              types[i$3] = "1";
            } else if (type$2 == "," && prev$1 == types[i$3 + 1] && (prev$1 == "1" || prev$1 == "n")) {
              types[i$3] = prev$1;
            }
            prev$1 = type$2;
          }
          for (var i$4 = 0; i$4 < len; ++i$4) {
            var type$3 = types[i$4];
            if (type$3 == ",") {
              types[i$4] = "N";
            } else if (type$3 == "%") {
              var end = void 0;
              for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {
              }
              var replace = i$4 && types[i$4 - 1] == "!" || end < len && types[end] == "1" ? "1" : "N";
              for (var j = i$4; j < end; ++j) {
                types[j] = replace;
              }
              i$4 = end - 1;
            }
          }
          for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
            var type$4 = types[i$5];
            if (cur$1 == "L" && type$4 == "1") {
              types[i$5] = "L";
            } else if (isStrong.test(type$4)) {
              cur$1 = type$4;
            }
          }
          for (var i$6 = 0; i$6 < len; ++i$6) {
            if (isNeutral.test(types[i$6])) {
              var end$1 = void 0;
              for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {
              }
              var before = (i$6 ? types[i$6 - 1] : outerType) == "L";
              var after = (end$1 < len ? types[end$1] : outerType) == "L";
              var replace$1 = before == after ? before ? "L" : "R" : outerType;
              for (var j$1 = i$6; j$1 < end$1; ++j$1) {
                types[j$1] = replace$1;
              }
              i$6 = end$1 - 1;
            }
          }
          var order = [], m;
          for (var i$7 = 0; i$7 < len; ) {
            if (countsAsLeft.test(types[i$7])) {
              var start = i$7;
              for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {
              }
              order.push(new BidiSpan(0, start, i$7));
            } else {
              var pos = i$7, at = order.length, isRTL = direction == "rtl" ? 1 : 0;
              for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {
              }
              for (var j$2 = pos; j$2 < i$7; ) {
                if (countsAsNum.test(types[j$2])) {
                  if (pos < j$2) {
                    order.splice(at, 0, new BidiSpan(1, pos, j$2));
                    at += isRTL;
                  }
                  var nstart = j$2;
                  for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {
                  }
                  order.splice(at, 0, new BidiSpan(2, nstart, j$2));
                  at += isRTL;
                  pos = j$2;
                } else {
                  ++j$2;
                }
              }
              if (pos < i$7) {
                order.splice(at, 0, new BidiSpan(1, pos, i$7));
              }
            }
          }
          if (direction == "ltr") {
            if (order[0].level == 1 && (m = str.match(/^\s+/))) {
              order[0].from = m[0].length;
              order.unshift(new BidiSpan(0, 0, m[0].length));
            }
            if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
              lst(order).to -= m[0].length;
              order.push(new BidiSpan(0, len - m[0].length, len));
            }
          }
          return direction == "rtl" ? order.reverse() : order;
        };
      }();
      function getOrder(line, direction) {
        var order = line.order;
        if (order == null) {
          order = line.order = bidiOrdering(line.text, direction);
        }
        return order;
      }
      var noHandlers = [];
      var on = function(emitter, type, f) {
        if (emitter.addEventListener) {
          emitter.addEventListener(type, f, false);
        } else if (emitter.attachEvent) {
          emitter.attachEvent("on" + type, f);
        } else {
          var map3 = emitter._handlers || (emitter._handlers = {});
          map3[type] = (map3[type] || noHandlers).concat(f);
        }
      };
      function getHandlers(emitter, type) {
        return emitter._handlers && emitter._handlers[type] || noHandlers;
      }
      function off(emitter, type, f) {
        if (emitter.removeEventListener) {
          emitter.removeEventListener(type, f, false);
        } else if (emitter.detachEvent) {
          emitter.detachEvent("on" + type, f);
        } else {
          var map3 = emitter._handlers, arr = map3 && map3[type];
          if (arr) {
            var index = indexOf(arr, f);
            if (index > -1) {
              map3[type] = arr.slice(0, index).concat(arr.slice(index + 1));
            }
          }
        }
      }
      function signal(emitter, type) {
        var handlers = getHandlers(emitter, type);
        if (!handlers.length) {
          return;
        }
        var args = Array.prototype.slice.call(arguments, 2);
        for (var i2 = 0; i2 < handlers.length; ++i2) {
          handlers[i2].apply(null, args);
        }
      }
      function signalDOMEvent(cm, e, override) {
        if (typeof e == "string") {
          e = { type: e, preventDefault: function() {
            this.defaultPrevented = true;
          } };
        }
        signal(cm, override || e.type, cm, e);
        return e_defaultPrevented(e) || e.codemirrorIgnore;
      }
      function signalCursorActivity(cm) {
        var arr = cm._handlers && cm._handlers.cursorActivity;
        if (!arr) {
          return;
        }
        var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
        for (var i2 = 0; i2 < arr.length; ++i2) {
          if (indexOf(set, arr[i2]) == -1) {
            set.push(arr[i2]);
          }
        }
      }
      function hasHandler(emitter, type) {
        return getHandlers(emitter, type).length > 0;
      }
      function eventMixin(ctor) {
        ctor.prototype.on = function(type, f) {
          on(this, type, f);
        };
        ctor.prototype.off = function(type, f) {
          off(this, type, f);
        };
      }
      function e_preventDefault(e) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
      }
      function e_stopPropagation(e) {
        if (e.stopPropagation) {
          e.stopPropagation();
        } else {
          e.cancelBubble = true;
        }
      }
      function e_defaultPrevented(e) {
        return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
      }
      function e_stop(e) {
        e_preventDefault(e);
        e_stopPropagation(e);
      }
      function e_target(e) {
        return e.target || e.srcElement;
      }
      function e_button(e) {
        var b = e.which;
        if (b == null) {
          if (e.button & 1) {
            b = 1;
          } else if (e.button & 2) {
            b = 3;
          } else if (e.button & 4) {
            b = 2;
          }
        }
        if (mac && e.ctrlKey && b == 1) {
          b = 3;
        }
        return b;
      }
      var dragAndDrop = function() {
        if (ie && ie_version < 9) {
          return false;
        }
        var div = elt("div");
        return "draggable" in div || "dragDrop" in div;
      }();
      var zwspSupported;
      function zeroWidthElement(measure) {
        if (zwspSupported == null) {
          var test = elt("span", "​");
          removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
          if (measure.firstChild.offsetHeight != 0) {
            zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8);
          }
        }
        var node = zwspSupported ? elt("span", "​") : elt("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
        node.setAttribute("cm-text", "");
        return node;
      }
      var badBidiRects;
      function hasBadBidiRects(measure) {
        if (badBidiRects != null) {
          return badBidiRects;
        }
        var txt = removeChildrenAndAdd(measure, document.createTextNode("AخA"));
        var r0 = range(txt, 0, 1).getBoundingClientRect();
        var r1 = range(txt, 1, 2).getBoundingClientRect();
        removeChildren(measure);
        if (!r0 || r0.left == r0.right) {
          return false;
        }
        return badBidiRects = r1.right - r0.right < 3;
      }
      var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function(string) {
        var pos = 0, result = [], l = string.length;
        while (pos <= l) {
          var nl = string.indexOf("\n", pos);
          if (nl == -1) {
            nl = string.length;
          }
          var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
          var rt = line.indexOf("\r");
          if (rt != -1) {
            result.push(line.slice(0, rt));
            pos += rt + 1;
          } else {
            result.push(line);
            pos = nl + 1;
          }
        }
        return result;
      } : function(string) {
        return string.split(/\r\n?|\n/);
      };
      var hasSelection = window.getSelection ? function(te) {
        try {
          return te.selectionStart != te.selectionEnd;
        } catch (e) {
          return false;
        }
      } : function(te) {
        var range2;
        try {
          range2 = te.ownerDocument.selection.createRange();
        } catch (e) {
        }
        if (!range2 || range2.parentElement() != te) {
          return false;
        }
        return range2.compareEndPoints("StartToEnd", range2) != 0;
      };
      var hasCopyEvent = function() {
        var e = elt("div");
        if ("oncopy" in e) {
          return true;
        }
        e.setAttribute("oncopy", "return;");
        return typeof e.oncopy == "function";
      }();
      var badZoomedRects = null;
      function hasBadZoomedRects(measure) {
        if (badZoomedRects != null) {
          return badZoomedRects;
        }
        var node = removeChildrenAndAdd(measure, elt("span", "x"));
        var normal = node.getBoundingClientRect();
        var fromRange = range(node, 0, 1).getBoundingClientRect();
        return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1;
      }
      var modes = {}, mimeModes = {};
      function defineMode(name, mode) {
        if (arguments.length > 2) {
          mode.dependencies = Array.prototype.slice.call(arguments, 2);
        }
        modes[name] = mode;
      }
      function defineMIME(mime, spec) {
        mimeModes[mime] = spec;
      }
      function resolveMode(spec) {
        if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
          spec = mimeModes[spec];
        } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
          var found = mimeModes[spec.name];
          if (typeof found == "string") {
            found = { name: found };
          }
          spec = createObj(found, spec);
          spec.name = found.name;
        } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
          return resolveMode("application/xml");
        } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
          return resolveMode("application/json");
        }
        if (typeof spec == "string") {
          return { name: spec };
        } else {
          return spec || { name: "null" };
        }
      }
      function getMode(options, spec) {
        spec = resolveMode(spec);
        var mfactory = modes[spec.name];
        if (!mfactory) {
          return getMode(options, "text/plain");
        }
        var modeObj = mfactory(options, spec);
        if (modeExtensions.hasOwnProperty(spec.name)) {
          var exts = modeExtensions[spec.name];
          for (var prop2 in exts) {
            if (!exts.hasOwnProperty(prop2)) {
              continue;
            }
            if (modeObj.hasOwnProperty(prop2)) {
              modeObj["_" + prop2] = modeObj[prop2];
            }
            modeObj[prop2] = exts[prop2];
          }
        }
        modeObj.name = spec.name;
        if (spec.helperType) {
          modeObj.helperType = spec.helperType;
        }
        if (spec.modeProps) {
          for (var prop$1 in spec.modeProps) {
            modeObj[prop$1] = spec.modeProps[prop$1];
          }
        }
        return modeObj;
      }
      var modeExtensions = {};
      function extendMode(mode, properties) {
        var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : modeExtensions[mode] = {};
        copyObj(properties, exts);
      }
      function copyState(mode, state) {
        if (state === true) {
          return state;
        }
        if (mode.copyState) {
          return mode.copyState(state);
        }
        var nstate = {};
        for (var n in state) {
          var val = state[n];
          if (val instanceof Array) {
            val = val.concat([]);
          }
          nstate[n] = val;
        }
        return nstate;
      }
      function innerMode(mode, state) {
        var info;
        while (mode.innerMode) {
          info = mode.innerMode(state);
          if (!info || info.mode == mode) {
            break;
          }
          state = info.state;
          mode = info.mode;
        }
        return info || { mode, state };
      }
      function startState(mode, a1, a2) {
        return mode.startState ? mode.startState(a1, a2) : true;
      }
      var StringStream = function(string, tabSize, lineOracle) {
        this.pos = this.start = 0;
        this.string = string;
        this.tabSize = tabSize || 8;
        this.lastColumnPos = this.lastColumnValue = 0;
        this.lineStart = 0;
        this.lineOracle = lineOracle;
      };
      StringStream.prototype.eol = function() {
        return this.pos >= this.string.length;
      };
      StringStream.prototype.sol = function() {
        return this.pos == this.lineStart;
      };
      StringStream.prototype.peek = function() {
        return this.string.charAt(this.pos) || void 0;
      };
      StringStream.prototype.next = function() {
        if (this.pos < this.string.length) {
          return this.string.charAt(this.pos++);
        }
      };
      StringStream.prototype.eat = function(match) {
        var ch = this.string.charAt(this.pos);
        var ok;
        if (typeof match == "string") {
          ok = ch == match;
        } else {
          ok = ch && (match.test ? match.test(ch) : match(ch));
        }
        if (ok) {
          ++this.pos;
          return ch;
        }
      };
      StringStream.prototype.eatWhile = function(match) {
        var start = this.pos;
        while (this.eat(match)) {
        }
        return this.pos > start;
      };
      StringStream.prototype.eatSpace = function() {
        var start = this.pos;
        while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) {
          ++this.pos;
        }
        return this.pos > start;
      };
      StringStream.prototype.skipToEnd = function() {
        this.pos = this.string.length;
      };
      StringStream.prototype.skipTo = function(ch) {
        var found = this.string.indexOf(ch, this.pos);
        if (found > -1) {
          this.pos = found;
          return true;
        }
      };
      StringStream.prototype.backUp = function(n) {
        this.pos -= n;
      };
      StringStream.prototype.column = function() {
        if (this.lastColumnPos < this.start) {
          this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
          this.lastColumnPos = this.start;
        }
        return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
      };
      StringStream.prototype.indentation = function() {
        return countColumn(this.string, null, this.tabSize) - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
      };
      StringStream.prototype.match = function(pattern, consume, caseInsensitive) {
        if (typeof pattern == "string") {
          var cased = function(str) {
            return caseInsensitive ? str.toLowerCase() : str;
          };
          var substr = this.string.substr(this.pos, pattern.length);
          if (cased(substr) == cased(pattern)) {
            if (consume !== false) {
              this.pos += pattern.length;
            }
            return true;
          }
        } else {
          var match = this.string.slice(this.pos).match(pattern);
          if (match && match.index > 0) {
            return null;
          }
          if (match && consume !== false) {
            this.pos += match[0].length;
          }
          return match;
        }
      };
      StringStream.prototype.current = function() {
        return this.string.slice(this.start, this.pos);
      };
      StringStream.prototype.hideFirstChars = function(n, inner) {
        this.lineStart += n;
        try {
          return inner();
        } finally {
          this.lineStart -= n;
        }
      };
      StringStream.prototype.lookAhead = function(n) {
        var oracle = this.lineOracle;
        return oracle && oracle.lookAhead(n);
      };
      StringStream.prototype.baseToken = function() {
        var oracle = this.lineOracle;
        return oracle && oracle.baseToken(this.pos);
      };
      function getLine(doc3, n) {
        n -= doc3.first;
        if (n < 0 || n >= doc3.size) {
          throw new Error("There is no line " + (n + doc3.first) + " in the document.");
        }
        var chunk = doc3;
        while (!chunk.lines) {
          for (var i2 = 0; ; ++i2) {
            var child = chunk.children[i2], sz = child.chunkSize();
            if (n < sz) {
              chunk = child;
              break;
            }
            n -= sz;
          }
        }
        return chunk.lines[n];
      }
      function getBetween(doc3, start, end) {
        var out = [], n = start.line;
        doc3.iter(start.line, end.line + 1, function(line) {
          var text2 = line.text;
          if (n == end.line) {
            text2 = text2.slice(0, end.ch);
          }
          if (n == start.line) {
            text2 = text2.slice(start.ch);
          }
          out.push(text2);
          ++n;
        });
        return out;
      }
      function getLines(doc3, from2, to) {
        var out = [];
        doc3.iter(from2, to, function(line) {
          out.push(line.text);
        });
        return out;
      }
      function updateLineHeight(line, height) {
        var diff = height - line.height;
        if (diff) {
          for (var n = line; n; n = n.parent) {
            n.height += diff;
          }
        }
      }
      function lineNo(line) {
        if (line.parent == null) {
          return null;
        }
        var cur = line.parent, no = indexOf(cur.lines, line);
        for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
          for (var i2 = 0; ; ++i2) {
            if (chunk.children[i2] == cur) {
              break;
            }
            no += chunk.children[i2].chunkSize();
          }
        }
        return no + cur.first;
      }
      function lineAtHeight(chunk, h) {
        var n = chunk.first;
        outer:
          do {
            for (var i$12 = 0; i$12 < chunk.children.length; ++i$12) {
              var child = chunk.children[i$12], ch = child.height;
              if (h < ch) {
                chunk = child;
                continue outer;
              }
              h -= ch;
              n += child.chunkSize();
            }
            return n;
          } while (!chunk.lines);
        var i2 = 0;
        for (; i2 < chunk.lines.length; ++i2) {
          var line = chunk.lines[i2], lh = line.height;
          if (h < lh) {
            break;
          }
          h -= lh;
        }
        return n + i2;
      }
      function isLine(doc3, l) {
        return l >= doc3.first && l < doc3.first + doc3.size;
      }
      function lineNumberFor(options, i2) {
        return String(options.lineNumberFormatter(i2 + options.firstLineNumber));
      }
      function Pos(line, ch, sticky) {
        if (sticky === void 0)
          sticky = null;
        if (!(this instanceof Pos)) {
          return new Pos(line, ch, sticky);
        }
        this.line = line;
        this.ch = ch;
        this.sticky = sticky;
      }
      function cmp(a, b) {
        return a.line - b.line || a.ch - b.ch;
      }
      function equalCursorPos(a, b) {
        return a.sticky == b.sticky && cmp(a, b) == 0;
      }
      function copyPos(x) {
        return Pos(x.line, x.ch);
      }
      function maxPos(a, b) {
        return cmp(a, b) < 0 ? b : a;
      }
      function minPos(a, b) {
        return cmp(a, b) < 0 ? a : b;
      }
      function clipLine(doc3, n) {
        return Math.max(doc3.first, Math.min(n, doc3.first + doc3.size - 1));
      }
      function clipPos(doc3, pos) {
        if (pos.line < doc3.first) {
          return Pos(doc3.first, 0);
        }
        var last2 = doc3.first + doc3.size - 1;
        if (pos.line > last2) {
          return Pos(last2, getLine(doc3, last2).text.length);
        }
        return clipToLen(pos, getLine(doc3, pos.line).text.length);
      }
      function clipToLen(pos, linelen) {
        var ch = pos.ch;
        if (ch == null || ch > linelen) {
          return Pos(pos.line, linelen);
        } else if (ch < 0) {
          return Pos(pos.line, 0);
        } else {
          return pos;
        }
      }
      function clipPosArray(doc3, array) {
        var out = [];
        for (var i2 = 0; i2 < array.length; i2++) {
          out[i2] = clipPos(doc3, array[i2]);
        }
        return out;
      }
      var SavedContext = function(state, lookAhead) {
        this.state = state;
        this.lookAhead = lookAhead;
      };
      var Context = function(doc3, state, line, lookAhead) {
        this.state = state;
        this.doc = doc3;
        this.line = line;
        this.maxLookAhead = lookAhead || 0;
        this.baseTokens = null;
        this.baseTokenPos = 1;
      };
      Context.prototype.lookAhead = function(n) {
        var line = this.doc.getLine(this.line + n);
        if (line != null && n > this.maxLookAhead) {
          this.maxLookAhead = n;
        }
        return line;
      };
      Context.prototype.baseToken = function(n) {
        if (!this.baseTokens) {
          return null;
        }
        while (this.baseTokens[this.baseTokenPos] <= n) {
          this.baseTokenPos += 2;
        }
        var type = this.baseTokens[this.baseTokenPos + 1];
        return {
          type: type && type.replace(/( |^)overlay .*/, ""),
          size: this.baseTokens[this.baseTokenPos] - n
        };
      };
      Context.prototype.nextLine = function() {
        this.line++;
        if (this.maxLookAhead > 0) {
          this.maxLookAhead--;
        }
      };
      Context.fromSaved = function(doc3, saved, line) {
        if (saved instanceof SavedContext) {
          return new Context(doc3, copyState(doc3.mode, saved.state), line, saved.lookAhead);
        } else {
          return new Context(doc3, copyState(doc3.mode, saved), line);
        }
      };
      Context.prototype.save = function(copy2) {
        var state = copy2 !== false ? copyState(this.doc.mode, this.state) : this.state;
        return this.maxLookAhead > 0 ? new SavedContext(state, this.maxLookAhead) : state;
      };
      function highlightLine(cm, line, context, forceToEnd) {
        var st = [cm.state.modeGen], lineClasses = {};
        runMode(
          cm,
          line.text,
          cm.doc.mode,
          context,
          function(end, style) {
            return st.push(end, style);
          },
          lineClasses,
          forceToEnd
        );
        var state = context.state;
        var loop = function(o2) {
          context.baseTokens = st;
          var overlay = cm.state.overlays[o2], i2 = 1, at = 0;
          context.state = true;
          runMode(cm, line.text, overlay.mode, context, function(end, style) {
            var start = i2;
            while (at < end) {
              var i_end = st[i2];
              if (i_end > end) {
                st.splice(i2, 1, end, st[i2 + 1], i_end);
              }
              i2 += 2;
              at = Math.min(end, i_end);
            }
            if (!style) {
              return;
            }
            if (overlay.opaque) {
              st.splice(start, i2 - start, end, "overlay " + style);
              i2 = start + 2;
            } else {
              for (; start < i2; start += 2) {
                var cur = st[start + 1];
                st[start + 1] = (cur ? cur + " " : "") + "overlay " + style;
              }
            }
          }, lineClasses);
          context.state = state;
          context.baseTokens = null;
          context.baseTokenPos = 1;
        };
        for (var o = 0; o < cm.state.overlays.length; ++o)
          loop(o);
        return { styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null };
      }
      function getLineStyles(cm, line, updateFrontier) {
        if (!line.styles || line.styles[0] != cm.state.modeGen) {
          var context = getContextBefore(cm, lineNo(line));
          var resetState = line.text.length > cm.options.maxHighlightLength && copyState(cm.doc.mode, context.state);
          var result = highlightLine(cm, line, context);
          if (resetState) {
            context.state = resetState;
          }
          line.stateAfter = context.save(!resetState);
          line.styles = result.styles;
          if (result.classes) {
            line.styleClasses = result.classes;
          } else if (line.styleClasses) {
            line.styleClasses = null;
          }
          if (updateFrontier === cm.doc.highlightFrontier) {
            cm.doc.modeFrontier = Math.max(cm.doc.modeFrontier, ++cm.doc.highlightFrontier);
          }
        }
        return line.styles;
      }
      function getContextBefore(cm, n, precise) {
        var doc3 = cm.doc, display = cm.display;
        if (!doc3.mode.startState) {
          return new Context(doc3, true, n);
        }
        var start = findStartLine(cm, n, precise);
        var saved = start > doc3.first && getLine(doc3, start - 1).stateAfter;
        var context = saved ? Context.fromSaved(doc3, saved, start) : new Context(doc3, startState(doc3.mode), start);
        doc3.iter(start, n, function(line) {
          processLine(cm, line.text, context);
          var pos = context.line;
          line.stateAfter = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo ? context.save() : null;
          context.nextLine();
        });
        if (precise) {
          doc3.modeFrontier = context.line;
        }
        return context;
      }
      function processLine(cm, text2, context, startAt) {
        var mode = cm.doc.mode;
        var stream = new StringStream(text2, cm.options.tabSize, context);
        stream.start = stream.pos = startAt || 0;
        if (text2 == "") {
          callBlankLine(mode, context.state);
        }
        while (!stream.eol()) {
          readToken(mode, stream, context.state);
          stream.start = stream.pos;
        }
      }
      function callBlankLine(mode, state) {
        if (mode.blankLine) {
          return mode.blankLine(state);
        }
        if (!mode.innerMode) {
          return;
        }
        var inner = innerMode(mode, state);
        if (inner.mode.blankLine) {
          return inner.mode.blankLine(inner.state);
        }
      }
      function readToken(mode, stream, state, inner) {
        for (var i2 = 0; i2 < 10; i2++) {
          if (inner) {
            inner[0] = innerMode(mode, state).mode;
          }
          var style = mode.token(stream, state);
          if (stream.pos > stream.start) {
            return style;
          }
        }
        throw new Error("Mode " + mode.name + " failed to advance stream.");
      }
      var Token = function(stream, type, state) {
        this.start = stream.start;
        this.end = stream.pos;
        this.string = stream.current();
        this.type = type || null;
        this.state = state;
      };
      function takeToken(cm, pos, precise, asArray) {
        var doc3 = cm.doc, mode = doc3.mode, style;
        pos = clipPos(doc3, pos);
        var line = getLine(doc3, pos.line), context = getContextBefore(cm, pos.line, precise);
        var stream = new StringStream(line.text, cm.options.tabSize, context), tokens;
        if (asArray) {
          tokens = [];
        }
        while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
          stream.start = stream.pos;
          style = readToken(mode, stream, context.state);
          if (asArray) {
            tokens.push(new Token(stream, style, copyState(doc3.mode, context.state)));
          }
        }
        return asArray ? tokens : new Token(stream, style, context.state);
      }
      function extractLineClasses(type, output) {
        if (type) {
          for (; ; ) {
            var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!lineClass) {
              break;
            }
            type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
            var prop2 = lineClass[1] ? "bgClass" : "textClass";
            if (output[prop2] == null) {
              output[prop2] = lineClass[2];
            } else if (!new RegExp("(?:^|\\s)" + lineClass[2] + "(?:$|\\s)").test(output[prop2])) {
              output[prop2] += " " + lineClass[2];
            }
          }
        }
        return type;
      }
      function runMode(cm, text2, mode, context, f, lineClasses, forceToEnd) {
        var flattenSpans = mode.flattenSpans;
        if (flattenSpans == null) {
          flattenSpans = cm.options.flattenSpans;
        }
        var curStart = 0, curStyle = null;
        var stream = new StringStream(text2, cm.options.tabSize, context), style;
        var inner = cm.options.addModeClass && [null];
        if (text2 == "") {
          extractLineClasses(callBlankLine(mode, context.state), lineClasses);
        }
        while (!stream.eol()) {
          if (stream.pos > cm.options.maxHighlightLength) {
            flattenSpans = false;
            if (forceToEnd) {
              processLine(cm, text2, context, stream.pos);
            }
            stream.pos = text2.length;
            style = null;
          } else {
            style = extractLineClasses(readToken(mode, stream, context.state, inner), lineClasses);
          }
          if (inner) {
            var mName = inner[0].name;
            if (mName) {
              style = "m-" + (style ? mName + " " + style : mName);
            }
          }
          if (!flattenSpans || curStyle != style) {
            while (curStart < stream.start) {
              curStart = Math.min(stream.start, curStart + 5e3);
              f(curStart, curStyle);
            }
            curStyle = style;
          }
          stream.start = stream.pos;
        }
        while (curStart < stream.pos) {
          var pos = Math.min(stream.pos, curStart + 5e3);
          f(pos, curStyle);
          curStart = pos;
        }
      }
      function findStartLine(cm, n, precise) {
        var minindent, minline, doc3 = cm.doc;
        var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1e3 : 100);
        for (var search = n; search > lim; --search) {
          if (search <= doc3.first) {
            return doc3.first;
          }
          var line = getLine(doc3, search - 1), after = line.stateAfter;
          if (after && (!precise || search + (after instanceof SavedContext ? after.lookAhead : 0) <= doc3.modeFrontier)) {
            return search;
          }
          var indented = countColumn(line.text, null, cm.options.tabSize);
          if (minline == null || minindent > indented) {
            minline = search - 1;
            minindent = indented;
          }
        }
        return minline;
      }
      function retreatFrontier(doc3, n) {
        doc3.modeFrontier = Math.min(doc3.modeFrontier, n);
        if (doc3.highlightFrontier < n - 10) {
          return;
        }
        var start = doc3.first;
        for (var line = n - 1; line > start; line--) {
          var saved = getLine(doc3, line).stateAfter;
          if (saved && (!(saved instanceof SavedContext) || line + saved.lookAhead < n)) {
            start = line + 1;
            break;
          }
        }
        doc3.highlightFrontier = Math.min(doc3.highlightFrontier, start);
      }
      var sawReadOnlySpans = false, sawCollapsedSpans = false;
      function seeReadOnlySpans() {
        sawReadOnlySpans = true;
      }
      function seeCollapsedSpans() {
        sawCollapsedSpans = true;
      }
      function MarkedSpan(marker, from2, to) {
        this.marker = marker;
        this.from = from2;
        this.to = to;
      }
      function getMarkedSpanFor(spans, marker) {
        if (spans) {
          for (var i2 = 0; i2 < spans.length; ++i2) {
            var span = spans[i2];
            if (span.marker == marker) {
              return span;
            }
          }
        }
      }
      function removeMarkedSpan(spans, span) {
        var r;
        for (var i2 = 0; i2 < spans.length; ++i2) {
          if (spans[i2] != span) {
            (r || (r = [])).push(spans[i2]);
          }
        }
        return r;
      }
      function addMarkedSpan(line, span, op) {
        var inThisOp = op && window.WeakSet && (op.markedSpans || (op.markedSpans = /* @__PURE__ */ new WeakSet()));
        if (inThisOp && line.markedSpans && inThisOp.has(line.markedSpans)) {
          line.markedSpans.push(span);
        } else {
          line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
          if (inThisOp) {
            inThisOp.add(line.markedSpans);
          }
        }
        span.marker.attachLine(line);
      }
      function markedSpansBefore(old, startCh, isInsert) {
        var nw;
        if (old) {
          for (var i2 = 0; i2 < old.length; ++i2) {
            var span = old[i2], marker = span.marker;
            var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
            if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
              var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
              (nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
            }
          }
        }
        return nw;
      }
      function markedSpansAfter(old, endCh, isInsert) {
        var nw;
        if (old) {
          for (var i2 = 0; i2 < old.length; ++i2) {
            var span = old[i2], marker = span.marker;
            var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
            if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
              var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
              (nw || (nw = [])).push(new MarkedSpan(
                marker,
                startsBefore ? null : span.from - endCh,
                span.to == null ? null : span.to - endCh
              ));
            }
          }
        }
        return nw;
      }
      function stretchSpansOverChange(doc3, change) {
        if (change.full) {
          return null;
        }
        var oldFirst = isLine(doc3, change.from.line) && getLine(doc3, change.from.line).markedSpans;
        var oldLast = isLine(doc3, change.to.line) && getLine(doc3, change.to.line).markedSpans;
        if (!oldFirst && !oldLast) {
          return null;
        }
        var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
        var first = markedSpansBefore(oldFirst, startCh, isInsert);
        var last2 = markedSpansAfter(oldLast, endCh, isInsert);
        var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
        if (first) {
          for (var i2 = 0; i2 < first.length; ++i2) {
            var span = first[i2];
            if (span.to == null) {
              var found = getMarkedSpanFor(last2, span.marker);
              if (!found) {
                span.to = startCh;
              } else if (sameLine) {
                span.to = found.to == null ? null : found.to + offset;
              }
            }
          }
        }
        if (last2) {
          for (var i$12 = 0; i$12 < last2.length; ++i$12) {
            var span$1 = last2[i$12];
            if (span$1.to != null) {
              span$1.to += offset;
            }
            if (span$1.from == null) {
              var found$1 = getMarkedSpanFor(first, span$1.marker);
              if (!found$1) {
                span$1.from = offset;
                if (sameLine) {
                  (first || (first = [])).push(span$1);
                }
              }
            } else {
              span$1.from += offset;
              if (sameLine) {
                (first || (first = [])).push(span$1);
              }
            }
          }
        }
        if (first) {
          first = clearEmptySpans(first);
        }
        if (last2 && last2 != first) {
          last2 = clearEmptySpans(last2);
        }
        var newMarkers = [first];
        if (!sameLine) {
          var gap = change.text.length - 2, gapMarkers;
          if (gap > 0 && first) {
            for (var i$22 = 0; i$22 < first.length; ++i$22) {
              if (first[i$22].to == null) {
                (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$22].marker, null, null));
              }
            }
          }
          for (var i$3 = 0; i$3 < gap; ++i$3) {
            newMarkers.push(gapMarkers);
          }
          newMarkers.push(last2);
        }
        return newMarkers;
      }
      function clearEmptySpans(spans) {
        for (var i2 = 0; i2 < spans.length; ++i2) {
          var span = spans[i2];
          if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false) {
            spans.splice(i2--, 1);
          }
        }
        if (!spans.length) {
          return null;
        }
        return spans;
      }
      function removeReadOnlyRanges(doc3, from2, to) {
        var markers = null;
        doc3.iter(from2.line, to.line + 1, function(line) {
          if (line.markedSpans) {
            for (var i3 = 0; i3 < line.markedSpans.length; ++i3) {
              var mark = line.markedSpans[i3].marker;
              if (mark.readOnly && (!markers || indexOf(markers, mark) == -1)) {
                (markers || (markers = [])).push(mark);
              }
            }
          }
        });
        if (!markers) {
          return null;
        }
        var parts = [{ from: from2, to }];
        for (var i2 = 0; i2 < markers.length; ++i2) {
          var mk = markers[i2], m = mk.find(0);
          for (var j = 0; j < parts.length; ++j) {
            var p = parts[j];
            if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) {
              continue;
            }
            var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
            if (dfrom < 0 || !mk.inclusiveLeft && !dfrom) {
              newParts.push({ from: p.from, to: m.from });
            }
            if (dto > 0 || !mk.inclusiveRight && !dto) {
              newParts.push({ from: m.to, to: p.to });
            }
            parts.splice.apply(parts, newParts);
            j += newParts.length - 3;
          }
        }
        return parts;
      }
      function detachMarkedSpans(line) {
        var spans = line.markedSpans;
        if (!spans) {
          return;
        }
        for (var i2 = 0; i2 < spans.length; ++i2) {
          spans[i2].marker.detachLine(line);
        }
        line.markedSpans = null;
      }
      function attachMarkedSpans(line, spans) {
        if (!spans) {
          return;
        }
        for (var i2 = 0; i2 < spans.length; ++i2) {
          spans[i2].marker.attachLine(line);
        }
        line.markedSpans = spans;
      }
      function extraLeft(marker) {
        return marker.inclusiveLeft ? -1 : 0;
      }
      function extraRight(marker) {
        return marker.inclusiveRight ? 1 : 0;
      }
      function compareCollapsedMarkers(a, b) {
        var lenDiff = a.lines.length - b.lines.length;
        if (lenDiff != 0) {
          return lenDiff;
        }
        var aPos = a.find(), bPos = b.find();
        var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
        if (fromCmp) {
          return -fromCmp;
        }
        var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
        if (toCmp) {
          return toCmp;
        }
        return b.id - a.id;
      }
      function collapsedSpanAtSide(line, start) {
        var sps = sawCollapsedSpans && line.markedSpans, found;
        if (sps) {
          for (var sp = void 0, i2 = 0; i2 < sps.length; ++i2) {
            sp = sps[i2];
            if (sp.marker.collapsed && (start ? sp.from : sp.to) == null && (!found || compareCollapsedMarkers(found, sp.marker) < 0)) {
              found = sp.marker;
            }
          }
        }
        return found;
      }
      function collapsedSpanAtStart(line) {
        return collapsedSpanAtSide(line, true);
      }
      function collapsedSpanAtEnd(line) {
        return collapsedSpanAtSide(line, false);
      }
      function collapsedSpanAround(line, ch) {
        var sps = sawCollapsedSpans && line.markedSpans, found;
        if (sps) {
          for (var i2 = 0; i2 < sps.length; ++i2) {
            var sp = sps[i2];
            if (sp.marker.collapsed && (sp.from == null || sp.from < ch) && (sp.to == null || sp.to > ch) && (!found || compareCollapsedMarkers(found, sp.marker) < 0)) {
              found = sp.marker;
            }
          }
        }
        return found;
      }
      function conflictingCollapsedRange(doc3, lineNo2, from2, to, marker) {
        var line = getLine(doc3, lineNo2);
        var sps = sawCollapsedSpans && line.markedSpans;
        if (sps) {
          for (var i2 = 0; i2 < sps.length; ++i2) {
            var sp = sps[i2];
            if (!sp.marker.collapsed) {
              continue;
            }
            var found = sp.marker.find(0);
            var fromCmp = cmp(found.from, from2) || extraLeft(sp.marker) - extraLeft(marker);
            var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
            if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) {
              continue;
            }
            if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from2) >= 0 : cmp(found.to, from2) > 0) || fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0)) {
              return true;
            }
          }
        }
      }
      function visualLine(line) {
        var merged;
        while (merged = collapsedSpanAtStart(line)) {
          line = merged.find(-1, true).line;
        }
        return line;
      }
      function visualLineEnd(line) {
        var merged;
        while (merged = collapsedSpanAtEnd(line)) {
          line = merged.find(1, true).line;
        }
        return line;
      }
      function visualLineContinued(line) {
        var merged, lines;
        while (merged = collapsedSpanAtEnd(line)) {
          line = merged.find(1, true).line;
          (lines || (lines = [])).push(line);
        }
        return lines;
      }
      function visualLineNo(doc3, lineN) {
        var line = getLine(doc3, lineN), vis = visualLine(line);
        if (line == vis) {
          return lineN;
        }
        return lineNo(vis);
      }
      function visualLineEndNo(doc3, lineN) {
        if (lineN > doc3.lastLine()) {
          return lineN;
        }
        var line = getLine(doc3, lineN), merged;
        if (!lineIsHidden(doc3, line)) {
          return lineN;
        }
        while (merged = collapsedSpanAtEnd(line)) {
          line = merged.find(1, true).line;
        }
        return lineNo(line) + 1;
      }
      function lineIsHidden(doc3, line) {
        var sps = sawCollapsedSpans && line.markedSpans;
        if (sps) {
          for (var sp = void 0, i2 = 0; i2 < sps.length; ++i2) {
            sp = sps[i2];
            if (!sp.marker.collapsed) {
              continue;
            }
            if (sp.from == null) {
              return true;
            }
            if (sp.marker.widgetNode) {
              continue;
            }
            if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc3, line, sp)) {
              return true;
            }
          }
        }
      }
      function lineIsHiddenInner(doc3, line, span) {
        if (span.to == null) {
          var end = span.marker.find(1, true);
          return lineIsHiddenInner(doc3, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker));
        }
        if (span.marker.inclusiveRight && span.to == line.text.length) {
          return true;
        }
        for (var sp = void 0, i2 = 0; i2 < line.markedSpans.length; ++i2) {
          sp = line.markedSpans[i2];
          if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to && (sp.to == null || sp.to != span.from) && (sp.marker.inclusiveLeft || span.marker.inclusiveRight) && lineIsHiddenInner(doc3, line, sp)) {
            return true;
          }
        }
      }
      function heightAtLine(lineObj) {
        lineObj = visualLine(lineObj);
        var h = 0, chunk = lineObj.parent;
        for (var i2 = 0; i2 < chunk.lines.length; ++i2) {
          var line = chunk.lines[i2];
          if (line == lineObj) {
            break;
          } else {
            h += line.height;
          }
        }
        for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
          for (var i$12 = 0; i$12 < p.children.length; ++i$12) {
            var cur = p.children[i$12];
            if (cur == chunk) {
              break;
            } else {
              h += cur.height;
            }
          }
        }
        return h;
      }
      function lineLength(line) {
        if (line.height == 0) {
          return 0;
        }
        var len = line.text.length, merged, cur = line;
        while (merged = collapsedSpanAtStart(cur)) {
          var found = merged.find(0, true);
          cur = found.from.line;
          len += found.from.ch - found.to.ch;
        }
        cur = line;
        while (merged = collapsedSpanAtEnd(cur)) {
          var found$1 = merged.find(0, true);
          len -= cur.text.length - found$1.from.ch;
          cur = found$1.to.line;
          len += cur.text.length - found$1.to.ch;
        }
        return len;
      }
      function findMaxLine(cm) {
        var d = cm.display, doc3 = cm.doc;
        d.maxLine = getLine(doc3, doc3.first);
        d.maxLineLength = lineLength(d.maxLine);
        d.maxLineChanged = true;
        doc3.iter(function(line) {
          var len = lineLength(line);
          if (len > d.maxLineLength) {
            d.maxLineLength = len;
            d.maxLine = line;
          }
        });
      }
      var Line = function(text2, markedSpans, estimateHeight2) {
        this.text = text2;
        attachMarkedSpans(this, markedSpans);
        this.height = estimateHeight2 ? estimateHeight2(this) : 1;
      };
      Line.prototype.lineNo = function() {
        return lineNo(this);
      };
      eventMixin(Line);
      function updateLine(line, text2, markedSpans, estimateHeight2) {
        line.text = text2;
        if (line.stateAfter) {
          line.stateAfter = null;
        }
        if (line.styles) {
          line.styles = null;
        }
        if (line.order != null) {
          line.order = null;
        }
        detachMarkedSpans(line);
        attachMarkedSpans(line, markedSpans);
        var estHeight = estimateHeight2 ? estimateHeight2(line) : 1;
        if (estHeight != line.height) {
          updateLineHeight(line, estHeight);
        }
      }
      function cleanUpLine(line) {
        line.parent = null;
        detachMarkedSpans(line);
      }
      var styleToClassCache = {}, styleToClassCacheWithMode = {};
      function interpretTokenStyle(style, options) {
        if (!style || /^\s*$/.test(style)) {
          return null;
        }
        var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
        return cache[style] || (cache[style] = style.replace(/\S+/g, "cm-$&"));
      }
      function buildLineContent(cm, lineView) {
        var content = eltP("span", null, null, webkit ? "padding-right: .1px" : null);
        var builder = {
          pre: eltP("pre", [content], "CodeMirror-line"),
          content,
          col: 0,
          pos: 0,
          cm,
          trailingSpace: false,
          splitSpaces: cm.getOption("lineWrapping")
        };
        lineView.measure = {};
        for (var i2 = 0; i2 <= (lineView.rest ? lineView.rest.length : 0); i2++) {
          var line = i2 ? lineView.rest[i2 - 1] : lineView.line, order = void 0;
          builder.pos = 0;
          builder.addToken = buildToken;
          if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line, cm.doc.direction))) {
            builder.addToken = buildTokenBadBidi(builder.addToken, order);
          }
          builder.map = [];
          var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
          insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
          if (line.styleClasses) {
            if (line.styleClasses.bgClass) {
              builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "");
            }
            if (line.styleClasses.textClass) {
              builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "");
            }
          }
          if (builder.map.length == 0) {
            builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure)));
          }
          if (i2 == 0) {
            lineView.measure.map = builder.map;
            lineView.measure.cache = {};
          } else {
            (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map);
            (lineView.measure.caches || (lineView.measure.caches = [])).push({});
          }
        }
        if (webkit) {
          var last2 = builder.content.lastChild;
          if (/\bcm-tab\b/.test(last2.className) || last2.querySelector && last2.querySelector(".cm-tab")) {
            builder.content.className = "cm-tab-wrap-hack";
          }
        }
        signal(cm, "renderLine", cm, lineView.line, builder.pre);
        if (builder.pre.className) {
          builder.textClass = joinClasses(builder.pre.className, builder.textClass || "");
        }
        return builder;
      }
      function defaultSpecialCharPlaceholder(ch) {
        var token = elt("span", "•", "cm-invalidchar");
        token.title = "\\u" + ch.charCodeAt(0).toString(16);
        token.setAttribute("aria-label", token.title);
        return token;
      }
      function buildToken(builder, text2, style, startStyle, endStyle, css2, attributes) {
        if (!text2) {
          return;
        }
        var displayText = builder.splitSpaces ? splitSpaces(text2, builder.trailingSpace) : text2;
        var special = builder.cm.state.specialChars, mustWrap = false;
        var content;
        if (!special.test(text2)) {
          builder.col += text2.length;
          content = document.createTextNode(displayText);
          builder.map.push(builder.pos, builder.pos + text2.length, content);
          if (ie && ie_version < 9) {
            mustWrap = true;
          }
          builder.pos += text2.length;
        } else {
          content = document.createDocumentFragment();
          var pos = 0;
          while (true) {
            special.lastIndex = pos;
            var m = special.exec(text2);
            var skipped = m ? m.index - pos : text2.length - pos;
            if (skipped) {
              var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
              if (ie && ie_version < 9) {
                content.appendChild(elt("span", [txt]));
              } else {
                content.appendChild(txt);
              }
              builder.map.push(builder.pos, builder.pos + skipped, txt);
              builder.col += skipped;
              builder.pos += skipped;
            }
            if (!m) {
              break;
            }
            pos += skipped + 1;
            var txt$1 = void 0;
            if (m[0] == "	") {
              var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
              txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
              txt$1.setAttribute("role", "presentation");
              txt$1.setAttribute("cm-text", "	");
              builder.col += tabWidth;
            } else if (m[0] == "\r" || m[0] == "\n") {
              txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "␍" : "␤", "cm-invalidchar"));
              txt$1.setAttribute("cm-text", m[0]);
              builder.col += 1;
            } else {
              txt$1 = builder.cm.options.specialCharPlaceholder(m[0]);
              txt$1.setAttribute("cm-text", m[0]);
              if (ie && ie_version < 9) {
                content.appendChild(elt("span", [txt$1]));
              } else {
                content.appendChild(txt$1);
              }
              builder.col += 1;
            }
            builder.map.push(builder.pos, builder.pos + 1, txt$1);
            builder.pos++;
          }
        }
        builder.trailingSpace = displayText.charCodeAt(text2.length - 1) == 32;
        if (style || startStyle || endStyle || mustWrap || css2 || attributes) {
          var fullStyle = style || "";
          if (startStyle) {
            fullStyle += startStyle;
          }
          if (endStyle) {
            fullStyle += endStyle;
          }
          var token = elt("span", [content], fullStyle, css2);
          if (attributes) {
            for (var attr2 in attributes) {
              if (attributes.hasOwnProperty(attr2) && attr2 != "style" && attr2 != "class") {
                token.setAttribute(attr2, attributes[attr2]);
              }
            }
          }
          return builder.content.appendChild(token);
        }
        builder.content.appendChild(content);
      }
      function splitSpaces(text2, trailingBefore) {
        if (text2.length > 1 && !/  /.test(text2)) {
          return text2;
        }
        var spaceBefore = trailingBefore, result = "";
        for (var i2 = 0; i2 < text2.length; i2++) {
          var ch = text2.charAt(i2);
          if (ch == " " && spaceBefore && (i2 == text2.length - 1 || text2.charCodeAt(i2 + 1) == 32)) {
            ch = " ";
          }
          result += ch;
          spaceBefore = ch == " ";
        }
        return result;
      }
      function buildTokenBadBidi(inner, order) {
        return function(builder, text2, style, startStyle, endStyle, css2, attributes) {
          style = style ? style + " cm-force-border" : "cm-force-border";
          var start = builder.pos, end = start + text2.length;
          for (; ; ) {
            var part = void 0;
            for (var i2 = 0; i2 < order.length; i2++) {
              part = order[i2];
              if (part.to > start && part.from <= start) {
                break;
              }
            }
            if (part.to >= end) {
              return inner(builder, text2, style, startStyle, endStyle, css2, attributes);
            }
            inner(builder, text2.slice(0, part.to - start), style, startStyle, null, css2, attributes);
            startStyle = null;
            text2 = text2.slice(part.to - start);
            start = part.to;
          }
        };
      }
      function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
        var widget = !ignoreWidget && marker.widgetNode;
        if (widget) {
          builder.map.push(builder.pos, builder.pos + size, widget);
        }
        if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
          if (!widget) {
            widget = builder.content.appendChild(document.createElement("span"));
          }
          widget.setAttribute("cm-marker", marker.id);
        }
        if (widget) {
          builder.cm.display.input.setUneditable(widget);
          builder.content.appendChild(widget);
        }
        builder.pos += size;
        builder.trailingSpace = false;
      }
      function insertLineContent(line, builder, styles) {
        var spans = line.markedSpans, allText = line.text, at = 0;
        if (!spans) {
          for (var i$12 = 1; i$12 < styles.length; i$12 += 2) {
            builder.addToken(builder, allText.slice(at, at = styles[i$12]), interpretTokenStyle(styles[i$12 + 1], builder.cm.options));
          }
          return;
        }
        var len = allText.length, pos = 0, i2 = 1, text2 = "", style, css2;
        var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, collapsed, attributes;
        for (; ; ) {
          if (nextChange == pos) {
            spanStyle = spanEndStyle = spanStartStyle = css2 = "";
            attributes = null;
            collapsed = null;
            nextChange = Infinity;
            var foundBookmarks = [], endStyles = void 0;
            for (var j = 0; j < spans.length; ++j) {
              var sp = spans[j], m = sp.marker;
              if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
                foundBookmarks.push(m);
              } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
                if (sp.to != null && sp.to != pos && nextChange > sp.to) {
                  nextChange = sp.to;
                  spanEndStyle = "";
                }
                if (m.className) {
                  spanStyle += " " + m.className;
                }
                if (m.css) {
                  css2 = (css2 ? css2 + ";" : "") + m.css;
                }
                if (m.startStyle && sp.from == pos) {
                  spanStartStyle += " " + m.startStyle;
                }
                if (m.endStyle && sp.to == nextChange) {
                  (endStyles || (endStyles = [])).push(m.endStyle, sp.to);
                }
                if (m.title) {
                  (attributes || (attributes = {})).title = m.title;
                }
                if (m.attributes) {
                  for (var attr2 in m.attributes) {
                    (attributes || (attributes = {}))[attr2] = m.attributes[attr2];
                  }
                }
                if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0)) {
                  collapsed = sp;
                }
              } else if (sp.from > pos && nextChange > sp.from) {
                nextChange = sp.from;
              }
            }
            if (endStyles) {
              for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2) {
                if (endStyles[j$1 + 1] == nextChange) {
                  spanEndStyle += " " + endStyles[j$1];
                }
              }
            }
            if (!collapsed || collapsed.from == pos) {
              for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2) {
                buildCollapsedSpan(builder, 0, foundBookmarks[j$2]);
              }
            }
            if (collapsed && (collapsed.from || 0) == pos) {
              buildCollapsedSpan(
                builder,
                (collapsed.to == null ? len + 1 : collapsed.to) - pos,
                collapsed.marker,
                collapsed.from == null
              );
              if (collapsed.to == null) {
                return;
              }
              if (collapsed.to == pos) {
                collapsed = false;
              }
            }
          }
          if (pos >= len) {
            break;
          }
          var upto = Math.min(len, nextChange);
          while (true) {
            if (text2) {
              var end = pos + text2.length;
              if (!collapsed) {
                var tokenText = end > upto ? text2.slice(0, upto - pos) : text2;
                builder.addToken(
                  builder,
                  tokenText,
                  style ? style + spanStyle : spanStyle,
                  spanStartStyle,
                  pos + tokenText.length == nextChange ? spanEndStyle : "",
                  css2,
                  attributes
                );
              }
              if (end >= upto) {
                text2 = text2.slice(upto - pos);
                pos = upto;
                break;
              }
              pos = end;
              spanStartStyle = "";
            }
            text2 = allText.slice(at, at = styles[i2++]);
            style = interpretTokenStyle(styles[i2++], builder.cm.options);
          }
        }
      }
      function LineView(doc3, line, lineN) {
        this.line = line;
        this.rest = visualLineContinued(line);
        this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
        this.node = this.text = null;
        this.hidden = lineIsHidden(doc3, line);
      }
      function buildViewArray(cm, from2, to) {
        var array = [], nextPos;
        for (var pos = from2; pos < to; pos = nextPos) {
          var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
          nextPos = pos + view.size;
          array.push(view);
        }
        return array;
      }
      var operationGroup = null;
      function pushOperation(op) {
        if (operationGroup) {
          operationGroup.ops.push(op);
        } else {
          op.ownsGroup = operationGroup = {
            ops: [op],
            delayedCallbacks: []
          };
        }
      }
      function fireCallbacksForOps(group) {
        var callbacks = group.delayedCallbacks, i2 = 0;
        do {
          for (; i2 < callbacks.length; i2++) {
            callbacks[i2].call(null);
          }
          for (var j = 0; j < group.ops.length; j++) {
            var op = group.ops[j];
            if (op.cursorActivityHandlers) {
              while (op.cursorActivityCalled < op.cursorActivityHandlers.length) {
                op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm);
              }
            }
          }
        } while (i2 < callbacks.length);
      }
      function finishOperation(op, endCb) {
        var group = op.ownsGroup;
        if (!group) {
          return;
        }
        try {
          fireCallbacksForOps(group);
        } finally {
          operationGroup = null;
          endCb(group);
        }
      }
      var orphanDelayedCallbacks = null;
      function signalLater(emitter, type) {
        var arr = getHandlers(emitter, type);
        if (!arr.length) {
          return;
        }
        var args = Array.prototype.slice.call(arguments, 2), list;
        if (operationGroup) {
          list = operationGroup.delayedCallbacks;
        } else if (orphanDelayedCallbacks) {
          list = orphanDelayedCallbacks;
        } else {
          list = orphanDelayedCallbacks = [];
          setTimeout(fireOrphanDelayed, 0);
        }
        var loop = function(i3) {
          list.push(function() {
            return arr[i3].apply(null, args);
          });
        };
        for (var i2 = 0; i2 < arr.length; ++i2)
          loop(i2);
      }
      function fireOrphanDelayed() {
        var delayed = orphanDelayedCallbacks;
        orphanDelayedCallbacks = null;
        for (var i2 = 0; i2 < delayed.length; ++i2) {
          delayed[i2]();
        }
      }
      function updateLineForChanges(cm, lineView, lineN, dims) {
        for (var j = 0; j < lineView.changes.length; j++) {
          var type = lineView.changes[j];
          if (type == "text") {
            updateLineText(cm, lineView);
          } else if (type == "gutter") {
            updateLineGutter(cm, lineView, lineN, dims);
          } else if (type == "class") {
            updateLineClasses(cm, lineView);
          } else if (type == "widget") {
            updateLineWidgets(cm, lineView, dims);
          }
        }
        lineView.changes = null;
      }
      function ensureLineWrapped(lineView) {
        if (lineView.node == lineView.text) {
          lineView.node = elt("div", null, null, "position: relative");
          if (lineView.text.parentNode) {
            lineView.text.parentNode.replaceChild(lineView.node, lineView.text);
          }
          lineView.node.appendChild(lineView.text);
          if (ie && ie_version < 8) {
            lineView.node.style.zIndex = 2;
          }
        }
        return lineView.node;
      }
      function updateLineBackground(cm, lineView) {
        var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
        if (cls) {
          cls += " CodeMirror-linebackground";
        }
        if (lineView.background) {
          if (cls) {
            lineView.background.className = cls;
          } else {
            lineView.background.parentNode.removeChild(lineView.background);
            lineView.background = null;
          }
        } else if (cls) {
          var wrap = ensureLineWrapped(lineView);
          lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
          cm.display.input.setUneditable(lineView.background);
        }
      }
      function getLineContent(cm, lineView) {
        var ext = cm.display.externalMeasured;
        if (ext && ext.line == lineView.line) {
          cm.display.externalMeasured = null;
          lineView.measure = ext.measure;
          return ext.built;
        }
        return buildLineContent(cm, lineView);
      }
      function updateLineText(cm, lineView) {
        var cls = lineView.text.className;
        var built = getLineContent(cm, lineView);
        if (lineView.text == lineView.node) {
          lineView.node = built.pre;
        }
        lineView.text.parentNode.replaceChild(built.pre, lineView.text);
        lineView.text = built.pre;
        if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
          lineView.bgClass = built.bgClass;
          lineView.textClass = built.textClass;
          updateLineClasses(cm, lineView);
        } else if (cls) {
          lineView.text.className = cls;
        }
      }
      function updateLineClasses(cm, lineView) {
        updateLineBackground(cm, lineView);
        if (lineView.line.wrapClass) {
          ensureLineWrapped(lineView).className = lineView.line.wrapClass;
        } else if (lineView.node != lineView.text) {
          lineView.node.className = "";
        }
        var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
        lineView.text.className = textClass || "";
      }
      function updateLineGutter(cm, lineView, lineN, dims) {
        if (lineView.gutter) {
          lineView.node.removeChild(lineView.gutter);
          lineView.gutter = null;
        }
        if (lineView.gutterBackground) {
          lineView.node.removeChild(lineView.gutterBackground);
          lineView.gutterBackground = null;
        }
        if (lineView.line.gutterClass) {
          var wrap = ensureLineWrapped(lineView);
          lineView.gutterBackground = elt(
            "div",
            null,
            "CodeMirror-gutter-background " + lineView.line.gutterClass,
            "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + dims.gutterTotalWidth + "px"
          );
          cm.display.input.setUneditable(lineView.gutterBackground);
          wrap.insertBefore(lineView.gutterBackground, lineView.text);
        }
        var markers = lineView.line.gutterMarkers;
        if (cm.options.lineNumbers || markers) {
          var wrap$1 = ensureLineWrapped(lineView);
          var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px");
          gutterWrap.setAttribute("aria-hidden", "true");
          cm.display.input.setUneditable(gutterWrap);
          wrap$1.insertBefore(gutterWrap, lineView.text);
          if (lineView.line.gutterClass) {
            gutterWrap.className += " " + lineView.line.gutterClass;
          }
          if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"])) {
            lineView.lineNumber = gutterWrap.appendChild(
              elt(
                "div",
                lineNumberFor(cm.options, lineN),
                "CodeMirror-linenumber CodeMirror-gutter-elt",
                "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + cm.display.lineNumInnerWidth + "px"
              )
            );
          }
          if (markers) {
            for (var k = 0; k < cm.display.gutterSpecs.length; ++k) {
              var id = cm.display.gutterSpecs[k].className, found = markers.hasOwnProperty(id) && markers[id];
              if (found) {
                gutterWrap.appendChild(elt(
                  "div",
                  [found],
                  "CodeMirror-gutter-elt",
                  "left: " + dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"
                ));
              }
            }
          }
        }
      }
      function updateLineWidgets(cm, lineView, dims) {
        if (lineView.alignable) {
          lineView.alignable = null;
        }
        var isWidget = classTest("CodeMirror-linewidget");
        for (var node = lineView.node.firstChild, next = void 0; node; node = next) {
          next = node.nextSibling;
          if (isWidget.test(node.className)) {
            lineView.node.removeChild(node);
          }
        }
        insertLineWidgets(cm, lineView, dims);
      }
      function buildLineElement(cm, lineView, lineN, dims) {
        var built = getLineContent(cm, lineView);
        lineView.text = lineView.node = built.pre;
        if (built.bgClass) {
          lineView.bgClass = built.bgClass;
        }
        if (built.textClass) {
          lineView.textClass = built.textClass;
        }
        updateLineClasses(cm, lineView);
        updateLineGutter(cm, lineView, lineN, dims);
        insertLineWidgets(cm, lineView, dims);
        return lineView.node;
      }
      function insertLineWidgets(cm, lineView, dims) {
        insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
        if (lineView.rest) {
          for (var i2 = 0; i2 < lineView.rest.length; i2++) {
            insertLineWidgetsFor(cm, lineView.rest[i2], lineView, dims, false);
          }
        }
      }
      function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
        if (!line.widgets) {
          return;
        }
        var wrap = ensureLineWrapped(lineView);
        for (var i2 = 0, ws = line.widgets; i2 < ws.length; ++i2) {
          var widget = ws[i2], node = elt("div", [widget.node], "CodeMirror-linewidget" + (widget.className ? " " + widget.className : ""));
          if (!widget.handleMouseEvents) {
            node.setAttribute("cm-ignore-events", "true");
          }
          positionLineWidget(widget, node, lineView, dims);
          cm.display.input.setUneditable(node);
          if (allowAbove && widget.above) {
            wrap.insertBefore(node, lineView.gutter || lineView.text);
          } else {
            wrap.appendChild(node);
          }
          signalLater(widget, "redraw");
        }
      }
      function positionLineWidget(widget, node, lineView, dims) {
        if (widget.noHScroll) {
          (lineView.alignable || (lineView.alignable = [])).push(node);
          var width = dims.wrapperWidth;
          node.style.left = dims.fixedPos + "px";
          if (!widget.coverGutter) {
            width -= dims.gutterTotalWidth;
            node.style.paddingLeft = dims.gutterTotalWidth + "px";
          }
          node.style.width = width + "px";
        }
        if (widget.coverGutter) {
          node.style.zIndex = 5;
          node.style.position = "relative";
          if (!widget.noHScroll) {
            node.style.marginLeft = -dims.gutterTotalWidth + "px";
          }
        }
      }
      function widgetHeight(widget) {
        if (widget.height != null) {
          return widget.height;
        }
        var cm = widget.doc.cm;
        if (!cm) {
          return 0;
        }
        if (!contains(document.body, widget.node)) {
          var parentStyle = "position: relative;";
          if (widget.coverGutter) {
            parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;";
          }
          if (widget.noHScroll) {
            parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;";
          }
          removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
        }
        return widget.height = widget.node.parentNode.offsetHeight;
      }
      function eventInWidget(display, e) {
        for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
          if (!n || n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true" || n.parentNode == display.sizer && n != display.mover) {
            return true;
          }
        }
      }
      function paddingTop(display) {
        return display.lineSpace.offsetTop;
      }
      function paddingVert(display) {
        return display.mover.offsetHeight - display.lineSpace.offsetHeight;
      }
      function paddingH(display) {
        if (display.cachedPaddingH) {
          return display.cachedPaddingH;
        }
        var e = removeChildrenAndAdd(display.measure, elt("pre", "x", "CodeMirror-line-like"));
        var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
        var data = { left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight) };
        if (!isNaN(data.left) && !isNaN(data.right)) {
          display.cachedPaddingH = data;
        }
        return data;
      }
      function scrollGap(cm) {
        return scrollerGap - cm.display.nativeBarWidth;
      }
      function displayWidth(cm) {
        return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth;
      }
      function displayHeight(cm) {
        return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight;
      }
      function ensureLineHeights(cm, lineView, rect) {
        var wrapping = cm.options.lineWrapping;
        var curWidth = wrapping && displayWidth(cm);
        if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
          var heights = lineView.measure.heights = [];
          if (wrapping) {
            lineView.measure.width = curWidth;
            var rects = lineView.text.firstChild.getClientRects();
            for (var i2 = 0; i2 < rects.length - 1; i2++) {
              var cur = rects[i2], next = rects[i2 + 1];
              if (Math.abs(cur.bottom - next.bottom) > 2) {
                heights.push((cur.bottom + next.top) / 2 - rect.top);
              }
            }
          }
          heights.push(rect.bottom - rect.top);
        }
      }
      function mapFromLineView(lineView, line, lineN) {
        if (lineView.line == line) {
          return { map: lineView.measure.map, cache: lineView.measure.cache };
        }
        if (lineView.rest) {
          for (var i2 = 0; i2 < lineView.rest.length; i2++) {
            if (lineView.rest[i2] == line) {
              return { map: lineView.measure.maps[i2], cache: lineView.measure.caches[i2] };
            }
          }
          for (var i$12 = 0; i$12 < lineView.rest.length; i$12++) {
            if (lineNo(lineView.rest[i$12]) > lineN) {
              return { map: lineView.measure.maps[i$12], cache: lineView.measure.caches[i$12], before: true };
            }
          }
        }
      }
      function updateExternalMeasurement(cm, line) {
        line = visualLine(line);
        var lineN = lineNo(line);
        var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
        view.lineN = lineN;
        var built = view.built = buildLineContent(cm, view);
        view.text = built.pre;
        removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
        return view;
      }
      function measureChar(cm, line, ch, bias) {
        return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias);
      }
      function findViewForLine(cm, lineN) {
        if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo) {
          return cm.display.view[findViewIndex(cm, lineN)];
        }
        var ext = cm.display.externalMeasured;
        if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size) {
          return ext;
        }
      }
      function prepareMeasureForLine(cm, line) {
        var lineN = lineNo(line);
        var view = findViewForLine(cm, lineN);
        if (view && !view.text) {
          view = null;
        } else if (view && view.changes) {
          updateLineForChanges(cm, view, lineN, getDimensions(cm));
          cm.curOp.forceUpdate = true;
        }
        if (!view) {
          view = updateExternalMeasurement(cm, line);
        }
        var info = mapFromLineView(view, line, lineN);
        return {
          line,
          view,
          rect: null,
          map: info.map,
          cache: info.cache,
          before: info.before,
          hasHeights: false
        };
      }
      function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
        if (prepared.before) {
          ch = -1;
        }
        var key = ch + (bias || ""), found;
        if (prepared.cache.hasOwnProperty(key)) {
          found = prepared.cache[key];
        } else {
          if (!prepared.rect) {
            prepared.rect = prepared.view.text.getBoundingClientRect();
          }
          if (!prepared.hasHeights) {
            ensureLineHeights(cm, prepared.view, prepared.rect);
            prepared.hasHeights = true;
          }
          found = measureCharInner(cm, prepared, ch, bias);
          if (!found.bogus) {
            prepared.cache[key] = found;
          }
        }
        return {
          left: found.left,
          right: found.right,
          top: varHeight ? found.rtop : found.top,
          bottom: varHeight ? found.rbottom : found.bottom
        };
      }
      var nullRect = { left: 0, right: 0, top: 0, bottom: 0 };
      function nodeAndOffsetInLineMap(map3, ch, bias) {
        var node, start, end, collapse, mStart, mEnd;
        for (var i2 = 0; i2 < map3.length; i2 += 3) {
          mStart = map3[i2];
          mEnd = map3[i2 + 1];
          if (ch < mStart) {
            start = 0;
            end = 1;
            collapse = "left";
          } else if (ch < mEnd) {
            start = ch - mStart;
            end = start + 1;
          } else if (i2 == map3.length - 3 || ch == mEnd && map3[i2 + 3] > ch) {
            end = mEnd - mStart;
            start = end - 1;
            if (ch >= mEnd) {
              collapse = "right";
            }
          }
          if (start != null) {
            node = map3[i2 + 2];
            if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right")) {
              collapse = bias;
            }
            if (bias == "left" && start == 0) {
              while (i2 && map3[i2 - 2] == map3[i2 - 3] && map3[i2 - 1].insertLeft) {
                node = map3[(i2 -= 3) + 2];
                collapse = "left";
              }
            }
            if (bias == "right" && start == mEnd - mStart) {
              while (i2 < map3.length - 3 && map3[i2 + 3] == map3[i2 + 4] && !map3[i2 + 5].insertLeft) {
                node = map3[(i2 += 3) + 2];
                collapse = "right";
              }
            }
            break;
          }
        }
        return { node, start, end, collapse, coverStart: mStart, coverEnd: mEnd };
      }
      function getUsefulRect(rects, bias) {
        var rect = nullRect;
        if (bias == "left") {
          for (var i2 = 0; i2 < rects.length; i2++) {
            if ((rect = rects[i2]).left != rect.right) {
              break;
            }
          }
        } else {
          for (var i$12 = rects.length - 1; i$12 >= 0; i$12--) {
            if ((rect = rects[i$12]).left != rect.right) {
              break;
            }
          }
        }
        return rect;
      }
      function measureCharInner(cm, prepared, ch, bias) {
        var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
        var node = place.node, start = place.start, end = place.end, collapse = place.collapse;
        var rect;
        if (node.nodeType == 3) {
          for (var i$12 = 0; i$12 < 4; i$12++) {
            while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) {
              --start;
            }
            while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) {
              ++end;
            }
            if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart) {
              rect = node.parentNode.getBoundingClientRect();
            } else {
              rect = getUsefulRect(range(node, start, end).getClientRects(), bias);
            }
            if (rect.left || rect.right || start == 0) {
              break;
            }
            end = start;
            start = start - 1;
            collapse = "right";
          }
          if (ie && ie_version < 11) {
            rect = maybeUpdateRectForZooming(cm.display.measure, rect);
          }
        } else {
          if (start > 0) {
            collapse = bias = "right";
          }
          var rects;
          if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1) {
            rect = rects[bias == "right" ? rects.length - 1 : 0];
          } else {
            rect = node.getBoundingClientRect();
          }
        }
        if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
          var rSpan = node.parentNode.getClientRects()[0];
          if (rSpan) {
            rect = { left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom };
          } else {
            rect = nullRect;
          }
        }
        var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
        var mid = (rtop + rbot) / 2;
        var heights = prepared.view.measure.heights;
        var i2 = 0;
        for (; i2 < heights.length - 1; i2++) {
          if (mid < heights[i2]) {
            break;
          }
        }
        var top = i2 ? heights[i2 - 1] : 0, bot = heights[i2];
        var result = {
          left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
          right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
          top,
          bottom: bot
        };
        if (!rect.left && !rect.right) {
          result.bogus = true;
        }
        if (!cm.options.singleCursorHeightPerLine) {
          result.rtop = rtop;
          result.rbottom = rbot;
        }
        return result;
      }
      function maybeUpdateRectForZooming(measure, rect) {
        if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure)) {
          return rect;
        }
        var scaleX = screen.logicalXDPI / screen.deviceXDPI;
        var scaleY = screen.logicalYDPI / screen.deviceYDPI;
        return {
          left: rect.left * scaleX,
          right: rect.right * scaleX,
          top: rect.top * scaleY,
          bottom: rect.bottom * scaleY
        };
      }
      function clearLineMeasurementCacheFor(lineView) {
        if (lineView.measure) {
          lineView.measure.cache = {};
          lineView.measure.heights = null;
          if (lineView.rest) {
            for (var i2 = 0; i2 < lineView.rest.length; i2++) {
              lineView.measure.caches[i2] = {};
            }
          }
        }
      }
      function clearLineMeasurementCache(cm) {
        cm.display.externalMeasure = null;
        removeChildren(cm.display.lineMeasure);
        for (var i2 = 0; i2 < cm.display.view.length; i2++) {
          clearLineMeasurementCacheFor(cm.display.view[i2]);
        }
      }
      function clearCaches(cm) {
        clearLineMeasurementCache(cm);
        cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
        if (!cm.options.lineWrapping) {
          cm.display.maxLineChanged = true;
        }
        cm.display.lineNumChars = null;
      }
      function pageScrollX(doc3) {
        if (chrome && android) {
          return -(doc3.body.getBoundingClientRect().left - parseInt(getComputedStyle(doc3.body).marginLeft));
        }
        return doc3.defaultView.pageXOffset || (doc3.documentElement || doc3.body).scrollLeft;
      }
      function pageScrollY(doc3) {
        if (chrome && android) {
          return -(doc3.body.getBoundingClientRect().top - parseInt(getComputedStyle(doc3.body).marginTop));
        }
        return doc3.defaultView.pageYOffset || (doc3.documentElement || doc3.body).scrollTop;
      }
      function widgetTopHeight(lineObj) {
        var ref = visualLine(lineObj);
        var widgets = ref.widgets;
        var height = 0;
        if (widgets) {
          for (var i2 = 0; i2 < widgets.length; ++i2) {
            if (widgets[i2].above) {
              height += widgetHeight(widgets[i2]);
            }
          }
        }
        return height;
      }
      function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
        if (!includeWidgets) {
          var height = widgetTopHeight(lineObj);
          rect.top += height;
          rect.bottom += height;
        }
        if (context == "line") {
          return rect;
        }
        if (!context) {
          context = "local";
        }
        var yOff = heightAtLine(lineObj);
        if (context == "local") {
          yOff += paddingTop(cm.display);
        } else {
          yOff -= cm.display.viewOffset;
        }
        if (context == "page" || context == "window") {
          var lOff = cm.display.lineSpace.getBoundingClientRect();
          yOff += lOff.top + (context == "window" ? 0 : pageScrollY(doc2(cm)));
          var xOff = lOff.left + (context == "window" ? 0 : pageScrollX(doc2(cm)));
          rect.left += xOff;
          rect.right += xOff;
        }
        rect.top += yOff;
        rect.bottom += yOff;
        return rect;
      }
      function fromCoordSystem(cm, coords, context) {
        if (context == "div") {
          return coords;
        }
        var left = coords.left, top = coords.top;
        if (context == "page") {
          left -= pageScrollX(doc2(cm));
          top -= pageScrollY(doc2(cm));
        } else if (context == "local" || !context) {
          var localBox = cm.display.sizer.getBoundingClientRect();
          left += localBox.left;
          top += localBox.top;
        }
        var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
        return { left: left - lineSpaceBox.left, top: top - lineSpaceBox.top };
      }
      function charCoords(cm, pos, context, lineObj, bias) {
        if (!lineObj) {
          lineObj = getLine(cm.doc, pos.line);
        }
        return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context);
      }
      function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
        lineObj = lineObj || getLine(cm.doc, pos.line);
        if (!preparedMeasure) {
          preparedMeasure = prepareMeasureForLine(cm, lineObj);
        }
        function get(ch2, right) {
          var m = measureCharPrepared(cm, preparedMeasure, ch2, right ? "right" : "left", varHeight);
          if (right) {
            m.left = m.right;
          } else {
            m.right = m.left;
          }
          return intoCoordSystem(cm, lineObj, m, context);
        }
        var order = getOrder(lineObj, cm.doc.direction), ch = pos.ch, sticky = pos.sticky;
        if (ch >= lineObj.text.length) {
          ch = lineObj.text.length;
          sticky = "before";
        } else if (ch <= 0) {
          ch = 0;
          sticky = "after";
        }
        if (!order) {
          return get(sticky == "before" ? ch - 1 : ch, sticky == "before");
        }
        function getBidi(ch2, partPos2, invert) {
          var part = order[partPos2], right = part.level == 1;
          return get(invert ? ch2 - 1 : ch2, right != invert);
        }
        var partPos = getBidiPartAt(order, ch, sticky);
        var other = bidiOther;
        var val = getBidi(ch, partPos, sticky == "before");
        if (other != null) {
          val.other = getBidi(ch, other, sticky != "before");
        }
        return val;
      }
      function estimateCoords(cm, pos) {
        var left = 0;
        pos = clipPos(cm.doc, pos);
        if (!cm.options.lineWrapping) {
          left = charWidth(cm.display) * pos.ch;
        }
        var lineObj = getLine(cm.doc, pos.line);
        var top = heightAtLine(lineObj) + paddingTop(cm.display);
        return { left, right: left, top, bottom: top + lineObj.height };
      }
      function PosWithInfo(line, ch, sticky, outside, xRel) {
        var pos = Pos(line, ch, sticky);
        pos.xRel = xRel;
        if (outside) {
          pos.outside = outside;
        }
        return pos;
      }
      function coordsChar(cm, x, y) {
        var doc3 = cm.doc;
        y += cm.display.viewOffset;
        if (y < 0) {
          return PosWithInfo(doc3.first, 0, null, -1, -1);
        }
        var lineN = lineAtHeight(doc3, y), last2 = doc3.first + doc3.size - 1;
        if (lineN > last2) {
          return PosWithInfo(doc3.first + doc3.size - 1, getLine(doc3, last2).text.length, null, 1, 1);
        }
        if (x < 0) {
          x = 0;
        }
        var lineObj = getLine(doc3, lineN);
        for (; ; ) {
          var found = coordsCharInner(cm, lineObj, lineN, x, y);
          var collapsed = collapsedSpanAround(lineObj, found.ch + (found.xRel > 0 || found.outside > 0 ? 1 : 0));
          if (!collapsed) {
            return found;
          }
          var rangeEnd = collapsed.find(1);
          if (rangeEnd.line == lineN) {
            return rangeEnd;
          }
          lineObj = getLine(doc3, lineN = rangeEnd.line);
        }
      }
      function wrappedLineExtent(cm, lineObj, preparedMeasure, y) {
        y -= widgetTopHeight(lineObj);
        var end = lineObj.text.length;
        var begin = findFirst(function(ch) {
          return measureCharPrepared(cm, preparedMeasure, ch - 1).bottom <= y;
        }, end, 0);
        end = findFirst(function(ch) {
          return measureCharPrepared(cm, preparedMeasure, ch).top > y;
        }, begin, end);
        return { begin, end };
      }
      function wrappedLineExtentChar(cm, lineObj, preparedMeasure, target) {
        if (!preparedMeasure) {
          preparedMeasure = prepareMeasureForLine(cm, lineObj);
        }
        var targetTop = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, target), "line").top;
        return wrappedLineExtent(cm, lineObj, preparedMeasure, targetTop);
      }
      function boxIsAfter(box, x, y, left) {
        return box.bottom <= y ? false : box.top > y ? true : (left ? box.left : box.right) > x;
      }
      function coordsCharInner(cm, lineObj, lineNo2, x, y) {
        y -= heightAtLine(lineObj);
        var preparedMeasure = prepareMeasureForLine(cm, lineObj);
        var widgetHeight2 = widgetTopHeight(lineObj);
        var begin = 0, end = lineObj.text.length, ltr = true;
        var order = getOrder(lineObj, cm.doc.direction);
        if (order) {
          var part = (cm.options.lineWrapping ? coordsBidiPartWrapped : coordsBidiPart)(cm, lineObj, lineNo2, preparedMeasure, order, x, y);
          ltr = part.level != 1;
          begin = ltr ? part.from : part.to - 1;
          end = ltr ? part.to : part.from - 1;
        }
        var chAround = null, boxAround = null;
        var ch = findFirst(function(ch2) {
          var box = measureCharPrepared(cm, preparedMeasure, ch2);
          box.top += widgetHeight2;
          box.bottom += widgetHeight2;
          if (!boxIsAfter(box, x, y, false)) {
            return false;
          }
          if (box.top <= y && box.left <= x) {
            chAround = ch2;
            boxAround = box;
          }
          return true;
        }, begin, end);
        var baseX, sticky, outside = false;
        if (boxAround) {
          var atLeft = x - boxAround.left < boxAround.right - x, atStart = atLeft == ltr;
          ch = chAround + (atStart ? 0 : 1);
          sticky = atStart ? "after" : "before";
          baseX = atLeft ? boxAround.left : boxAround.right;
        } else {
          if (!ltr && (ch == end || ch == begin)) {
            ch++;
          }
          sticky = ch == 0 ? "after" : ch == lineObj.text.length ? "before" : measureCharPrepared(cm, preparedMeasure, ch - (ltr ? 1 : 0)).bottom + widgetHeight2 <= y == ltr ? "after" : "before";
          var coords = cursorCoords(cm, Pos(lineNo2, ch, sticky), "line", lineObj, preparedMeasure);
          baseX = coords.left;
          outside = y < coords.top ? -1 : y >= coords.bottom ? 1 : 0;
        }
        ch = skipExtendingChars(lineObj.text, ch, 1);
        return PosWithInfo(lineNo2, ch, sticky, outside, x - baseX);
      }
      function coordsBidiPart(cm, lineObj, lineNo2, preparedMeasure, order, x, y) {
        var index = findFirst(function(i2) {
          var part2 = order[i2], ltr2 = part2.level != 1;
          return boxIsAfter(cursorCoords(
            cm,
            Pos(lineNo2, ltr2 ? part2.to : part2.from, ltr2 ? "before" : "after"),
            "line",
            lineObj,
            preparedMeasure
          ), x, y, true);
        }, 0, order.length - 1);
        var part = order[index];
        if (index > 0) {
          var ltr = part.level != 1;
          var start = cursorCoords(
            cm,
            Pos(lineNo2, ltr ? part.from : part.to, ltr ? "after" : "before"),
            "line",
            lineObj,
            preparedMeasure
          );
          if (boxIsAfter(start, x, y, true) && start.top > y) {
            part = order[index - 1];
          }
        }
        return part;
      }
      function coordsBidiPartWrapped(cm, lineObj, _lineNo, preparedMeasure, order, x, y) {
        var ref = wrappedLineExtent(cm, lineObj, preparedMeasure, y);
        var begin = ref.begin;
        var end = ref.end;
        if (/\s/.test(lineObj.text.charAt(end - 1))) {
          end--;
        }
        var part = null, closestDist = null;
        for (var i2 = 0; i2 < order.length; i2++) {
          var p = order[i2];
          if (p.from >= end || p.to <= begin) {
            continue;
          }
          var ltr = p.level != 1;
          var endX = measureCharPrepared(cm, preparedMeasure, ltr ? Math.min(end, p.to) - 1 : Math.max(begin, p.from)).right;
          var dist = endX < x ? x - endX + 1e9 : endX - x;
          if (!part || closestDist > dist) {
            part = p;
            closestDist = dist;
          }
        }
        if (!part) {
          part = order[order.length - 1];
        }
        if (part.from < begin) {
          part = { from: begin, to: part.to, level: part.level };
        }
        if (part.to > end) {
          part = { from: part.from, to: end, level: part.level };
        }
        return part;
      }
      var measureText;
      function textHeight(display) {
        if (display.cachedTextHeight != null) {
          return display.cachedTextHeight;
        }
        if (measureText == null) {
          measureText = elt("pre", null, "CodeMirror-line-like");
          for (var i2 = 0; i2 < 49; ++i2) {
            measureText.appendChild(document.createTextNode("x"));
            measureText.appendChild(elt("br"));
          }
          measureText.appendChild(document.createTextNode("x"));
        }
        removeChildrenAndAdd(display.measure, measureText);
        var height = measureText.offsetHeight / 50;
        if (height > 3) {
          display.cachedTextHeight = height;
        }
        removeChildren(display.measure);
        return height || 1;
      }
      function charWidth(display) {
        if (display.cachedCharWidth != null) {
          return display.cachedCharWidth;
        }
        var anchor = elt("span", "xxxxxxxxxx");
        var pre = elt("pre", [anchor], "CodeMirror-line-like");
        removeChildrenAndAdd(display.measure, pre);
        var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
        if (width > 2) {
          display.cachedCharWidth = width;
        }
        return width || 10;
      }
      function getDimensions(cm) {
        var d = cm.display, left = {}, width = {};
        var gutterLeft = d.gutters.clientLeft;
        for (var n = d.gutters.firstChild, i2 = 0; n; n = n.nextSibling, ++i2) {
          var id = cm.display.gutterSpecs[i2].className;
          left[id] = n.offsetLeft + n.clientLeft + gutterLeft;
          width[id] = n.clientWidth;
        }
        return {
          fixedPos: compensateForHScroll(d),
          gutterTotalWidth: d.gutters.offsetWidth,
          gutterLeft: left,
          gutterWidth: width,
          wrapperWidth: d.wrapper.clientWidth
        };
      }
      function compensateForHScroll(display) {
        return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left;
      }
      function estimateHeight(cm) {
        var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
        var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
        return function(line) {
          if (lineIsHidden(cm.doc, line)) {
            return 0;
          }
          var widgetsHeight = 0;
          if (line.widgets) {
            for (var i2 = 0; i2 < line.widgets.length; i2++) {
              if (line.widgets[i2].height) {
                widgetsHeight += line.widgets[i2].height;
              }
            }
          }
          if (wrapping) {
            return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th;
          } else {
            return widgetsHeight + th;
          }
        };
      }
      function estimateLineHeights(cm) {
        var doc3 = cm.doc, est = estimateHeight(cm);
        doc3.iter(function(line) {
          var estHeight = est(line);
          if (estHeight != line.height) {
            updateLineHeight(line, estHeight);
          }
        });
      }
      function posFromMouse(cm, e, liberal, forRect) {
        var display = cm.display;
        if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") {
          return null;
        }
        var x, y, space2 = display.lineSpace.getBoundingClientRect();
        try {
          x = e.clientX - space2.left;
          y = e.clientY - space2.top;
        } catch (e$1) {
          return null;
        }
        var coords = coordsChar(cm, x, y), line;
        if (forRect && coords.xRel > 0 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
          var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
          coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
        }
        return coords;
      }
      function findViewIndex(cm, n) {
        if (n >= cm.display.viewTo) {
          return null;
        }
        n -= cm.display.viewFrom;
        if (n < 0) {
          return null;
        }
        var view = cm.display.view;
        for (var i2 = 0; i2 < view.length; i2++) {
          n -= view[i2].size;
          if (n < 0) {
            return i2;
          }
        }
      }
      function regChange(cm, from2, to, lendiff) {
        if (from2 == null) {
          from2 = cm.doc.first;
        }
        if (to == null) {
          to = cm.doc.first + cm.doc.size;
        }
        if (!lendiff) {
          lendiff = 0;
        }
        var display = cm.display;
        if (lendiff && to < display.viewTo && (display.updateLineNumbers == null || display.updateLineNumbers > from2)) {
          display.updateLineNumbers = from2;
        }
        cm.curOp.viewChanged = true;
        if (from2 >= display.viewTo) {
          if (sawCollapsedSpans && visualLineNo(cm.doc, from2) < display.viewTo) {
            resetView(cm);
          }
        } else if (to <= display.viewFrom) {
          if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
            resetView(cm);
          } else {
            display.viewFrom += lendiff;
            display.viewTo += lendiff;
          }
        } else if (from2 <= display.viewFrom && to >= display.viewTo) {
          resetView(cm);
        } else if (from2 <= display.viewFrom) {
          var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
          if (cut) {
            display.view = display.view.slice(cut.index);
            display.viewFrom = cut.lineN;
            display.viewTo += lendiff;
          } else {
            resetView(cm);
          }
        } else if (to >= display.viewTo) {
          var cut$1 = viewCuttingPoint(cm, from2, from2, -1);
          if (cut$1) {
            display.view = display.view.slice(0, cut$1.index);
            display.viewTo = cut$1.lineN;
          } else {
            resetView(cm);
          }
        } else {
          var cutTop = viewCuttingPoint(cm, from2, from2, -1);
          var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
          if (cutTop && cutBot) {
            display.view = display.view.slice(0, cutTop.index).concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN)).concat(display.view.slice(cutBot.index));
            display.viewTo += lendiff;
          } else {
            resetView(cm);
          }
        }
        var ext = display.externalMeasured;
        if (ext) {
          if (to < ext.lineN) {
            ext.lineN += lendiff;
          } else if (from2 < ext.lineN + ext.size) {
            display.externalMeasured = null;
          }
        }
      }
      function regLineChange(cm, line, type) {
        cm.curOp.viewChanged = true;
        var display = cm.display, ext = cm.display.externalMeasured;
        if (ext && line >= ext.lineN && line < ext.lineN + ext.size) {
          display.externalMeasured = null;
        }
        if (line < display.viewFrom || line >= display.viewTo) {
          return;
        }
        var lineView = display.view[findViewIndex(cm, line)];
        if (lineView.node == null) {
          return;
        }
        var arr = lineView.changes || (lineView.changes = []);
        if (indexOf(arr, type) == -1) {
          arr.push(type);
        }
      }
      function resetView(cm) {
        cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
        cm.display.view = [];
        cm.display.viewOffset = 0;
      }
      function viewCuttingPoint(cm, oldN, newN, dir) {
        var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
        if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size) {
          return { index, lineN: newN };
        }
        var n = cm.display.viewFrom;
        for (var i2 = 0; i2 < index; i2++) {
          n += view[i2].size;
        }
        if (n != oldN) {
          if (dir > 0) {
            if (index == view.length - 1) {
              return null;
            }
            diff = n + view[index].size - oldN;
            index++;
          } else {
            diff = n - oldN;
          }
          oldN += diff;
          newN += diff;
        }
        while (visualLineNo(cm.doc, newN) != newN) {
          if (index == (dir < 0 ? 0 : view.length - 1)) {
            return null;
          }
          newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
          index += dir;
        }
        return { index, lineN: newN };
      }
      function adjustView(cm, from2, to) {
        var display = cm.display, view = display.view;
        if (view.length == 0 || from2 >= display.viewTo || to <= display.viewFrom) {
          display.view = buildViewArray(cm, from2, to);
          display.viewFrom = from2;
        } else {
          if (display.viewFrom > from2) {
            display.view = buildViewArray(cm, from2, display.viewFrom).concat(display.view);
          } else if (display.viewFrom < from2) {
            display.view = display.view.slice(findViewIndex(cm, from2));
          }
          display.viewFrom = from2;
          if (display.viewTo < to) {
            display.view = display.view.concat(buildViewArray(cm, display.viewTo, to));
          } else if (display.viewTo > to) {
            display.view = display.view.slice(0, findViewIndex(cm, to));
          }
        }
        display.viewTo = to;
      }
      function countDirtyView(cm) {
        var view = cm.display.view, dirty = 0;
        for (var i2 = 0; i2 < view.length; i2++) {
          var lineView = view[i2];
          if (!lineView.hidden && (!lineView.node || lineView.changes)) {
            ++dirty;
          }
        }
        return dirty;
      }
      function updateSelection(cm) {
        cm.display.input.showSelection(cm.display.input.prepareSelection());
      }
      function prepareSelection(cm, primary) {
        if (primary === void 0)
          primary = true;
        var doc3 = cm.doc, result = {};
        var curFragment = result.cursors = document.createDocumentFragment();
        var selFragment = result.selection = document.createDocumentFragment();
        var customCursor = cm.options.$customCursor;
        if (customCursor) {
          primary = true;
        }
        for (var i2 = 0; i2 < doc3.sel.ranges.length; i2++) {
          if (!primary && i2 == doc3.sel.primIndex) {
            continue;
          }
          var range2 = doc3.sel.ranges[i2];
          if (range2.from().line >= cm.display.viewTo || range2.to().line < cm.display.viewFrom) {
            continue;
          }
          var collapsed = range2.empty();
          if (customCursor) {
            var head = customCursor(cm, range2);
            if (head) {
              drawSelectionCursor(cm, head, curFragment);
            }
          } else if (collapsed || cm.options.showCursorWhenSelecting) {
            drawSelectionCursor(cm, range2.head, curFragment);
          }
          if (!collapsed) {
            drawSelectionRange(cm, range2, selFragment);
          }
        }
        return result;
      }
      function drawSelectionCursor(cm, head, output) {
        var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);
        var cursor = output.appendChild(elt("div", " ", "CodeMirror-cursor"));
        cursor.style.left = pos.left + "px";
        cursor.style.top = pos.top + "px";
        cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";
        if (/\bcm-fat-cursor\b/.test(cm.getWrapperElement().className)) {
          var charPos = charCoords(cm, head, "div", null, null);
          var width = charPos.right - charPos.left;
          cursor.style.width = (width > 0 ? width : cm.defaultCharWidth()) + "px";
        }
        if (pos.other) {
          var otherCursor = output.appendChild(elt("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
          otherCursor.style.display = "";
          otherCursor.style.left = pos.other.left + "px";
          otherCursor.style.top = pos.other.top + "px";
          otherCursor.style.height = (pos.other.bottom - pos.other.top) * 0.85 + "px";
        }
      }
      function cmpCoords(a, b) {
        return a.top - b.top || a.left - b.left;
      }
      function drawSelectionRange(cm, range2, output) {
        var display = cm.display, doc3 = cm.doc;
        var fragment = document.createDocumentFragment();
        var padding = paddingH(cm.display), leftSide = padding.left;
        var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;
        var docLTR = doc3.direction == "ltr";
        function add2(left, top, width, bottom) {
          if (top < 0) {
            top = 0;
          }
          top = Math.round(top);
          bottom = Math.round(bottom);
          fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px"));
        }
        function drawForLine(line, fromArg, toArg) {
          var lineObj = getLine(doc3, line);
          var lineLen = lineObj.text.length;
          var start, end;
          function coords(ch, bias) {
            return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
          }
          function wrapX(pos, dir, side) {
            var extent = wrappedLineExtentChar(cm, lineObj, null, pos);
            var prop2 = dir == "ltr" == (side == "after") ? "left" : "right";
            var ch = side == "after" ? extent.begin : extent.end - (/\s/.test(lineObj.text.charAt(extent.end - 1)) ? 2 : 1);
            return coords(ch, prop2)[prop2];
          }
          var order = getOrder(lineObj, doc3.direction);
          iterateBidiSections(order, fromArg || 0, toArg == null ? lineLen : toArg, function(from2, to, dir, i2) {
            var ltr = dir == "ltr";
            var fromPos = coords(from2, ltr ? "left" : "right");
            var toPos = coords(to - 1, ltr ? "right" : "left");
            var openStart = fromArg == null && from2 == 0, openEnd = toArg == null && to == lineLen;
            var first = i2 == 0, last2 = !order || i2 == order.length - 1;
            if (toPos.top - fromPos.top <= 3) {
              var openLeft = (docLTR ? openStart : openEnd) && first;
              var openRight = (docLTR ? openEnd : openStart) && last2;
              var left = openLeft ? leftSide : (ltr ? fromPos : toPos).left;
              var right = openRight ? rightSide : (ltr ? toPos : fromPos).right;
              add2(left, fromPos.top, right - left, fromPos.bottom);
            } else {
              var topLeft, topRight, botLeft, botRight;
              if (ltr) {
                topLeft = docLTR && openStart && first ? leftSide : fromPos.left;
                topRight = docLTR ? rightSide : wrapX(from2, dir, "before");
                botLeft = docLTR ? leftSide : wrapX(to, dir, "after");
                botRight = docLTR && openEnd && last2 ? rightSide : toPos.right;
              } else {
                topLeft = !docLTR ? leftSide : wrapX(from2, dir, "before");
                topRight = !docLTR && openStart && first ? rightSide : fromPos.right;
                botLeft = !docLTR && openEnd && last2 ? leftSide : toPos.left;
                botRight = !docLTR ? rightSide : wrapX(to, dir, "after");
              }
              add2(topLeft, fromPos.top, topRight - topLeft, fromPos.bottom);
              if (fromPos.bottom < toPos.top) {
                add2(leftSide, fromPos.bottom, null, toPos.top);
              }
              add2(botLeft, toPos.top, botRight - botLeft, toPos.bottom);
            }
            if (!start || cmpCoords(fromPos, start) < 0) {
              start = fromPos;
            }
            if (cmpCoords(toPos, start) < 0) {
              start = toPos;
            }
            if (!end || cmpCoords(fromPos, end) < 0) {
              end = fromPos;
            }
            if (cmpCoords(toPos, end) < 0) {
              end = toPos;
            }
          });
          return { start, end };
        }
        var sFrom = range2.from(), sTo = range2.to();
        if (sFrom.line == sTo.line) {
          drawForLine(sFrom.line, sFrom.ch, sTo.ch);
        } else {
          var fromLine = getLine(doc3, sFrom.line), toLine = getLine(doc3, sTo.line);
          var singleVLine = visualLine(fromLine) == visualLine(toLine);
          var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
          var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
          if (singleVLine) {
            if (leftEnd.top < rightStart.top - 2) {
              add2(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
              add2(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
            } else {
              add2(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
            }
          }
          if (leftEnd.bottom < rightStart.top) {
            add2(leftSide, leftEnd.bottom, null, rightStart.top);
          }
        }
        output.appendChild(fragment);
      }
      function restartBlink(cm) {
        if (!cm.state.focused) {
          return;
        }
        var display = cm.display;
        clearInterval(display.blinker);
        var on2 = true;
        display.cursorDiv.style.visibility = "";
        if (cm.options.cursorBlinkRate > 0) {
          display.blinker = setInterval(function() {
            if (!cm.hasFocus()) {
              onBlur(cm);
            }
            display.cursorDiv.style.visibility = (on2 = !on2) ? "" : "hidden";
          }, cm.options.cursorBlinkRate);
        } else if (cm.options.cursorBlinkRate < 0) {
          display.cursorDiv.style.visibility = "hidden";
        }
      }
      function ensureFocus(cm) {
        if (!cm.hasFocus()) {
          cm.display.input.focus();
          if (!cm.state.focused) {
            onFocus(cm);
          }
        }
      }
      function delayBlurEvent(cm) {
        cm.state.delayingBlurEvent = true;
        setTimeout(function() {
          if (cm.state.delayingBlurEvent) {
            cm.state.delayingBlurEvent = false;
            if (cm.state.focused) {
              onBlur(cm);
            }
          }
        }, 100);
      }
      function onFocus(cm, e) {
        if (cm.state.delayingBlurEvent && !cm.state.draggingText) {
          cm.state.delayingBlurEvent = false;
        }
        if (cm.options.readOnly == "nocursor") {
          return;
        }
        if (!cm.state.focused) {
          signal(cm, "focus", cm, e);
          cm.state.focused = true;
          addClass(cm.display.wrapper, "CodeMirror-focused");
          if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
            cm.display.input.reset();
            if (webkit) {
              setTimeout(function() {
                return cm.display.input.reset(true);
              }, 20);
            }
          }
          cm.display.input.receivedFocus();
        }
        restartBlink(cm);
      }
      function onBlur(cm, e) {
        if (cm.state.delayingBlurEvent) {
          return;
        }
        if (cm.state.focused) {
          signal(cm, "blur", cm, e);
          cm.state.focused = false;
          rmClass(cm.display.wrapper, "CodeMirror-focused");
        }
        clearInterval(cm.display.blinker);
        setTimeout(function() {
          if (!cm.state.focused) {
            cm.display.shift = false;
          }
        }, 150);
      }
      function updateHeightsInViewport(cm) {
        var display = cm.display;
        var prevBottom = display.lineDiv.offsetTop;
        var viewTop = Math.max(0, display.scroller.getBoundingClientRect().top);
        var oldHeight = display.lineDiv.getBoundingClientRect().top;
        var mustScroll = 0;
        for (var i2 = 0; i2 < display.view.length; i2++) {
          var cur = display.view[i2], wrapping = cm.options.lineWrapping;
          var height = void 0, width = 0;
          if (cur.hidden) {
            continue;
          }
          oldHeight += cur.line.height;
          if (ie && ie_version < 8) {
            var bot = cur.node.offsetTop + cur.node.offsetHeight;
            height = bot - prevBottom;
            prevBottom = bot;
          } else {
            var box = cur.node.getBoundingClientRect();
            height = box.bottom - box.top;
            if (!wrapping && cur.text.firstChild) {
              width = cur.text.firstChild.getBoundingClientRect().right - box.left - 1;
            }
          }
          var diff = cur.line.height - height;
          if (diff > 5e-3 || diff < -5e-3) {
            if (oldHeight < viewTop) {
              mustScroll -= diff;
            }
            updateLineHeight(cur.line, height);
            updateWidgetHeight(cur.line);
            if (cur.rest) {
              for (var j = 0; j < cur.rest.length; j++) {
                updateWidgetHeight(cur.rest[j]);
              }
            }
          }
          if (width > cm.display.sizerWidth) {
            var chWidth = Math.ceil(width / charWidth(cm.display));
            if (chWidth > cm.display.maxLineLength) {
              cm.display.maxLineLength = chWidth;
              cm.display.maxLine = cur.line;
              cm.display.maxLineChanged = true;
            }
          }
        }
        if (Math.abs(mustScroll) > 2) {
          display.scroller.scrollTop += mustScroll;
        }
      }
      function updateWidgetHeight(line) {
        if (line.widgets) {
          for (var i2 = 0; i2 < line.widgets.length; ++i2) {
            var w = line.widgets[i2], parent = w.node.parentNode;
            if (parent) {
              w.height = parent.offsetHeight;
            }
          }
        }
      }
      function visibleLines(display, doc3, viewport) {
        var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
        top = Math.floor(top - paddingTop(display));
        var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;
        var from2 = lineAtHeight(doc3, top), to = lineAtHeight(doc3, bottom);
        if (viewport && viewport.ensure) {
          var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
          if (ensureFrom < from2) {
            from2 = ensureFrom;
            to = lineAtHeight(doc3, heightAtLine(getLine(doc3, ensureFrom)) + display.wrapper.clientHeight);
          } else if (Math.min(ensureTo, doc3.lastLine()) >= to) {
            from2 = lineAtHeight(doc3, heightAtLine(getLine(doc3, ensureTo)) - display.wrapper.clientHeight);
            to = ensureTo;
          }
        }
        return { from: from2, to: Math.max(to, from2 + 1) };
      }
      function maybeScrollWindow(cm, rect) {
        if (signalDOMEvent(cm, "scrollCursorIntoView")) {
          return;
        }
        var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
        var doc3 = display.wrapper.ownerDocument;
        if (rect.top + box.top < 0) {
          doScroll = true;
        } else if (rect.bottom + box.top > (doc3.defaultView.innerHeight || doc3.documentElement.clientHeight)) {
          doScroll = false;
        }
        if (doScroll != null && !phantom) {
          var scrollNode = elt("div", "​", null, "position: absolute;\n                         top: " + (rect.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (rect.bottom - rect.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + rect.left + "px; width: " + Math.max(2, rect.right - rect.left) + "px;");
          cm.display.lineSpace.appendChild(scrollNode);
          scrollNode.scrollIntoView(doScroll);
          cm.display.lineSpace.removeChild(scrollNode);
        }
      }
      function scrollPosIntoView(cm, pos, end, margin) {
        if (margin == null) {
          margin = 0;
        }
        var rect;
        if (!cm.options.lineWrapping && pos == end) {
          end = pos.sticky == "before" ? Pos(pos.line, pos.ch + 1, "before") : pos;
          pos = pos.ch ? Pos(pos.line, pos.sticky == "before" ? pos.ch - 1 : pos.ch, "after") : pos;
        }
        for (var limit = 0; limit < 5; limit++) {
          var changed = false;
          var coords = cursorCoords(cm, pos);
          var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
          rect = {
            left: Math.min(coords.left, endCoords.left),
            top: Math.min(coords.top, endCoords.top) - margin,
            right: Math.max(coords.left, endCoords.left),
            bottom: Math.max(coords.bottom, endCoords.bottom) + margin
          };
          var scrollPos = calculateScrollPos(cm, rect);
          var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
          if (scrollPos.scrollTop != null) {
            updateScrollTop(cm, scrollPos.scrollTop);
            if (Math.abs(cm.doc.scrollTop - startTop) > 1) {
              changed = true;
            }
          }
          if (scrollPos.scrollLeft != null) {
            setScrollLeft(cm, scrollPos.scrollLeft);
            if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) {
              changed = true;
            }
          }
          if (!changed) {
            break;
          }
        }
        return rect;
      }
      function scrollIntoView(cm, rect) {
        var scrollPos = calculateScrollPos(cm, rect);
        if (scrollPos.scrollTop != null) {
          updateScrollTop(cm, scrollPos.scrollTop);
        }
        if (scrollPos.scrollLeft != null) {
          setScrollLeft(cm, scrollPos.scrollLeft);
        }
      }
      function calculateScrollPos(cm, rect) {
        var display = cm.display, snapMargin = textHeight(cm.display);
        if (rect.top < 0) {
          rect.top = 0;
        }
        var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
        var screen2 = displayHeight(cm), result = {};
        if (rect.bottom - rect.top > screen2) {
          rect.bottom = rect.top + screen2;
        }
        var docBottom = cm.doc.height + paddingVert(display);
        var atTop = rect.top < snapMargin, atBottom = rect.bottom > docBottom - snapMargin;
        if (rect.top < screentop) {
          result.scrollTop = atTop ? 0 : rect.top;
        } else if (rect.bottom > screentop + screen2) {
          var newTop = Math.min(rect.top, (atBottom ? docBottom : rect.bottom) - screen2);
          if (newTop != screentop) {
            result.scrollTop = newTop;
          }
        }
        var gutterSpace = cm.options.fixedGutter ? 0 : display.gutters.offsetWidth;
        var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft - gutterSpace;
        var screenw = displayWidth(cm) - display.gutters.offsetWidth;
        var tooWide = rect.right - rect.left > screenw;
        if (tooWide) {
          rect.right = rect.left + screenw;
        }
        if (rect.left < 10) {
          result.scrollLeft = 0;
        } else if (rect.left < screenleft) {
          result.scrollLeft = Math.max(0, rect.left + gutterSpace - (tooWide ? 0 : 10));
        } else if (rect.right > screenw + screenleft - 3) {
          result.scrollLeft = rect.right + (tooWide ? 0 : 10) - screenw;
        }
        return result;
      }
      function addToScrollTop(cm, top) {
        if (top == null) {
          return;
        }
        resolveScrollToPos(cm);
        cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
      }
      function ensureCursorVisible(cm) {
        resolveScrollToPos(cm);
        var cur = cm.getCursor();
        cm.curOp.scrollToPos = { from: cur, to: cur, margin: cm.options.cursorScrollMargin };
      }
      function scrollToCoords(cm, x, y) {
        if (x != null || y != null) {
          resolveScrollToPos(cm);
        }
        if (x != null) {
          cm.curOp.scrollLeft = x;
        }
        if (y != null) {
          cm.curOp.scrollTop = y;
        }
      }
      function scrollToRange(cm, range2) {
        resolveScrollToPos(cm);
        cm.curOp.scrollToPos = range2;
      }
      function resolveScrollToPos(cm) {
        var range2 = cm.curOp.scrollToPos;
        if (range2) {
          cm.curOp.scrollToPos = null;
          var from2 = estimateCoords(cm, range2.from), to = estimateCoords(cm, range2.to);
          scrollToCoordsRange(cm, from2, to, range2.margin);
        }
      }
      function scrollToCoordsRange(cm, from2, to, margin) {
        var sPos = calculateScrollPos(cm, {
          left: Math.min(from2.left, to.left),
          top: Math.min(from2.top, to.top) - margin,
          right: Math.max(from2.right, to.right),
          bottom: Math.max(from2.bottom, to.bottom) + margin
        });
        scrollToCoords(cm, sPos.scrollLeft, sPos.scrollTop);
      }
      function updateScrollTop(cm, val) {
        if (Math.abs(cm.doc.scrollTop - val) < 2) {
          return;
        }
        if (!gecko) {
          updateDisplaySimple(cm, { top: val });
        }
        setScrollTop(cm, val, true);
        if (gecko) {
          updateDisplaySimple(cm);
        }
        startWorker(cm, 100);
      }
      function setScrollTop(cm, val, forceScroll) {
        val = Math.max(0, Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, val));
        if (cm.display.scroller.scrollTop == val && !forceScroll) {
          return;
        }
        cm.doc.scrollTop = val;
        cm.display.scrollbars.setScrollTop(val);
        if (cm.display.scroller.scrollTop != val) {
          cm.display.scroller.scrollTop = val;
        }
      }
      function setScrollLeft(cm, val, isScroller, forceScroll) {
        val = Math.max(0, Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth));
        if ((isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) && !forceScroll) {
          return;
        }
        cm.doc.scrollLeft = val;
        alignHorizontally(cm);
        if (cm.display.scroller.scrollLeft != val) {
          cm.display.scroller.scrollLeft = val;
        }
        cm.display.scrollbars.setScrollLeft(val);
      }
      function measureForScrollbars(cm) {
        var d = cm.display, gutterW = d.gutters.offsetWidth;
        var docH = Math.round(cm.doc.height + paddingVert(cm.display));
        return {
          clientHeight: d.scroller.clientHeight,
          viewHeight: d.wrapper.clientHeight,
          scrollWidth: d.scroller.scrollWidth,
          clientWidth: d.scroller.clientWidth,
          viewWidth: d.wrapper.clientWidth,
          barLeft: cm.options.fixedGutter ? gutterW : 0,
          docHeight: docH,
          scrollHeight: docH + scrollGap(cm) + d.barHeight,
          nativeBarWidth: d.nativeBarWidth,
          gutterWidth: gutterW
        };
      }
      var NativeScrollbars = function(place, scroll, cm) {
        this.cm = cm;
        var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
        var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        vert.tabIndex = horiz.tabIndex = -1;
        place(vert);
        place(horiz);
        on(vert, "scroll", function() {
          if (vert.clientHeight) {
            scroll(vert.scrollTop, "vertical");
          }
        });
        on(horiz, "scroll", function() {
          if (horiz.clientWidth) {
            scroll(horiz.scrollLeft, "horizontal");
          }
        });
        this.checkedZeroWidth = false;
        if (ie && ie_version < 8) {
          this.horiz.style.minHeight = this.vert.style.minWidth = "18px";
        }
      };
      NativeScrollbars.prototype.update = function(measure) {
        var needsH = measure.scrollWidth > measure.clientWidth + 1;
        var needsV = measure.scrollHeight > measure.clientHeight + 1;
        var sWidth = measure.nativeBarWidth;
        if (needsV) {
          this.vert.style.display = "block";
          this.vert.style.bottom = needsH ? sWidth + "px" : "0";
          var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
          this.vert.firstChild.style.height = Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
        } else {
          this.vert.scrollTop = 0;
          this.vert.style.display = "";
          this.vert.firstChild.style.height = "0";
        }
        if (needsH) {
          this.horiz.style.display = "block";
          this.horiz.style.right = needsV ? sWidth + "px" : "0";
          this.horiz.style.left = measure.barLeft + "px";
          var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
          this.horiz.firstChild.style.width = Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
        } else {
          this.horiz.style.display = "";
          this.horiz.firstChild.style.width = "0";
        }
        if (!this.checkedZeroWidth && measure.clientHeight > 0) {
          if (sWidth == 0) {
            this.zeroWidthHack();
          }
          this.checkedZeroWidth = true;
        }
        return { right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0 };
      };
      NativeScrollbars.prototype.setScrollLeft = function(pos) {
        if (this.horiz.scrollLeft != pos) {
          this.horiz.scrollLeft = pos;
        }
        if (this.disableHoriz) {
          this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
        }
      };
      NativeScrollbars.prototype.setScrollTop = function(pos) {
        if (this.vert.scrollTop != pos) {
          this.vert.scrollTop = pos;
        }
        if (this.disableVert) {
          this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
        }
      };
      NativeScrollbars.prototype.zeroWidthHack = function() {
        var w = mac && !mac_geMountainLion ? "12px" : "18px";
        this.horiz.style.height = this.vert.style.width = w;
        this.horiz.style.visibility = this.vert.style.visibility = "hidden";
        this.disableHoriz = new Delayed();
        this.disableVert = new Delayed();
      };
      NativeScrollbars.prototype.enableZeroWidthBar = function(bar, delay, type) {
        bar.style.visibility = "";
        function maybeDisable() {
          var box = bar.getBoundingClientRect();
          var elt2 = type == "vert" ? document.elementFromPoint(box.right - 1, (box.top + box.bottom) / 2) : document.elementFromPoint((box.right + box.left) / 2, box.bottom - 1);
          if (elt2 != bar) {
            bar.style.visibility = "hidden";
          } else {
            delay.set(1e3, maybeDisable);
          }
        }
        delay.set(1e3, maybeDisable);
      };
      NativeScrollbars.prototype.clear = function() {
        var parent = this.horiz.parentNode;
        parent.removeChild(this.horiz);
        parent.removeChild(this.vert);
      };
      var NullScrollbars = function() {
      };
      NullScrollbars.prototype.update = function() {
        return { bottom: 0, right: 0 };
      };
      NullScrollbars.prototype.setScrollLeft = function() {
      };
      NullScrollbars.prototype.setScrollTop = function() {
      };
      NullScrollbars.prototype.clear = function() {
      };
      function updateScrollbars(cm, measure) {
        if (!measure) {
          measure = measureForScrollbars(cm);
        }
        var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
        updateScrollbarsInner(cm, measure);
        for (var i2 = 0; i2 < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i2++) {
          if (startWidth != cm.display.barWidth && cm.options.lineWrapping) {
            updateHeightsInViewport(cm);
          }
          updateScrollbarsInner(cm, measureForScrollbars(cm));
          startWidth = cm.display.barWidth;
          startHeight = cm.display.barHeight;
        }
      }
      function updateScrollbarsInner(cm, measure) {
        var d = cm.display;
        var sizes = d.scrollbars.update(measure);
        d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
        d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
        d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent";
        if (sizes.right && sizes.bottom) {
          d.scrollbarFiller.style.display = "block";
          d.scrollbarFiller.style.height = sizes.bottom + "px";
          d.scrollbarFiller.style.width = sizes.right + "px";
        } else {
          d.scrollbarFiller.style.display = "";
        }
        if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
          d.gutterFiller.style.display = "block";
          d.gutterFiller.style.height = sizes.bottom + "px";
          d.gutterFiller.style.width = measure.gutterWidth + "px";
        } else {
          d.gutterFiller.style.display = "";
        }
      }
      var scrollbarModel = { "native": NativeScrollbars, "null": NullScrollbars };
      function initScrollbars(cm) {
        if (cm.display.scrollbars) {
          cm.display.scrollbars.clear();
          if (cm.display.scrollbars.addClass) {
            rmClass(cm.display.wrapper, cm.display.scrollbars.addClass);
          }
        }
        cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function(node) {
          cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
          on(node, "mousedown", function() {
            if (cm.state.focused) {
              setTimeout(function() {
                return cm.display.input.focus();
              }, 0);
            }
          });
          node.setAttribute("cm-not-content", "true");
        }, function(pos, axis) {
          if (axis == "horizontal") {
            setScrollLeft(cm, pos);
          } else {
            updateScrollTop(cm, pos);
          }
        }, cm);
        if (cm.display.scrollbars.addClass) {
          addClass(cm.display.wrapper, cm.display.scrollbars.addClass);
        }
      }
      var nextOpId = 0;
      function startOperation(cm) {
        cm.curOp = {
          cm,
          viewChanged: false,
          // Flag that indicates that lines might need to be redrawn
          startHeight: cm.doc.height,
          // Used to detect need to update scrollbar
          forceUpdate: false,
          // Used to force a redraw
          updateInput: 0,
          // Whether to reset the input textarea
          typing: false,
          // Whether this reset should be careful to leave existing text (for compositing)
          changeObjs: null,
          // Accumulated changes, for firing change events
          cursorActivityHandlers: null,
          // Set of handlers to fire cursorActivity on
          cursorActivityCalled: 0,
          // Tracks which cursorActivity handlers have been called already
          selectionChanged: false,
          // Whether the selection needs to be redrawn
          updateMaxLine: false,
          // Set when the widest line needs to be determined anew
          scrollLeft: null,
          scrollTop: null,
          // Intermediate scroll position, not pushed to DOM yet
          scrollToPos: null,
          // Used to scroll to a specific position
          focus: false,
          id: ++nextOpId,
          // Unique ID
          markArrays: null
          // Used by addMarkedSpan
        };
        pushOperation(cm.curOp);
      }
      function endOperation(cm) {
        var op = cm.curOp;
        if (op) {
          finishOperation(op, function(group) {
            for (var i2 = 0; i2 < group.ops.length; i2++) {
              group.ops[i2].cm.curOp = null;
            }
            endOperations(group);
          });
        }
      }
      function endOperations(group) {
        var ops = group.ops;
        for (var i2 = 0; i2 < ops.length; i2++) {
          endOperation_R1(ops[i2]);
        }
        for (var i$12 = 0; i$12 < ops.length; i$12++) {
          endOperation_W1(ops[i$12]);
        }
        for (var i$22 = 0; i$22 < ops.length; i$22++) {
          endOperation_R2(ops[i$22]);
        }
        for (var i$3 = 0; i$3 < ops.length; i$3++) {
          endOperation_W2(ops[i$3]);
        }
        for (var i$4 = 0; i$4 < ops.length; i$4++) {
          endOperation_finish(ops[i$4]);
        }
      }
      function endOperation_R1(op) {
        var cm = op.cm, display = cm.display;
        maybeClipScrollbars(cm);
        if (op.updateMaxLine) {
          findMaxLine(cm);
        }
        op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null || op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom || op.scrollToPos.to.line >= display.viewTo) || display.maxLineChanged && cm.options.lineWrapping;
        op.update = op.mustUpdate && new DisplayUpdate(cm, op.mustUpdate && { top: op.scrollTop, ensure: op.scrollToPos }, op.forceUpdate);
      }
      function endOperation_W1(op) {
        op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
      }
      function endOperation_R2(op) {
        var cm = op.cm, display = cm.display;
        if (op.updatedDisplay) {
          updateHeightsInViewport(cm);
        }
        op.barMeasure = measureForScrollbars(cm);
        if (display.maxLineChanged && !cm.options.lineWrapping) {
          op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
          cm.display.sizerWidth = op.adjustWidthTo;
          op.barMeasure.scrollWidth = Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
          op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
        }
        if (op.updatedDisplay || op.selectionChanged) {
          op.preparedSelection = display.input.prepareSelection();
        }
      }
      function endOperation_W2(op) {
        var cm = op.cm;
        if (op.adjustWidthTo != null) {
          cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
          if (op.maxScrollLeft < cm.doc.scrollLeft) {
            setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true);
          }
          cm.display.maxLineChanged = false;
        }
        var takeFocus = op.focus && op.focus == activeElt(doc2(cm));
        if (op.preparedSelection) {
          cm.display.input.showSelection(op.preparedSelection, takeFocus);
        }
        if (op.updatedDisplay || op.startHeight != cm.doc.height) {
          updateScrollbars(cm, op.barMeasure);
        }
        if (op.updatedDisplay) {
          setDocumentHeight(cm, op.barMeasure);
        }
        if (op.selectionChanged) {
          restartBlink(cm);
        }
        if (cm.state.focused && op.updateInput) {
          cm.display.input.reset(op.typing);
        }
        if (takeFocus) {
          ensureFocus(op.cm);
        }
      }
      function endOperation_finish(op) {
        var cm = op.cm, display = cm.display, doc3 = cm.doc;
        if (op.updatedDisplay) {
          postUpdateDisplay(cm, op.update);
        }
        if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos)) {
          display.wheelStartX = display.wheelStartY = null;
        }
        if (op.scrollTop != null) {
          setScrollTop(cm, op.scrollTop, op.forceScroll);
        }
        if (op.scrollLeft != null) {
          setScrollLeft(cm, op.scrollLeft, true, true);
        }
        if (op.scrollToPos) {
          var rect = scrollPosIntoView(
            cm,
            clipPos(doc3, op.scrollToPos.from),
            clipPos(doc3, op.scrollToPos.to),
            op.scrollToPos.margin
          );
          maybeScrollWindow(cm, rect);
        }
        var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
        if (hidden) {
          for (var i2 = 0; i2 < hidden.length; ++i2) {
            if (!hidden[i2].lines.length) {
              signal(hidden[i2], "hide");
            }
          }
        }
        if (unhidden) {
          for (var i$12 = 0; i$12 < unhidden.length; ++i$12) {
            if (unhidden[i$12].lines.length) {
              signal(unhidden[i$12], "unhide");
            }
          }
        }
        if (display.wrapper.offsetHeight) {
          doc3.scrollTop = cm.display.scroller.scrollTop;
        }
        if (op.changeObjs) {
          signal(cm, "changes", cm, op.changeObjs);
        }
        if (op.update) {
          op.update.finish();
        }
      }
      function runInOp(cm, f) {
        if (cm.curOp) {
          return f();
        }
        startOperation(cm);
        try {
          return f();
        } finally {
          endOperation(cm);
        }
      }
      function operation(cm, f) {
        return function() {
          if (cm.curOp) {
            return f.apply(cm, arguments);
          }
          startOperation(cm);
          try {
            return f.apply(cm, arguments);
          } finally {
            endOperation(cm);
          }
        };
      }
      function methodOp(f) {
        return function() {
          if (this.curOp) {
            return f.apply(this, arguments);
          }
          startOperation(this);
          try {
            return f.apply(this, arguments);
          } finally {
            endOperation(this);
          }
        };
      }
      function docMethodOp(f) {
        return function() {
          var cm = this.cm;
          if (!cm || cm.curOp) {
            return f.apply(this, arguments);
          }
          startOperation(cm);
          try {
            return f.apply(this, arguments);
          } finally {
            endOperation(cm);
          }
        };
      }
      function startWorker(cm, time) {
        if (cm.doc.highlightFrontier < cm.display.viewTo) {
          cm.state.highlight.set(time, bind2(highlightWorker, cm));
        }
      }
      function highlightWorker(cm) {
        var doc3 = cm.doc;
        if (doc3.highlightFrontier >= cm.display.viewTo) {
          return;
        }
        var end = +new Date() + cm.options.workTime;
        var context = getContextBefore(cm, doc3.highlightFrontier);
        var changedLines = [];
        doc3.iter(context.line, Math.min(doc3.first + doc3.size, cm.display.viewTo + 500), function(line) {
          if (context.line >= cm.display.viewFrom) {
            var oldStyles = line.styles;
            var resetState = line.text.length > cm.options.maxHighlightLength ? copyState(doc3.mode, context.state) : null;
            var highlighted = highlightLine(cm, line, context, true);
            if (resetState) {
              context.state = resetState;
            }
            line.styles = highlighted.styles;
            var oldCls = line.styleClasses, newCls = highlighted.classes;
            if (newCls) {
              line.styleClasses = newCls;
            } else if (oldCls) {
              line.styleClasses = null;
            }
            var ischange = !oldStyles || oldStyles.length != line.styles.length || oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
            for (var i2 = 0; !ischange && i2 < oldStyles.length; ++i2) {
              ischange = oldStyles[i2] != line.styles[i2];
            }
            if (ischange) {
              changedLines.push(context.line);
            }
            line.stateAfter = context.save();
            context.nextLine();
          } else {
            if (line.text.length <= cm.options.maxHighlightLength) {
              processLine(cm, line.text, context);
            }
            line.stateAfter = context.line % 5 == 0 ? context.save() : null;
            context.nextLine();
          }
          if (+new Date() > end) {
            startWorker(cm, cm.options.workDelay);
            return true;
          }
        });
        doc3.highlightFrontier = context.line;
        doc3.modeFrontier = Math.max(doc3.modeFrontier, context.line);
        if (changedLines.length) {
          runInOp(cm, function() {
            for (var i2 = 0; i2 < changedLines.length; i2++) {
              regLineChange(cm, changedLines[i2], "text");
            }
          });
        }
      }
      var DisplayUpdate = function(cm, viewport, force) {
        var display = cm.display;
        this.viewport = viewport;
        this.visible = visibleLines(display, cm.doc, viewport);
        this.editorIsHidden = !display.wrapper.offsetWidth;
        this.wrapperHeight = display.wrapper.clientHeight;
        this.wrapperWidth = display.wrapper.clientWidth;
        this.oldDisplayWidth = displayWidth(cm);
        this.force = force;
        this.dims = getDimensions(cm);
        this.events = [];
      };
      DisplayUpdate.prototype.signal = function(emitter, type) {
        if (hasHandler(emitter, type)) {
          this.events.push(arguments);
        }
      };
      DisplayUpdate.prototype.finish = function() {
        for (var i2 = 0; i2 < this.events.length; i2++) {
          signal.apply(null, this.events[i2]);
        }
      };
      function maybeClipScrollbars(cm) {
        var display = cm.display;
        if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
          display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
          display.heightForcer.style.height = scrollGap(cm) + "px";
          display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
          display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
          display.scrollbarsClipped = true;
        }
      }
      function selectionSnapshot(cm) {
        if (cm.hasFocus()) {
          return null;
        }
        var active = activeElt(doc2(cm));
        if (!active || !contains(cm.display.lineDiv, active)) {
          return null;
        }
        var result = { activeElt: active };
        if (window.getSelection) {
          var sel = win(cm).getSelection();
          if (sel.anchorNode && sel.extend && contains(cm.display.lineDiv, sel.anchorNode)) {
            result.anchorNode = sel.anchorNode;
            result.anchorOffset = sel.anchorOffset;
            result.focusNode = sel.focusNode;
            result.focusOffset = sel.focusOffset;
          }
        }
        return result;
      }
      function restoreSelection(snapshot) {
        if (!snapshot || !snapshot.activeElt || snapshot.activeElt == activeElt(snapshot.activeElt.ownerDocument)) {
          return;
        }
        snapshot.activeElt.focus();
        if (!/^(INPUT|TEXTAREA)$/.test(snapshot.activeElt.nodeName) && snapshot.anchorNode && contains(document.body, snapshot.anchorNode) && contains(document.body, snapshot.focusNode)) {
          var doc3 = snapshot.activeElt.ownerDocument;
          var sel = doc3.defaultView.getSelection(), range2 = doc3.createRange();
          range2.setEnd(snapshot.anchorNode, snapshot.anchorOffset);
          range2.collapse(false);
          sel.removeAllRanges();
          sel.addRange(range2);
          sel.extend(snapshot.focusNode, snapshot.focusOffset);
        }
      }
      function updateDisplayIfNeeded(cm, update) {
        var display = cm.display, doc3 = cm.doc;
        if (update.editorIsHidden) {
          resetView(cm);
          return false;
        }
        if (!update.force && update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo && (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) && display.renderedView == display.view && countDirtyView(cm) == 0) {
          return false;
        }
        if (maybeUpdateLineNumberWidth(cm)) {
          resetView(cm);
          update.dims = getDimensions(cm);
        }
        var end = doc3.first + doc3.size;
        var from2 = Math.max(update.visible.from - cm.options.viewportMargin, doc3.first);
        var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
        if (display.viewFrom < from2 && from2 - display.viewFrom < 20) {
          from2 = Math.max(doc3.first, display.viewFrom);
        }
        if (display.viewTo > to && display.viewTo - to < 20) {
          to = Math.min(end, display.viewTo);
        }
        if (sawCollapsedSpans) {
          from2 = visualLineNo(cm.doc, from2);
          to = visualLineEndNo(cm.doc, to);
        }
        var different = from2 != display.viewFrom || to != display.viewTo || display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
        adjustView(cm, from2, to);
        display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
        cm.display.mover.style.top = display.viewOffset + "px";
        var toUpdate = countDirtyView(cm);
        if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view && (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo)) {
          return false;
        }
        var selSnapshot = selectionSnapshot(cm);
        if (toUpdate > 4) {
          display.lineDiv.style.display = "none";
        }
        patchDisplay(cm, display.updateLineNumbers, update.dims);
        if (toUpdate > 4) {
          display.lineDiv.style.display = "";
        }
        display.renderedView = display.view;
        restoreSelection(selSnapshot);
        removeChildren(display.cursorDiv);
        removeChildren(display.selectionDiv);
        display.gutters.style.height = display.sizer.style.minHeight = 0;
        if (different) {
          display.lastWrapHeight = update.wrapperHeight;
          display.lastWrapWidth = update.wrapperWidth;
          startWorker(cm, 400);
        }
        display.updateLineNumbers = null;
        return true;
      }
      function postUpdateDisplay(cm, update) {
        var viewport = update.viewport;
        for (var first = true; ; first = false) {
          if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
            if (viewport && viewport.top != null) {
              viewport = { top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top) };
            }
            update.visible = visibleLines(cm.display, cm.doc, viewport);
            if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo) {
              break;
            }
          } else if (first) {
            update.visible = visibleLines(cm.display, cm.doc, viewport);
          }
          if (!updateDisplayIfNeeded(cm, update)) {
            break;
          }
          updateHeightsInViewport(cm);
          var barMeasure = measureForScrollbars(cm);
          updateSelection(cm);
          updateScrollbars(cm, barMeasure);
          setDocumentHeight(cm, barMeasure);
          update.force = false;
        }
        update.signal(cm, "update", cm);
        if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
          update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
          cm.display.reportedViewFrom = cm.display.viewFrom;
          cm.display.reportedViewTo = cm.display.viewTo;
        }
      }
      function updateDisplaySimple(cm, viewport) {
        var update = new DisplayUpdate(cm, viewport);
        if (updateDisplayIfNeeded(cm, update)) {
          updateHeightsInViewport(cm);
          postUpdateDisplay(cm, update);
          var barMeasure = measureForScrollbars(cm);
          updateSelection(cm);
          updateScrollbars(cm, barMeasure);
          setDocumentHeight(cm, barMeasure);
          update.finish();
        }
      }
      function patchDisplay(cm, updateNumbersFrom, dims) {
        var display = cm.display, lineNumbers = cm.options.lineNumbers;
        var container = display.lineDiv, cur = container.firstChild;
        function rm(node2) {
          var next = node2.nextSibling;
          if (webkit && mac && cm.display.currentWheelTarget == node2) {
            node2.style.display = "none";
          } else {
            node2.parentNode.removeChild(node2);
          }
          return next;
        }
        var view = display.view, lineN = display.viewFrom;
        for (var i2 = 0; i2 < view.length; i2++) {
          var lineView = view[i2];
          if (lineView.hidden)
            ;
          else if (!lineView.node || lineView.node.parentNode != container) {
            var node = buildLineElement(cm, lineView, lineN, dims);
            container.insertBefore(node, cur);
          } else {
            while (cur != lineView.node) {
              cur = rm(cur);
            }
            var updateNumber = lineNumbers && updateNumbersFrom != null && updateNumbersFrom <= lineN && lineView.lineNumber;
            if (lineView.changes) {
              if (indexOf(lineView.changes, "gutter") > -1) {
                updateNumber = false;
              }
              updateLineForChanges(cm, lineView, lineN, dims);
            }
            if (updateNumber) {
              removeChildren(lineView.lineNumber);
              lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
            }
            cur = lineView.node.nextSibling;
          }
          lineN += lineView.size;
        }
        while (cur) {
          cur = rm(cur);
        }
      }
      function updateGutterSpace(display) {
        var width = display.gutters.offsetWidth;
        display.sizer.style.marginLeft = width + "px";
        signalLater(display, "gutterChanged", display);
      }
      function setDocumentHeight(cm, measure) {
        cm.display.sizer.style.minHeight = measure.docHeight + "px";
        cm.display.heightForcer.style.top = measure.docHeight + "px";
        cm.display.gutters.style.height = measure.docHeight + cm.display.barHeight + scrollGap(cm) + "px";
      }
      function alignHorizontally(cm) {
        var display = cm.display, view = display.view;
        if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) {
          return;
        }
        var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
        var gutterW = display.gutters.offsetWidth, left = comp + "px";
        for (var i2 = 0; i2 < view.length; i2++) {
          if (!view[i2].hidden) {
            if (cm.options.fixedGutter) {
              if (view[i2].gutter) {
                view[i2].gutter.style.left = left;
              }
              if (view[i2].gutterBackground) {
                view[i2].gutterBackground.style.left = left;
              }
            }
            var align = view[i2].alignable;
            if (align) {
              for (var j = 0; j < align.length; j++) {
                align[j].style.left = left;
              }
            }
          }
        }
        if (cm.options.fixedGutter) {
          display.gutters.style.left = comp + gutterW + "px";
        }
      }
      function maybeUpdateLineNumberWidth(cm) {
        if (!cm.options.lineNumbers) {
          return false;
        }
        var doc3 = cm.doc, last2 = lineNumberFor(cm.options, doc3.first + doc3.size - 1), display = cm.display;
        if (last2.length != display.lineNumChars) {
          var test = display.measure.appendChild(elt(
            "div",
            [elt("div", last2)],
            "CodeMirror-linenumber CodeMirror-gutter-elt"
          ));
          var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
          display.lineGutter.style.width = "";
          display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
          display.lineNumWidth = display.lineNumInnerWidth + padding;
          display.lineNumChars = display.lineNumInnerWidth ? last2.length : -1;
          display.lineGutter.style.width = display.lineNumWidth + "px";
          updateGutterSpace(cm.display);
          return true;
        }
        return false;
      }
      function getGutters(gutters, lineNumbers) {
        var result = [], sawLineNumbers = false;
        for (var i2 = 0; i2 < gutters.length; i2++) {
          var name = gutters[i2], style = null;
          if (typeof name != "string") {
            style = name.style;
            name = name.className;
          }
          if (name == "CodeMirror-linenumbers") {
            if (!lineNumbers) {
              continue;
            } else {
              sawLineNumbers = true;
            }
          }
          result.push({ className: name, style });
        }
        if (lineNumbers && !sawLineNumbers) {
          result.push({ className: "CodeMirror-linenumbers", style: null });
        }
        return result;
      }
      function renderGutters(display) {
        var gutters = display.gutters, specs = display.gutterSpecs;
        removeChildren(gutters);
        display.lineGutter = null;
        for (var i2 = 0; i2 < specs.length; ++i2) {
          var ref = specs[i2];
          var className = ref.className;
          var style = ref.style;
          var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + className));
          if (style) {
            gElt.style.cssText = style;
          }
          if (className == "CodeMirror-linenumbers") {
            display.lineGutter = gElt;
            gElt.style.width = (display.lineNumWidth || 1) + "px";
          }
        }
        gutters.style.display = specs.length ? "" : "none";
        updateGutterSpace(display);
      }
      function updateGutters(cm) {
        renderGutters(cm.display);
        regChange(cm);
        alignHorizontally(cm);
      }
      function Display(place, doc3, input, options) {
        var d = this;
        this.input = input;
        d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
        d.scrollbarFiller.setAttribute("cm-not-content", "true");
        d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
        d.gutterFiller.setAttribute("cm-not-content", "true");
        d.lineDiv = eltP("div", null, "CodeMirror-code");
        d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
        d.cursorDiv = elt("div", null, "CodeMirror-cursors");
        d.measure = elt("div", null, "CodeMirror-measure");
        d.lineMeasure = elt("div", null, "CodeMirror-measure");
        d.lineSpace = eltP(
          "div",
          [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
          null,
          "position: relative; outline: none"
        );
        var lines = eltP("div", [d.lineSpace], "CodeMirror-lines");
        d.mover = elt("div", [lines], null, "position: relative");
        d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
        d.sizerWidth = null;
        d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
        d.gutters = elt("div", null, "CodeMirror-gutters");
        d.lineGutter = null;
        d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
        d.scroller.setAttribute("tabIndex", "-1");
        d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");
        if (chrome && chrome_version >= 105) {
          d.wrapper.style.clipPath = "inset(0px)";
        }
        d.wrapper.setAttribute("translate", "no");
        if (ie && ie_version < 8) {
          d.gutters.style.zIndex = -1;
          d.scroller.style.paddingRight = 0;
        }
        if (!webkit && !(gecko && mobile)) {
          d.scroller.draggable = true;
        }
        if (place) {
          if (place.appendChild) {
            place.appendChild(d.wrapper);
          } else {
            place(d.wrapper);
          }
        }
        d.viewFrom = d.viewTo = doc3.first;
        d.reportedViewFrom = d.reportedViewTo = doc3.first;
        d.view = [];
        d.renderedView = null;
        d.externalMeasured = null;
        d.viewOffset = 0;
        d.lastWrapHeight = d.lastWrapWidth = 0;
        d.updateLineNumbers = null;
        d.nativeBarWidth = d.barHeight = d.barWidth = 0;
        d.scrollbarsClipped = false;
        d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
        d.alignWidgets = false;
        d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
        d.maxLine = null;
        d.maxLineLength = 0;
        d.maxLineChanged = false;
        d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;
        d.shift = false;
        d.selForContextMenu = null;
        d.activeTouch = null;
        d.gutterSpecs = getGutters(options.gutters, options.lineNumbers);
        renderGutters(d);
        input.init(d);
      }
      var wheelSamples = 0, wheelPixelsPerUnit = null;
      if (ie) {
        wheelPixelsPerUnit = -0.53;
      } else if (gecko) {
        wheelPixelsPerUnit = 15;
      } else if (chrome) {
        wheelPixelsPerUnit = -0.7;
      } else if (safari) {
        wheelPixelsPerUnit = -1 / 3;
      }
      function wheelEventDelta(e) {
        var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
        if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) {
          dx = e.detail;
        }
        if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) {
          dy = e.detail;
        } else if (dy == null) {
          dy = e.wheelDelta;
        }
        return { x: dx, y: dy };
      }
      function wheelEventPixels(e) {
        var delta = wheelEventDelta(e);
        delta.x *= wheelPixelsPerUnit;
        delta.y *= wheelPixelsPerUnit;
        return delta;
      }
      function onScrollWheel(cm, e) {
        if (chrome && chrome_version == 102) {
          if (cm.display.chromeScrollHack == null) {
            cm.display.sizer.style.pointerEvents = "none";
          } else {
            clearTimeout(cm.display.chromeScrollHack);
          }
          cm.display.chromeScrollHack = setTimeout(function() {
            cm.display.chromeScrollHack = null;
            cm.display.sizer.style.pointerEvents = "";
          }, 100);
        }
        var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;
        var pixelsPerUnit = wheelPixelsPerUnit;
        if (e.deltaMode === 0) {
          dx = e.deltaX;
          dy = e.deltaY;
          pixelsPerUnit = 1;
        }
        var display = cm.display, scroll = display.scroller;
        var canScrollX = scroll.scrollWidth > scroll.clientWidth;
        var canScrollY = scroll.scrollHeight > scroll.clientHeight;
        if (!(dx && canScrollX || dy && canScrollY)) {
          return;
        }
        if (dy && mac && webkit) {
          outer:
            for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
              for (var i2 = 0; i2 < view.length; i2++) {
                if (view[i2].node == cur) {
                  cm.display.currentWheelTarget = cur;
                  break outer;
                }
              }
            }
        }
        if (dx && !gecko && !presto && pixelsPerUnit != null) {
          if (dy && canScrollY) {
            updateScrollTop(cm, Math.max(0, scroll.scrollTop + dy * pixelsPerUnit));
          }
          setScrollLeft(cm, Math.max(0, scroll.scrollLeft + dx * pixelsPerUnit));
          if (!dy || dy && canScrollY) {
            e_preventDefault(e);
          }
          display.wheelStartX = null;
          return;
        }
        if (dy && pixelsPerUnit != null) {
          var pixels = dy * pixelsPerUnit;
          var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
          if (pixels < 0) {
            top = Math.max(0, top + pixels - 50);
          } else {
            bot = Math.min(cm.doc.height, bot + pixels + 50);
          }
          updateDisplaySimple(cm, { top, bottom: bot });
        }
        if (wheelSamples < 20 && e.deltaMode !== 0) {
          if (display.wheelStartX == null) {
            display.wheelStartX = scroll.scrollLeft;
            display.wheelStartY = scroll.scrollTop;
            display.wheelDX = dx;
            display.wheelDY = dy;
            setTimeout(function() {
              if (display.wheelStartX == null) {
                return;
              }
              var movedX = scroll.scrollLeft - display.wheelStartX;
              var movedY = scroll.scrollTop - display.wheelStartY;
              var sample = movedY && display.wheelDY && movedY / display.wheelDY || movedX && display.wheelDX && movedX / display.wheelDX;
              display.wheelStartX = display.wheelStartY = null;
              if (!sample) {
                return;
              }
              wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
              ++wheelSamples;
            }, 200);
          } else {
            display.wheelDX += dx;
            display.wheelDY += dy;
          }
        }
      }
      var Selection = function(ranges, primIndex) {
        this.ranges = ranges;
        this.primIndex = primIndex;
      };
      Selection.prototype.primary = function() {
        return this.ranges[this.primIndex];
      };
      Selection.prototype.equals = function(other) {
        if (other == this) {
          return true;
        }
        if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) {
          return false;
        }
        for (var i2 = 0; i2 < this.ranges.length; i2++) {
          var here = this.ranges[i2], there = other.ranges[i2];
          if (!equalCursorPos(here.anchor, there.anchor) || !equalCursorPos(here.head, there.head)) {
            return false;
          }
        }
        return true;
      };
      Selection.prototype.deepCopy = function() {
        var out = [];
        for (var i2 = 0; i2 < this.ranges.length; i2++) {
          out[i2] = new Range(copyPos(this.ranges[i2].anchor), copyPos(this.ranges[i2].head));
        }
        return new Selection(out, this.primIndex);
      };
      Selection.prototype.somethingSelected = function() {
        for (var i2 = 0; i2 < this.ranges.length; i2++) {
          if (!this.ranges[i2].empty()) {
            return true;
          }
        }
        return false;
      };
      Selection.prototype.contains = function(pos, end) {
        if (!end) {
          end = pos;
        }
        for (var i2 = 0; i2 < this.ranges.length; i2++) {
          var range2 = this.ranges[i2];
          if (cmp(end, range2.from()) >= 0 && cmp(pos, range2.to()) <= 0) {
            return i2;
          }
        }
        return -1;
      };
      var Range = function(anchor, head) {
        this.anchor = anchor;
        this.head = head;
      };
      Range.prototype.from = function() {
        return minPos(this.anchor, this.head);
      };
      Range.prototype.to = function() {
        return maxPos(this.anchor, this.head);
      };
      Range.prototype.empty = function() {
        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
      };
      function normalizeSelection(cm, ranges, primIndex) {
        var mayTouch = cm && cm.options.selectionsMayTouch;
        var prim = ranges[primIndex];
        ranges.sort(function(a, b) {
          return cmp(a.from(), b.from());
        });
        primIndex = indexOf(ranges, prim);
        for (var i2 = 1; i2 < ranges.length; i2++) {
          var cur = ranges[i2], prev = ranges[i2 - 1];
          var diff = cmp(prev.to(), cur.from());
          if (mayTouch && !cur.empty() ? diff > 0 : diff >= 0) {
            var from2 = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
            var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
            if (i2 <= primIndex) {
              --primIndex;
            }
            ranges.splice(--i2, 2, new Range(inv ? to : from2, inv ? from2 : to));
          }
        }
        return new Selection(ranges, primIndex);
      }
      function simpleSelection(anchor, head) {
        return new Selection([new Range(anchor, head || anchor)], 0);
      }
      function changeEnd(change) {
        if (!change.text) {
          return change.to;
        }
        return Pos(
          change.from.line + change.text.length - 1,
          lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0)
        );
      }
      function adjustForChange(pos, change) {
        if (cmp(pos, change.from) < 0) {
          return pos;
        }
        if (cmp(pos, change.to) <= 0) {
          return changeEnd(change);
        }
        var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
        if (pos.line == change.to.line) {
          ch += changeEnd(change).ch - change.to.ch;
        }
        return Pos(line, ch);
      }
      function computeSelAfterChange(doc3, change) {
        var out = [];
        for (var i2 = 0; i2 < doc3.sel.ranges.length; i2++) {
          var range2 = doc3.sel.ranges[i2];
          out.push(new Range(
            adjustForChange(range2.anchor, change),
            adjustForChange(range2.head, change)
          ));
        }
        return normalizeSelection(doc3.cm, out, doc3.sel.primIndex);
      }
      function offsetPos(pos, old, nw) {
        if (pos.line == old.line) {
          return Pos(nw.line, pos.ch - old.ch + nw.ch);
        } else {
          return Pos(nw.line + (pos.line - old.line), pos.ch);
        }
      }
      function computeReplacedSel(doc3, changes, hint) {
        var out = [];
        var oldPrev = Pos(doc3.first, 0), newPrev = oldPrev;
        for (var i2 = 0; i2 < changes.length; i2++) {
          var change = changes[i2];
          var from2 = offsetPos(change.from, oldPrev, newPrev);
          var to = offsetPos(changeEnd(change), oldPrev, newPrev);
          oldPrev = change.to;
          newPrev = to;
          if (hint == "around") {
            var range2 = doc3.sel.ranges[i2], inv = cmp(range2.head, range2.anchor) < 0;
            out[i2] = new Range(inv ? to : from2, inv ? from2 : to);
          } else {
            out[i2] = new Range(from2, from2);
          }
        }
        return new Selection(out, doc3.sel.primIndex);
      }
      function loadMode(cm) {
        cm.doc.mode = getMode(cm.options, cm.doc.modeOption);
        resetModeState(cm);
      }
      function resetModeState(cm) {
        cm.doc.iter(function(line) {
          if (line.stateAfter) {
            line.stateAfter = null;
          }
          if (line.styles) {
            line.styles = null;
          }
        });
        cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first;
        startWorker(cm, 100);
        cm.state.modeGen++;
        if (cm.curOp) {
          regChange(cm);
        }
      }
      function isWholeLineUpdate(doc3, change) {
        return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" && (!doc3.cm || doc3.cm.options.wholeLineUpdateBefore);
      }
      function updateDoc(doc3, change, markedSpans, estimateHeight2) {
        function spansFor(n) {
          return markedSpans ? markedSpans[n] : null;
        }
        function update(line, text3, spans) {
          updateLine(line, text3, spans, estimateHeight2);
          signalLater(line, "change", line, change);
        }
        function linesFor(start, end) {
          var result = [];
          for (var i2 = start; i2 < end; ++i2) {
            result.push(new Line(text2[i2], spansFor(i2), estimateHeight2));
          }
          return result;
        }
        var from2 = change.from, to = change.to, text2 = change.text;
        var firstLine = getLine(doc3, from2.line), lastLine = getLine(doc3, to.line);
        var lastText = lst(text2), lastSpans = spansFor(text2.length - 1), nlines = to.line - from2.line;
        if (change.full) {
          doc3.insert(0, linesFor(0, text2.length));
          doc3.remove(text2.length, doc3.size - text2.length);
        } else if (isWholeLineUpdate(doc3, change)) {
          var added = linesFor(0, text2.length - 1);
          update(lastLine, lastLine.text, lastSpans);
          if (nlines) {
            doc3.remove(from2.line, nlines);
          }
          if (added.length) {
            doc3.insert(from2.line, added);
          }
        } else if (firstLine == lastLine) {
          if (text2.length == 1) {
            update(firstLine, firstLine.text.slice(0, from2.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
          } else {
            var added$1 = linesFor(1, text2.length - 1);
            added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight2));
            update(firstLine, firstLine.text.slice(0, from2.ch) + text2[0], spansFor(0));
            doc3.insert(from2.line + 1, added$1);
          }
        } else if (text2.length == 1) {
          update(firstLine, firstLine.text.slice(0, from2.ch) + text2[0] + lastLine.text.slice(to.ch), spansFor(0));
          doc3.remove(from2.line + 1, nlines);
        } else {
          update(firstLine, firstLine.text.slice(0, from2.ch) + text2[0], spansFor(0));
          update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
          var added$2 = linesFor(1, text2.length - 1);
          if (nlines > 1) {
            doc3.remove(from2.line + 1, nlines - 1);
          }
          doc3.insert(from2.line + 1, added$2);
        }
        signalLater(doc3, "change", doc3, change);
      }
      function linkedDocs(doc3, f, sharedHistOnly) {
        function propagate(doc4, skip, sharedHist) {
          if (doc4.linked) {
            for (var i2 = 0; i2 < doc4.linked.length; ++i2) {
              var rel = doc4.linked[i2];
              if (rel.doc == skip) {
                continue;
              }
              var shared = sharedHist && rel.sharedHist;
              if (sharedHistOnly && !shared) {
                continue;
              }
              f(rel.doc, shared);
              propagate(rel.doc, doc4, shared);
            }
          }
        }
        propagate(doc3, null, true);
      }
      function attachDoc(cm, doc3) {
        if (doc3.cm) {
          throw new Error("This document is already in use.");
        }
        cm.doc = doc3;
        doc3.cm = cm;
        estimateLineHeights(cm);
        loadMode(cm);
        setDirectionClass(cm);
        cm.options.direction = doc3.direction;
        if (!cm.options.lineWrapping) {
          findMaxLine(cm);
        }
        cm.options.mode = doc3.modeOption;
        regChange(cm);
      }
      function setDirectionClass(cm) {
        (cm.doc.direction == "rtl" ? addClass : rmClass)(cm.display.lineDiv, "CodeMirror-rtl");
      }
      function directionChanged(cm) {
        runInOp(cm, function() {
          setDirectionClass(cm);
          regChange(cm);
        });
      }
      function History(prev) {
        this.done = [];
        this.undone = [];
        this.undoDepth = prev ? prev.undoDepth : Infinity;
        this.lastModTime = this.lastSelTime = 0;
        this.lastOp = this.lastSelOp = null;
        this.lastOrigin = this.lastSelOrigin = null;
        this.generation = this.maxGeneration = prev ? prev.maxGeneration : 1;
      }
      function historyChangeFromChange(doc3, change) {
        var histChange = { from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc3, change.from, change.to) };
        attachLocalSpans(doc3, histChange, change.from.line, change.to.line + 1);
        linkedDocs(doc3, function(doc4) {
          return attachLocalSpans(doc4, histChange, change.from.line, change.to.line + 1);
        }, true);
        return histChange;
      }
      function clearSelectionEvents(array) {
        while (array.length) {
          var last2 = lst(array);
          if (last2.ranges) {
            array.pop();
          } else {
            break;
          }
        }
      }
      function lastChangeEvent(hist, force) {
        if (force) {
          clearSelectionEvents(hist.done);
          return lst(hist.done);
        } else if (hist.done.length && !lst(hist.done).ranges) {
          return lst(hist.done);
        } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
          hist.done.pop();
          return lst(hist.done);
        }
      }
      function addChangeToHistory(doc3, change, selAfter, opId) {
        var hist = doc3.history;
        hist.undone.length = 0;
        var time = +new Date(), cur;
        var last2;
        if ((hist.lastOp == opId || hist.lastOrigin == change.origin && change.origin && (change.origin.charAt(0) == "+" && hist.lastModTime > time - (doc3.cm ? doc3.cm.options.historyEventDelay : 500) || change.origin.charAt(0) == "*")) && (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
          last2 = lst(cur.changes);
          if (cmp(change.from, change.to) == 0 && cmp(change.from, last2.to) == 0) {
            last2.to = changeEnd(change);
          } else {
            cur.changes.push(historyChangeFromChange(doc3, change));
          }
        } else {
          var before = lst(hist.done);
          if (!before || !before.ranges) {
            pushSelectionToHistory(doc3.sel, hist.done);
          }
          cur = {
            changes: [historyChangeFromChange(doc3, change)],
            generation: hist.generation
          };
          hist.done.push(cur);
          while (hist.done.length > hist.undoDepth) {
            hist.done.shift();
            if (!hist.done[0].ranges) {
              hist.done.shift();
            }
          }
        }
        hist.done.push(selAfter);
        hist.generation = ++hist.maxGeneration;
        hist.lastModTime = hist.lastSelTime = time;
        hist.lastOp = hist.lastSelOp = opId;
        hist.lastOrigin = hist.lastSelOrigin = change.origin;
        if (!last2) {
          signal(doc3, "historyAdded");
        }
      }
      function selectionEventCanBeMerged(doc3, origin, prev, sel) {
        var ch = origin.charAt(0);
        return ch == "*" || ch == "+" && prev.ranges.length == sel.ranges.length && prev.somethingSelected() == sel.somethingSelected() && new Date() - doc3.history.lastSelTime <= (doc3.cm ? doc3.cm.options.historyEventDelay : 500);
      }
      function addSelectionToHistory(doc3, sel, opId, options) {
        var hist = doc3.history, origin = options && options.origin;
        if (opId == hist.lastSelOp || origin && hist.lastSelOrigin == origin && (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin || selectionEventCanBeMerged(doc3, origin, lst(hist.done), sel))) {
          hist.done[hist.done.length - 1] = sel;
        } else {
          pushSelectionToHistory(sel, hist.done);
        }
        hist.lastSelTime = +new Date();
        hist.lastSelOrigin = origin;
        hist.lastSelOp = opId;
        if (options && options.clearRedo !== false) {
          clearSelectionEvents(hist.undone);
        }
      }
      function pushSelectionToHistory(sel, dest) {
        var top = lst(dest);
        if (!(top && top.ranges && top.equals(sel))) {
          dest.push(sel);
        }
      }
      function attachLocalSpans(doc3, change, from2, to) {
        var existing = change["spans_" + doc3.id], n = 0;
        doc3.iter(Math.max(doc3.first, from2), Math.min(doc3.first + doc3.size, to), function(line) {
          if (line.markedSpans) {
            (existing || (existing = change["spans_" + doc3.id] = {}))[n] = line.markedSpans;
          }
          ++n;
        });
      }
      function removeClearedSpans(spans) {
        if (!spans) {
          return null;
        }
        var out;
        for (var i2 = 0; i2 < spans.length; ++i2) {
          if (spans[i2].marker.explicitlyCleared) {
            if (!out) {
              out = spans.slice(0, i2);
            }
          } else if (out) {
            out.push(spans[i2]);
          }
        }
        return !out ? spans : out.length ? out : null;
      }
      function getOldSpans(doc3, change) {
        var found = change["spans_" + doc3.id];
        if (!found) {
          return null;
        }
        var nw = [];
        for (var i2 = 0; i2 < change.text.length; ++i2) {
          nw.push(removeClearedSpans(found[i2]));
        }
        return nw;
      }
      function mergeOldSpans(doc3, change) {
        var old = getOldSpans(doc3, change);
        var stretched = stretchSpansOverChange(doc3, change);
        if (!old) {
          return stretched;
        }
        if (!stretched) {
          return old;
        }
        for (var i2 = 0; i2 < old.length; ++i2) {
          var oldCur = old[i2], stretchCur = stretched[i2];
          if (oldCur && stretchCur) {
            spans:
              for (var j = 0; j < stretchCur.length; ++j) {
                var span = stretchCur[j];
                for (var k = 0; k < oldCur.length; ++k) {
                  if (oldCur[k].marker == span.marker) {
                    continue spans;
                  }
                }
                oldCur.push(span);
              }
          } else if (stretchCur) {
            old[i2] = stretchCur;
          }
        }
        return old;
      }
      function copyHistoryArray(events, newGroup, instantiateSel) {
        var copy2 = [];
        for (var i2 = 0; i2 < events.length; ++i2) {
          var event = events[i2];
          if (event.ranges) {
            copy2.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
            continue;
          }
          var changes = event.changes, newChanges = [];
          copy2.push({ changes: newChanges });
          for (var j = 0; j < changes.length; ++j) {
            var change = changes[j], m = void 0;
            newChanges.push({ from: change.from, to: change.to, text: change.text });
            if (newGroup) {
              for (var prop2 in change) {
                if (m = prop2.match(/^spans_(\d+)$/)) {
                  if (indexOf(newGroup, Number(m[1])) > -1) {
                    lst(newChanges)[prop2] = change[prop2];
                    delete change[prop2];
                  }
                }
              }
            }
          }
        }
        return copy2;
      }
      function extendRange(range2, head, other, extend) {
        if (extend) {
          var anchor = range2.anchor;
          if (other) {
            var posBefore = cmp(head, anchor) < 0;
            if (posBefore != cmp(other, anchor) < 0) {
              anchor = head;
              head = other;
            } else if (posBefore != cmp(head, other) < 0) {
              head = other;
            }
          }
          return new Range(anchor, head);
        } else {
          return new Range(other || head, head);
        }
      }
      function extendSelection(doc3, head, other, options, extend) {
        if (extend == null) {
          extend = doc3.cm && (doc3.cm.display.shift || doc3.extend);
        }
        setSelection(doc3, new Selection([extendRange(doc3.sel.primary(), head, other, extend)], 0), options);
      }
      function extendSelections(doc3, heads, options) {
        var out = [];
        var extend = doc3.cm && (doc3.cm.display.shift || doc3.extend);
        for (var i2 = 0; i2 < doc3.sel.ranges.length; i2++) {
          out[i2] = extendRange(doc3.sel.ranges[i2], heads[i2], null, extend);
        }
        var newSel = normalizeSelection(doc3.cm, out, doc3.sel.primIndex);
        setSelection(doc3, newSel, options);
      }
      function replaceOneSelection(doc3, i2, range2, options) {
        var ranges = doc3.sel.ranges.slice(0);
        ranges[i2] = range2;
        setSelection(doc3, normalizeSelection(doc3.cm, ranges, doc3.sel.primIndex), options);
      }
      function setSimpleSelection(doc3, anchor, head, options) {
        setSelection(doc3, simpleSelection(anchor, head), options);
      }
      function filterSelectionChange(doc3, sel, options) {
        var obj = {
          ranges: sel.ranges,
          update: function(ranges) {
            this.ranges = [];
            for (var i2 = 0; i2 < ranges.length; i2++) {
              this.ranges[i2] = new Range(
                clipPos(doc3, ranges[i2].anchor),
                clipPos(doc3, ranges[i2].head)
              );
            }
          },
          origin: options && options.origin
        };
        signal(doc3, "beforeSelectionChange", doc3, obj);
        if (doc3.cm) {
          signal(doc3.cm, "beforeSelectionChange", doc3.cm, obj);
        }
        if (obj.ranges != sel.ranges) {
          return normalizeSelection(doc3.cm, obj.ranges, obj.ranges.length - 1);
        } else {
          return sel;
        }
      }
      function setSelectionReplaceHistory(doc3, sel, options) {
        var done = doc3.history.done, last2 = lst(done);
        if (last2 && last2.ranges) {
          done[done.length - 1] = sel;
          setSelectionNoUndo(doc3, sel, options);
        } else {
          setSelection(doc3, sel, options);
        }
      }
      function setSelection(doc3, sel, options) {
        setSelectionNoUndo(doc3, sel, options);
        addSelectionToHistory(doc3, doc3.sel, doc3.cm ? doc3.cm.curOp.id : NaN, options);
      }
      function setSelectionNoUndo(doc3, sel, options) {
        if (hasHandler(doc3, "beforeSelectionChange") || doc3.cm && hasHandler(doc3.cm, "beforeSelectionChange")) {
          sel = filterSelectionChange(doc3, sel, options);
        }
        var bias = options && options.bias || (cmp(sel.primary().head, doc3.sel.primary().head) < 0 ? -1 : 1);
        setSelectionInner(doc3, skipAtomicInSelection(doc3, sel, bias, true));
        if (!(options && options.scroll === false) && doc3.cm && doc3.cm.getOption("readOnly") != "nocursor") {
          ensureCursorVisible(doc3.cm);
        }
      }
      function setSelectionInner(doc3, sel) {
        if (sel.equals(doc3.sel)) {
          return;
        }
        doc3.sel = sel;
        if (doc3.cm) {
          doc3.cm.curOp.updateInput = 1;
          doc3.cm.curOp.selectionChanged = true;
          signalCursorActivity(doc3.cm);
        }
        signalLater(doc3, "cursorActivity", doc3);
      }
      function reCheckSelection(doc3) {
        setSelectionInner(doc3, skipAtomicInSelection(doc3, doc3.sel, null, false));
      }
      function skipAtomicInSelection(doc3, sel, bias, mayClear) {
        var out;
        for (var i2 = 0; i2 < sel.ranges.length; i2++) {
          var range2 = sel.ranges[i2];
          var old = sel.ranges.length == doc3.sel.ranges.length && doc3.sel.ranges[i2];
          var newAnchor = skipAtomic(doc3, range2.anchor, old && old.anchor, bias, mayClear);
          var newHead = range2.head == range2.anchor ? newAnchor : skipAtomic(doc3, range2.head, old && old.head, bias, mayClear);
          if (out || newAnchor != range2.anchor || newHead != range2.head) {
            if (!out) {
              out = sel.ranges.slice(0, i2);
            }
            out[i2] = new Range(newAnchor, newHead);
          }
        }
        return out ? normalizeSelection(doc3.cm, out, sel.primIndex) : sel;
      }
      function skipAtomicInner(doc3, pos, oldPos, dir, mayClear) {
        var line = getLine(doc3, pos.line);
        if (line.markedSpans) {
          for (var i2 = 0; i2 < line.markedSpans.length; ++i2) {
            var sp = line.markedSpans[i2], m = sp.marker;
            var preventCursorLeft = "selectLeft" in m ? !m.selectLeft : m.inclusiveLeft;
            var preventCursorRight = "selectRight" in m ? !m.selectRight : m.inclusiveRight;
            if ((sp.from == null || (preventCursorLeft ? sp.from <= pos.ch : sp.from < pos.ch)) && (sp.to == null || (preventCursorRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
              if (mayClear) {
                signal(m, "beforeCursorEnter");
                if (m.explicitlyCleared) {
                  if (!line.markedSpans) {
                    break;
                  } else {
                    --i2;
                    continue;
                  }
                }
              }
              if (!m.atomic) {
                continue;
              }
              if (oldPos) {
                var near = m.find(dir < 0 ? 1 : -1), diff = void 0;
                if (dir < 0 ? preventCursorRight : preventCursorLeft) {
                  near = movePos(doc3, near, -dir, near && near.line == pos.line ? line : null);
                }
                if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0)) {
                  return skipAtomicInner(doc3, near, pos, dir, mayClear);
                }
              }
              var far = m.find(dir < 0 ? -1 : 1);
              if (dir < 0 ? preventCursorLeft : preventCursorRight) {
                far = movePos(doc3, far, dir, far.line == pos.line ? line : null);
              }
              return far ? skipAtomicInner(doc3, far, pos, dir, mayClear) : null;
            }
          }
        }
        return pos;
      }
      function skipAtomic(doc3, pos, oldPos, bias, mayClear) {
        var dir = bias || 1;
        var found = skipAtomicInner(doc3, pos, oldPos, dir, mayClear) || !mayClear && skipAtomicInner(doc3, pos, oldPos, dir, true) || skipAtomicInner(doc3, pos, oldPos, -dir, mayClear) || !mayClear && skipAtomicInner(doc3, pos, oldPos, -dir, true);
        if (!found) {
          doc3.cantEdit = true;
          return Pos(doc3.first, 0);
        }
        return found;
      }
      function movePos(doc3, pos, dir, line) {
        if (dir < 0 && pos.ch == 0) {
          if (pos.line > doc3.first) {
            return clipPos(doc3, Pos(pos.line - 1));
          } else {
            return null;
          }
        } else if (dir > 0 && pos.ch == (line || getLine(doc3, pos.line)).text.length) {
          if (pos.line < doc3.first + doc3.size - 1) {
            return Pos(pos.line + 1, 0);
          } else {
            return null;
          }
        } else {
          return new Pos(pos.line, pos.ch + dir);
        }
      }
      function selectAll(cm) {
        cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);
      }
      function filterChange(doc3, change, update) {
        var obj = {
          canceled: false,
          from: change.from,
          to: change.to,
          text: change.text,
          origin: change.origin,
          cancel: function() {
            return obj.canceled = true;
          }
        };
        if (update) {
          obj.update = function(from2, to, text2, origin) {
            if (from2) {
              obj.from = clipPos(doc3, from2);
            }
            if (to) {
              obj.to = clipPos(doc3, to);
            }
            if (text2) {
              obj.text = text2;
            }
            if (origin !== void 0) {
              obj.origin = origin;
            }
          };
        }
        signal(doc3, "beforeChange", doc3, obj);
        if (doc3.cm) {
          signal(doc3.cm, "beforeChange", doc3.cm, obj);
        }
        if (obj.canceled) {
          if (doc3.cm) {
            doc3.cm.curOp.updateInput = 2;
          }
          return null;
        }
        return { from: obj.from, to: obj.to, text: obj.text, origin: obj.origin };
      }
      function makeChange(doc3, change, ignoreReadOnly) {
        if (doc3.cm) {
          if (!doc3.cm.curOp) {
            return operation(doc3.cm, makeChange)(doc3, change, ignoreReadOnly);
          }
          if (doc3.cm.state.suppressEdits) {
            return;
          }
        }
        if (hasHandler(doc3, "beforeChange") || doc3.cm && hasHandler(doc3.cm, "beforeChange")) {
          change = filterChange(doc3, change, true);
          if (!change) {
            return;
          }
        }
        var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc3, change.from, change.to);
        if (split) {
          for (var i2 = split.length - 1; i2 >= 0; --i2) {
            makeChangeInner(doc3, { from: split[i2].from, to: split[i2].to, text: i2 ? [""] : change.text, origin: change.origin });
          }
        } else {
          makeChangeInner(doc3, change);
        }
      }
      function makeChangeInner(doc3, change) {
        if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) {
          return;
        }
        var selAfter = computeSelAfterChange(doc3, change);
        addChangeToHistory(doc3, change, selAfter, doc3.cm ? doc3.cm.curOp.id : NaN);
        makeChangeSingleDoc(doc3, change, selAfter, stretchSpansOverChange(doc3, change));
        var rebased = [];
        linkedDocs(doc3, function(doc4, sharedHist) {
          if (!sharedHist && indexOf(rebased, doc4.history) == -1) {
            rebaseHist(doc4.history, change);
            rebased.push(doc4.history);
          }
          makeChangeSingleDoc(doc4, change, null, stretchSpansOverChange(doc4, change));
        });
      }
      function makeChangeFromHistory(doc3, type, allowSelectionOnly) {
        var suppress = doc3.cm && doc3.cm.state.suppressEdits;
        if (suppress && !allowSelectionOnly) {
          return;
        }
        var hist = doc3.history, event, selAfter = doc3.sel;
        var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;
        var i2 = 0;
        for (; i2 < source.length; i2++) {
          event = source[i2];
          if (allowSelectionOnly ? event.ranges && !event.equals(doc3.sel) : !event.ranges) {
            break;
          }
        }
        if (i2 == source.length) {
          return;
        }
        hist.lastOrigin = hist.lastSelOrigin = null;
        for (; ; ) {
          event = source.pop();
          if (event.ranges) {
            pushSelectionToHistory(event, dest);
            if (allowSelectionOnly && !event.equals(doc3.sel)) {
              setSelection(doc3, event, { clearRedo: false });
              return;
            }
            selAfter = event;
          } else if (suppress) {
            source.push(event);
            return;
          } else {
            break;
          }
        }
        var antiChanges = [];
        pushSelectionToHistory(selAfter, dest);
        dest.push({ changes: antiChanges, generation: hist.generation });
        hist.generation = event.generation || ++hist.maxGeneration;
        var filter = hasHandler(doc3, "beforeChange") || doc3.cm && hasHandler(doc3.cm, "beforeChange");
        var loop = function(i3) {
          var change = event.changes[i3];
          change.origin = type;
          if (filter && !filterChange(doc3, change, false)) {
            source.length = 0;
            return {};
          }
          antiChanges.push(historyChangeFromChange(doc3, change));
          var after = i3 ? computeSelAfterChange(doc3, change) : lst(source);
          makeChangeSingleDoc(doc3, change, after, mergeOldSpans(doc3, change));
          if (!i3 && doc3.cm) {
            doc3.cm.scrollIntoView({ from: change.from, to: changeEnd(change) });
          }
          var rebased = [];
          linkedDocs(doc3, function(doc4, sharedHist) {
            if (!sharedHist && indexOf(rebased, doc4.history) == -1) {
              rebaseHist(doc4.history, change);
              rebased.push(doc4.history);
            }
            makeChangeSingleDoc(doc4, change, null, mergeOldSpans(doc4, change));
          });
        };
        for (var i$12 = event.changes.length - 1; i$12 >= 0; --i$12) {
          var returned = loop(i$12);
          if (returned)
            return returned.v;
        }
      }
      function shiftDoc(doc3, distance) {
        if (distance == 0) {
          return;
        }
        doc3.first += distance;
        doc3.sel = new Selection(map2(doc3.sel.ranges, function(range2) {
          return new Range(
            Pos(range2.anchor.line + distance, range2.anchor.ch),
            Pos(range2.head.line + distance, range2.head.ch)
          );
        }), doc3.sel.primIndex);
        if (doc3.cm) {
          regChange(doc3.cm, doc3.first, doc3.first - distance, distance);
          for (var d = doc3.cm.display, l = d.viewFrom; l < d.viewTo; l++) {
            regLineChange(doc3.cm, l, "gutter");
          }
        }
      }
      function makeChangeSingleDoc(doc3, change, selAfter, spans) {
        if (doc3.cm && !doc3.cm.curOp) {
          return operation(doc3.cm, makeChangeSingleDoc)(doc3, change, selAfter, spans);
        }
        if (change.to.line < doc3.first) {
          shiftDoc(doc3, change.text.length - 1 - (change.to.line - change.from.line));
          return;
        }
        if (change.from.line > doc3.lastLine()) {
          return;
        }
        if (change.from.line < doc3.first) {
          var shift = change.text.length - 1 - (doc3.first - change.from.line);
          shiftDoc(doc3, shift);
          change = {
            from: Pos(doc3.first, 0),
            to: Pos(change.to.line + shift, change.to.ch),
            text: [lst(change.text)],
            origin: change.origin
          };
        }
        var last2 = doc3.lastLine();
        if (change.to.line > last2) {
          change = {
            from: change.from,
            to: Pos(last2, getLine(doc3, last2).text.length),
            text: [change.text[0]],
            origin: change.origin
          };
        }
        change.removed = getBetween(doc3, change.from, change.to);
        if (!selAfter) {
          selAfter = computeSelAfterChange(doc3, change);
        }
        if (doc3.cm) {
          makeChangeSingleDocInEditor(doc3.cm, change, spans);
        } else {
          updateDoc(doc3, change, spans);
        }
        setSelectionNoUndo(doc3, selAfter, sel_dontScroll);
        if (doc3.cantEdit && skipAtomic(doc3, Pos(doc3.firstLine(), 0))) {
          doc3.cantEdit = false;
        }
      }
      function makeChangeSingleDocInEditor(cm, change, spans) {
        var doc3 = cm.doc, display = cm.display, from2 = change.from, to = change.to;
        var recomputeMaxLength = false, checkWidthStart = from2.line;
        if (!cm.options.lineWrapping) {
          checkWidthStart = lineNo(visualLine(getLine(doc3, from2.line)));
          doc3.iter(checkWidthStart, to.line + 1, function(line) {
            if (line == display.maxLine) {
              recomputeMaxLength = true;
              return true;
            }
          });
        }
        if (doc3.sel.contains(change.from, change.to) > -1) {
          signalCursorActivity(cm);
        }
        updateDoc(doc3, change, spans, estimateHeight(cm));
        if (!cm.options.lineWrapping) {
          doc3.iter(checkWidthStart, from2.line + change.text.length, function(line) {
            var len = lineLength(line);
            if (len > display.maxLineLength) {
              display.maxLine = line;
              display.maxLineLength = len;
              display.maxLineChanged = true;
              recomputeMaxLength = false;
            }
          });
          if (recomputeMaxLength) {
            cm.curOp.updateMaxLine = true;
          }
        }
        retreatFrontier(doc3, from2.line);
        startWorker(cm, 400);
        var lendiff = change.text.length - (to.line - from2.line) - 1;
        if (change.full) {
          regChange(cm);
        } else if (from2.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change)) {
          regLineChange(cm, from2.line, "text");
        } else {
          regChange(cm, from2.line, to.line + 1, lendiff);
        }
        var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
        if (changeHandler || changesHandler) {
          var obj = {
            from: from2,
            to,
            text: change.text,
            removed: change.removed,
            origin: change.origin
          };
          if (changeHandler) {
            signalLater(cm, "change", cm, obj);
          }
          if (changesHandler) {
            (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj);
          }
        }
        cm.display.selForContextMenu = null;
      }
      function replaceRange(doc3, code2, from2, to, origin) {
        var assign;
        if (!to) {
          to = from2;
        }
        if (cmp(to, from2) < 0) {
          assign = [to, from2], from2 = assign[0], to = assign[1];
        }
        if (typeof code2 == "string") {
          code2 = doc3.splitLines(code2);
        }
        makeChange(doc3, { from: from2, to, text: code2, origin });
      }
      function rebaseHistSelSingle(pos, from2, to, diff) {
        if (to < pos.line) {
          pos.line += diff;
        } else if (from2 < pos.line) {
          pos.line = from2;
          pos.ch = 0;
        }
      }
      function rebaseHistArray(array, from2, to, diff) {
        for (var i2 = 0; i2 < array.length; ++i2) {
          var sub = array[i2], ok = true;
          if (sub.ranges) {
            if (!sub.copied) {
              sub = array[i2] = sub.deepCopy();
              sub.copied = true;
            }
            for (var j = 0; j < sub.ranges.length; j++) {
              rebaseHistSelSingle(sub.ranges[j].anchor, from2, to, diff);
              rebaseHistSelSingle(sub.ranges[j].head, from2, to, diff);
            }
            continue;
          }
          for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
            var cur = sub.changes[j$1];
            if (to < cur.from.line) {
              cur.from = Pos(cur.from.line + diff, cur.from.ch);
              cur.to = Pos(cur.to.line + diff, cur.to.ch);
            } else if (from2 <= cur.to.line) {
              ok = false;
              break;
            }
          }
          if (!ok) {
            array.splice(0, i2 + 1);
            i2 = 0;
          }
        }
      }
      function rebaseHist(hist, change) {
        var from2 = change.from.line, to = change.to.line, diff = change.text.length - (to - from2) - 1;
        rebaseHistArray(hist.done, from2, to, diff);
        rebaseHistArray(hist.undone, from2, to, diff);
      }
      function changeLine(doc3, handle, changeType, op) {
        var no = handle, line = handle;
        if (typeof handle == "number") {
          line = getLine(doc3, clipLine(doc3, handle));
        } else {
          no = lineNo(handle);
        }
        if (no == null) {
          return null;
        }
        if (op(line, no) && doc3.cm) {
          regLineChange(doc3.cm, no, changeType);
        }
        return line;
      }
      function LeafChunk(lines) {
        this.lines = lines;
        this.parent = null;
        var height = 0;
        for (var i2 = 0; i2 < lines.length; ++i2) {
          lines[i2].parent = this;
          height += lines[i2].height;
        }
        this.height = height;
      }
      LeafChunk.prototype = {
        chunkSize: function() {
          return this.lines.length;
        },
        // Remove the n lines at offset 'at'.
        removeInner: function(at, n) {
          for (var i2 = at, e = at + n; i2 < e; ++i2) {
            var line = this.lines[i2];
            this.height -= line.height;
            cleanUpLine(line);
            signalLater(line, "delete");
          }
          this.lines.splice(at, n);
        },
        // Helper used to collapse a small branch into a single leaf.
        collapse: function(lines) {
          lines.push.apply(lines, this.lines);
        },
        // Insert the given array of lines at offset 'at', count them as
        // having the given height.
        insertInner: function(at, lines, height) {
          this.height += height;
          this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
          for (var i2 = 0; i2 < lines.length; ++i2) {
            lines[i2].parent = this;
          }
        },
        // Used to iterate over a part of the tree.
        iterN: function(at, n, op) {
          for (var e = at + n; at < e; ++at) {
            if (op(this.lines[at])) {
              return true;
            }
          }
        }
      };
      function BranchChunk(children2) {
        this.children = children2;
        var size = 0, height = 0;
        for (var i2 = 0; i2 < children2.length; ++i2) {
          var ch = children2[i2];
          size += ch.chunkSize();
          height += ch.height;
          ch.parent = this;
        }
        this.size = size;
        this.height = height;
        this.parent = null;
      }
      BranchChunk.prototype = {
        chunkSize: function() {
          return this.size;
        },
        removeInner: function(at, n) {
          this.size -= n;
          for (var i2 = 0; i2 < this.children.length; ++i2) {
            var child = this.children[i2], sz = child.chunkSize();
            if (at < sz) {
              var rm = Math.min(n, sz - at), oldHeight = child.height;
              child.removeInner(at, rm);
              this.height -= oldHeight - child.height;
              if (sz == rm) {
                this.children.splice(i2--, 1);
                child.parent = null;
              }
              if ((n -= rm) == 0) {
                break;
              }
              at = 0;
            } else {
              at -= sz;
            }
          }
          if (this.size - n < 25 && (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
            var lines = [];
            this.collapse(lines);
            this.children = [new LeafChunk(lines)];
            this.children[0].parent = this;
          }
        },
        collapse: function(lines) {
          for (var i2 = 0; i2 < this.children.length; ++i2) {
            this.children[i2].collapse(lines);
          }
        },
        insertInner: function(at, lines, height) {
          this.size += lines.length;
          this.height += height;
          for (var i2 = 0; i2 < this.children.length; ++i2) {
            var child = this.children[i2], sz = child.chunkSize();
            if (at <= sz) {
              child.insertInner(at, lines, height);
              if (child.lines && child.lines.length > 50) {
                var remaining = child.lines.length % 25 + 25;
                for (var pos = remaining; pos < child.lines.length; ) {
                  var leaf = new LeafChunk(child.lines.slice(pos, pos += 25));
                  child.height -= leaf.height;
                  this.children.splice(++i2, 0, leaf);
                  leaf.parent = this;
                }
                child.lines = child.lines.slice(0, remaining);
                this.maybeSpill();
              }
              break;
            }
            at -= sz;
          }
        },
        // When a node has grown, check whether it should be split.
        maybeSpill: function() {
          if (this.children.length <= 10) {
            return;
          }
          var me = this;
          do {
            var spilled = me.children.splice(me.children.length - 5, 5);
            var sibling = new BranchChunk(spilled);
            if (!me.parent) {
              var copy2 = new BranchChunk(me.children);
              copy2.parent = me;
              me.children = [copy2, sibling];
              me = copy2;
            } else {
              me.size -= sibling.size;
              me.height -= sibling.height;
              var myIndex = indexOf(me.parent.children, me);
              me.parent.children.splice(myIndex + 1, 0, sibling);
            }
            sibling.parent = me.parent;
          } while (me.children.length > 10);
          me.parent.maybeSpill();
        },
        iterN: function(at, n, op) {
          for (var i2 = 0; i2 < this.children.length; ++i2) {
            var child = this.children[i2], sz = child.chunkSize();
            if (at < sz) {
              var used = Math.min(n, sz - at);
              if (child.iterN(at, used, op)) {
                return true;
              }
              if ((n -= used) == 0) {
                break;
              }
              at = 0;
            } else {
              at -= sz;
            }
          }
        }
      };
      var LineWidget = function(doc3, node, options) {
        if (options) {
          for (var opt in options) {
            if (options.hasOwnProperty(opt)) {
              this[opt] = options[opt];
            }
          }
        }
        this.doc = doc3;
        this.node = node;
      };
      LineWidget.prototype.clear = function() {
        var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
        if (no == null || !ws) {
          return;
        }
        for (var i2 = 0; i2 < ws.length; ++i2) {
          if (ws[i2] == this) {
            ws.splice(i2--, 1);
          }
        }
        if (!ws.length) {
          line.widgets = null;
        }
        var height = widgetHeight(this);
        updateLineHeight(line, Math.max(0, line.height - height));
        if (cm) {
          runInOp(cm, function() {
            adjustScrollWhenAboveVisible(cm, line, -height);
            regLineChange(cm, no, "widget");
          });
          signalLater(cm, "lineWidgetCleared", cm, this, no);
        }
      };
      LineWidget.prototype.changed = function() {
        var this$1$1 = this;
        var oldH = this.height, cm = this.doc.cm, line = this.line;
        this.height = null;
        var diff = widgetHeight(this) - oldH;
        if (!diff) {
          return;
        }
        if (!lineIsHidden(this.doc, line)) {
          updateLineHeight(line, line.height + diff);
        }
        if (cm) {
          runInOp(cm, function() {
            cm.curOp.forceUpdate = true;
            adjustScrollWhenAboveVisible(cm, line, diff);
            signalLater(cm, "lineWidgetChanged", cm, this$1$1, lineNo(line));
          });
        }
      };
      eventMixin(LineWidget);
      function adjustScrollWhenAboveVisible(cm, line, diff) {
        if (heightAtLine(line) < (cm.curOp && cm.curOp.scrollTop || cm.doc.scrollTop)) {
          addToScrollTop(cm, diff);
        }
      }
      function addLineWidget(doc3, handle, node, options) {
        var widget = new LineWidget(doc3, node, options);
        var cm = doc3.cm;
        if (cm && widget.noHScroll) {
          cm.display.alignWidgets = true;
        }
        changeLine(doc3, handle, "widget", function(line) {
          var widgets = line.widgets || (line.widgets = []);
          if (widget.insertAt == null) {
            widgets.push(widget);
          } else {
            widgets.splice(Math.min(widgets.length, Math.max(0, widget.insertAt)), 0, widget);
          }
          widget.line = line;
          if (cm && !lineIsHidden(doc3, line)) {
            var aboveVisible = heightAtLine(line) < doc3.scrollTop;
            updateLineHeight(line, line.height + widgetHeight(widget));
            if (aboveVisible) {
              addToScrollTop(cm, widget.height);
            }
            cm.curOp.forceUpdate = true;
          }
          return true;
        });
        if (cm) {
          signalLater(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : lineNo(handle));
        }
        return widget;
      }
      var nextMarkerId = 0;
      var TextMarker = function(doc3, type) {
        this.lines = [];
        this.type = type;
        this.doc = doc3;
        this.id = ++nextMarkerId;
      };
      TextMarker.prototype.clear = function() {
        if (this.explicitlyCleared) {
          return;
        }
        var cm = this.doc.cm, withOp = cm && !cm.curOp;
        if (withOp) {
          startOperation(cm);
        }
        if (hasHandler(this, "clear")) {
          var found = this.find();
          if (found) {
            signalLater(this, "clear", found.from, found.to);
          }
        }
        var min2 = null, max2 = null;
        for (var i2 = 0; i2 < this.lines.length; ++i2) {
          var line = this.lines[i2];
          var span = getMarkedSpanFor(line.markedSpans, this);
          if (cm && !this.collapsed) {
            regLineChange(cm, lineNo(line), "text");
          } else if (cm) {
            if (span.to != null) {
              max2 = lineNo(line);
            }
            if (span.from != null) {
              min2 = lineNo(line);
            }
          }
          line.markedSpans = removeMarkedSpan(line.markedSpans, span);
          if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm) {
            updateLineHeight(line, textHeight(cm.display));
          }
        }
        if (cm && this.collapsed && !cm.options.lineWrapping) {
          for (var i$12 = 0; i$12 < this.lines.length; ++i$12) {
            var visual = visualLine(this.lines[i$12]), len = lineLength(visual);
            if (len > cm.display.maxLineLength) {
              cm.display.maxLine = visual;
              cm.display.maxLineLength = len;
              cm.display.maxLineChanged = true;
            }
          }
        }
        if (min2 != null && cm && this.collapsed) {
          regChange(cm, min2, max2 + 1);
        }
        this.lines.length = 0;
        this.explicitlyCleared = true;
        if (this.atomic && this.doc.cantEdit) {
          this.doc.cantEdit = false;
          if (cm) {
            reCheckSelection(cm.doc);
          }
        }
        if (cm) {
          signalLater(cm, "markerCleared", cm, this, min2, max2);
        }
        if (withOp) {
          endOperation(cm);
        }
        if (this.parent) {
          this.parent.clear();
        }
      };
      TextMarker.prototype.find = function(side, lineObj) {
        if (side == null && this.type == "bookmark") {
          side = 1;
        }
        var from2, to;
        for (var i2 = 0; i2 < this.lines.length; ++i2) {
          var line = this.lines[i2];
          var span = getMarkedSpanFor(line.markedSpans, this);
          if (span.from != null) {
            from2 = Pos(lineObj ? line : lineNo(line), span.from);
            if (side == -1) {
              return from2;
            }
          }
          if (span.to != null) {
            to = Pos(lineObj ? line : lineNo(line), span.to);
            if (side == 1) {
              return to;
            }
          }
        }
        return from2 && { from: from2, to };
      };
      TextMarker.prototype.changed = function() {
        var this$1$1 = this;
        var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
        if (!pos || !cm) {
          return;
        }
        runInOp(cm, function() {
          var line = pos.line, lineN = lineNo(pos.line);
          var view = findViewForLine(cm, lineN);
          if (view) {
            clearLineMeasurementCacheFor(view);
            cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
          }
          cm.curOp.updateMaxLine = true;
          if (!lineIsHidden(widget.doc, line) && widget.height != null) {
            var oldHeight = widget.height;
            widget.height = null;
            var dHeight = widgetHeight(widget) - oldHeight;
            if (dHeight) {
              updateLineHeight(line, line.height + dHeight);
            }
          }
          signalLater(cm, "markerChanged", cm, this$1$1);
        });
      };
      TextMarker.prototype.attachLine = function(line) {
        if (!this.lines.length && this.doc.cm) {
          var op = this.doc.cm.curOp;
          if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1) {
            (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
          }
        }
        this.lines.push(line);
      };
      TextMarker.prototype.detachLine = function(line) {
        this.lines.splice(indexOf(this.lines, line), 1);
        if (!this.lines.length && this.doc.cm) {
          var op = this.doc.cm.curOp;
          (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
        }
      };
      eventMixin(TextMarker);
      function markText(doc3, from2, to, options, type) {
        if (options && options.shared) {
          return markTextShared(doc3, from2, to, options, type);
        }
        if (doc3.cm && !doc3.cm.curOp) {
          return operation(doc3.cm, markText)(doc3, from2, to, options, type);
        }
        var marker = new TextMarker(doc3, type), diff = cmp(from2, to);
        if (options) {
          copyObj(options, marker, false);
        }
        if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false) {
          return marker;
        }
        if (marker.replacedWith) {
          marker.collapsed = true;
          marker.widgetNode = eltP("span", [marker.replacedWith], "CodeMirror-widget");
          if (!options.handleMouseEvents) {
            marker.widgetNode.setAttribute("cm-ignore-events", "true");
          }
          if (options.insertLeft) {
            marker.widgetNode.insertLeft = true;
          }
        }
        if (marker.collapsed) {
          if (conflictingCollapsedRange(doc3, from2.line, from2, to, marker) || from2.line != to.line && conflictingCollapsedRange(doc3, to.line, from2, to, marker)) {
            throw new Error("Inserting collapsed marker partially overlapping an existing one");
          }
          seeCollapsedSpans();
        }
        if (marker.addToHistory) {
          addChangeToHistory(doc3, { from: from2, to, origin: "markText" }, doc3.sel, NaN);
        }
        var curLine = from2.line, cm = doc3.cm, updateMaxLine;
        doc3.iter(curLine, to.line + 1, function(line) {
          if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine) {
            updateMaxLine = true;
          }
          if (marker.collapsed && curLine != from2.line) {
            updateLineHeight(line, 0);
          }
          addMarkedSpan(line, new MarkedSpan(
            marker,
            curLine == from2.line ? from2.ch : null,
            curLine == to.line ? to.ch : null
          ), doc3.cm && doc3.cm.curOp);
          ++curLine;
        });
        if (marker.collapsed) {
          doc3.iter(from2.line, to.line + 1, function(line) {
            if (lineIsHidden(doc3, line)) {
              updateLineHeight(line, 0);
            }
          });
        }
        if (marker.clearOnEnter) {
          on(marker, "beforeCursorEnter", function() {
            return marker.clear();
          });
        }
        if (marker.readOnly) {
          seeReadOnlySpans();
          if (doc3.history.done.length || doc3.history.undone.length) {
            doc3.clearHistory();
          }
        }
        if (marker.collapsed) {
          marker.id = ++nextMarkerId;
          marker.atomic = true;
        }
        if (cm) {
          if (updateMaxLine) {
            cm.curOp.updateMaxLine = true;
          }
          if (marker.collapsed) {
            regChange(cm, from2.line, to.line + 1);
          } else if (marker.className || marker.startStyle || marker.endStyle || marker.css || marker.attributes || marker.title) {
            for (var i2 = from2.line; i2 <= to.line; i2++) {
              regLineChange(cm, i2, "text");
            }
          }
          if (marker.atomic) {
            reCheckSelection(cm.doc);
          }
          signalLater(cm, "markerAdded", cm, marker);
        }
        return marker;
      }
      var SharedTextMarker = function(markers, primary) {
        this.markers = markers;
        this.primary = primary;
        for (var i2 = 0; i2 < markers.length; ++i2) {
          markers[i2].parent = this;
        }
      };
      SharedTextMarker.prototype.clear = function() {
        if (this.explicitlyCleared) {
          return;
        }
        this.explicitlyCleared = true;
        for (var i2 = 0; i2 < this.markers.length; ++i2) {
          this.markers[i2].clear();
        }
        signalLater(this, "clear");
      };
      SharedTextMarker.prototype.find = function(side, lineObj) {
        return this.primary.find(side, lineObj);
      };
      eventMixin(SharedTextMarker);
      function markTextShared(doc3, from2, to, options, type) {
        options = copyObj(options);
        options.shared = false;
        var markers = [markText(doc3, from2, to, options, type)], primary = markers[0];
        var widget = options.widgetNode;
        linkedDocs(doc3, function(doc4) {
          if (widget) {
            options.widgetNode = widget.cloneNode(true);
          }
          markers.push(markText(doc4, clipPos(doc4, from2), clipPos(doc4, to), options, type));
          for (var i2 = 0; i2 < doc4.linked.length; ++i2) {
            if (doc4.linked[i2].isParent) {
              return;
            }
          }
          primary = lst(markers);
        });
        return new SharedTextMarker(markers, primary);
      }
      function findSharedMarkers(doc3) {
        return doc3.findMarks(Pos(doc3.first, 0), doc3.clipPos(Pos(doc3.lastLine())), function(m) {
          return m.parent;
        });
      }
      function copySharedMarkers(doc3, markers) {
        for (var i2 = 0; i2 < markers.length; i2++) {
          var marker = markers[i2], pos = marker.find();
          var mFrom = doc3.clipPos(pos.from), mTo = doc3.clipPos(pos.to);
          if (cmp(mFrom, mTo)) {
            var subMark = markText(doc3, mFrom, mTo, marker.primary, marker.primary.type);
            marker.markers.push(subMark);
            subMark.parent = marker;
          }
        }
      }
      function detachSharedMarkers(markers) {
        var loop = function(i3) {
          var marker = markers[i3], linked = [marker.primary.doc];
          linkedDocs(marker.primary.doc, function(d) {
            return linked.push(d);
          });
          for (var j = 0; j < marker.markers.length; j++) {
            var subMarker = marker.markers[j];
            if (indexOf(linked, subMarker.doc) == -1) {
              subMarker.parent = null;
              marker.markers.splice(j--, 1);
            }
          }
        };
        for (var i2 = 0; i2 < markers.length; i2++)
          loop(i2);
      }
      var nextDocId = 0;
      var Doc2 = function(text2, mode, firstLine, lineSep, direction) {
        if (!(this instanceof Doc2)) {
          return new Doc2(text2, mode, firstLine, lineSep, direction);
        }
        if (firstLine == null) {
          firstLine = 0;
        }
        BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
        this.first = firstLine;
        this.scrollTop = this.scrollLeft = 0;
        this.cantEdit = false;
        this.cleanGeneration = 1;
        this.modeFrontier = this.highlightFrontier = firstLine;
        var start = Pos(firstLine, 0);
        this.sel = simpleSelection(start);
        this.history = new History(null);
        this.id = ++nextDocId;
        this.modeOption = mode;
        this.lineSep = lineSep;
        this.direction = direction == "rtl" ? "rtl" : "ltr";
        this.extend = false;
        if (typeof text2 == "string") {
          text2 = this.splitLines(text2);
        }
        updateDoc(this, { from: start, to: start, text: text2 });
        setSelection(this, simpleSelection(start), sel_dontScroll);
      };
      Doc2.prototype = createObj(BranchChunk.prototype, {
        constructor: Doc2,
        // Iterate over the document. Supports two forms -- with only one
        // argument, it calls that for each line in the document. With
        // three, it iterates over the range given by the first two (with
        // the second being non-inclusive).
        iter: function(from2, to, op) {
          if (op) {
            this.iterN(from2 - this.first, to - from2, op);
          } else {
            this.iterN(this.first, this.first + this.size, from2);
          }
        },
        // Non-public interface for adding and removing lines.
        insert: function(at, lines) {
          var height = 0;
          for (var i2 = 0; i2 < lines.length; ++i2) {
            height += lines[i2].height;
          }
          this.insertInner(at - this.first, lines, height);
        },
        remove: function(at, n) {
          this.removeInner(at - this.first, n);
        },
        // From here, the methods are part of the public interface. Most
        // are also available from CodeMirror (editor) instances.
        getValue: function(lineSep) {
          var lines = getLines(this, this.first, this.first + this.size);
          if (lineSep === false) {
            return lines;
          }
          return lines.join(lineSep || this.lineSeparator());
        },
        setValue: docMethodOp(function(code2) {
          var top = Pos(this.first, 0), last2 = this.first + this.size - 1;
          makeChange(this, {
            from: top,
            to: Pos(last2, getLine(this, last2).text.length),
            text: this.splitLines(code2),
            origin: "setValue",
            full: true
          }, true);
          if (this.cm) {
            scrollToCoords(this.cm, 0, 0);
          }
          setSelection(this, simpleSelection(top), sel_dontScroll);
        }),
        replaceRange: function(code2, from2, to, origin) {
          from2 = clipPos(this, from2);
          to = to ? clipPos(this, to) : from2;
          replaceRange(this, code2, from2, to, origin);
        },
        getRange: function(from2, to, lineSep) {
          var lines = getBetween(this, clipPos(this, from2), clipPos(this, to));
          if (lineSep === false) {
            return lines;
          }
          if (lineSep === "") {
            return lines.join("");
          }
          return lines.join(lineSep || this.lineSeparator());
        },
        getLine: function(line) {
          var l = this.getLineHandle(line);
          return l && l.text;
        },
        getLineHandle: function(line) {
          if (isLine(this, line)) {
            return getLine(this, line);
          }
        },
        getLineNumber: function(line) {
          return lineNo(line);
        },
        getLineHandleVisualStart: function(line) {
          if (typeof line == "number") {
            line = getLine(this, line);
          }
          return visualLine(line);
        },
        lineCount: function() {
          return this.size;
        },
        firstLine: function() {
          return this.first;
        },
        lastLine: function() {
          return this.first + this.size - 1;
        },
        clipPos: function(pos) {
          return clipPos(this, pos);
        },
        getCursor: function(start) {
          var range2 = this.sel.primary(), pos;
          if (start == null || start == "head") {
            pos = range2.head;
          } else if (start == "anchor") {
            pos = range2.anchor;
          } else if (start == "end" || start == "to" || start === false) {
            pos = range2.to();
          } else {
            pos = range2.from();
          }
          return pos;
        },
        listSelections: function() {
          return this.sel.ranges;
        },
        somethingSelected: function() {
          return this.sel.somethingSelected();
        },
        setCursor: docMethodOp(function(line, ch, options) {
          setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
        }),
        setSelection: docMethodOp(function(anchor, head, options) {
          setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
        }),
        extendSelection: docMethodOp(function(head, other, options) {
          extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
        }),
        extendSelections: docMethodOp(function(heads, options) {
          extendSelections(this, clipPosArray(this, heads), options);
        }),
        extendSelectionsBy: docMethodOp(function(f, options) {
          var heads = map2(this.sel.ranges, f);
          extendSelections(this, clipPosArray(this, heads), options);
        }),
        setSelections: docMethodOp(function(ranges, primary, options) {
          if (!ranges.length) {
            return;
          }
          var out = [];
          for (var i2 = 0; i2 < ranges.length; i2++) {
            out[i2] = new Range(
              clipPos(this, ranges[i2].anchor),
              clipPos(this, ranges[i2].head || ranges[i2].anchor)
            );
          }
          if (primary == null) {
            primary = Math.min(ranges.length - 1, this.sel.primIndex);
          }
          setSelection(this, normalizeSelection(this.cm, out, primary), options);
        }),
        addSelection: docMethodOp(function(anchor, head, options) {
          var ranges = this.sel.ranges.slice(0);
          ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
          setSelection(this, normalizeSelection(this.cm, ranges, ranges.length - 1), options);
        }),
        getSelection: function(lineSep) {
          var ranges = this.sel.ranges, lines;
          for (var i2 = 0; i2 < ranges.length; i2++) {
            var sel = getBetween(this, ranges[i2].from(), ranges[i2].to());
            lines = lines ? lines.concat(sel) : sel;
          }
          if (lineSep === false) {
            return lines;
          } else {
            return lines.join(lineSep || this.lineSeparator());
          }
        },
        getSelections: function(lineSep) {
          var parts = [], ranges = this.sel.ranges;
          for (var i2 = 0; i2 < ranges.length; i2++) {
            var sel = getBetween(this, ranges[i2].from(), ranges[i2].to());
            if (lineSep !== false) {
              sel = sel.join(lineSep || this.lineSeparator());
            }
            parts[i2] = sel;
          }
          return parts;
        },
        replaceSelection: function(code2, collapse, origin) {
          var dup = [];
          for (var i2 = 0; i2 < this.sel.ranges.length; i2++) {
            dup[i2] = code2;
          }
          this.replaceSelections(dup, collapse, origin || "+input");
        },
        replaceSelections: docMethodOp(function(code2, collapse, origin) {
          var changes = [], sel = this.sel;
          for (var i2 = 0; i2 < sel.ranges.length; i2++) {
            var range2 = sel.ranges[i2];
            changes[i2] = { from: range2.from(), to: range2.to(), text: this.splitLines(code2[i2]), origin };
          }
          var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
          for (var i$12 = changes.length - 1; i$12 >= 0; i$12--) {
            makeChange(this, changes[i$12]);
          }
          if (newSel) {
            setSelectionReplaceHistory(this, newSel);
          } else if (this.cm) {
            ensureCursorVisible(this.cm);
          }
        }),
        undo: docMethodOp(function() {
          makeChangeFromHistory(this, "undo");
        }),
        redo: docMethodOp(function() {
          makeChangeFromHistory(this, "redo");
        }),
        undoSelection: docMethodOp(function() {
          makeChangeFromHistory(this, "undo", true);
        }),
        redoSelection: docMethodOp(function() {
          makeChangeFromHistory(this, "redo", true);
        }),
        setExtending: function(val) {
          this.extend = val;
        },
        getExtending: function() {
          return this.extend;
        },
        historySize: function() {
          var hist = this.history, done = 0, undone = 0;
          for (var i2 = 0; i2 < hist.done.length; i2++) {
            if (!hist.done[i2].ranges) {
              ++done;
            }
          }
          for (var i$12 = 0; i$12 < hist.undone.length; i$12++) {
            if (!hist.undone[i$12].ranges) {
              ++undone;
            }
          }
          return { undo: done, redo: undone };
        },
        clearHistory: function() {
          var this$1$1 = this;
          this.history = new History(this.history);
          linkedDocs(this, function(doc3) {
            return doc3.history = this$1$1.history;
          }, true);
        },
        markClean: function() {
          this.cleanGeneration = this.changeGeneration(true);
        },
        changeGeneration: function(forceSplit) {
          if (forceSplit) {
            this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null;
          }
          return this.history.generation;
        },
        isClean: function(gen) {
          return this.history.generation == (gen || this.cleanGeneration);
        },
        getHistory: function() {
          return {
            done: copyHistoryArray(this.history.done),
            undone: copyHistoryArray(this.history.undone)
          };
        },
        setHistory: function(histData) {
          var hist = this.history = new History(this.history);
          hist.done = copyHistoryArray(histData.done.slice(0), null, true);
          hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
        },
        setGutterMarker: docMethodOp(function(line, gutterID, value) {
          return changeLine(this, line, "gutter", function(line2) {
            var markers = line2.gutterMarkers || (line2.gutterMarkers = {});
            markers[gutterID] = value;
            if (!value && isEmpty(markers)) {
              line2.gutterMarkers = null;
            }
            return true;
          });
        }),
        clearGutter: docMethodOp(function(gutterID) {
          var this$1$1 = this;
          this.iter(function(line) {
            if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
              changeLine(this$1$1, line, "gutter", function() {
                line.gutterMarkers[gutterID] = null;
                if (isEmpty(line.gutterMarkers)) {
                  line.gutterMarkers = null;
                }
                return true;
              });
            }
          });
        }),
        lineInfo: function(line) {
          var n;
          if (typeof line == "number") {
            if (!isLine(this, line)) {
              return null;
            }
            n = line;
            line = getLine(this, line);
            if (!line) {
              return null;
            }
          } else {
            n = lineNo(line);
            if (n == null) {
              return null;
            }
          }
          return {
            line: n,
            handle: line,
            text: line.text,
            gutterMarkers: line.gutterMarkers,
            textClass: line.textClass,
            bgClass: line.bgClass,
            wrapClass: line.wrapClass,
            widgets: line.widgets
          };
        },
        addLineClass: docMethodOp(function(handle, where, cls) {
          return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
            var prop2 = where == "text" ? "textClass" : where == "background" ? "bgClass" : where == "gutter" ? "gutterClass" : "wrapClass";
            if (!line[prop2]) {
              line[prop2] = cls;
            } else if (classTest(cls).test(line[prop2])) {
              return false;
            } else {
              line[prop2] += " " + cls;
            }
            return true;
          });
        }),
        removeLineClass: docMethodOp(function(handle, where, cls) {
          return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
            var prop2 = where == "text" ? "textClass" : where == "background" ? "bgClass" : where == "gutter" ? "gutterClass" : "wrapClass";
            var cur = line[prop2];
            if (!cur) {
              return false;
            } else if (cls == null) {
              line[prop2] = null;
            } else {
              var found = cur.match(classTest(cls));
              if (!found) {
                return false;
              }
              var end = found.index + found[0].length;
              line[prop2] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
            }
            return true;
          });
        }),
        addLineWidget: docMethodOp(function(handle, node, options) {
          return addLineWidget(this, handle, node, options);
        }),
        removeLineWidget: function(widget) {
          widget.clear();
        },
        markText: function(from2, to, options) {
          return markText(this, clipPos(this, from2), clipPos(this, to), options, options && options.type || "range");
        },
        setBookmark: function(pos, options) {
          var realOpts = {
            replacedWith: options && (options.nodeType == null ? options.widget : options),
            insertLeft: options && options.insertLeft,
            clearWhenEmpty: false,
            shared: options && options.shared,
            handleMouseEvents: options && options.handleMouseEvents
          };
          pos = clipPos(this, pos);
          return markText(this, pos, pos, realOpts, "bookmark");
        },
        findMarksAt: function(pos) {
          pos = clipPos(this, pos);
          var markers = [], spans = getLine(this, pos.line).markedSpans;
          if (spans) {
            for (var i2 = 0; i2 < spans.length; ++i2) {
              var span = spans[i2];
              if ((span.from == null || span.from <= pos.ch) && (span.to == null || span.to >= pos.ch)) {
                markers.push(span.marker.parent || span.marker);
              }
            }
          }
          return markers;
        },
        findMarks: function(from2, to, filter) {
          from2 = clipPos(this, from2);
          to = clipPos(this, to);
          var found = [], lineNo2 = from2.line;
          this.iter(from2.line, to.line + 1, function(line) {
            var spans = line.markedSpans;
            if (spans) {
              for (var i2 = 0; i2 < spans.length; i2++) {
                var span = spans[i2];
                if (!(span.to != null && lineNo2 == from2.line && from2.ch >= span.to || span.from == null && lineNo2 != from2.line || span.from != null && lineNo2 == to.line && span.from >= to.ch) && (!filter || filter(span.marker))) {
                  found.push(span.marker.parent || span.marker);
                }
              }
            }
            ++lineNo2;
          });
          return found;
        },
        getAllMarks: function() {
          var markers = [];
          this.iter(function(line) {
            var sps = line.markedSpans;
            if (sps) {
              for (var i2 = 0; i2 < sps.length; ++i2) {
                if (sps[i2].from != null) {
                  markers.push(sps[i2].marker);
                }
              }
            }
          });
          return markers;
        },
        posFromIndex: function(off2) {
          var ch, lineNo2 = this.first, sepSize = this.lineSeparator().length;
          this.iter(function(line) {
            var sz = line.text.length + sepSize;
            if (sz > off2) {
              ch = off2;
              return true;
            }
            off2 -= sz;
            ++lineNo2;
          });
          return clipPos(this, Pos(lineNo2, ch));
        },
        indexFromPos: function(coords) {
          coords = clipPos(this, coords);
          var index = coords.ch;
          if (coords.line < this.first || coords.ch < 0) {
            return 0;
          }
          var sepSize = this.lineSeparator().length;
          this.iter(this.first, coords.line, function(line) {
            index += line.text.length + sepSize;
          });
          return index;
        },
        copy: function(copyHistory) {
          var doc3 = new Doc2(
            getLines(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction
          );
          doc3.scrollTop = this.scrollTop;
          doc3.scrollLeft = this.scrollLeft;
          doc3.sel = this.sel;
          doc3.extend = false;
          if (copyHistory) {
            doc3.history.undoDepth = this.history.undoDepth;
            doc3.setHistory(this.getHistory());
          }
          return doc3;
        },
        linkedDoc: function(options) {
          if (!options) {
            options = {};
          }
          var from2 = this.first, to = this.first + this.size;
          if (options.from != null && options.from > from2) {
            from2 = options.from;
          }
          if (options.to != null && options.to < to) {
            to = options.to;
          }
          var copy2 = new Doc2(getLines(this, from2, to), options.mode || this.modeOption, from2, this.lineSep, this.direction);
          if (options.sharedHist) {
            copy2.history = this.history;
          }
          (this.linked || (this.linked = [])).push({ doc: copy2, sharedHist: options.sharedHist });
          copy2.linked = [{ doc: this, isParent: true, sharedHist: options.sharedHist }];
          copySharedMarkers(copy2, findSharedMarkers(this));
          return copy2;
        },
        unlinkDoc: function(other) {
          if (other instanceof CodeMirror2) {
            other = other.doc;
          }
          if (this.linked) {
            for (var i2 = 0; i2 < this.linked.length; ++i2) {
              var link = this.linked[i2];
              if (link.doc != other) {
                continue;
              }
              this.linked.splice(i2, 1);
              other.unlinkDoc(this);
              detachSharedMarkers(findSharedMarkers(this));
              break;
            }
          }
          if (other.history == this.history) {
            var splitIds = [other.id];
            linkedDocs(other, function(doc3) {
              return splitIds.push(doc3.id);
            }, true);
            other.history = new History(null);
            other.history.done = copyHistoryArray(this.history.done, splitIds);
            other.history.undone = copyHistoryArray(this.history.undone, splitIds);
          }
        },
        iterLinkedDocs: function(f) {
          linkedDocs(this, f);
        },
        getMode: function() {
          return this.mode;
        },
        getEditor: function() {
          return this.cm;
        },
        splitLines: function(str) {
          if (this.lineSep) {
            return str.split(this.lineSep);
          }
          return splitLinesAuto(str);
        },
        lineSeparator: function() {
          return this.lineSep || "\n";
        },
        setDirection: docMethodOp(function(dir) {
          if (dir != "rtl") {
            dir = "ltr";
          }
          if (dir == this.direction) {
            return;
          }
          this.direction = dir;
          this.iter(function(line) {
            return line.order = null;
          });
          if (this.cm) {
            directionChanged(this.cm);
          }
        })
      });
      Doc2.prototype.eachLine = Doc2.prototype.iter;
      var lastDrop = 0;
      function onDrop(e) {
        var cm = this;
        clearDragCursor(cm);
        if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) {
          return;
        }
        e_preventDefault(e);
        if (ie) {
          lastDrop = +new Date();
        }
        var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
        if (!pos || cm.isReadOnly()) {
          return;
        }
        if (files && files.length && window.FileReader && window.File) {
          var n = files.length, text2 = Array(n), read = 0;
          var markAsReadAndPasteIfAllFilesAreRead = function() {
            if (++read == n) {
              operation(cm, function() {
                pos = clipPos(cm.doc, pos);
                var change = {
                  from: pos,
                  to: pos,
                  text: cm.doc.splitLines(
                    text2.filter(function(t) {
                      return t != null;
                    }).join(cm.doc.lineSeparator())
                  ),
                  origin: "paste"
                };
                makeChange(cm.doc, change);
                setSelectionReplaceHistory(cm.doc, simpleSelection(clipPos(cm.doc, pos), clipPos(cm.doc, changeEnd(change))));
              })();
            }
          };
          var readTextFromFile = function(file, i3) {
            if (cm.options.allowDropFileTypes && indexOf(cm.options.allowDropFileTypes, file.type) == -1) {
              markAsReadAndPasteIfAllFilesAreRead();
              return;
            }
            var reader = new FileReader();
            reader.onerror = function() {
              return markAsReadAndPasteIfAllFilesAreRead();
            };
            reader.onload = function() {
              var content = reader.result;
              if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) {
                markAsReadAndPasteIfAllFilesAreRead();
                return;
              }
              text2[i3] = content;
              markAsReadAndPasteIfAllFilesAreRead();
            };
            reader.readAsText(file);
          };
          for (var i2 = 0; i2 < files.length; i2++) {
            readTextFromFile(files[i2], i2);
          }
        } else {
          if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
            cm.state.draggingText(e);
            setTimeout(function() {
              return cm.display.input.focus();
            }, 20);
            return;
          }
          try {
            var text$1 = e.dataTransfer.getData("Text");
            if (text$1) {
              var selected;
              if (cm.state.draggingText && !cm.state.draggingText.copy) {
                selected = cm.listSelections();
              }
              setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
              if (selected) {
                for (var i$12 = 0; i$12 < selected.length; ++i$12) {
                  replaceRange(cm.doc, "", selected[i$12].anchor, selected[i$12].head, "drag");
                }
              }
              cm.replaceSelection(text$1, "around", "paste");
              cm.display.input.focus();
            }
          } catch (e$1) {
          }
        }
      }
      function onDragStart(cm, e) {
        if (ie && (!cm.state.draggingText || +new Date() - lastDrop < 100)) {
          e_stop(e);
          return;
        }
        if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) {
          return;
        }
        e.dataTransfer.setData("Text", cm.getSelection());
        e.dataTransfer.effectAllowed = "copyMove";
        if (e.dataTransfer.setDragImage && !safari) {
          var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
          img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
          if (presto) {
            img.width = img.height = 1;
            cm.display.wrapper.appendChild(img);
            img._top = img.offsetTop;
          }
          e.dataTransfer.setDragImage(img, 0, 0);
          if (presto) {
            img.parentNode.removeChild(img);
          }
        }
      }
      function onDragOver(cm, e) {
        var pos = posFromMouse(cm, e);
        if (!pos) {
          return;
        }
        var frag = document.createDocumentFragment();
        drawSelectionCursor(cm, pos, frag);
        if (!cm.display.dragCursor) {
          cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
          cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
        }
        removeChildrenAndAdd(cm.display.dragCursor, frag);
      }
      function clearDragCursor(cm) {
        if (cm.display.dragCursor) {
          cm.display.lineSpace.removeChild(cm.display.dragCursor);
          cm.display.dragCursor = null;
        }
      }
      function forEachCodeMirror(f) {
        if (!document.getElementsByClassName) {
          return;
        }
        var byClass = document.getElementsByClassName("CodeMirror"), editors = [];
        for (var i2 = 0; i2 < byClass.length; i2++) {
          var cm = byClass[i2].CodeMirror;
          if (cm) {
            editors.push(cm);
          }
        }
        if (editors.length) {
          editors[0].operation(function() {
            for (var i3 = 0; i3 < editors.length; i3++) {
              f(editors[i3]);
            }
          });
        }
      }
      var globalsRegistered = false;
      function ensureGlobalHandlers() {
        if (globalsRegistered) {
          return;
        }
        registerGlobalHandlers();
        globalsRegistered = true;
      }
      function registerGlobalHandlers() {
        var resizeTimer;
        on(window, "resize", function() {
          if (resizeTimer == null) {
            resizeTimer = setTimeout(function() {
              resizeTimer = null;
              forEachCodeMirror(onResize);
            }, 100);
          }
        });
        on(window, "blur", function() {
          return forEachCodeMirror(onBlur);
        });
      }
      function onResize(cm) {
        var d = cm.display;
        d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
        d.scrollbarsClipped = false;
        cm.setSize();
      }
      var keyNames = {
        3: "Pause",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        145: "ScrollLock",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        224: "Mod",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
      };
      for (var i = 0; i < 10; i++) {
        keyNames[i + 48] = keyNames[i + 96] = String(i);
      }
      for (var i$1 = 65; i$1 <= 90; i$1++) {
        keyNames[i$1] = String.fromCharCode(i$1);
      }
      for (var i$2 = 1; i$2 <= 12; i$2++) {
        keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2;
      }
      var keyMap = {};
      keyMap.basic = {
        "Left": "goCharLeft",
        "Right": "goCharRight",
        "Up": "goLineUp",
        "Down": "goLineDown",
        "End": "goLineEnd",
        "Home": "goLineStartSmart",
        "PageUp": "goPageUp",
        "PageDown": "goPageDown",
        "Delete": "delCharAfter",
        "Backspace": "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        "Tab": "defaultTab",
        "Shift-Tab": "indentAuto",
        "Enter": "newlineAndIndent",
        "Insert": "toggleOverwrite",
        "Esc": "singleSelection"
      };
      keyMap.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        "fallthrough": "basic"
      };
      keyMap.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars",
        "Ctrl-O": "openLine"
      };
      keyMap.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        "fallthrough": ["basic", "emacsy"]
      };
      keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;
      function normalizeKeyName(name) {
        var parts = name.split(/-(?!$)/);
        name = parts[parts.length - 1];
        var alt, ctrl, shift, cmd;
        for (var i2 = 0; i2 < parts.length - 1; i2++) {
          var mod = parts[i2];
          if (/^(cmd|meta|m)$/i.test(mod)) {
            cmd = true;
          } else if (/^a(lt)?$/i.test(mod)) {
            alt = true;
          } else if (/^(c|ctrl|control)$/i.test(mod)) {
            ctrl = true;
          } else if (/^s(hift)?$/i.test(mod)) {
            shift = true;
          } else {
            throw new Error("Unrecognized modifier name: " + mod);
          }
        }
        if (alt) {
          name = "Alt-" + name;
        }
        if (ctrl) {
          name = "Ctrl-" + name;
        }
        if (cmd) {
          name = "Cmd-" + name;
        }
        if (shift) {
          name = "Shift-" + name;
        }
        return name;
      }
      function normalizeKeyMap(keymap) {
        var copy2 = {};
        for (var keyname in keymap) {
          if (keymap.hasOwnProperty(keyname)) {
            var value = keymap[keyname];
            if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) {
              continue;
            }
            if (value == "...") {
              delete keymap[keyname];
              continue;
            }
            var keys2 = map2(keyname.split(" "), normalizeKeyName);
            for (var i2 = 0; i2 < keys2.length; i2++) {
              var val = void 0, name = void 0;
              if (i2 == keys2.length - 1) {
                name = keys2.join(" ");
                val = value;
              } else {
                name = keys2.slice(0, i2 + 1).join(" ");
                val = "...";
              }
              var prev = copy2[name];
              if (!prev) {
                copy2[name] = val;
              } else if (prev != val) {
                throw new Error("Inconsistent bindings for " + name);
              }
            }
            delete keymap[keyname];
          }
        }
        for (var prop2 in copy2) {
          keymap[prop2] = copy2[prop2];
        }
        return keymap;
      }
      function lookupKey(key, map3, handle, context) {
        map3 = getKeyMap(map3);
        var found = map3.call ? map3.call(key, context) : map3[key];
        if (found === false) {
          return "nothing";
        }
        if (found === "...") {
          return "multi";
        }
        if (found != null && handle(found)) {
          return "handled";
        }
        if (map3.fallthrough) {
          if (Object.prototype.toString.call(map3.fallthrough) != "[object Array]") {
            return lookupKey(key, map3.fallthrough, handle, context);
          }
          for (var i2 = 0; i2 < map3.fallthrough.length; i2++) {
            var result = lookupKey(key, map3.fallthrough[i2], handle, context);
            if (result) {
              return result;
            }
          }
        }
      }
      function isModifierKey(value) {
        var name = typeof value == "string" ? value : keyNames[value.keyCode];
        return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
      }
      function addModifierNames(name, event, noShift) {
        var base = name;
        if (event.altKey && base != "Alt") {
          name = "Alt-" + name;
        }
        if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") {
          name = "Ctrl-" + name;
        }
        if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Mod") {
          name = "Cmd-" + name;
        }
        if (!noShift && event.shiftKey && base != "Shift") {
          name = "Shift-" + name;
        }
        return name;
      }
      function keyName(event, noShift) {
        if (presto && event.keyCode == 34 && event["char"]) {
          return false;
        }
        var name = keyNames[event.keyCode];
        if (name == null || event.altGraphKey) {
          return false;
        }
        if (event.keyCode == 3 && event.code) {
          name = event.code;
        }
        return addModifierNames(name, event, noShift);
      }
      function getKeyMap(val) {
        return typeof val == "string" ? keyMap[val] : val;
      }
      function deleteNearSelection(cm, compute) {
        var ranges = cm.doc.sel.ranges, kill = [];
        for (var i2 = 0; i2 < ranges.length; i2++) {
          var toKill = compute(ranges[i2]);
          while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
            var replaced = kill.pop();
            if (cmp(replaced.from, toKill.from) < 0) {
              toKill.from = replaced.from;
              break;
            }
          }
          kill.push(toKill);
        }
        runInOp(cm, function() {
          for (var i3 = kill.length - 1; i3 >= 0; i3--) {
            replaceRange(cm.doc, "", kill[i3].from, kill[i3].to, "+delete");
          }
          ensureCursorVisible(cm);
        });
      }
      function moveCharLogically(line, ch, dir) {
        var target = skipExtendingChars(line.text, ch + dir, dir);
        return target < 0 || target > line.text.length ? null : target;
      }
      function moveLogically(line, start, dir) {
        var ch = moveCharLogically(line, start.ch, dir);
        return ch == null ? null : new Pos(start.line, ch, dir < 0 ? "after" : "before");
      }
      function endOfLine(visually, cm, lineObj, lineNo2, dir) {
        if (visually) {
          if (cm.doc.direction == "rtl") {
            dir = -dir;
          }
          var order = getOrder(lineObj, cm.doc.direction);
          if (order) {
            var part = dir < 0 ? lst(order) : order[0];
            var moveInStorageOrder = dir < 0 == (part.level == 1);
            var sticky = moveInStorageOrder ? "after" : "before";
            var ch;
            if (part.level > 0 || cm.doc.direction == "rtl") {
              var prep = prepareMeasureForLine(cm, lineObj);
              ch = dir < 0 ? lineObj.text.length - 1 : 0;
              var targetTop = measureCharPrepared(cm, prep, ch).top;
              ch = findFirst(function(ch2) {
                return measureCharPrepared(cm, prep, ch2).top == targetTop;
              }, dir < 0 == (part.level == 1) ? part.from : part.to - 1, ch);
              if (sticky == "before") {
                ch = moveCharLogically(lineObj, ch, 1);
              }
            } else {
              ch = dir < 0 ? part.to : part.from;
            }
            return new Pos(lineNo2, ch, sticky);
          }
        }
        return new Pos(lineNo2, dir < 0 ? lineObj.text.length : 0, dir < 0 ? "before" : "after");
      }
      function moveVisually(cm, line, start, dir) {
        var bidi = getOrder(line, cm.doc.direction);
        if (!bidi) {
          return moveLogically(line, start, dir);
        }
        if (start.ch >= line.text.length) {
          start.ch = line.text.length;
          start.sticky = "before";
        } else if (start.ch <= 0) {
          start.ch = 0;
          start.sticky = "after";
        }
        var partPos = getBidiPartAt(bidi, start.ch, start.sticky), part = bidi[partPos];
        if (cm.doc.direction == "ltr" && part.level % 2 == 0 && (dir > 0 ? part.to > start.ch : part.from < start.ch)) {
          return moveLogically(line, start, dir);
        }
        var mv = function(pos, dir2) {
          return moveCharLogically(line, pos instanceof Pos ? pos.ch : pos, dir2);
        };
        var prep;
        var getWrappedLineExtent = function(ch2) {
          if (!cm.options.lineWrapping) {
            return { begin: 0, end: line.text.length };
          }
          prep = prep || prepareMeasureForLine(cm, line);
          return wrappedLineExtentChar(cm, line, prep, ch2);
        };
        var wrappedLineExtent2 = getWrappedLineExtent(start.sticky == "before" ? mv(start, -1) : start.ch);
        if (cm.doc.direction == "rtl" || part.level == 1) {
          var moveInStorageOrder = part.level == 1 == dir < 0;
          var ch = mv(start, moveInStorageOrder ? 1 : -1);
          if (ch != null && (!moveInStorageOrder ? ch >= part.from && ch >= wrappedLineExtent2.begin : ch <= part.to && ch <= wrappedLineExtent2.end)) {
            var sticky = moveInStorageOrder ? "before" : "after";
            return new Pos(start.line, ch, sticky);
          }
        }
        var searchInVisualLine = function(partPos2, dir2, wrappedLineExtent3) {
          var getRes = function(ch3, moveInStorageOrder3) {
            return moveInStorageOrder3 ? new Pos(start.line, mv(ch3, 1), "before") : new Pos(start.line, ch3, "after");
          };
          for (; partPos2 >= 0 && partPos2 < bidi.length; partPos2 += dir2) {
            var part2 = bidi[partPos2];
            var moveInStorageOrder2 = dir2 > 0 == (part2.level != 1);
            var ch2 = moveInStorageOrder2 ? wrappedLineExtent3.begin : mv(wrappedLineExtent3.end, -1);
            if (part2.from <= ch2 && ch2 < part2.to) {
              return getRes(ch2, moveInStorageOrder2);
            }
            ch2 = moveInStorageOrder2 ? part2.from : mv(part2.to, -1);
            if (wrappedLineExtent3.begin <= ch2 && ch2 < wrappedLineExtent3.end) {
              return getRes(ch2, moveInStorageOrder2);
            }
          }
        };
        var res = searchInVisualLine(partPos + dir, dir, wrappedLineExtent2);
        if (res) {
          return res;
        }
        var nextCh = dir > 0 ? wrappedLineExtent2.end : mv(wrappedLineExtent2.begin, -1);
        if (nextCh != null && !(dir > 0 && nextCh == line.text.length)) {
          res = searchInVisualLine(dir > 0 ? 0 : bidi.length - 1, dir, getWrappedLineExtent(nextCh));
          if (res) {
            return res;
          }
        }
        return null;
      }
      var commands = {
        selectAll,
        singleSelection: function(cm) {
          return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll);
        },
        killLine: function(cm) {
          return deleteNearSelection(cm, function(range2) {
            if (range2.empty()) {
              var len = getLine(cm.doc, range2.head.line).text.length;
              if (range2.head.ch == len && range2.head.line < cm.lastLine()) {
                return { from: range2.head, to: Pos(range2.head.line + 1, 0) };
              } else {
                return { from: range2.head, to: Pos(range2.head.line, len) };
              }
            } else {
              return { from: range2.from(), to: range2.to() };
            }
          });
        },
        deleteLine: function(cm) {
          return deleteNearSelection(cm, function(range2) {
            return {
              from: Pos(range2.from().line, 0),
              to: clipPos(cm.doc, Pos(range2.to().line + 1, 0))
            };
          });
        },
        delLineLeft: function(cm) {
          return deleteNearSelection(cm, function(range2) {
            return {
              from: Pos(range2.from().line, 0),
              to: range2.from()
            };
          });
        },
        delWrappedLineLeft: function(cm) {
          return deleteNearSelection(cm, function(range2) {
            var top = cm.charCoords(range2.head, "div").top + 5;
            var leftPos = cm.coordsChar({ left: 0, top }, "div");
            return { from: leftPos, to: range2.from() };
          });
        },
        delWrappedLineRight: function(cm) {
          return deleteNearSelection(cm, function(range2) {
            var top = cm.charCoords(range2.head, "div").top + 5;
            var rightPos = cm.coordsChar({ left: cm.display.lineDiv.offsetWidth + 100, top }, "div");
            return { from: range2.from(), to: rightPos };
          });
        },
        undo: function(cm) {
          return cm.undo();
        },
        redo: function(cm) {
          return cm.redo();
        },
        undoSelection: function(cm) {
          return cm.undoSelection();
        },
        redoSelection: function(cm) {
          return cm.redoSelection();
        },
        goDocStart: function(cm) {
          return cm.extendSelection(Pos(cm.firstLine(), 0));
        },
        goDocEnd: function(cm) {
          return cm.extendSelection(Pos(cm.lastLine()));
        },
        goLineStart: function(cm) {
          return cm.extendSelectionsBy(
            function(range2) {
              return lineStart(cm, range2.head.line);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineStartSmart: function(cm) {
          return cm.extendSelectionsBy(
            function(range2) {
              return lineStartSmart(cm, range2.head);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineEnd: function(cm) {
          return cm.extendSelectionsBy(
            function(range2) {
              return lineEnd(cm, range2.head.line);
            },
            { origin: "+move", bias: -1 }
          );
        },
        goLineRight: function(cm) {
          return cm.extendSelectionsBy(function(range2) {
            var top = cm.cursorCoords(range2.head, "div").top + 5;
            return cm.coordsChar({ left: cm.display.lineDiv.offsetWidth + 100, top }, "div");
          }, sel_move);
        },
        goLineLeft: function(cm) {
          return cm.extendSelectionsBy(function(range2) {
            var top = cm.cursorCoords(range2.head, "div").top + 5;
            return cm.coordsChar({ left: 0, top }, "div");
          }, sel_move);
        },
        goLineLeftSmart: function(cm) {
          return cm.extendSelectionsBy(function(range2) {
            var top = cm.cursorCoords(range2.head, "div").top + 5;
            var pos = cm.coordsChar({ left: 0, top }, "div");
            if (pos.ch < cm.getLine(pos.line).search(/\S/)) {
              return lineStartSmart(cm, range2.head);
            }
            return pos;
          }, sel_move);
        },
        goLineUp: function(cm) {
          return cm.moveV(-1, "line");
        },
        goLineDown: function(cm) {
          return cm.moveV(1, "line");
        },
        goPageUp: function(cm) {
          return cm.moveV(-1, "page");
        },
        goPageDown: function(cm) {
          return cm.moveV(1, "page");
        },
        goCharLeft: function(cm) {
          return cm.moveH(-1, "char");
        },
        goCharRight: function(cm) {
          return cm.moveH(1, "char");
        },
        goColumnLeft: function(cm) {
          return cm.moveH(-1, "column");
        },
        goColumnRight: function(cm) {
          return cm.moveH(1, "column");
        },
        goWordLeft: function(cm) {
          return cm.moveH(-1, "word");
        },
        goGroupRight: function(cm) {
          return cm.moveH(1, "group");
        },
        goGroupLeft: function(cm) {
          return cm.moveH(-1, "group");
        },
        goWordRight: function(cm) {
          return cm.moveH(1, "word");
        },
        delCharBefore: function(cm) {
          return cm.deleteH(-1, "codepoint");
        },
        delCharAfter: function(cm) {
          return cm.deleteH(1, "char");
        },
        delWordBefore: function(cm) {
          return cm.deleteH(-1, "word");
        },
        delWordAfter: function(cm) {
          return cm.deleteH(1, "word");
        },
        delGroupBefore: function(cm) {
          return cm.deleteH(-1, "group");
        },
        delGroupAfter: function(cm) {
          return cm.deleteH(1, "group");
        },
        indentAuto: function(cm) {
          return cm.indentSelection("smart");
        },
        indentMore: function(cm) {
          return cm.indentSelection("add");
        },
        indentLess: function(cm) {
          return cm.indentSelection("subtract");
        },
        insertTab: function(cm) {
          return cm.replaceSelection("	");
        },
        insertSoftTab: function(cm) {
          var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
          for (var i2 = 0; i2 < ranges.length; i2++) {
            var pos = ranges[i2].from();
            var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
            spaces.push(spaceStr(tabSize - col % tabSize));
          }
          cm.replaceSelections(spaces);
        },
        defaultTab: function(cm) {
          if (cm.somethingSelected()) {
            cm.indentSelection("add");
          } else {
            cm.execCommand("insertTab");
          }
        },
        // Swap the two chars left and right of each selection's head.
        // Move cursor behind the two swapped characters afterwards.
        //
        // Doesn't consider line feeds a character.
        // Doesn't scan more than one line above to find a character.
        // Doesn't do anything on an empty line.
        // Doesn't do anything with non-empty selections.
        transposeChars: function(cm) {
          return runInOp(cm, function() {
            var ranges = cm.listSelections(), newSel = [];
            for (var i2 = 0; i2 < ranges.length; i2++) {
              if (!ranges[i2].empty()) {
                continue;
              }
              var cur = ranges[i2].head, line = getLine(cm.doc, cur.line).text;
              if (line) {
                if (cur.ch == line.length) {
                  cur = new Pos(cur.line, cur.ch - 1);
                }
                if (cur.ch > 0) {
                  cur = new Pos(cur.line, cur.ch + 1);
                  cm.replaceRange(
                    line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
                    Pos(cur.line, cur.ch - 2),
                    cur,
                    "+transpose"
                  );
                } else if (cur.line > cm.doc.first) {
                  var prev = getLine(cm.doc, cur.line - 1).text;
                  if (prev) {
                    cur = new Pos(cur.line, 1);
                    cm.replaceRange(
                      line.charAt(0) + cm.doc.lineSeparator() + prev.charAt(prev.length - 1),
                      Pos(cur.line - 1, prev.length - 1),
                      cur,
                      "+transpose"
                    );
                  }
                }
              }
              newSel.push(new Range(cur, cur));
            }
            cm.setSelections(newSel);
          });
        },
        newlineAndIndent: function(cm) {
          return runInOp(cm, function() {
            var sels = cm.listSelections();
            for (var i2 = sels.length - 1; i2 >= 0; i2--) {
              cm.replaceRange(cm.doc.lineSeparator(), sels[i2].anchor, sels[i2].head, "+input");
            }
            sels = cm.listSelections();
            for (var i$12 = 0; i$12 < sels.length; i$12++) {
              cm.indentLine(sels[i$12].from().line, null, true);
            }
            ensureCursorVisible(cm);
          });
        },
        openLine: function(cm) {
          return cm.replaceSelection("\n", "start");
        },
        toggleOverwrite: function(cm) {
          return cm.toggleOverwrite();
        }
      };
      function lineStart(cm, lineN) {
        var line = getLine(cm.doc, lineN);
        var visual = visualLine(line);
        if (visual != line) {
          lineN = lineNo(visual);
        }
        return endOfLine(true, cm, visual, lineN, 1);
      }
      function lineEnd(cm, lineN) {
        var line = getLine(cm.doc, lineN);
        var visual = visualLineEnd(line);
        if (visual != line) {
          lineN = lineNo(visual);
        }
        return endOfLine(true, cm, line, lineN, -1);
      }
      function lineStartSmart(cm, pos) {
        var start = lineStart(cm, pos.line);
        var line = getLine(cm.doc, start.line);
        var order = getOrder(line, cm.doc.direction);
        if (!order || order[0].level == 0) {
          var firstNonWS = Math.max(start.ch, line.text.search(/\S/));
          var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
          return Pos(start.line, inWS ? 0 : firstNonWS, start.sticky);
        }
        return start;
      }
      function doHandleBinding(cm, bound, dropShift) {
        if (typeof bound == "string") {
          bound = commands[bound];
          if (!bound) {
            return false;
          }
        }
        cm.display.input.ensurePolled();
        var prevShift = cm.display.shift, done = false;
        try {
          if (cm.isReadOnly()) {
            cm.state.suppressEdits = true;
          }
          if (dropShift) {
            cm.display.shift = false;
          }
          done = bound(cm) != Pass;
        } finally {
          cm.display.shift = prevShift;
          cm.state.suppressEdits = false;
        }
        return done;
      }
      function lookupKeyForEditor(cm, name, handle) {
        for (var i2 = 0; i2 < cm.state.keyMaps.length; i2++) {
          var result = lookupKey(name, cm.state.keyMaps[i2], handle, cm);
          if (result) {
            return result;
          }
        }
        return cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm) || lookupKey(name, cm.options.keyMap, handle, cm);
      }
      var stopSeq = new Delayed();
      function dispatchKey(cm, name, e, handle) {
        var seq = cm.state.keySeq;
        if (seq) {
          if (isModifierKey(name)) {
            return "handled";
          }
          if (/\'$/.test(name)) {
            cm.state.keySeq = null;
          } else {
            stopSeq.set(50, function() {
              if (cm.state.keySeq == seq) {
                cm.state.keySeq = null;
                cm.display.input.reset();
              }
            });
          }
          if (dispatchKeyInner(cm, seq + " " + name, e, handle)) {
            return true;
          }
        }
        return dispatchKeyInner(cm, name, e, handle);
      }
      function dispatchKeyInner(cm, name, e, handle) {
        var result = lookupKeyForEditor(cm, name, handle);
        if (result == "multi") {
          cm.state.keySeq = name;
        }
        if (result == "handled") {
          signalLater(cm, "keyHandled", cm, name, e);
        }
        if (result == "handled" || result == "multi") {
          e_preventDefault(e);
          restartBlink(cm);
        }
        return !!result;
      }
      function handleKeyBinding(cm, e) {
        var name = keyName(e, true);
        if (!name) {
          return false;
        }
        if (e.shiftKey && !cm.state.keySeq) {
          return dispatchKey(cm, "Shift-" + name, e, function(b) {
            return doHandleBinding(cm, b, true);
          }) || dispatchKey(cm, name, e, function(b) {
            if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion) {
              return doHandleBinding(cm, b);
            }
          });
        } else {
          return dispatchKey(cm, name, e, function(b) {
            return doHandleBinding(cm, b);
          });
        }
      }
      function handleCharBinding(cm, e, ch) {
        return dispatchKey(cm, "'" + ch + "'", e, function(b) {
          return doHandleBinding(cm, b, true);
        });
      }
      var lastStoppedKey = null;
      function onKeyDown(e) {
        var cm = this;
        if (e.target && e.target != cm.display.input.getField()) {
          return;
        }
        cm.curOp.focus = activeElt(doc2(cm));
        if (signalDOMEvent(cm, e)) {
          return;
        }
        if (ie && ie_version < 11 && e.keyCode == 27) {
          e.returnValue = false;
        }
        var code2 = e.keyCode;
        cm.display.shift = code2 == 16 || e.shiftKey;
        var handled = handleKeyBinding(cm, e);
        if (presto) {
          lastStoppedKey = handled ? code2 : null;
          if (!handled && code2 == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey)) {
            cm.replaceSelection("", null, "cut");
          }
        }
        if (gecko && !mac && !handled && code2 == 46 && e.shiftKey && !e.ctrlKey && document.execCommand) {
          document.execCommand("cut");
        }
        if (code2 == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className)) {
          showCrossHair(cm);
        }
      }
      function showCrossHair(cm) {
        var lineDiv = cm.display.lineDiv;
        addClass(lineDiv, "CodeMirror-crosshair");
        function up(e) {
          if (e.keyCode == 18 || !e.altKey) {
            rmClass(lineDiv, "CodeMirror-crosshair");
            off(document, "keyup", up);
            off(document, "mouseover", up);
          }
        }
        on(document, "keyup", up);
        on(document, "mouseover", up);
      }
      function onKeyUp(e) {
        if (e.keyCode == 16) {
          this.doc.sel.shift = false;
        }
        signalDOMEvent(this, e);
      }
      function onKeyPress(e) {
        var cm = this;
        if (e.target && e.target != cm.display.input.getField()) {
          return;
        }
        if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) {
          return;
        }
        var keyCode = e.keyCode, charCode = e.charCode;
        if (presto && keyCode == lastStoppedKey) {
          lastStoppedKey = null;
          e_preventDefault(e);
          return;
        }
        if (presto && (!e.which || e.which < 10) && handleKeyBinding(cm, e)) {
          return;
        }
        var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
        if (ch == "\b") {
          return;
        }
        if (handleCharBinding(cm, e, ch)) {
          return;
        }
        cm.display.input.onKeyPress(e);
      }
      var DOUBLECLICK_DELAY = 400;
      var PastClick = function(time, pos, button) {
        this.time = time;
        this.pos = pos;
        this.button = button;
      };
      PastClick.prototype.compare = function(time, pos, button) {
        return this.time + DOUBLECLICK_DELAY > time && cmp(pos, this.pos) == 0 && button == this.button;
      };
      var lastClick, lastDoubleClick;
      function clickRepeat(pos, button) {
        var now = +new Date();
        if (lastDoubleClick && lastDoubleClick.compare(now, pos, button)) {
          lastClick = lastDoubleClick = null;
          return "triple";
        } else if (lastClick && lastClick.compare(now, pos, button)) {
          lastDoubleClick = new PastClick(now, pos, button);
          lastClick = null;
          return "double";
        } else {
          lastClick = new PastClick(now, pos, button);
          lastDoubleClick = null;
          return "single";
        }
      }
      function onMouseDown(e) {
        var cm = this, display = cm.display;
        if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) {
          return;
        }
        display.input.ensurePolled();
        display.shift = e.shiftKey;
        if (eventInWidget(display, e)) {
          if (!webkit) {
            display.scroller.draggable = false;
            setTimeout(function() {
              return display.scroller.draggable = true;
            }, 100);
          }
          return;
        }
        if (clickInGutter(cm, e)) {
          return;
        }
        var pos = posFromMouse(cm, e), button = e_button(e), repeat = pos ? clickRepeat(pos, button) : "single";
        win(cm).focus();
        if (button == 1 && cm.state.selectingText) {
          cm.state.selectingText(e);
        }
        if (pos && handleMappedButton(cm, button, pos, repeat, e)) {
          return;
        }
        if (button == 1) {
          if (pos) {
            leftButtonDown(cm, pos, repeat, e);
          } else if (e_target(e) == display.scroller) {
            e_preventDefault(e);
          }
        } else if (button == 2) {
          if (pos) {
            extendSelection(cm.doc, pos);
          }
          setTimeout(function() {
            return display.input.focus();
          }, 20);
        } else if (button == 3) {
          if (captureRightClick) {
            cm.display.input.onContextMenu(e);
          } else {
            delayBlurEvent(cm);
          }
        }
      }
      function handleMappedButton(cm, button, pos, repeat, event) {
        var name = "Click";
        if (repeat == "double") {
          name = "Double" + name;
        } else if (repeat == "triple") {
          name = "Triple" + name;
        }
        name = (button == 1 ? "Left" : button == 2 ? "Middle" : "Right") + name;
        return dispatchKey(cm, addModifierNames(name, event), event, function(bound) {
          if (typeof bound == "string") {
            bound = commands[bound];
          }
          if (!bound) {
            return false;
          }
          var done = false;
          try {
            if (cm.isReadOnly()) {
              cm.state.suppressEdits = true;
            }
            done = bound(cm, pos) != Pass;
          } finally {
            cm.state.suppressEdits = false;
          }
          return done;
        });
      }
      function configureMouse(cm, repeat, event) {
        var option = cm.getOption("configureMouse");
        var value = option ? option(cm, repeat, event) : {};
        if (value.unit == null) {
          var rect = chromeOS ? event.shiftKey && event.metaKey : event.altKey;
          value.unit = rect ? "rectangle" : repeat == "single" ? "char" : repeat == "double" ? "word" : "line";
        }
        if (value.extend == null || cm.doc.extend) {
          value.extend = cm.doc.extend || event.shiftKey;
        }
        if (value.addNew == null) {
          value.addNew = mac ? event.metaKey : event.ctrlKey;
        }
        if (value.moveOnDrag == null) {
          value.moveOnDrag = !(mac ? event.altKey : event.ctrlKey);
        }
        return value;
      }
      function leftButtonDown(cm, pos, repeat, event) {
        if (ie) {
          setTimeout(bind2(ensureFocus, cm), 0);
        } else {
          cm.curOp.focus = activeElt(doc2(cm));
        }
        var behavior = configureMouse(cm, repeat, event);
        var sel = cm.doc.sel, contained;
        if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() && repeat == "single" && (contained = sel.contains(pos)) > -1 && (cmp((contained = sel.ranges[contained]).from(), pos) < 0 || pos.xRel > 0) && (cmp(contained.to(), pos) > 0 || pos.xRel < 0)) {
          leftButtonStartDrag(cm, event, pos, behavior);
        } else {
          leftButtonSelect(cm, event, pos, behavior);
        }
      }
      function leftButtonStartDrag(cm, event, pos, behavior) {
        var display = cm.display, moved = false;
        var dragEnd = operation(cm, function(e) {
          if (webkit) {
            display.scroller.draggable = false;
          }
          cm.state.draggingText = false;
          if (cm.state.delayingBlurEvent) {
            if (cm.hasFocus()) {
              cm.state.delayingBlurEvent = false;
            } else {
              delayBlurEvent(cm);
            }
          }
          off(display.wrapper.ownerDocument, "mouseup", dragEnd);
          off(display.wrapper.ownerDocument, "mousemove", mouseMove);
          off(display.scroller, "dragstart", dragStart);
          off(display.scroller, "drop", dragEnd);
          if (!moved) {
            e_preventDefault(e);
            if (!behavior.addNew) {
              extendSelection(cm.doc, pos, null, null, behavior.extend);
            }
            if (webkit && !safari || ie && ie_version == 9) {
              setTimeout(function() {
                display.wrapper.ownerDocument.body.focus({ preventScroll: true });
                display.input.focus();
              }, 20);
            } else {
              display.input.focus();
            }
          }
        });
        var mouseMove = function(e2) {
          moved = moved || Math.abs(event.clientX - e2.clientX) + Math.abs(event.clientY - e2.clientY) >= 10;
        };
        var dragStart = function() {
          return moved = true;
        };
        if (webkit) {
          display.scroller.draggable = true;
        }
        cm.state.draggingText = dragEnd;
        dragEnd.copy = !behavior.moveOnDrag;
        on(display.wrapper.ownerDocument, "mouseup", dragEnd);
        on(display.wrapper.ownerDocument, "mousemove", mouseMove);
        on(display.scroller, "dragstart", dragStart);
        on(display.scroller, "drop", dragEnd);
        cm.state.delayingBlurEvent = true;
        setTimeout(function() {
          return display.input.focus();
        }, 20);
        if (display.scroller.dragDrop) {
          display.scroller.dragDrop();
        }
      }
      function rangeForUnit(cm, pos, unit) {
        if (unit == "char") {
          return new Range(pos, pos);
        }
        if (unit == "word") {
          return cm.findWordAt(pos);
        }
        if (unit == "line") {
          return new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0)));
        }
        var result = unit(cm, pos);
        return new Range(result.from, result.to);
      }
      function leftButtonSelect(cm, event, start, behavior) {
        if (ie) {
          delayBlurEvent(cm);
        }
        var display = cm.display, doc$1 = cm.doc;
        e_preventDefault(event);
        var ourRange, ourIndex, startSel = doc$1.sel, ranges = startSel.ranges;
        if (behavior.addNew && !behavior.extend) {
          ourIndex = doc$1.sel.contains(start);
          if (ourIndex > -1) {
            ourRange = ranges[ourIndex];
          } else {
            ourRange = new Range(start, start);
          }
        } else {
          ourRange = doc$1.sel.primary();
          ourIndex = doc$1.sel.primIndex;
        }
        if (behavior.unit == "rectangle") {
          if (!behavior.addNew) {
            ourRange = new Range(start, start);
          }
          start = posFromMouse(cm, event, true, true);
          ourIndex = -1;
        } else {
          var range2 = rangeForUnit(cm, start, behavior.unit);
          if (behavior.extend) {
            ourRange = extendRange(ourRange, range2.anchor, range2.head, behavior.extend);
          } else {
            ourRange = range2;
          }
        }
        if (!behavior.addNew) {
          ourIndex = 0;
          setSelection(doc$1, new Selection([ourRange], 0), sel_mouse);
          startSel = doc$1.sel;
        } else if (ourIndex == -1) {
          ourIndex = ranges.length;
          setSelection(
            doc$1,
            normalizeSelection(cm, ranges.concat([ourRange]), ourIndex),
            { scroll: false, origin: "*mouse" }
          );
        } else if (ranges.length > 1 && ranges[ourIndex].empty() && behavior.unit == "char" && !behavior.extend) {
          setSelection(
            doc$1,
            normalizeSelection(cm, ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
            { scroll: false, origin: "*mouse" }
          );
          startSel = doc$1.sel;
        } else {
          replaceOneSelection(doc$1, ourIndex, ourRange, sel_mouse);
        }
        var lastPos = start;
        function extendTo(pos) {
          if (cmp(lastPos, pos) == 0) {
            return;
          }
          lastPos = pos;
          if (behavior.unit == "rectangle") {
            var ranges2 = [], tabSize = cm.options.tabSize;
            var startCol = countColumn(getLine(doc$1, start.line).text, start.ch, tabSize);
            var posCol = countColumn(getLine(doc$1, pos.line).text, pos.ch, tabSize);
            var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
            for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line)); line <= end; line++) {
              var text2 = getLine(doc$1, line).text, leftPos = findColumn(text2, left, tabSize);
              if (left == right) {
                ranges2.push(new Range(Pos(line, leftPos), Pos(line, leftPos)));
              } else if (text2.length > leftPos) {
                ranges2.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text2, right, tabSize))));
              }
            }
            if (!ranges2.length) {
              ranges2.push(new Range(start, start));
            }
            setSelection(
              doc$1,
              normalizeSelection(cm, startSel.ranges.slice(0, ourIndex).concat(ranges2), ourIndex),
              { origin: "*mouse", scroll: false }
            );
            cm.scrollIntoView(pos);
          } else {
            var oldRange = ourRange;
            var range3 = rangeForUnit(cm, pos, behavior.unit);
            var anchor = oldRange.anchor, head;
            if (cmp(range3.anchor, anchor) > 0) {
              head = range3.head;
              anchor = minPos(oldRange.from(), range3.anchor);
            } else {
              head = range3.anchor;
              anchor = maxPos(oldRange.to(), range3.head);
            }
            var ranges$1 = startSel.ranges.slice(0);
            ranges$1[ourIndex] = bidiSimplify(cm, new Range(clipPos(doc$1, anchor), head));
            setSelection(doc$1, normalizeSelection(cm, ranges$1, ourIndex), sel_mouse);
          }
        }
        var editorSize = display.wrapper.getBoundingClientRect();
        var counter = 0;
        function extend(e) {
          var curCount = ++counter;
          var cur = posFromMouse(cm, e, true, behavior.unit == "rectangle");
          if (!cur) {
            return;
          }
          if (cmp(cur, lastPos) != 0) {
            cm.curOp.focus = activeElt(doc2(cm));
            extendTo(cur);
            var visible = visibleLines(display, doc$1);
            if (cur.line >= visible.to || cur.line < visible.from) {
              setTimeout(operation(cm, function() {
                if (counter == curCount) {
                  extend(e);
                }
              }), 150);
            }
          } else {
            var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
            if (outside) {
              setTimeout(operation(cm, function() {
                if (counter != curCount) {
                  return;
                }
                display.scroller.scrollTop += outside;
                extend(e);
              }), 50);
            }
          }
        }
        function done(e) {
          cm.state.selectingText = false;
          counter = Infinity;
          if (e) {
            e_preventDefault(e);
            display.input.focus();
          }
          off(display.wrapper.ownerDocument, "mousemove", move);
          off(display.wrapper.ownerDocument, "mouseup", up);
          doc$1.history.lastSelOrigin = null;
        }
        var move = operation(cm, function(e) {
          if (e.buttons === 0 || !e_button(e)) {
            done(e);
          } else {
            extend(e);
          }
        });
        var up = operation(cm, done);
        cm.state.selectingText = up;
        on(display.wrapper.ownerDocument, "mousemove", move);
        on(display.wrapper.ownerDocument, "mouseup", up);
      }
      function bidiSimplify(cm, range2) {
        var anchor = range2.anchor;
        var head = range2.head;
        var anchorLine = getLine(cm.doc, anchor.line);
        if (cmp(anchor, head) == 0 && anchor.sticky == head.sticky) {
          return range2;
        }
        var order = getOrder(anchorLine);
        if (!order) {
          return range2;
        }
        var index = getBidiPartAt(order, anchor.ch, anchor.sticky), part = order[index];
        if (part.from != anchor.ch && part.to != anchor.ch) {
          return range2;
        }
        var boundary = index + (part.from == anchor.ch == (part.level != 1) ? 0 : 1);
        if (boundary == 0 || boundary == order.length) {
          return range2;
        }
        var leftSide;
        if (head.line != anchor.line) {
          leftSide = (head.line - anchor.line) * (cm.doc.direction == "ltr" ? 1 : -1) > 0;
        } else {
          var headIndex = getBidiPartAt(order, head.ch, head.sticky);
          var dir = headIndex - index || (head.ch - anchor.ch) * (part.level == 1 ? -1 : 1);
          if (headIndex == boundary - 1 || headIndex == boundary) {
            leftSide = dir < 0;
          } else {
            leftSide = dir > 0;
          }
        }
        var usePart = order[boundary + (leftSide ? -1 : 0)];
        var from2 = leftSide == (usePart.level == 1);
        var ch = from2 ? usePart.from : usePart.to, sticky = from2 ? "after" : "before";
        return anchor.ch == ch && anchor.sticky == sticky ? range2 : new Range(new Pos(anchor.line, ch, sticky), head);
      }
      function gutterEvent(cm, e, type, prevent) {
        var mX, mY;
        if (e.touches) {
          mX = e.touches[0].clientX;
          mY = e.touches[0].clientY;
        } else {
          try {
            mX = e.clientX;
            mY = e.clientY;
          } catch (e$1) {
            return false;
          }
        }
        if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) {
          return false;
        }
        if (prevent) {
          e_preventDefault(e);
        }
        var display = cm.display;
        var lineBox = display.lineDiv.getBoundingClientRect();
        if (mY > lineBox.bottom || !hasHandler(cm, type)) {
          return e_defaultPrevented(e);
        }
        mY -= lineBox.top - display.viewOffset;
        for (var i2 = 0; i2 < cm.display.gutterSpecs.length; ++i2) {
          var g = display.gutters.childNodes[i2];
          if (g && g.getBoundingClientRect().right >= mX) {
            var line = lineAtHeight(cm.doc, mY);
            var gutter = cm.display.gutterSpecs[i2];
            signal(cm, type, cm, line, gutter.className, e);
            return e_defaultPrevented(e);
          }
        }
      }
      function clickInGutter(cm, e) {
        return gutterEvent(cm, e, "gutterClick", true);
      }
      function onContextMenu(cm, e) {
        if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) {
          return;
        }
        if (signalDOMEvent(cm, e, "contextmenu")) {
          return;
        }
        if (!captureRightClick) {
          cm.display.input.onContextMenu(e);
        }
      }
      function contextMenuInGutter(cm, e) {
        if (!hasHandler(cm, "gutterContextMenu")) {
          return false;
        }
        return gutterEvent(cm, e, "gutterContextMenu", false);
      }
      function themeChanged(cm) {
        cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
        clearCaches(cm);
      }
      var Init = { toString: function() {
        return "CodeMirror.Init";
      } };
      var defaults = {};
      var optionHandlers = {};
      function defineOptions(CodeMirror3) {
        var optionHandlers2 = CodeMirror3.optionHandlers;
        function option(name, deflt, handle, notOnInit) {
          CodeMirror3.defaults[name] = deflt;
          if (handle) {
            optionHandlers2[name] = notOnInit ? function(cm, val, old) {
              if (old != Init) {
                handle(cm, val, old);
              }
            } : handle;
          }
        }
        CodeMirror3.defineOption = option;
        CodeMirror3.Init = Init;
        option("value", "", function(cm, val) {
          return cm.setValue(val);
        }, true);
        option("mode", null, function(cm, val) {
          cm.doc.modeOption = val;
          loadMode(cm);
        }, true);
        option("indentUnit", 2, loadMode, true);
        option("indentWithTabs", false);
        option("smartIndent", true);
        option("tabSize", 4, function(cm) {
          resetModeState(cm);
          clearCaches(cm);
          regChange(cm);
        }, true);
        option("lineSeparator", null, function(cm, val) {
          cm.doc.lineSep = val;
          if (!val) {
            return;
          }
          var newBreaks = [], lineNo2 = cm.doc.first;
          cm.doc.iter(function(line) {
            for (var pos = 0; ; ) {
              var found = line.text.indexOf(val, pos);
              if (found == -1) {
                break;
              }
              pos = found + val.length;
              newBreaks.push(Pos(lineNo2, found));
            }
            lineNo2++;
          });
          for (var i2 = newBreaks.length - 1; i2 >= 0; i2--) {
            replaceRange(cm.doc, val, newBreaks[i2], Pos(newBreaks[i2].line, newBreaks[i2].ch + val.length));
          }
        });
        option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g, function(cm, val, old) {
          cm.state.specialChars = new RegExp(val.source + (val.test("	") ? "" : "|	"), "g");
          if (old != Init) {
            cm.refresh();
          }
        });
        option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function(cm) {
          return cm.refresh();
        }, true);
        option("electricChars", true);
        option("inputStyle", mobile ? "contenteditable" : "textarea", function() {
          throw new Error("inputStyle can not (yet) be changed in a running editor");
        }, true);
        option("spellcheck", false, function(cm, val) {
          return cm.getInputField().spellcheck = val;
        }, true);
        option("autocorrect", false, function(cm, val) {
          return cm.getInputField().autocorrect = val;
        }, true);
        option("autocapitalize", false, function(cm, val) {
          return cm.getInputField().autocapitalize = val;
        }, true);
        option("rtlMoveVisually", !windows);
        option("wholeLineUpdateBefore", true);
        option("theme", "default", function(cm) {
          themeChanged(cm);
          updateGutters(cm);
        }, true);
        option("keyMap", "default", function(cm, val, old) {
          var next = getKeyMap(val);
          var prev = old != Init && getKeyMap(old);
          if (prev && prev.detach) {
            prev.detach(cm, next);
          }
          if (next.attach) {
            next.attach(cm, prev || null);
          }
        });
        option("extraKeys", null);
        option("configureMouse", null);
        option("lineWrapping", false, wrappingChanged, true);
        option("gutters", [], function(cm, val) {
          cm.display.gutterSpecs = getGutters(val, cm.options.lineNumbers);
          updateGutters(cm);
        }, true);
        option("fixedGutter", true, function(cm, val) {
          cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
          cm.refresh();
        }, true);
        option("coverGutterNextToScrollbar", false, function(cm) {
          return updateScrollbars(cm);
        }, true);
        option("scrollbarStyle", "native", function(cm) {
          initScrollbars(cm);
          updateScrollbars(cm);
          cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
          cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
        }, true);
        option("lineNumbers", false, function(cm, val) {
          cm.display.gutterSpecs = getGutters(cm.options.gutters, val);
          updateGutters(cm);
        }, true);
        option("firstLineNumber", 1, updateGutters, true);
        option("lineNumberFormatter", function(integer) {
          return integer;
        }, updateGutters, true);
        option("showCursorWhenSelecting", false, updateSelection, true);
        option("resetSelectionOnContextMenu", true);
        option("lineWiseCopyCut", true);
        option("pasteLinesPerSelection", true);
        option("selectionsMayTouch", false);
        option("readOnly", false, function(cm, val) {
          if (val == "nocursor") {
            onBlur(cm);
            cm.display.input.blur();
          }
          cm.display.input.readOnlyChanged(val);
        });
        option("screenReaderLabel", null, function(cm, val) {
          val = val === "" ? null : val;
          cm.display.input.screenReaderLabelChanged(val);
        });
        option("disableInput", false, function(cm, val) {
          if (!val) {
            cm.display.input.reset();
          }
        }, true);
        option("dragDrop", true, dragDropChanged);
        option("allowDropFileTypes", null);
        option("cursorBlinkRate", 530);
        option("cursorScrollMargin", 0);
        option("cursorHeight", 1, updateSelection, true);
        option("singleCursorHeightPerLine", true, updateSelection, true);
        option("workTime", 100);
        option("workDelay", 100);
        option("flattenSpans", true, resetModeState, true);
        option("addModeClass", false, resetModeState, true);
        option("pollInterval", 100);
        option("undoDepth", 200, function(cm, val) {
          return cm.doc.history.undoDepth = val;
        });
        option("historyEventDelay", 1250);
        option("viewportMargin", 10, function(cm) {
          return cm.refresh();
        }, true);
        option("maxHighlightLength", 1e4, resetModeState, true);
        option("moveInputWithCursor", true, function(cm, val) {
          if (!val) {
            cm.display.input.resetPosition();
          }
        });
        option("tabindex", null, function(cm, val) {
          return cm.display.input.getField().tabIndex = val || "";
        });
        option("autofocus", null);
        option("direction", "ltr", function(cm, val) {
          return cm.doc.setDirection(val);
        }, true);
        option("phrases", null);
      }
      function dragDropChanged(cm, value, old) {
        var wasOn = old && old != Init;
        if (!value != !wasOn) {
          var funcs = cm.display.dragFunctions;
          var toggle = value ? on : off;
          toggle(cm.display.scroller, "dragstart", funcs.start);
          toggle(cm.display.scroller, "dragenter", funcs.enter);
          toggle(cm.display.scroller, "dragover", funcs.over);
          toggle(cm.display.scroller, "dragleave", funcs.leave);
          toggle(cm.display.scroller, "drop", funcs.drop);
        }
      }
      function wrappingChanged(cm) {
        if (cm.options.lineWrapping) {
          addClass(cm.display.wrapper, "CodeMirror-wrap");
          cm.display.sizer.style.minWidth = "";
          cm.display.sizerWidth = null;
        } else {
          rmClass(cm.display.wrapper, "CodeMirror-wrap");
          findMaxLine(cm);
        }
        estimateLineHeights(cm);
        regChange(cm);
        clearCaches(cm);
        setTimeout(function() {
          return updateScrollbars(cm);
        }, 100);
      }
      function CodeMirror2(place, options) {
        var this$1$1 = this;
        if (!(this instanceof CodeMirror2)) {
          return new CodeMirror2(place, options);
        }
        this.options = options = options ? copyObj(options) : {};
        copyObj(defaults, options, false);
        var doc3 = options.value;
        if (typeof doc3 == "string") {
          doc3 = new Doc2(doc3, options.mode, null, options.lineSeparator, options.direction);
        } else if (options.mode) {
          doc3.modeOption = options.mode;
        }
        this.doc = doc3;
        var input = new CodeMirror2.inputStyles[options.inputStyle](this);
        var display = this.display = new Display(place, doc3, input, options);
        display.wrapper.CodeMirror = this;
        themeChanged(this);
        if (options.lineWrapping) {
          this.display.wrapper.className += " CodeMirror-wrap";
        }
        initScrollbars(this);
        this.state = {
          keyMaps: [],
          // stores maps added by addKeyMap
          overlays: [],
          // highlighting overlays, as added by addOverlay
          modeGen: 0,
          // bumped when mode/overlay changes, used to invalidate highlighting info
          overwrite: false,
          delayingBlurEvent: false,
          focused: false,
          suppressEdits: false,
          // used to disable editing during key handlers when in readOnly mode
          pasteIncoming: -1,
          cutIncoming: -1,
          // help recognize paste/cut edits in input.poll
          selectingText: false,
          draggingText: false,
          highlight: new Delayed(),
          // stores highlight worker timeout
          keySeq: null,
          // Unfinished key sequence
          specialChars: null
        };
        if (options.autofocus && !mobile) {
          display.input.focus();
        }
        if (ie && ie_version < 11) {
          setTimeout(function() {
            return this$1$1.display.input.reset(true);
          }, 20);
        }
        registerEventHandlers(this);
        ensureGlobalHandlers();
        startOperation(this);
        this.curOp.forceUpdate = true;
        attachDoc(this, doc3);
        if (options.autofocus && !mobile || this.hasFocus()) {
          setTimeout(function() {
            if (this$1$1.hasFocus() && !this$1$1.state.focused) {
              onFocus(this$1$1);
            }
          }, 20);
        } else {
          onBlur(this);
        }
        for (var opt in optionHandlers) {
          if (optionHandlers.hasOwnProperty(opt)) {
            optionHandlers[opt](this, options[opt], Init);
          }
        }
        maybeUpdateLineNumberWidth(this);
        if (options.finishInit) {
          options.finishInit(this);
        }
        for (var i2 = 0; i2 < initHooks.length; ++i2) {
          initHooks[i2](this);
        }
        endOperation(this);
        if (webkit && options.lineWrapping && getComputedStyle(display.lineDiv).textRendering == "optimizelegibility") {
          display.lineDiv.style.textRendering = "auto";
        }
      }
      CodeMirror2.defaults = defaults;
      CodeMirror2.optionHandlers = optionHandlers;
      function registerEventHandlers(cm) {
        var d = cm.display;
        on(d.scroller, "mousedown", operation(cm, onMouseDown));
        if (ie && ie_version < 11) {
          on(d.scroller, "dblclick", operation(cm, function(e) {
            if (signalDOMEvent(cm, e)) {
              return;
            }
            var pos = posFromMouse(cm, e);
            if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) {
              return;
            }
            e_preventDefault(e);
            var word = cm.findWordAt(pos);
            extendSelection(cm.doc, word.anchor, word.head);
          }));
        } else {
          on(d.scroller, "dblclick", function(e) {
            return signalDOMEvent(cm, e) || e_preventDefault(e);
          });
        }
        on(d.scroller, "contextmenu", function(e) {
          return onContextMenu(cm, e);
        });
        on(d.input.getField(), "contextmenu", function(e) {
          if (!d.scroller.contains(e.target)) {
            onContextMenu(cm, e);
          }
        });
        var touchFinished, prevTouch = { end: 0 };
        function finishTouch() {
          if (d.activeTouch) {
            touchFinished = setTimeout(function() {
              return d.activeTouch = null;
            }, 1e3);
            prevTouch = d.activeTouch;
            prevTouch.end = +new Date();
          }
        }
        function isMouseLikeTouchEvent(e) {
          if (e.touches.length != 1) {
            return false;
          }
          var touch = e.touches[0];
          return touch.radiusX <= 1 && touch.radiusY <= 1;
        }
        function farAway(touch, other) {
          if (other.left == null) {
            return true;
          }
          var dx = other.left - touch.left, dy = other.top - touch.top;
          return dx * dx + dy * dy > 20 * 20;
        }
        on(d.scroller, "touchstart", function(e) {
          if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e) && !clickInGutter(cm, e)) {
            d.input.ensurePolled();
            clearTimeout(touchFinished);
            var now = +new Date();
            d.activeTouch = {
              start: now,
              moved: false,
              prev: now - prevTouch.end <= 300 ? prevTouch : null
            };
            if (e.touches.length == 1) {
              d.activeTouch.left = e.touches[0].pageX;
              d.activeTouch.top = e.touches[0].pageY;
            }
          }
        });
        on(d.scroller, "touchmove", function() {
          if (d.activeTouch) {
            d.activeTouch.moved = true;
          }
        });
        on(d.scroller, "touchend", function(e) {
          var touch = d.activeTouch;
          if (touch && !eventInWidget(d, e) && touch.left != null && !touch.moved && new Date() - touch.start < 300) {
            var pos = cm.coordsChar(d.activeTouch, "page"), range2;
            if (!touch.prev || farAway(touch, touch.prev)) {
              range2 = new Range(pos, pos);
            } else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) {
              range2 = cm.findWordAt(pos);
            } else {
              range2 = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0)));
            }
            cm.setSelection(range2.anchor, range2.head);
            cm.focus();
            e_preventDefault(e);
          }
          finishTouch();
        });
        on(d.scroller, "touchcancel", finishTouch);
        on(d.scroller, "scroll", function() {
          if (d.scroller.clientHeight) {
            updateScrollTop(cm, d.scroller.scrollTop);
            setScrollLeft(cm, d.scroller.scrollLeft, true);
            signal(cm, "scroll", cm);
          }
        });
        on(d.scroller, "mousewheel", function(e) {
          return onScrollWheel(cm, e);
        });
        on(d.scroller, "DOMMouseScroll", function(e) {
          return onScrollWheel(cm, e);
        });
        on(d.wrapper, "scroll", function() {
          return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0;
        });
        d.dragFunctions = {
          enter: function(e) {
            if (!signalDOMEvent(cm, e)) {
              e_stop(e);
            }
          },
          over: function(e) {
            if (!signalDOMEvent(cm, e)) {
              onDragOver(cm, e);
              e_stop(e);
            }
          },
          start: function(e) {
            return onDragStart(cm, e);
          },
          drop: operation(cm, onDrop),
          leave: function(e) {
            if (!signalDOMEvent(cm, e)) {
              clearDragCursor(cm);
            }
          }
        };
        var inp = d.input.getField();
        on(inp, "keyup", function(e) {
          return onKeyUp.call(cm, e);
        });
        on(inp, "keydown", operation(cm, onKeyDown));
        on(inp, "keypress", operation(cm, onKeyPress));
        on(inp, "focus", function(e) {
          return onFocus(cm, e);
        });
        on(inp, "blur", function(e) {
          return onBlur(cm, e);
        });
      }
      var initHooks = [];
      CodeMirror2.defineInitHook = function(f) {
        return initHooks.push(f);
      };
      function indentLine(cm, n, how, aggressive) {
        var doc3 = cm.doc, state;
        if (how == null) {
          how = "add";
        }
        if (how == "smart") {
          if (!doc3.mode.indent) {
            how = "prev";
          } else {
            state = getContextBefore(cm, n).state;
          }
        }
        var tabSize = cm.options.tabSize;
        var line = getLine(doc3, n), curSpace = countColumn(line.text, null, tabSize);
        if (line.stateAfter) {
          line.stateAfter = null;
        }
        var curSpaceString = line.text.match(/^\s*/)[0], indentation;
        if (!aggressive && !/\S/.test(line.text)) {
          indentation = 0;
          how = "not";
        } else if (how == "smart") {
          indentation = doc3.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
          if (indentation == Pass || indentation > 150) {
            if (!aggressive) {
              return;
            }
            how = "prev";
          }
        }
        if (how == "prev") {
          if (n > doc3.first) {
            indentation = countColumn(getLine(doc3, n - 1).text, null, tabSize);
          } else {
            indentation = 0;
          }
        } else if (how == "add") {
          indentation = curSpace + cm.options.indentUnit;
        } else if (how == "subtract") {
          indentation = curSpace - cm.options.indentUnit;
        } else if (typeof how == "number") {
          indentation = curSpace + how;
        }
        indentation = Math.max(0, indentation);
        var indentString = "", pos = 0;
        if (cm.options.indentWithTabs) {
          for (var i2 = Math.floor(indentation / tabSize); i2; --i2) {
            pos += tabSize;
            indentString += "	";
          }
        }
        if (pos < indentation) {
          indentString += spaceStr(indentation - pos);
        }
        if (indentString != curSpaceString) {
          replaceRange(doc3, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
          line.stateAfter = null;
          return true;
        } else {
          for (var i$12 = 0; i$12 < doc3.sel.ranges.length; i$12++) {
            var range2 = doc3.sel.ranges[i$12];
            if (range2.head.line == n && range2.head.ch < curSpaceString.length) {
              var pos$1 = Pos(n, curSpaceString.length);
              replaceOneSelection(doc3, i$12, new Range(pos$1, pos$1));
              break;
            }
          }
        }
      }
      var lastCopied = null;
      function setLastCopied(newLastCopied) {
        lastCopied = newLastCopied;
      }
      function applyTextInput(cm, inserted, deleted, sel, origin) {
        var doc3 = cm.doc;
        cm.display.shift = false;
        if (!sel) {
          sel = doc3.sel;
        }
        var recent = +new Date() - 200;
        var paste = origin == "paste" || cm.state.pasteIncoming > recent;
        var textLines = splitLinesAuto(inserted), multiPaste = null;
        if (paste && sel.ranges.length > 1) {
          if (lastCopied && lastCopied.text.join("\n") == inserted) {
            if (sel.ranges.length % lastCopied.text.length == 0) {
              multiPaste = [];
              for (var i2 = 0; i2 < lastCopied.text.length; i2++) {
                multiPaste.push(doc3.splitLines(lastCopied.text[i2]));
              }
            }
          } else if (textLines.length == sel.ranges.length && cm.options.pasteLinesPerSelection) {
            multiPaste = map2(textLines, function(l) {
              return [l];
            });
          }
        }
        var updateInput = cm.curOp.updateInput;
        for (var i$12 = sel.ranges.length - 1; i$12 >= 0; i$12--) {
          var range2 = sel.ranges[i$12];
          var from2 = range2.from(), to = range2.to();
          if (range2.empty()) {
            if (deleted && deleted > 0) {
              from2 = Pos(from2.line, from2.ch - deleted);
            } else if (cm.state.overwrite && !paste) {
              to = Pos(to.line, Math.min(getLine(doc3, to.line).text.length, to.ch + lst(textLines).length));
            } else if (paste && lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == textLines.join("\n")) {
              from2 = to = Pos(from2.line, 0);
            }
          }
          var changeEvent = {
            from: from2,
            to,
            text: multiPaste ? multiPaste[i$12 % multiPaste.length] : textLines,
            origin: origin || (paste ? "paste" : cm.state.cutIncoming > recent ? "cut" : "+input")
          };
          makeChange(cm.doc, changeEvent);
          signalLater(cm, "inputRead", cm, changeEvent);
        }
        if (inserted && !paste) {
          triggerElectric(cm, inserted);
        }
        ensureCursorVisible(cm);
        if (cm.curOp.updateInput < 2) {
          cm.curOp.updateInput = updateInput;
        }
        cm.curOp.typing = true;
        cm.state.pasteIncoming = cm.state.cutIncoming = -1;
      }
      function handlePaste(e, cm) {
        var pasted = e.clipboardData && e.clipboardData.getData("Text");
        if (pasted) {
          e.preventDefault();
          if (!cm.isReadOnly() && !cm.options.disableInput && cm.hasFocus()) {
            runInOp(cm, function() {
              return applyTextInput(cm, pasted, 0, null, "paste");
            });
          }
          return true;
        }
      }
      function triggerElectric(cm, inserted) {
        if (!cm.options.electricChars || !cm.options.smartIndent) {
          return;
        }
        var sel = cm.doc.sel;
        for (var i2 = sel.ranges.length - 1; i2 >= 0; i2--) {
          var range2 = sel.ranges[i2];
          if (range2.head.ch > 100 || i2 && sel.ranges[i2 - 1].head.line == range2.head.line) {
            continue;
          }
          var mode = cm.getModeAt(range2.head);
          var indented = false;
          if (mode.electricChars) {
            for (var j = 0; j < mode.electricChars.length; j++) {
              if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
                indented = indentLine(cm, range2.head.line, "smart");
                break;
              }
            }
          } else if (mode.electricInput) {
            if (mode.electricInput.test(getLine(cm.doc, range2.head.line).text.slice(0, range2.head.ch))) {
              indented = indentLine(cm, range2.head.line, "smart");
            }
          }
          if (indented) {
            signalLater(cm, "electricInput", cm, range2.head.line);
          }
        }
      }
      function copyableRanges(cm) {
        var text2 = [], ranges = [];
        for (var i2 = 0; i2 < cm.doc.sel.ranges.length; i2++) {
          var line = cm.doc.sel.ranges[i2].head.line;
          var lineRange = { anchor: Pos(line, 0), head: Pos(line + 1, 0) };
          ranges.push(lineRange);
          text2.push(cm.getRange(lineRange.anchor, lineRange.head));
        }
        return { text: text2, ranges };
      }
      function disableBrowserMagic(field, spellcheck, autocorrect, autocapitalize) {
        field.setAttribute("autocorrect", autocorrect ? "on" : "off");
        field.setAttribute("autocapitalize", autocapitalize ? "on" : "off");
        field.setAttribute("spellcheck", !!spellcheck);
      }
      function hiddenTextarea() {
        var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none");
        var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        if (webkit) {
          te.style.width = "1000px";
        } else {
          te.setAttribute("wrap", "off");
        }
        if (ios) {
          te.style.border = "1px solid black";
        }
        return div;
      }
      function addEditorMethods(CodeMirror3) {
        var optionHandlers2 = CodeMirror3.optionHandlers;
        var helpers = CodeMirror3.helpers = {};
        CodeMirror3.prototype = {
          constructor: CodeMirror3,
          focus: function() {
            win(this).focus();
            this.display.input.focus();
          },
          setOption: function(option, value) {
            var options = this.options, old = options[option];
            if (options[option] == value && option != "mode") {
              return;
            }
            options[option] = value;
            if (optionHandlers2.hasOwnProperty(option)) {
              operation(this, optionHandlers2[option])(this, value, old);
            }
            signal(this, "optionChange", this, option);
          },
          getOption: function(option) {
            return this.options[option];
          },
          getDoc: function() {
            return this.doc;
          },
          addKeyMap: function(map3, bottom) {
            this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map3));
          },
          removeKeyMap: function(map3) {
            var maps = this.state.keyMaps;
            for (var i2 = 0; i2 < maps.length; ++i2) {
              if (maps[i2] == map3 || maps[i2].name == map3) {
                maps.splice(i2, 1);
                return true;
              }
            }
          },
          addOverlay: methodOp(function(spec, options) {
            var mode = spec.token ? spec : CodeMirror3.getMode(this.options, spec);
            if (mode.startState) {
              throw new Error("Overlays may not be stateful.");
            }
            insertSorted(
              this.state.overlays,
              {
                mode,
                modeSpec: spec,
                opaque: options && options.opaque,
                priority: options && options.priority || 0
              },
              function(overlay) {
                return overlay.priority;
              }
            );
            this.state.modeGen++;
            regChange(this);
          }),
          removeOverlay: methodOp(function(spec) {
            var overlays = this.state.overlays;
            for (var i2 = 0; i2 < overlays.length; ++i2) {
              var cur = overlays[i2].modeSpec;
              if (cur == spec || typeof spec == "string" && cur.name == spec) {
                overlays.splice(i2, 1);
                this.state.modeGen++;
                regChange(this);
                return;
              }
            }
          }),
          indentLine: methodOp(function(n, dir, aggressive) {
            if (typeof dir != "string" && typeof dir != "number") {
              if (dir == null) {
                dir = this.options.smartIndent ? "smart" : "prev";
              } else {
                dir = dir ? "add" : "subtract";
              }
            }
            if (isLine(this.doc, n)) {
              indentLine(this, n, dir, aggressive);
            }
          }),
          indentSelection: methodOp(function(how) {
            var ranges = this.doc.sel.ranges, end = -1;
            for (var i2 = 0; i2 < ranges.length; i2++) {
              var range2 = ranges[i2];
              if (!range2.empty()) {
                var from2 = range2.from(), to = range2.to();
                var start = Math.max(end, from2.line);
                end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
                for (var j = start; j < end; ++j) {
                  indentLine(this, j, how);
                }
                var newRanges = this.doc.sel.ranges;
                if (from2.ch == 0 && ranges.length == newRanges.length && newRanges[i2].from().ch > 0) {
                  replaceOneSelection(this.doc, i2, new Range(from2, newRanges[i2].to()), sel_dontScroll);
                }
              } else if (range2.head.line > end) {
                indentLine(this, range2.head.line, how, true);
                end = range2.head.line;
                if (i2 == this.doc.sel.primIndex) {
                  ensureCursorVisible(this);
                }
              }
            }
          }),
          // Fetch the parser token for a given character. Useful for hacks
          // that want to inspect the mode state (say, for completion).
          getTokenAt: function(pos, precise) {
            return takeToken(this, pos, precise);
          },
          getLineTokens: function(line, precise) {
            return takeToken(this, Pos(line), precise, true);
          },
          getTokenTypeAt: function(pos) {
            pos = clipPos(this.doc, pos);
            var styles = getLineStyles(this, getLine(this.doc, pos.line));
            var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
            var type;
            if (ch == 0) {
              type = styles[2];
            } else {
              for (; ; ) {
                var mid = before + after >> 1;
                if ((mid ? styles[mid * 2 - 1] : 0) >= ch) {
                  after = mid;
                } else if (styles[mid * 2 + 1] < ch) {
                  before = mid + 1;
                } else {
                  type = styles[mid * 2 + 2];
                  break;
                }
              }
            }
            var cut = type ? type.indexOf("overlay ") : -1;
            return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1);
          },
          getModeAt: function(pos) {
            var mode = this.doc.mode;
            if (!mode.innerMode) {
              return mode;
            }
            return CodeMirror3.innerMode(mode, this.getTokenAt(pos).state).mode;
          },
          getHelper: function(pos, type) {
            return this.getHelpers(pos, type)[0];
          },
          getHelpers: function(pos, type) {
            var found = [];
            if (!helpers.hasOwnProperty(type)) {
              return found;
            }
            var help = helpers[type], mode = this.getModeAt(pos);
            if (typeof mode[type] == "string") {
              if (help[mode[type]]) {
                found.push(help[mode[type]]);
              }
            } else if (mode[type]) {
              for (var i2 = 0; i2 < mode[type].length; i2++) {
                var val = help[mode[type][i2]];
                if (val) {
                  found.push(val);
                }
              }
            } else if (mode.helperType && help[mode.helperType]) {
              found.push(help[mode.helperType]);
            } else if (help[mode.name]) {
              found.push(help[mode.name]);
            }
            for (var i$12 = 0; i$12 < help._global.length; i$12++) {
              var cur = help._global[i$12];
              if (cur.pred(mode, this) && indexOf(found, cur.val) == -1) {
                found.push(cur.val);
              }
            }
            return found;
          },
          getStateAfter: function(line, precise) {
            var doc3 = this.doc;
            line = clipLine(doc3, line == null ? doc3.first + doc3.size - 1 : line);
            return getContextBefore(this, line + 1, precise).state;
          },
          cursorCoords: function(start, mode) {
            var pos, range2 = this.doc.sel.primary();
            if (start == null) {
              pos = range2.head;
            } else if (typeof start == "object") {
              pos = clipPos(this.doc, start);
            } else {
              pos = start ? range2.from() : range2.to();
            }
            return cursorCoords(this, pos, mode || "page");
          },
          charCoords: function(pos, mode) {
            return charCoords(this, clipPos(this.doc, pos), mode || "page");
          },
          coordsChar: function(coords, mode) {
            coords = fromCoordSystem(this, coords, mode || "page");
            return coordsChar(this, coords.left, coords.top);
          },
          lineAtHeight: function(height, mode) {
            height = fromCoordSystem(this, { top: height, left: 0 }, mode || "page").top;
            return lineAtHeight(this.doc, height + this.display.viewOffset);
          },
          heightAtLine: function(line, mode, includeWidgets) {
            var end = false, lineObj;
            if (typeof line == "number") {
              var last2 = this.doc.first + this.doc.size - 1;
              if (line < this.doc.first) {
                line = this.doc.first;
              } else if (line > last2) {
                line = last2;
                end = true;
              }
              lineObj = getLine(this.doc, line);
            } else {
              lineObj = line;
            }
            return intoCoordSystem(this, lineObj, { top: 0, left: 0 }, mode || "page", includeWidgets || end).top + (end ? this.doc.height - heightAtLine(lineObj) : 0);
          },
          defaultTextHeight: function() {
            return textHeight(this.display);
          },
          defaultCharWidth: function() {
            return charWidth(this.display);
          },
          getViewport: function() {
            return { from: this.display.viewFrom, to: this.display.viewTo };
          },
          addWidget: function(pos, node, scroll, vert, horiz) {
            var display = this.display;
            pos = cursorCoords(this, clipPos(this.doc, pos));
            var top = pos.bottom, left = pos.left;
            node.style.position = "absolute";
            node.setAttribute("cm-ignore-events", "true");
            this.display.input.setUneditable(node);
            display.sizer.appendChild(node);
            if (vert == "over") {
              top = pos.top;
            } else if (vert == "above" || vert == "near") {
              var vspace = Math.max(display.wrapper.clientHeight, this.doc.height), hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
              if ((vert == "above" || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight) {
                top = pos.top - node.offsetHeight;
              } else if (pos.bottom + node.offsetHeight <= vspace) {
                top = pos.bottom;
              }
              if (left + node.offsetWidth > hspace) {
                left = hspace - node.offsetWidth;
              }
            }
            node.style.top = top + "px";
            node.style.left = node.style.right = "";
            if (horiz == "right") {
              left = display.sizer.clientWidth - node.offsetWidth;
              node.style.right = "0px";
            } else {
              if (horiz == "left") {
                left = 0;
              } else if (horiz == "middle") {
                left = (display.sizer.clientWidth - node.offsetWidth) / 2;
              }
              node.style.left = left + "px";
            }
            if (scroll) {
              scrollIntoView(this, { left, top, right: left + node.offsetWidth, bottom: top + node.offsetHeight });
            }
          },
          triggerOnKeyDown: methodOp(onKeyDown),
          triggerOnKeyPress: methodOp(onKeyPress),
          triggerOnKeyUp: onKeyUp,
          triggerOnMouseDown: methodOp(onMouseDown),
          execCommand: function(cmd) {
            if (commands.hasOwnProperty(cmd)) {
              return commands[cmd].call(null, this);
            }
          },
          triggerElectric: methodOp(function(text2) {
            triggerElectric(this, text2);
          }),
          findPosH: function(from2, amount, unit, visually) {
            var dir = 1;
            if (amount < 0) {
              dir = -1;
              amount = -amount;
            }
            var cur = clipPos(this.doc, from2);
            for (var i2 = 0; i2 < amount; ++i2) {
              cur = findPosH(this.doc, cur, dir, unit, visually);
              if (cur.hitSide) {
                break;
              }
            }
            return cur;
          },
          moveH: methodOp(function(dir, unit) {
            var this$1$1 = this;
            this.extendSelectionsBy(function(range2) {
              if (this$1$1.display.shift || this$1$1.doc.extend || range2.empty()) {
                return findPosH(this$1$1.doc, range2.head, dir, unit, this$1$1.options.rtlMoveVisually);
              } else {
                return dir < 0 ? range2.from() : range2.to();
              }
            }, sel_move);
          }),
          deleteH: methodOp(function(dir, unit) {
            var sel = this.doc.sel, doc3 = this.doc;
            if (sel.somethingSelected()) {
              doc3.replaceSelection("", null, "+delete");
            } else {
              deleteNearSelection(this, function(range2) {
                var other = findPosH(doc3, range2.head, dir, unit, false);
                return dir < 0 ? { from: other, to: range2.head } : { from: range2.head, to: other };
              });
            }
          }),
          findPosV: function(from2, amount, unit, goalColumn) {
            var dir = 1, x = goalColumn;
            if (amount < 0) {
              dir = -1;
              amount = -amount;
            }
            var cur = clipPos(this.doc, from2);
            for (var i2 = 0; i2 < amount; ++i2) {
              var coords = cursorCoords(this, cur, "div");
              if (x == null) {
                x = coords.left;
              } else {
                coords.left = x;
              }
              cur = findPosV(this, coords, dir, unit);
              if (cur.hitSide) {
                break;
              }
            }
            return cur;
          },
          moveV: methodOp(function(dir, unit) {
            var this$1$1 = this;
            var doc3 = this.doc, goals = [];
            var collapse = !this.display.shift && !doc3.extend && doc3.sel.somethingSelected();
            doc3.extendSelectionsBy(function(range2) {
              if (collapse) {
                return dir < 0 ? range2.from() : range2.to();
              }
              var headPos = cursorCoords(this$1$1, range2.head, "div");
              if (range2.goalColumn != null) {
                headPos.left = range2.goalColumn;
              }
              goals.push(headPos.left);
              var pos = findPosV(this$1$1, headPos, dir, unit);
              if (unit == "page" && range2 == doc3.sel.primary()) {
                addToScrollTop(this$1$1, charCoords(this$1$1, pos, "div").top - headPos.top);
              }
              return pos;
            }, sel_move);
            if (goals.length) {
              for (var i2 = 0; i2 < doc3.sel.ranges.length; i2++) {
                doc3.sel.ranges[i2].goalColumn = goals[i2];
              }
            }
          }),
          // Find the word at the given position (as returned by coordsChar).
          findWordAt: function(pos) {
            var doc3 = this.doc, line = getLine(doc3, pos.line).text;
            var start = pos.ch, end = pos.ch;
            if (line) {
              var helper = this.getHelper(pos, "wordChars");
              if ((pos.sticky == "before" || end == line.length) && start) {
                --start;
              } else {
                ++end;
              }
              var startChar = line.charAt(start);
              var check = isWordChar(startChar, helper) ? function(ch) {
                return isWordChar(ch, helper);
              } : /\s/.test(startChar) ? function(ch) {
                return /\s/.test(ch);
              } : function(ch) {
                return !/\s/.test(ch) && !isWordChar(ch);
              };
              while (start > 0 && check(line.charAt(start - 1))) {
                --start;
              }
              while (end < line.length && check(line.charAt(end))) {
                ++end;
              }
            }
            return new Range(Pos(pos.line, start), Pos(pos.line, end));
          },
          toggleOverwrite: function(value) {
            if (value != null && value == this.state.overwrite) {
              return;
            }
            if (this.state.overwrite = !this.state.overwrite) {
              addClass(this.display.cursorDiv, "CodeMirror-overwrite");
            } else {
              rmClass(this.display.cursorDiv, "CodeMirror-overwrite");
            }
            signal(this, "overwriteToggle", this, this.state.overwrite);
          },
          hasFocus: function() {
            return this.display.input.getField() == activeElt(doc2(this));
          },
          isReadOnly: function() {
            return !!(this.options.readOnly || this.doc.cantEdit);
          },
          scrollTo: methodOp(function(x, y) {
            scrollToCoords(this, x, y);
          }),
          getScrollInfo: function() {
            var scroller = this.display.scroller;
            return {
              left: scroller.scrollLeft,
              top: scroller.scrollTop,
              height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
              width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
              clientHeight: displayHeight(this),
              clientWidth: displayWidth(this)
            };
          },
          scrollIntoView: methodOp(function(range2, margin) {
            if (range2 == null) {
              range2 = { from: this.doc.sel.primary().head, to: null };
              if (margin == null) {
                margin = this.options.cursorScrollMargin;
              }
            } else if (typeof range2 == "number") {
              range2 = { from: Pos(range2, 0), to: null };
            } else if (range2.from == null) {
              range2 = { from: range2, to: null };
            }
            if (!range2.to) {
              range2.to = range2.from;
            }
            range2.margin = margin || 0;
            if (range2.from.line != null) {
              scrollToRange(this, range2);
            } else {
              scrollToCoordsRange(this, range2.from, range2.to, range2.margin);
            }
          }),
          setSize: methodOp(function(width, height) {
            var this$1$1 = this;
            var interpret = function(val) {
              return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
            };
            if (width != null) {
              this.display.wrapper.style.width = interpret(width);
            }
            if (height != null) {
              this.display.wrapper.style.height = interpret(height);
            }
            if (this.options.lineWrapping) {
              clearLineMeasurementCache(this);
            }
            var lineNo2 = this.display.viewFrom;
            this.doc.iter(lineNo2, this.display.viewTo, function(line) {
              if (line.widgets) {
                for (var i2 = 0; i2 < line.widgets.length; i2++) {
                  if (line.widgets[i2].noHScroll) {
                    regLineChange(this$1$1, lineNo2, "widget");
                    break;
                  }
                }
              }
              ++lineNo2;
            });
            this.curOp.forceUpdate = true;
            signal(this, "refresh", this);
          }),
          operation: function(f) {
            return runInOp(this, f);
          },
          startOperation: function() {
            return startOperation(this);
          },
          endOperation: function() {
            return endOperation(this);
          },
          refresh: methodOp(function() {
            var oldHeight = this.display.cachedTextHeight;
            regChange(this);
            this.curOp.forceUpdate = true;
            clearCaches(this);
            scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop);
            updateGutterSpace(this.display);
            if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > 0.5 || this.options.lineWrapping) {
              estimateLineHeights(this);
            }
            signal(this, "refresh", this);
          }),
          swapDoc: methodOp(function(doc3) {
            var old = this.doc;
            old.cm = null;
            if (this.state.selectingText) {
              this.state.selectingText();
            }
            attachDoc(this, doc3);
            clearCaches(this);
            this.display.input.reset();
            scrollToCoords(this, doc3.scrollLeft, doc3.scrollTop);
            this.curOp.forceScroll = true;
            signalLater(this, "swapDoc", this, old);
            return old;
          }),
          phrase: function(phraseText) {
            var phrases = this.options.phrases;
            return phrases && Object.prototype.hasOwnProperty.call(phrases, phraseText) ? phrases[phraseText] : phraseText;
          },
          getInputField: function() {
            return this.display.input.getField();
          },
          getWrapperElement: function() {
            return this.display.wrapper;
          },
          getScrollerElement: function() {
            return this.display.scroller;
          },
          getGutterElement: function() {
            return this.display.gutters;
          }
        };
        eventMixin(CodeMirror3);
        CodeMirror3.registerHelper = function(type, name, value) {
          if (!helpers.hasOwnProperty(type)) {
            helpers[type] = CodeMirror3[type] = { _global: [] };
          }
          helpers[type][name] = value;
        };
        CodeMirror3.registerGlobalHelper = function(type, name, predicate, value) {
          CodeMirror3.registerHelper(type, name, value);
          helpers[type]._global.push({ pred: predicate, val: value });
        };
      }
      function findPosH(doc3, pos, dir, unit, visually) {
        var oldPos = pos;
        var origDir = dir;
        var lineObj = getLine(doc3, pos.line);
        var lineDir = visually && doc3.direction == "rtl" ? -dir : dir;
        function findNextLine() {
          var l = pos.line + lineDir;
          if (l < doc3.first || l >= doc3.first + doc3.size) {
            return false;
          }
          pos = new Pos(l, pos.ch, pos.sticky);
          return lineObj = getLine(doc3, l);
        }
        function moveOnce(boundToLine) {
          var next;
          if (unit == "codepoint") {
            var ch = lineObj.text.charCodeAt(pos.ch + (dir > 0 ? 0 : -1));
            if (isNaN(ch)) {
              next = null;
            } else {
              var astral = dir > 0 ? ch >= 55296 && ch < 56320 : ch >= 56320 && ch < 57343;
              next = new Pos(pos.line, Math.max(0, Math.min(lineObj.text.length, pos.ch + dir * (astral ? 2 : 1))), -dir);
            }
          } else if (visually) {
            next = moveVisually(doc3.cm, lineObj, pos, dir);
          } else {
            next = moveLogically(lineObj, pos, dir);
          }
          if (next == null) {
            if (!boundToLine && findNextLine()) {
              pos = endOfLine(visually, doc3.cm, lineObj, pos.line, lineDir);
            } else {
              return false;
            }
          } else {
            pos = next;
          }
          return true;
        }
        if (unit == "char" || unit == "codepoint") {
          moveOnce();
        } else if (unit == "column") {
          moveOnce(true);
        } else if (unit == "word" || unit == "group") {
          var sawType = null, group = unit == "group";
          var helper = doc3.cm && doc3.cm.getHelper(pos, "wordChars");
          for (var first = true; ; first = false) {
            if (dir < 0 && !moveOnce(!first)) {
              break;
            }
            var cur = lineObj.text.charAt(pos.ch) || "\n";
            var type = isWordChar(cur, helper) ? "w" : group && cur == "\n" ? "n" : !group || /\s/.test(cur) ? null : "p";
            if (group && !first && !type) {
              type = "s";
            }
            if (sawType && sawType != type) {
              if (dir < 0) {
                dir = 1;
                moveOnce();
                pos.sticky = "after";
              }
              break;
            }
            if (type) {
              sawType = type;
            }
            if (dir > 0 && !moveOnce(!first)) {
              break;
            }
          }
        }
        var result = skipAtomic(doc3, pos, oldPos, origDir, true);
        if (equalCursorPos(oldPos, result)) {
          result.hitSide = true;
        }
        return result;
      }
      function findPosV(cm, pos, dir, unit) {
        var doc3 = cm.doc, x = pos.left, y;
        if (unit == "page") {
          var pageSize = Math.min(cm.display.wrapper.clientHeight, win(cm).innerHeight || doc3(cm).documentElement.clientHeight);
          var moveAmount = Math.max(pageSize - 0.5 * textHeight(cm.display), 3);
          y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount;
        } else if (unit == "line") {
          y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
        }
        var target;
        for (; ; ) {
          target = coordsChar(cm, x, y);
          if (!target.outside) {
            break;
          }
          if (dir < 0 ? y <= 0 : y >= doc3.height) {
            target.hitSide = true;
            break;
          }
          y += dir * 5;
        }
        return target;
      }
      var ContentEditableInput = function(cm) {
        this.cm = cm;
        this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
        this.polling = new Delayed();
        this.composing = null;
        this.gracePeriod = false;
        this.readDOMTimeout = null;
      };
      ContentEditableInput.prototype.init = function(display) {
        var this$1$1 = this;
        var input = this, cm = input.cm;
        var div = input.div = display.lineDiv;
        div.contentEditable = true;
        disableBrowserMagic(div, cm.options.spellcheck, cm.options.autocorrect, cm.options.autocapitalize);
        function belongsToInput(e) {
          for (var t = e.target; t; t = t.parentNode) {
            if (t == div) {
              return true;
            }
            if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) {
              break;
            }
          }
          return false;
        }
        on(div, "paste", function(e) {
          if (!belongsToInput(e) || signalDOMEvent(cm, e) || handlePaste(e, cm)) {
            return;
          }
          if (ie_version <= 11) {
            setTimeout(operation(cm, function() {
              return this$1$1.updateFromDOM();
            }), 20);
          }
        });
        on(div, "compositionstart", function(e) {
          this$1$1.composing = { data: e.data, done: false };
        });
        on(div, "compositionupdate", function(e) {
          if (!this$1$1.composing) {
            this$1$1.composing = { data: e.data, done: false };
          }
        });
        on(div, "compositionend", function(e) {
          if (this$1$1.composing) {
            if (e.data != this$1$1.composing.data) {
              this$1$1.readFromDOMSoon();
            }
            this$1$1.composing.done = true;
          }
        });
        on(div, "touchstart", function() {
          return input.forceCompositionEnd();
        });
        on(div, "input", function() {
          if (!this$1$1.composing) {
            this$1$1.readFromDOMSoon();
          }
        });
        function onCopyCut(e) {
          if (!belongsToInput(e) || signalDOMEvent(cm, e)) {
            return;
          }
          if (cm.somethingSelected()) {
            setLastCopied({ lineWise: false, text: cm.getSelections() });
            if (e.type == "cut") {
              cm.replaceSelection("", null, "cut");
            }
          } else if (!cm.options.lineWiseCopyCut) {
            return;
          } else {
            var ranges = copyableRanges(cm);
            setLastCopied({ lineWise: true, text: ranges.text });
            if (e.type == "cut") {
              cm.operation(function() {
                cm.setSelections(ranges.ranges, 0, sel_dontScroll);
                cm.replaceSelection("", null, "cut");
              });
            }
          }
          if (e.clipboardData) {
            e.clipboardData.clearData();
            var content = lastCopied.text.join("\n");
            e.clipboardData.setData("Text", content);
            if (e.clipboardData.getData("Text") == content) {
              e.preventDefault();
              return;
            }
          }
          var kludge = hiddenTextarea(), te = kludge.firstChild;
          disableBrowserMagic(te);
          cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
          te.value = lastCopied.text.join("\n");
          var hadFocus = activeElt(div.ownerDocument);
          selectInput(te);
          setTimeout(function() {
            cm.display.lineSpace.removeChild(kludge);
            hadFocus.focus();
            if (hadFocus == div) {
              input.showPrimarySelection();
            }
          }, 50);
        }
        on(div, "copy", onCopyCut);
        on(div, "cut", onCopyCut);
      };
      ContentEditableInput.prototype.screenReaderLabelChanged = function(label) {
        if (label) {
          this.div.setAttribute("aria-label", label);
        } else {
          this.div.removeAttribute("aria-label");
        }
      };
      ContentEditableInput.prototype.prepareSelection = function() {
        var result = prepareSelection(this.cm, false);
        result.focus = activeElt(this.div.ownerDocument) == this.div;
        return result;
      };
      ContentEditableInput.prototype.showSelection = function(info, takeFocus) {
        if (!info || !this.cm.display.view.length) {
          return;
        }
        if (info.focus || takeFocus) {
          this.showPrimarySelection();
        }
        this.showMultipleSelections(info);
      };
      ContentEditableInput.prototype.getSelection = function() {
        return this.cm.display.wrapper.ownerDocument.getSelection();
      };
      ContentEditableInput.prototype.showPrimarySelection = function() {
        var sel = this.getSelection(), cm = this.cm, prim = cm.doc.sel.primary();
        var from2 = prim.from(), to = prim.to();
        if (cm.display.viewTo == cm.display.viewFrom || from2.line >= cm.display.viewTo || to.line < cm.display.viewFrom) {
          sel.removeAllRanges();
          return;
        }
        var curAnchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
        var curFocus = domToPos(cm, sel.focusNode, sel.focusOffset);
        if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad && cmp(minPos(curAnchor, curFocus), from2) == 0 && cmp(maxPos(curAnchor, curFocus), to) == 0) {
          return;
        }
        var view = cm.display.view;
        var start = from2.line >= cm.display.viewFrom && posToDOM(cm, from2) || { node: view[0].measure.map[2], offset: 0 };
        var end = to.line < cm.display.viewTo && posToDOM(cm, to);
        if (!end) {
          var measure = view[view.length - 1].measure;
          var map3 = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
          end = { node: map3[map3.length - 1], offset: map3[map3.length - 2] - map3[map3.length - 3] };
        }
        if (!start || !end) {
          sel.removeAllRanges();
          return;
        }
        var old = sel.rangeCount && sel.getRangeAt(0), rng;
        try {
          rng = range(start.node, start.offset, end.offset, end.node);
        } catch (e) {
        }
        if (rng) {
          if (!gecko && cm.state.focused) {
            sel.collapse(start.node, start.offset);
            if (!rng.collapsed) {
              sel.removeAllRanges();
              sel.addRange(rng);
            }
          } else {
            sel.removeAllRanges();
            sel.addRange(rng);
          }
          if (old && sel.anchorNode == null) {
            sel.addRange(old);
          } else if (gecko) {
            this.startGracePeriod();
          }
        }
        this.rememberSelection();
      };
      ContentEditableInput.prototype.startGracePeriod = function() {
        var this$1$1 = this;
        clearTimeout(this.gracePeriod);
        this.gracePeriod = setTimeout(function() {
          this$1$1.gracePeriod = false;
          if (this$1$1.selectionChanged()) {
            this$1$1.cm.operation(function() {
              return this$1$1.cm.curOp.selectionChanged = true;
            });
          }
        }, 20);
      };
      ContentEditableInput.prototype.showMultipleSelections = function(info) {
        removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
        removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
      };
      ContentEditableInput.prototype.rememberSelection = function() {
        var sel = this.getSelection();
        this.lastAnchorNode = sel.anchorNode;
        this.lastAnchorOffset = sel.anchorOffset;
        this.lastFocusNode = sel.focusNode;
        this.lastFocusOffset = sel.focusOffset;
      };
      ContentEditableInput.prototype.selectionInEditor = function() {
        var sel = this.getSelection();
        if (!sel.rangeCount) {
          return false;
        }
        var node = sel.getRangeAt(0).commonAncestorContainer;
        return contains(this.div, node);
      };
      ContentEditableInput.prototype.focus = function() {
        if (this.cm.options.readOnly != "nocursor") {
          if (!this.selectionInEditor() || activeElt(this.div.ownerDocument) != this.div) {
            this.showSelection(this.prepareSelection(), true);
          }
          this.div.focus();
        }
      };
      ContentEditableInput.prototype.blur = function() {
        this.div.blur();
      };
      ContentEditableInput.prototype.getField = function() {
        return this.div;
      };
      ContentEditableInput.prototype.supportsTouch = function() {
        return true;
      };
      ContentEditableInput.prototype.receivedFocus = function() {
        var this$1$1 = this;
        var input = this;
        if (this.selectionInEditor()) {
          setTimeout(function() {
            return this$1$1.pollSelection();
          }, 20);
        } else {
          runInOp(this.cm, function() {
            return input.cm.curOp.selectionChanged = true;
          });
        }
        function poll() {
          if (input.cm.state.focused) {
            input.pollSelection();
            input.polling.set(input.cm.options.pollInterval, poll);
          }
        }
        this.polling.set(this.cm.options.pollInterval, poll);
      };
      ContentEditableInput.prototype.selectionChanged = function() {
        var sel = this.getSelection();
        return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset || sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset;
      };
      ContentEditableInput.prototype.pollSelection = function() {
        if (this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged()) {
          return;
        }
        var sel = this.getSelection(), cm = this.cm;
        if (android && chrome && this.cm.display.gutterSpecs.length && isInGutter(sel.anchorNode)) {
          this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs });
          this.blur();
          this.focus();
          return;
        }
        if (this.composing) {
          return;
        }
        this.rememberSelection();
        var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
        var head = domToPos(cm, sel.focusNode, sel.focusOffset);
        if (anchor && head) {
          runInOp(cm, function() {
            setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
            if (anchor.bad || head.bad) {
              cm.curOp.selectionChanged = true;
            }
          });
        }
      };
      ContentEditableInput.prototype.pollContent = function() {
        if (this.readDOMTimeout != null) {
          clearTimeout(this.readDOMTimeout);
          this.readDOMTimeout = null;
        }
        var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
        var from2 = sel.from(), to = sel.to();
        if (from2.ch == 0 && from2.line > cm.firstLine()) {
          from2 = Pos(from2.line - 1, getLine(cm.doc, from2.line - 1).length);
        }
        if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine()) {
          to = Pos(to.line + 1, 0);
        }
        if (from2.line < display.viewFrom || to.line > display.viewTo - 1) {
          return false;
        }
        var fromIndex, fromLine, fromNode;
        if (from2.line == display.viewFrom || (fromIndex = findViewIndex(cm, from2.line)) == 0) {
          fromLine = lineNo(display.view[0].line);
          fromNode = display.view[0].node;
        } else {
          fromLine = lineNo(display.view[fromIndex].line);
          fromNode = display.view[fromIndex - 1].node.nextSibling;
        }
        var toIndex = findViewIndex(cm, to.line);
        var toLine, toNode;
        if (toIndex == display.view.length - 1) {
          toLine = display.viewTo - 1;
          toNode = display.lineDiv.lastChild;
        } else {
          toLine = lineNo(display.view[toIndex + 1].line) - 1;
          toNode = display.view[toIndex + 1].node.previousSibling;
        }
        if (!fromNode) {
          return false;
        }
        var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
        var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
        while (newText.length > 1 && oldText.length > 1) {
          if (lst(newText) == lst(oldText)) {
            newText.pop();
            oldText.pop();
            toLine--;
          } else if (newText[0] == oldText[0]) {
            newText.shift();
            oldText.shift();
            fromLine++;
          } else {
            break;
          }
        }
        var cutFront = 0, cutEnd = 0;
        var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
        while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront)) {
          ++cutFront;
        }
        var newBot = lst(newText), oldBot = lst(oldText);
        var maxCutEnd = Math.min(
          newBot.length - (newText.length == 1 ? cutFront : 0),
          oldBot.length - (oldText.length == 1 ? cutFront : 0)
        );
        while (cutEnd < maxCutEnd && newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
          ++cutEnd;
        }
        if (newText.length == 1 && oldText.length == 1 && fromLine == from2.line) {
          while (cutFront && cutFront > from2.ch && newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
            cutFront--;
            cutEnd++;
          }
        }
        newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "");
        newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "");
        var chFrom = Pos(fromLine, cutFront);
        var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
        if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
          replaceRange(cm.doc, newText, chFrom, chTo, "+input");
          return true;
        }
      };
      ContentEditableInput.prototype.ensurePolled = function() {
        this.forceCompositionEnd();
      };
      ContentEditableInput.prototype.reset = function() {
        this.forceCompositionEnd();
      };
      ContentEditableInput.prototype.forceCompositionEnd = function() {
        if (!this.composing) {
          return;
        }
        clearTimeout(this.readDOMTimeout);
        this.composing = null;
        this.updateFromDOM();
        this.div.blur();
        this.div.focus();
      };
      ContentEditableInput.prototype.readFromDOMSoon = function() {
        var this$1$1 = this;
        if (this.readDOMTimeout != null) {
          return;
        }
        this.readDOMTimeout = setTimeout(function() {
          this$1$1.readDOMTimeout = null;
          if (this$1$1.composing) {
            if (this$1$1.composing.done) {
              this$1$1.composing = null;
            } else {
              return;
            }
          }
          this$1$1.updateFromDOM();
        }, 80);
      };
      ContentEditableInput.prototype.updateFromDOM = function() {
        var this$1$1 = this;
        if (this.cm.isReadOnly() || !this.pollContent()) {
          runInOp(this.cm, function() {
            return regChange(this$1$1.cm);
          });
        }
      };
      ContentEditableInput.prototype.setUneditable = function(node) {
        node.contentEditable = "false";
      };
      ContentEditableInput.prototype.onKeyPress = function(e) {
        if (e.charCode == 0 || this.composing) {
          return;
        }
        e.preventDefault();
        if (!this.cm.isReadOnly()) {
          operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0);
        }
      };
      ContentEditableInput.prototype.readOnlyChanged = function(val) {
        this.div.contentEditable = String(val != "nocursor");
      };
      ContentEditableInput.prototype.onContextMenu = function() {
      };
      ContentEditableInput.prototype.resetPosition = function() {
      };
      ContentEditableInput.prototype.needsContentAttribute = true;
      function posToDOM(cm, pos) {
        var view = findViewForLine(cm, pos.line);
        if (!view || view.hidden) {
          return null;
        }
        var line = getLine(cm.doc, pos.line);
        var info = mapFromLineView(view, line, pos.line);
        var order = getOrder(line, cm.doc.direction), side = "left";
        if (order) {
          var partPos = getBidiPartAt(order, pos.ch);
          side = partPos % 2 ? "right" : "left";
        }
        var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
        result.offset = result.collapse == "right" ? result.end : result.start;
        return result;
      }
      function isInGutter(node) {
        for (var scan = node; scan; scan = scan.parentNode) {
          if (/CodeMirror-gutter-wrapper/.test(scan.className)) {
            return true;
          }
        }
        return false;
      }
      function badPos(pos, bad) {
        if (bad) {
          pos.bad = true;
        }
        return pos;
      }
      function domTextBetween(cm, from2, to, fromLine, toLine) {
        var text2 = "", closing = false, lineSep = cm.doc.lineSeparator(), extraLinebreak = false;
        function recognizeMarker(id) {
          return function(marker) {
            return marker.id == id;
          };
        }
        function close() {
          if (closing) {
            text2 += lineSep;
            if (extraLinebreak) {
              text2 += lineSep;
            }
            closing = extraLinebreak = false;
          }
        }
        function addText(str) {
          if (str) {
            close();
            text2 += str;
          }
        }
        function walk(node) {
          if (node.nodeType == 1) {
            var cmText = node.getAttribute("cm-text");
            if (cmText) {
              addText(cmText);
              return;
            }
            var markerID = node.getAttribute("cm-marker"), range2;
            if (markerID) {
              var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
              if (found.length && (range2 = found[0].find(0))) {
                addText(getBetween(cm.doc, range2.from, range2.to).join(lineSep));
              }
              return;
            }
            if (node.getAttribute("contenteditable") == "false") {
              return;
            }
            var isBlock = /^(pre|div|p|li|table|br)$/i.test(node.nodeName);
            if (!/^br$/i.test(node.nodeName) && node.textContent.length == 0) {
              return;
            }
            if (isBlock) {
              close();
            }
            for (var i2 = 0; i2 < node.childNodes.length; i2++) {
              walk(node.childNodes[i2]);
            }
            if (/^(pre|p)$/i.test(node.nodeName)) {
              extraLinebreak = true;
            }
            if (isBlock) {
              closing = true;
            }
          } else if (node.nodeType == 3) {
            addText(node.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
          }
        }
        for (; ; ) {
          walk(from2);
          if (from2 == to) {
            break;
          }
          from2 = from2.nextSibling;
          extraLinebreak = false;
        }
        return text2;
      }
      function domToPos(cm, node, offset) {
        var lineNode;
        if (node == cm.display.lineDiv) {
          lineNode = cm.display.lineDiv.childNodes[offset];
          if (!lineNode) {
            return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true);
          }
          node = null;
          offset = 0;
        } else {
          for (lineNode = node; ; lineNode = lineNode.parentNode) {
            if (!lineNode || lineNode == cm.display.lineDiv) {
              return null;
            }
            if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) {
              break;
            }
          }
        }
        for (var i2 = 0; i2 < cm.display.view.length; i2++) {
          var lineView = cm.display.view[i2];
          if (lineView.node == lineNode) {
            return locateNodeInLineView(lineView, node, offset);
          }
        }
      }
      function locateNodeInLineView(lineView, node, offset) {
        var wrapper = lineView.text.firstChild, bad = false;
        if (!node || !contains(wrapper, node)) {
          return badPos(Pos(lineNo(lineView.line), 0), true);
        }
        if (node == wrapper) {
          bad = true;
          node = wrapper.childNodes[offset];
          offset = 0;
          if (!node) {
            var line = lineView.rest ? lst(lineView.rest) : lineView.line;
            return badPos(Pos(lineNo(line), line.text.length), bad);
          }
        }
        var textNode = node.nodeType == 3 ? node : null, topNode = node;
        if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
          textNode = node.firstChild;
          if (offset) {
            offset = textNode.nodeValue.length;
          }
        }
        while (topNode.parentNode != wrapper) {
          topNode = topNode.parentNode;
        }
        var measure = lineView.measure, maps = measure.maps;
        function find2(textNode2, topNode2, offset2) {
          for (var i2 = -1; i2 < (maps ? maps.length : 0); i2++) {
            var map3 = i2 < 0 ? measure.map : maps[i2];
            for (var j = 0; j < map3.length; j += 3) {
              var curNode = map3[j + 2];
              if (curNode == textNode2 || curNode == topNode2) {
                var line2 = lineNo(i2 < 0 ? lineView.line : lineView.rest[i2]);
                var ch = map3[j] + offset2;
                if (offset2 < 0 || curNode != textNode2) {
                  ch = map3[j + (offset2 ? 1 : 0)];
                }
                return Pos(line2, ch);
              }
            }
          }
        }
        var found = find2(textNode, topNode, offset);
        if (found) {
          return badPos(found, bad);
        }
        for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
          found = find2(after, after.firstChild, 0);
          if (found) {
            return badPos(Pos(found.line, found.ch - dist), bad);
          } else {
            dist += after.textContent.length;
          }
        }
        for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
          found = find2(before, before.firstChild, -1);
          if (found) {
            return badPos(Pos(found.line, found.ch + dist$1), bad);
          } else {
            dist$1 += before.textContent.length;
          }
        }
      }
      var TextareaInput = function(cm) {
        this.cm = cm;
        this.prevInput = "";
        this.pollingFast = false;
        this.polling = new Delayed();
        this.hasSelection = false;
        this.composing = null;
        this.resetting = false;
      };
      TextareaInput.prototype.init = function(display) {
        var this$1$1 = this;
        var input = this, cm = this.cm;
        this.createField(display);
        var te = this.textarea;
        display.wrapper.insertBefore(this.wrapper, display.wrapper.firstChild);
        if (ios) {
          te.style.width = "0px";
        }
        on(te, "input", function() {
          if (ie && ie_version >= 9 && this$1$1.hasSelection) {
            this$1$1.hasSelection = null;
          }
          input.poll();
        });
        on(te, "paste", function(e) {
          if (signalDOMEvent(cm, e) || handlePaste(e, cm)) {
            return;
          }
          cm.state.pasteIncoming = +new Date();
          input.fastPoll();
        });
        function prepareCopyCut(e) {
          if (signalDOMEvent(cm, e)) {
            return;
          }
          if (cm.somethingSelected()) {
            setLastCopied({ lineWise: false, text: cm.getSelections() });
          } else if (!cm.options.lineWiseCopyCut) {
            return;
          } else {
            var ranges = copyableRanges(cm);
            setLastCopied({ lineWise: true, text: ranges.text });
            if (e.type == "cut") {
              cm.setSelections(ranges.ranges, null, sel_dontScroll);
            } else {
              input.prevInput = "";
              te.value = ranges.text.join("\n");
              selectInput(te);
            }
          }
          if (e.type == "cut") {
            cm.state.cutIncoming = +new Date();
          }
        }
        on(te, "cut", prepareCopyCut);
        on(te, "copy", prepareCopyCut);
        on(display.scroller, "paste", function(e) {
          if (eventInWidget(display, e) || signalDOMEvent(cm, e)) {
            return;
          }
          if (!te.dispatchEvent) {
            cm.state.pasteIncoming = +new Date();
            input.focus();
            return;
          }
          var event = new Event("paste");
          event.clipboardData = e.clipboardData;
          te.dispatchEvent(event);
        });
        on(display.lineSpace, "selectstart", function(e) {
          if (!eventInWidget(display, e)) {
            e_preventDefault(e);
          }
        });
        on(te, "compositionstart", function() {
          var start = cm.getCursor("from");
          if (input.composing) {
            input.composing.range.clear();
          }
          input.composing = {
            start,
            range: cm.markText(start, cm.getCursor("to"), { className: "CodeMirror-composing" })
          };
        });
        on(te, "compositionend", function() {
          if (input.composing) {
            input.poll();
            input.composing.range.clear();
            input.composing = null;
          }
        });
      };
      TextareaInput.prototype.createField = function(_display) {
        this.wrapper = hiddenTextarea();
        this.textarea = this.wrapper.firstChild;
        var opts = this.cm.options;
        disableBrowserMagic(this.textarea, opts.spellcheck, opts.autocorrect, opts.autocapitalize);
      };
      TextareaInput.prototype.screenReaderLabelChanged = function(label) {
        if (label) {
          this.textarea.setAttribute("aria-label", label);
        } else {
          this.textarea.removeAttribute("aria-label");
        }
      };
      TextareaInput.prototype.prepareSelection = function() {
        var cm = this.cm, display = cm.display, doc3 = cm.doc;
        var result = prepareSelection(cm);
        if (cm.options.moveInputWithCursor) {
          var headPos = cursorCoords(cm, doc3.sel.primary().head, "div");
          var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
          result.teTop = Math.max(0, Math.min(
            display.wrapper.clientHeight - 10,
            headPos.top + lineOff.top - wrapOff.top
          ));
          result.teLeft = Math.max(0, Math.min(
            display.wrapper.clientWidth - 10,
            headPos.left + lineOff.left - wrapOff.left
          ));
        }
        return result;
      };
      TextareaInput.prototype.showSelection = function(drawn) {
        var cm = this.cm, display = cm.display;
        removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
        removeChildrenAndAdd(display.selectionDiv, drawn.selection);
        if (drawn.teTop != null) {
          this.wrapper.style.top = drawn.teTop + "px";
          this.wrapper.style.left = drawn.teLeft + "px";
        }
      };
      TextareaInput.prototype.reset = function(typing) {
        if (this.contextMenuPending || this.composing && typing) {
          return;
        }
        var cm = this.cm;
        this.resetting = true;
        if (cm.somethingSelected()) {
          this.prevInput = "";
          var content = cm.getSelection();
          this.textarea.value = content;
          if (cm.state.focused) {
            selectInput(this.textarea);
          }
          if (ie && ie_version >= 9) {
            this.hasSelection = content;
          }
        } else if (!typing) {
          this.prevInput = this.textarea.value = "";
          if (ie && ie_version >= 9) {
            this.hasSelection = null;
          }
        }
        this.resetting = false;
      };
      TextareaInput.prototype.getField = function() {
        return this.textarea;
      };
      TextareaInput.prototype.supportsTouch = function() {
        return false;
      };
      TextareaInput.prototype.focus = function() {
        if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt(this.textarea.ownerDocument) != this.textarea)) {
          try {
            this.textarea.focus();
          } catch (e) {
          }
        }
      };
      TextareaInput.prototype.blur = function() {
        this.textarea.blur();
      };
      TextareaInput.prototype.resetPosition = function() {
        this.wrapper.style.top = this.wrapper.style.left = 0;
      };
      TextareaInput.prototype.receivedFocus = function() {
        this.slowPoll();
      };
      TextareaInput.prototype.slowPoll = function() {
        var this$1$1 = this;
        if (this.pollingFast) {
          return;
        }
        this.polling.set(this.cm.options.pollInterval, function() {
          this$1$1.poll();
          if (this$1$1.cm.state.focused) {
            this$1$1.slowPoll();
          }
        });
      };
      TextareaInput.prototype.fastPoll = function() {
        var missed = false, input = this;
        input.pollingFast = true;
        function p() {
          var changed = input.poll();
          if (!changed && !missed) {
            missed = true;
            input.polling.set(60, p);
          } else {
            input.pollingFast = false;
            input.slowPoll();
          }
        }
        input.polling.set(20, p);
      };
      TextareaInput.prototype.poll = function() {
        var this$1$1 = this;
        var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
        if (this.contextMenuPending || this.resetting || !cm.state.focused || hasSelection(input) && !prevInput && !this.composing || cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq) {
          return false;
        }
        var text2 = input.value;
        if (text2 == prevInput && !cm.somethingSelected()) {
          return false;
        }
        if (ie && ie_version >= 9 && this.hasSelection === text2 || mac && /[\uf700-\uf7ff]/.test(text2)) {
          cm.display.input.reset();
          return false;
        }
        if (cm.doc.sel == cm.display.selForContextMenu) {
          var first = text2.charCodeAt(0);
          if (first == 8203 && !prevInput) {
            prevInput = "​";
          }
          if (first == 8666) {
            this.reset();
            return this.cm.execCommand("undo");
          }
        }
        var same = 0, l = Math.min(prevInput.length, text2.length);
        while (same < l && prevInput.charCodeAt(same) == text2.charCodeAt(same)) {
          ++same;
        }
        runInOp(cm, function() {
          applyTextInput(
            cm,
            text2.slice(same),
            prevInput.length - same,
            null,
            this$1$1.composing ? "*compose" : null
          );
          if (text2.length > 1e3 || text2.indexOf("\n") > -1) {
            input.value = this$1$1.prevInput = "";
          } else {
            this$1$1.prevInput = text2;
          }
          if (this$1$1.composing) {
            this$1$1.composing.range.clear();
            this$1$1.composing.range = cm.markText(
              this$1$1.composing.start,
              cm.getCursor("to"),
              { className: "CodeMirror-composing" }
            );
          }
        });
        return true;
      };
      TextareaInput.prototype.ensurePolled = function() {
        if (this.pollingFast && this.poll()) {
          this.pollingFast = false;
        }
      };
      TextareaInput.prototype.onKeyPress = function() {
        if (ie && ie_version >= 9) {
          this.hasSelection = null;
        }
        this.fastPoll();
      };
      TextareaInput.prototype.onContextMenu = function(e) {
        var input = this, cm = input.cm, display = cm.display, te = input.textarea;
        if (input.contextMenuPending) {
          input.contextMenuPending();
        }
        var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
        if (!pos || presto) {
          return;
        }
        var reset = cm.options.resetSelectionOnContextMenu;
        if (reset && cm.doc.sel.contains(pos) == -1) {
          operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll);
        }
        var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText;
        var wrapperBox = input.wrapper.offsetParent.getBoundingClientRect();
        input.wrapper.style.cssText = "position: static";
        te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
        var oldScrollY;
        if (webkit) {
          oldScrollY = te.ownerDocument.defaultView.scrollY;
        }
        display.input.focus();
        if (webkit) {
          te.ownerDocument.defaultView.scrollTo(null, oldScrollY);
        }
        display.input.reset();
        if (!cm.somethingSelected()) {
          te.value = input.prevInput = " ";
        }
        input.contextMenuPending = rehide;
        display.selForContextMenu = cm.doc.sel;
        clearTimeout(display.detectingSelectAll);
        function prepareSelectAllHack() {
          if (te.selectionStart != null) {
            var selected = cm.somethingSelected();
            var extval = "​" + (selected ? te.value : "");
            te.value = "⇚";
            te.value = extval;
            input.prevInput = selected ? "" : "​";
            te.selectionStart = 1;
            te.selectionEnd = extval.length;
            display.selForContextMenu = cm.doc.sel;
          }
        }
        function rehide() {
          if (input.contextMenuPending != rehide) {
            return;
          }
          input.contextMenuPending = false;
          input.wrapper.style.cssText = oldWrapperCSS;
          te.style.cssText = oldCSS;
          if (ie && ie_version < 9) {
            display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos);
          }
          if (te.selectionStart != null) {
            if (!ie || ie && ie_version < 9) {
              prepareSelectAllHack();
            }
            var i2 = 0, poll = function() {
              if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 && te.selectionEnd > 0 && input.prevInput == "​") {
                operation(cm, selectAll)(cm);
              } else if (i2++ < 10) {
                display.detectingSelectAll = setTimeout(poll, 500);
              } else {
                display.selForContextMenu = null;
                display.input.reset();
              }
            };
            display.detectingSelectAll = setTimeout(poll, 200);
          }
        }
        if (ie && ie_version >= 9) {
          prepareSelectAllHack();
        }
        if (captureRightClick) {
          e_stop(e);
          var mouseup = function() {
            off(window, "mouseup", mouseup);
            setTimeout(rehide, 20);
          };
          on(window, "mouseup", mouseup);
        } else {
          setTimeout(rehide, 50);
        }
      };
      TextareaInput.prototype.readOnlyChanged = function(val) {
        if (!val) {
          this.reset();
        }
        this.textarea.disabled = val == "nocursor";
        this.textarea.readOnly = !!val;
      };
      TextareaInput.prototype.setUneditable = function() {
      };
      TextareaInput.prototype.needsContentAttribute = false;
      function fromTextArea(textarea, options) {
        options = options ? copyObj(options) : {};
        options.value = textarea.value;
        if (!options.tabindex && textarea.tabIndex) {
          options.tabindex = textarea.tabIndex;
        }
        if (!options.placeholder && textarea.placeholder) {
          options.placeholder = textarea.placeholder;
        }
        if (options.autofocus == null) {
          var hasFocus = activeElt(textarea.ownerDocument);
          options.autofocus = hasFocus == textarea || textarea.getAttribute("autofocus") != null && hasFocus == document.body;
        }
        function save() {
          textarea.value = cm.getValue();
        }
        var realSubmit;
        if (textarea.form) {
          on(textarea.form, "submit", save);
          if (!options.leaveSubmitMethodAlone) {
            var form = textarea.form;
            realSubmit = form.submit;
            try {
              var wrappedSubmit = form.submit = function() {
                save();
                form.submit = realSubmit;
                form.submit();
                form.submit = wrappedSubmit;
              };
            } catch (e) {
            }
          }
        }
        options.finishInit = function(cm2) {
          cm2.save = save;
          cm2.getTextArea = function() {
            return textarea;
          };
          cm2.toTextArea = function() {
            cm2.toTextArea = isNaN;
            save();
            textarea.parentNode.removeChild(cm2.getWrapperElement());
            textarea.style.display = "";
            if (textarea.form) {
              off(textarea.form, "submit", save);
              if (!options.leaveSubmitMethodAlone && typeof textarea.form.submit == "function") {
                textarea.form.submit = realSubmit;
              }
            }
          };
        };
        textarea.style.display = "none";
        var cm = CodeMirror2(
          function(node) {
            return textarea.parentNode.insertBefore(node, textarea.nextSibling);
          },
          options
        );
        return cm;
      }
      function addLegacyProps(CodeMirror3) {
        CodeMirror3.off = off;
        CodeMirror3.on = on;
        CodeMirror3.wheelEventPixels = wheelEventPixels;
        CodeMirror3.Doc = Doc2;
        CodeMirror3.splitLines = splitLinesAuto;
        CodeMirror3.countColumn = countColumn;
        CodeMirror3.findColumn = findColumn;
        CodeMirror3.isWordChar = isWordCharBasic;
        CodeMirror3.Pass = Pass;
        CodeMirror3.signal = signal;
        CodeMirror3.Line = Line;
        CodeMirror3.changeEnd = changeEnd;
        CodeMirror3.scrollbarModel = scrollbarModel;
        CodeMirror3.Pos = Pos;
        CodeMirror3.cmpPos = cmp;
        CodeMirror3.modes = modes;
        CodeMirror3.mimeModes = mimeModes;
        CodeMirror3.resolveMode = resolveMode;
        CodeMirror3.getMode = getMode;
        CodeMirror3.modeExtensions = modeExtensions;
        CodeMirror3.extendMode = extendMode;
        CodeMirror3.copyState = copyState;
        CodeMirror3.startState = startState;
        CodeMirror3.innerMode = innerMode;
        CodeMirror3.commands = commands;
        CodeMirror3.keyMap = keyMap;
        CodeMirror3.keyName = keyName;
        CodeMirror3.isModifierKey = isModifierKey;
        CodeMirror3.lookupKey = lookupKey;
        CodeMirror3.normalizeKeyMap = normalizeKeyMap;
        CodeMirror3.StringStream = StringStream;
        CodeMirror3.SharedTextMarker = SharedTextMarker;
        CodeMirror3.TextMarker = TextMarker;
        CodeMirror3.LineWidget = LineWidget;
        CodeMirror3.e_preventDefault = e_preventDefault;
        CodeMirror3.e_stopPropagation = e_stopPropagation;
        CodeMirror3.e_stop = e_stop;
        CodeMirror3.addClass = addClass;
        CodeMirror3.contains = contains;
        CodeMirror3.rmClass = rmClass;
        CodeMirror3.keyNames = keyNames;
      }
      defineOptions(CodeMirror2);
      addEditorMethods(CodeMirror2);
      var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
      for (var prop in Doc2.prototype) {
        if (Doc2.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0) {
          CodeMirror2.prototype[prop] = function(method) {
            return function() {
              return method.apply(this.doc, arguments);
            };
          }(Doc2.prototype[prop]);
        }
      }
      eventMixin(Doc2);
      CodeMirror2.inputStyles = { "textarea": TextareaInput, "contenteditable": ContentEditableInput };
      CodeMirror2.defineMode = function(name) {
        if (!CodeMirror2.defaults.mode && name != "null") {
          CodeMirror2.defaults.mode = name;
        }
        defineMode.apply(this, arguments);
      };
      CodeMirror2.defineMIME = defineMIME;
      CodeMirror2.defineMode("null", function() {
        return { token: function(stream) {
          return stream.skipToEnd();
        } };
      });
      CodeMirror2.defineMIME("text/plain", "null");
      CodeMirror2.defineExtension = function(name, func) {
        CodeMirror2.prototype[name] = func;
      };
      CodeMirror2.defineDocExtension = function(name, func) {
        Doc2.prototype[name] = func;
      };
      CodeMirror2.fromTextArea = fromTextArea;
      addLegacyProps(CodeMirror2);
      CodeMirror2.version = "5.65.11";
      return CodeMirror2;
    });
  })(codemirror);
  return codemirrorExports$1;
}
(function(module, exports) {
  (function(mod) {
    mod(requireCodemirror());
  })(function(CodeMirror2) {
    CodeMirror2.defineMode("javascript", function(config, parserConfig) {
      var indentUnit = config.indentUnit;
      var statementIndent = parserConfig.statementIndent;
      var jsonldMode = parserConfig.jsonld;
      var jsonMode = parserConfig.json || jsonldMode;
      var trackScope = parserConfig.trackScope !== false;
      var isTS = parserConfig.typescript;
      var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;
      var keywords = function() {
        function kw(type2) {
          return { type: type2, style: "keyword" };
        }
        var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c"), D = kw("keyword d");
        var operator = kw("operator"), atom = { type: "atom", style: "atom" };
        return {
          "if": kw("if"),
          "while": A,
          "with": A,
          "else": B,
          "do": B,
          "try": B,
          "finally": B,
          "return": D,
          "break": D,
          "continue": D,
          "new": kw("new"),
          "delete": C,
          "void": C,
          "throw": C,
          "debugger": kw("debugger"),
          "var": kw("var"),
          "const": kw("var"),
          "let": kw("var"),
          "function": kw("function"),
          "catch": kw("catch"),
          "for": kw("for"),
          "switch": kw("switch"),
          "case": kw("case"),
          "default": kw("default"),
          "in": operator,
          "typeof": operator,
          "instanceof": operator,
          "true": atom,
          "false": atom,
          "null": atom,
          "undefined": atom,
          "NaN": atom,
          "Infinity": atom,
          "this": kw("this"),
          "class": kw("class"),
          "super": kw("atom"),
          "yield": C,
          "export": kw("export"),
          "import": kw("import"),
          "extends": C,
          "await": C
        };
      }();
      var isOperatorChar = /[+\-*&%=<>!?|~^@]/;
      var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
      function readRegexp(stream) {
        var escaped = false, next, inSet = false;
        while ((next = stream.next()) != null) {
          if (!escaped) {
            if (next == "/" && !inSet)
              return;
            if (next == "[")
              inSet = true;
            else if (inSet && next == "]")
              inSet = false;
          }
          escaped = !escaped && next == "\\";
        }
      }
      var type, content;
      function ret(tp, style, cont2) {
        type = tp;
        content = cont2;
        return style;
      }
      function tokenBase(stream, state) {
        var ch = stream.next();
        if (ch == '"' || ch == "'") {
          state.tokenize = tokenString(ch);
          return state.tokenize(stream, state);
        } else if (ch == "." && stream.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) {
          return ret("number", "number");
        } else if (ch == "." && stream.match("..")) {
          return ret("spread", "meta");
        } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
          return ret(ch);
        } else if (ch == "=" && stream.eat(">")) {
          return ret("=>", "operator");
        } else if (ch == "0" && stream.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) {
          return ret("number", "number");
        } else if (/\d/.test(ch)) {
          stream.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/);
          return ret("number", "number");
        } else if (ch == "/") {
          if (stream.eat("*")) {
            state.tokenize = tokenComment;
            return tokenComment(stream, state);
          } else if (stream.eat("/")) {
            stream.skipToEnd();
            return ret("comment", "comment");
          } else if (expressionAllowed(stream, state, 1)) {
            readRegexp(stream);
            stream.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);
            return ret("regexp", "string-2");
          } else {
            stream.eat("=");
            return ret("operator", "operator", stream.current());
          }
        } else if (ch == "`") {
          state.tokenize = tokenQuasi;
          return tokenQuasi(stream, state);
        } else if (ch == "#" && stream.peek() == "!") {
          stream.skipToEnd();
          return ret("meta", "meta");
        } else if (ch == "#" && stream.eatWhile(wordRE)) {
          return ret("variable", "property");
        } else if (ch == "<" && stream.match("!--") || ch == "-" && stream.match("->") && !/\S/.test(stream.string.slice(0, stream.start))) {
          stream.skipToEnd();
          return ret("comment", "comment");
        } else if (isOperatorChar.test(ch)) {
          if (ch != ">" || !state.lexical || state.lexical.type != ">") {
            if (stream.eat("=")) {
              if (ch == "!" || ch == "=")
                stream.eat("=");
            } else if (/[<>*+\-|&?]/.test(ch)) {
              stream.eat(ch);
              if (ch == ">")
                stream.eat(ch);
            }
          }
          if (ch == "?" && stream.eat("."))
            return ret(".");
          return ret("operator", "operator", stream.current());
        } else if (wordRE.test(ch)) {
          stream.eatWhile(wordRE);
          var word = stream.current();
          if (state.lastType != ".") {
            if (keywords.propertyIsEnumerable(word)) {
              var kw = keywords[word];
              return ret(kw.type, kw.style, word);
            }
            if (word == "async" && stream.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, false))
              return ret("async", "keyword", word);
          }
          return ret("variable", "variable", word);
        }
      }
      function tokenString(quote) {
        return function(stream, state) {
          var escaped = false, next;
          if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)) {
            state.tokenize = tokenBase;
            return ret("jsonld-keyword", "meta");
          }
          while ((next = stream.next()) != null) {
            if (next == quote && !escaped)
              break;
            escaped = !escaped && next == "\\";
          }
          if (!escaped)
            state.tokenize = tokenBase;
          return ret("string", "string");
        };
      }
      function tokenComment(stream, state) {
        var maybeEnd = false, ch;
        while (ch = stream.next()) {
          if (ch == "/" && maybeEnd) {
            state.tokenize = tokenBase;
            break;
          }
          maybeEnd = ch == "*";
        }
        return ret("comment", "comment");
      }
      function tokenQuasi(stream, state) {
        var escaped = false, next;
        while ((next = stream.next()) != null) {
          if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
            state.tokenize = tokenBase;
            break;
          }
          escaped = !escaped && next == "\\";
        }
        return ret("quasi", "string-2", stream.current());
      }
      var brackets = "([{}])";
      function findFatArrow(stream, state) {
        if (state.fatArrowAt)
          state.fatArrowAt = null;
        var arrow = stream.string.indexOf("=>", stream.start);
        if (arrow < 0)
          return;
        if (isTS) {
          var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow));
          if (m)
            arrow = m.index;
        }
        var depth = 0, sawSomething = false;
        for (var pos = arrow - 1; pos >= 0; --pos) {
          var ch = stream.string.charAt(pos);
          var bracket = brackets.indexOf(ch);
          if (bracket >= 0 && bracket < 3) {
            if (!depth) {
              ++pos;
              break;
            }
            if (--depth == 0) {
              if (ch == "(")
                sawSomething = true;
              break;
            }
          } else if (bracket >= 3 && bracket < 6) {
            ++depth;
          } else if (wordRE.test(ch)) {
            sawSomething = true;
          } else if (/["'\/`]/.test(ch)) {
            for (; ; --pos) {
              if (pos == 0)
                return;
              var next = stream.string.charAt(pos - 1);
              if (next == ch && stream.string.charAt(pos - 2) != "\\") {
                pos--;
                break;
              }
            }
          } else if (sawSomething && !depth) {
            ++pos;
            break;
          }
        }
        if (sawSomething && !depth)
          state.fatArrowAt = pos;
      }
      var atomicTypes = {
        "atom": true,
        "number": true,
        "variable": true,
        "string": true,
        "regexp": true,
        "this": true,
        "import": true,
        "jsonld-keyword": true
      };
      function JSLexical(indented, column, type2, align, prev, info) {
        this.indented = indented;
        this.column = column;
        this.type = type2;
        this.prev = prev;
        this.info = info;
        if (align != null)
          this.align = align;
      }
      function inScope(state, varname) {
        if (!trackScope)
          return false;
        for (var v = state.localVars; v; v = v.next)
          if (v.name == varname)
            return true;
        for (var cx2 = state.context; cx2; cx2 = cx2.prev) {
          for (var v = cx2.vars; v; v = v.next)
            if (v.name == varname)
              return true;
        }
      }
      function parseJS(state, style, type2, content2, stream) {
        var cc = state.cc;
        cx.state = state;
        cx.stream = stream;
        cx.marked = null, cx.cc = cc;
        cx.style = style;
        if (!state.lexical.hasOwnProperty("align"))
          state.lexical.align = true;
        while (true) {
          var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
          if (combinator(type2, content2)) {
            while (cc.length && cc[cc.length - 1].lex)
              cc.pop()();
            if (cx.marked)
              return cx.marked;
            if (type2 == "variable" && inScope(state, content2))
              return "variable-2";
            return style;
          }
        }
      }
      var cx = { state: null, column: null, marked: null, cc: null };
      function pass() {
        for (var i = arguments.length - 1; i >= 0; i--)
          cx.cc.push(arguments[i]);
      }
      function cont() {
        pass.apply(null, arguments);
        return true;
      }
      function inList(name, list) {
        for (var v = list; v; v = v.next)
          if (v.name == name)
            return true;
        return false;
      }
      function register(varname) {
        var state = cx.state;
        cx.marked = "def";
        if (!trackScope)
          return;
        if (state.context) {
          if (state.lexical.info == "var" && state.context && state.context.block) {
            var newContext = registerVarScoped(varname, state.context);
            if (newContext != null) {
              state.context = newContext;
              return;
            }
          } else if (!inList(varname, state.localVars)) {
            state.localVars = new Var(varname, state.localVars);
            return;
          }
        }
        if (parserConfig.globalVars && !inList(varname, state.globalVars))
          state.globalVars = new Var(varname, state.globalVars);
      }
      function registerVarScoped(varname, context) {
        if (!context) {
          return null;
        } else if (context.block) {
          var inner = registerVarScoped(varname, context.prev);
          if (!inner)
            return null;
          if (inner == context.prev)
            return context;
          return new Context(inner, context.vars, true);
        } else if (inList(varname, context.vars)) {
          return context;
        } else {
          return new Context(context.prev, new Var(varname, context.vars), false);
        }
      }
      function isModifier(name) {
        return name == "public" || name == "private" || name == "protected" || name == "abstract" || name == "readonly";
      }
      function Context(prev, vars, block2) {
        this.prev = prev;
        this.vars = vars;
        this.block = block2;
      }
      function Var(name, next) {
        this.name = name;
        this.next = next;
      }
      var defaultVars = new Var("this", new Var("arguments", null));
      function pushcontext() {
        cx.state.context = new Context(cx.state.context, cx.state.localVars, false);
        cx.state.localVars = defaultVars;
      }
      function pushblockcontext() {
        cx.state.context = new Context(cx.state.context, cx.state.localVars, true);
        cx.state.localVars = null;
      }
      pushcontext.lex = pushblockcontext.lex = true;
      function popcontext() {
        cx.state.localVars = cx.state.context.vars;
        cx.state.context = cx.state.context.prev;
      }
      popcontext.lex = true;
      function pushlex(type2, info) {
        var result = function() {
          var state = cx.state, indent = state.indented;
          if (state.lexical.type == "stat")
            indent = state.lexical.indented;
          else
            for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
              indent = outer.indented;
          state.lexical = new JSLexical(indent, cx.stream.column(), type2, null, state.lexical, info);
        };
        result.lex = true;
        return result;
      }
      function poplex() {
        var state = cx.state;
        if (state.lexical.prev) {
          if (state.lexical.type == ")")
            state.indented = state.lexical.indented;
          state.lexical = state.lexical.prev;
        }
      }
      poplex.lex = true;
      function expect(wanted) {
        function exp(type2) {
          if (type2 == wanted)
            return cont();
          else if (wanted == ";" || type2 == "}" || type2 == ")" || type2 == "]")
            return pass();
          else
            return cont(exp);
        }
        return exp;
      }
      function statement(type2, value) {
        if (type2 == "var")
          return cont(pushlex("vardef", value), vardef, expect(";"), poplex);
        if (type2 == "keyword a")
          return cont(pushlex("form"), parenExpr, statement, poplex);
        if (type2 == "keyword b")
          return cont(pushlex("form"), statement, poplex);
        if (type2 == "keyword d")
          return cx.stream.match(/^\s*$/, false) ? cont() : cont(pushlex("stat"), maybeexpression, expect(";"), poplex);
        if (type2 == "debugger")
          return cont(expect(";"));
        if (type2 == "{")
          return cont(pushlex("}"), pushblockcontext, block, poplex, popcontext);
        if (type2 == ";")
          return cont();
        if (type2 == "if") {
          if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
            cx.state.cc.pop()();
          return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
        }
        if (type2 == "function")
          return cont(functiondef);
        if (type2 == "for")
          return cont(pushlex("form"), pushblockcontext, forspec, statement, popcontext, poplex);
        if (type2 == "class" || isTS && value == "interface") {
          cx.marked = "keyword";
          return cont(pushlex("form", type2 == "class" ? type2 : value), className, poplex);
        }
        if (type2 == "variable") {
          if (isTS && value == "declare") {
            cx.marked = "keyword";
            return cont(statement);
          } else if (isTS && (value == "module" || value == "enum" || value == "type") && cx.stream.match(/^\s*\w/, false)) {
            cx.marked = "keyword";
            if (value == "enum")
              return cont(enumdef);
            else if (value == "type")
              return cont(typename, expect("operator"), typeexpr, expect(";"));
            else
              return cont(pushlex("form"), pattern, expect("{"), pushlex("}"), block, poplex, poplex);
          } else if (isTS && value == "namespace") {
            cx.marked = "keyword";
            return cont(pushlex("form"), expression, statement, poplex);
          } else if (isTS && value == "abstract") {
            cx.marked = "keyword";
            return cont(statement);
          } else {
            return cont(pushlex("stat"), maybelabel);
          }
        }
        if (type2 == "switch")
          return cont(
            pushlex("form"),
            parenExpr,
            expect("{"),
            pushlex("}", "switch"),
            pushblockcontext,
            block,
            poplex,
            poplex,
            popcontext
          );
        if (type2 == "case")
          return cont(expression, expect(":"));
        if (type2 == "default")
          return cont(expect(":"));
        if (type2 == "catch")
          return cont(pushlex("form"), pushcontext, maybeCatchBinding, statement, poplex, popcontext);
        if (type2 == "export")
          return cont(pushlex("stat"), afterExport, poplex);
        if (type2 == "import")
          return cont(pushlex("stat"), afterImport, poplex);
        if (type2 == "async")
          return cont(statement);
        if (value == "@")
          return cont(expression, statement);
        return pass(pushlex("stat"), expression, expect(";"), poplex);
      }
      function maybeCatchBinding(type2) {
        if (type2 == "(")
          return cont(funarg, expect(")"));
      }
      function expression(type2, value) {
        return expressionInner(type2, value, false);
      }
      function expressionNoComma(type2, value) {
        return expressionInner(type2, value, true);
      }
      function parenExpr(type2) {
        if (type2 != "(")
          return pass();
        return cont(pushlex(")"), maybeexpression, expect(")"), poplex);
      }
      function expressionInner(type2, value, noComma) {
        if (cx.state.fatArrowAt == cx.stream.start) {
          var body = noComma ? arrowBodyNoComma : arrowBody;
          if (type2 == "(")
            return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, expect("=>"), body, popcontext);
          else if (type2 == "variable")
            return pass(pushcontext, pattern, expect("=>"), body, popcontext);
        }
        var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
        if (atomicTypes.hasOwnProperty(type2))
          return cont(maybeop);
        if (type2 == "function")
          return cont(functiondef, maybeop);
        if (type2 == "class" || isTS && value == "interface") {
          cx.marked = "keyword";
          return cont(pushlex("form"), classExpression, poplex);
        }
        if (type2 == "keyword c" || type2 == "async")
          return cont(noComma ? expressionNoComma : expression);
        if (type2 == "(")
          return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
        if (type2 == "operator" || type2 == "spread")
          return cont(noComma ? expressionNoComma : expression);
        if (type2 == "[")
          return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
        if (type2 == "{")
          return contCommasep(objprop, "}", null, maybeop);
        if (type2 == "quasi")
          return pass(quasi, maybeop);
        if (type2 == "new")
          return cont(maybeTarget(noComma));
        return cont();
      }
      function maybeexpression(type2) {
        if (type2.match(/[;\}\)\],]/))
          return pass();
        return pass(expression);
      }
      function maybeoperatorComma(type2, value) {
        if (type2 == ",")
          return cont(maybeexpression);
        return maybeoperatorNoComma(type2, value, false);
      }
      function maybeoperatorNoComma(type2, value, noComma) {
        var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
        var expr = noComma == false ? expression : expressionNoComma;
        if (type2 == "=>")
          return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
        if (type2 == "operator") {
          if (/\+\+|--/.test(value) || isTS && value == "!")
            return cont(me);
          if (isTS && value == "<" && cx.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, false))
            return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, me);
          if (value == "?")
            return cont(expression, expect(":"), expr);
          return cont(expr);
        }
        if (type2 == "quasi") {
          return pass(quasi, me);
        }
        if (type2 == ";")
          return;
        if (type2 == "(")
          return contCommasep(expressionNoComma, ")", "call", me);
        if (type2 == ".")
          return cont(property, me);
        if (type2 == "[")
          return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
        if (isTS && value == "as") {
          cx.marked = "keyword";
          return cont(typeexpr, me);
        }
        if (type2 == "regexp") {
          cx.state.lastType = cx.marked = "operator";
          cx.stream.backUp(cx.stream.pos - cx.stream.start - 1);
          return cont(expr);
        }
      }
      function quasi(type2, value) {
        if (type2 != "quasi")
          return pass();
        if (value.slice(value.length - 2) != "${")
          return cont(quasi);
        return cont(maybeexpression, continueQuasi);
      }
      function continueQuasi(type2) {
        if (type2 == "}") {
          cx.marked = "string-2";
          cx.state.tokenize = tokenQuasi;
          return cont(quasi);
        }
      }
      function arrowBody(type2) {
        findFatArrow(cx.stream, cx.state);
        return pass(type2 == "{" ? statement : expression);
      }
      function arrowBodyNoComma(type2) {
        findFatArrow(cx.stream, cx.state);
        return pass(type2 == "{" ? statement : expressionNoComma);
      }
      function maybeTarget(noComma) {
        return function(type2) {
          if (type2 == ".")
            return cont(noComma ? targetNoComma : target);
          else if (type2 == "variable" && isTS)
            return cont(maybeTypeArgs, noComma ? maybeoperatorNoComma : maybeoperatorComma);
          else
            return pass(noComma ? expressionNoComma : expression);
        };
      }
      function target(_, value) {
        if (value == "target") {
          cx.marked = "keyword";
          return cont(maybeoperatorComma);
        }
      }
      function targetNoComma(_, value) {
        if (value == "target") {
          cx.marked = "keyword";
          return cont(maybeoperatorNoComma);
        }
      }
      function maybelabel(type2) {
        if (type2 == ":")
          return cont(poplex, statement);
        return pass(maybeoperatorComma, expect(";"), poplex);
      }
      function property(type2) {
        if (type2 == "variable") {
          cx.marked = "property";
          return cont();
        }
      }
      function objprop(type2, value) {
        if (type2 == "async") {
          cx.marked = "property";
          return cont(objprop);
        } else if (type2 == "variable" || cx.style == "keyword") {
          cx.marked = "property";
          if (value == "get" || value == "set")
            return cont(getterSetter);
          var m;
          if (isTS && cx.state.fatArrowAt == cx.stream.start && (m = cx.stream.match(/^\s*:\s*/, false)))
            cx.state.fatArrowAt = cx.stream.pos + m[0].length;
          return cont(afterprop);
        } else if (type2 == "number" || type2 == "string") {
          cx.marked = jsonldMode ? "property" : cx.style + " property";
          return cont(afterprop);
        } else if (type2 == "jsonld-keyword") {
          return cont(afterprop);
        } else if (isTS && isModifier(value)) {
          cx.marked = "keyword";
          return cont(objprop);
        } else if (type2 == "[") {
          return cont(expression, maybetype, expect("]"), afterprop);
        } else if (type2 == "spread") {
          return cont(expressionNoComma, afterprop);
        } else if (value == "*") {
          cx.marked = "keyword";
          return cont(objprop);
        } else if (type2 == ":") {
          return pass(afterprop);
        }
      }
      function getterSetter(type2) {
        if (type2 != "variable")
          return pass(afterprop);
        cx.marked = "property";
        return cont(functiondef);
      }
      function afterprop(type2) {
        if (type2 == ":")
          return cont(expressionNoComma);
        if (type2 == "(")
          return pass(functiondef);
      }
      function commasep(what, end, sep) {
        function proceed(type2, value) {
          if (sep ? sep.indexOf(type2) > -1 : type2 == ",") {
            var lex = cx.state.lexical;
            if (lex.info == "call")
              lex.pos = (lex.pos || 0) + 1;
            return cont(function(type3, value2) {
              if (type3 == end || value2 == end)
                return pass();
              return pass(what);
            }, proceed);
          }
          if (type2 == end || value == end)
            return cont();
          if (sep && sep.indexOf(";") > -1)
            return pass(what);
          return cont(expect(end));
        }
        return function(type2, value) {
          if (type2 == end || value == end)
            return cont();
          return pass(what, proceed);
        };
      }
      function contCommasep(what, end, info) {
        for (var i = 3; i < arguments.length; i++)
          cx.cc.push(arguments[i]);
        return cont(pushlex(end, info), commasep(what, end), poplex);
      }
      function block(type2) {
        if (type2 == "}")
          return cont();
        return pass(statement, block);
      }
      function maybetype(type2, value) {
        if (isTS) {
          if (type2 == ":")
            return cont(typeexpr);
          if (value == "?")
            return cont(maybetype);
        }
      }
      function maybetypeOrIn(type2, value) {
        if (isTS && (type2 == ":" || value == "in"))
          return cont(typeexpr);
      }
      function mayberettype(type2) {
        if (isTS && type2 == ":") {
          if (cx.stream.match(/^\s*\w+\s+is\b/, false))
            return cont(expression, isKW, typeexpr);
          else
            return cont(typeexpr);
        }
      }
      function isKW(_, value) {
        if (value == "is") {
          cx.marked = "keyword";
          return cont();
        }
      }
      function typeexpr(type2, value) {
        if (value == "keyof" || value == "typeof" || value == "infer" || value == "readonly") {
          cx.marked = "keyword";
          return cont(value == "typeof" ? expressionNoComma : typeexpr);
        }
        if (type2 == "variable" || value == "void") {
          cx.marked = "type";
          return cont(afterType);
        }
        if (value == "|" || value == "&")
          return cont(typeexpr);
        if (type2 == "string" || type2 == "number" || type2 == "atom")
          return cont(afterType);
        if (type2 == "[")
          return cont(pushlex("]"), commasep(typeexpr, "]", ","), poplex, afterType);
        if (type2 == "{")
          return cont(pushlex("}"), typeprops, poplex, afterType);
        if (type2 == "(")
          return cont(commasep(typearg, ")"), maybeReturnType, afterType);
        if (type2 == "<")
          return cont(commasep(typeexpr, ">"), typeexpr);
        if (type2 == "quasi") {
          return pass(quasiType, afterType);
        }
      }
      function maybeReturnType(type2) {
        if (type2 == "=>")
          return cont(typeexpr);
      }
      function typeprops(type2) {
        if (type2.match(/[\}\)\]]/))
          return cont();
        if (type2 == "," || type2 == ";")
          return cont(typeprops);
        return pass(typeprop, typeprops);
      }
      function typeprop(type2, value) {
        if (type2 == "variable" || cx.style == "keyword") {
          cx.marked = "property";
          return cont(typeprop);
        } else if (value == "?" || type2 == "number" || type2 == "string") {
          return cont(typeprop);
        } else if (type2 == ":") {
          return cont(typeexpr);
        } else if (type2 == "[") {
          return cont(expect("variable"), maybetypeOrIn, expect("]"), typeprop);
        } else if (type2 == "(") {
          return pass(functiondecl, typeprop);
        } else if (!type2.match(/[;\}\)\],]/)) {
          return cont();
        }
      }
      function quasiType(type2, value) {
        if (type2 != "quasi")
          return pass();
        if (value.slice(value.length - 2) != "${")
          return cont(quasiType);
        return cont(typeexpr, continueQuasiType);
      }
      function continueQuasiType(type2) {
        if (type2 == "}") {
          cx.marked = "string-2";
          cx.state.tokenize = tokenQuasi;
          return cont(quasiType);
        }
      }
      function typearg(type2, value) {
        if (type2 == "variable" && cx.stream.match(/^\s*[?:]/, false) || value == "?")
          return cont(typearg);
        if (type2 == ":")
          return cont(typeexpr);
        if (type2 == "spread")
          return cont(typearg);
        return pass(typeexpr);
      }
      function afterType(type2, value) {
        if (value == "<")
          return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType);
        if (value == "|" || type2 == "." || value == "&")
          return cont(typeexpr);
        if (type2 == "[")
          return cont(typeexpr, expect("]"), afterType);
        if (value == "extends" || value == "implements") {
          cx.marked = "keyword";
          return cont(typeexpr);
        }
        if (value == "?")
          return cont(typeexpr, expect(":"), typeexpr);
      }
      function maybeTypeArgs(_, value) {
        if (value == "<")
          return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType);
      }
      function typeparam() {
        return pass(typeexpr, maybeTypeDefault);
      }
      function maybeTypeDefault(_, value) {
        if (value == "=")
          return cont(typeexpr);
      }
      function vardef(_, value) {
        if (value == "enum") {
          cx.marked = "keyword";
          return cont(enumdef);
        }
        return pass(pattern, maybetype, maybeAssign, vardefCont);
      }
      function pattern(type2, value) {
        if (isTS && isModifier(value)) {
          cx.marked = "keyword";
          return cont(pattern);
        }
        if (type2 == "variable") {
          register(value);
          return cont();
        }
        if (type2 == "spread")
          return cont(pattern);
        if (type2 == "[")
          return contCommasep(eltpattern, "]");
        if (type2 == "{")
          return contCommasep(proppattern, "}");
      }
      function proppattern(type2, value) {
        if (type2 == "variable" && !cx.stream.match(/^\s*:/, false)) {
          register(value);
          return cont(maybeAssign);
        }
        if (type2 == "variable")
          cx.marked = "property";
        if (type2 == "spread")
          return cont(pattern);
        if (type2 == "}")
          return pass();
        if (type2 == "[")
          return cont(expression, expect("]"), expect(":"), proppattern);
        return cont(expect(":"), pattern, maybeAssign);
      }
      function eltpattern() {
        return pass(pattern, maybeAssign);
      }
      function maybeAssign(_type, value) {
        if (value == "=")
          return cont(expressionNoComma);
      }
      function vardefCont(type2) {
        if (type2 == ",")
          return cont(vardef);
      }
      function maybeelse(type2, value) {
        if (type2 == "keyword b" && value == "else")
          return cont(pushlex("form", "else"), statement, poplex);
      }
      function forspec(type2, value) {
        if (value == "await")
          return cont(forspec);
        if (type2 == "(")
          return cont(pushlex(")"), forspec1, poplex);
      }
      function forspec1(type2) {
        if (type2 == "var")
          return cont(vardef, forspec2);
        if (type2 == "variable")
          return cont(forspec2);
        return pass(forspec2);
      }
      function forspec2(type2, value) {
        if (type2 == ")")
          return cont();
        if (type2 == ";")
          return cont(forspec2);
        if (value == "in" || value == "of") {
          cx.marked = "keyword";
          return cont(expression, forspec2);
        }
        return pass(expression, forspec2);
      }
      function functiondef(type2, value) {
        if (value == "*") {
          cx.marked = "keyword";
          return cont(functiondef);
        }
        if (type2 == "variable") {
          register(value);
          return cont(functiondef);
        }
        if (type2 == "(")
          return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, statement, popcontext);
        if (isTS && value == "<")
          return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondef);
      }
      function functiondecl(type2, value) {
        if (value == "*") {
          cx.marked = "keyword";
          return cont(functiondecl);
        }
        if (type2 == "variable") {
          register(value);
          return cont(functiondecl);
        }
        if (type2 == "(")
          return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, popcontext);
        if (isTS && value == "<")
          return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondecl);
      }
      function typename(type2, value) {
        if (type2 == "keyword" || type2 == "variable") {
          cx.marked = "type";
          return cont(typename);
        } else if (value == "<") {
          return cont(pushlex(">"), commasep(typeparam, ">"), poplex);
        }
      }
      function funarg(type2, value) {
        if (value == "@")
          cont(expression, funarg);
        if (type2 == "spread")
          return cont(funarg);
        if (isTS && isModifier(value)) {
          cx.marked = "keyword";
          return cont(funarg);
        }
        if (isTS && type2 == "this")
          return cont(maybetype, maybeAssign);
        return pass(pattern, maybetype, maybeAssign);
      }
      function classExpression(type2, value) {
        if (type2 == "variable")
          return className(type2, value);
        return classNameAfter(type2, value);
      }
      function className(type2, value) {
        if (type2 == "variable") {
          register(value);
          return cont(classNameAfter);
        }
      }
      function classNameAfter(type2, value) {
        if (value == "<")
          return cont(pushlex(">"), commasep(typeparam, ">"), poplex, classNameAfter);
        if (value == "extends" || value == "implements" || isTS && type2 == ",") {
          if (value == "implements")
            cx.marked = "keyword";
          return cont(isTS ? typeexpr : expression, classNameAfter);
        }
        if (type2 == "{")
          return cont(pushlex("}"), classBody, poplex);
      }
      function classBody(type2, value) {
        if (type2 == "async" || type2 == "variable" && (value == "static" || value == "get" || value == "set" || isTS && isModifier(value)) && cx.stream.match(/^\s+#?[\w$\xa1-\uffff]/, false)) {
          cx.marked = "keyword";
          return cont(classBody);
        }
        if (type2 == "variable" || cx.style == "keyword") {
          cx.marked = "property";
          return cont(classfield, classBody);
        }
        if (type2 == "number" || type2 == "string")
          return cont(classfield, classBody);
        if (type2 == "[")
          return cont(expression, maybetype, expect("]"), classfield, classBody);
        if (value == "*") {
          cx.marked = "keyword";
          return cont(classBody);
        }
        if (isTS && type2 == "(")
          return pass(functiondecl, classBody);
        if (type2 == ";" || type2 == ",")
          return cont(classBody);
        if (type2 == "}")
          return cont();
        if (value == "@")
          return cont(expression, classBody);
      }
      function classfield(type2, value) {
        if (value == "!")
          return cont(classfield);
        if (value == "?")
          return cont(classfield);
        if (type2 == ":")
          return cont(typeexpr, maybeAssign);
        if (value == "=")
          return cont(expressionNoComma);
        var context = cx.state.lexical.prev, isInterface = context && context.info == "interface";
        return pass(isInterface ? functiondecl : functiondef);
      }
      function afterExport(type2, value) {
        if (value == "*") {
          cx.marked = "keyword";
          return cont(maybeFrom, expect(";"));
        }
        if (value == "default") {
          cx.marked = "keyword";
          return cont(expression, expect(";"));
        }
        if (type2 == "{")
          return cont(commasep(exportField, "}"), maybeFrom, expect(";"));
        return pass(statement);
      }
      function exportField(type2, value) {
        if (value == "as") {
          cx.marked = "keyword";
          return cont(expect("variable"));
        }
        if (type2 == "variable")
          return pass(expressionNoComma, exportField);
      }
      function afterImport(type2) {
        if (type2 == "string")
          return cont();
        if (type2 == "(")
          return pass(expression);
        if (type2 == ".")
          return pass(maybeoperatorComma);
        return pass(importSpec, maybeMoreImports, maybeFrom);
      }
      function importSpec(type2, value) {
        if (type2 == "{")
          return contCommasep(importSpec, "}");
        if (type2 == "variable")
          register(value);
        if (value == "*")
          cx.marked = "keyword";
        return cont(maybeAs);
      }
      function maybeMoreImports(type2) {
        if (type2 == ",")
          return cont(importSpec, maybeMoreImports);
      }
      function maybeAs(_type, value) {
        if (value == "as") {
          cx.marked = "keyword";
          return cont(importSpec);
        }
      }
      function maybeFrom(_type, value) {
        if (value == "from") {
          cx.marked = "keyword";
          return cont(expression);
        }
      }
      function arrayLiteral(type2) {
        if (type2 == "]")
          return cont();
        return pass(commasep(expressionNoComma, "]"));
      }
      function enumdef() {
        return pass(pushlex("form"), pattern, expect("{"), pushlex("}"), commasep(enummember, "}"), poplex, poplex);
      }
      function enummember() {
        return pass(pattern, maybeAssign);
      }
      function isContinuedStatement(state, textAfter) {
        return state.lastType == "operator" || state.lastType == "," || isOperatorChar.test(textAfter.charAt(0)) || /[,.]/.test(textAfter.charAt(0));
      }
      function expressionAllowed(stream, state, backUp) {
        return state.tokenize == tokenBase && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType) || state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0)));
      }
      return {
        startState: function(basecolumn) {
          var state = {
            tokenize: tokenBase,
            lastType: "sof",
            cc: [],
            lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
            localVars: parserConfig.localVars,
            context: parserConfig.localVars && new Context(null, null, false),
            indented: basecolumn || 0
          };
          if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
            state.globalVars = parserConfig.globalVars;
          return state;
        },
        token: function(stream, state) {
          if (stream.sol()) {
            if (!state.lexical.hasOwnProperty("align"))
              state.lexical.align = false;
            state.indented = stream.indentation();
            findFatArrow(stream, state);
          }
          if (state.tokenize != tokenComment && stream.eatSpace())
            return null;
          var style = state.tokenize(stream, state);
          if (type == "comment")
            return style;
          state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
          return parseJS(state, style, type, content, stream);
        },
        indent: function(state, textAfter) {
          if (state.tokenize == tokenComment || state.tokenize == tokenQuasi)
            return CodeMirror2.Pass;
          if (state.tokenize != tokenBase)
            return 0;
          var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top;
          if (!/^\s*else\b/.test(textAfter))
            for (var i = state.cc.length - 1; i >= 0; --i) {
              var c = state.cc[i];
              if (c == poplex)
                lexical = lexical.prev;
              else if (c != maybeelse && c != popcontext)
                break;
            }
          while ((lexical.type == "stat" || lexical.type == "form") && (firstChar == "}" || (top = state.cc[state.cc.length - 1]) && (top == maybeoperatorComma || top == maybeoperatorNoComma) && !/^[,\.=+\-*:?[\(]/.test(textAfter)))
            lexical = lexical.prev;
          if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
            lexical = lexical.prev;
          var type2 = lexical.type, closing = firstChar == type2;
          if (type2 == "vardef")
            return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info.length + 1 : 0);
          else if (type2 == "form" && firstChar == "{")
            return lexical.indented;
          else if (type2 == "form")
            return lexical.indented + indentUnit;
          else if (type2 == "stat")
            return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
          else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
            return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
          else if (lexical.align)
            return lexical.column + (closing ? 0 : 1);
          else
            return lexical.indented + (closing ? 0 : indentUnit);
        },
        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
        blockCommentStart: jsonMode ? null : "/*",
        blockCommentEnd: jsonMode ? null : "*/",
        blockCommentContinue: jsonMode ? null : " * ",
        lineComment: jsonMode ? null : "//",
        fold: "brace",
        closeBrackets: "()[]{}''\"\"``",
        helperType: jsonMode ? "json" : "javascript",
        jsonldMode,
        jsonMode,
        expressionAllowed,
        skipExpression: function(state) {
          parseJS(state, "atom", "atom", "true", new CodeMirror2.StringStream("", 2, null));
        }
      };
    });
    CodeMirror2.registerHelper("wordChars", "javascript", /[\w$]/);
    CodeMirror2.defineMIME("text/javascript", "javascript");
    CodeMirror2.defineMIME("text/ecmascript", "javascript");
    CodeMirror2.defineMIME("application/javascript", "javascript");
    CodeMirror2.defineMIME("application/x-javascript", "javascript");
    CodeMirror2.defineMIME("application/ecmascript", "javascript");
    CodeMirror2.defineMIME("application/json", { name: "javascript", json: true });
    CodeMirror2.defineMIME("application/x-json", { name: "javascript", json: true });
    CodeMirror2.defineMIME("application/manifest+json", { name: "javascript", json: true });
    CodeMirror2.defineMIME("application/ld+json", { name: "javascript", jsonld: true });
    CodeMirror2.defineMIME("text/typescript", { name: "javascript", typescript: true });
    CodeMirror2.defineMIME("application/typescript", { name: "javascript", typescript: true });
  });
})();
(function(module, exports) {
  (function(mod) {
    mod(requireCodemirror());
  })(function(CodeMirror2) {
    CodeMirror2.defineMode("css", function(config, parserConfig) {
      var inline = parserConfig.inline;
      if (!parserConfig.propertyKeywords)
        parserConfig = CodeMirror2.resolveMode("text/css");
      var indentUnit = config.indentUnit, tokenHooks = parserConfig.tokenHooks, documentTypes2 = parserConfig.documentTypes || {}, mediaTypes2 = parserConfig.mediaTypes || {}, mediaFeatures2 = parserConfig.mediaFeatures || {}, mediaValueKeywords2 = parserConfig.mediaValueKeywords || {}, propertyKeywords2 = parserConfig.propertyKeywords || {}, nonStandardPropertyKeywords2 = parserConfig.nonStandardPropertyKeywords || {}, fontProperties2 = parserConfig.fontProperties || {}, counterDescriptors2 = parserConfig.counterDescriptors || {}, colorKeywords2 = parserConfig.colorKeywords || {}, valueKeywords2 = parserConfig.valueKeywords || {}, allowNested = parserConfig.allowNested, lineComment = parserConfig.lineComment, supportsAtComponent = parserConfig.supportsAtComponent === true, highlightNonStandardPropertyKeywords = config.highlightNonStandardPropertyKeywords !== false;
      var type, override;
      function ret(style, tp) {
        type = tp;
        return style;
      }
      function tokenBase(stream, state) {
        var ch = stream.next();
        if (tokenHooks[ch]) {
          var result = tokenHooks[ch](stream, state);
          if (result !== false)
            return result;
        }
        if (ch == "@") {
          stream.eatWhile(/[\w\\\-]/);
          return ret("def", stream.current());
        } else if (ch == "=" || (ch == "~" || ch == "|") && stream.eat("=")) {
          return ret(null, "compare");
        } else if (ch == '"' || ch == "'") {
          state.tokenize = tokenString(ch);
          return state.tokenize(stream, state);
        } else if (ch == "#") {
          stream.eatWhile(/[\w\\\-]/);
          return ret("atom", "hash");
        } else if (ch == "!") {
          stream.match(/^\s*\w*/);
          return ret("keyword", "important");
        } else if (/\d/.test(ch) || ch == "." && stream.eat(/\d/)) {
          stream.eatWhile(/[\w.%]/);
          return ret("number", "unit");
        } else if (ch === "-") {
          if (/[\d.]/.test(stream.peek())) {
            stream.eatWhile(/[\w.%]/);
            return ret("number", "unit");
          } else if (stream.match(/^-[\w\\\-]*/)) {
            stream.eatWhile(/[\w\\\-]/);
            if (stream.match(/^\s*:/, false))
              return ret("variable-2", "variable-definition");
            return ret("variable-2", "variable");
          } else if (stream.match(/^\w+-/)) {
            return ret("meta", "meta");
          }
        } else if (/[,+>*\/]/.test(ch)) {
          return ret(null, "select-op");
        } else if (ch == "." && stream.match(/^-?[_a-z][_a-z0-9-]*/i)) {
          return ret("qualifier", "qualifier");
        } else if (/[:;{}\[\]\(\)]/.test(ch)) {
          return ret(null, ch);
        } else if (stream.match(/^[\w-.]+(?=\()/)) {
          if (/^(url(-prefix)?|domain|regexp)$/i.test(stream.current())) {
            state.tokenize = tokenParenthesized;
          }
          return ret("variable callee", "variable");
        } else if (/[\w\\\-]/.test(ch)) {
          stream.eatWhile(/[\w\\\-]/);
          return ret("property", "word");
        } else {
          return ret(null, null);
        }
      }
      function tokenString(quote) {
        return function(stream, state) {
          var escaped = false, ch;
          while ((ch = stream.next()) != null) {
            if (ch == quote && !escaped) {
              if (quote == ")")
                stream.backUp(1);
              break;
            }
            escaped = !escaped && ch == "\\";
          }
          if (ch == quote || !escaped && quote != ")")
            state.tokenize = null;
          return ret("string", "string");
        };
      }
      function tokenParenthesized(stream, state) {
        stream.next();
        if (!stream.match(/^\s*[\"\')]/, false))
          state.tokenize = tokenString(")");
        else
          state.tokenize = null;
        return ret(null, "(");
      }
      function Context(type2, indent, prev) {
        this.type = type2;
        this.indent = indent;
        this.prev = prev;
      }
      function pushContext(state, stream, type2, indent) {
        state.context = new Context(type2, stream.indentation() + (indent === false ? 0 : indentUnit), state.context);
        return type2;
      }
      function popContext(state) {
        if (state.context.prev)
          state.context = state.context.prev;
        return state.context.type;
      }
      function pass(type2, stream, state) {
        return states[state.context.type](type2, stream, state);
      }
      function popAndPass(type2, stream, state, n) {
        for (var i = n || 1; i > 0; i--)
          state.context = state.context.prev;
        return pass(type2, stream, state);
      }
      function wordAsValue(stream) {
        var word = stream.current().toLowerCase();
        if (valueKeywords2.hasOwnProperty(word))
          override = "atom";
        else if (colorKeywords2.hasOwnProperty(word))
          override = "keyword";
        else
          override = "variable";
      }
      var states = {};
      states.top = function(type2, stream, state) {
        if (type2 == "{") {
          return pushContext(state, stream, "block");
        } else if (type2 == "}" && state.context.prev) {
          return popContext(state);
        } else if (supportsAtComponent && /@component/i.test(type2)) {
          return pushContext(state, stream, "atComponentBlock");
        } else if (/^@(-moz-)?document$/i.test(type2)) {
          return pushContext(state, stream, "documentTypes");
        } else if (/^@(media|supports|(-moz-)?document|import)$/i.test(type2)) {
          return pushContext(state, stream, "atBlock");
        } else if (/^@(font-face|counter-style)/i.test(type2)) {
          state.stateArg = type2;
          return "restricted_atBlock_before";
        } else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(type2)) {
          return "keyframes";
        } else if (type2 && type2.charAt(0) == "@") {
          return pushContext(state, stream, "at");
        } else if (type2 == "hash") {
          override = "builtin";
        } else if (type2 == "word") {
          override = "tag";
        } else if (type2 == "variable-definition") {
          return "maybeprop";
        } else if (type2 == "interpolation") {
          return pushContext(state, stream, "interpolation");
        } else if (type2 == ":") {
          return "pseudo";
        } else if (allowNested && type2 == "(") {
          return pushContext(state, stream, "parens");
        }
        return state.context.type;
      };
      states.block = function(type2, stream, state) {
        if (type2 == "word") {
          var word = stream.current().toLowerCase();
          if (propertyKeywords2.hasOwnProperty(word)) {
            override = "property";
            return "maybeprop";
          } else if (nonStandardPropertyKeywords2.hasOwnProperty(word)) {
            override = highlightNonStandardPropertyKeywords ? "string-2" : "property";
            return "maybeprop";
          } else if (allowNested) {
            override = stream.match(/^\s*:(?:\s|$)/, false) ? "property" : "tag";
            return "block";
          } else {
            override += " error";
            return "maybeprop";
          }
        } else if (type2 == "meta") {
          return "block";
        } else if (!allowNested && (type2 == "hash" || type2 == "qualifier")) {
          override = "error";
          return "block";
        } else {
          return states.top(type2, stream, state);
        }
      };
      states.maybeprop = function(type2, stream, state) {
        if (type2 == ":")
          return pushContext(state, stream, "prop");
        return pass(type2, stream, state);
      };
      states.prop = function(type2, stream, state) {
        if (type2 == ";")
          return popContext(state);
        if (type2 == "{" && allowNested)
          return pushContext(state, stream, "propBlock");
        if (type2 == "}" || type2 == "{")
          return popAndPass(type2, stream, state);
        if (type2 == "(")
          return pushContext(state, stream, "parens");
        if (type2 == "hash" && !/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(stream.current())) {
          override += " error";
        } else if (type2 == "word") {
          wordAsValue(stream);
        } else if (type2 == "interpolation") {
          return pushContext(state, stream, "interpolation");
        }
        return "prop";
      };
      states.propBlock = function(type2, _stream, state) {
        if (type2 == "}")
          return popContext(state);
        if (type2 == "word") {
          override = "property";
          return "maybeprop";
        }
        return state.context.type;
      };
      states.parens = function(type2, stream, state) {
        if (type2 == "{" || type2 == "}")
          return popAndPass(type2, stream, state);
        if (type2 == ")")
          return popContext(state);
        if (type2 == "(")
          return pushContext(state, stream, "parens");
        if (type2 == "interpolation")
          return pushContext(state, stream, "interpolation");
        if (type2 == "word")
          wordAsValue(stream);
        return "parens";
      };
      states.pseudo = function(type2, stream, state) {
        if (type2 == "meta")
          return "pseudo";
        if (type2 == "word") {
          override = "variable-3";
          return state.context.type;
        }
        return pass(type2, stream, state);
      };
      states.documentTypes = function(type2, stream, state) {
        if (type2 == "word" && documentTypes2.hasOwnProperty(stream.current())) {
          override = "tag";
          return state.context.type;
        } else {
          return states.atBlock(type2, stream, state);
        }
      };
      states.atBlock = function(type2, stream, state) {
        if (type2 == "(")
          return pushContext(state, stream, "atBlock_parens");
        if (type2 == "}" || type2 == ";")
          return popAndPass(type2, stream, state);
        if (type2 == "{")
          return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top");
        if (type2 == "interpolation")
          return pushContext(state, stream, "interpolation");
        if (type2 == "word") {
          var word = stream.current().toLowerCase();
          if (word == "only" || word == "not" || word == "and" || word == "or")
            override = "keyword";
          else if (mediaTypes2.hasOwnProperty(word))
            override = "attribute";
          else if (mediaFeatures2.hasOwnProperty(word))
            override = "property";
          else if (mediaValueKeywords2.hasOwnProperty(word))
            override = "keyword";
          else if (propertyKeywords2.hasOwnProperty(word))
            override = "property";
          else if (nonStandardPropertyKeywords2.hasOwnProperty(word))
            override = highlightNonStandardPropertyKeywords ? "string-2" : "property";
          else if (valueKeywords2.hasOwnProperty(word))
            override = "atom";
          else if (colorKeywords2.hasOwnProperty(word))
            override = "keyword";
          else
            override = "error";
        }
        return state.context.type;
      };
      states.atComponentBlock = function(type2, stream, state) {
        if (type2 == "}")
          return popAndPass(type2, stream, state);
        if (type2 == "{")
          return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top", false);
        if (type2 == "word")
          override = "error";
        return state.context.type;
      };
      states.atBlock_parens = function(type2, stream, state) {
        if (type2 == ")")
          return popContext(state);
        if (type2 == "{" || type2 == "}")
          return popAndPass(type2, stream, state, 2);
        return states.atBlock(type2, stream, state);
      };
      states.restricted_atBlock_before = function(type2, stream, state) {
        if (type2 == "{")
          return pushContext(state, stream, "restricted_atBlock");
        if (type2 == "word" && state.stateArg == "@counter-style") {
          override = "variable";
          return "restricted_atBlock_before";
        }
        return pass(type2, stream, state);
      };
      states.restricted_atBlock = function(type2, stream, state) {
        if (type2 == "}") {
          state.stateArg = null;
          return popContext(state);
        }
        if (type2 == "word") {
          if (state.stateArg == "@font-face" && !fontProperties2.hasOwnProperty(stream.current().toLowerCase()) || state.stateArg == "@counter-style" && !counterDescriptors2.hasOwnProperty(stream.current().toLowerCase()))
            override = "error";
          else
            override = "property";
          return "maybeprop";
        }
        return "restricted_atBlock";
      };
      states.keyframes = function(type2, stream, state) {
        if (type2 == "word") {
          override = "variable";
          return "keyframes";
        }
        if (type2 == "{")
          return pushContext(state, stream, "top");
        return pass(type2, stream, state);
      };
      states.at = function(type2, stream, state) {
        if (type2 == ";")
          return popContext(state);
        if (type2 == "{" || type2 == "}")
          return popAndPass(type2, stream, state);
        if (type2 == "word")
          override = "tag";
        else if (type2 == "hash")
          override = "builtin";
        return "at";
      };
      states.interpolation = function(type2, stream, state) {
        if (type2 == "}")
          return popContext(state);
        if (type2 == "{" || type2 == ";")
          return popAndPass(type2, stream, state);
        if (type2 == "word")
          override = "variable";
        else if (type2 != "variable" && type2 != "(" && type2 != ")")
          override = "error";
        return "interpolation";
      };
      return {
        startState: function(base) {
          return {
            tokenize: null,
            state: inline ? "block" : "top",
            stateArg: null,
            context: new Context(inline ? "block" : "top", base || 0, null)
          };
        },
        token: function(stream, state) {
          if (!state.tokenize && stream.eatSpace())
            return null;
          var style = (state.tokenize || tokenBase)(stream, state);
          if (style && typeof style == "object") {
            type = style[1];
            style = style[0];
          }
          override = style;
          if (type != "comment")
            state.state = states[state.state](type, stream, state);
          return override;
        },
        indent: function(state, textAfter) {
          var cx = state.context, ch = textAfter && textAfter.charAt(0);
          var indent = cx.indent;
          if (cx.type == "prop" && (ch == "}" || ch == ")"))
            cx = cx.prev;
          if (cx.prev) {
            if (ch == "}" && (cx.type == "block" || cx.type == "top" || cx.type == "interpolation" || cx.type == "restricted_atBlock")) {
              cx = cx.prev;
              indent = cx.indent;
            } else if (ch == ")" && (cx.type == "parens" || cx.type == "atBlock_parens") || ch == "{" && (cx.type == "at" || cx.type == "atBlock")) {
              indent = Math.max(0, cx.indent - indentUnit);
            }
          }
          return indent;
        },
        electricChars: "}",
        blockCommentStart: "/*",
        blockCommentEnd: "*/",
        blockCommentContinue: " * ",
        lineComment,
        fold: "brace"
      };
    });
    function keySet(array) {
      var keys2 = {};
      for (var i = 0; i < array.length; ++i) {
        keys2[array[i].toLowerCase()] = true;
      }
      return keys2;
    }
    var documentTypes_ = [
      "domain",
      "regexp",
      "url",
      "url-prefix"
    ], documentTypes = keySet(documentTypes_);
    var mediaTypes_ = [
      "all",
      "aural",
      "braille",
      "handheld",
      "print",
      "projection",
      "screen",
      "tty",
      "tv",
      "embossed"
    ], mediaTypes = keySet(mediaTypes_);
    var mediaFeatures_ = [
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "device-width",
      "min-device-width",
      "max-device-width",
      "device-height",
      "min-device-height",
      "max-device-height",
      "aspect-ratio",
      "min-aspect-ratio",
      "max-aspect-ratio",
      "device-aspect-ratio",
      "min-device-aspect-ratio",
      "max-device-aspect-ratio",
      "color",
      "min-color",
      "max-color",
      "color-index",
      "min-color-index",
      "max-color-index",
      "monochrome",
      "min-monochrome",
      "max-monochrome",
      "resolution",
      "min-resolution",
      "max-resolution",
      "scan",
      "grid",
      "orientation",
      "device-pixel-ratio",
      "min-device-pixel-ratio",
      "max-device-pixel-ratio",
      "pointer",
      "any-pointer",
      "hover",
      "any-hover",
      "prefers-color-scheme",
      "dynamic-range",
      "video-dynamic-range"
    ], mediaFeatures = keySet(mediaFeatures_);
    var mediaValueKeywords_ = [
      "landscape",
      "portrait",
      "none",
      "coarse",
      "fine",
      "on-demand",
      "hover",
      "interlace",
      "progressive",
      "dark",
      "light",
      "standard",
      "high"
    ], mediaValueKeywords = keySet(mediaValueKeywords_);
    var propertyKeywords_ = [
      "align-content",
      "align-items",
      "align-self",
      "alignment-adjust",
      "alignment-baseline",
      "all",
      "anchor-point",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "appearance",
      "azimuth",
      "backdrop-filter",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-blend-mode",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-repeat",
      "background-size",
      "baseline-shift",
      "binding",
      "bleed",
      "block-size",
      "bookmark-label",
      "bookmark-level",
      "bookmark-state",
      "bookmark-target",
      "border",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "caption-side",
      "caret-color",
      "clear",
      "clip",
      "color",
      "color-profile",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "contain",
      "content",
      "counter-increment",
      "counter-reset",
      "crop",
      "cue",
      "cue-after",
      "cue-before",
      "cursor",
      "direction",
      "display",
      "dominant-baseline",
      "drop-initial-after-adjust",
      "drop-initial-after-align",
      "drop-initial-before-adjust",
      "drop-initial-before-align",
      "drop-initial-size",
      "drop-initial-value",
      "elevation",
      "empty-cells",
      "fit",
      "fit-content",
      "fit-position",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "float-offset",
      "flow-from",
      "flow-into",
      "font",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-optical-sizing",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-synthesis",
      "font-variant",
      "font-variant-alternates",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-weight",
      "gap",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-gap",
      "grid-column-start",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-gap",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "hanging-punctuation",
      "height",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "inline-box-align",
      "inset",
      "inset-block",
      "inset-block-end",
      "inset-block-start",
      "inset-inline",
      "inset-inline-end",
      "inset-inline-start",
      "isolation",
      "justify-content",
      "justify-items",
      "justify-self",
      "left",
      "letter-spacing",
      "line-break",
      "line-height",
      "line-height-step",
      "line-stacking",
      "line-stacking-ruby",
      "line-stacking-shift",
      "line-stacking-strategy",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "margin",
      "margin-bottom",
      "margin-left",
      "margin-right",
      "margin-top",
      "marks",
      "marquee-direction",
      "marquee-loop",
      "marquee-play-count",
      "marquee-speed",
      "marquee-style",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "mix-blend-mode",
      "move-to",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "object-fit",
      "object-position",
      "offset",
      "offset-anchor",
      "offset-distance",
      "offset-path",
      "offset-position",
      "offset-rotate",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-style",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-bottom",
      "padding-left",
      "padding-right",
      "padding-top",
      "page",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "page-policy",
      "pause",
      "pause-after",
      "pause-before",
      "perspective",
      "perspective-origin",
      "pitch",
      "pitch-range",
      "place-content",
      "place-items",
      "place-self",
      "play-during",
      "position",
      "presentation-level",
      "punctuation-trim",
      "quotes",
      "region-break-after",
      "region-break-before",
      "region-break-inside",
      "region-fragment",
      "rendering-intent",
      "resize",
      "rest",
      "rest-after",
      "rest-before",
      "richness",
      "right",
      "rotate",
      "rotation",
      "rotation-point",
      "row-gap",
      "ruby-align",
      "ruby-overhang",
      "ruby-position",
      "ruby-span",
      "scale",
      "scroll-behavior",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-type",
      "shape-image-threshold",
      "shape-inside",
      "shape-margin",
      "shape-outside",
      "size",
      "speak",
      "speak-as",
      "speak-header",
      "speak-numeral",
      "speak-punctuation",
      "speech-rate",
      "stress",
      "string-set",
      "tab-size",
      "table-layout",
      "target",
      "target-name",
      "target-new",
      "target-position",
      "text-align",
      "text-align-last",
      "text-combine-upright",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-skip",
      "text-decoration-skip-ink",
      "text-decoration-style",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-height",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-outline",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-size-adjust",
      "text-space-collapse",
      "text-transform",
      "text-underline-position",
      "text-wrap",
      "top",
      "touch-action",
      "transform",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "translate",
      "unicode-bidi",
      "user-select",
      "vertical-align",
      "visibility",
      "voice-balance",
      "voice-duration",
      "voice-family",
      "voice-pitch",
      "voice-range",
      "voice-rate",
      "voice-stress",
      "voice-volume",
      "volume",
      "white-space",
      "widows",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode",
      "z-index",
      // SVG-specific
      "clip-path",
      "clip-rule",
      "mask",
      "enable-background",
      "filter",
      "flood-color",
      "flood-opacity",
      "lighting-color",
      "stop-color",
      "stop-opacity",
      "pointer-events",
      "color-interpolation",
      "color-interpolation-filters",
      "color-rendering",
      "fill",
      "fill-opacity",
      "fill-rule",
      "image-rendering",
      "marker",
      "marker-end",
      "marker-mid",
      "marker-start",
      "paint-order",
      "shape-rendering",
      "stroke",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-rendering",
      "baseline-shift",
      "dominant-baseline",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "text-anchor",
      "writing-mode"
    ], propertyKeywords = keySet(propertyKeywords_);
    var nonStandardPropertyKeywords_ = [
      "accent-color",
      "aspect-ratio",
      "border-block",
      "border-block-color",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width",
      "border-block-style",
      "border-block-width",
      "border-inline",
      "border-inline-color",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width",
      "border-inline-style",
      "border-inline-width",
      "content-visibility",
      "margin-block",
      "margin-block-end",
      "margin-block-start",
      "margin-inline",
      "margin-inline-end",
      "margin-inline-start",
      "overflow-anchor",
      "overscroll-behavior",
      "padding-block",
      "padding-block-end",
      "padding-block-start",
      "padding-inline",
      "padding-inline-end",
      "padding-inline-start",
      "scroll-snap-stop",
      "scrollbar-3d-light-color",
      "scrollbar-arrow-color",
      "scrollbar-base-color",
      "scrollbar-dark-shadow-color",
      "scrollbar-face-color",
      "scrollbar-highlight-color",
      "scrollbar-shadow-color",
      "scrollbar-track-color",
      "searchfield-cancel-button",
      "searchfield-decoration",
      "searchfield-results-button",
      "searchfield-results-decoration",
      "shape-inside",
      "zoom"
    ], nonStandardPropertyKeywords = keySet(nonStandardPropertyKeywords_);
    var fontProperties_ = [
      "font-display",
      "font-family",
      "src",
      "unicode-range",
      "font-variant",
      "font-feature-settings",
      "font-stretch",
      "font-weight",
      "font-style"
    ], fontProperties = keySet(fontProperties_);
    var counterDescriptors_ = [
      "additive-symbols",
      "fallback",
      "negative",
      "pad",
      "prefix",
      "range",
      "speak-as",
      "suffix",
      "symbols",
      "system"
    ], counterDescriptors = keySet(counterDescriptors_);
    var colorKeywords_ = [
      "aliceblue",
      "antiquewhite",
      "aqua",
      "aquamarine",
      "azure",
      "beige",
      "bisque",
      "black",
      "blanchedalmond",
      "blue",
      "blueviolet",
      "brown",
      "burlywood",
      "cadetblue",
      "chartreuse",
      "chocolate",
      "coral",
      "cornflowerblue",
      "cornsilk",
      "crimson",
      "cyan",
      "darkblue",
      "darkcyan",
      "darkgoldenrod",
      "darkgray",
      "darkgreen",
      "darkgrey",
      "darkkhaki",
      "darkmagenta",
      "darkolivegreen",
      "darkorange",
      "darkorchid",
      "darkred",
      "darksalmon",
      "darkseagreen",
      "darkslateblue",
      "darkslategray",
      "darkslategrey",
      "darkturquoise",
      "darkviolet",
      "deeppink",
      "deepskyblue",
      "dimgray",
      "dimgrey",
      "dodgerblue",
      "firebrick",
      "floralwhite",
      "forestgreen",
      "fuchsia",
      "gainsboro",
      "ghostwhite",
      "gold",
      "goldenrod",
      "gray",
      "grey",
      "green",
      "greenyellow",
      "honeydew",
      "hotpink",
      "indianred",
      "indigo",
      "ivory",
      "khaki",
      "lavender",
      "lavenderblush",
      "lawngreen",
      "lemonchiffon",
      "lightblue",
      "lightcoral",
      "lightcyan",
      "lightgoldenrodyellow",
      "lightgray",
      "lightgreen",
      "lightgrey",
      "lightpink",
      "lightsalmon",
      "lightseagreen",
      "lightskyblue",
      "lightslategray",
      "lightslategrey",
      "lightsteelblue",
      "lightyellow",
      "lime",
      "limegreen",
      "linen",
      "magenta",
      "maroon",
      "mediumaquamarine",
      "mediumblue",
      "mediumorchid",
      "mediumpurple",
      "mediumseagreen",
      "mediumslateblue",
      "mediumspringgreen",
      "mediumturquoise",
      "mediumvioletred",
      "midnightblue",
      "mintcream",
      "mistyrose",
      "moccasin",
      "navajowhite",
      "navy",
      "oldlace",
      "olive",
      "olivedrab",
      "orange",
      "orangered",
      "orchid",
      "palegoldenrod",
      "palegreen",
      "paleturquoise",
      "palevioletred",
      "papayawhip",
      "peachpuff",
      "peru",
      "pink",
      "plum",
      "powderblue",
      "purple",
      "rebeccapurple",
      "red",
      "rosybrown",
      "royalblue",
      "saddlebrown",
      "salmon",
      "sandybrown",
      "seagreen",
      "seashell",
      "sienna",
      "silver",
      "skyblue",
      "slateblue",
      "slategray",
      "slategrey",
      "snow",
      "springgreen",
      "steelblue",
      "tan",
      "teal",
      "thistle",
      "tomato",
      "turquoise",
      "violet",
      "wheat",
      "white",
      "whitesmoke",
      "yellow",
      "yellowgreen"
    ], colorKeywords = keySet(colorKeywords_);
    var valueKeywords_ = [
      "above",
      "absolute",
      "activeborder",
      "additive",
      "activecaption",
      "afar",
      "after-white-space",
      "ahead",
      "alias",
      "all",
      "all-scroll",
      "alphabetic",
      "alternate",
      "always",
      "amharic",
      "amharic-abegede",
      "antialiased",
      "appworkspace",
      "arabic-indic",
      "armenian",
      "asterisks",
      "attr",
      "auto",
      "auto-flow",
      "avoid",
      "avoid-column",
      "avoid-page",
      "avoid-region",
      "axis-pan",
      "background",
      "backwards",
      "baseline",
      "below",
      "bidi-override",
      "binary",
      "bengali",
      "blink",
      "block",
      "block-axis",
      "blur",
      "bold",
      "bolder",
      "border",
      "border-box",
      "both",
      "bottom",
      "break",
      "break-all",
      "break-word",
      "brightness",
      "bullets",
      "button",
      "buttonface",
      "buttonhighlight",
      "buttonshadow",
      "buttontext",
      "calc",
      "cambodian",
      "capitalize",
      "caps-lock-indicator",
      "caption",
      "captiontext",
      "caret",
      "cell",
      "center",
      "checkbox",
      "circle",
      "cjk-decimal",
      "cjk-earthly-branch",
      "cjk-heavenly-stem",
      "cjk-ideographic",
      "clear",
      "clip",
      "close-quote",
      "col-resize",
      "collapse",
      "color",
      "color-burn",
      "color-dodge",
      "column",
      "column-reverse",
      "compact",
      "condensed",
      "conic-gradient",
      "contain",
      "content",
      "contents",
      "content-box",
      "context-menu",
      "continuous",
      "contrast",
      "copy",
      "counter",
      "counters",
      "cover",
      "crop",
      "cross",
      "crosshair",
      "cubic-bezier",
      "currentcolor",
      "cursive",
      "cyclic",
      "darken",
      "dashed",
      "decimal",
      "decimal-leading-zero",
      "default",
      "default-button",
      "dense",
      "destination-atop",
      "destination-in",
      "destination-out",
      "destination-over",
      "devanagari",
      "difference",
      "disc",
      "discard",
      "disclosure-closed",
      "disclosure-open",
      "document",
      "dot-dash",
      "dot-dot-dash",
      "dotted",
      "double",
      "down",
      "drop-shadow",
      "e-resize",
      "ease",
      "ease-in",
      "ease-in-out",
      "ease-out",
      "element",
      "ellipse",
      "ellipsis",
      "embed",
      "end",
      "ethiopic",
      "ethiopic-abegede",
      "ethiopic-abegede-am-et",
      "ethiopic-abegede-gez",
      "ethiopic-abegede-ti-er",
      "ethiopic-abegede-ti-et",
      "ethiopic-halehame-aa-er",
      "ethiopic-halehame-aa-et",
      "ethiopic-halehame-am-et",
      "ethiopic-halehame-gez",
      "ethiopic-halehame-om-et",
      "ethiopic-halehame-sid-et",
      "ethiopic-halehame-so-et",
      "ethiopic-halehame-ti-er",
      "ethiopic-halehame-ti-et",
      "ethiopic-halehame-tig",
      "ethiopic-numeric",
      "ew-resize",
      "exclusion",
      "expanded",
      "extends",
      "extra-condensed",
      "extra-expanded",
      "fantasy",
      "fast",
      "fill",
      "fill-box",
      "fixed",
      "flat",
      "flex",
      "flex-end",
      "flex-start",
      "footnotes",
      "forwards",
      "from",
      "geometricPrecision",
      "georgian",
      "grayscale",
      "graytext",
      "grid",
      "groove",
      "gujarati",
      "gurmukhi",
      "hand",
      "hangul",
      "hangul-consonant",
      "hard-light",
      "hebrew",
      "help",
      "hidden",
      "hide",
      "higher",
      "highlight",
      "highlighttext",
      "hiragana",
      "hiragana-iroha",
      "horizontal",
      "hsl",
      "hsla",
      "hue",
      "hue-rotate",
      "icon",
      "ignore",
      "inactiveborder",
      "inactivecaption",
      "inactivecaptiontext",
      "infinite",
      "infobackground",
      "infotext",
      "inherit",
      "initial",
      "inline",
      "inline-axis",
      "inline-block",
      "inline-flex",
      "inline-grid",
      "inline-table",
      "inset",
      "inside",
      "intrinsic",
      "invert",
      "italic",
      "japanese-formal",
      "japanese-informal",
      "justify",
      "kannada",
      "katakana",
      "katakana-iroha",
      "keep-all",
      "khmer",
      "korean-hangul-formal",
      "korean-hanja-formal",
      "korean-hanja-informal",
      "landscape",
      "lao",
      "large",
      "larger",
      "left",
      "level",
      "lighter",
      "lighten",
      "line-through",
      "linear",
      "linear-gradient",
      "lines",
      "list-item",
      "listbox",
      "listitem",
      "local",
      "logical",
      "loud",
      "lower",
      "lower-alpha",
      "lower-armenian",
      "lower-greek",
      "lower-hexadecimal",
      "lower-latin",
      "lower-norwegian",
      "lower-roman",
      "lowercase",
      "ltr",
      "luminosity",
      "malayalam",
      "manipulation",
      "match",
      "matrix",
      "matrix3d",
      "media-play-button",
      "media-slider",
      "media-sliderthumb",
      "media-volume-slider",
      "media-volume-sliderthumb",
      "medium",
      "menu",
      "menulist",
      "menulist-button",
      "menutext",
      "message-box",
      "middle",
      "min-intrinsic",
      "mix",
      "mongolian",
      "monospace",
      "move",
      "multiple",
      "multiple_mask_images",
      "multiply",
      "myanmar",
      "n-resize",
      "narrower",
      "ne-resize",
      "nesw-resize",
      "no-close-quote",
      "no-drop",
      "no-open-quote",
      "no-repeat",
      "none",
      "normal",
      "not-allowed",
      "nowrap",
      "ns-resize",
      "numbers",
      "numeric",
      "nw-resize",
      "nwse-resize",
      "oblique",
      "octal",
      "opacity",
      "open-quote",
      "optimizeLegibility",
      "optimizeSpeed",
      "oriya",
      "oromo",
      "outset",
      "outside",
      "outside-shape",
      "overlay",
      "overline",
      "padding",
      "padding-box",
      "painted",
      "page",
      "paused",
      "persian",
      "perspective",
      "pinch-zoom",
      "plus-darker",
      "plus-lighter",
      "pointer",
      "polygon",
      "portrait",
      "pre",
      "pre-line",
      "pre-wrap",
      "preserve-3d",
      "progress",
      "push-button",
      "radial-gradient",
      "radio",
      "read-only",
      "read-write",
      "read-write-plaintext-only",
      "rectangle",
      "region",
      "relative",
      "repeat",
      "repeating-linear-gradient",
      "repeating-radial-gradient",
      "repeating-conic-gradient",
      "repeat-x",
      "repeat-y",
      "reset",
      "reverse",
      "rgb",
      "rgba",
      "ridge",
      "right",
      "rotate",
      "rotate3d",
      "rotateX",
      "rotateY",
      "rotateZ",
      "round",
      "row",
      "row-resize",
      "row-reverse",
      "rtl",
      "run-in",
      "running",
      "s-resize",
      "sans-serif",
      "saturate",
      "saturation",
      "scale",
      "scale3d",
      "scaleX",
      "scaleY",
      "scaleZ",
      "screen",
      "scroll",
      "scrollbar",
      "scroll-position",
      "se-resize",
      "searchfield",
      "searchfield-cancel-button",
      "searchfield-decoration",
      "searchfield-results-button",
      "searchfield-results-decoration",
      "self-start",
      "self-end",
      "semi-condensed",
      "semi-expanded",
      "separate",
      "sepia",
      "serif",
      "show",
      "sidama",
      "simp-chinese-formal",
      "simp-chinese-informal",
      "single",
      "skew",
      "skewX",
      "skewY",
      "skip-white-space",
      "slide",
      "slider-horizontal",
      "slider-vertical",
      "sliderthumb-horizontal",
      "sliderthumb-vertical",
      "slow",
      "small",
      "small-caps",
      "small-caption",
      "smaller",
      "soft-light",
      "solid",
      "somali",
      "source-atop",
      "source-in",
      "source-out",
      "source-over",
      "space",
      "space-around",
      "space-between",
      "space-evenly",
      "spell-out",
      "square",
      "square-button",
      "start",
      "static",
      "status-bar",
      "stretch",
      "stroke",
      "stroke-box",
      "sub",
      "subpixel-antialiased",
      "svg_masks",
      "super",
      "sw-resize",
      "symbolic",
      "symbols",
      "system-ui",
      "table",
      "table-caption",
      "table-cell",
      "table-column",
      "table-column-group",
      "table-footer-group",
      "table-header-group",
      "table-row",
      "table-row-group",
      "tamil",
      "telugu",
      "text",
      "text-bottom",
      "text-top",
      "textarea",
      "textfield",
      "thai",
      "thick",
      "thin",
      "threeddarkshadow",
      "threedface",
      "threedhighlight",
      "threedlightshadow",
      "threedshadow",
      "tibetan",
      "tigre",
      "tigrinya-er",
      "tigrinya-er-abegede",
      "tigrinya-et",
      "tigrinya-et-abegede",
      "to",
      "top",
      "trad-chinese-formal",
      "trad-chinese-informal",
      "transform",
      "translate",
      "translate3d",
      "translateX",
      "translateY",
      "translateZ",
      "transparent",
      "ultra-condensed",
      "ultra-expanded",
      "underline",
      "unidirectional-pan",
      "unset",
      "up",
      "upper-alpha",
      "upper-armenian",
      "upper-greek",
      "upper-hexadecimal",
      "upper-latin",
      "upper-norwegian",
      "upper-roman",
      "uppercase",
      "urdu",
      "url",
      "var",
      "vertical",
      "vertical-text",
      "view-box",
      "visible",
      "visibleFill",
      "visiblePainted",
      "visibleStroke",
      "visual",
      "w-resize",
      "wait",
      "wave",
      "wider",
      "window",
      "windowframe",
      "windowtext",
      "words",
      "wrap",
      "wrap-reverse",
      "x-large",
      "x-small",
      "xor",
      "xx-large",
      "xx-small"
    ], valueKeywords = keySet(valueKeywords_);
    var allWords = documentTypes_.concat(mediaTypes_).concat(mediaFeatures_).concat(mediaValueKeywords_).concat(propertyKeywords_).concat(nonStandardPropertyKeywords_).concat(colorKeywords_).concat(valueKeywords_);
    CodeMirror2.registerHelper("hintWords", "css", allWords);
    function tokenCComment(stream, state) {
      var maybeEnd = false, ch;
      while ((ch = stream.next()) != null) {
        if (maybeEnd && ch == "/") {
          state.tokenize = null;
          break;
        }
        maybeEnd = ch == "*";
      }
      return ["comment", "comment"];
    }
    CodeMirror2.defineMIME("text/css", {
      documentTypes,
      mediaTypes,
      mediaFeatures,
      mediaValueKeywords,
      propertyKeywords,
      nonStandardPropertyKeywords,
      fontProperties,
      counterDescriptors,
      colorKeywords,
      valueKeywords,
      tokenHooks: {
        "/": function(stream, state) {
          if (!stream.eat("*"))
            return false;
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        }
      },
      name: "css"
    });
    CodeMirror2.defineMIME("text/x-scss", {
      mediaTypes,
      mediaFeatures,
      mediaValueKeywords,
      propertyKeywords,
      nonStandardPropertyKeywords,
      colorKeywords,
      valueKeywords,
      fontProperties,
      allowNested: true,
      lineComment: "//",
      tokenHooks: {
        "/": function(stream, state) {
          if (stream.eat("/")) {
            stream.skipToEnd();
            return ["comment", "comment"];
          } else if (stream.eat("*")) {
            state.tokenize = tokenCComment;
            return tokenCComment(stream, state);
          } else {
            return ["operator", "operator"];
          }
        },
        ":": function(stream) {
          if (stream.match(/^\s*\{/, false))
            return [null, null];
          return false;
        },
        "$": function(stream) {
          stream.match(/^[\w-]+/);
          if (stream.match(/^\s*:/, false))
            return ["variable-2", "variable-definition"];
          return ["variable-2", "variable"];
        },
        "#": function(stream) {
          if (!stream.eat("{"))
            return false;
          return [null, "interpolation"];
        }
      },
      name: "css",
      helperType: "scss"
    });
    CodeMirror2.defineMIME("text/x-less", {
      mediaTypes,
      mediaFeatures,
      mediaValueKeywords,
      propertyKeywords,
      nonStandardPropertyKeywords,
      colorKeywords,
      valueKeywords,
      fontProperties,
      allowNested: true,
      lineComment: "//",
      tokenHooks: {
        "/": function(stream, state) {
          if (stream.eat("/")) {
            stream.skipToEnd();
            return ["comment", "comment"];
          } else if (stream.eat("*")) {
            state.tokenize = tokenCComment;
            return tokenCComment(stream, state);
          } else {
            return ["operator", "operator"];
          }
        },
        "@": function(stream) {
          if (stream.eat("{"))
            return [null, "interpolation"];
          if (stream.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, false))
            return false;
          stream.eatWhile(/[\w\\\-]/);
          if (stream.match(/^\s*:/, false))
            return ["variable-2", "variable-definition"];
          return ["variable-2", "variable"];
        },
        "&": function() {
          return ["atom", "atom"];
        }
      },
      name: "css",
      helperType: "less"
    });
    CodeMirror2.defineMIME("text/x-gss", {
      documentTypes,
      mediaTypes,
      mediaFeatures,
      propertyKeywords,
      nonStandardPropertyKeywords,
      fontProperties,
      counterDescriptors,
      colorKeywords,
      valueKeywords,
      supportsAtComponent: true,
      tokenHooks: {
        "/": function(stream, state) {
          if (!stream.eat("*"))
            return false;
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        }
      },
      name: "css",
      helperType: "gss"
    });
  });
})();
(function(module, exports) {
  (function(mod) {
    mod(requireCodemirror());
  })(function(CodeMirror2) {
    var htmlConfig = {
      autoSelfClosers: {
        "area": true,
        "base": true,
        "br": true,
        "col": true,
        "command": true,
        "embed": true,
        "frame": true,
        "hr": true,
        "img": true,
        "input": true,
        "keygen": true,
        "link": true,
        "meta": true,
        "param": true,
        "source": true,
        "track": true,
        "wbr": true,
        "menuitem": true
      },
      implicitlyClosed: {
        "dd": true,
        "li": true,
        "optgroup": true,
        "option": true,
        "p": true,
        "rp": true,
        "rt": true,
        "tbody": true,
        "td": true,
        "tfoot": true,
        "th": true,
        "tr": true
      },
      contextGrabbers: {
        "dd": { "dd": true, "dt": true },
        "dt": { "dd": true, "dt": true },
        "li": { "li": true },
        "option": { "option": true, "optgroup": true },
        "optgroup": { "optgroup": true },
        "p": {
          "address": true,
          "article": true,
          "aside": true,
          "blockquote": true,
          "dir": true,
          "div": true,
          "dl": true,
          "fieldset": true,
          "footer": true,
          "form": true,
          "h1": true,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": true,
          "h6": true,
          "header": true,
          "hgroup": true,
          "hr": true,
          "menu": true,
          "nav": true,
          "ol": true,
          "p": true,
          "pre": true,
          "section": true,
          "table": true,
          "ul": true
        },
        "rp": { "rp": true, "rt": true },
        "rt": { "rp": true, "rt": true },
        "tbody": { "tbody": true, "tfoot": true },
        "td": { "td": true, "th": true },
        "tfoot": { "tbody": true },
        "th": { "td": true, "th": true },
        "thead": { "tbody": true, "tfoot": true },
        "tr": { "tr": true }
      },
      doNotIndent: { "pre": true },
      allowUnquoted: true,
      allowMissing: true,
      caseFold: true
    };
    var xmlConfig = {
      autoSelfClosers: {},
      implicitlyClosed: {},
      contextGrabbers: {},
      doNotIndent: {},
      allowUnquoted: false,
      allowMissing: false,
      allowMissingTagName: false,
      caseFold: false
    };
    CodeMirror2.defineMode("xml", function(editorConf, config_) {
      var indentUnit = editorConf.indentUnit;
      var config = {};
      var defaults = config_.htmlMode ? htmlConfig : xmlConfig;
      for (var prop in defaults)
        config[prop] = defaults[prop];
      for (var prop in config_)
        config[prop] = config_[prop];
      var type, setStyle;
      function inText(stream, state) {
        function chain(parser) {
          state.tokenize = parser;
          return parser(stream, state);
        }
        var ch = stream.next();
        if (ch == "<") {
          if (stream.eat("!")) {
            if (stream.eat("[")) {
              if (stream.match("CDATA["))
                return chain(inBlock("atom", "]]>"));
              else
                return null;
            } else if (stream.match("--")) {
              return chain(inBlock("comment", "-->"));
            } else if (stream.match("DOCTYPE", true, true)) {
              stream.eatWhile(/[\w\._\-]/);
              return chain(doctype(1));
            } else {
              return null;
            }
          } else if (stream.eat("?")) {
            stream.eatWhile(/[\w\._\-]/);
            state.tokenize = inBlock("meta", "?>");
            return "meta";
          } else {
            type = stream.eat("/") ? "closeTag" : "openTag";
            state.tokenize = inTag;
            return "tag bracket";
          }
        } else if (ch == "&") {
          var ok;
          if (stream.eat("#")) {
            if (stream.eat("x")) {
              ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");
            } else {
              ok = stream.eatWhile(/[\d]/) && stream.eat(";");
            }
          } else {
            ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
          }
          return ok ? "atom" : "error";
        } else {
          stream.eatWhile(/[^&<]/);
          return null;
        }
      }
      inText.isInText = true;
      function inTag(stream, state) {
        var ch = stream.next();
        if (ch == ">" || ch == "/" && stream.eat(">")) {
          state.tokenize = inText;
          type = ch == ">" ? "endTag" : "selfcloseTag";
          return "tag bracket";
        } else if (ch == "=") {
          type = "equals";
          return null;
        } else if (ch == "<") {
          state.tokenize = inText;
          state.state = baseState;
          state.tagName = state.tagStart = null;
          var next = state.tokenize(stream, state);
          return next ? next + " tag error" : "tag error";
        } else if (/[\'\"]/.test(ch)) {
          state.tokenize = inAttribute(ch);
          state.stringStartCol = stream.column();
          return state.tokenize(stream, state);
        } else {
          stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
          return "word";
        }
      }
      function inAttribute(quote) {
        var closure = function(stream, state) {
          while (!stream.eol()) {
            if (stream.next() == quote) {
              state.tokenize = inTag;
              break;
            }
          }
          return "string";
        };
        closure.isInAttribute = true;
        return closure;
      }
      function inBlock(style, terminator) {
        return function(stream, state) {
          while (!stream.eol()) {
            if (stream.match(terminator)) {
              state.tokenize = inText;
              break;
            }
            stream.next();
          }
          return style;
        };
      }
      function doctype(depth) {
        return function(stream, state) {
          var ch;
          while ((ch = stream.next()) != null) {
            if (ch == "<") {
              state.tokenize = doctype(depth + 1);
              return state.tokenize(stream, state);
            } else if (ch == ">") {
              if (depth == 1) {
                state.tokenize = inText;
                break;
              } else {
                state.tokenize = doctype(depth - 1);
                return state.tokenize(stream, state);
              }
            }
          }
          return "meta";
        };
      }
      function lower(tagName) {
        return tagName && tagName.toLowerCase();
      }
      function Context(state, tagName, startOfLine) {
        this.prev = state.context;
        this.tagName = tagName || "";
        this.indent = state.indented;
        this.startOfLine = startOfLine;
        if (config.doNotIndent.hasOwnProperty(tagName) || state.context && state.context.noIndent)
          this.noIndent = true;
      }
      function popContext(state) {
        if (state.context)
          state.context = state.context.prev;
      }
      function maybePopContext(state, nextTagName) {
        var parentTagName;
        while (true) {
          if (!state.context) {
            return;
          }
          parentTagName = state.context.tagName;
          if (!config.contextGrabbers.hasOwnProperty(lower(parentTagName)) || !config.contextGrabbers[lower(parentTagName)].hasOwnProperty(lower(nextTagName))) {
            return;
          }
          popContext(state);
        }
      }
      function baseState(type2, stream, state) {
        if (type2 == "openTag") {
          state.tagStart = stream.column();
          return tagNameState;
        } else if (type2 == "closeTag") {
          return closeTagNameState;
        } else {
          return baseState;
        }
      }
      function tagNameState(type2, stream, state) {
        if (type2 == "word") {
          state.tagName = stream.current();
          setStyle = "tag";
          return attrState;
        } else if (config.allowMissingTagName && type2 == "endTag") {
          setStyle = "tag bracket";
          return attrState(type2, stream, state);
        } else {
          setStyle = "error";
          return tagNameState;
        }
      }
      function closeTagNameState(type2, stream, state) {
        if (type2 == "word") {
          var tagName = stream.current();
          if (state.context && state.context.tagName != tagName && config.implicitlyClosed.hasOwnProperty(lower(state.context.tagName)))
            popContext(state);
          if (state.context && state.context.tagName == tagName || config.matchClosing === false) {
            setStyle = "tag";
            return closeState;
          } else {
            setStyle = "tag error";
            return closeStateErr;
          }
        } else if (config.allowMissingTagName && type2 == "endTag") {
          setStyle = "tag bracket";
          return closeState(type2, stream, state);
        } else {
          setStyle = "error";
          return closeStateErr;
        }
      }
      function closeState(type2, _stream, state) {
        if (type2 != "endTag") {
          setStyle = "error";
          return closeState;
        }
        popContext(state);
        return baseState;
      }
      function closeStateErr(type2, stream, state) {
        setStyle = "error";
        return closeState(type2, stream, state);
      }
      function attrState(type2, _stream, state) {
        if (type2 == "word") {
          setStyle = "attribute";
          return attrEqState;
        } else if (type2 == "endTag" || type2 == "selfcloseTag") {
          var tagName = state.tagName, tagStart = state.tagStart;
          state.tagName = state.tagStart = null;
          if (type2 == "selfcloseTag" || config.autoSelfClosers.hasOwnProperty(lower(tagName))) {
            maybePopContext(state, tagName);
          } else {
            maybePopContext(state, tagName);
            state.context = new Context(state, tagName, tagStart == state.indented);
          }
          return baseState;
        }
        setStyle = "error";
        return attrState;
      }
      function attrEqState(type2, stream, state) {
        if (type2 == "equals")
          return attrValueState;
        if (!config.allowMissing)
          setStyle = "error";
        return attrState(type2, stream, state);
      }
      function attrValueState(type2, stream, state) {
        if (type2 == "string")
          return attrContinuedState;
        if (type2 == "word" && config.allowUnquoted) {
          setStyle = "string";
          return attrState;
        }
        setStyle = "error";
        return attrState(type2, stream, state);
      }
      function attrContinuedState(type2, stream, state) {
        if (type2 == "string")
          return attrContinuedState;
        return attrState(type2, stream, state);
      }
      return {
        startState: function(baseIndent) {
          var state = {
            tokenize: inText,
            state: baseState,
            indented: baseIndent || 0,
            tagName: null,
            tagStart: null,
            context: null
          };
          if (baseIndent != null)
            state.baseIndent = baseIndent;
          return state;
        },
        token: function(stream, state) {
          if (!state.tagName && stream.sol())
            state.indented = stream.indentation();
          if (stream.eatSpace())
            return null;
          type = null;
          var style = state.tokenize(stream, state);
          if ((style || type) && style != "comment") {
            setStyle = null;
            state.state = state.state(type || style, stream, state);
            if (setStyle)
              style = setStyle == "error" ? style + " error" : setStyle;
          }
          return style;
        },
        indent: function(state, textAfter, fullLine) {
          var context = state.context;
          if (state.tokenize.isInAttribute) {
            if (state.tagStart == state.indented)
              return state.stringStartCol + 1;
            else
              return state.indented + indentUnit;
          }
          if (context && context.noIndent)
            return CodeMirror2.Pass;
          if (state.tokenize != inTag && state.tokenize != inText)
            return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
          if (state.tagName) {
            if (config.multilineTagIndentPastTag !== false)
              return state.tagStart + state.tagName.length + 2;
            else
              return state.tagStart + indentUnit * (config.multilineTagIndentFactor || 1);
          }
          if (config.alignCDATA && /<!\[CDATA\[/.test(textAfter))
            return 0;
          var tagAfter = textAfter && /^<(\/)?([\w_:\.-]*)/.exec(textAfter);
          if (tagAfter && tagAfter[1]) {
            while (context) {
              if (context.tagName == tagAfter[2]) {
                context = context.prev;
                break;
              } else if (config.implicitlyClosed.hasOwnProperty(lower(context.tagName))) {
                context = context.prev;
              } else {
                break;
              }
            }
          } else if (tagAfter) {
            while (context) {
              var grabbers = config.contextGrabbers[lower(context.tagName)];
              if (grabbers && grabbers.hasOwnProperty(lower(tagAfter[2])))
                context = context.prev;
              else
                break;
            }
          }
          while (context && context.prev && !context.startOfLine)
            context = context.prev;
          if (context)
            return context.indent + indentUnit;
          else
            return state.baseIndent || 0;
        },
        electricInput: /<\/[\s\w:]+>$/,
        blockCommentStart: "<!--",
        blockCommentEnd: "-->",
        configuration: config.htmlMode ? "html" : "xml",
        helperType: config.htmlMode ? "html" : "xml",
        skipAttribute: function(state) {
          if (state.state == attrValueState)
            state.state = attrState;
        },
        xmlCurrentTag: function(state) {
          return state.tagName ? { name: state.tagName, close: state.type == "closeTag" } : null;
        },
        xmlCurrentContext: function(state) {
          var context = [];
          for (var cx = state.context; cx; cx = cx.prev)
            context.push(cx.tagName);
          return context.reverse();
        }
      };
    });
    CodeMirror2.defineMIME("text/xml", "xml");
    CodeMirror2.defineMIME("application/xml", "xml");
    if (!CodeMirror2.mimeModes.hasOwnProperty("text/html"))
      CodeMirror2.defineMIME("text/html", { name: "xml", htmlMode: true });
  });
})();
(function(module, exports) {
  (function(mod) {
    mod(requireCodemirror());
  })(function(CodeMirror2) {
    function wordRegexp(words2) {
      return new RegExp("^((" + words2.join(")|(") + "))\\b");
    }
    var wordOperators = wordRegexp(["and", "or", "not", "is"]);
    var commonKeywords = [
      "as",
      "assert",
      "break",
      "class",
      "continue",
      "def",
      "del",
      "elif",
      "else",
      "except",
      "finally",
      "for",
      "from",
      "global",
      "if",
      "import",
      "lambda",
      "pass",
      "raise",
      "return",
      "try",
      "while",
      "with",
      "yield",
      "in"
    ];
    var commonBuiltins = [
      "abs",
      "all",
      "any",
      "bin",
      "bool",
      "bytearray",
      "callable",
      "chr",
      "classmethod",
      "compile",
      "complex",
      "delattr",
      "dict",
      "dir",
      "divmod",
      "enumerate",
      "eval",
      "filter",
      "float",
      "format",
      "frozenset",
      "getattr",
      "globals",
      "hasattr",
      "hash",
      "help",
      "hex",
      "id",
      "input",
      "int",
      "isinstance",
      "issubclass",
      "iter",
      "len",
      "list",
      "locals",
      "map",
      "max",
      "memoryview",
      "min",
      "next",
      "object",
      "oct",
      "open",
      "ord",
      "pow",
      "property",
      "range",
      "repr",
      "reversed",
      "round",
      "set",
      "setattr",
      "slice",
      "sorted",
      "staticmethod",
      "str",
      "sum",
      "super",
      "tuple",
      "type",
      "vars",
      "zip",
      "__import__",
      "NotImplemented",
      "Ellipsis",
      "__debug__"
    ];
    CodeMirror2.registerHelper("hintWords", "python", commonKeywords.concat(commonBuiltins).concat(["exec", "print"]));
    function top(state) {
      return state.scopes[state.scopes.length - 1];
    }
    CodeMirror2.defineMode("python", function(conf, parserConf) {
      var ERRORCLASS = "error";
      var delimiters = parserConf.delimiters || parserConf.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/;
      var operators = [
        parserConf.singleOperators,
        parserConf.doubleOperators,
        parserConf.doubleDelimiters,
        parserConf.tripleDelimiters,
        parserConf.operators || /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/
      ];
      for (var i = 0; i < operators.length; i++)
        if (!operators[i])
          operators.splice(i--, 1);
      var hangingIndent = parserConf.hangingIndent || conf.indentUnit;
      var myKeywords = commonKeywords, myBuiltins = commonBuiltins;
      if (parserConf.extra_keywords != void 0)
        myKeywords = myKeywords.concat(parserConf.extra_keywords);
      if (parserConf.extra_builtins != void 0)
        myBuiltins = myBuiltins.concat(parserConf.extra_builtins);
      var py3 = !(parserConf.version && Number(parserConf.version) < 3);
      if (py3) {
        var identifiers = parserConf.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
        myKeywords = myKeywords.concat(["nonlocal", "False", "True", "None", "async", "await"]);
        myBuiltins = myBuiltins.concat(["ascii", "bytes", "exec", "print"]);
        var stringPrefixes = new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`, "i");
      } else {
        var identifiers = parserConf.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
        myKeywords = myKeywords.concat(["exec", "print"]);
        myBuiltins = myBuiltins.concat([
          "apply",
          "basestring",
          "buffer",
          "cmp",
          "coerce",
          "execfile",
          "file",
          "intern",
          "long",
          "raw_input",
          "reduce",
          "reload",
          "unichr",
          "unicode",
          "xrange",
          "False",
          "True",
          "None"
        ]);
        var stringPrefixes = new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`, "i");
      }
      var keywords = wordRegexp(myKeywords);
      var builtins = wordRegexp(myBuiltins);
      function tokenBase(stream, state) {
        var sol = stream.sol() && state.lastToken != "\\";
        if (sol)
          state.indent = stream.indentation();
        if (sol && top(state).type == "py") {
          var scopeOffset = top(state).offset;
          if (stream.eatSpace()) {
            var lineOffset = stream.indentation();
            if (lineOffset > scopeOffset)
              pushPyScope(state);
            else if (lineOffset < scopeOffset && dedent(stream, state) && stream.peek() != "#")
              state.errorToken = true;
            return null;
          } else {
            var style = tokenBaseInner(stream, state);
            if (scopeOffset > 0 && dedent(stream, state))
              style += " " + ERRORCLASS;
            return style;
          }
        }
        return tokenBaseInner(stream, state);
      }
      function tokenBaseInner(stream, state, inFormat) {
        if (stream.eatSpace())
          return null;
        if (!inFormat && stream.match(/^#.*/))
          return "comment";
        if (stream.match(/^[0-9\.]/, false)) {
          var floatLiteral = false;
          if (stream.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)) {
            floatLiteral = true;
          }
          if (stream.match(/^[\d_]+\.\d*/)) {
            floatLiteral = true;
          }
          if (stream.match(/^\.\d+/)) {
            floatLiteral = true;
          }
          if (floatLiteral) {
            stream.eat(/J/i);
            return "number";
          }
          var intLiteral = false;
          if (stream.match(/^0x[0-9a-f_]+/i))
            intLiteral = true;
          if (stream.match(/^0b[01_]+/i))
            intLiteral = true;
          if (stream.match(/^0o[0-7_]+/i))
            intLiteral = true;
          if (stream.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)) {
            stream.eat(/J/i);
            intLiteral = true;
          }
          if (stream.match(/^0(?![\dx])/i))
            intLiteral = true;
          if (intLiteral) {
            stream.eat(/L/i);
            return "number";
          }
        }
        if (stream.match(stringPrefixes)) {
          var isFmtString = stream.current().toLowerCase().indexOf("f") !== -1;
          if (!isFmtString) {
            state.tokenize = tokenStringFactory(stream.current(), state.tokenize);
            return state.tokenize(stream, state);
          } else {
            state.tokenize = formatStringFactory(stream.current(), state.tokenize);
            return state.tokenize(stream, state);
          }
        }
        for (var i2 = 0; i2 < operators.length; i2++)
          if (stream.match(operators[i2]))
            return "operator";
        if (stream.match(delimiters))
          return "punctuation";
        if (state.lastToken == "." && stream.match(identifiers))
          return "property";
        if (stream.match(keywords) || stream.match(wordOperators))
          return "keyword";
        if (stream.match(builtins))
          return "builtin";
        if (stream.match(/^(self|cls)\b/))
          return "variable-2";
        if (stream.match(identifiers)) {
          if (state.lastToken == "def" || state.lastToken == "class")
            return "def";
          return "variable";
        }
        stream.next();
        return inFormat ? null : ERRORCLASS;
      }
      function formatStringFactory(delimiter, tokenOuter) {
        while ("rubf".indexOf(delimiter.charAt(0).toLowerCase()) >= 0)
          delimiter = delimiter.substr(1);
        var singleline = delimiter.length == 1;
        var OUTCLASS = "string";
        function tokenNestedExpr(depth) {
          return function(stream, state) {
            var inner = tokenBaseInner(stream, state, true);
            if (inner == "punctuation") {
              if (stream.current() == "{") {
                state.tokenize = tokenNestedExpr(depth + 1);
              } else if (stream.current() == "}") {
                if (depth > 1)
                  state.tokenize = tokenNestedExpr(depth - 1);
                else
                  state.tokenize = tokenString;
              }
            }
            return inner;
          };
        }
        function tokenString(stream, state) {
          while (!stream.eol()) {
            stream.eatWhile(/[^'"\{\}\\]/);
            if (stream.eat("\\")) {
              stream.next();
              if (singleline && stream.eol())
                return OUTCLASS;
            } else if (stream.match(delimiter)) {
              state.tokenize = tokenOuter;
              return OUTCLASS;
            } else if (stream.match("{{")) {
              return OUTCLASS;
            } else if (stream.match("{", false)) {
              state.tokenize = tokenNestedExpr(0);
              if (stream.current())
                return OUTCLASS;
              else
                return state.tokenize(stream, state);
            } else if (stream.match("}}")) {
              return OUTCLASS;
            } else if (stream.match("}")) {
              return ERRORCLASS;
            } else {
              stream.eat(/['"]/);
            }
          }
          if (singleline) {
            if (parserConf.singleLineStringErrors)
              return ERRORCLASS;
            else
              state.tokenize = tokenOuter;
          }
          return OUTCLASS;
        }
        tokenString.isString = true;
        return tokenString;
      }
      function tokenStringFactory(delimiter, tokenOuter) {
        while ("rubf".indexOf(delimiter.charAt(0).toLowerCase()) >= 0)
          delimiter = delimiter.substr(1);
        var singleline = delimiter.length == 1;
        var OUTCLASS = "string";
        function tokenString(stream, state) {
          while (!stream.eol()) {
            stream.eatWhile(/[^'"\\]/);
            if (stream.eat("\\")) {
              stream.next();
              if (singleline && stream.eol())
                return OUTCLASS;
            } else if (stream.match(delimiter)) {
              state.tokenize = tokenOuter;
              return OUTCLASS;
            } else {
              stream.eat(/['"]/);
            }
          }
          if (singleline) {
            if (parserConf.singleLineStringErrors)
              return ERRORCLASS;
            else
              state.tokenize = tokenOuter;
          }
          return OUTCLASS;
        }
        tokenString.isString = true;
        return tokenString;
      }
      function pushPyScope(state) {
        while (top(state).type != "py")
          state.scopes.pop();
        state.scopes.push({
          offset: top(state).offset + conf.indentUnit,
          type: "py",
          align: null
        });
      }
      function pushBracketScope(stream, state, type) {
        var align = stream.match(/^[\s\[\{\(]*(?:#|$)/, false) ? null : stream.column() + 1;
        state.scopes.push({
          offset: state.indent + hangingIndent,
          type,
          align
        });
      }
      function dedent(stream, state) {
        var indented = stream.indentation();
        while (state.scopes.length > 1 && top(state).offset > indented) {
          if (top(state).type != "py")
            return true;
          state.scopes.pop();
        }
        return top(state).offset != indented;
      }
      function tokenLexer(stream, state) {
        if (stream.sol()) {
          state.beginningOfLine = true;
          state.dedent = false;
        }
        var style = state.tokenize(stream, state);
        var current = stream.current();
        if (state.beginningOfLine && current == "@")
          return stream.match(identifiers, false) ? "meta" : py3 ? "operator" : ERRORCLASS;
        if (/\S/.test(current))
          state.beginningOfLine = false;
        if ((style == "variable" || style == "builtin") && state.lastToken == "meta")
          style = "meta";
        if (current == "pass" || current == "return")
          state.dedent = true;
        if (current == "lambda")
          state.lambda = true;
        if (current == ":" && !state.lambda && top(state).type == "py" && stream.match(/^\s*(?:#|$)/, false))
          pushPyScope(state);
        if (current.length == 1 && !/string|comment/.test(style)) {
          var delimiter_index = "[({".indexOf(current);
          if (delimiter_index != -1)
            pushBracketScope(stream, state, "])}".slice(delimiter_index, delimiter_index + 1));
          delimiter_index = "])}".indexOf(current);
          if (delimiter_index != -1) {
            if (top(state).type == current)
              state.indent = state.scopes.pop().offset - hangingIndent;
            else
              return ERRORCLASS;
          }
        }
        if (state.dedent && stream.eol() && top(state).type == "py" && state.scopes.length > 1)
          state.scopes.pop();
        return style;
      }
      var external = {
        startState: function(basecolumn) {
          return {
            tokenize: tokenBase,
            scopes: [{ offset: basecolumn || 0, type: "py", align: null }],
            indent: basecolumn || 0,
            lastToken: null,
            lambda: false,
            dedent: 0
          };
        },
        token: function(stream, state) {
          var addErr = state.errorToken;
          if (addErr)
            state.errorToken = false;
          var style = tokenLexer(stream, state);
          if (style && style != "comment")
            state.lastToken = style == "keyword" || style == "punctuation" ? stream.current() : style;
          if (style == "punctuation")
            style = null;
          if (stream.eol() && state.lambda)
            state.lambda = false;
          return addErr ? style + " " + ERRORCLASS : style;
        },
        indent: function(state, textAfter) {
          if (state.tokenize != tokenBase)
            return state.tokenize.isString ? CodeMirror2.Pass : 0;
          var scope = top(state);
          var closing = scope.type == textAfter.charAt(0) || scope.type == "py" && !state.dedent && /^(else:|elif |except |finally:)/.test(textAfter);
          if (scope.align != null)
            return scope.align - (closing ? 1 : 0);
          else
            return scope.offset - (closing ? hangingIndent : 0);
        },
        electricInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/,
        closeBrackets: { triples: `'"` },
        lineComment: "#",
        fold: "indent"
      };
      return external;
    });
    CodeMirror2.defineMIME("text/x-python", "python");
    var words = function(str) {
      return str.split(" ");
    };
    CodeMirror2.defineMIME("text/x-cython", {
      name: "python",
      extra_keywords: words("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")
    });
  });
})();
var xmlFoldExports = {};
(function(module, exports) {
  (function(mod) {
    mod(requireCodemirror());
  })(function(CodeMirror2) {
    var Pos = CodeMirror2.Pos;
    function cmp(a, b) {
      return a.line - b.line || a.ch - b.ch;
    }
    var nameStartChar = "A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var xmlTagStart = new RegExp("<(/?)([" + nameStartChar + "][" + nameChar + "]*)", "g");
    function Iter(cm, line, ch, range) {
      this.line = line;
      this.ch = ch;
      this.cm = cm;
      this.text = cm.getLine(line);
      this.min = range ? Math.max(range.from, cm.firstLine()) : cm.firstLine();
      this.max = range ? Math.min(range.to - 1, cm.lastLine()) : cm.lastLine();
    }
    function tagAt(iter, ch) {
      var type = iter.cm.getTokenTypeAt(Pos(iter.line, ch));
      return type && /\btag\b/.test(type);
    }
    function nextLine(iter) {
      if (iter.line >= iter.max)
        return;
      iter.ch = 0;
      iter.text = iter.cm.getLine(++iter.line);
      return true;
    }
    function prevLine(iter) {
      if (iter.line <= iter.min)
        return;
      iter.text = iter.cm.getLine(--iter.line);
      iter.ch = iter.text.length;
      return true;
    }
    function toTagEnd(iter) {
      for (; ; ) {
        var gt = iter.text.indexOf(">", iter.ch);
        if (gt == -1) {
          if (nextLine(iter))
            continue;
          else
            return;
        }
        if (!tagAt(iter, gt + 1)) {
          iter.ch = gt + 1;
          continue;
        }
        var lastSlash = iter.text.lastIndexOf("/", gt);
        var selfClose = lastSlash > -1 && !/\S/.test(iter.text.slice(lastSlash + 1, gt));
        iter.ch = gt + 1;
        return selfClose ? "selfClose" : "regular";
      }
    }
    function toTagStart(iter) {
      for (; ; ) {
        var lt = iter.ch ? iter.text.lastIndexOf("<", iter.ch - 1) : -1;
        if (lt == -1) {
          if (prevLine(iter))
            continue;
          else
            return;
        }
        if (!tagAt(iter, lt + 1)) {
          iter.ch = lt;
          continue;
        }
        xmlTagStart.lastIndex = lt;
        iter.ch = lt;
        var match = xmlTagStart.exec(iter.text);
        if (match && match.index == lt)
          return match;
      }
    }
    function toNextTag(iter) {
      for (; ; ) {
        xmlTagStart.lastIndex = iter.ch;
        var found = xmlTagStart.exec(iter.text);
        if (!found) {
          if (nextLine(iter))
            continue;
          else
            return;
        }
        if (!tagAt(iter, found.index + 1)) {
          iter.ch = found.index + 1;
          continue;
        }
        iter.ch = found.index + found[0].length;
        return found;
      }
    }
    function toPrevTag(iter) {
      for (; ; ) {
        var gt = iter.ch ? iter.text.lastIndexOf(">", iter.ch - 1) : -1;
        if (gt == -1) {
          if (prevLine(iter))
            continue;
          else
            return;
        }
        if (!tagAt(iter, gt + 1)) {
          iter.ch = gt;
          continue;
        }
        var lastSlash = iter.text.lastIndexOf("/", gt);
        var selfClose = lastSlash > -1 && !/\S/.test(iter.text.slice(lastSlash + 1, gt));
        iter.ch = gt + 1;
        return selfClose ? "selfClose" : "regular";
      }
    }
    function findMatchingClose(iter, tag) {
      var stack = [];
      for (; ; ) {
        var next = toNextTag(iter), end, startLine = iter.line, startCh = iter.ch - (next ? next[0].length : 0);
        if (!next || !(end = toTagEnd(iter)))
          return;
        if (end == "selfClose")
          continue;
        if (next[1]) {
          for (var i = stack.length - 1; i >= 0; --i)
            if (stack[i] == next[2]) {
              stack.length = i;
              break;
            }
          if (i < 0 && (!tag || tag == next[2]))
            return {
              tag: next[2],
              from: Pos(startLine, startCh),
              to: Pos(iter.line, iter.ch)
            };
        } else {
          stack.push(next[2]);
        }
      }
    }
    function findMatchingOpen(iter, tag) {
      var stack = [];
      for (; ; ) {
        var prev = toPrevTag(iter);
        if (!prev)
          return;
        if (prev == "selfClose") {
          toTagStart(iter);
          continue;
        }
        var endLine = iter.line, endCh = iter.ch;
        var start = toTagStart(iter);
        if (!start)
          return;
        if (start[1]) {
          stack.push(start[2]);
        } else {
          for (var i = stack.length - 1; i >= 0; --i)
            if (stack[i] == start[2]) {
              stack.length = i;
              break;
            }
          if (i < 0 && (!tag || tag == start[2]))
            return {
              tag: start[2],
              from: Pos(iter.line, iter.ch),
              to: Pos(endLine, endCh)
            };
        }
      }
    }
    CodeMirror2.registerHelper("fold", "xml", function(cm, start) {
      var iter = new Iter(cm, start.line, 0);
      for (; ; ) {
        var openTag = toNextTag(iter);
        if (!openTag || iter.line != start.line)
          return;
        var end = toTagEnd(iter);
        if (!end)
          return;
        if (!openTag[1] && end != "selfClose") {
          var startPos = Pos(iter.line, iter.ch);
          var endPos = findMatchingClose(iter, openTag[2]);
          return endPos && cmp(endPos.from, startPos) > 0 ? { from: startPos, to: endPos.from } : null;
        }
      }
    });
    CodeMirror2.findMatchingTag = function(cm, pos, range) {
      var iter = new Iter(cm, pos.line, pos.ch, range);
      if (iter.text.indexOf(">") == -1 && iter.text.indexOf("<") == -1)
        return;
      var end = toTagEnd(iter), to = end && Pos(iter.line, iter.ch);
      var start = end && toTagStart(iter);
      if (!end || !start || cmp(iter, pos) > 0)
        return;
      var here = { from: Pos(iter.line, iter.ch), to, tag: start[2] };
      if (end == "selfClose")
        return { open: here, close: null, at: "open" };
      if (start[1]) {
        return { open: findMatchingOpen(iter, start[2]), close: here, at: "close" };
      } else {
        iter = new Iter(cm, to.line, to.ch, range);
        return { open: here, close: findMatchingClose(iter, start[2]), at: "open" };
      }
    };
    CodeMirror2.findEnclosingTag = function(cm, pos, range, tag) {
      var iter = new Iter(cm, pos.line, pos.ch, range);
      for (; ; ) {
        var open = findMatchingOpen(iter, tag);
        if (!open)
          break;
        var forward = new Iter(cm, pos.line, pos.ch, range);
        var close = findMatchingClose(forward, open.tag);
        if (close)
          return { open, close };
      }
    };
    CodeMirror2.scanForClosingTag = function(cm, pos, name, end) {
      var iter = new Iter(cm, pos.line, pos.ch, end ? { from: 0, to: end } : null);
      return findMatchingClose(iter, name);
    };
  });
})();
(function(module, exports) {
  (function(mod) {
    mod(requireCodemirror(), xmlFoldExports);
  })(function(CodeMirror2) {
    CodeMirror2.defineOption("autoCloseTags", false, function(cm, val, old) {
      if (old != CodeMirror2.Init && old)
        cm.removeKeyMap("autoCloseTags");
      if (!val)
        return;
      var map2 = { name: "autoCloseTags" };
      if (typeof val != "object" || val.whenClosing !== false)
        map2["'/'"] = function(cm2) {
          return autoCloseSlash(cm2);
        };
      if (typeof val != "object" || val.whenOpening !== false)
        map2["'>'"] = function(cm2) {
          return autoCloseGT(cm2);
        };
      cm.addKeyMap(map2);
    });
    var htmlDontClose = [
      "area",
      "base",
      "br",
      "col",
      "command",
      "embed",
      "hr",
      "img",
      "input",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ];
    var htmlIndent = [
      "applet",
      "blockquote",
      "body",
      "button",
      "div",
      "dl",
      "fieldset",
      "form",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "html",
      "iframe",
      "layer",
      "legend",
      "object",
      "ol",
      "p",
      "select",
      "table",
      "ul"
    ];
    function autoCloseGT(cm) {
      if (cm.getOption("disableInput"))
        return CodeMirror2.Pass;
      var ranges = cm.listSelections(), replacements = [];
      var opt = cm.getOption("autoCloseTags");
      for (var i = 0; i < ranges.length; i++) {
        if (!ranges[i].empty())
          return CodeMirror2.Pass;
        var pos = ranges[i].head, tok = cm.getTokenAt(pos);
        var inner = CodeMirror2.innerMode(cm.getMode(), tok.state), state = inner.state;
        var tagInfo = inner.mode.xmlCurrentTag && inner.mode.xmlCurrentTag(state);
        var tagName = tagInfo && tagInfo.name;
        if (!tagName)
          return CodeMirror2.Pass;
        var html2 = inner.mode.configuration == "html";
        var dontCloseTags = typeof opt == "object" && opt.dontCloseTags || html2 && htmlDontClose;
        var indentTags = typeof opt == "object" && opt.indentTags || html2 && htmlIndent;
        if (tok.end > pos.ch)
          tagName = tagName.slice(0, tagName.length - tok.end + pos.ch);
        var lowerTagName = tagName.toLowerCase();
        if (!tagName || tok.type == "string" && (tok.end != pos.ch || !/[\"\']/.test(tok.string.charAt(tok.string.length - 1)) || tok.string.length == 1) || tok.type == "tag" && tagInfo.close || tok.string.indexOf("/") == pos.ch - tok.start - 1 || // match something like <someTagName />
        dontCloseTags && indexOf(dontCloseTags, lowerTagName) > -1 || closingTagExists(cm, inner.mode.xmlCurrentContext && inner.mode.xmlCurrentContext(state) || [], tagName, pos, true))
          return CodeMirror2.Pass;
        var emptyTags = typeof opt == "object" && opt.emptyTags;
        if (emptyTags && indexOf(emptyTags, tagName) > -1) {
          replacements[i] = { text: "/>", newPos: CodeMirror2.Pos(pos.line, pos.ch + 2) };
          continue;
        }
        var indent = indentTags && indexOf(indentTags, lowerTagName) > -1;
        replacements[i] = {
          indent,
          text: ">" + (indent ? "\n\n" : "") + "</" + tagName + ">",
          newPos: indent ? CodeMirror2.Pos(pos.line + 1, 0) : CodeMirror2.Pos(pos.line, pos.ch + 1)
        };
      }
      var dontIndentOnAutoClose = typeof opt == "object" && opt.dontIndentOnAutoClose;
      for (var i = ranges.length - 1; i >= 0; i--) {
        var info = replacements[i];
        cm.replaceRange(info.text, ranges[i].head, ranges[i].anchor, "+insert");
        var sel = cm.listSelections().slice(0);
        sel[i] = { head: info.newPos, anchor: info.newPos };
        cm.setSelections(sel);
        if (!dontIndentOnAutoClose && info.indent) {
          cm.indentLine(info.newPos.line, null, true);
          cm.indentLine(info.newPos.line + 1, null, true);
        }
      }
    }
    function autoCloseCurrent(cm, typingSlash) {
      var ranges = cm.listSelections(), replacements = [];
      var head = typingSlash ? "/" : "</";
      var opt = cm.getOption("autoCloseTags");
      var dontIndentOnAutoClose = typeof opt == "object" && opt.dontIndentOnSlash;
      for (var i = 0; i < ranges.length; i++) {
        if (!ranges[i].empty())
          return CodeMirror2.Pass;
        var pos = ranges[i].head, tok = cm.getTokenAt(pos);
        var inner = CodeMirror2.innerMode(cm.getMode(), tok.state), state = inner.state;
        if (typingSlash && (tok.type == "string" || tok.string.charAt(0) != "<" || tok.start != pos.ch - 1))
          return CodeMirror2.Pass;
        var replacement, mixed = inner.mode.name != "xml" && cm.getMode().name == "htmlmixed";
        if (mixed && inner.mode.name == "javascript") {
          replacement = head + "script";
        } else if (mixed && inner.mode.name == "css") {
          replacement = head + "style";
        } else {
          var context = inner.mode.xmlCurrentContext && inner.mode.xmlCurrentContext(state);
          var top = context.length ? context[context.length - 1] : "";
          if (!context || context.length && closingTagExists(cm, context, top, pos))
            return CodeMirror2.Pass;
          replacement = head + top;
        }
        if (cm.getLine(pos.line).charAt(tok.end) != ">")
          replacement += ">";
        replacements[i] = replacement;
      }
      cm.replaceSelections(replacements);
      ranges = cm.listSelections();
      if (!dontIndentOnAutoClose) {
        for (var i = 0; i < ranges.length; i++)
          if (i == ranges.length - 1 || ranges[i].head.line < ranges[i + 1].head.line)
            cm.indentLine(ranges[i].head.line);
      }
    }
    function autoCloseSlash(cm) {
      if (cm.getOption("disableInput"))
        return CodeMirror2.Pass;
      return autoCloseCurrent(cm, true);
    }
    CodeMirror2.commands.closeTag = function(cm) {
      return autoCloseCurrent(cm);
    };
    function indexOf(collection, elt) {
      if (collection.indexOf)
        return collection.indexOf(elt);
      for (var i = 0, e = collection.length; i < e; ++i)
        if (collection[i] == elt)
          return i;
      return -1;
    }
    function closingTagExists(cm, context, tagName, pos, newTag) {
      if (!CodeMirror2.scanForClosingTag)
        return false;
      var end = Math.min(cm.lastLine() + 1, pos.line + 500);
      var nextClose = CodeMirror2.scanForClosingTag(cm, pos, null, end);
      if (!nextClose || nextClose.tag != tagName)
        return false;
      var onCx = newTag ? 1 : 0;
      for (var i = context.length - 1; i >= 0; i--) {
        if (context[i] == tagName)
          ++onCx;
        else
          break;
      }
      pos = nextClose.to;
      for (var i = 1; i < onCx; i++) {
        var next = CodeMirror2.scanForClosingTag(cm, pos, null, end);
        if (!next || next.tag != tagName)
          return false;
        pos = next.to;
      }
      return true;
    }
  });
})();
(function(module, exports) {
  (function(mod) {
    mod(requireCodemirror());
  })(function(CodeMirror2) {
    var defaults = {
      pairs: `()[]{}''""`,
      closeBefore: `)]}'":;>`,
      triples: "",
      explode: "[]{}"
    };
    var Pos = CodeMirror2.Pos;
    CodeMirror2.defineOption("autoCloseBrackets", false, function(cm, val, old) {
      if (old && old != CodeMirror2.Init) {
        cm.removeKeyMap(keyMap);
        cm.state.closeBrackets = null;
      }
      if (val) {
        ensureBound(getOption(val, "pairs"));
        cm.state.closeBrackets = val;
        cm.addKeyMap(keyMap);
      }
    });
    function getOption(conf, name) {
      if (name == "pairs" && typeof conf == "string")
        return conf;
      if (typeof conf == "object" && conf[name] != null)
        return conf[name];
      return defaults[name];
    }
    var keyMap = { Backspace: handleBackspace, Enter: handleEnter };
    function ensureBound(chars) {
      for (var i = 0; i < chars.length; i++) {
        var ch = chars.charAt(i), key = "'" + ch + "'";
        if (!keyMap[key])
          keyMap[key] = handler(ch);
      }
    }
    ensureBound(defaults.pairs + "`");
    function handler(ch) {
      return function(cm) {
        return handleChar(cm, ch);
      };
    }
    function getConfig(cm) {
      var deflt = cm.state.closeBrackets;
      if (!deflt || deflt.override)
        return deflt;
      var mode = cm.getModeAt(cm.getCursor());
      return mode.closeBrackets || deflt;
    }
    function handleBackspace(cm) {
      var conf = getConfig(cm);
      if (!conf || cm.getOption("disableInput"))
        return CodeMirror2.Pass;
      var pairs = getOption(conf, "pairs");
      var ranges = cm.listSelections();
      for (var i = 0; i < ranges.length; i++) {
        if (!ranges[i].empty())
          return CodeMirror2.Pass;
        var around = charsAround(cm, ranges[i].head);
        if (!around || pairs.indexOf(around) % 2 != 0)
          return CodeMirror2.Pass;
      }
      for (var i = ranges.length - 1; i >= 0; i--) {
        var cur = ranges[i].head;
        cm.replaceRange("", Pos(cur.line, cur.ch - 1), Pos(cur.line, cur.ch + 1), "+delete");
      }
    }
    function handleEnter(cm) {
      var conf = getConfig(cm);
      var explode = conf && getOption(conf, "explode");
      if (!explode || cm.getOption("disableInput"))
        return CodeMirror2.Pass;
      var ranges = cm.listSelections();
      for (var i = 0; i < ranges.length; i++) {
        if (!ranges[i].empty())
          return CodeMirror2.Pass;
        var around = charsAround(cm, ranges[i].head);
        if (!around || explode.indexOf(around) % 2 != 0)
          return CodeMirror2.Pass;
      }
      cm.operation(function() {
        var linesep = cm.lineSeparator() || "\n";
        cm.replaceSelection(linesep + linesep, null);
        moveSel(cm, -1);
        ranges = cm.listSelections();
        for (var i2 = 0; i2 < ranges.length; i2++) {
          var line = ranges[i2].head.line;
          cm.indentLine(line, null, true);
          cm.indentLine(line + 1, null, true);
        }
      });
    }
    function moveSel(cm, dir) {
      var newRanges = [], ranges = cm.listSelections(), primary = 0;
      for (var i = 0; i < ranges.length; i++) {
        var range = ranges[i];
        if (range.head == cm.getCursor())
          primary = i;
        var pos = range.head.ch || dir > 0 ? { line: range.head.line, ch: range.head.ch + dir } : { line: range.head.line - 1 };
        newRanges.push({ anchor: pos, head: pos });
      }
      cm.setSelections(newRanges, primary);
    }
    function contractSelection(sel) {
      var inverted = CodeMirror2.cmpPos(sel.anchor, sel.head) > 0;
      return {
        anchor: new Pos(sel.anchor.line, sel.anchor.ch + (inverted ? -1 : 1)),
        head: new Pos(sel.head.line, sel.head.ch + (inverted ? 1 : -1))
      };
    }
    function handleChar(cm, ch) {
      var conf = getConfig(cm);
      if (!conf || cm.getOption("disableInput"))
        return CodeMirror2.Pass;
      var pairs = getOption(conf, "pairs");
      var pos = pairs.indexOf(ch);
      if (pos == -1)
        return CodeMirror2.Pass;
      var closeBefore = getOption(conf, "closeBefore");
      var triples = getOption(conf, "triples");
      var identical = pairs.charAt(pos + 1) == ch;
      var ranges = cm.listSelections();
      var opening = pos % 2 == 0;
      var type;
      for (var i = 0; i < ranges.length; i++) {
        var range = ranges[i], cur = range.head, curType;
        var next = cm.getRange(cur, Pos(cur.line, cur.ch + 1));
        if (opening && !range.empty()) {
          curType = "surround";
        } else if ((identical || !opening) && next == ch) {
          if (identical && stringStartsAfter(cm, cur))
            curType = "both";
          else if (triples.indexOf(ch) >= 0 && cm.getRange(cur, Pos(cur.line, cur.ch + 3)) == ch + ch + ch)
            curType = "skipThree";
          else
            curType = "skip";
        } else if (identical && cur.ch > 1 && triples.indexOf(ch) >= 0 && cm.getRange(Pos(cur.line, cur.ch - 2), cur) == ch + ch) {
          if (cur.ch > 2 && /\bstring/.test(cm.getTokenTypeAt(Pos(cur.line, cur.ch - 2))))
            return CodeMirror2.Pass;
          curType = "addFour";
        } else if (identical) {
          var prev = cur.ch == 0 ? " " : cm.getRange(Pos(cur.line, cur.ch - 1), cur);
          if (!CodeMirror2.isWordChar(next) && prev != ch && !CodeMirror2.isWordChar(prev))
            curType = "both";
          else
            return CodeMirror2.Pass;
        } else if (opening && (next.length === 0 || /\s/.test(next) || closeBefore.indexOf(next) > -1)) {
          curType = "both";
        } else {
          return CodeMirror2.Pass;
        }
        if (!type)
          type = curType;
        else if (type != curType)
          return CodeMirror2.Pass;
      }
      var left = pos % 2 ? pairs.charAt(pos - 1) : ch;
      var right = pos % 2 ? ch : pairs.charAt(pos + 1);
      cm.operation(function() {
        if (type == "skip") {
          moveSel(cm, 1);
        } else if (type == "skipThree") {
          moveSel(cm, 3);
        } else if (type == "surround") {
          var sels = cm.getSelections();
          for (var i2 = 0; i2 < sels.length; i2++)
            sels[i2] = left + sels[i2] + right;
          cm.replaceSelections(sels, "around");
          sels = cm.listSelections().slice();
          for (var i2 = 0; i2 < sels.length; i2++)
            sels[i2] = contractSelection(sels[i2]);
          cm.setSelections(sels);
        } else if (type == "both") {
          cm.replaceSelection(left + right, null);
          cm.triggerElectric(left + right);
          moveSel(cm, -1);
        } else if (type == "addFour") {
          cm.replaceSelection(left + left + left + left, "before");
          moveSel(cm, 1);
        }
      });
    }
    function charsAround(cm, pos) {
      var str = cm.getRange(
        Pos(pos.line, pos.ch - 1),
        Pos(pos.line, pos.ch + 1)
      );
      return str.length == 2 ? str : null;
    }
    function stringStartsAfter(cm, pos) {
      var token = cm.getTokenAt(Pos(pos.line, pos.ch + 1));
      return /\bstring/.test(token.type) && token.start == pos.ch && (pos.ch == 0 || !/\bstring/.test(cm.getTokenTypeAt(pos)));
    }
  });
})();
var codemirrorExports = requireCodemirror();
const CodeMirror = /* @__PURE__ */ getDefaultExportFromCjs(codemirrorExports);
const Editor_svelte_svelte_type_style_lang = "";
function create_fragment$8(ctx) {
  let div;
  let textarea;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      textarea = element("textarea");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      textarea = claim_element(div_nodes, "TEXTAREA", {});
      children(textarea).forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      textarea.readOnly = true;
      attr(div, "class", "editor-container svelte-y14ac0");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, textarea);
      ctx[3](textarea);
      set_input_value(
        textarea,
        /*value*/
        ctx[0]
      );
      if (!mounted) {
        dispose = listen(
          textarea,
          "input",
          /*textarea_input_handler*/
          ctx[4]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*value*/
      1) {
        set_input_value(
          textarea,
          /*value*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[3](null);
      mounted = false;
      dispose();
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  let { value } = $$props;
  let { lang } = $$props;
  let editor;
  let firstLoad = true;
  let theme;
  theme = "ayu-mirage";
  if (!firstLoad) {
    editor.setOption("theme", "ayu-dark");
  }
  let textArea;
  onMount(() => {
    editor = CodeMirror.fromTextArea(textArea, {
      lineWrapping: true,
      mode: lang,
      smartIndent: true,
      lineNumbers: true,
      theme,
      scrollbarStyle: "null",
      autoCloseTags: true,
      autoCloseBrackets: {
        pairs: `()[]{}''""`,
        explode: `()[]{}''""><`
      }
    });
    editor.focus();
    editor.on("change", () => {
      $$invalidate(0, value = editor.getValue());
    });
    firstLoad = false;
    return () => {
      editor.toTextArea();
    };
  });
  function textarea_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      textArea = $$value;
      $$invalidate(1, textArea);
    });
  }
  function textarea_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("lang" in $$props2)
      $$invalidate(2, lang = $$props2.lang);
  };
  return [value, textArea, lang, textarea_binding, textarea_input_handler];
}
class Editor extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, { value: 0, lang: 2 });
  }
}
const create$5 = () => /* @__PURE__ */ new Map();
const copy = (m) => {
  const r = create$5();
  m.forEach((v, k) => {
    r.set(k, v);
  });
  return r;
};
const setIfUndefined = (map2, key, createT) => {
  let set = map2.get(key);
  if (set === void 0) {
    map2.set(key, set = createT());
  }
  return set;
};
const map$1 = (m, f) => {
  const res = [];
  for (const [key, value] of m) {
    res.push(f(value, key));
  }
  return res;
};
const any = (m, f) => {
  for (const [key, value] of m) {
    if (f(value, key)) {
      return true;
    }
  }
  return false;
};
const create$4 = () => /* @__PURE__ */ new Set();
const last = (arr) => arr[arr.length - 1];
const appendTo = (dest, src) => {
  for (let i = 0; i < src.length; i++) {
    dest.push(src[i]);
  }
};
const from = Array.from;
const every$1 = (arr, f) => arr.every(f);
const equalFlat$1 = (a, b) => a.length === b.length && every$1(a, (item, index) => item === b[index]);
const isArray = Array.isArray;
class Observable {
  constructor() {
    this._observers = create$5();
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  on(name, f) {
    setIfUndefined(this._observers, name, create$4).add(f);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  once(name, f) {
    const _f = (...args) => {
      this.off(name, _f);
      f(...args);
    };
    this.on(name, _f);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  off(name, f) {
    const observers = this._observers.get(name);
    if (observers !== void 0) {
      observers.delete(f);
      if (observers.size === 0) {
        this._observers.delete(name);
      }
    }
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @param {N} name The event name.
   * @param {Array<any>} args The arguments that are applied to the event listener.
   */
  emit(name, args) {
    return from((this._observers.get(name) || create$5()).values()).forEach((f) => f(...args));
  }
  destroy() {
    this._observers = create$5();
  }
}
const floor = Math.floor;
const abs = Math.abs;
const add = (a, b) => a + b;
const min = (a, b) => a < b ? a : b;
const max = (a, b) => a > b ? a : b;
const pow = Math.pow;
const isNegativeZero = (n) => n !== 0 ? n < 0 : 1 / n < 0;
const fromCharCode = String.fromCharCode;
const toLowerCase = (s) => s.toLowerCase();
const trimLeftRegex = /^\s*/g;
const trimLeft = (s) => s.replace(trimLeftRegex, "");
const fromCamelCaseRegex = /([A-Z])/g;
const fromCamelCase = (s, separator) => trimLeft(s.replace(fromCamelCaseRegex, (match) => `${separator}${toLowerCase(match)}`));
const _encodeUtf8Polyfill = (str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  const buf = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    buf[i] = /** @type {number} */
    encodedString.codePointAt(i);
  }
  return buf;
};
const utf8TextEncoder = (
  /** @type {TextEncoder} */
  typeof TextEncoder !== "undefined" ? new TextEncoder() : null
);
const _encodeUtf8Native = (str) => utf8TextEncoder.encode(str);
const encodeUtf8 = utf8TextEncoder ? _encodeUtf8Native : _encodeUtf8Polyfill;
let utf8TextDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
if (utf8TextDecoder && utf8TextDecoder.decode(new Uint8Array()).length === 1) {
  utf8TextDecoder = null;
}
const undefinedToNull = (v) => v === void 0 ? null : v;
class VarStoragePolyfill {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {string} key
   * @param {any} newValue
   */
  setItem(key, newValue) {
    this.map.set(key, newValue);
  }
  /**
   * @param {string} key
   */
  getItem(key) {
    return this.map.get(key);
  }
}
let _localStorage = new VarStoragePolyfill();
let usePolyfill = true;
try {
  if (typeof localStorage !== "undefined") {
    _localStorage = localStorage;
    usePolyfill = false;
  }
} catch (e) {
}
const varStorage = _localStorage;
const onChange = (eventHandler) => usePolyfill || addEventListener(
  "storage",
  /** @type {any} */
  eventHandler
);
const keys = Object.keys;
const map = (obj, f) => {
  const results = [];
  for (const key in obj) {
    results.push(f(obj[key], key));
  }
  return results;
};
const length$1 = (obj) => keys(obj).length;
const every = (obj, f) => {
  for (const key in obj) {
    if (!f(obj[key], key)) {
      return false;
    }
  }
  return true;
};
const hasProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
const equalFlat = (a, b) => a === b || length$1(a) === length$1(b) && every(a, (val, key) => (val !== void 0 || hasProperty(b, key)) && b[key] === val);
const callAll = (fs, args, i = 0) => {
  try {
    for (; i < fs.length; i++) {
      fs[i](...args);
    }
  } finally {
    if (i < fs.length) {
      callAll(fs, args, i + 1);
    }
  }
};
const equalityStrict = (a, b) => a === b;
const equalityFlat = (a, b) => a === b || a != null && b != null && a.constructor === b.constructor && (a instanceof Array && equalFlat$1(
  a,
  /** @type {Array<T>} */
  b
) || typeof a === "object" && equalFlat(a, b));
const equalityDeep = (a, b) => {
  if (a == null || b == null) {
    return equalityStrict(a, b);
  }
  if (a.constructor !== b.constructor) {
    return false;
  }
  if (a === b) {
    return true;
  }
  switch (a.constructor) {
    case ArrayBuffer:
      a = new Uint8Array(a);
      b = new Uint8Array(b);
    case Uint8Array: {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      break;
    }
    case Set: {
      if (a.size !== b.size) {
        return false;
      }
      for (const value of a) {
        if (!b.has(value)) {
          return false;
        }
      }
      break;
    }
    case Map: {
      if (a.size !== b.size) {
        return false;
      }
      for (const key of a.keys()) {
        if (!b.has(key) || !equalityDeep(a.get(key), b.get(key))) {
          return false;
        }
      }
      break;
    }
    case Object:
      if (length$1(a) !== length$1(b)) {
        return false;
      }
      for (const key in a) {
        if (!hasProperty(a, key) || !equalityDeep(a[key], b[key])) {
          return false;
        }
      }
      break;
    case Array:
      if (a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (!equalityDeep(a[i], b[i])) {
          return false;
        }
      }
      break;
    default:
      return false;
  }
  return true;
};
const isOneOf = (value, options) => options.includes(value);
const isNode = typeof process !== "undefined" && process.release && /node|io\.js/.test(process.release.name);
const isBrowser = typeof window !== "undefined" && !isNode;
let params;
const computeParams = () => {
  if (params === void 0) {
    if (isNode) {
      params = create$5();
      const pargs = process.argv;
      let currParamName = null;
      for (let i = 0; i < pargs.length; i++) {
        const parg = pargs[i];
        if (parg[0] === "-") {
          if (currParamName !== null) {
            params.set(currParamName, "");
          }
          currParamName = parg;
        } else {
          if (currParamName !== null) {
            params.set(currParamName, parg);
            currParamName = null;
          }
        }
      }
      if (currParamName !== null) {
        params.set(currParamName, "");
      }
    } else if (typeof location === "object") {
      params = create$5();
      (location.search || "?").slice(1).split("&").forEach((kv) => {
        if (kv.length !== 0) {
          const [key, value] = kv.split("=");
          params.set(`--${fromCamelCase(key, "-")}`, value);
          params.set(`-${fromCamelCase(key, "-")}`, value);
        }
      });
    } else {
      params = create$5();
    }
  }
  return params;
};
const hasParam = (name) => computeParams().has(name);
const getVariable = (name) => isNode ? undefinedToNull(process.env[name.toUpperCase()]) : undefinedToNull(varStorage.getItem(name));
const hasConf = (name) => hasParam("--" + name) || getVariable(name) !== null;
hasConf("production");
const forceColor = isNode && isOneOf({}.FORCE_COLOR, ["true", "1", "2"]);
const supportsColor = !hasParam("no-colors") && (!isNode || process.stdout.isTTY || forceColor) && (!isNode || hasParam("color") || forceColor || getVariable("COLORTERM") !== null || (getVariable("TERM") || "").includes("color"));
const BIT1 = 1;
const BIT2 = 2;
const BIT3 = 4;
const BIT4 = 8;
const BIT6 = 32;
const BIT7 = 64;
const BIT8 = 128;
const BITS5 = 31;
const BITS6 = 63;
const BITS7 = 127;
const BITS31 = 2147483647;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
const isInteger = Number.isInteger || ((num) => typeof num === "number" && isFinite(num) && floor(num) === num);
const create$3 = (s) => new Error(s);
const methodUnimplemented = () => {
  throw create$3("Method unimplemented");
};
const unexpectedCase = () => {
  throw create$3("Unexpected case");
};
const errorUnexpectedEndOfArray = create$3("Unexpected end of array");
const errorIntegerOutOfRange = create$3("Integer out of Range");
class Decoder {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(uint8Array) {
    this.arr = uint8Array;
    this.pos = 0;
  }
}
const createDecoder = (uint8Array) => new Decoder(uint8Array);
const hasContent = (decoder) => decoder.pos !== decoder.arr.length;
const readUint8Array = (decoder, len) => {
  const view = createUint8ArrayViewFromArrayBuffer(decoder.arr.buffer, decoder.pos + decoder.arr.byteOffset, len);
  decoder.pos += len;
  return view;
};
const readVarUint8Array = (decoder) => readUint8Array(decoder, readVarUint(decoder));
const readUint8 = (decoder) => decoder.arr[decoder.pos++];
const readVarUint = (decoder) => {
  let num = 0;
  let mult = 1;
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    const r = decoder.arr[decoder.pos++];
    num = num + (r & BITS7) * mult;
    mult *= 128;
    if (r < BIT8) {
      return num;
    }
    if (num > MAX_SAFE_INTEGER) {
      throw errorIntegerOutOfRange;
    }
  }
  throw errorUnexpectedEndOfArray;
};
const readVarInt = (decoder) => {
  let r = decoder.arr[decoder.pos++];
  let num = r & BITS6;
  let mult = 64;
  const sign = (r & BIT7) > 0 ? -1 : 1;
  if ((r & BIT8) === 0) {
    return sign * num;
  }
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    r = decoder.arr[decoder.pos++];
    num = num + (r & BITS7) * mult;
    mult *= 128;
    if (r < BIT8) {
      return sign * num;
    }
    if (num > MAX_SAFE_INTEGER) {
      throw errorIntegerOutOfRange;
    }
  }
  throw errorUnexpectedEndOfArray;
};
const _readVarStringPolyfill = (decoder) => {
  let remainingLen = readVarUint(decoder);
  if (remainingLen === 0) {
    return "";
  } else {
    let encodedString = String.fromCodePoint(readUint8(decoder));
    if (--remainingLen < 100) {
      while (remainingLen--) {
        encodedString += String.fromCodePoint(readUint8(decoder));
      }
    } else {
      while (remainingLen > 0) {
        const nextLen = remainingLen < 1e4 ? remainingLen : 1e4;
        const bytes = decoder.arr.subarray(decoder.pos, decoder.pos + nextLen);
        decoder.pos += nextLen;
        encodedString += String.fromCodePoint.apply(
          null,
          /** @type {any} */
          bytes
        );
        remainingLen -= nextLen;
      }
    }
    return decodeURIComponent(escape(encodedString));
  }
};
const _readVarStringNative = (decoder) => (
  /** @type any */
  utf8TextDecoder.decode(readVarUint8Array(decoder))
);
const readVarString = utf8TextDecoder ? _readVarStringNative : _readVarStringPolyfill;
const readFromDataView = (decoder, len) => {
  const dv = new DataView(decoder.arr.buffer, decoder.arr.byteOffset + decoder.pos, len);
  decoder.pos += len;
  return dv;
};
const readFloat32 = (decoder) => readFromDataView(decoder, 4).getFloat32(0, false);
const readFloat64 = (decoder) => readFromDataView(decoder, 8).getFloat64(0, false);
const readBigInt64 = (decoder) => (
  /** @type {any} */
  readFromDataView(decoder, 8).getBigInt64(0, false)
);
const readAnyLookupTable = [
  (decoder) => void 0,
  // CASE 127: undefined
  (decoder) => null,
  // CASE 126: null
  readVarInt,
  // CASE 125: integer
  readFloat32,
  // CASE 124: float32
  readFloat64,
  // CASE 123: float64
  readBigInt64,
  // CASE 122: bigint
  (decoder) => false,
  // CASE 121: boolean (false)
  (decoder) => true,
  // CASE 120: boolean (true)
  readVarString,
  // CASE 119: string
  (decoder) => {
    const len = readVarUint(decoder);
    const obj = {};
    for (let i = 0; i < len; i++) {
      const key = readVarString(decoder);
      obj[key] = readAny(decoder);
    }
    return obj;
  },
  (decoder) => {
    const len = readVarUint(decoder);
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(readAny(decoder));
    }
    return arr;
  },
  readVarUint8Array
  // CASE 116: Uint8Array
];
const readAny = (decoder) => readAnyLookupTable[127 - readUint8(decoder)](decoder);
class RleDecoder extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(uint8Array, reader) {
    super(uint8Array);
    this.reader = reader;
    this.s = null;
    this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = this.reader(this);
      if (hasContent(this)) {
        this.count = readVarUint(this) + 1;
      } else {
        this.count = -1;
      }
    }
    this.count--;
    return (
      /** @type {T} */
      this.s
    );
  }
}
class UintOptRleDecoder extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    super(uint8Array);
    this.s = 0;
    this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = readVarInt(this);
      const isNegative = isNegativeZero(this.s);
      this.count = 1;
      if (isNegative) {
        this.s = -this.s;
        this.count = readVarUint(this) + 2;
      }
    }
    this.count--;
    return (
      /** @type {number} */
      this.s
    );
  }
}
class IntDiffOptRleDecoder extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    super(uint8Array);
    this.s = 0;
    this.count = 0;
    this.diff = 0;
  }
  /**
   * @return {number}
   */
  read() {
    if (this.count === 0) {
      const diff = readVarInt(this);
      const hasCount = diff & 1;
      this.diff = floor(diff / 2);
      this.count = 1;
      if (hasCount) {
        this.count = readVarUint(this) + 2;
      }
    }
    this.s += this.diff;
    this.count--;
    return this.s;
  }
}
class StringDecoder {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    this.decoder = new UintOptRleDecoder(uint8Array);
    this.str = readVarString(this.decoder);
    this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const end = this.spos + this.decoder.read();
    const res = this.str.slice(this.spos, end);
    this.spos = end;
    return res;
  }
}
const createUint8ArrayFromLen = (len) => new Uint8Array(len);
const createUint8ArrayViewFromArrayBuffer = (buffer, byteOffset, length2) => new Uint8Array(buffer, byteOffset, length2);
const createUint8ArrayFromArrayBuffer = (buffer) => new Uint8Array(buffer);
const toBase64Browser = (bytes) => {
  let s = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    s += fromCharCode(bytes[i]);
  }
  return btoa(s);
};
const toBase64Node = (bytes) => Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength).toString("base64");
const fromBase64Browser = (s) => {
  const a = atob(s);
  const bytes = createUint8ArrayFromLen(a.length);
  for (let i = 0; i < a.length; i++) {
    bytes[i] = a.charCodeAt(i);
  }
  return bytes;
};
const fromBase64Node = (s) => {
  const buf = Buffer.from(s, "base64");
  return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
};
const toBase64 = isBrowser ? toBase64Browser : toBase64Node;
const fromBase64 = isBrowser ? fromBase64Browser : fromBase64Node;
const copyUint8Array = (uint8Array) => {
  const newBuf = createUint8ArrayFromLen(uint8Array.byteLength);
  newBuf.set(uint8Array);
  return newBuf;
};
class Encoder {
  constructor() {
    this.cpos = 0;
    this.cbuf = new Uint8Array(100);
    this.bufs = [];
  }
}
const createEncoder = () => new Encoder();
const length = (encoder) => {
  let len = encoder.cpos;
  for (let i = 0; i < encoder.bufs.length; i++) {
    len += encoder.bufs[i].length;
  }
  return len;
};
const toUint8Array = (encoder) => {
  const uint8arr = new Uint8Array(length(encoder));
  let curPos = 0;
  for (let i = 0; i < encoder.bufs.length; i++) {
    const d = encoder.bufs[i];
    uint8arr.set(d, curPos);
    curPos += d.length;
  }
  uint8arr.set(createUint8ArrayViewFromArrayBuffer(encoder.cbuf.buffer, 0, encoder.cpos), curPos);
  return uint8arr;
};
const verifyLen = (encoder, len) => {
  const bufferLen = encoder.cbuf.length;
  if (bufferLen - encoder.cpos < len) {
    encoder.bufs.push(createUint8ArrayViewFromArrayBuffer(encoder.cbuf.buffer, 0, encoder.cpos));
    encoder.cbuf = new Uint8Array(max(bufferLen, len) * 2);
    encoder.cpos = 0;
  }
};
const write = (encoder, num) => {
  const bufferLen = encoder.cbuf.length;
  if (encoder.cpos === bufferLen) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(bufferLen * 2);
    encoder.cpos = 0;
  }
  encoder.cbuf[encoder.cpos++] = num;
};
const writeUint8 = write;
const writeVarUint = (encoder, num) => {
  while (num > BITS7) {
    write(encoder, BIT8 | BITS7 & num);
    num = floor(num / 128);
  }
  write(encoder, BITS7 & num);
};
const writeVarInt = (encoder, num) => {
  const isNegative = isNegativeZero(num);
  if (isNegative) {
    num = -num;
  }
  write(encoder, (num > BITS6 ? BIT8 : 0) | (isNegative ? BIT7 : 0) | BITS6 & num);
  num = floor(num / 64);
  while (num > 0) {
    write(encoder, (num > BITS7 ? BIT8 : 0) | BITS7 & num);
    num = floor(num / 128);
  }
};
const _strBuffer = new Uint8Array(3e4);
const _maxStrBSize = _strBuffer.length / 3;
const _writeVarStringNative = (encoder, str) => {
  if (str.length < _maxStrBSize) {
    const written = utf8TextEncoder.encodeInto(str, _strBuffer).written || 0;
    writeVarUint(encoder, written);
    for (let i = 0; i < written; i++) {
      write(encoder, _strBuffer[i]);
    }
  } else {
    writeVarUint8Array(encoder, encodeUtf8(str));
  }
};
const _writeVarStringPolyfill = (encoder, str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  writeVarUint(encoder, len);
  for (let i = 0; i < len; i++) {
    write(
      encoder,
      /** @type {number} */
      encodedString.codePointAt(i)
    );
  }
};
const writeVarString = utf8TextEncoder && utf8TextEncoder.encodeInto ? _writeVarStringNative : _writeVarStringPolyfill;
const writeUint8Array = (encoder, uint8Array) => {
  const bufferLen = encoder.cbuf.length;
  const cpos = encoder.cpos;
  const leftCopyLen = min(bufferLen - cpos, uint8Array.length);
  const rightCopyLen = uint8Array.length - leftCopyLen;
  encoder.cbuf.set(uint8Array.subarray(0, leftCopyLen), cpos);
  encoder.cpos += leftCopyLen;
  if (rightCopyLen > 0) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(max(bufferLen * 2, rightCopyLen));
    encoder.cbuf.set(uint8Array.subarray(leftCopyLen));
    encoder.cpos = rightCopyLen;
  }
};
const writeVarUint8Array = (encoder, uint8Array) => {
  writeVarUint(encoder, uint8Array.byteLength);
  writeUint8Array(encoder, uint8Array);
};
const writeOnDataView = (encoder, len) => {
  verifyLen(encoder, len);
  const dview = new DataView(encoder.cbuf.buffer, encoder.cpos, len);
  encoder.cpos += len;
  return dview;
};
const writeFloat32 = (encoder, num) => writeOnDataView(encoder, 4).setFloat32(0, num, false);
const writeFloat64 = (encoder, num) => writeOnDataView(encoder, 8).setFloat64(0, num, false);
const writeBigInt64 = (encoder, num) => (
  /** @type {any} */
  writeOnDataView(encoder, 8).setBigInt64(0, num, false)
);
const floatTestBed = new DataView(new ArrayBuffer(4));
const isFloat32 = (num) => {
  floatTestBed.setFloat32(0, num);
  return floatTestBed.getFloat32(0) === num;
};
const writeAny = (encoder, data) => {
  switch (typeof data) {
    case "string":
      write(encoder, 119);
      writeVarString(encoder, data);
      break;
    case "number":
      if (isInteger(data) && abs(data) <= BITS31) {
        write(encoder, 125);
        writeVarInt(encoder, data);
      } else if (isFloat32(data)) {
        write(encoder, 124);
        writeFloat32(encoder, data);
      } else {
        write(encoder, 123);
        writeFloat64(encoder, data);
      }
      break;
    case "bigint":
      write(encoder, 122);
      writeBigInt64(encoder, data);
      break;
    case "object":
      if (data === null) {
        write(encoder, 126);
      } else if (data instanceof Array) {
        write(encoder, 117);
        writeVarUint(encoder, data.length);
        for (let i = 0; i < data.length; i++) {
          writeAny(encoder, data[i]);
        }
      } else if (data instanceof Uint8Array) {
        write(encoder, 116);
        writeVarUint8Array(encoder, data);
      } else {
        write(encoder, 118);
        const keys2 = Object.keys(data);
        writeVarUint(encoder, keys2.length);
        for (let i = 0; i < keys2.length; i++) {
          const key = keys2[i];
          writeVarString(encoder, key);
          writeAny(encoder, data[key]);
        }
      }
      break;
    case "boolean":
      write(encoder, data ? 120 : 121);
      break;
    default:
      write(encoder, 127);
  }
};
class RleEncoder extends Encoder {
  /**
   * @param {function(Encoder, T):void} writer
   */
  constructor(writer) {
    super();
    this.w = writer;
    this.s = null;
    this.count = 0;
  }
  /**
   * @param {T} v
   */
  write(v) {
    if (this.s === v) {
      this.count++;
    } else {
      if (this.count > 0) {
        writeVarUint(this, this.count - 1);
      }
      this.count = 1;
      this.w(this, v);
      this.s = v;
    }
  }
}
const flushUintOptRleEncoder = (encoder) => {
  if (encoder.count > 0) {
    writeVarInt(encoder.encoder, encoder.count === 1 ? encoder.s : -encoder.s);
    if (encoder.count > 1) {
      writeVarUint(encoder.encoder, encoder.count - 2);
    }
  }
};
class UintOptRleEncoder {
  constructor() {
    this.encoder = new Encoder();
    this.s = 0;
    this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(v) {
    if (this.s === v) {
      this.count++;
    } else {
      flushUintOptRleEncoder(this);
      this.count = 1;
      this.s = v;
    }
  }
  toUint8Array() {
    flushUintOptRleEncoder(this);
    return toUint8Array(this.encoder);
  }
}
const flushIntDiffOptRleEncoder = (encoder) => {
  if (encoder.count > 0) {
    const encodedDiff = encoder.diff * 2 + (encoder.count === 1 ? 0 : 1);
    writeVarInt(encoder.encoder, encodedDiff);
    if (encoder.count > 1) {
      writeVarUint(encoder.encoder, encoder.count - 2);
    }
  }
};
class IntDiffOptRleEncoder {
  constructor() {
    this.encoder = new Encoder();
    this.s = 0;
    this.count = 0;
    this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(v) {
    if (this.diff === v - this.s) {
      this.s = v;
      this.count++;
    } else {
      flushIntDiffOptRleEncoder(this);
      this.count = 1;
      this.diff = v - this.s;
      this.s = v;
    }
  }
  toUint8Array() {
    flushIntDiffOptRleEncoder(this);
    return toUint8Array(this.encoder);
  }
}
class StringEncoder {
  constructor() {
    this.sarr = [];
    this.s = "";
    this.lensE = new UintOptRleEncoder();
  }
  /**
   * @param {string} string
   */
  write(string) {
    this.s += string;
    if (this.s.length > 19) {
      this.sarr.push(this.s);
      this.s = "";
    }
    this.lensE.write(string.length);
  }
  toUint8Array() {
    const encoder = new Encoder();
    this.sarr.push(this.s);
    this.s = "";
    writeVarString(encoder, this.sarr.join(""));
    writeUint8Array(encoder, this.lensE.toUint8Array());
    return toUint8Array(encoder);
  }
}
const isoCrypto = typeof crypto === "undefined" ? null : crypto;
const cryptoRandomBuffer = isoCrypto !== null ? (len) => {
  const buf = new ArrayBuffer(len);
  const arr = new Uint8Array(buf);
  isoCrypto.getRandomValues(arr);
  return buf;
} : (len) => {
  const buf = new ArrayBuffer(len);
  const arr = new Uint8Array(buf);
  for (let i = 0; i < len; i++) {
    arr[i] = Math.ceil(Math.random() * 4294967295 >>> 0);
  }
  return buf;
};
const uint32 = () => new Uint32Array(cryptoRandomBuffer(4))[0];
const uuidv4Template = [1e7] + -1e3 + -4e3 + -8e3 + -1e11;
const uuidv4 = () => uuidv4Template.replace(
  /[018]/g,
  /** @param {number} c */
  (c) => (c ^ uint32() & 15 >> c / 4).toString(16)
);
const getUnixTime = Date.now;
const create$2 = (f) => (
  /** @type {Promise<T>} */
  new Promise(f)
);
const create$1 = Symbol;
class Pair {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
}
const create = (left, right) => new Pair(left, right);
const doc = (
  /** @type {Document} */
  typeof document !== "undefined" ? document : {}
);
typeof DOMParser !== "undefined" ? new DOMParser() : null;
const mapToStyleString = (m) => map$1(m, (value, key) => `${key}:${value};`).join("");
doc.ELEMENT_NODE;
doc.TEXT_NODE;
doc.CDATA_SECTION_NODE;
doc.COMMENT_NODE;
doc.DOCUMENT_NODE;
doc.DOCUMENT_TYPE_NODE;
doc.DOCUMENT_FRAGMENT_NODE;
const createDebouncer = (timeout) => {
  let timer = -1;
  return (f) => {
    clearTimeout(timer);
    if (f) {
      timer = /** @type {any} */
      setTimeout(f, timeout);
    }
  };
};
const BOLD = create$1();
const UNBOLD = create$1();
const BLUE = create$1();
const GREY = create$1();
const GREEN = create$1();
const RED = create$1();
const PURPLE = create$1();
const ORANGE = create$1();
const UNCOLOR = create$1();
const _browserStyleMap = {
  [BOLD]: create("font-weight", "bold"),
  [UNBOLD]: create("font-weight", "normal"),
  [BLUE]: create("color", "blue"),
  [GREEN]: create("color", "green"),
  [GREY]: create("color", "grey"),
  [RED]: create("color", "red"),
  [PURPLE]: create("color", "purple"),
  [ORANGE]: create("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [UNCOLOR]: create("color", "black")
};
const _nodeStyleMap = {
  [BOLD]: "\x1B[1m",
  [UNBOLD]: "\x1B[2m",
  [BLUE]: "\x1B[34m",
  [GREEN]: "\x1B[32m",
  [GREY]: "\x1B[37m",
  [RED]: "\x1B[31m",
  [PURPLE]: "\x1B[35m",
  [ORANGE]: "\x1B[38;5;208m",
  [UNCOLOR]: "\x1B[0m"
};
const computeBrowserLoggingArgs = (args) => {
  const strBuilder = [];
  const styles = [];
  const currentStyle = create$5();
  let logArgs = [];
  let i = 0;
  for (; i < args.length; i++) {
    const arg = args[i];
    const style = _browserStyleMap[arg];
    if (style !== void 0) {
      currentStyle.set(style.left, style.right);
    } else {
      if (arg.constructor === String || arg.constructor === Number) {
        const style2 = mapToStyleString(currentStyle);
        if (i > 0 || style2.length > 0) {
          strBuilder.push("%c" + arg);
          styles.push(style2);
        } else {
          strBuilder.push(arg);
        }
      } else {
        break;
      }
    }
  }
  if (i > 0) {
    logArgs = styles;
    logArgs.unshift(strBuilder.join(""));
  }
  for (; i < args.length; i++) {
    const arg = args[i];
    if (!(arg instanceof Symbol)) {
      logArgs.push(arg);
    }
  }
  return logArgs;
};
const computeNoColorLoggingArgs = (args) => {
  const strBuilder = [];
  const logArgs = [];
  let i = 0;
  for (; i < args.length; i++) {
    const arg = args[i];
    const style = _nodeStyleMap[arg];
    if (style === void 0) {
      if (arg.constructor === String || arg.constructor === Number) {
        strBuilder.push(arg);
      } else {
        break;
      }
    }
  }
  if (i > 0) {
    logArgs.push(strBuilder.join(""));
  }
  for (; i < args.length; i++) {
    const arg = args[i];
    if (!(arg instanceof Symbol)) {
      if (arg.constructor === Object) {
        logArgs.push(JSON.stringify(arg));
      } else {
        logArgs.push(arg);
      }
    }
  }
  return logArgs;
};
const computeNodeLoggingArgs = (args) => {
  const strBuilder = [];
  const logArgs = [];
  let i = 0;
  for (; i < args.length; i++) {
    const arg = args[i];
    const style = _nodeStyleMap[arg];
    if (style !== void 0) {
      strBuilder.push(style);
    } else {
      if (arg.constructor === String || arg.constructor === Number) {
        strBuilder.push(arg);
      } else {
        break;
      }
    }
  }
  if (i > 0) {
    strBuilder.push("\x1B[0m");
    logArgs.push(strBuilder.join(""));
  }
  for (; i < args.length; i++) {
    const arg = args[i];
    if (!(arg instanceof Symbol)) {
      logArgs.push(arg);
    }
  }
  return logArgs;
};
const computeLoggingArgs = supportsColor ? isNode ? computeNodeLoggingArgs : computeBrowserLoggingArgs : computeNoColorLoggingArgs;
const print = (...args) => {
  console.log(...computeLoggingArgs(args));
  vconsoles.forEach((vc) => vc.print(args));
};
const vconsoles = create$4();
const createIterator = (next) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next
});
const iteratorFilter = (iterator, filter) => createIterator(() => {
  let res;
  do {
    res = iterator.next();
  } while (!res.done && !filter(res.value));
  return res;
});
const iteratorMap = (iterator, fmap) => createIterator(() => {
  const { done, value } = iterator.next();
  return { done, value: done ? void 0 : fmap(value) };
});
class AbstractConnector extends Observable {
  /**
   * @param {Doc} ydoc
   * @param {any} awareness
   */
  constructor(ydoc, awareness) {
    super();
    this.doc = ydoc;
    this.awareness = awareness;
  }
}
class DeleteItem {
  /**
   * @param {number} clock
   * @param {number} len
   */
  constructor(clock, len) {
    this.clock = clock;
    this.len = len;
  }
}
class DeleteSet {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
}
const iterateDeletedStructs = (transaction, ds, f) => ds.clients.forEach((deletes, clientid) => {
  const structs = (
    /** @type {Array<GC|Item>} */
    transaction.doc.store.clients.get(clientid)
  );
  for (let i = 0; i < deletes.length; i++) {
    const del = deletes[i];
    iterateStructs(transaction, structs, del.clock, del.len, f);
  }
});
const findIndexDS = (dis, clock) => {
  let left = 0;
  let right = dis.length - 1;
  while (left <= right) {
    const midindex = floor((left + right) / 2);
    const mid = dis[midindex];
    const midclock = mid.clock;
    if (midclock <= clock) {
      if (clock < midclock + mid.len) {
        return midindex;
      }
      left = midindex + 1;
    } else {
      right = midindex - 1;
    }
  }
  return null;
};
const isDeleted = (ds, id) => {
  const dis = ds.clients.get(id.client);
  return dis !== void 0 && findIndexDS(dis, id.clock) !== null;
};
const sortAndMergeDeleteSet = (ds) => {
  ds.clients.forEach((dels) => {
    dels.sort((a, b) => a.clock - b.clock);
    let i, j;
    for (i = 1, j = 1; i < dels.length; i++) {
      const left = dels[j - 1];
      const right = dels[i];
      if (left.clock + left.len >= right.clock) {
        left.len = max(left.len, right.clock + right.len - left.clock);
      } else {
        if (j < i) {
          dels[j] = right;
        }
        j++;
      }
    }
    dels.length = j;
  });
};
const mergeDeleteSets = (dss) => {
  const merged = new DeleteSet();
  for (let dssI = 0; dssI < dss.length; dssI++) {
    dss[dssI].clients.forEach((delsLeft, client) => {
      if (!merged.clients.has(client)) {
        const dels = delsLeft.slice();
        for (let i = dssI + 1; i < dss.length; i++) {
          appendTo(dels, dss[i].clients.get(client) || []);
        }
        merged.clients.set(client, dels);
      }
    });
  }
  sortAndMergeDeleteSet(merged);
  return merged;
};
const addToDeleteSet = (ds, client, clock, length2) => {
  setIfUndefined(ds.clients, client, () => []).push(new DeleteItem(clock, length2));
};
const createDeleteSet = () => new DeleteSet();
const createDeleteSetFromStructStore = (ss) => {
  const ds = createDeleteSet();
  ss.clients.forEach((structs, client) => {
    const dsitems = [];
    for (let i = 0; i < structs.length; i++) {
      const struct = structs[i];
      if (struct.deleted) {
        const clock = struct.id.clock;
        let len = struct.length;
        if (i + 1 < structs.length) {
          for (let next = structs[i + 1]; i + 1 < structs.length && next.deleted; next = structs[++i + 1]) {
            len += next.length;
          }
        }
        dsitems.push(new DeleteItem(clock, len));
      }
    }
    if (dsitems.length > 0) {
      ds.clients.set(client, dsitems);
    }
  });
  return ds;
};
const writeDeleteSet = (encoder, ds) => {
  writeVarUint(encoder.restEncoder, ds.clients.size);
  ds.clients.forEach((dsitems, client) => {
    encoder.resetDsCurVal();
    writeVarUint(encoder.restEncoder, client);
    const len = dsitems.length;
    writeVarUint(encoder.restEncoder, len);
    for (let i = 0; i < len; i++) {
      const item = dsitems[i];
      encoder.writeDsClock(item.clock);
      encoder.writeDsLen(item.len);
    }
  });
};
const readDeleteSet = (decoder) => {
  const ds = new DeleteSet();
  const numClients = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numClients; i++) {
    decoder.resetDsCurVal();
    const client = readVarUint(decoder.restDecoder);
    const numberOfDeletes = readVarUint(decoder.restDecoder);
    if (numberOfDeletes > 0) {
      const dsField = setIfUndefined(ds.clients, client, () => []);
      for (let i2 = 0; i2 < numberOfDeletes; i2++) {
        dsField.push(new DeleteItem(decoder.readDsClock(), decoder.readDsLen()));
      }
    }
  }
  return ds;
};
const readAndApplyDeleteSet = (decoder, transaction, store) => {
  const unappliedDS = new DeleteSet();
  const numClients = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numClients; i++) {
    decoder.resetDsCurVal();
    const client = readVarUint(decoder.restDecoder);
    const numberOfDeletes = readVarUint(decoder.restDecoder);
    const structs = store.clients.get(client) || [];
    const state = getState(store, client);
    for (let i2 = 0; i2 < numberOfDeletes; i2++) {
      const clock = decoder.readDsClock();
      const clockEnd = clock + decoder.readDsLen();
      if (clock < state) {
        if (state < clockEnd) {
          addToDeleteSet(unappliedDS, client, state, clockEnd - state);
        }
        let index = findIndexSS(structs, clock);
        let struct = structs[index];
        if (!struct.deleted && struct.id.clock < clock) {
          structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
          index++;
        }
        while (index < structs.length) {
          struct = structs[index++];
          if (struct.id.clock < clockEnd) {
            if (!struct.deleted) {
              if (clockEnd < struct.id.clock + struct.length) {
                structs.splice(index, 0, splitItem(transaction, struct, clockEnd - struct.id.clock));
              }
              struct.delete(transaction);
            }
          } else {
            break;
          }
        }
      } else {
        addToDeleteSet(unappliedDS, client, clock, clockEnd - clock);
      }
    }
  }
  if (unappliedDS.clients.size > 0) {
    const ds = new UpdateEncoderV2();
    writeVarUint(ds.restEncoder, 0);
    writeDeleteSet(ds, unappliedDS);
    return ds.toUint8Array();
  }
  return null;
};
const generateNewClientId = uint32;
class Doc extends Observable {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid = uuidv4(), collectionid = null, gc = true, gcFilter = () => true, meta = null, autoLoad = false, shouldLoad = true } = {}) {
    super();
    this.gc = gc;
    this.gcFilter = gcFilter;
    this.clientID = generateNewClientId();
    this.guid = guid;
    this.collectionid = collectionid;
    this.share = /* @__PURE__ */ new Map();
    this.store = new StructStore();
    this._transaction = null;
    this._transactionCleanups = [];
    this.subdocs = /* @__PURE__ */ new Set();
    this._item = null;
    this.shouldLoad = shouldLoad;
    this.autoLoad = autoLoad;
    this.meta = meta;
    this.isLoaded = false;
    this.isSynced = false;
    this.whenLoaded = create$2((resolve) => {
      this.on("load", () => {
        this.isLoaded = true;
        resolve(this);
      });
    });
    const provideSyncedPromise = () => create$2((resolve) => {
      const eventHandler = (isSynced) => {
        if (isSynced === void 0 || isSynced === true) {
          this.off("sync", eventHandler);
          resolve();
        }
      };
      this.on("sync", eventHandler);
    });
    this.on("sync", (isSynced) => {
      if (isSynced === false && this.isSynced) {
        this.whenSynced = provideSyncedPromise();
      }
      this.isSynced = isSynced === void 0 || isSynced === true;
      if (!this.isLoaded) {
        this.emit("load", []);
      }
    });
    this.whenSynced = provideSyncedPromise();
  }
  /**
   * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
   *
   * `load()` might be used in the future to request any provider to load the most current data.
   *
   * It is safe to call `load()` multiple times.
   */
  load() {
    const item = this._item;
    if (item !== null && !this.shouldLoad) {
      transact(
        /** @type {any} */
        item.parent.doc,
        (transaction) => {
          transaction.subdocsLoaded.add(this);
        },
        null,
        true
      );
    }
    this.shouldLoad = true;
  }
  getSubdocs() {
    return this.subdocs;
  }
  getSubdocGuids() {
    return new Set(Array.from(this.subdocs).map((doc2) => doc2.guid));
  }
  /**
   * Changes that happen inside of a transaction are bundled. This means that
   * the observer fires _after_ the transaction is finished and that all changes
   * that happened inside of the transaction are sent as one message to the
   * other peers.
   *
   * @param {function(Transaction):void} f The function that should be executed as a transaction
   * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
   *
   * @public
   */
  transact(f, origin = null) {
    transact(this, f, origin);
  }
  /**
   * Define a shared data type.
   *
   * Multiple calls of `y.get(name, TypeConstructor)` yield the same result
   * and do not overwrite each other. I.e.
   * `y.define(name, Y.Array) === y.define(name, Y.Array)`
   *
   * After this method is called, the type is also available on `y.share.get(name)`.
   *
   * *Best Practices:*
   * Define all types right after the Yjs instance is created and store them in a separate object.
   * Also use the typed methods `getText(name)`, `getArray(name)`, ..
   *
   * @example
   *   const y = new Y(..)
   *   const appState = {
   *     document: y.getText('document')
   *     comments: y.getArray('comments')
   *   }
   *
   * @param {string} name
   * @param {Function} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
   * @return {AbstractType<any>} The created type. Constructed with TypeConstructor
   *
   * @public
   */
  get(name, TypeConstructor = AbstractType) {
    const type = setIfUndefined(this.share, name, () => {
      const t = new TypeConstructor();
      t._integrate(this, null);
      return t;
    });
    const Constr = type.constructor;
    if (TypeConstructor !== AbstractType && Constr !== TypeConstructor) {
      if (Constr === AbstractType) {
        const t = new TypeConstructor();
        t._map = type._map;
        type._map.forEach(
          /** @param {Item?} n */
          (n) => {
            for (; n !== null; n = n.left) {
              n.parent = t;
            }
          }
        );
        t._start = type._start;
        for (let n = t._start; n !== null; n = n.right) {
          n.parent = t;
        }
        t._length = type._length;
        this.share.set(name, t);
        t._integrate(this, null);
        return t;
      } else {
        throw new Error(`Type with the name ${name} has already been defined with a different constructor`);
      }
    }
    return type;
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YArray<T>}
   *
   * @public
   */
  getArray(name = "") {
    return this.get(name, YArray);
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(name = "") {
    return this.get(name, YText);
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YMap<T>}
   *
   * @public
   */
  getMap(name = "") {
    return this.get(name, YMap);
  }
  /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */
  getXmlFragment(name = "") {
    return this.get(name, YXmlFragment);
  }
  /**
   * Converts the entire document into a js object, recursively traversing each yjs type
   * Doesn't log types that have not been defined (using ydoc.getType(..)).
   *
   * @deprecated Do not use this method and rather call toJSON directly on the shared types.
   *
   * @return {Object<string, any>}
   */
  toJSON() {
    const doc2 = {};
    this.share.forEach((value, key) => {
      doc2[key] = value.toJSON();
    });
    return doc2;
  }
  /**
   * Emit `destroy` event and unregister all event handlers.
   */
  destroy() {
    from(this.subdocs).forEach((subdoc) => subdoc.destroy());
    const item = this._item;
    if (item !== null) {
      this._item = null;
      const content = (
        /** @type {ContentDoc} */
        item.content
      );
      content.doc = new Doc({ guid: this.guid, ...content.opts, shouldLoad: false });
      content.doc._item = item;
      transact(
        /** @type {any} */
        item.parent.doc,
        (transaction) => {
          const doc2 = content.doc;
          if (!item.deleted) {
            transaction.subdocsAdded.add(doc2);
          }
          transaction.subdocsRemoved.add(this);
        },
        null,
        true
      );
    }
    this.emit("destroyed", [true]);
    this.emit("destroy", [this]);
    super.destroy();
  }
  /**
   * @param {string} eventName
   * @param {function(...any):any} f
   */
  on(eventName, f) {
    super.on(eventName, f);
  }
  /**
   * @param {string} eventName
   * @param {function} f
   */
  off(eventName, f) {
    super.off(eventName, f);
  }
}
class DSDecoderV1 {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    this.restDecoder = decoder;
  }
  resetDsCurVal() {
  }
  /**
   * @return {number}
   */
  readDsClock() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {number}
   */
  readDsLen() {
    return readVarUint(this.restDecoder);
  }
}
class UpdateDecoderV1 extends DSDecoderV1 {
  /**
   * @return {ID}
   */
  readLeftID() {
    return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return readUint8(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readString() {
    return readVarString(this.restDecoder);
  }
  /**
   * @return {boolean} isKey
   */
  readParentInfo() {
    return readVarUint(this.restDecoder) === 1;
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readTypeRef() {
    return readVarUint(this.restDecoder);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number} len
   */
  readLen() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {any}
   */
  readAny() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return copyUint8Array(readVarUint8Array(this.restDecoder));
  }
  /**
   * Legacy implementation uses JSON parse. We use any-decoding in v2.
   *
   * @return {any}
   */
  readJSON() {
    return JSON.parse(readVarString(this.restDecoder));
  }
  /**
   * @return {string}
   */
  readKey() {
    return readVarString(this.restDecoder);
  }
}
class DSDecoderV2 {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    this.dsCurrVal = 0;
    this.restDecoder = decoder;
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @return {number}
   */
  readDsClock() {
    this.dsCurrVal += readVarUint(this.restDecoder);
    return this.dsCurrVal;
  }
  /**
   * @return {number}
   */
  readDsLen() {
    const diff = readVarUint(this.restDecoder) + 1;
    this.dsCurrVal += diff;
    return diff;
  }
}
class UpdateDecoderV2 extends DSDecoderV2 {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    super(decoder);
    this.keys = [];
    readVarUint(decoder);
    this.keyClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.clientDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
    this.leftClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.rightClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.infoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
    this.stringDecoder = new StringDecoder(readVarUint8Array(decoder));
    this.parentInfoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
    this.typeRefDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
    this.lenDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new ID(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new ID(this.clientDecoder.read(), this.rightClockDecoder.read());
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return this.clientDecoder.read();
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return (
      /** @type {number} */
      this.infoDecoder.read()
    );
  }
  /**
   * @return {string}
   */
  readString() {
    return this.stringDecoder.read();
  }
  /**
   * @return {boolean}
   */
  readParentInfo() {
    return this.parentInfoDecoder.read() === 1;
  }
  /**
   * @return {number} An unsigned 8-bit integer
   */
  readTypeRef() {
    return this.typeRefDecoder.read();
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number}
   */
  readLen() {
    return this.lenDecoder.read();
  }
  /**
   * @return {any}
   */
  readAny() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return readVarUint8Array(this.restDecoder);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @return {any}
   */
  readJSON() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readKey() {
    const keyClock = this.keyClockDecoder.read();
    if (keyClock < this.keys.length) {
      return this.keys[keyClock];
    } else {
      const key = this.stringDecoder.read();
      this.keys.push(key);
      return key;
    }
  }
}
class DSEncoderV1 {
  constructor() {
    this.restEncoder = createEncoder();
  }
  toUint8Array() {
    return toUint8Array(this.restEncoder);
  }
  resetDsCurVal() {
  }
  /**
   * @param {number} clock
   */
  writeDsClock(clock) {
    writeVarUint(this.restEncoder, clock);
  }
  /**
   * @param {number} len
   */
  writeDsLen(len) {
    writeVarUint(this.restEncoder, len);
  }
}
class UpdateEncoderV1 extends DSEncoderV1 {
  /**
   * @param {ID} id
   */
  writeLeftID(id) {
    writeVarUint(this.restEncoder, id.client);
    writeVarUint(this.restEncoder, id.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(id) {
    writeVarUint(this.restEncoder, id.client);
    writeVarUint(this.restEncoder, id.clock);
  }
  /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */
  writeClient(client) {
    writeVarUint(this.restEncoder, client);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(info) {
    writeUint8(this.restEncoder, info);
  }
  /**
   * @param {string} s
   */
  writeString(s) {
    writeVarString(this.restEncoder, s);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(isYKey) {
    writeVarUint(this.restEncoder, isYKey ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(info) {
    writeVarUint(this.restEncoder, info);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(len) {
    writeVarUint(this.restEncoder, len);
  }
  /**
   * @param {any} any
   */
  writeAny(any2) {
    writeAny(this.restEncoder, any2);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(buf) {
    writeVarUint8Array(this.restEncoder, buf);
  }
  /**
   * @param {any} embed
   */
  writeJSON(embed) {
    writeVarString(this.restEncoder, JSON.stringify(embed));
  }
  /**
   * @param {string} key
   */
  writeKey(key) {
    writeVarString(this.restEncoder, key);
  }
}
class DSEncoderV2 {
  constructor() {
    this.restEncoder = createEncoder();
    this.dsCurrVal = 0;
  }
  toUint8Array() {
    return toUint8Array(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @param {number} clock
   */
  writeDsClock(clock) {
    const diff = clock - this.dsCurrVal;
    this.dsCurrVal = clock;
    writeVarUint(this.restEncoder, diff);
  }
  /**
   * @param {number} len
   */
  writeDsLen(len) {
    if (len === 0) {
      unexpectedCase();
    }
    writeVarUint(this.restEncoder, len - 1);
    this.dsCurrVal += len;
  }
}
class UpdateEncoderV2 extends DSEncoderV2 {
  constructor() {
    super();
    this.keyMap = /* @__PURE__ */ new Map();
    this.keyClock = 0;
    this.keyClockEncoder = new IntDiffOptRleEncoder();
    this.clientEncoder = new UintOptRleEncoder();
    this.leftClockEncoder = new IntDiffOptRleEncoder();
    this.rightClockEncoder = new IntDiffOptRleEncoder();
    this.infoEncoder = new RleEncoder(writeUint8);
    this.stringEncoder = new StringEncoder();
    this.parentInfoEncoder = new RleEncoder(writeUint8);
    this.typeRefEncoder = new UintOptRleEncoder();
    this.lenEncoder = new UintOptRleEncoder();
  }
  toUint8Array() {
    const encoder = createEncoder();
    writeVarUint(encoder, 0);
    writeVarUint8Array(encoder, this.keyClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.clientEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.leftClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.rightClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, toUint8Array(this.infoEncoder));
    writeVarUint8Array(encoder, this.stringEncoder.toUint8Array());
    writeVarUint8Array(encoder, toUint8Array(this.parentInfoEncoder));
    writeVarUint8Array(encoder, this.typeRefEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.lenEncoder.toUint8Array());
    writeUint8Array(encoder, toUint8Array(this.restEncoder));
    return toUint8Array(encoder);
  }
  /**
   * @param {ID} id
   */
  writeLeftID(id) {
    this.clientEncoder.write(id.client);
    this.leftClockEncoder.write(id.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(id) {
    this.clientEncoder.write(id.client);
    this.rightClockEncoder.write(id.clock);
  }
  /**
   * @param {number} client
   */
  writeClient(client) {
    this.clientEncoder.write(client);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(info) {
    this.infoEncoder.write(info);
  }
  /**
   * @param {string} s
   */
  writeString(s) {
    this.stringEncoder.write(s);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(isYKey) {
    this.parentInfoEncoder.write(isYKey ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(info) {
    this.typeRefEncoder.write(info);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(len) {
    this.lenEncoder.write(len);
  }
  /**
   * @param {any} any
   */
  writeAny(any2) {
    writeAny(this.restEncoder, any2);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(buf) {
    writeVarUint8Array(this.restEncoder, buf);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */
  writeJSON(embed) {
    writeAny(this.restEncoder, embed);
  }
  /**
   * Property keys are often reused. For example, in y-prosemirror the key `bold` might
   * occur very often. For a 3d application, the key `position` might occur very often.
   *
   * We cache these keys in a Map and refer to them via a unique number.
   *
   * @param {string} key
   */
  writeKey(key) {
    const clock = this.keyMap.get(key);
    if (clock === void 0) {
      this.keyClockEncoder.write(this.keyClock++);
      this.stringEncoder.write(key);
    } else {
      this.keyClockEncoder.write(clock);
    }
  }
}
const writeStructs = (encoder, structs, client, clock) => {
  clock = max(clock, structs[0].id.clock);
  const startNewStructs = findIndexSS(structs, clock);
  writeVarUint(encoder.restEncoder, structs.length - startNewStructs);
  encoder.writeClient(client);
  writeVarUint(encoder.restEncoder, clock);
  const firstStruct = structs[startNewStructs];
  firstStruct.write(encoder, clock - firstStruct.id.clock);
  for (let i = startNewStructs + 1; i < structs.length; i++) {
    structs[i].write(encoder, 0);
  }
};
const writeClientsStructs = (encoder, store, _sm) => {
  const sm = /* @__PURE__ */ new Map();
  _sm.forEach((clock, client) => {
    if (getState(store, client) > clock) {
      sm.set(client, clock);
    }
  });
  getStateVector(store).forEach((clock, client) => {
    if (!_sm.has(client)) {
      sm.set(client, 0);
    }
  });
  writeVarUint(encoder.restEncoder, sm.size);
  Array.from(sm.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
    writeStructs(encoder, store.clients.get(client), client, clock);
  });
};
const readClientsStructRefs = (decoder, doc2) => {
  const clientRefs = create$5();
  const numOfStateUpdates = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numOfStateUpdates; i++) {
    const numberOfStructs = readVarUint(decoder.restDecoder);
    const refs = new Array(numberOfStructs);
    const client = decoder.readClient();
    let clock = readVarUint(decoder.restDecoder);
    clientRefs.set(client, { i: 0, refs });
    for (let i2 = 0; i2 < numberOfStructs; i2++) {
      const info = decoder.readInfo();
      switch (BITS5 & info) {
        case 0: {
          const len = decoder.readLen();
          refs[i2] = new GC(createID(client, clock), len);
          clock += len;
          break;
        }
        case 10: {
          const len = readVarUint(decoder.restDecoder);
          refs[i2] = new Skip(createID(client, clock), len);
          clock += len;
          break;
        }
        default: {
          const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
          const struct = new Item(
            createID(client, clock),
            null,
            // leftd
            (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
            // origin
            null,
            // right
            (info & BIT7) === BIT7 ? decoder.readRightID() : null,
            // right origin
            cantCopyParentInfo ? decoder.readParentInfo() ? doc2.get(decoder.readString()) : decoder.readLeftID() : null,
            // parent
            cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
            // parentSub
            readItemContent(decoder, info)
            // item content
          );
          refs[i2] = struct;
          clock += struct.length;
        }
      }
    }
  }
  return clientRefs;
};
const integrateStructs = (transaction, store, clientsStructRefs) => {
  const stack = [];
  let clientsStructRefsIds = Array.from(clientsStructRefs.keys()).sort((a, b) => a - b);
  if (clientsStructRefsIds.length === 0) {
    return null;
  }
  const getNextStructTarget = () => {
    if (clientsStructRefsIds.length === 0) {
      return null;
    }
    let nextStructsTarget = (
      /** @type {{i:number,refs:Array<GC|Item>}} */
      clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1])
    );
    while (nextStructsTarget.refs.length === nextStructsTarget.i) {
      clientsStructRefsIds.pop();
      if (clientsStructRefsIds.length > 0) {
        nextStructsTarget = /** @type {{i:number,refs:Array<GC|Item>}} */
        clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
      } else {
        return null;
      }
    }
    return nextStructsTarget;
  };
  let curStructsTarget = getNextStructTarget();
  if (curStructsTarget === null && stack.length === 0) {
    return null;
  }
  const restStructs = new StructStore();
  const missingSV = /* @__PURE__ */ new Map();
  const updateMissingSv = (client, clock) => {
    const mclock = missingSV.get(client);
    if (mclock == null || mclock > clock) {
      missingSV.set(client, clock);
    }
  };
  let stackHead = (
    /** @type {any} */
    curStructsTarget.refs[
      /** @type {any} */
      curStructsTarget.i++
    ]
  );
  const state = /* @__PURE__ */ new Map();
  const addStackToRestSS = () => {
    for (const item of stack) {
      const client = item.id.client;
      const unapplicableItems = clientsStructRefs.get(client);
      if (unapplicableItems) {
        unapplicableItems.i--;
        restStructs.clients.set(client, unapplicableItems.refs.slice(unapplicableItems.i));
        clientsStructRefs.delete(client);
        unapplicableItems.i = 0;
        unapplicableItems.refs = [];
      } else {
        restStructs.clients.set(client, [item]);
      }
      clientsStructRefsIds = clientsStructRefsIds.filter((c) => c !== client);
    }
    stack.length = 0;
  };
  while (true) {
    if (stackHead.constructor !== Skip) {
      const localClock = setIfUndefined(state, stackHead.id.client, () => getState(store, stackHead.id.client));
      const offset = localClock - stackHead.id.clock;
      if (offset < 0) {
        stack.push(stackHead);
        updateMissingSv(stackHead.id.client, stackHead.id.clock - 1);
        addStackToRestSS();
      } else {
        const missing = stackHead.getMissing(transaction, store);
        if (missing !== null) {
          stack.push(stackHead);
          const structRefs = clientsStructRefs.get(
            /** @type {number} */
            missing
          ) || { refs: [], i: 0 };
          if (structRefs.refs.length === structRefs.i) {
            updateMissingSv(
              /** @type {number} */
              missing,
              getState(store, missing)
            );
            addStackToRestSS();
          } else {
            stackHead = structRefs.refs[structRefs.i++];
            continue;
          }
        } else if (offset === 0 || offset < stackHead.length) {
          stackHead.integrate(transaction, offset);
          state.set(stackHead.id.client, stackHead.id.clock + stackHead.length);
        }
      }
    }
    if (stack.length > 0) {
      stackHead = /** @type {GC|Item} */
      stack.pop();
    } else if (curStructsTarget !== null && curStructsTarget.i < curStructsTarget.refs.length) {
      stackHead = /** @type {GC|Item} */
      curStructsTarget.refs[curStructsTarget.i++];
    } else {
      curStructsTarget = getNextStructTarget();
      if (curStructsTarget === null) {
        break;
      } else {
        stackHead = /** @type {GC|Item} */
        curStructsTarget.refs[curStructsTarget.i++];
      }
    }
  }
  if (restStructs.clients.size > 0) {
    const encoder = new UpdateEncoderV2();
    writeClientsStructs(encoder, restStructs, /* @__PURE__ */ new Map());
    writeVarUint(encoder.restEncoder, 0);
    return { missing: missingSV, update: encoder.toUint8Array() };
  }
  return null;
};
const writeStructsFromTransaction = (encoder, transaction) => writeClientsStructs(encoder, transaction.doc.store, transaction.beforeState);
const readUpdateV2 = (decoder, ydoc, transactionOrigin, structDecoder = new UpdateDecoderV2(decoder)) => transact(ydoc, (transaction) => {
  transaction.local = false;
  let retry = false;
  const doc2 = transaction.doc;
  const store = doc2.store;
  const ss = readClientsStructRefs(structDecoder, doc2);
  const restStructs = integrateStructs(transaction, store, ss);
  const pending = store.pendingStructs;
  if (pending) {
    for (const [client, clock] of pending.missing) {
      if (clock < getState(store, client)) {
        retry = true;
        break;
      }
    }
    if (restStructs) {
      for (const [client, clock] of restStructs.missing) {
        const mclock = pending.missing.get(client);
        if (mclock == null || mclock > clock) {
          pending.missing.set(client, clock);
        }
      }
      pending.update = mergeUpdatesV2([pending.update, restStructs.update]);
    }
  } else {
    store.pendingStructs = restStructs;
  }
  const dsRest = readAndApplyDeleteSet(structDecoder, transaction, store);
  if (store.pendingDs) {
    const pendingDSUpdate = new UpdateDecoderV2(createDecoder(store.pendingDs));
    readVarUint(pendingDSUpdate.restDecoder);
    const dsRest2 = readAndApplyDeleteSet(pendingDSUpdate, transaction, store);
    if (dsRest && dsRest2) {
      store.pendingDs = mergeUpdatesV2([dsRest, dsRest2]);
    } else {
      store.pendingDs = dsRest || dsRest2;
    }
  } else {
    store.pendingDs = dsRest;
  }
  if (retry) {
    const update = (
      /** @type {{update: Uint8Array}} */
      store.pendingStructs.update
    );
    store.pendingStructs = null;
    applyUpdateV2(transaction.doc, update);
  }
}, transactionOrigin, false);
const applyUpdateV2 = (ydoc, update, transactionOrigin, YDecoder = UpdateDecoderV2) => {
  const decoder = createDecoder(update);
  readUpdateV2(decoder, ydoc, transactionOrigin, new YDecoder(decoder));
};
const applyUpdate = (ydoc, update, transactionOrigin) => applyUpdateV2(ydoc, update, transactionOrigin, UpdateDecoderV1);
const writeStateAsUpdate = (encoder, doc2, targetStateVector = /* @__PURE__ */ new Map()) => {
  writeClientsStructs(encoder, doc2.store, targetStateVector);
  writeDeleteSet(encoder, createDeleteSetFromStructStore(doc2.store));
};
const encodeStateAsUpdateV2 = (doc2, encodedTargetStateVector = new Uint8Array([0]), encoder = new UpdateEncoderV2()) => {
  const targetStateVector = decodeStateVector(encodedTargetStateVector);
  writeStateAsUpdate(encoder, doc2, targetStateVector);
  const updates = [encoder.toUint8Array()];
  if (doc2.store.pendingDs) {
    updates.push(doc2.store.pendingDs);
  }
  if (doc2.store.pendingStructs) {
    updates.push(diffUpdateV2(doc2.store.pendingStructs.update, encodedTargetStateVector));
  }
  if (updates.length > 1) {
    if (encoder.constructor === UpdateEncoderV1) {
      return mergeUpdates(updates.map((update, i) => i === 0 ? update : convertUpdateFormatV2ToV1(update)));
    } else if (encoder.constructor === UpdateEncoderV2) {
      return mergeUpdatesV2(updates);
    }
  }
  return updates[0];
};
const encodeStateAsUpdate = (doc2, encodedTargetStateVector) => encodeStateAsUpdateV2(doc2, encodedTargetStateVector, new UpdateEncoderV1());
const readStateVector = (decoder) => {
  const ss = /* @__PURE__ */ new Map();
  const ssLength = readVarUint(decoder.restDecoder);
  for (let i = 0; i < ssLength; i++) {
    const client = readVarUint(decoder.restDecoder);
    const clock = readVarUint(decoder.restDecoder);
    ss.set(client, clock);
  }
  return ss;
};
const decodeStateVector = (decodedState) => readStateVector(new DSDecoderV1(createDecoder(decodedState)));
const writeStateVector = (encoder, sv) => {
  writeVarUint(encoder.restEncoder, sv.size);
  Array.from(sv.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
    writeVarUint(encoder.restEncoder, client);
    writeVarUint(encoder.restEncoder, clock);
  });
  return encoder;
};
const writeDocumentStateVector = (encoder, doc2) => writeStateVector(encoder, getStateVector(doc2.store));
const encodeStateVectorV2 = (doc2, encoder = new DSEncoderV2()) => {
  if (doc2 instanceof Map) {
    writeStateVector(encoder, doc2);
  } else {
    writeDocumentStateVector(encoder, doc2);
  }
  return encoder.toUint8Array();
};
const encodeStateVector = (doc2) => encodeStateVectorV2(doc2, new DSEncoderV1());
class EventHandler {
  constructor() {
    this.l = [];
  }
}
const createEventHandler = () => new EventHandler();
const addEventHandlerListener = (eventHandler, f) => eventHandler.l.push(f);
const removeEventHandlerListener = (eventHandler, f) => {
  const l = eventHandler.l;
  const len = l.length;
  eventHandler.l = l.filter((g) => f !== g);
  if (len === eventHandler.l.length) {
    console.error("[yjs] Tried to remove event handler that doesn't exist.");
  }
};
const callEventHandlerListeners = (eventHandler, arg0, arg1) => callAll(eventHandler.l, [arg0, arg1]);
class ID {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(client, clock) {
    this.client = client;
    this.clock = clock;
  }
}
const compareIDs = (a, b) => a === b || a !== null && b !== null && a.client === b.client && a.clock === b.clock;
const createID = (client, clock) => new ID(client, clock);
const findRootTypeKey = (type) => {
  for (const [key, value] of type.doc.share.entries()) {
    if (value === type) {
      return key;
    }
  }
  throw unexpectedCase();
};
const isParentOf = (parent, child) => {
  while (child !== null) {
    if (child.parent === parent) {
      return true;
    }
    child = /** @type {AbstractType<any>} */
    child.parent._item;
  }
  return false;
};
class RelativePosition {
  /**
   * @param {ID|null} type
   * @param {string|null} tname
   * @param {ID|null} item
   * @param {number} assoc
   */
  constructor(type, tname, item, assoc = 0) {
    this.type = type;
    this.tname = tname;
    this.item = item;
    this.assoc = assoc;
  }
}
const createRelativePositionFromJSON = (json) => new RelativePosition(json.type == null ? null : createID(json.type.client, json.type.clock), json.tname || null, json.item == null ? null : createID(json.item.client, json.item.clock), json.assoc == null ? 0 : json.assoc);
class AbsolutePosition {
  /**
   * @param {AbstractType<any>} type
   * @param {number} index
   * @param {number} [assoc]
   */
  constructor(type, index, assoc = 0) {
    this.type = type;
    this.index = index;
    this.assoc = assoc;
  }
}
const createAbsolutePosition = (type, index, assoc = 0) => new AbsolutePosition(type, index, assoc);
const createRelativePosition = (type, item, assoc) => {
  let typeid = null;
  let tname = null;
  if (type._item === null) {
    tname = findRootTypeKey(type);
  } else {
    typeid = createID(type._item.id.client, type._item.id.clock);
  }
  return new RelativePosition(typeid, tname, item, assoc);
};
const createRelativePositionFromTypeIndex = (type, index, assoc = 0) => {
  let t = type._start;
  if (assoc < 0) {
    if (index === 0) {
      return createRelativePosition(type, null, assoc);
    }
    index--;
  }
  while (t !== null) {
    if (!t.deleted && t.countable) {
      if (t.length > index) {
        return createRelativePosition(type, createID(t.id.client, t.id.clock + index), assoc);
      }
      index -= t.length;
    }
    if (t.right === null && assoc < 0) {
      return createRelativePosition(type, t.lastId, assoc);
    }
    t = t.right;
  }
  return createRelativePosition(type, null, assoc);
};
const createAbsolutePositionFromRelativePosition = (rpos, doc2) => {
  const store = doc2.store;
  const rightID = rpos.item;
  const typeID = rpos.type;
  const tname = rpos.tname;
  const assoc = rpos.assoc;
  let type = null;
  let index = 0;
  if (rightID !== null) {
    if (getState(store, rightID.client) <= rightID.clock) {
      return null;
    }
    const res = followRedone(store, rightID);
    const right = res.item;
    if (!(right instanceof Item)) {
      return null;
    }
    type = /** @type {AbstractType<any>} */
    right.parent;
    if (type._item === null || !type._item.deleted) {
      index = right.deleted || !right.countable ? 0 : res.diff + (assoc >= 0 ? 0 : 1);
      let n = right.left;
      while (n !== null) {
        if (!n.deleted && n.countable) {
          index += n.length;
        }
        n = n.left;
      }
    }
  } else {
    if (tname !== null) {
      type = doc2.get(tname);
    } else if (typeID !== null) {
      if (getState(store, typeID.client) <= typeID.clock) {
        return null;
      }
      const { item } = followRedone(store, typeID);
      if (item instanceof Item && item.content instanceof ContentType) {
        type = item.content.type;
      } else {
        return null;
      }
    } else {
      throw unexpectedCase();
    }
    if (assoc >= 0) {
      index = type._length;
    } else {
      index = 0;
    }
  }
  return createAbsolutePosition(type, index, rpos.assoc);
};
const compareRelativePositions = (a, b) => a === b || a !== null && b !== null && a.tname === b.tname && compareIDs(a.item, b.item) && compareIDs(a.type, b.type) && a.assoc === b.assoc;
const isVisible = (item, snapshot) => snapshot === void 0 ? !item.deleted : snapshot.sv.has(item.id.client) && (snapshot.sv.get(item.id.client) || 0) > item.id.clock && !isDeleted(snapshot.ds, item.id);
const splitSnapshotAffectedStructs = (transaction, snapshot) => {
  const meta = setIfUndefined(transaction.meta, splitSnapshotAffectedStructs, create$4);
  const store = transaction.doc.store;
  if (!meta.has(snapshot)) {
    snapshot.sv.forEach((clock, client) => {
      if (clock < getState(store, client)) {
        getItemCleanStart(transaction, createID(client, clock));
      }
    });
    iterateDeletedStructs(transaction, snapshot.ds, (item) => {
    });
    meta.add(snapshot);
  }
};
class StructStore {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
    this.pendingStructs = null;
    this.pendingDs = null;
  }
}
const getStateVector = (store) => {
  const sm = /* @__PURE__ */ new Map();
  store.clients.forEach((structs, client) => {
    const struct = structs[structs.length - 1];
    sm.set(client, struct.id.clock + struct.length);
  });
  return sm;
};
const getState = (store, client) => {
  const structs = store.clients.get(client);
  if (structs === void 0) {
    return 0;
  }
  const lastStruct = structs[structs.length - 1];
  return lastStruct.id.clock + lastStruct.length;
};
const addStruct = (store, struct) => {
  let structs = store.clients.get(struct.id.client);
  if (structs === void 0) {
    structs = [];
    store.clients.set(struct.id.client, structs);
  } else {
    const lastStruct = structs[structs.length - 1];
    if (lastStruct.id.clock + lastStruct.length !== struct.id.clock) {
      throw unexpectedCase();
    }
  }
  structs.push(struct);
};
const findIndexSS = (structs, clock) => {
  let left = 0;
  let right = structs.length - 1;
  let mid = structs[right];
  let midclock = mid.id.clock;
  if (midclock === clock) {
    return right;
  }
  let midindex = floor(clock / (midclock + mid.length - 1) * right);
  while (left <= right) {
    mid = structs[midindex];
    midclock = mid.id.clock;
    if (midclock <= clock) {
      if (clock < midclock + mid.length) {
        return midindex;
      }
      left = midindex + 1;
    } else {
      right = midindex - 1;
    }
    midindex = floor((left + right) / 2);
  }
  throw unexpectedCase();
};
const find = (store, id) => {
  const structs = store.clients.get(id.client);
  return structs[findIndexSS(structs, id.clock)];
};
const getItem = (
  /** @type {function(StructStore,ID):Item} */
  find
);
const findIndexCleanStart = (transaction, structs, clock) => {
  const index = findIndexSS(structs, clock);
  const struct = structs[index];
  if (struct.id.clock < clock && struct instanceof Item) {
    structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
    return index + 1;
  }
  return index;
};
const getItemCleanStart = (transaction, id) => {
  const structs = (
    /** @type {Array<Item>} */
    transaction.doc.store.clients.get(id.client)
  );
  return structs[findIndexCleanStart(transaction, structs, id.clock)];
};
const getItemCleanEnd = (transaction, store, id) => {
  const structs = store.clients.get(id.client);
  const index = findIndexSS(structs, id.clock);
  const struct = structs[index];
  if (id.clock !== struct.id.clock + struct.length - 1 && struct.constructor !== GC) {
    structs.splice(index + 1, 0, splitItem(transaction, struct, id.clock - struct.id.clock + 1));
  }
  return struct;
};
const replaceStruct = (store, struct, newStruct) => {
  const structs = (
    /** @type {Array<GC|Item>} */
    store.clients.get(struct.id.client)
  );
  structs[findIndexSS(structs, struct.id.clock)] = newStruct;
};
const iterateStructs = (transaction, structs, clockStart, len, f) => {
  if (len === 0) {
    return;
  }
  const clockEnd = clockStart + len;
  let index = findIndexCleanStart(transaction, structs, clockStart);
  let struct;
  do {
    struct = structs[index++];
    if (clockEnd < struct.id.clock + struct.length) {
      findIndexCleanStart(transaction, structs, clockEnd);
    }
    f(struct);
  } while (index < structs.length && structs[index].id.clock < clockEnd);
};
class Transaction {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(doc2, origin, local) {
    this.doc = doc2;
    this.deleteSet = new DeleteSet();
    this.beforeState = getStateVector(doc2.store);
    this.afterState = /* @__PURE__ */ new Map();
    this.changed = /* @__PURE__ */ new Map();
    this.changedParentTypes = /* @__PURE__ */ new Map();
    this._mergeStructs = [];
    this.origin = origin;
    this.meta = /* @__PURE__ */ new Map();
    this.local = local;
    this.subdocsAdded = /* @__PURE__ */ new Set();
    this.subdocsRemoved = /* @__PURE__ */ new Set();
    this.subdocsLoaded = /* @__PURE__ */ new Set();
  }
}
const writeUpdateMessageFromTransaction = (encoder, transaction) => {
  if (transaction.deleteSet.clients.size === 0 && !any(transaction.afterState, (clock, client) => transaction.beforeState.get(client) !== clock)) {
    return false;
  }
  sortAndMergeDeleteSet(transaction.deleteSet);
  writeStructsFromTransaction(encoder, transaction);
  writeDeleteSet(encoder, transaction.deleteSet);
  return true;
};
const addChangedTypeToTransaction = (transaction, type, parentSub) => {
  const item = type._item;
  if (item === null || item.id.clock < (transaction.beforeState.get(item.id.client) || 0) && !item.deleted) {
    setIfUndefined(transaction.changed, type, create$4).add(parentSub);
  }
};
const tryToMergeWithLeft = (structs, pos) => {
  const left = structs[pos - 1];
  const right = structs[pos];
  if (left.deleted === right.deleted && left.constructor === right.constructor) {
    if (left.mergeWith(right)) {
      structs.splice(pos, 1);
      if (right instanceof Item && right.parentSub !== null && /** @type {AbstractType<any>} */
      right.parent._map.get(right.parentSub) === right) {
        right.parent._map.set(
          right.parentSub,
          /** @type {Item} */
          left
        );
      }
    }
  }
};
const tryGcDeleteSet = (ds, store, gcFilter) => {
  for (const [client, deleteItems] of ds.clients.entries()) {
    const structs = (
      /** @type {Array<GC|Item>} */
      store.clients.get(client)
    );
    for (let di = deleteItems.length - 1; di >= 0; di--) {
      const deleteItem = deleteItems[di];
      const endDeleteItemClock = deleteItem.clock + deleteItem.len;
      for (let si = findIndexSS(structs, deleteItem.clock), struct = structs[si]; si < structs.length && struct.id.clock < endDeleteItemClock; struct = structs[++si]) {
        const struct2 = structs[si];
        if (deleteItem.clock + deleteItem.len <= struct2.id.clock) {
          break;
        }
        if (struct2 instanceof Item && struct2.deleted && !struct2.keep && gcFilter(struct2)) {
          struct2.gc(store, false);
        }
      }
    }
  }
};
const tryMergeDeleteSet = (ds, store) => {
  ds.clients.forEach((deleteItems, client) => {
    const structs = (
      /** @type {Array<GC|Item>} */
      store.clients.get(client)
    );
    for (let di = deleteItems.length - 1; di >= 0; di--) {
      const deleteItem = deleteItems[di];
      const mostRightIndexToCheck = min(structs.length - 1, 1 + findIndexSS(structs, deleteItem.clock + deleteItem.len - 1));
      for (let si = mostRightIndexToCheck, struct = structs[si]; si > 0 && struct.id.clock >= deleteItem.clock; struct = structs[--si]) {
        tryToMergeWithLeft(structs, si);
      }
    }
  });
};
const cleanupTransactions = (transactionCleanups, i) => {
  if (i < transactionCleanups.length) {
    const transaction = transactionCleanups[i];
    const doc2 = transaction.doc;
    const store = doc2.store;
    const ds = transaction.deleteSet;
    const mergeStructs = transaction._mergeStructs;
    try {
      sortAndMergeDeleteSet(ds);
      transaction.afterState = getStateVector(transaction.doc.store);
      doc2.emit("beforeObserverCalls", [transaction, doc2]);
      const fs = [];
      transaction.changed.forEach(
        (subs, itemtype) => fs.push(() => {
          if (itemtype._item === null || !itemtype._item.deleted) {
            itemtype._callObserver(transaction, subs);
          }
        })
      );
      fs.push(() => {
        transaction.changedParentTypes.forEach(
          (events, type) => fs.push(() => {
            if (type._item === null || !type._item.deleted) {
              events = events.filter(
                (event) => event.target._item === null || !event.target._item.deleted
              );
              events.forEach((event) => {
                event.currentTarget = type;
              });
              events.sort((event1, event2) => event1.path.length - event2.path.length);
              callEventHandlerListeners(type._dEH, events, transaction);
            }
          })
        );
        fs.push(() => doc2.emit("afterTransaction", [transaction, doc2]));
      });
      callAll(fs, []);
    } finally {
      if (doc2.gc) {
        tryGcDeleteSet(ds, store, doc2.gcFilter);
      }
      tryMergeDeleteSet(ds, store);
      transaction.afterState.forEach((clock, client) => {
        const beforeClock = transaction.beforeState.get(client) || 0;
        if (beforeClock !== clock) {
          const structs = (
            /** @type {Array<GC|Item>} */
            store.clients.get(client)
          );
          const firstChangePos = max(findIndexSS(structs, beforeClock), 1);
          for (let i2 = structs.length - 1; i2 >= firstChangePos; i2--) {
            tryToMergeWithLeft(structs, i2);
          }
        }
      });
      for (let i2 = 0; i2 < mergeStructs.length; i2++) {
        const { client, clock } = mergeStructs[i2].id;
        const structs = (
          /** @type {Array<GC|Item>} */
          store.clients.get(client)
        );
        const replacedStructPos = findIndexSS(structs, clock);
        if (replacedStructPos + 1 < structs.length) {
          tryToMergeWithLeft(structs, replacedStructPos + 1);
        }
        if (replacedStructPos > 0) {
          tryToMergeWithLeft(structs, replacedStructPos);
        }
      }
      if (!transaction.local && transaction.afterState.get(doc2.clientID) !== transaction.beforeState.get(doc2.clientID)) {
        print(ORANGE, BOLD, "[yjs] ", UNBOLD, RED, "Changed the client-id because another client seems to be using it.");
        doc2.clientID = generateNewClientId();
      }
      doc2.emit("afterTransactionCleanup", [transaction, doc2]);
      if (doc2._observers.has("update")) {
        const encoder = new UpdateEncoderV1();
        const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
        if (hasContent2) {
          doc2.emit("update", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
        }
      }
      if (doc2._observers.has("updateV2")) {
        const encoder = new UpdateEncoderV2();
        const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
        if (hasContent2) {
          doc2.emit("updateV2", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
        }
      }
      const { subdocsAdded, subdocsLoaded, subdocsRemoved } = transaction;
      if (subdocsAdded.size > 0 || subdocsRemoved.size > 0 || subdocsLoaded.size > 0) {
        subdocsAdded.forEach((subdoc) => {
          subdoc.clientID = doc2.clientID;
          if (subdoc.collectionid == null) {
            subdoc.collectionid = doc2.collectionid;
          }
          doc2.subdocs.add(subdoc);
        });
        subdocsRemoved.forEach((subdoc) => doc2.subdocs.delete(subdoc));
        doc2.emit("subdocs", [{ loaded: subdocsLoaded, added: subdocsAdded, removed: subdocsRemoved }, doc2, transaction]);
        subdocsRemoved.forEach((subdoc) => subdoc.destroy());
      }
      if (transactionCleanups.length <= i + 1) {
        doc2._transactionCleanups = [];
        doc2.emit("afterAllTransactions", [doc2, transactionCleanups]);
      } else {
        cleanupTransactions(transactionCleanups, i + 1);
      }
    }
  }
};
const transact = (doc2, f, origin = null, local = true) => {
  const transactionCleanups = doc2._transactionCleanups;
  let initialCall = false;
  if (doc2._transaction === null) {
    initialCall = true;
    doc2._transaction = new Transaction(doc2, origin, local);
    transactionCleanups.push(doc2._transaction);
    if (transactionCleanups.length === 1) {
      doc2.emit("beforeAllTransactions", [doc2]);
    }
    doc2.emit("beforeTransaction", [doc2._transaction, doc2]);
  }
  try {
    f(doc2._transaction);
  } finally {
    if (initialCall) {
      const finishCleanup = doc2._transaction === transactionCleanups[0];
      doc2._transaction = null;
      if (finishCleanup) {
        cleanupTransactions(transactionCleanups, 0);
      }
    }
  }
};
class StackItem {
  /**
   * @param {DeleteSet} deletions
   * @param {DeleteSet} insertions
   */
  constructor(deletions, insertions) {
    this.insertions = insertions;
    this.deletions = deletions;
    this.meta = /* @__PURE__ */ new Map();
  }
}
const clearUndoManagerStackItem = (tr, um, stackItem) => {
  iterateDeletedStructs(tr, stackItem.deletions, (item) => {
    if (item instanceof Item && um.scope.some((type) => isParentOf(type, item))) {
      keepItem(item, false);
    }
  });
};
const popStackItem = (undoManager, stack, eventType) => {
  let result = null;
  let _tr = null;
  const doc2 = undoManager.doc;
  const scope = undoManager.scope;
  transact(doc2, (transaction) => {
    while (stack.length > 0 && result === null) {
      const store = doc2.store;
      const stackItem = (
        /** @type {StackItem} */
        stack.pop()
      );
      const itemsToRedo = /* @__PURE__ */ new Set();
      const itemsToDelete = [];
      let performedChange = false;
      iterateDeletedStructs(transaction, stackItem.insertions, (struct) => {
        if (struct instanceof Item) {
          if (struct.redone !== null) {
            let { item, diff } = followRedone(store, struct.id);
            if (diff > 0) {
              item = getItemCleanStart(transaction, createID(item.id.client, item.id.clock + diff));
            }
            struct = item;
          }
          if (!struct.deleted && scope.some((type) => isParentOf(
            type,
            /** @type {Item} */
            struct
          ))) {
            itemsToDelete.push(struct);
          }
        }
      });
      iterateDeletedStructs(transaction, stackItem.deletions, (struct) => {
        if (struct instanceof Item && scope.some((type) => isParentOf(type, struct)) && // Never redo structs in stackItem.insertions because they were created and deleted in the same capture interval.
        !isDeleted(stackItem.insertions, struct.id)) {
          itemsToRedo.add(struct);
        }
      });
      itemsToRedo.forEach((struct) => {
        performedChange = redoItem(transaction, struct, itemsToRedo, stackItem.insertions, undoManager.ignoreRemoteMapChanges) !== null || performedChange;
      });
      for (let i = itemsToDelete.length - 1; i >= 0; i--) {
        const item = itemsToDelete[i];
        if (undoManager.deleteFilter(item)) {
          item.delete(transaction);
          performedChange = true;
        }
      }
      result = performedChange ? stackItem : null;
    }
    transaction.changed.forEach((subProps, type) => {
      if (subProps.has(null) && type._searchMarker) {
        type._searchMarker.length = 0;
      }
    });
    _tr = transaction;
  }, undoManager);
  if (result != null) {
    const changedParentTypes = _tr.changedParentTypes;
    undoManager.emit("stack-item-popped", [{ stackItem: result, type: eventType, changedParentTypes }, undoManager]);
  }
  return result;
};
class UndoManager extends Observable {
  /**
   * @param {AbstractType<any>|Array<AbstractType<any>>} typeScope Accepts either a single type, or an array of types
   * @param {UndoManagerOptions} options
   */
  constructor(typeScope, {
    captureTimeout = 500,
    captureTransaction = (tr) => true,
    deleteFilter = () => true,
    trackedOrigins = /* @__PURE__ */ new Set([null]),
    ignoreRemoteMapChanges = false,
    doc: doc2 = (
      /** @type {Doc} */
      isArray(typeScope) ? typeScope[0].doc : typeScope.doc
    )
  } = {}) {
    super();
    this.scope = [];
    this.addToScope(typeScope);
    this.deleteFilter = deleteFilter;
    trackedOrigins.add(this);
    this.trackedOrigins = trackedOrigins;
    this.captureTransaction = captureTransaction;
    this.undoStack = [];
    this.redoStack = [];
    this.undoing = false;
    this.redoing = false;
    this.doc = doc2;
    this.lastChange = 0;
    this.ignoreRemoteMapChanges = ignoreRemoteMapChanges;
    this.captureTimeout = captureTimeout;
    this.afterTransactionHandler = (transaction) => {
      if (!this.captureTransaction(transaction) || !this.scope.some((type) => transaction.changedParentTypes.has(type)) || !this.trackedOrigins.has(transaction.origin) && (!transaction.origin || !this.trackedOrigins.has(transaction.origin.constructor))) {
        return;
      }
      const undoing = this.undoing;
      const redoing = this.redoing;
      const stack = undoing ? this.redoStack : this.undoStack;
      if (undoing) {
        this.stopCapturing();
      } else if (!redoing) {
        this.clear(false, true);
      }
      const insertions = new DeleteSet();
      transaction.afterState.forEach((endClock, client) => {
        const startClock = transaction.beforeState.get(client) || 0;
        const len = endClock - startClock;
        if (len > 0) {
          addToDeleteSet(insertions, client, startClock, len);
        }
      });
      const now = getUnixTime();
      let didAdd = false;
      if (this.lastChange > 0 && now - this.lastChange < this.captureTimeout && stack.length > 0 && !undoing && !redoing) {
        const lastOp = stack[stack.length - 1];
        lastOp.deletions = mergeDeleteSets([lastOp.deletions, transaction.deleteSet]);
        lastOp.insertions = mergeDeleteSets([lastOp.insertions, insertions]);
      } else {
        stack.push(new StackItem(transaction.deleteSet, insertions));
        didAdd = true;
      }
      if (!undoing && !redoing) {
        this.lastChange = now;
      }
      iterateDeletedStructs(
        transaction,
        transaction.deleteSet,
        /** @param {Item|GC} item */
        (item) => {
          if (item instanceof Item && this.scope.some((type) => isParentOf(type, item))) {
            keepItem(item, true);
          }
        }
      );
      const changeEvent = [{ stackItem: stack[stack.length - 1], origin: transaction.origin, type: undoing ? "redo" : "undo", changedParentTypes: transaction.changedParentTypes }, this];
      if (didAdd) {
        this.emit("stack-item-added", changeEvent);
      } else {
        this.emit("stack-item-updated", changeEvent);
      }
    };
    this.doc.on("afterTransaction", this.afterTransactionHandler);
    this.doc.on("destroy", () => {
      this.destroy();
    });
  }
  /**
   * @param {Array<AbstractType<any>> | AbstractType<any>} ytypes
   */
  addToScope(ytypes) {
    ytypes = isArray(ytypes) ? ytypes : [ytypes];
    ytypes.forEach((ytype) => {
      if (this.scope.every((yt) => yt !== ytype)) {
        this.scope.push(ytype);
      }
    });
  }
  /**
   * @param {any} origin
   */
  addTrackedOrigin(origin) {
    this.trackedOrigins.add(origin);
  }
  /**
   * @param {any} origin
   */
  removeTrackedOrigin(origin) {
    this.trackedOrigins.delete(origin);
  }
  clear(clearUndoStack = true, clearRedoStack = true) {
    if (clearUndoStack && this.canUndo() || clearRedoStack && this.canRedo()) {
      this.doc.transact((tr) => {
        if (clearUndoStack) {
          this.undoStack.forEach((item) => clearUndoManagerStackItem(tr, this, item));
          this.undoStack = [];
        }
        if (clearRedoStack) {
          this.redoStack.forEach((item) => clearUndoManagerStackItem(tr, this, item));
          this.redoStack = [];
        }
        this.emit("stack-cleared", [{ undoStackCleared: clearUndoStack, redoStackCleared: clearRedoStack }]);
      });
    }
  }
  /**
   * UndoManager merges Undo-StackItem if they are created within time-gap
   * smaller than `options.captureTimeout`. Call `um.stopCapturing()` so that the next
   * StackItem won't be merged.
   *
   *
   * @example
   *     // without stopCapturing
   *     ytext.insert(0, 'a')
   *     ytext.insert(1, 'b')
   *     um.undo()
   *     ytext.toString() // => '' (note that 'ab' was removed)
   *     // with stopCapturing
   *     ytext.insert(0, 'a')
   *     um.stopCapturing()
   *     ytext.insert(0, 'b')
   *     um.undo()
   *     ytext.toString() // => 'a' (note that only 'b' was removed)
   *
   */
  stopCapturing() {
    this.lastChange = 0;
  }
  /**
   * Undo last changes on type.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */
  undo() {
    this.undoing = true;
    let res;
    try {
      res = popStackItem(this, this.undoStack, "undo");
    } finally {
      this.undoing = false;
    }
    return res;
  }
  /**
   * Redo last undo operation.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */
  redo() {
    this.redoing = true;
    let res;
    try {
      res = popStackItem(this, this.redoStack, "redo");
    } finally {
      this.redoing = false;
    }
    return res;
  }
  /**
   * Are undo steps available?
   *
   * @return {boolean} `true` if undo is possible
   */
  canUndo() {
    return this.undoStack.length > 0;
  }
  /**
   * Are redo steps available?
   *
   * @return {boolean} `true` if redo is possible
   */
  canRedo() {
    return this.redoStack.length > 0;
  }
  destroy() {
    this.trackedOrigins.delete(this);
    this.doc.off("afterTransaction", this.afterTransactionHandler);
    super.destroy();
  }
}
function* lazyStructReaderGenerator(decoder) {
  const numOfStateUpdates = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numOfStateUpdates; i++) {
    const numberOfStructs = readVarUint(decoder.restDecoder);
    const client = decoder.readClient();
    let clock = readVarUint(decoder.restDecoder);
    for (let i2 = 0; i2 < numberOfStructs; i2++) {
      const info = decoder.readInfo();
      if (info === 10) {
        const len = readVarUint(decoder.restDecoder);
        yield new Skip(createID(client, clock), len);
        clock += len;
      } else if ((BITS5 & info) !== 0) {
        const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
        const struct = new Item(
          createID(client, clock),
          null,
          // left
          (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
          // origin
          null,
          // right
          (info & BIT7) === BIT7 ? decoder.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          cantCopyParentInfo ? decoder.readParentInfo() ? decoder.readString() : decoder.readLeftID() : null,
          // parent
          cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
          // parentSub
          readItemContent(decoder, info)
          // item content
        );
        yield struct;
        clock += struct.length;
      } else {
        const len = decoder.readLen();
        yield new GC(createID(client, clock), len);
        clock += len;
      }
    }
  }
}
class LazyStructReader {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(decoder, filterSkips) {
    this.gen = lazyStructReaderGenerator(decoder);
    this.curr = null;
    this.done = false;
    this.filterSkips = filterSkips;
    this.next();
  }
  /**
   * @return {Item | GC | Skip |null}
   */
  next() {
    do {
      this.curr = this.gen.next().value || null;
    } while (this.filterSkips && this.curr !== null && this.curr.constructor === Skip);
    return this.curr;
  }
}
class LazyStructWriter {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(encoder) {
    this.currClient = 0;
    this.startClock = 0;
    this.written = 0;
    this.encoder = encoder;
    this.clientStructs = [];
  }
}
const mergeUpdates = (updates) => mergeUpdatesV2(updates, UpdateDecoderV1, UpdateEncoderV1);
const sliceStruct = (left, diff) => {
  if (left.constructor === GC) {
    const { client, clock } = left.id;
    return new GC(createID(client, clock + diff), left.length - diff);
  } else if (left.constructor === Skip) {
    const { client, clock } = left.id;
    return new Skip(createID(client, clock + diff), left.length - diff);
  } else {
    const leftItem = (
      /** @type {Item} */
      left
    );
    const { client, clock } = leftItem.id;
    return new Item(
      createID(client, clock + diff),
      null,
      createID(client, clock + diff - 1),
      null,
      leftItem.rightOrigin,
      leftItem.parent,
      leftItem.parentSub,
      leftItem.content.splice(diff)
    );
  }
};
const mergeUpdatesV2 = (updates, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
  if (updates.length === 1) {
    return updates[0];
  }
  const updateDecoders = updates.map((update) => new YDecoder(createDecoder(update)));
  let lazyStructDecoders = updateDecoders.map((decoder) => new LazyStructReader(decoder, true));
  let currWrite = null;
  const updateEncoder = new YEncoder();
  const lazyStructEncoder = new LazyStructWriter(updateEncoder);
  while (true) {
    lazyStructDecoders = lazyStructDecoders.filter((dec) => dec.curr !== null);
    lazyStructDecoders.sort(
      /** @type {function(any,any):number} */
      (dec1, dec2) => {
        if (dec1.curr.id.client === dec2.curr.id.client) {
          const clockDiff = dec1.curr.id.clock - dec2.curr.id.clock;
          if (clockDiff === 0) {
            return dec1.curr.constructor === dec2.curr.constructor ? 0 : dec1.curr.constructor === Skip ? 1 : -1;
          } else {
            return clockDiff;
          }
        } else {
          return dec2.curr.id.client - dec1.curr.id.client;
        }
      }
    );
    if (lazyStructDecoders.length === 0) {
      break;
    }
    const currDecoder = lazyStructDecoders[0];
    const firstClient = (
      /** @type {Item | GC} */
      currDecoder.curr.id.client
    );
    if (currWrite !== null) {
      let curr = (
        /** @type {Item | GC | null} */
        currDecoder.curr
      );
      let iterated = false;
      while (curr !== null && curr.id.clock + curr.length <= currWrite.struct.id.clock + currWrite.struct.length && curr.id.client >= currWrite.struct.id.client) {
        curr = currDecoder.next();
        iterated = true;
      }
      if (curr === null || // current decoder is empty
      curr.id.client !== firstClient || // check whether there is another decoder that has has updates from `firstClient`
      iterated && curr.id.clock > currWrite.struct.id.clock + currWrite.struct.length) {
        continue;
      }
      if (firstClient !== currWrite.struct.id.client) {
        writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
        currWrite = { struct: curr, offset: 0 };
        currDecoder.next();
      } else {
        if (currWrite.struct.id.clock + currWrite.struct.length < curr.id.clock) {
          if (currWrite.struct.constructor === Skip) {
            currWrite.struct.length = curr.id.clock + curr.length - currWrite.struct.id.clock;
          } else {
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            const diff = curr.id.clock - currWrite.struct.id.clock - currWrite.struct.length;
            const struct = new Skip(createID(firstClient, currWrite.struct.id.clock + currWrite.struct.length), diff);
            currWrite = { struct, offset: 0 };
          }
        } else {
          const diff = currWrite.struct.id.clock + currWrite.struct.length - curr.id.clock;
          if (diff > 0) {
            if (currWrite.struct.constructor === Skip) {
              currWrite.struct.length -= diff;
            } else {
              curr = sliceStruct(curr, diff);
            }
          }
          if (!currWrite.struct.mergeWith(
            /** @type {any} */
            curr
          )) {
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            currWrite = { struct: curr, offset: 0 };
            currDecoder.next();
          }
        }
      }
    } else {
      currWrite = { struct: (
        /** @type {Item | GC} */
        currDecoder.curr
      ), offset: 0 };
      currDecoder.next();
    }
    for (let next = currDecoder.curr; next !== null && next.id.client === firstClient && next.id.clock === currWrite.struct.id.clock + currWrite.struct.length && next.constructor !== Skip; next = currDecoder.next()) {
      writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
      currWrite = { struct: next, offset: 0 };
    }
  }
  if (currWrite !== null) {
    writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
    currWrite = null;
  }
  finishLazyStructWriting(lazyStructEncoder);
  const dss = updateDecoders.map((decoder) => readDeleteSet(decoder));
  const ds = mergeDeleteSets(dss);
  writeDeleteSet(updateEncoder, ds);
  return updateEncoder.toUint8Array();
};
const diffUpdateV2 = (update, sv, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
  const state = decodeStateVector(sv);
  const encoder = new YEncoder();
  const lazyStructWriter = new LazyStructWriter(encoder);
  const decoder = new YDecoder(createDecoder(update));
  const reader = new LazyStructReader(decoder, false);
  while (reader.curr) {
    const curr = reader.curr;
    const currClient = curr.id.client;
    const svClock = state.get(currClient) || 0;
    if (reader.curr.constructor === Skip) {
      reader.next();
      continue;
    }
    if (curr.id.clock + curr.length > svClock) {
      writeStructToLazyStructWriter(lazyStructWriter, curr, max(svClock - curr.id.clock, 0));
      reader.next();
      while (reader.curr && reader.curr.id.client === currClient) {
        writeStructToLazyStructWriter(lazyStructWriter, reader.curr, 0);
        reader.next();
      }
    } else {
      while (reader.curr && reader.curr.id.client === currClient && reader.curr.id.clock + reader.curr.length <= svClock) {
        reader.next();
      }
    }
  }
  finishLazyStructWriting(lazyStructWriter);
  const ds = readDeleteSet(decoder);
  writeDeleteSet(encoder, ds);
  return encoder.toUint8Array();
};
const flushLazyStructWriter = (lazyWriter) => {
  if (lazyWriter.written > 0) {
    lazyWriter.clientStructs.push({ written: lazyWriter.written, restEncoder: toUint8Array(lazyWriter.encoder.restEncoder) });
    lazyWriter.encoder.restEncoder = createEncoder();
    lazyWriter.written = 0;
  }
};
const writeStructToLazyStructWriter = (lazyWriter, struct, offset) => {
  if (lazyWriter.written > 0 && lazyWriter.currClient !== struct.id.client) {
    flushLazyStructWriter(lazyWriter);
  }
  if (lazyWriter.written === 0) {
    lazyWriter.currClient = struct.id.client;
    lazyWriter.encoder.writeClient(struct.id.client);
    writeVarUint(lazyWriter.encoder.restEncoder, struct.id.clock + offset);
  }
  struct.write(lazyWriter.encoder, offset);
  lazyWriter.written++;
};
const finishLazyStructWriting = (lazyWriter) => {
  flushLazyStructWriter(lazyWriter);
  const restEncoder = lazyWriter.encoder.restEncoder;
  writeVarUint(restEncoder, lazyWriter.clientStructs.length);
  for (let i = 0; i < lazyWriter.clientStructs.length; i++) {
    const partStructs = lazyWriter.clientStructs[i];
    writeVarUint(restEncoder, partStructs.written);
    writeUint8Array(restEncoder, partStructs.restEncoder);
  }
};
const convertUpdateFormat = (update, YDecoder, YEncoder) => {
  const updateDecoder = new YDecoder(createDecoder(update));
  const lazyDecoder = new LazyStructReader(updateDecoder, false);
  const updateEncoder = new YEncoder();
  const lazyWriter = new LazyStructWriter(updateEncoder);
  for (let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next()) {
    writeStructToLazyStructWriter(lazyWriter, curr, 0);
  }
  finishLazyStructWriting(lazyWriter);
  const ds = readDeleteSet(updateDecoder);
  writeDeleteSet(updateEncoder, ds);
  return updateEncoder.toUint8Array();
};
const convertUpdateFormatV2ToV1 = (update) => convertUpdateFormat(update, UpdateDecoderV2, UpdateEncoderV1);
class YEvent {
  /**
   * @param {T} target The changed type.
   * @param {Transaction} transaction
   */
  constructor(target, transaction) {
    this.target = target;
    this.currentTarget = target;
    this.transaction = transaction;
    this._changes = null;
    this._keys = null;
    this._delta = null;
  }
  /**
   * Computes the path from `y` to the changed type.
   *
   * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
   *
   * The following property holds:
   * @example
   *   let type = y
   *   event.path.forEach(dir => {
   *     type = type.get(dir)
   *   })
   *   type === event.target // => true
   */
  get path() {
    return getPathTo(this.currentTarget, this.target);
  }
  /**
   * Check if a struct is deleted by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  deletes(struct) {
    return isDeleted(this.transaction.deleteSet, struct.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      const keys2 = /* @__PURE__ */ new Map();
      const target = this.target;
      const changed = (
        /** @type Set<string|null> */
        this.transaction.changed.get(target)
      );
      changed.forEach((key) => {
        if (key !== null) {
          const item = (
            /** @type {Item} */
            target._map.get(key)
          );
          let action;
          let oldValue;
          if (this.adds(item)) {
            let prev = item.left;
            while (prev !== null && this.adds(prev)) {
              prev = prev.left;
            }
            if (this.deletes(item)) {
              if (prev !== null && this.deletes(prev)) {
                action = "delete";
                oldValue = last(prev.content.getContent());
              } else {
                return;
              }
            } else {
              if (prev !== null && this.deletes(prev)) {
                action = "update";
                oldValue = last(prev.content.getContent());
              } else {
                action = "add";
                oldValue = void 0;
              }
            }
          } else {
            if (this.deletes(item)) {
              action = "delete";
              oldValue = last(
                /** @type {Item} */
                item.content.getContent()
              );
            } else {
              return;
            }
          }
          keys2.set(key, { action, oldValue });
        }
      });
      this._keys = keys2;
    }
    return this._keys;
  }
  /**
   * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
   */
  get delta() {
    return this.changes.delta;
  }
  /**
   * Check if a struct is added by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  adds(struct) {
    return struct.id.clock >= (this.transaction.beforeState.get(struct.id.client) || 0);
  }
  /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    let changes = this._changes;
    if (changes === null) {
      const target = this.target;
      const added = create$4();
      const deleted = create$4();
      const delta = [];
      changes = {
        added,
        deleted,
        delta,
        keys: this.keys
      };
      const changed = (
        /** @type Set<string|null> */
        this.transaction.changed.get(target)
      );
      if (changed.has(null)) {
        let lastOp = null;
        const packOp = () => {
          if (lastOp) {
            delta.push(lastOp);
          }
        };
        for (let item = target._start; item !== null; item = item.right) {
          if (item.deleted) {
            if (this.deletes(item) && !this.adds(item)) {
              if (lastOp === null || lastOp.delete === void 0) {
                packOp();
                lastOp = { delete: 0 };
              }
              lastOp.delete += item.length;
              deleted.add(item);
            }
          } else {
            if (this.adds(item)) {
              if (lastOp === null || lastOp.insert === void 0) {
                packOp();
                lastOp = { insert: [] };
              }
              lastOp.insert = lastOp.insert.concat(item.content.getContent());
              added.add(item);
            } else {
              if (lastOp === null || lastOp.retain === void 0) {
                packOp();
                lastOp = { retain: 0 };
              }
              lastOp.retain += item.length;
            }
          }
        }
        if (lastOp !== null && lastOp.retain === void 0) {
          packOp();
        }
      }
      this._changes = changes;
    }
    return (
      /** @type {any} */
      changes
    );
  }
}
const getPathTo = (parent, child) => {
  const path = [];
  while (child._item !== null && child !== parent) {
    if (child._item.parentSub !== null) {
      path.unshift(child._item.parentSub);
    } else {
      let i = 0;
      let c = (
        /** @type {AbstractType<any>} */
        child._item.parent._start
      );
      while (c !== child._item && c !== null) {
        if (!c.deleted) {
          i++;
        }
        c = c.right;
      }
      path.unshift(i);
    }
    child = /** @type {AbstractType<any>} */
    child._item.parent;
  }
  return path;
};
const maxSearchMarker = 80;
let globalSearchMarkerTimestamp = 0;
class ArraySearchMarker {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(p, index) {
    p.marker = true;
    this.p = p;
    this.index = index;
    this.timestamp = globalSearchMarkerTimestamp++;
  }
}
const refreshMarkerTimestamp = (marker) => {
  marker.timestamp = globalSearchMarkerTimestamp++;
};
const overwriteMarker = (marker, p, index) => {
  marker.p.marker = false;
  marker.p = p;
  p.marker = true;
  marker.index = index;
  marker.timestamp = globalSearchMarkerTimestamp++;
};
const markPosition = (searchMarker, p, index) => {
  if (searchMarker.length >= maxSearchMarker) {
    const marker = searchMarker.reduce((a, b) => a.timestamp < b.timestamp ? a : b);
    overwriteMarker(marker, p, index);
    return marker;
  } else {
    const pm = new ArraySearchMarker(p, index);
    searchMarker.push(pm);
    return pm;
  }
};
const findMarker = (yarray, index) => {
  if (yarray._start === null || index === 0 || yarray._searchMarker === null) {
    return null;
  }
  const marker = yarray._searchMarker.length === 0 ? null : yarray._searchMarker.reduce((a, b) => abs(index - a.index) < abs(index - b.index) ? a : b);
  let p = yarray._start;
  let pindex = 0;
  if (marker !== null) {
    p = marker.p;
    pindex = marker.index;
    refreshMarkerTimestamp(marker);
  }
  while (p.right !== null && pindex < index) {
    if (!p.deleted && p.countable) {
      if (index < pindex + p.length) {
        break;
      }
      pindex += p.length;
    }
    p = p.right;
  }
  while (p.left !== null && pindex > index) {
    p = p.left;
    if (!p.deleted && p.countable) {
      pindex -= p.length;
    }
  }
  while (p.left !== null && p.left.id.client === p.id.client && p.left.id.clock + p.left.length === p.id.clock) {
    p = p.left;
    if (!p.deleted && p.countable) {
      pindex -= p.length;
    }
  }
  if (marker !== null && abs(marker.index - pindex) < /** @type {YText|YArray<any>} */
  p.parent.length / maxSearchMarker) {
    overwriteMarker(marker, p, pindex);
    return marker;
  } else {
    return markPosition(yarray._searchMarker, p, pindex);
  }
};
const updateMarkerChanges = (searchMarker, index, len) => {
  for (let i = searchMarker.length - 1; i >= 0; i--) {
    const m = searchMarker[i];
    if (len > 0) {
      let p = m.p;
      p.marker = false;
      while (p && (p.deleted || !p.countable)) {
        p = p.left;
        if (p && !p.deleted && p.countable) {
          m.index -= p.length;
        }
      }
      if (p === null || p.marker === true) {
        searchMarker.splice(i, 1);
        continue;
      }
      m.p = p;
      p.marker = true;
    }
    if (index < m.index || len > 0 && index === m.index) {
      m.index = max(index, m.index + len);
    }
  }
};
const callTypeObservers = (type, transaction, event) => {
  const changedType = type;
  const changedParentTypes = transaction.changedParentTypes;
  while (true) {
    setIfUndefined(changedParentTypes, type, () => []).push(event);
    if (type._item === null) {
      break;
    }
    type = /** @type {AbstractType<any>} */
    type._item.parent;
  }
  callEventHandlerListeners(changedType._eH, event, transaction);
};
class AbstractType {
  constructor() {
    this._item = null;
    this._map = /* @__PURE__ */ new Map();
    this._start = null;
    this.doc = null;
    this._length = 0;
    this._eH = createEventHandler();
    this._dEH = createEventHandler();
    this._searchMarker = null;
  }
  /**
   * @return {AbstractType<any>|null}
   */
  get parent() {
    return this._item ? (
      /** @type {AbstractType<any>} */
      this._item.parent
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item|null} item
   */
  _integrate(y, item) {
    this.doc = y;
    this._item = item;
  }
  /**
   * @return {AbstractType<EventType>}
   */
  _copy() {
    throw methodUnimplemented();
  }
  /**
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw methodUnimplemented();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
   */
  _write(_encoder) {
  }
  /**
   * The first non-deleted item
   */
  get _first() {
    let n = this._start;
    while (n !== null && n.deleted) {
      n = n.right;
    }
    return n;
  }
  /**
   * Creates YEvent and calls all type observers.
   * Must be implemented by each type.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, _parentSubs) {
    if (!transaction.local && this._searchMarker) {
      this._searchMarker.length = 0;
    }
  }
  /**
   * Observe all events that are created on this type.
   *
   * @param {function(EventType, Transaction):void} f Observer function
   */
  observe(f) {
    addEventHandlerListener(this._eH, f);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(f) {
    addEventHandlerListener(this._dEH, f);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(f) {
    removeEventHandlerListener(this._eH, f);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(f) {
    removeEventHandlerListener(this._dEH, f);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
}
const typeListSlice = (type, start, end) => {
  if (start < 0) {
    start = type._length + start;
  }
  if (end < 0) {
    end = type._length + end;
  }
  let len = end - start;
  const cs = [];
  let n = type._start;
  while (n !== null && len > 0) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      if (c.length <= start) {
        start -= c.length;
      } else {
        for (let i = start; i < c.length && len > 0; i++) {
          cs.push(c[i]);
          len--;
        }
        start = 0;
      }
    }
    n = n.right;
  }
  return cs;
};
const typeListToArray = (type) => {
  const cs = [];
  let n = type._start;
  while (n !== null) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      for (let i = 0; i < c.length; i++) {
        cs.push(c[i]);
      }
    }
    n = n.right;
  }
  return cs;
};
const typeListForEach = (type, f) => {
  let index = 0;
  let n = type._start;
  while (n !== null) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      for (let i = 0; i < c.length; i++) {
        f(c[i], index++, type);
      }
    }
    n = n.right;
  }
};
const typeListMap = (type, f) => {
  const result = [];
  typeListForEach(type, (c, i) => {
    result.push(f(c, i, type));
  });
  return result;
};
const typeListCreateIterator = (type) => {
  let n = type._start;
  let currentContent = null;
  let currentContentIndex = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (currentContent === null) {
        while (n !== null && n.deleted) {
          n = n.right;
        }
        if (n === null) {
          return {
            done: true,
            value: void 0
          };
        }
        currentContent = n.content.getContent();
        currentContentIndex = 0;
        n = n.right;
      }
      const value = currentContent[currentContentIndex++];
      if (currentContent.length <= currentContentIndex) {
        currentContent = null;
      }
      return {
        done: false,
        value
      };
    }
  };
};
const typeListGet = (type, index) => {
  const marker = findMarker(type, index);
  let n = type._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
  }
  for (; n !== null; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index < n.length) {
        return n.content.getContent()[index];
      }
      index -= n.length;
    }
  }
};
const typeListInsertGenericsAfter = (transaction, parent, referenceItem, content) => {
  let left = referenceItem;
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  const store = doc2.store;
  const right = referenceItem === null ? parent._start : referenceItem.right;
  let jsonContent = [];
  const packJsonContent = () => {
    if (jsonContent.length > 0) {
      left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentAny(jsonContent));
      left.integrate(transaction, 0);
      jsonContent = [];
    }
  };
  content.forEach((c) => {
    if (c === null) {
      jsonContent.push(c);
    } else {
      switch (c.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          jsonContent.push(c);
          break;
        default:
          packJsonContent();
          switch (c.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentBinary(new Uint8Array(
                /** @type {Uint8Array} */
                c
              )));
              left.integrate(transaction, 0);
              break;
            case Doc:
              left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentDoc(
                /** @type {Doc} */
                c
              ));
              left.integrate(transaction, 0);
              break;
            default:
              if (c instanceof AbstractType) {
                left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentType(c));
                left.integrate(transaction, 0);
              } else {
                throw new Error("Unexpected content type in insert operation");
              }
          }
      }
    }
  });
  packJsonContent();
};
const lengthExceeded = create$3("Length exceeded!");
const typeListInsertGenerics = (transaction, parent, index, content) => {
  if (index > parent._length) {
    throw lengthExceeded;
  }
  if (index === 0) {
    if (parent._searchMarker) {
      updateMarkerChanges(parent._searchMarker, index, content.length);
    }
    return typeListInsertGenericsAfter(transaction, parent, null, content);
  }
  const startIndex = index;
  const marker = findMarker(parent, index);
  let n = parent._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
    if (index === 0) {
      n = n.prev;
      index += n && n.countable && !n.deleted ? n.length : 0;
    }
  }
  for (; n !== null; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index <= n.length) {
        if (index < n.length) {
          getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
        }
        break;
      }
      index -= n.length;
    }
  }
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, startIndex, content.length);
  }
  return typeListInsertGenericsAfter(transaction, parent, n, content);
};
const typeListPushGenerics = (transaction, parent, content) => {
  const marker = (parent._searchMarker || []).reduce((maxMarker, currMarker) => currMarker.index > maxMarker.index ? currMarker : maxMarker, { index: 0, p: parent._start });
  let n = marker.p;
  if (n) {
    while (n.right) {
      n = n.right;
    }
  }
  return typeListInsertGenericsAfter(transaction, parent, n, content);
};
const typeListDelete = (transaction, parent, index, length2) => {
  if (length2 === 0) {
    return;
  }
  const startIndex = index;
  const startLength = length2;
  const marker = findMarker(parent, index);
  let n = parent._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
  }
  for (; n !== null && index > 0; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index < n.length) {
        getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
      }
      index -= n.length;
    }
  }
  while (length2 > 0 && n !== null) {
    if (!n.deleted) {
      if (length2 < n.length) {
        getItemCleanStart(transaction, createID(n.id.client, n.id.clock + length2));
      }
      n.delete(transaction);
      length2 -= n.length;
    }
    n = n.right;
  }
  if (length2 > 0) {
    throw lengthExceeded;
  }
  if (parent._searchMarker) {
    updateMarkerChanges(
      parent._searchMarker,
      startIndex,
      -startLength + length2
      /* in case we remove the above exception */
    );
  }
};
const typeMapDelete = (transaction, parent, key) => {
  const c = parent._map.get(key);
  if (c !== void 0) {
    c.delete(transaction);
  }
};
const typeMapSet = (transaction, parent, key, value) => {
  const left = parent._map.get(key) || null;
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  let content;
  if (value == null) {
    content = new ContentAny([value]);
  } else {
    switch (value.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
        content = new ContentAny([value]);
        break;
      case Uint8Array:
        content = new ContentBinary(
          /** @type {Uint8Array} */
          value
        );
        break;
      case Doc:
        content = new ContentDoc(
          /** @type {Doc} */
          value
        );
        break;
      default:
        if (value instanceof AbstractType) {
          content = new ContentType(value);
        } else {
          throw new Error("Unexpected content type");
        }
    }
  }
  new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, null, null, parent, key, content).integrate(transaction, 0);
};
const typeMapGet = (parent, key) => {
  const val = parent._map.get(key);
  return val !== void 0 && !val.deleted ? val.content.getContent()[val.length - 1] : void 0;
};
const typeMapGetAll = (parent) => {
  const res = {};
  parent._map.forEach((value, key) => {
    if (!value.deleted) {
      res[key] = value.content.getContent()[value.length - 1];
    }
  });
  return res;
};
const typeMapHas = (parent, key) => {
  const val = parent._map.get(key);
  return val !== void 0 && !val.deleted;
};
const createMapIterator = (map2) => iteratorFilter(
  map2.entries(),
  /** @param {any} entry */
  (entry) => !entry[1].deleted
);
class YArrayEvent extends YEvent {
  /**
   * @param {YArray<T>} yarray The changed type
   * @param {Transaction} transaction The transaction object
   */
  constructor(yarray, transaction) {
    super(yarray, transaction);
    this._transaction = transaction;
  }
}
class YArray extends AbstractType {
  constructor() {
    super();
    this._prelimContent = [];
    this._searchMarker = [];
  }
  /**
   * Construct a new YArray containing the specified items.
   * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
   * @param {Array<T>} items
   * @return {YArray<T>}
   */
  static from(items) {
    const a = new YArray();
    a.push(items);
    return a;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    );
    this._prelimContent = null;
  }
  /**
   * @return {YArray<T>}
   */
  _copy() {
    return new YArray();
  }
  /**
   * @return {YArray<T>}
   */
  clone() {
    const arr = new YArray();
    arr.insert(0, this.toArray().map(
      (el) => el instanceof AbstractType ? (
        /** @type {typeof el} */
        el.clone()
      ) : el
    ));
    return arr;
  }
  get length() {
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    super._callObserver(transaction, parentSubs);
    callTypeObservers(this, transaction, new YArrayEvent(this, transaction));
  }
  /**
   * Inserts new content at an index.
   *
   * Important: This function expects an array of content. Not just a content
   * object. The reason for this "weirdness" is that inserting several elements
   * is very efficient when it is done as a single operation.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  yarray.insert(0, ['a'])
   *  // Insert numbers 1, 2 at position 1
   *  yarray.insert(1, [1, 2])
   *
   * @param {number} index The index to insert content at.
   * @param {Array<T>} content The array of content
   */
  insert(index, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListInsertGenerics(
          transaction,
          this,
          index,
          /** @type {any} */
          content
        );
      });
    } else {
      this._prelimContent.splice(index, 0, ...content);
    }
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<T>} content Array of content to append.
   *
   * @todo Use the following implementation in all types.
   */
  push(content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListPushGenerics(
          transaction,
          this,
          /** @type {any} */
          content
        );
      });
    } else {
      this._prelimContent.push(...content);
    }
  }
  /**
   * Preppends content to this YArray.
   *
   * @param {Array<T>} content Array of content to preppend.
   */
  unshift(content) {
    this.insert(0, content);
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} length The number of elements to remove. Defaults to 1.
   */
  delete(index, length2 = 1) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListDelete(transaction, this, index, length2);
      });
    } else {
      this._prelimContent.splice(index, length2);
    }
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(index) {
    return typeListGet(this, index);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return typeListToArray(this);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<T>}
   */
  slice(start = 0, end = this.length) {
    return typeListSlice(this, start, end);
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */
  toJSON() {
    return this.map((c) => c instanceof AbstractType ? c.toJSON() : c);
  }
  /**
   * Returns an Array with the result of calling a provided function on every
   * element of this YArray.
   *
   * @template M
   * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
   * @return {Array<M>} A new array with each element being the result of the
   *                 callback function
   */
  map(f) {
    return typeListMap(
      this,
      /** @type {any} */
      f
    );
  }
  /**
   * Executes a provided function on once on overy element of this YArray.
   *
   * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    typeListForEach(this, f);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return typeListCreateIterator(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YArrayRefID);
  }
}
const readYArray = (_decoder) => new YArray();
class YMapEvent extends YEvent {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(ymap, transaction, subs) {
    super(ymap, transaction);
    this.keysChanged = subs;
  }
}
class YMap extends AbstractType {
  /**
   *
   * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
   */
  constructor(entries) {
    super();
    this._prelimContent = null;
    if (entries === void 0) {
      this._prelimContent = /* @__PURE__ */ new Map();
    } else {
      this._prelimContent = new Map(entries);
    }
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this._prelimContent.forEach((value, key) => {
      this.set(key, value);
    });
    this._prelimContent = null;
  }
  /**
   * @return {YMap<MapType>}
   */
  _copy() {
    return new YMap();
  }
  /**
   * @return {YMap<MapType>}
   */
  clone() {
    const map2 = new YMap();
    this.forEach((value, key) => {
      map2.set(key, value instanceof AbstractType ? (
        /** @type {typeof value} */
        value.clone()
      ) : value);
    });
    return map2;
  }
  /**
   * Creates YMapEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    callTypeObservers(this, transaction, new YMapEvent(this, transaction, parentSubs));
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */
  toJSON() {
    const map2 = {};
    this._map.forEach((item, key) => {
      if (!item.deleted) {
        const v = item.content.getContent()[item.length - 1];
        map2[key] = v instanceof AbstractType ? v.toJSON() : v;
      }
    });
    return map2;
  }
  /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */
  get size() {
    return [...createMapIterator(this._map)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return iteratorMap(
      createMapIterator(this._map),
      /** @param {any} v */
      (v) => v[0]
    );
  }
  /**
   * Returns the values for each element in the YMap Type.
   *
   * @return {IterableIterator<any>}
   */
  values() {
    return iteratorMap(
      createMapIterator(this._map),
      /** @param {any} v */
      (v) => v[1].content.getContent()[v[1].length - 1]
    );
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<any>}
   */
  entries() {
    return iteratorMap(
      createMapIterator(this._map),
      /** @param {any} v */
      (v) => [v[0], v[1].content.getContent()[v[1].length - 1]]
    );
  }
  /**
   * Executes a provided function on once on every key-value pair.
   *
   * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    this._map.forEach((item, key) => {
      if (!item.deleted) {
        f(item.content.getContent()[item.length - 1], key, this);
      }
    });
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<any>}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Remove a specified element from this YMap.
   *
   * @param {string} key The key of the element to remove.
   */
  delete(key) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, key);
      });
    } else {
      this._prelimContent.delete(key);
    }
  }
  /**
   * Adds or updates an element with a specified key and value.
   *
   * @param {string} key The key of the element to add to this YMap
   * @param {MapType} value The value of the element to add
   */
  set(key, value) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(
          transaction,
          this,
          key,
          /** @type {any} */
          value
        );
      });
    } else {
      this._prelimContent.set(key, value);
    }
    return value;
  }
  /**
   * Returns a specified element from this YMap.
   *
   * @param {string} key
   * @return {MapType|undefined}
   */
  get(key) {
    return (
      /** @type {any} */
      typeMapGet(this, key)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(key) {
    return typeMapHas(this, key);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        this.forEach(function(_value, key, map2) {
          typeMapDelete(transaction, map2, key);
        });
      });
    } else {
      this._prelimContent.clear();
    }
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YMapRefID);
  }
}
const readYMap = (_decoder) => new YMap();
const equalAttrs = (a, b) => a === b || typeof a === "object" && typeof b === "object" && a && b && equalFlat(a, b);
class ItemTextListPosition {
  /**
   * @param {Item|null} left
   * @param {Item|null} right
   * @param {number} index
   * @param {Map<string,any>} currentAttributes
   */
  constructor(left, right, index, currentAttributes) {
    this.left = left;
    this.right = right;
    this.index = index;
    this.currentAttributes = currentAttributes;
  }
  /**
   * Only call this if you know that this.right is defined
   */
  forward() {
    if (this.right === null) {
      unexpectedCase();
    }
    switch (this.right.content.constructor) {
      case ContentFormat:
        if (!this.right.deleted) {
          updateCurrentAttributes(
            this.currentAttributes,
            /** @type {ContentFormat} */
            this.right.content
          );
        }
        break;
      default:
        if (!this.right.deleted) {
          this.index += this.right.length;
        }
        break;
    }
    this.left = this.right;
    this.right = this.right.right;
  }
}
const findNextPosition = (transaction, pos, count) => {
  while (pos.right !== null && count > 0) {
    switch (pos.right.content.constructor) {
      case ContentFormat:
        if (!pos.right.deleted) {
          updateCurrentAttributes(
            pos.currentAttributes,
            /** @type {ContentFormat} */
            pos.right.content
          );
        }
        break;
      default:
        if (!pos.right.deleted) {
          if (count < pos.right.length) {
            getItemCleanStart(transaction, createID(pos.right.id.client, pos.right.id.clock + count));
          }
          pos.index += pos.right.length;
          count -= pos.right.length;
        }
        break;
    }
    pos.left = pos.right;
    pos.right = pos.right.right;
  }
  return pos;
};
const findPosition = (transaction, parent, index) => {
  const currentAttributes = /* @__PURE__ */ new Map();
  const marker = findMarker(parent, index);
  if (marker) {
    const pos = new ItemTextListPosition(marker.p.left, marker.p, marker.index, currentAttributes);
    return findNextPosition(transaction, pos, index - marker.index);
  } else {
    const pos = new ItemTextListPosition(null, parent._start, 0, currentAttributes);
    return findNextPosition(transaction, pos, index);
  }
};
const insertNegatedAttributes = (transaction, parent, currPos, negatedAttributes) => {
  while (currPos.right !== null && (currPos.right.deleted === true || currPos.right.content.constructor === ContentFormat && equalAttrs(
    negatedAttributes.get(
      /** @type {ContentFormat} */
      currPos.right.content.key
    ),
    /** @type {ContentFormat} */
    currPos.right.content.value
  ))) {
    if (!currPos.right.deleted) {
      negatedAttributes.delete(
        /** @type {ContentFormat} */
        currPos.right.content.key
      );
    }
    currPos.forward();
  }
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  negatedAttributes.forEach((val, key) => {
    const left = currPos.left;
    const right = currPos.right;
    const nextFormat = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
    nextFormat.integrate(transaction, 0);
    currPos.right = nextFormat;
    currPos.forward();
  });
};
const updateCurrentAttributes = (currentAttributes, format) => {
  const { key, value } = format;
  if (value === null) {
    currentAttributes.delete(key);
  } else {
    currentAttributes.set(key, value);
  }
};
const minimizeAttributeChanges = (currPos, attributes) => {
  while (true) {
    if (currPos.right === null) {
      break;
    } else if (currPos.right.deleted || currPos.right.content.constructor === ContentFormat && equalAttrs(
      attributes[
        /** @type {ContentFormat} */
        currPos.right.content.key
      ] || null,
      /** @type {ContentFormat} */
      currPos.right.content.value
    ))
      ;
    else {
      break;
    }
    currPos.forward();
  }
};
const insertAttributes = (transaction, parent, currPos, attributes) => {
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  const negatedAttributes = /* @__PURE__ */ new Map();
  for (const key in attributes) {
    const val = attributes[key];
    const currentVal = currPos.currentAttributes.get(key) || null;
    if (!equalAttrs(currentVal, val)) {
      negatedAttributes.set(key, currentVal);
      const { left, right } = currPos;
      currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
      currPos.right.integrate(transaction, 0);
      currPos.forward();
    }
  }
  return negatedAttributes;
};
const insertText = (transaction, parent, currPos, text2, attributes) => {
  currPos.currentAttributes.forEach((_val, key) => {
    if (attributes[key] === void 0) {
      attributes[key] = null;
    }
  });
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  minimizeAttributeChanges(currPos, attributes);
  const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
  const content = text2.constructor === String ? new ContentString(
    /** @type {string} */
    text2
  ) : text2 instanceof AbstractType ? new ContentType(text2) : new ContentEmbed(text2);
  let { left, right, index } = currPos;
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, currPos.index, content.getLength());
  }
  right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, content);
  right.integrate(transaction, 0);
  currPos.right = right;
  currPos.index = index;
  currPos.forward();
  insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
const formatText = (transaction, parent, currPos, length2, attributes) => {
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  minimizeAttributeChanges(currPos, attributes);
  const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
  iterationLoop:
    while (currPos.right !== null && (length2 > 0 || negatedAttributes.size > 0 && (currPos.right.deleted || currPos.right.content.constructor === ContentFormat))) {
      if (!currPos.right.deleted) {
        switch (currPos.right.content.constructor) {
          case ContentFormat: {
            const { key, value } = (
              /** @type {ContentFormat} */
              currPos.right.content
            );
            const attr2 = attributes[key];
            if (attr2 !== void 0) {
              if (equalAttrs(attr2, value)) {
                negatedAttributes.delete(key);
              } else {
                if (length2 === 0) {
                  break iterationLoop;
                }
                negatedAttributes.set(key, value);
              }
              currPos.right.delete(transaction);
            } else {
              currPos.currentAttributes.set(key, value);
            }
            break;
          }
          default:
            if (length2 < currPos.right.length) {
              getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length2));
            }
            length2 -= currPos.right.length;
            break;
        }
      }
      currPos.forward();
    }
  if (length2 > 0) {
    let newlines = "";
    for (; length2 > 0; length2--) {
      newlines += "\n";
    }
    currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), currPos.left, currPos.left && currPos.left.lastId, currPos.right, currPos.right && currPos.right.id, parent, null, new ContentString(newlines));
    currPos.right.integrate(transaction, 0);
    currPos.forward();
  }
  insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
const cleanupFormattingGap = (transaction, start, curr, startAttributes, currAttributes) => {
  let end = curr;
  const endAttributes = copy(currAttributes);
  while (end && (!end.countable || end.deleted)) {
    if (!end.deleted && end.content.constructor === ContentFormat) {
      updateCurrentAttributes(
        endAttributes,
        /** @type {ContentFormat} */
        end.content
      );
    }
    end = end.right;
  }
  let cleanups = 0;
  let reachedEndOfCurr = false;
  while (start !== end) {
    if (curr === start) {
      reachedEndOfCurr = true;
    }
    if (!start.deleted) {
      const content = start.content;
      switch (content.constructor) {
        case ContentFormat: {
          const { key, value } = (
            /** @type {ContentFormat} */
            content
          );
          if ((endAttributes.get(key) || null) !== value || (startAttributes.get(key) || null) === value) {
            start.delete(transaction);
            cleanups++;
            if (!reachedEndOfCurr && (currAttributes.get(key) || null) === value && (startAttributes.get(key) || null) !== value) {
              currAttributes.delete(key);
            }
          }
          break;
        }
      }
    }
    start = /** @type {Item} */
    start.right;
  }
  return cleanups;
};
const cleanupContextlessFormattingGap = (transaction, item) => {
  while (item && item.right && (item.right.deleted || !item.right.countable)) {
    item = item.right;
  }
  const attrs = /* @__PURE__ */ new Set();
  while (item && (item.deleted || !item.countable)) {
    if (!item.deleted && item.content.constructor === ContentFormat) {
      const key = (
        /** @type {ContentFormat} */
        item.content.key
      );
      if (attrs.has(key)) {
        item.delete(transaction);
      } else {
        attrs.add(key);
      }
    }
    item = item.left;
  }
};
const cleanupYTextFormatting = (type) => {
  let res = 0;
  transact(
    /** @type {Doc} */
    type.doc,
    (transaction) => {
      let start = (
        /** @type {Item} */
        type._start
      );
      let end = type._start;
      let startAttributes = create$5();
      const currentAttributes = copy(startAttributes);
      while (end) {
        if (end.deleted === false) {
          switch (end.content.constructor) {
            case ContentFormat:
              updateCurrentAttributes(
                currentAttributes,
                /** @type {ContentFormat} */
                end.content
              );
              break;
            default:
              res += cleanupFormattingGap(transaction, start, end, startAttributes, currentAttributes);
              startAttributes = copy(currentAttributes);
              start = end;
              break;
          }
        }
        end = end.right;
      }
    }
  );
  return res;
};
const deleteText = (transaction, currPos, length2) => {
  const startLength = length2;
  const startAttrs = copy(currPos.currentAttributes);
  const start = currPos.right;
  while (length2 > 0 && currPos.right !== null) {
    if (currPos.right.deleted === false) {
      switch (currPos.right.content.constructor) {
        case ContentType:
        case ContentEmbed:
        case ContentString:
          if (length2 < currPos.right.length) {
            getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length2));
          }
          length2 -= currPos.right.length;
          currPos.right.delete(transaction);
          break;
      }
    }
    currPos.forward();
  }
  if (start) {
    cleanupFormattingGap(transaction, start, currPos.right, startAttrs, currPos.currentAttributes);
  }
  const parent = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (currPos.left || currPos.right).parent
  );
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, currPos.index, -startLength + length2);
  }
  return currPos;
};
class YTextEvent extends YEvent {
  /**
   * @param {YText} ytext
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed
   */
  constructor(ytext, transaction, subs) {
    super(ytext, transaction);
    this.childListChanged = false;
    this.keysChanged = /* @__PURE__ */ new Set();
    subs.forEach((sub) => {
      if (sub === null) {
        this.childListChanged = true;
      } else {
        this.keysChanged.add(sub);
      }
    });
  }
  /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    if (this._changes === null) {
      const changes = {
        keys: this.keys,
        delta: this.delta,
        added: /* @__PURE__ */ new Set(),
        deleted: /* @__PURE__ */ new Set()
      };
      this._changes = changes;
    }
    return (
      /** @type {any} */
      this._changes
    );
  }
  /**
   * Compute the changes in the delta format.
   * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
   *
   * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
   *
   * @public
   */
  get delta() {
    if (this._delta === null) {
      const y = (
        /** @type {Doc} */
        this.target.doc
      );
      const delta = [];
      transact(y, (transaction) => {
        const currentAttributes = /* @__PURE__ */ new Map();
        const oldAttributes = /* @__PURE__ */ new Map();
        let item = this.target._start;
        let action = null;
        const attributes = {};
        let insert = "";
        let retain = 0;
        let deleteLen = 0;
        const addOp = () => {
          if (action !== null) {
            let op;
            switch (action) {
              case "delete":
                op = { delete: deleteLen };
                deleteLen = 0;
                break;
              case "insert":
                op = { insert };
                if (currentAttributes.size > 0) {
                  op.attributes = {};
                  currentAttributes.forEach((value, key) => {
                    if (value !== null) {
                      op.attributes[key] = value;
                    }
                  });
                }
                insert = "";
                break;
              case "retain":
                op = { retain };
                if (Object.keys(attributes).length > 0) {
                  op.attributes = {};
                  for (const key in attributes) {
                    op.attributes[key] = attributes[key];
                  }
                }
                retain = 0;
                break;
            }
            delta.push(op);
            action = null;
          }
        };
        while (item !== null) {
          switch (item.content.constructor) {
            case ContentType:
            case ContentEmbed:
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  addOp();
                  action = "insert";
                  insert = item.content.getContent()[0];
                  addOp();
                }
              } else if (this.deletes(item)) {
                if (action !== "delete") {
                  addOp();
                  action = "delete";
                }
                deleteLen += 1;
              } else if (!item.deleted) {
                if (action !== "retain") {
                  addOp();
                  action = "retain";
                }
                retain += 1;
              }
              break;
            case ContentString:
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  if (action !== "insert") {
                    addOp();
                    action = "insert";
                  }
                  insert += /** @type {ContentString} */
                  item.content.str;
                }
              } else if (this.deletes(item)) {
                if (action !== "delete") {
                  addOp();
                  action = "delete";
                }
                deleteLen += item.length;
              } else if (!item.deleted) {
                if (action !== "retain") {
                  addOp();
                  action = "retain";
                }
                retain += item.length;
              }
              break;
            case ContentFormat: {
              const { key, value } = (
                /** @type {ContentFormat} */
                item.content
              );
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  const curVal = currentAttributes.get(key) || null;
                  if (!equalAttrs(curVal, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    if (equalAttrs(value, oldAttributes.get(key) || null)) {
                      delete attributes[key];
                    } else {
                      attributes[key] = value;
                    }
                  } else if (value !== null) {
                    item.delete(transaction);
                  }
                }
              } else if (this.deletes(item)) {
                oldAttributes.set(key, value);
                const curVal = currentAttributes.get(key) || null;
                if (!equalAttrs(curVal, value)) {
                  if (action === "retain") {
                    addOp();
                  }
                  attributes[key] = curVal;
                }
              } else if (!item.deleted) {
                oldAttributes.set(key, value);
                const attr2 = attributes[key];
                if (attr2 !== void 0) {
                  if (!equalAttrs(attr2, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    if (value === null) {
                      delete attributes[key];
                    } else {
                      attributes[key] = value;
                    }
                  } else if (attr2 !== null) {
                    item.delete(transaction);
                  }
                }
              }
              if (!item.deleted) {
                if (action === "insert") {
                  addOp();
                }
                updateCurrentAttributes(
                  currentAttributes,
                  /** @type {ContentFormat} */
                  item.content
                );
              }
              break;
            }
          }
          item = item.right;
        }
        addOp();
        while (delta.length > 0) {
          const lastOp = delta[delta.length - 1];
          if (lastOp.retain !== void 0 && lastOp.attributes === void 0) {
            delta.pop();
          } else {
            break;
          }
        }
      });
      this._delta = delta;
    }
    return (
      /** @type {any} */
      this._delta
    );
  }
}
class YText extends AbstractType {
  /**
   * @param {String} [string] The initial value of the YText.
   */
  constructor(string) {
    super();
    this._pending = string !== void 0 ? [() => this.insert(0, string)] : [];
    this._searchMarker = [];
  }
  /**
   * Number of characters of this text type.
   *
   * @type {number}
   */
  get length() {
    return this._length;
  }
  /**
   * @param {Doc} y
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    try {
      this._pending.forEach((f) => f());
    } catch (e) {
      console.error(e);
    }
    this._pending = null;
  }
  _copy() {
    return new YText();
  }
  /**
   * @return {YText}
   */
  clone() {
    const text2 = new YText();
    text2.applyDelta(this.toDelta());
    return text2;
  }
  /**
   * Creates YTextEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    super._callObserver(transaction, parentSubs);
    const event = new YTextEvent(this, transaction, parentSubs);
    const doc2 = transaction.doc;
    callTypeObservers(this, transaction, event);
    if (!transaction.local) {
      let foundFormattingItem = false;
      for (const [client, afterClock] of transaction.afterState.entries()) {
        const clock = transaction.beforeState.get(client) || 0;
        if (afterClock === clock) {
          continue;
        }
        iterateStructs(
          transaction,
          /** @type {Array<Item|GC>} */
          doc2.store.clients.get(client),
          clock,
          afterClock,
          (item) => {
            if (!item.deleted && /** @type {Item} */
            item.content.constructor === ContentFormat) {
              foundFormattingItem = true;
            }
          }
        );
        if (foundFormattingItem) {
          break;
        }
      }
      if (!foundFormattingItem) {
        iterateDeletedStructs(transaction, transaction.deleteSet, (item) => {
          if (item instanceof GC || foundFormattingItem) {
            return;
          }
          if (item.parent === this && item.content.constructor === ContentFormat) {
            foundFormattingItem = true;
          }
        });
      }
      transact(doc2, (t) => {
        if (foundFormattingItem) {
          cleanupYTextFormatting(this);
        } else {
          iterateDeletedStructs(t, t.deleteSet, (item) => {
            if (item instanceof GC) {
              return;
            }
            if (item.parent === this) {
              cleanupContextlessFormattingGap(t, item);
            }
          });
        }
      });
    }
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */
  toString() {
    let str = "";
    let n = this._start;
    while (n !== null) {
      if (!n.deleted && n.countable && n.content.constructor === ContentString) {
        str += /** @type {ContentString} */
        n.content.str;
      }
      n = n.right;
    }
    return str;
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @return {string}
   * @public
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Apply a {@link Delta} on this shared YText type.
   *
   * @param {any} delta The changes to apply on this element.
   * @param {object}  opts
   * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
   *
   *
   * @public
   */
  applyDelta(delta, { sanitize = true } = {}) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        const currPos = new ItemTextListPosition(null, this._start, 0, /* @__PURE__ */ new Map());
        for (let i = 0; i < delta.length; i++) {
          const op = delta[i];
          if (op.insert !== void 0) {
            const ins = !sanitize && typeof op.insert === "string" && i === delta.length - 1 && currPos.right === null && op.insert.slice(-1) === "\n" ? op.insert.slice(0, -1) : op.insert;
            if (typeof ins !== "string" || ins.length > 0) {
              insertText(transaction, this, currPos, ins, op.attributes || {});
            }
          } else if (op.retain !== void 0) {
            formatText(transaction, this, currPos, op.retain, op.attributes || {});
          } else if (op.delete !== void 0) {
            deleteText(transaction, currPos, op.delete);
          }
        }
      });
    } else {
      this._pending.push(() => this.applyDelta(delta));
    }
  }
  /**
   * Returns the Delta representation of this YText type.
   *
   * @param {Snapshot} [snapshot]
   * @param {Snapshot} [prevSnapshot]
   * @param {function('removed' | 'added', ID):any} [computeYChange]
   * @return {any} The Delta representation of this type.
   *
   * @public
   */
  toDelta(snapshot, prevSnapshot, computeYChange) {
    const ops = [];
    const currentAttributes = /* @__PURE__ */ new Map();
    const doc2 = (
      /** @type {Doc} */
      this.doc
    );
    let str = "";
    let n = this._start;
    function packStr() {
      if (str.length > 0) {
        const attributes = {};
        let addAttributes = false;
        currentAttributes.forEach((value, key) => {
          addAttributes = true;
          attributes[key] = value;
        });
        const op = { insert: str };
        if (addAttributes) {
          op.attributes = attributes;
        }
        ops.push(op);
        str = "";
      }
    }
    transact(doc2, (transaction) => {
      if (snapshot) {
        splitSnapshotAffectedStructs(transaction, snapshot);
      }
      if (prevSnapshot) {
        splitSnapshotAffectedStructs(transaction, prevSnapshot);
      }
      while (n !== null) {
        if (isVisible(n, snapshot) || prevSnapshot !== void 0 && isVisible(n, prevSnapshot)) {
          switch (n.content.constructor) {
            case ContentString: {
              const cur = currentAttributes.get("ychange");
              if (snapshot !== void 0 && !isVisible(n, snapshot)) {
                if (cur === void 0 || cur.user !== n.id.client || cur.type !== "removed") {
                  packStr();
                  currentAttributes.set("ychange", computeYChange ? computeYChange("removed", n.id) : { type: "removed" });
                }
              } else if (prevSnapshot !== void 0 && !isVisible(n, prevSnapshot)) {
                if (cur === void 0 || cur.user !== n.id.client || cur.type !== "added") {
                  packStr();
                  currentAttributes.set("ychange", computeYChange ? computeYChange("added", n.id) : { type: "added" });
                }
              } else if (cur !== void 0) {
                packStr();
                currentAttributes.delete("ychange");
              }
              str += /** @type {ContentString} */
              n.content.str;
              break;
            }
            case ContentType:
            case ContentEmbed: {
              packStr();
              const op = {
                insert: n.content.getContent()[0]
              };
              if (currentAttributes.size > 0) {
                const attrs = (
                  /** @type {Object<string,any>} */
                  {}
                );
                op.attributes = attrs;
                currentAttributes.forEach((value, key) => {
                  attrs[key] = value;
                });
              }
              ops.push(op);
              break;
            }
            case ContentFormat:
              if (isVisible(n, snapshot)) {
                packStr();
                updateCurrentAttributes(
                  currentAttributes,
                  /** @type {ContentFormat} */
                  n.content
                );
              }
              break;
          }
        }
        n = n.right;
      }
      packStr();
    }, "cleanup");
    return ops;
  }
  /**
   * Insert text at a given index.
   *
   * @param {number} index The index at which to start inserting.
   * @param {String} text The text to insert at the specified position.
   * @param {TextAttributes} [attributes] Optionally define some formatting
   *                                    information to apply on the inserted
   *                                    Text.
   * @public
   */
  insert(index, text2, attributes) {
    if (text2.length <= 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index);
        if (!attributes) {
          attributes = {};
          pos.currentAttributes.forEach((v, k) => {
            attributes[k] = v;
          });
        }
        insertText(transaction, this, pos, text2, attributes);
      });
    } else {
      this._pending.push(() => this.insert(index, text2, attributes));
    }
  }
  /**
   * Inserts an embed at a index.
   *
   * @param {number} index The index to insert the embed at.
   * @param {Object | AbstractType<any>} embed The Object that represents the embed.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    embed
   *
   * @public
   */
  insertEmbed(index, embed, attributes = {}) {
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index);
        insertText(transaction, this, pos, embed, attributes);
      });
    } else {
      this._pending.push(() => this.insertEmbed(index, embed, attributes));
    }
  }
  /**
   * Deletes text starting from an index.
   *
   * @param {number} index Index at which to start deleting.
   * @param {number} length The number of characters to remove. Defaults to 1.
   *
   * @public
   */
  delete(index, length2) {
    if (length2 === 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        deleteText(transaction, findPosition(transaction, this, index), length2);
      });
    } else {
      this._pending.push(() => this.delete(index, length2));
    }
  }
  /**
   * Assigns properties to a range of text.
   *
   * @param {number} index The position where to start formatting.
   * @param {number} length The amount of characters to assign properties to.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    text.
   *
   * @public
   */
  format(index, length2, attributes) {
    if (length2 === 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index);
        if (pos.right === null) {
          return;
        }
        formatText(transaction, this, pos, length2, attributes);
      });
    } else {
      this._pending.push(() => this.format(index, length2, attributes));
    }
  }
  /**
   * Removes an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(attributeName) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, attributeName);
      });
    } else {
      this._pending.push(() => this.removeAttribute(attributeName));
    }
  }
  /**
   * Sets or updates an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {any} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(attributeName, attributeValue) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(transaction, this, attributeName, attributeValue);
      });
    } else {
      this._pending.push(() => this.setAttribute(attributeName, attributeValue));
    }
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {any} The queried attribute value.
   *
   * @public
   */
  getAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapGet(this, attributeName)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes() {
    return typeMapGetAll(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YTextRefID);
  }
}
const readYText = (_decoder) => new YText();
class YXmlTreeWalker {
  /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */
  constructor(root, f = () => true) {
    this._filter = f;
    this._root = root;
    this._currentNode = /** @type {Item} */
    root._start;
    this._firstCall = true;
  }
  [Symbol.iterator]() {
    return this;
  }
  /**
   * Get the next node.
   *
   * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
   *
   * @public
   */
  next() {
    let n = this._currentNode;
    let type = n && n.content && /** @type {any} */
    n.content.type;
    if (n !== null && (!this._firstCall || n.deleted || !this._filter(type))) {
      do {
        type = /** @type {any} */
        n.content.type;
        if (!n.deleted && (type.constructor === YXmlElement || type.constructor === YXmlFragment) && type._start !== null) {
          n = type._start;
        } else {
          while (n !== null) {
            if (n.right !== null) {
              n = n.right;
              break;
            } else if (n.parent === this._root) {
              n = null;
            } else {
              n = /** @type {AbstractType<any>} */
              n.parent._item;
            }
          }
        }
      } while (n !== null && (n.deleted || !this._filter(
        /** @type {ContentType} */
        n.content.type
      )));
    }
    this._firstCall = false;
    if (n === null) {
      return { value: void 0, done: true };
    }
    this._currentNode = n;
    return { value: (
      /** @type {any} */
      n.content.type
    ), done: false };
  }
}
class YXmlFragment extends AbstractType {
  constructor() {
    super();
    this._prelimContent = [];
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get firstChild() {
    const first = this._first;
    return first ? first.content.getContent()[0] : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    );
    this._prelimContent = null;
  }
  _copy() {
    return new YXmlFragment();
  }
  /**
   * @return {YXmlFragment}
   */
  clone() {
    const el = new YXmlFragment();
    el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
    return el;
  }
  get length() {
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Create a subtree of childNodes.
   *
   * @example
   * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
   * for (let node in walker) {
   *   // `node` is a div node
   *   nop(node)
   * }
   *
   * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
   *                          returns a Boolean indicating whether the child
   *                          is to be included in the subtree.
   * @return {YXmlTreeWalker} A subtree and a position within it.
   *
   * @public
   */
  createTreeWalker(filter) {
    return new YXmlTreeWalker(this, filter);
  }
  /**
   * Returns the first YXmlElement that matches the query.
   * Similar to DOM's {@link querySelector}.
   *
   * Query support:
   *   - tagname
   * TODO:
   *   - id
   *   - attribute
   *
   * @param {CSS_Selector} query The query on the children.
   * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
   *
   * @public
   */
  querySelector(query) {
    query = query.toUpperCase();
    const iterator = new YXmlTreeWalker(this, (element2) => element2.nodeName && element2.nodeName.toUpperCase() === query);
    const next = iterator.next();
    if (next.done) {
      return null;
    } else {
      return next.value;
    }
  }
  /**
   * Returns all YXmlElements that match the query.
   * Similar to Dom's {@link querySelectorAll}.
   *
   * @todo Does not yet support all queries. Currently only query by tagName.
   *
   * @param {CSS_Selector} query The query on the children
   * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
   *
   * @public
   */
  querySelectorAll(query) {
    query = query.toUpperCase();
    return Array.from(new YXmlTreeWalker(this, (element2) => element2.nodeName && element2.nodeName.toUpperCase() === query));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    callTypeObservers(this, transaction, new YXmlEvent(this, parentSubs, transaction));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return typeListMap(this, (xml) => xml.toString()).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const fragment = _document.createDocumentFragment();
    if (binding !== void 0) {
      binding._createAssociation(fragment, this);
    }
    typeListForEach(this, (xmlType) => {
      fragment.insertBefore(xmlType.toDOM(_document, hooks, binding), null);
    });
    return fragment;
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {number} index The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insert(index, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListInsertGenerics(transaction, this, index, content);
      });
    } else {
      this._prelimContent.splice(index, 0, ...content);
    }
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insertAfter(ref, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        const refItem = ref && ref instanceof AbstractType ? ref._item : ref;
        typeListInsertGenericsAfter(transaction, this, refItem, content);
      });
    } else {
      const pc = (
        /** @type {Array<any>} */
        this._prelimContent
      );
      const index = ref === null ? 0 : pc.findIndex((el) => el === ref) + 1;
      if (index === 0 && ref !== null) {
        throw create$3("Reference item not found");
      }
      pc.splice(index, 0, ...content);
    }
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} [length=1] The number of elements to remove. Defaults to 1.
   */
  delete(index, length2 = 1) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListDelete(transaction, this, index, length2);
      });
    } else {
      this._prelimContent.splice(index, length2);
    }
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return typeListToArray(this);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
   */
  push(content) {
    this.insert(this.length, content);
  }
  /**
   * Preppends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to preppend.
   */
  unshift(content) {
    this.insert(0, content);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {YXmlElement|YXmlText}
   */
  get(index) {
    return typeListGet(this, index);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<YXmlElement|YXmlText>}
   */
  slice(start = 0, end = this.length) {
    return typeListSlice(this, start, end);
  }
  /**
   * Executes a provided function on once on overy child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    typeListForEach(this, f);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlFragmentRefID);
  }
}
const readYXmlFragment = (_decoder) => new YXmlFragment();
class YXmlElement extends YXmlFragment {
  constructor(nodeName = "UNDEFINED") {
    super();
    this.nodeName = nodeName;
    this._prelimAttrs = /* @__PURE__ */ new Map();
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const n = this._item ? this._item.next : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const n = this._item ? this._item.prev : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    /** @type {Map<string, any>} */
    this._prelimAttrs.forEach((value, key) => {
      this.setAttribute(key, value);
    });
    this._prelimAttrs = null;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   *
   * @return {YXmlElement}
   */
  _copy() {
    return new YXmlElement(this.nodeName);
  }
  /**
   * @return {YXmlElement}
   */
  clone() {
    const el = new YXmlElement(this.nodeName);
    const attrs = this.getAttributes();
    for (const key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
    el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
    return el;
  }
  /**
   * Returns the XML serialization of this YXmlElement.
   * The attributes are ordered by attribute-name, so you can easily use this
   * method to compare YXmlElements
   *
   * @return {string} The string representation of this type.
   *
   * @public
   */
  toString() {
    const attrs = this.getAttributes();
    const stringBuilder = [];
    const keys2 = [];
    for (const key in attrs) {
      keys2.push(key);
    }
    keys2.sort();
    const keysLen = keys2.length;
    for (let i = 0; i < keysLen; i++) {
      const key = keys2[i];
      stringBuilder.push(key + '="' + attrs[key] + '"');
    }
    const nodeName = this.nodeName.toLocaleLowerCase();
    const attrsString = stringBuilder.length > 0 ? " " + stringBuilder.join(" ") : "";
    return `<${nodeName}${attrsString}>${super.toString()}</${nodeName}>`;
  }
  /**
   * Removes an attribute from this YXmlElement.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(attributeName) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, attributeName);
      });
    } else {
      this._prelimAttrs.delete(attributeName);
    }
  }
  /**
   * Sets or updates an attribute.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {String} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(attributeName, attributeValue) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(transaction, this, attributeName, attributeValue);
      });
    } else {
      this._prelimAttrs.set(attributeName, attributeValue);
    }
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {String} The queried attribute value.
   *
   * @public
   */
  getAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapGet(this, attributeName)
    );
  }
  /**
   * Returns whether an attribute exists
   *
   * @param {String} attributeName The attribute name to check for existence.
   * @return {boolean} whether the attribute exists.
   *
   * @public
   */
  hasAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapHas(this, attributeName)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes() {
    return typeMapGetAll(this);
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const dom = _document.createElement(this.nodeName);
    const attrs = this.getAttributes();
    for (const key in attrs) {
      dom.setAttribute(key, attrs[key]);
    }
    typeListForEach(this, (yxml) => {
      dom.appendChild(yxml.toDOM(_document, hooks, binding));
    });
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlElementRefID);
    encoder.writeKey(this.nodeName);
  }
}
const readYXmlElement = (decoder) => new YXmlElement(decoder.readKey());
class YXmlEvent extends YEvent {
  /**
   * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
   * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
   *                   child list changed.
   * @param {Transaction} transaction The transaction instance with wich the
   *                                  change was created.
   */
  constructor(target, subs, transaction) {
    super(target, transaction);
    this.childListChanged = false;
    this.attributesChanged = /* @__PURE__ */ new Set();
    subs.forEach((sub) => {
      if (sub === null) {
        this.childListChanged = true;
      } else {
        this.attributesChanged.add(sub);
      }
    });
  }
}
class YXmlHook extends YMap {
  /**
   * @param {string} hookName nodeName of the Dom Node.
   */
  constructor(hookName) {
    super();
    this.hookName = hookName;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   */
  _copy() {
    return new YXmlHook(this.hookName);
  }
  /**
   * @return {YXmlHook}
   */
  clone() {
    const el = new YXmlHook(this.hookName);
    this.forEach((value, key) => {
      el.set(key, value);
    });
    return el;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object.<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type
   * @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const hook = hooks[this.hookName];
    let dom;
    if (hook !== void 0) {
      dom = hook.createDom(this);
    } else {
      dom = document.createElement(this.hookName);
    }
    dom.setAttribute("data-yjs-hook", this.hookName);
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlHookRefID);
    encoder.writeKey(this.hookName);
  }
}
const readYXmlHook = (decoder) => new YXmlHook(decoder.readKey());
class YXmlText extends YText {
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const n = this._item ? this._item.next : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const n = this._item ? this._item.prev : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  _copy() {
    return new YXmlText();
  }
  /**
   * @return {YXmlText}
   */
  clone() {
    const text2 = new YXmlText();
    text2.applyDelta(this.toDelta());
    return text2;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlText.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks, binding) {
    const dom = _document.createTextNode(this.toString());
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  toString() {
    return this.toDelta().map((delta) => {
      const nestedNodes = [];
      for (const nodeName in delta.attributes) {
        const attrs = [];
        for (const key in delta.attributes[nodeName]) {
          attrs.push({ key, value: delta.attributes[nodeName][key] });
        }
        attrs.sort((a, b) => a.key < b.key ? -1 : 1);
        nestedNodes.push({ nodeName, attrs });
      }
      nestedNodes.sort((a, b) => a.nodeName < b.nodeName ? -1 : 1);
      let str = "";
      for (let i = 0; i < nestedNodes.length; i++) {
        const node = nestedNodes[i];
        str += `<${node.nodeName}`;
        for (let j = 0; j < node.attrs.length; j++) {
          const attr2 = node.attrs[j];
          str += ` ${attr2.key}="${attr2.value}"`;
        }
        str += ">";
      }
      str += delta.insert;
      for (let i = nestedNodes.length - 1; i >= 0; i--) {
        str += `</${nestedNodes[i].nodeName}>`;
      }
      return str;
    }).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlTextRefID);
  }
}
const readYXmlText = (decoder) => new YXmlText();
class AbstractStruct {
  /**
   * @param {ID} id
   * @param {number} length
   */
  constructor(id, length2) {
    this.id = id;
    this.length = length2;
  }
  /**
   * @type {boolean}
   */
  get deleted() {
    throw methodUnimplemented();
  }
  /**
   * Merge this struct with the item to the right.
   * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
   * Also this method does *not* remove right from StructStore!
   * @param {AbstractStruct} right
   * @return {boolean} wether this merged with right
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   * @param {number} encodingRef
   */
  write(encoder, offset, encodingRef) {
    throw methodUnimplemented();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    throw methodUnimplemented();
  }
}
const structGCRefNumber = 0;
class GC extends AbstractStruct {
  get deleted() {
    return true;
  }
  delete() {
  }
  /**
   * @param {GC} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor !== right.constructor) {
      return false;
    }
    this.length += right.length;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    if (offset > 0) {
      this.id.clock += offset;
      this.length -= offset;
    }
    addStruct(transaction.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeInfo(structGCRefNumber);
    encoder.writeLen(this.length - offset);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    return null;
  }
}
class ContentBinary {
  /**
   * @param {Uint8Array} content
   */
  constructor(content) {
    this.content = content;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.content];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentBinary}
   */
  copy() {
    return new ContentBinary(this.content);
  }
  /**
   * @param {number} offset
   * @return {ContentBinary}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentBinary} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeBuf(this.content);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 3;
  }
}
const readContentBinary = (decoder) => new ContentBinary(decoder.readBuf());
class ContentDeleted {
  /**
   * @param {number} len
   */
  constructor(len) {
    this.len = len;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.len;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return false;
  }
  /**
   * @return {ContentDeleted}
   */
  copy() {
    return new ContentDeleted(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(offset) {
    const right = new ContentDeleted(this.len - offset);
    this.len = offset;
    return right;
  }
  /**
   * @param {ContentDeleted} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.len += right.len;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    addToDeleteSet(transaction.deleteSet, item.id.client, item.id.clock, this.len);
    item.markDeleted();
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeLen(this.len - offset);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 1;
  }
}
const readContentDeleted = (decoder) => new ContentDeleted(decoder.readLen());
const createDocFromOpts = (guid, opts) => new Doc({ guid, ...opts, shouldLoad: opts.shouldLoad || opts.autoLoad || false });
class ContentDoc {
  /**
   * @param {Doc} doc
   */
  constructor(doc2) {
    if (doc2._item) {
      console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid.");
    }
    this.doc = doc2;
    const opts = {};
    this.opts = opts;
    if (!doc2.gc) {
      opts.gc = false;
    }
    if (doc2.autoLoad) {
      opts.autoLoad = true;
    }
    if (doc2.meta !== null) {
      opts.meta = doc2.meta;
    }
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.doc];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentDoc}
   */
  copy() {
    return new ContentDoc(createDocFromOpts(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentDoc} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    this.doc._item = item;
    transaction.subdocsAdded.add(this.doc);
    if (this.doc.shouldLoad) {
      transaction.subdocsLoaded.add(this.doc);
    }
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
    if (transaction.subdocsAdded.has(this.doc)) {
      transaction.subdocsAdded.delete(this.doc);
    } else {
      transaction.subdocsRemoved.add(this.doc);
    }
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeString(this.doc.guid);
    encoder.writeAny(this.opts);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 9;
  }
}
const readContentDoc = (decoder) => new ContentDoc(createDocFromOpts(decoder.readString(), decoder.readAny()));
class ContentEmbed {
  /**
   * @param {Object} embed
   */
  constructor(embed) {
    this.embed = embed;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.embed];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentEmbed}
   */
  copy() {
    return new ContentEmbed(this.embed);
  }
  /**
   * @param {number} offset
   * @return {ContentEmbed}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentEmbed} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeJSON(this.embed);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 5;
  }
}
const readContentEmbed = (decoder) => new ContentEmbed(decoder.readJSON());
class ContentFormat {
  /**
   * @param {string} key
   * @param {Object} value
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return false;
  }
  /**
   * @return {ContentFormat}
   */
  copy() {
    return new ContentFormat(this.key, this.value);
  }
  /**
   * @param {number} offset
   * @return {ContentFormat}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentFormat} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    item.parent._searchMarker = null;
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeKey(this.key);
    encoder.writeJSON(this.value);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 6;
  }
}
const readContentFormat = (decoder) => new ContentFormat(decoder.readKey(), decoder.readJSON());
class ContentJSON {
  /**
   * @param {Array<any>} arr
   */
  constructor(arr) {
    this.arr = arr;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentJSON}
   */
  copy() {
    return new ContentJSON(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(offset) {
    const right = new ContentJSON(this.arr.slice(offset));
    this.arr = this.arr.slice(0, offset);
    return right;
  }
  /**
   * @param {ContentJSON} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.arr = this.arr.concat(right.arr);
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    const len = this.arr.length;
    encoder.writeLen(len - offset);
    for (let i = offset; i < len; i++) {
      const c = this.arr[i];
      encoder.writeString(c === void 0 ? "undefined" : JSON.stringify(c));
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 2;
  }
}
const readContentJSON = (decoder) => {
  const len = decoder.readLen();
  const cs = [];
  for (let i = 0; i < len; i++) {
    const c = decoder.readString();
    if (c === "undefined") {
      cs.push(void 0);
    } else {
      cs.push(JSON.parse(c));
    }
  }
  return new ContentJSON(cs);
};
class ContentAny {
  /**
   * @param {Array<any>} arr
   */
  constructor(arr) {
    this.arr = arr;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentAny}
   */
  copy() {
    return new ContentAny(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(offset) {
    const right = new ContentAny(this.arr.slice(offset));
    this.arr = this.arr.slice(0, offset);
    return right;
  }
  /**
   * @param {ContentAny} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.arr = this.arr.concat(right.arr);
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    const len = this.arr.length;
    encoder.writeLen(len - offset);
    for (let i = offset; i < len; i++) {
      const c = this.arr[i];
      encoder.writeAny(c);
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 8;
  }
}
const readContentAny = (decoder) => {
  const len = decoder.readLen();
  const cs = [];
  for (let i = 0; i < len; i++) {
    cs.push(decoder.readAny());
  }
  return new ContentAny(cs);
};
class ContentString {
  /**
   * @param {string} str
   */
  constructor(str) {
    this.str = str;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.str.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.str.split("");
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentString}
   */
  copy() {
    return new ContentString(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(offset) {
    const right = new ContentString(this.str.slice(offset));
    this.str = this.str.slice(0, offset);
    const firstCharCode = this.str.charCodeAt(offset - 1);
    if (firstCharCode >= 55296 && firstCharCode <= 56319) {
      this.str = this.str.slice(0, offset - 1) + "�";
      right.str = "�" + right.str.slice(1);
    }
    return right;
  }
  /**
   * @param {ContentString} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.str += right.str;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeString(offset === 0 ? this.str : this.str.slice(offset));
  }
  /**
   * @return {number}
   */
  getRef() {
    return 4;
  }
}
const readContentString = (decoder) => new ContentString(decoder.readString());
const typeRefs = [
  readYArray,
  readYMap,
  readYText,
  readYXmlElement,
  readYXmlFragment,
  readYXmlHook,
  readYXmlText
];
const YArrayRefID = 0;
const YMapRefID = 1;
const YTextRefID = 2;
const YXmlElementRefID = 3;
const YXmlFragmentRefID = 4;
const YXmlHookRefID = 5;
const YXmlTextRefID = 6;
class ContentType {
  /**
   * @param {AbstractType<any>} type
   */
  constructor(type) {
    this.type = type;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.type];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentType}
   */
  copy() {
    return new ContentType(this.type._copy());
  }
  /**
   * @param {number} offset
   * @return {ContentType}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentType} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    this.type._integrate(transaction.doc, item);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
    let item = this.type._start;
    while (item !== null) {
      if (!item.deleted) {
        item.delete(transaction);
      } else {
        transaction._mergeStructs.push(item);
      }
      item = item.right;
    }
    this.type._map.forEach((item2) => {
      if (!item2.deleted) {
        item2.delete(transaction);
      } else {
        transaction._mergeStructs.push(item2);
      }
    });
    transaction.changed.delete(this.type);
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
    let item = this.type._start;
    while (item !== null) {
      item.gc(store, true);
      item = item.right;
    }
    this.type._start = null;
    this.type._map.forEach(
      /** @param {Item | null} item */
      (item2) => {
        while (item2 !== null) {
          item2.gc(store, true);
          item2 = item2.left;
        }
      }
    );
    this.type._map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    this.type._write(encoder);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 7;
  }
}
const readContentType = (decoder) => new ContentType(typeRefs[decoder.readTypeRef()](decoder));
const followRedone = (store, id) => {
  let nextID = id;
  let diff = 0;
  let item;
  do {
    if (diff > 0) {
      nextID = createID(nextID.client, nextID.clock + diff);
    }
    item = getItem(store, nextID);
    diff = nextID.clock - item.id.clock;
    nextID = item.redone;
  } while (nextID !== null && item instanceof Item);
  return {
    item,
    diff
  };
};
const keepItem = (item, keep) => {
  while (item !== null && item.keep !== keep) {
    item.keep = keep;
    item = /** @type {AbstractType<any>} */
    item.parent._item;
  }
};
const splitItem = (transaction, leftItem, diff) => {
  const { client, clock } = leftItem.id;
  const rightItem = new Item(
    createID(client, clock + diff),
    leftItem,
    createID(client, clock + diff - 1),
    leftItem.right,
    leftItem.rightOrigin,
    leftItem.parent,
    leftItem.parentSub,
    leftItem.content.splice(diff)
  );
  if (leftItem.deleted) {
    rightItem.markDeleted();
  }
  if (leftItem.keep) {
    rightItem.keep = true;
  }
  if (leftItem.redone !== null) {
    rightItem.redone = createID(leftItem.redone.client, leftItem.redone.clock + diff);
  }
  leftItem.right = rightItem;
  if (rightItem.right !== null) {
    rightItem.right.left = rightItem;
  }
  transaction._mergeStructs.push(rightItem);
  if (rightItem.parentSub !== null && rightItem.right === null) {
    rightItem.parent._map.set(rightItem.parentSub, rightItem);
  }
  leftItem.length = diff;
  return rightItem;
};
const redoItem = (transaction, item, redoitems, itemsToDelete, ignoreRemoteMapChanges) => {
  const doc2 = transaction.doc;
  const store = doc2.store;
  const ownClientID = doc2.clientID;
  const redone = item.redone;
  if (redone !== null) {
    return getItemCleanStart(transaction, redone);
  }
  let parentItem = (
    /** @type {AbstractType<any>} */
    item.parent._item
  );
  let left = null;
  let right;
  if (parentItem !== null && parentItem.deleted === true) {
    if (parentItem.redone === null && (!redoitems.has(parentItem) || redoItem(transaction, parentItem, redoitems, itemsToDelete, ignoreRemoteMapChanges) === null)) {
      return null;
    }
    while (parentItem.redone !== null) {
      parentItem = getItemCleanStart(transaction, parentItem.redone);
    }
  }
  const parentType = parentItem === null ? (
    /** @type {AbstractType<any>} */
    item.parent
  ) : (
    /** @type {ContentType} */
    parentItem.content.type
  );
  if (item.parentSub === null) {
    left = item.left;
    right = item;
    while (left !== null) {
      let leftTrace = left;
      while (leftTrace !== null && /** @type {AbstractType<any>} */
      leftTrace.parent._item !== parentItem) {
        leftTrace = leftTrace.redone === null ? null : getItemCleanStart(transaction, leftTrace.redone);
      }
      if (leftTrace !== null && /** @type {AbstractType<any>} */
      leftTrace.parent._item === parentItem) {
        left = leftTrace;
        break;
      }
      left = left.left;
    }
    while (right !== null) {
      let rightTrace = right;
      while (rightTrace !== null && /** @type {AbstractType<any>} */
      rightTrace.parent._item !== parentItem) {
        rightTrace = rightTrace.redone === null ? null : getItemCleanStart(transaction, rightTrace.redone);
      }
      if (rightTrace !== null && /** @type {AbstractType<any>} */
      rightTrace.parent._item === parentItem) {
        right = rightTrace;
        break;
      }
      right = right.right;
    }
  } else {
    right = null;
    if (item.right && !ignoreRemoteMapChanges) {
      left = item;
      while (left !== null && left.right !== null && isDeleted(itemsToDelete, left.right.id)) {
        left = left.right;
      }
      while (left !== null && left.redone !== null) {
        left = getItemCleanStart(transaction, left.redone);
      }
      if (left && left.right !== null) {
        return null;
      }
    } else {
      left = parentType._map.get(item.parentSub) || null;
    }
  }
  const nextClock = getState(store, ownClientID);
  const nextId = createID(ownClientID, nextClock);
  const redoneItem = new Item(
    nextId,
    left,
    left && left.lastId,
    right,
    right && right.id,
    parentType,
    item.parentSub,
    item.content.copy()
  );
  item.redone = nextId;
  keepItem(redoneItem, true);
  redoneItem.integrate(transaction, 0);
  return redoneItem;
};
class Item extends AbstractStruct {
  /**
   * @param {ID} id
   * @param {Item | null} left
   * @param {ID | null} origin
   * @param {Item | null} right
   * @param {ID | null} rightOrigin
   * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
   * @param {string | null} parentSub
   * @param {AbstractContent} content
   */
  constructor(id, left, origin, right, rightOrigin, parent, parentSub, content) {
    super(id, content.getLength());
    this.origin = origin;
    this.left = left;
    this.right = right;
    this.rightOrigin = rightOrigin;
    this.parent = parent;
    this.parentSub = parentSub;
    this.redone = null;
    this.content = content;
    this.info = this.content.isCountable() ? BIT2 : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(isMarked) {
    if ((this.info & BIT4) > 0 !== isMarked) {
      this.info ^= BIT4;
    }
  }
  get marker() {
    return (this.info & BIT4) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & BIT1) > 0;
  }
  set keep(doKeep) {
    if (this.keep !== doKeep) {
      this.info ^= BIT1;
    }
  }
  get countable() {
    return (this.info & BIT2) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & BIT3) > 0;
  }
  set deleted(doDelete) {
    if (this.deleted !== doDelete) {
      this.info ^= BIT3;
    }
  }
  markDeleted() {
    this.info |= BIT3;
  }
  /**
   * Return the creator clientID of the missing op or define missing items and return null.
   *
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= getState(store, this.origin.client)) {
      return this.origin.client;
    }
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= getState(store, this.rightOrigin.client)) {
      return this.rightOrigin.client;
    }
    if (this.parent && this.parent.constructor === ID && this.id.client !== this.parent.client && this.parent.clock >= getState(store, this.parent.client)) {
      return this.parent.client;
    }
    if (this.origin) {
      this.left = getItemCleanEnd(transaction, store, this.origin);
      this.origin = this.left.lastId;
    }
    if (this.rightOrigin) {
      this.right = getItemCleanStart(transaction, this.rightOrigin);
      this.rightOrigin = this.right.id;
    }
    if (this.left && this.left.constructor === GC || this.right && this.right.constructor === GC) {
      this.parent = null;
    }
    if (!this.parent) {
      if (this.left && this.left.constructor === Item) {
        this.parent = this.left.parent;
        this.parentSub = this.left.parentSub;
      }
      if (this.right && this.right.constructor === Item) {
        this.parent = this.right.parent;
        this.parentSub = this.right.parentSub;
      }
    } else if (this.parent.constructor === ID) {
      const parentItem = getItem(store, this.parent);
      if (parentItem.constructor === GC) {
        this.parent = null;
      } else {
        this.parent = /** @type {ContentType} */
        parentItem.content.type;
      }
    }
    return null;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    if (offset > 0) {
      this.id.clock += offset;
      this.left = getItemCleanEnd(transaction, transaction.doc.store, createID(this.id.client, this.id.clock - 1));
      this.origin = this.left.lastId;
      this.content = this.content.splice(offset);
      this.length -= offset;
    }
    if (this.parent) {
      if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
        let left = this.left;
        let o;
        if (left !== null) {
          o = left.right;
        } else if (this.parentSub !== null) {
          o = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null;
          while (o !== null && o.left !== null) {
            o = o.left;
          }
        } else {
          o = /** @type {AbstractType<any>} */
          this.parent._start;
        }
        const conflictingItems = /* @__PURE__ */ new Set();
        const itemsBeforeOrigin = /* @__PURE__ */ new Set();
        while (o !== null && o !== this.right) {
          itemsBeforeOrigin.add(o);
          conflictingItems.add(o);
          if (compareIDs(this.origin, o.origin)) {
            if (o.id.client < this.id.client) {
              left = o;
              conflictingItems.clear();
            } else if (compareIDs(this.rightOrigin, o.rightOrigin)) {
              break;
            }
          } else if (o.origin !== null && itemsBeforeOrigin.has(getItem(transaction.doc.store, o.origin))) {
            if (!conflictingItems.has(getItem(transaction.doc.store, o.origin))) {
              left = o;
              conflictingItems.clear();
            }
          } else {
            break;
          }
          o = o.right;
        }
        this.left = left;
      }
      if (this.left !== null) {
        const right = this.left.right;
        this.right = right;
        this.left.right = this;
      } else {
        let r;
        if (this.parentSub !== null) {
          r = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null;
          while (r !== null && r.left !== null) {
            r = r.left;
          }
        } else {
          r = /** @type {AbstractType<any>} */
          this.parent._start;
          this.parent._start = this;
        }
        this.right = r;
      }
      if (this.right !== null) {
        this.right.left = this;
      } else if (this.parentSub !== null) {
        this.parent._map.set(this.parentSub, this);
        if (this.left !== null) {
          this.left.delete(transaction);
        }
      }
      if (this.parentSub === null && this.countable && !this.deleted) {
        this.parent._length += this.length;
      }
      addStruct(transaction.doc.store, this);
      this.content.integrate(transaction, this);
      addChangedTypeToTransaction(
        transaction,
        /** @type {AbstractType<any>} */
        this.parent,
        this.parentSub
      );
      if (
        /** @type {AbstractType<any>} */
        this.parent._item !== null && /** @type {AbstractType<any>} */
        this.parent._item.deleted || this.parentSub !== null && this.right !== null
      ) {
        this.delete(transaction);
      }
    } else {
      new GC(this.id, this.length).integrate(transaction, 0);
    }
  }
  /**
   * Returns the next non-deleted item
   */
  get next() {
    let n = this.right;
    while (n !== null && n.deleted) {
      n = n.right;
    }
    return n;
  }
  /**
   * Returns the previous non-deleted item
   */
  get prev() {
    let n = this.left;
    while (n !== null && n.deleted) {
      n = n.left;
    }
    return n;
  }
  /**
   * Computes the last content address of this Item.
   */
  get lastId() {
    return this.length === 1 ? this.id : createID(this.id.client, this.id.clock + this.length - 1);
  }
  /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor === right.constructor && compareIDs(right.origin, this.lastId) && this.right === right && compareIDs(this.rightOrigin, right.rightOrigin) && this.id.client === right.id.client && this.id.clock + this.length === right.id.clock && this.deleted === right.deleted && this.redone === null && right.redone === null && this.content.constructor === right.content.constructor && this.content.mergeWith(right.content)) {
      const searchMarker = (
        /** @type {AbstractType<any>} */
        this.parent._searchMarker
      );
      if (searchMarker) {
        searchMarker.forEach((marker) => {
          if (marker.p === right) {
            marker.p = this;
            if (!this.deleted && this.countable) {
              marker.index -= this.length;
            }
          }
        });
      }
      if (right.keep) {
        this.keep = true;
      }
      this.right = right.right;
      if (this.right !== null) {
        this.right.left = this;
      }
      this.length += right.length;
      return true;
    }
    return false;
  }
  /**
   * Mark this Item as deleted.
   *
   * @param {Transaction} transaction
   */
  delete(transaction) {
    if (!this.deleted) {
      const parent = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (this.countable && this.parentSub === null) {
        parent._length -= this.length;
      }
      this.markDeleted();
      addToDeleteSet(transaction.deleteSet, this.id.client, this.id.clock, this.length);
      addChangedTypeToTransaction(transaction, parent, this.parentSub);
      this.content.delete(transaction);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(store, parentGCd) {
    if (!this.deleted) {
      throw unexpectedCase();
    }
    this.content.gc(store);
    if (parentGCd) {
      replaceStruct(store, this, new GC(this.id, this.length));
    } else {
      this.content = new ContentDeleted(this.length);
    }
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   */
  write(encoder, offset) {
    const origin = offset > 0 ? createID(this.id.client, this.id.clock + offset - 1) : this.origin;
    const rightOrigin = this.rightOrigin;
    const parentSub = this.parentSub;
    const info = this.content.getRef() & BITS5 | (origin === null ? 0 : BIT8) | // origin is defined
    (rightOrigin === null ? 0 : BIT7) | // right origin is defined
    (parentSub === null ? 0 : BIT6);
    encoder.writeInfo(info);
    if (origin !== null) {
      encoder.writeLeftID(origin);
    }
    if (rightOrigin !== null) {
      encoder.writeRightID(rightOrigin);
    }
    if (origin === null && rightOrigin === null) {
      const parent = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (parent._item !== void 0) {
        const parentItem = parent._item;
        if (parentItem === null) {
          const ykey = findRootTypeKey(parent);
          encoder.writeParentInfo(true);
          encoder.writeString(ykey);
        } else {
          encoder.writeParentInfo(false);
          encoder.writeLeftID(parentItem.id);
        }
      } else if (parent.constructor === String) {
        encoder.writeParentInfo(true);
        encoder.writeString(parent);
      } else if (parent.constructor === ID) {
        encoder.writeParentInfo(false);
        encoder.writeLeftID(parent);
      } else {
        unexpectedCase();
      }
      if (parentSub !== null) {
        encoder.writeString(parentSub);
      }
    }
    this.content.write(encoder, offset);
  }
}
const readItemContent = (decoder, info) => contentRefs[info & BITS5](decoder);
const contentRefs = [
  () => {
    unexpectedCase();
  },
  // GC is not ItemContent
  readContentDeleted,
  // 1
  readContentJSON,
  // 2
  readContentBinary,
  // 3
  readContentString,
  // 4
  readContentEmbed,
  // 5
  readContentFormat,
  // 6
  readContentType,
  // 7
  readContentAny,
  // 8
  readContentDoc,
  // 9
  () => {
    unexpectedCase();
  }
  // 10 - Skip is not ItemContent
];
const structSkipRefNumber = 10;
class Skip extends AbstractStruct {
  get deleted() {
    return true;
  }
  delete() {
  }
  /**
   * @param {Skip} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor !== right.constructor) {
      return false;
    }
    this.length += right.length;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    unexpectedCase();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeInfo(structSkipRefNumber);
    writeVarUint(encoder.restEncoder, this.length - offset);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    return null;
  }
}
const glo = (
  /** @type {any} */
  typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {}
);
const importIdentifier = "__ $YJS$ __";
if (glo[importIdentifier] === true) {
  console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
}
glo[importIdentifier] = true;
const createMutex = () => {
  let token = true;
  return (f, g) => {
    if (token) {
      token = false;
      try {
        f();
      } finally {
        token = true;
      }
    } else if (g !== void 0) {
      g();
    }
  };
};
const simpleDiffString = (a, b) => {
  let left = 0;
  let right = 0;
  while (left < a.length && left < b.length && a[left] === b[left]) {
    left++;
  }
  while (right + left < a.length && right + left < b.length && a[a.length - right - 1] === b[b.length - right - 1]) {
    right++;
  }
  return {
    index: left,
    remove: a.length - left - right,
    insert: b.slice(left, b.length - right)
  };
};
const cmOrigin = "y-codemirror";
const typeObserver = (binding, event) => {
  binding._mux(() => {
    const cmDoc = binding.cmDoc;
    const cm = cmDoc.getEditor();
    let anchor = cm.indexFromPos(cm.getCursor("anchor"));
    let head = cm.indexFromPos(cm.getCursor("head"));
    const switchSel = head < anchor;
    if (switchSel) {
      const tmp = head;
      head = anchor;
      anchor = tmp;
    }
    const performChange = () => {
      const delta = event.delta;
      let index = 0;
      for (let i = 0; i < event.delta.length; i++) {
        const d = delta[i];
        if (d.retain) {
          index += d.retain;
        } else if (d.insert) {
          if (index < anchor || anchor < head && index === anchor) {
            anchor += d.insert.length;
          }
          if (index < head) {
            head += d.insert.length;
          }
          const pos = cmDoc.posFromIndex(index);
          cmDoc.replaceRange(d.insert, pos, pos, cmOrigin);
          index += d.insert.length;
        } else if (d.delete) {
          if (index < anchor) {
            anchor = max(anchor - d.delete, index);
          }
          if (index < head) {
            head = max(head - d.delete, index);
          }
          const start = cmDoc.posFromIndex(index);
          const end = cmDoc.posFromIndex(index + d.delete);
          cmDoc.replaceRange("", start, end, cmOrigin);
        }
      }
    };
    if (cm) {
      cm.operation(performChange);
    } else {
      performChange();
    }
    if (switchSel) {
      const tmp = head;
      head = anchor;
      anchor = tmp;
    }
    cm.setSelection(cm.posFromIndex(anchor), cm.posFromIndex(head), { scroll: false });
  });
};
const targetObserver = (binding, changes) => {
  binding._mux(() => {
    binding.doc.transact(() => {
      const hasPaste = binding.yUndoManager && changes.some((change) => change.origin === "paste");
      if (hasPaste) {
        binding.yUndoManager.stopCapturing();
      }
      if (changes.length > 1) {
        const d = simpleDiffString(binding.type.toString(), binding.cmDoc.getValue());
        binding.type.delete(d.index, d.remove);
        binding.type.insert(d.index, d.insert);
      } else {
        const change = changes[0];
        const start = binding.cmDoc.indexFromPos(change.from);
        const delLen = change.removed.map((s) => s.length).reduce(add) + change.removed.length - 1;
        if (delLen > 0) {
          binding.type.delete(start, delLen);
        }
        if (change.text.length > 0) {
          binding.type.insert(start, change.text.join("\n"));
        }
      }
      if (hasPaste) {
        binding.yUndoManager.stopCapturing();
      }
    }, binding);
  });
  if (binding._pendingCursorEvent) {
    binding._pendingCursorEvent = false;
    binding.emit("cursorActivity", [binding]);
  }
};
const createRemoteCaret = (username, color) => {
  const caret = document.createElement("span");
  caret.classList.add("remote-caret");
  caret.setAttribute("style", `border-color: ${color}`);
  const userDiv = document.createElement("div");
  userDiv.setAttribute("style", `background-color: ${color}`);
  userDiv.insertBefore(document.createTextNode(username), null);
  caret.insertBefore(userDiv, null);
  setTimeout(() => {
    caret.classList.add("hide-name");
  }, 2e3);
  return caret;
};
const createEmptyLinePlaceholder = (color) => {
  const placeholder = document.createElement("span");
  placeholder.setAttribute("style", "user-select: none;");
  const emptyTxt = document.createElement("span");
  emptyTxt.insertBefore(document.createTextNode(""), null);
  const sel = document.createElement("span");
  sel.setAttribute("class", "y-line-selection");
  sel.setAttribute("style", `display: inline-block; position: absolute; left: 4px; right: 4px; top: 0; bottom: 0; background-color: ${color}70`);
  placeholder.insertBefore(sel, null);
  placeholder.insertBefore(emptyTxt, null);
  return placeholder;
};
const updateRemoteSelection = (y, cm, type, cursors, clientId, awareness) => {
  const aw = awareness.getStates().get(clientId);
  const m = cursors.get(clientId);
  if (m !== void 0) {
    if (m.caret) {
      m.caret.clear();
    }
    m.sel.forEach((sel) => sel.clear());
    cursors.delete(clientId);
  }
  if (aw === void 0) {
    return;
  }
  const user = aw.user || {};
  if (user.color == null) {
    user.color = "#ffa500";
  }
  if (user.name == null) {
    user.name = `User: ${clientId}`;
  }
  const cursor = aw.cursor;
  if (cursor == null || cursor.anchor == null || cursor.head == null) {
    return;
  }
  const anchor = createAbsolutePositionFromRelativePosition(JSON.parse(cursor.anchor), y);
  const head = createAbsolutePositionFromRelativePosition(JSON.parse(cursor.head), y);
  if (anchor !== null && head !== null && anchor.type === type && head.type === type) {
    const headpos = cm.posFromIndex(head.index);
    const anchorpos = cm.posFromIndex(anchor.index);
    let from2, to;
    if (head.index < anchor.index) {
      from2 = headpos;
      to = anchorpos;
    } else {
      from2 = anchorpos;
      to = headpos;
    }
    const caretEl = createRemoteCaret(user.name, user.color);
    if (m && equalityFlat(aw.cursor.anchor, m.awCursor.anchor) && equalityFlat(aw.cursor.head, m.awCursor.head)) {
      caretEl.classList.add("hide-name");
    }
    const sel = [];
    if (head.index !== anchor.index) {
      if (from2.line !== to.line && from2.ch !== 0) {
        sel.push(cm.markText(from2, new CodeMirror.Pos(from2.line + 1, 0), { css: `background-color: ${user.color}70;`, inclusiveRight: false, inclusiveLeft: false }));
        from2 = new CodeMirror.Pos(from2.line + 1, 0);
      }
      while (from2.line !== to.line) {
        sel.push(cm.setBookmark(new CodeMirror.Pos(from2.line, 0), { widget: createEmptyLinePlaceholder(user.color) }));
        from2 = new CodeMirror.Pos(from2.line + 1, 0);
      }
      sel.push(cm.markText(from2, to, { css: `background-color: ${user.color}70;`, inclusiveRight: false, inclusiveLeft: false }));
    }
    const caret = sel.length > 0 && to === headpos && headpos.ch === 0 ? null : cm.setBookmark(headpos, { widget: caretEl, insertLeft: true });
    cursors.set(clientId, { caret, sel, awCursor: cursor });
  }
};
const codemirrorCursorActivity = (y, cm, type, awareness) => {
  const aw = awareness.getLocalState();
  if (!cm.hasFocus() || aw == null || !cm.display.wrapper.ownerDocument.hasFocus()) {
    return;
  }
  const newAnchor = createRelativePositionFromTypeIndex(type, cm.indexFromPos(cm.getCursor("anchor")));
  const newHead = createRelativePositionFromTypeIndex(type, cm.indexFromPos(cm.getCursor("head")));
  let currentAnchor = null;
  let currentHead = null;
  if (aw.cursor != null) {
    currentAnchor = createRelativePositionFromJSON(JSON.parse(aw.cursor.anchor));
    currentHead = createRelativePositionFromJSON(JSON.parse(aw.cursor.head));
  }
  if (aw.cursor == null || !compareRelativePositions(currentAnchor, newAnchor) || !compareRelativePositions(currentHead, newHead)) {
    awareness.setLocalStateField("cursor", {
      anchor: JSON.stringify(newAnchor),
      head: JSON.stringify(newHead)
    });
  }
};
class CodemirrorBinding extends Observable {
  /**
   * @param {Y.Text} textType
   * @param {import('codemirror').Editor} codeMirror
   * @param {any | null} [awareness]
   * @param {{ yUndoManager?: Y.UndoManager }} [options]
   */
  constructor(textType, codeMirror, awareness = null, { yUndoManager = null } = {}) {
    super();
    const doc2 = textType.doc;
    const cmDoc = codeMirror.getDoc();
    this.doc = doc2;
    this.type = textType;
    this.cm = codeMirror;
    this.cmDoc = cmDoc;
    this.awareness = awareness || null;
    this.yUndoManager = yUndoManager;
    this._onStackItemAdded = ({ stackItem, changedParentTypes }) => {
      if (changedParentTypes.has(textType) && this._beforeChangeSelection) {
        stackItem.meta.set(this, this._beforeChangeSelection);
      }
    };
    this._onStackItemPopped = ({ stackItem }) => {
      const sel = stackItem.meta.get(this);
      if (sel) {
        const anchor = createAbsolutePositionFromRelativePosition(sel.anchor, doc2).index;
        const head = createAbsolutePositionFromRelativePosition(sel.head, doc2).index;
        codeMirror.setSelection(codeMirror.posFromIndex(anchor), codeMirror.posFromIndex(head));
        this._beforeChange();
      }
    };
    if (yUndoManager) {
      yUndoManager.trackedOrigins.add(this);
      const editorUndo = (cm) => {
        cm.endOperation();
        yUndoManager.undo();
        cm.startOperation();
      };
      const editorRedo = (cm) => {
        cm.endOperation();
        yUndoManager.redo();
        cm.startOperation();
      };
      codeMirror.addKeyMap({
        // pc
        "Ctrl-Z": editorUndo,
        "Shift-Ctrl-Z": editorRedo,
        "Ctrl-Y": editorRedo,
        // mac
        "Cmd-Z": editorUndo,
        "Shift-Cmd-Z": editorRedo,
        "Cmd-Y": editorRedo
      });
      yUndoManager.on("stack-item-added", this._onStackItemAdded);
      yUndoManager.on("stack-item-popped", this._onStackItemPopped);
    }
    this._mux = createMutex();
    cmDoc.setValue(textType.toString());
    this._typeObserver = (event) => typeObserver(this, event);
    this._targetObserver = (instance2, changes) => {
      if (instance2.getDoc() === cmDoc) {
        targetObserver(this, changes);
      }
    };
    this._cursors = /* @__PURE__ */ new Map();
    this._changedCursors = /* @__PURE__ */ new Set();
    this._debounceCursorEvent = createDebouncer(10);
    this._awarenessListener = (event) => {
      if (codeMirror.getDoc() !== cmDoc) {
        return;
      }
      const f = (clientId) => {
        if (clientId !== doc2.clientID) {
          this._changedCursors.add(clientId);
        }
      };
      event.added.forEach(f);
      event.removed.forEach(f);
      event.updated.forEach(f);
      if (this._changedCursors.size > 0) {
        this._debounceCursorEvent(() => {
          this._changedCursors.forEach((clientId) => {
            updateRemoteSelection(doc2, codeMirror, textType, this._cursors, clientId, awareness);
          });
          this._changedCursors.clear();
        });
      }
    };
    this._pendingCursorEvent = false;
    this._cursorListener = () => {
      if (codeMirror.getDoc() === cmDoc) {
        this._pendingCursorEvent = true;
        setTimeout(() => {
          if (this._pendingCursorEvent) {
            this._pendingCursorEvent = false;
            this.emit("cursorActivity", [codeMirror]);
          }
        }, 0);
      }
    };
    this.on("cursorActivity", () => {
      codemirrorCursorActivity(doc2, codeMirror, textType, awareness);
    });
    this._blurListeer = () => awareness.setLocalStateField("cursor", null);
    textType.observe(this._typeObserver);
    codeMirror.on("changes", this._targetObserver);
    this._beforeChangeSelection = null;
    this._beforeChange = () => {
      this._mux(() => {
        const anchor = createRelativePositionFromTypeIndex(textType, codeMirror.indexFromPos(codeMirror.getCursor("anchor")));
        const head = createRelativePositionFromTypeIndex(textType, codeMirror.indexFromPos(codeMirror.getCursor("head")));
        this._beforeChangeSelection = { anchor, head };
      });
    };
    codeMirror.on("beforeChange", this._beforeChange);
    if (awareness) {
      codeMirror.on("swapDoc", this._blurListeer);
      awareness.on("change", this._awarenessListener);
      codeMirror.on("cursorActivity", this._cursorListener);
      codeMirror.on("blur", this._blurListeer);
      codeMirror.on("focus", this._cursorListener);
    }
  }
  destroy() {
    this.type.unobserve(this._typeObserver);
    this.cm.off("swapDoc", this._blurListeer);
    this.cm.off("changes", this._targetObserver);
    this.cm.off("beforeChange", this._beforeChange);
    this.cm.off("cursorActivity", this._cursorListener);
    this.cm.off("focus", this._cursorListener);
    this.cm.off("blur", this._blurListeer);
    if (this.awareness) {
      this.awareness.off("change", this._awarenessListener);
    }
    if (this.yUndoManager) {
      this.yUndoManager.off("stack-item-added", this._onStackItemAdded);
      this.yUndoManager.off("stack-item-popped", this._onStackItemPopped);
      this.yUndoManager.trackedOrigins.delete(this);
    }
    this.type = null;
    this.cm = null;
    this.cmDoc = null;
    super.destroy();
  }
}
const channels = /* @__PURE__ */ new Map();
class LocalStoragePolyfill {
  /**
   * @param {string} room
   */
  constructor(room) {
    this.room = room;
    this.onmessage = null;
    onChange((e) => e.key === room && this.onmessage !== null && this.onmessage({ data: fromBase64(e.newValue || "") }));
  }
  /**
   * @param {ArrayBuffer} buf
   */
  postMessage(buf) {
    varStorage.setItem(this.room, toBase64(createUint8ArrayFromArrayBuffer(buf)));
  }
}
const BC = typeof BroadcastChannel === "undefined" ? LocalStoragePolyfill : BroadcastChannel;
const getChannel = (room) => setIfUndefined(channels, room, () => {
  const subs = create$4();
  const bc = new BC(room);
  bc.onmessage = (e) => subs.forEach((sub) => sub(e.data, "broadcastchannel"));
  return {
    bc,
    subs
  };
});
const subscribe = (room, f) => {
  getChannel(room).subs.add(f);
  return f;
};
const unsubscribe = (room, f) => {
  const channel = getChannel(room);
  const unsubscribed = channel.subs.delete(f);
  if (unsubscribed && channel.subs.size === 0) {
    channel.bc.close();
    channels.delete(room);
  }
  return unsubscribed;
};
const publish = (room, data, origin = null) => {
  const c = getChannel(room);
  c.bc.postMessage(data);
  c.subs.forEach((sub) => sub(data, origin));
};
const messageYjsSyncStep1 = 0;
const messageYjsSyncStep2 = 1;
const messageYjsUpdate = 2;
const writeSyncStep1 = (encoder, doc2) => {
  writeVarUint(encoder, messageYjsSyncStep1);
  const sv = encodeStateVector(doc2);
  writeVarUint8Array(encoder, sv);
};
const writeSyncStep2 = (encoder, doc2, encodedStateVector) => {
  writeVarUint(encoder, messageYjsSyncStep2);
  writeVarUint8Array(encoder, encodeStateAsUpdate(doc2, encodedStateVector));
};
const readSyncStep1 = (decoder, encoder, doc2) => writeSyncStep2(encoder, doc2, readVarUint8Array(decoder));
const readSyncStep2 = (decoder, doc2, transactionOrigin) => {
  try {
    applyUpdate(doc2, readVarUint8Array(decoder), transactionOrigin);
  } catch (error) {
    console.error("Caught error while handling a Yjs update", error);
  }
};
const writeUpdate = (encoder, update) => {
  writeVarUint(encoder, messageYjsUpdate);
  writeVarUint8Array(encoder, update);
};
const readUpdate = readSyncStep2;
const readSyncMessage = (decoder, encoder, doc2, transactionOrigin) => {
  const messageType = readVarUint(decoder);
  switch (messageType) {
    case messageYjsSyncStep1:
      readSyncStep1(decoder, encoder, doc2);
      break;
    case messageYjsSyncStep2:
      readSyncStep2(decoder, doc2, transactionOrigin);
      break;
    case messageYjsUpdate:
      readUpdate(decoder, doc2, transactionOrigin);
      break;
    default:
      throw new Error("Unknown message type");
  }
  return messageType;
};
const messagePermissionDenied = 0;
const readAuthMessage = (decoder, y, permissionDeniedHandler2) => {
  switch (readVarUint(decoder)) {
    case messagePermissionDenied:
      permissionDeniedHandler2(y, readVarString(decoder));
  }
};
const outdatedTimeout = 3e4;
class Awareness extends Observable {
  /**
   * @param {Y.Doc} doc
   */
  constructor(doc2) {
    super();
    this.doc = doc2;
    this.clientID = doc2.clientID;
    this.states = /* @__PURE__ */ new Map();
    this.meta = /* @__PURE__ */ new Map();
    this._checkInterval = /** @type {any} */
    setInterval(() => {
      const now = getUnixTime();
      if (this.getLocalState() !== null && outdatedTimeout / 2 <= now - /** @type {{lastUpdated:number}} */
      this.meta.get(this.clientID).lastUpdated) {
        this.setLocalState(this.getLocalState());
      }
      const remove = [];
      this.meta.forEach((meta, clientid) => {
        if (clientid !== this.clientID && outdatedTimeout <= now - meta.lastUpdated && this.states.has(clientid)) {
          remove.push(clientid);
        }
      });
      if (remove.length > 0) {
        removeAwarenessStates(this, remove, "timeout");
      }
    }, floor(outdatedTimeout / 10));
    doc2.on("destroy", () => {
      this.destroy();
    });
    this.setLocalState({});
  }
  destroy() {
    this.emit("destroy", [this]);
    this.setLocalState(null);
    super.destroy();
    clearInterval(this._checkInterval);
  }
  /**
   * @return {Object<string,any>|null}
   */
  getLocalState() {
    return this.states.get(this.clientID) || null;
  }
  /**
   * @param {Object<string,any>|null} state
   */
  setLocalState(state) {
    const clientID = this.clientID;
    const currLocalMeta = this.meta.get(clientID);
    const clock = currLocalMeta === void 0 ? 0 : currLocalMeta.clock + 1;
    const prevState = this.states.get(clientID);
    if (state === null) {
      this.states.delete(clientID);
    } else {
      this.states.set(clientID, state);
    }
    this.meta.set(clientID, {
      clock,
      lastUpdated: getUnixTime()
    });
    const added = [];
    const updated = [];
    const filteredUpdated = [];
    const removed = [];
    if (state === null) {
      removed.push(clientID);
    } else if (prevState == null) {
      if (state != null) {
        added.push(clientID);
      }
    } else {
      updated.push(clientID);
      if (!equalityDeep(prevState, state)) {
        filteredUpdated.push(clientID);
      }
    }
    if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
      this.emit("change", [{ added, updated: filteredUpdated, removed }, "local"]);
    }
    this.emit("update", [{ added, updated, removed }, "local"]);
  }
  /**
   * @param {string} field
   * @param {any} value
   */
  setLocalStateField(field, value) {
    const state = this.getLocalState();
    if (state !== null) {
      this.setLocalState({
        ...state,
        [field]: value
      });
    }
  }
  /**
   * @return {Map<number,Object<string,any>>}
   */
  getStates() {
    return this.states;
  }
}
const removeAwarenessStates = (awareness, clients, origin) => {
  const removed = [];
  for (let i = 0; i < clients.length; i++) {
    const clientID = clients[i];
    if (awareness.states.has(clientID)) {
      awareness.states.delete(clientID);
      if (clientID === awareness.clientID) {
        const curMeta = (
          /** @type {MetaClientState} */
          awareness.meta.get(clientID)
        );
        awareness.meta.set(clientID, {
          clock: curMeta.clock + 1,
          lastUpdated: getUnixTime()
        });
      }
      removed.push(clientID);
    }
  }
  if (removed.length > 0) {
    awareness.emit("change", [{ added: [], updated: [], removed }, origin]);
    awareness.emit("update", [{ added: [], updated: [], removed }, origin]);
  }
};
const encodeAwarenessUpdate = (awareness, clients, states = awareness.states) => {
  const len = clients.length;
  const encoder = createEncoder();
  writeVarUint(encoder, len);
  for (let i = 0; i < len; i++) {
    const clientID = clients[i];
    const state = states.get(clientID) || null;
    const clock = (
      /** @type {MetaClientState} */
      awareness.meta.get(clientID).clock
    );
    writeVarUint(encoder, clientID);
    writeVarUint(encoder, clock);
    writeVarString(encoder, JSON.stringify(state));
  }
  return toUint8Array(encoder);
};
const applyAwarenessUpdate = (awareness, update, origin) => {
  const decoder = createDecoder(update);
  const timestamp = getUnixTime();
  const added = [];
  const updated = [];
  const filteredUpdated = [];
  const removed = [];
  const len = readVarUint(decoder);
  for (let i = 0; i < len; i++) {
    const clientID = readVarUint(decoder);
    let clock = readVarUint(decoder);
    const state = JSON.parse(readVarString(decoder));
    const clientMeta = awareness.meta.get(clientID);
    const prevState = awareness.states.get(clientID);
    const currClock = clientMeta === void 0 ? 0 : clientMeta.clock;
    if (currClock < clock || currClock === clock && state === null && awareness.states.has(clientID)) {
      if (state === null) {
        if (clientID === awareness.clientID && awareness.getLocalState() != null) {
          clock++;
        } else {
          awareness.states.delete(clientID);
        }
      } else {
        awareness.states.set(clientID, state);
      }
      awareness.meta.set(clientID, {
        clock,
        lastUpdated: timestamp
      });
      if (clientMeta === void 0 && state !== null) {
        added.push(clientID);
      } else if (clientMeta !== void 0 && state === null) {
        removed.push(clientID);
      } else if (state !== null) {
        if (!equalityDeep(state, prevState)) {
          filteredUpdated.push(clientID);
        }
        updated.push(clientID);
      }
    }
  }
  if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
    awareness.emit("change", [{
      added,
      updated: filteredUpdated,
      removed
    }, origin]);
  }
  if (added.length > 0 || updated.length > 0 || removed.length > 0) {
    awareness.emit("update", [{
      added,
      updated,
      removed
    }, origin]);
  }
};
const encodeQueryParams = (params2) => map(params2, (val, key) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join("&");
const messageSync = 0;
const messageQueryAwareness = 3;
const messageAwareness = 1;
const messageAuth = 2;
const messageHandlers = [];
messageHandlers[messageSync] = (encoder, decoder, provider, emitSynced, _messageType) => {
  writeVarUint(encoder, messageSync);
  const syncMessageType = readSyncMessage(
    decoder,
    encoder,
    provider.doc,
    provider
  );
  if (emitSynced && syncMessageType === messageYjsSyncStep2 && !provider.synced) {
    provider.synced = true;
  }
};
messageHandlers[messageQueryAwareness] = (encoder, _decoder, provider, _emitSynced, _messageType) => {
  writeVarUint(encoder, messageAwareness);
  writeVarUint8Array(
    encoder,
    encodeAwarenessUpdate(
      provider.awareness,
      Array.from(provider.awareness.getStates().keys())
    )
  );
};
messageHandlers[messageAwareness] = (_encoder, decoder, provider, _emitSynced, _messageType) => {
  applyAwarenessUpdate(
    provider.awareness,
    readVarUint8Array(decoder),
    provider
  );
};
messageHandlers[messageAuth] = (_encoder, decoder, provider, _emitSynced, _messageType) => {
  readAuthMessage(
    decoder,
    provider.doc,
    (_ydoc, reason) => permissionDeniedHandler(provider, reason)
  );
};
const messageReconnectTimeout = 3e4;
const permissionDeniedHandler = (provider, reason) => console.warn(`Permission denied to access ${provider.url}.
${reason}`);
const readMessage = (provider, buf, emitSynced) => {
  const decoder = createDecoder(buf);
  const encoder = createEncoder();
  const messageType = readVarUint(decoder);
  const messageHandler = provider.messageHandlers[messageType];
  if (
    /** @type {any} */
    messageHandler
  ) {
    messageHandler(encoder, decoder, provider, emitSynced, messageType);
  } else {
    console.error("Unable to compute message");
  }
  return encoder;
};
const setupWS = (provider) => {
  if (provider.shouldConnect && provider.ws === null) {
    const websocket = new provider._WS(provider.url);
    websocket.binaryType = "arraybuffer";
    provider.ws = websocket;
    provider.wsconnecting = true;
    provider.wsconnected = false;
    provider.synced = false;
    websocket.onmessage = (event) => {
      provider.wsLastMessageReceived = getUnixTime();
      const encoder = readMessage(provider, new Uint8Array(event.data), true);
      if (length(encoder) > 1) {
        websocket.send(toUint8Array(encoder));
      }
    };
    websocket.onerror = (event) => {
      provider.emit("connection-error", [event, provider]);
    };
    websocket.onclose = (event) => {
      provider.emit("connection-close", [event, provider]);
      provider.ws = null;
      provider.wsconnecting = false;
      if (provider.wsconnected) {
        provider.wsconnected = false;
        provider.synced = false;
        removeAwarenessStates(
          provider.awareness,
          Array.from(provider.awareness.getStates().keys()).filter(
            (client) => client !== provider.doc.clientID
          ),
          provider
        );
        provider.emit("status", [{
          status: "disconnected"
        }]);
      } else {
        provider.wsUnsuccessfulReconnects++;
      }
      setTimeout(
        setupWS,
        min(
          pow(2, provider.wsUnsuccessfulReconnects) * 100,
          provider.maxBackoffTime
        ),
        provider
      );
    };
    websocket.onopen = () => {
      provider.wsLastMessageReceived = getUnixTime();
      provider.wsconnecting = false;
      provider.wsconnected = true;
      provider.wsUnsuccessfulReconnects = 0;
      provider.emit("status", [{
        status: "connected"
      }]);
      const encoder = createEncoder();
      writeVarUint(encoder, messageSync);
      writeSyncStep1(encoder, provider.doc);
      websocket.send(toUint8Array(encoder));
      if (provider.awareness.getLocalState() !== null) {
        const encoderAwarenessState = createEncoder();
        writeVarUint(encoderAwarenessState, messageAwareness);
        writeVarUint8Array(
          encoderAwarenessState,
          encodeAwarenessUpdate(provider.awareness, [
            provider.doc.clientID
          ])
        );
        websocket.send(toUint8Array(encoderAwarenessState));
      }
    };
    provider.emit("status", [{
      status: "connecting"
    }]);
  }
};
const broadcastMessage = (provider, buf) => {
  if (provider.wsconnected) {
    provider.ws.send(buf);
  }
  if (provider.bcconnected) {
    publish(provider.bcChannel, buf, provider);
  }
};
class WebsocketProvider extends Observable {
  /**
   * @param {string} serverUrl
   * @param {string} roomname
   * @param {Y.Doc} doc
   * @param {object} [opts]
   * @param {boolean} [opts.connect]
   * @param {awarenessProtocol.Awareness} [opts.awareness]
   * @param {Object<string,string>} [opts.params]
   * @param {typeof WebSocket} [opts.WebSocketPolyfill] Optionall provide a WebSocket polyfill
   * @param {number} [opts.resyncInterval] Request server state every `resyncInterval` milliseconds
   * @param {number} [opts.maxBackoffTime] Maximum amount of time to wait before trying to reconnect (we try to reconnect using exponential backoff)
   * @param {boolean} [opts.disableBc] Disable cross-tab BroadcastChannel communication
   */
  constructor(serverUrl, roomname, doc2, {
    connect = true,
    awareness = new Awareness(doc2),
    params: params2 = {},
    WebSocketPolyfill = WebSocket,
    resyncInterval = -1,
    maxBackoffTime = 2500,
    disableBc = false
  } = {}) {
    super();
    while (serverUrl[serverUrl.length - 1] === "/") {
      serverUrl = serverUrl.slice(0, serverUrl.length - 1);
    }
    const encodedParams = encodeQueryParams(params2);
    this.maxBackoffTime = maxBackoffTime;
    this.bcChannel = serverUrl + "/" + roomname;
    this.url = serverUrl + "/" + roomname + (encodedParams.length === 0 ? "" : "?" + encodedParams);
    this.roomname = roomname;
    this.doc = doc2;
    this._WS = WebSocketPolyfill;
    this.awareness = awareness;
    this.wsconnected = false;
    this.wsconnecting = false;
    this.bcconnected = false;
    this.disableBc = disableBc;
    this.wsUnsuccessfulReconnects = 0;
    this.messageHandlers = messageHandlers.slice();
    this._synced = false;
    this.ws = null;
    this.wsLastMessageReceived = 0;
    this.shouldConnect = connect;
    this._resyncInterval = 0;
    if (resyncInterval > 0) {
      this._resyncInterval = /** @type {any} */
      setInterval(() => {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
          const encoder = createEncoder();
          writeVarUint(encoder, messageSync);
          writeSyncStep1(encoder, doc2);
          this.ws.send(toUint8Array(encoder));
        }
      }, resyncInterval);
    }
    this._bcSubscriber = (data, origin) => {
      if (origin !== this) {
        const encoder = readMessage(this, new Uint8Array(data), false);
        if (length(encoder) > 1) {
          publish(this.bcChannel, toUint8Array(encoder), this);
        }
      }
    };
    this._updateHandler = (update, origin) => {
      if (origin !== this) {
        const encoder = createEncoder();
        writeVarUint(encoder, messageSync);
        writeUpdate(encoder, update);
        broadcastMessage(this, toUint8Array(encoder));
      }
    };
    this.doc.on("update", this._updateHandler);
    this._awarenessUpdateHandler = ({ added, updated, removed }, _origin) => {
      const changedClients = added.concat(updated).concat(removed);
      const encoder = createEncoder();
      writeVarUint(encoder, messageAwareness);
      writeVarUint8Array(
        encoder,
        encodeAwarenessUpdate(awareness, changedClients)
      );
      broadcastMessage(this, toUint8Array(encoder));
    };
    this._unloadHandler = () => {
      removeAwarenessStates(
        this.awareness,
        [doc2.clientID],
        "window unload"
      );
    };
    if (typeof window !== "undefined") {
      window.addEventListener("unload", this._unloadHandler);
    } else if (typeof process !== "undefined") {
      process.on("exit", this._unloadHandler);
    }
    awareness.on("update", this._awarenessUpdateHandler);
    this._checkInterval = /** @type {any} */
    setInterval(() => {
      if (this.wsconnected && messageReconnectTimeout < getUnixTime() - this.wsLastMessageReceived) {
        this.ws.close();
      }
    }, messageReconnectTimeout / 10);
    if (connect) {
      this.connect();
    }
  }
  /**
   * @type {boolean}
   */
  get synced() {
    return this._synced;
  }
  set synced(state) {
    if (this._synced !== state) {
      this._synced = state;
      this.emit("synced", [state]);
      this.emit("sync", [state]);
    }
  }
  destroy() {
    if (this._resyncInterval !== 0) {
      clearInterval(this._resyncInterval);
    }
    clearInterval(this._checkInterval);
    this.disconnect();
    if (typeof window !== "undefined") {
      window.removeEventListener("unload", this._unloadHandler);
    } else if (typeof process !== "undefined") {
      process.off("exit", this._unloadHandler);
    }
    this.awareness.off("update", this._awarenessUpdateHandler);
    this.doc.off("update", this._updateHandler);
    super.destroy();
  }
  connectBc() {
    if (this.disableBc) {
      return;
    }
    if (!this.bcconnected) {
      subscribe(this.bcChannel, this._bcSubscriber);
      this.bcconnected = true;
    }
    const encoderSync = createEncoder();
    writeVarUint(encoderSync, messageSync);
    writeSyncStep1(encoderSync, this.doc);
    publish(this.bcChannel, toUint8Array(encoderSync), this);
    const encoderState = createEncoder();
    writeVarUint(encoderState, messageSync);
    writeSyncStep2(encoderState, this.doc);
    publish(this.bcChannel, toUint8Array(encoderState), this);
    const encoderAwarenessQuery = createEncoder();
    writeVarUint(encoderAwarenessQuery, messageQueryAwareness);
    publish(
      this.bcChannel,
      toUint8Array(encoderAwarenessQuery),
      this
    );
    const encoderAwarenessState = createEncoder();
    writeVarUint(encoderAwarenessState, messageAwareness);
    writeVarUint8Array(
      encoderAwarenessState,
      encodeAwarenessUpdate(this.awareness, [
        this.doc.clientID
      ])
    );
    publish(
      this.bcChannel,
      toUint8Array(encoderAwarenessState),
      this
    );
  }
  disconnectBc() {
    const encoder = createEncoder();
    writeVarUint(encoder, messageAwareness);
    writeVarUint8Array(
      encoder,
      encodeAwarenessUpdate(this.awareness, [
        this.doc.clientID
      ], /* @__PURE__ */ new Map())
    );
    broadcastMessage(this, toUint8Array(encoder));
    if (this.bcconnected) {
      unsubscribe(this.bcChannel, this._bcSubscriber);
      this.bcconnected = false;
    }
  }
  disconnect() {
    this.shouldConnect = false;
    this.disconnectBc();
    if (this.ws !== null) {
      this.ws.close();
    }
  }
  connect() {
    this.shouldConnect = true;
    if (!this.wsconnected && this.ws === null) {
      setupWS(this);
      this.connectBc();
    }
  }
}
const Collab_svelte_svelte_type_style_lang = "";
function create_fragment$7(ctx) {
  let div;
  let textarea;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      textarea = element("textarea");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      textarea = claim_element(div_nodes, "TEXTAREA", {});
      children(textarea).forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      textarea.readOnly = true;
      attr(div, "class", "editor-container svelte-y14ac0");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, textarea);
      ctx[3](textarea);
      set_input_value(
        textarea,
        /*value*/
        ctx[0]
      );
      if (!mounted) {
        dispose = listen(
          textarea,
          "input",
          /*textarea_input_handler*/
          ctx[4]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*value*/
      1) {
        set_input_value(
          textarea,
          /*value*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[3](null);
      mounted = false;
      dispose();
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  const ydoc = new Doc();
  const provider = new WebsocketProvider("ws://10.12.0.226:8000/ws/chat", "lobby/", ydoc);
  const yText = ydoc.getText("codemirror");
  const yUndoManager = new UndoManager(yText);
  let { value } = $$props;
  let { lang } = $$props;
  let editor;
  let firstLoad = true;
  let theme;
  theme = "ayu-mirage";
  if (!firstLoad) {
    editor.setOption("theme", "ayu-dark");
  }
  let textArea;
  onMount(() => {
    editor = CodeMirror.fromTextArea(textArea, {
      lineWrapping: true,
      mode: lang,
      smartIndent: true,
      lineNumbers: true,
      theme,
      scrollbarStyle: "null"
    });
    editor.focus();
    editor.on("change", () => {
      $$invalidate(0, value = editor.getValue());
    });
    new CodemirrorBinding(yText, editor, provider.awareness, { yUndoManager });
    firstLoad = false;
    return () => {
      editor.toTextArea();
    };
  });
  function textarea_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      textArea = $$value;
      $$invalidate(1, textArea);
    });
  }
  function textarea_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("lang" in $$props2)
      $$invalidate(2, lang = $$props2.lang);
  };
  return [value, textArea, lang, textarea_binding, textarea_input_handler];
}
class Collab extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, { value: 0, lang: 2 });
  }
}
function create_fragment$6(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
const gatheringKey = {};
function instance$6($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  setContext(gatheringKey, true);
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class GatheringRound extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {});
  }
}
const browser = { "BASE_URL": "./", "MODE": "production", "DEV": false, "PROD": true } != null && false != null ? true : typeof window !== "undefined";
function pxToNumber(pxString) {
  if (!pxString.endsWith("px")) {
    return void 0;
  }
  const num = parseFloat(pxString.slice(0, pxString.length - 2));
  return isNaN(num) ? void 0 : num;
}
const getDimensionName = (horizontal) => horizontal ? "height" : "width";
const calcComputedStyle = (element2) => /* @__PURE__ */ window.getComputedStyle(element2);
const getElementRect = (element2) => /* @__PURE__ */ element2.getBoundingClientRect();
const getBordersSizeOffsets = (computedStyle, calcEnds = true) => {
  if (computedStyle.getPropertyValue("box-sizing") === "border-box") {
    return void 0;
  }
  const left = pxToNumber(computedStyle.getPropertyValue("border-left-width"));
  if (left === void 0) {
    console.error("Splitpanes Error: Fail to parse container `border-left-width`.");
    return void 0;
  }
  const top = pxToNumber(computedStyle.getPropertyValue("border-top-width"));
  if (top === void 0) {
    console.error("Splitpanes Error: Fail to parse container `border-top-width`.");
    return void 0;
  }
  const result = { left, top };
  if (calcEnds) {
    const right = pxToNumber(computedStyle.getPropertyValue("border-right-width"));
    if (right === void 0) {
      console.error("Splitpanes Error: Fail to parse container `border-right-width`.");
      return void 0;
    }
    const bottom = pxToNumber(computedStyle.getPropertyValue("border-bottom-width"));
    if (bottom === void 0) {
      console.error("Splitpanes Error: Fail to parse container `border-bottom-width`.");
      return void 0;
    }
    const resultExtended = result;
    resultExtended.right = right;
    resultExtended.bottom = bottom;
  }
  return result;
};
function elementRectWithoutBorder(element2, computedStyle) {
  if (!computedStyle) {
    computedStyle = calcComputedStyle(element2);
  }
  const rect = getElementRect(element2);
  const borderOffsets = getBordersSizeOffsets(computedStyle, true) || { left: 0, top: 0, right: 0, bottom: 0 };
  return {
    width: rect.width - borderOffsets.left - borderOffsets.right,
    height: rect.height - borderOffsets.top - borderOffsets.bottom,
    left: rect.left + borderOffsets.left,
    top: rect.top + borderOffsets.top
  };
}
const positionDiff = (to, from2) => ({
  left: to.left - from2.left,
  top: to.top - from2.top
});
function getGlobalMousePosition(event) {
  const eventMouse = event;
  const eventTouch = event;
  const { clientX, clientY } = "ontouchstart" in window && eventTouch.touches ? eventTouch.touches[0] : eventMouse;
  return { left: clientX, top: clientY };
}
function sumPartial(arr, start, end, valueFunction) {
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += valueFunction(arr[i], i);
  }
  return sum;
}
const Splitpanes_svelte_svelte_type_style_lang = "";
function create_if_block$5(ctx) {
  let gatheringround;
  let current;
  gatheringround = new GatheringRound({
    props: {
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(gatheringround.$$.fragment);
    },
    l(nodes) {
      claim_component(gatheringround.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(gatheringround, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const gatheringround_changes = {};
      if (dirty[0] & /*$$scope*/
      262144) {
        gatheringround_changes.$$scope = { dirty, ctx: ctx2 };
      }
      gatheringround.$set(gatheringround_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(gatheringround.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(gatheringround.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(gatheringround, detaching);
    }
  };
}
function create_default_slot$1(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[16].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[18],
    null
  );
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] & /*$$scope*/
        262144)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[18],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[18]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[18],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$5(ctx) {
  let div;
  let t;
  let div_class_value;
  let current;
  let if_block = !browser && create_if_block$5(ctx);
  const default_slot_template = (
    /*#slots*/
    ctx[16].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[18],
    null
  );
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true, class: true, style: true });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      t = claim_space(div_nodes);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        div,
        "id",
        /*id*/
        ctx[0]
      );
      attr(div, "class", div_class_value = `splitpanes ${/*theme*/
      ctx[3] || ""} ${/*clazz*/
      ctx[4] || ""}`);
      attr(
        div,
        "style",
        /*style*/
        ctx[2]
      );
      toggle_class(
        div,
        "splitpanes--horizontal",
        /*horizontal*/
        ctx[1]
      );
      toggle_class(div, "splitpanes--vertical", !/*horizontal*/
      ctx[1]);
      toggle_class(
        div,
        "splitpanes--dragging",
        /*isMouseDown*/
        ctx[7] || /*isDragging*/
        ctx[8]
      );
      toggle_class(div, "splitpanes--freeze", !/*isAfterInitialTimeoutZero*/
      ctx[6]);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      append_hydration(div, t);
      if (default_slot) {
        default_slot.m(div, null);
      }
      ctx[17](div);
      current = true;
    },
    p(ctx2, dirty) {
      if (!browser)
        if_block.p(ctx2, dirty);
      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] & /*$$scope*/
        262144)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[18],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[18]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[18],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty[0] & /*id*/
      1) {
        attr(
          div,
          "id",
          /*id*/
          ctx2[0]
        );
      }
      if (!current || dirty[0] & /*theme, clazz*/
      24 && div_class_value !== (div_class_value = `splitpanes ${/*theme*/
      ctx2[3] || ""} ${/*clazz*/
      ctx2[4] || ""}`)) {
        attr(div, "class", div_class_value);
      }
      if (!current || dirty[0] & /*style*/
      4) {
        attr(
          div,
          "style",
          /*style*/
          ctx2[2]
        );
      }
      if (!current || dirty[0] & /*theme, clazz, horizontal*/
      26) {
        toggle_class(
          div,
          "splitpanes--horizontal",
          /*horizontal*/
          ctx2[1]
        );
      }
      if (!current || dirty[0] & /*theme, clazz, horizontal*/
      26) {
        toggle_class(div, "splitpanes--vertical", !/*horizontal*/
        ctx2[1]);
      }
      if (!current || dirty[0] & /*theme, clazz, isMouseDown, isDragging*/
      408) {
        toggle_class(
          div,
          "splitpanes--dragging",
          /*isMouseDown*/
          ctx2[7] || /*isDragging*/
          ctx2[8]
        );
      }
      if (!current || dirty[0] & /*theme, clazz, isAfterInitialTimeoutZero*/
      88) {
        toggle_class(div, "splitpanes--freeze", !/*isAfterInitialTimeoutZero*/
        ctx2[6]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
      if (default_slot)
        default_slot.d(detaching);
      ctx[17](null);
    }
  };
}
const KEY = {};
function instance$5($$self, $$props, $$invalidate) {
  let $veryFirstPaneKey;
  let $showFirstSplitter;
  let $isHorizontal;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { id = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { pushOtherPanes = true } = $$props;
  let { dblClickSplitter = true } = $$props;
  let { rtl = "auto" } = $$props;
  let { firstSplitter = false } = $$props;
  let { style = null } = $$props;
  let { theme = "default-theme" } = $$props;
  let { class: clazz = "" } = $$props;
  const dispatch = createEventDispatcher();
  let container;
  let isReady = false;
  let isAwaitingPaneReset = false;
  let isAfterInitialTimeoutZero = false;
  let isMouseDown = false;
  let isDragging = false;
  let activeSplitter = -1;
  let clickedSplitter = -1;
  let timeoutId;
  let panes = new Array();
  let isHorizontal = writable(horizontal);
  component_subscribe($$self, isHorizontal, (value) => $$invalidate(31, $isHorizontal = value));
  const showFirstSplitter = writable(firstSplitter);
  component_subscribe($$self, showFirstSplitter, (value) => $$invalidate(30, $showFirstSplitter = value));
  const veryFirstPaneKey = writable(void 0);
  component_subscribe($$self, veryFirstPaneKey, (value) => $$invalidate(29, $veryFirstPaneKey = value));
  let activeSplitterElement = null;
  let activeSplitterDrag = null;
  let ssrPaneDefinedSizeSum = 0;
  let ssrPaneUndefinedSizeCount = 0;
  function ssrRegisterPaneSize(size) {
    if (size == null) {
      ++ssrPaneUndefinedSizeCount;
    } else {
      ssrPaneDefinedSizeSum += size;
    }
  }
  const onPaneInit = (key) => {
    if ($veryFirstPaneKey === void 0) {
      set_store_value(veryFirstPaneKey, $veryFirstPaneKey = key, $veryFirstPaneKey);
    }
    return {
      undefinedPaneInitSize: browser ? 0 : (100 - ssrPaneDefinedSizeSum) / ssrPaneUndefinedSizeCount
    };
  };
  setContext(KEY, {
    showFirstSplitter,
    veryFirstPaneKey,
    isHorizontal,
    ssrRegisterPaneSize: browser ? void 0 : ssrRegisterPaneSize,
    onPaneInit,
    clientOnly: browser ? { onPaneAdd, onPaneRemove } : void 0
  });
  function onPaneAdd(pane) {
    let index = -1;
    Array.from(pane.element.parentNode.children).some((el) => {
      if (el.className.includes("splitpanes__pane"))
        index++;
      return el === pane.element;
    });
    if (index === 0) {
      set_store_value(veryFirstPaneKey, $veryFirstPaneKey = pane.key, $veryFirstPaneKey);
    }
    panes.splice(index, 0, pane);
    for (let i = 0; i < panes.length; i++) {
      panes[i].index = i;
    }
    if (isReady) {
      tickAndResetPaneSizes().then(() => {
        pane.isReady = true;
        dispatch("pane-add", { index, panes: prepareSizeEvent() });
      });
    }
    const paneForward = (cb, includingFirst = true) => (value) => {
      if (includingFirst || pane.index > 0) {
        cb(value, pane);
      }
    };
    return {
      onSplitterDown: paneForward(onMouseDown, false),
      onSplitterClick: paneForward(onSplitterClick, false),
      onSplitterDblClick: paneForward(onSplitterDblClick),
      onPaneClick: paneForward(onPaneClick),
      reportGivenSizeChange: paneForward(reportGivenSizeChange)
    };
  }
  async function onPaneRemove(key) {
    const index = panes.findIndex((p) => p.key === key);
    if (index >= 0) {
      const removed = panes.splice(index, 1)[0];
      for (let i = 0; i < panes.length; i++) {
        panes[i].index = i;
      }
      if (index === 0) {
        set_store_value(veryFirstPaneKey, $veryFirstPaneKey = panes.length > 0 ? panes[0].key : void 0, $veryFirstPaneKey);
      }
      if (isReady) {
        await tickAndResetPaneSizes();
        dispatch("pane-remove", { removed, panes: prepareSizeEvent() });
      }
    }
  }
  function onPaneClick(_event, pane) {
    dispatch("pane-click", pane);
  }
  function reportGivenSizeChange(newGivenSize, pane) {
    pane.setSz(newGivenSize);
    tickAndResetPaneSizes();
  }
  onMount(() => {
    verifyAndUpdatePanesOrder();
    resetPaneSizes();
    for (let i = 0; i < panes.length; i++) {
      panes[i].isReady = true;
    }
    isReady = true;
    dispatch("ready");
    setTimeout(
      () => {
        $$invalidate(6, isAfterInitialTimeoutZero = true);
      },
      0
    );
  });
  if (browser) {
    onDestroy(() => {
      if (isReady) {
        unbindEvents();
      }
      isReady = false;
    });
  }
  afterUpdate(() => {
    verifyAndUpdatePanesOrder();
  });
  function isRTL(containerComputedStyle) {
    if (rtl === "auto") {
      try {
        return (containerComputedStyle ?? calcComputedStyle(container)).direction === "rtl";
      } catch (err) {
      }
    }
    return rtl === true;
  }
  function bindEvents() {
    document.body.style.cursor = isHorizontal ? "col-resize" : "row-resize";
    document.addEventListener("mousemove", onMouseMove, { passive: false });
    document.addEventListener("mouseup", onMouseUp);
    if ("ontouchstart" in window) {
      document.addEventListener("touchmove", onMouseMove, { passive: false });
      document.addEventListener("touchend", onMouseUp);
    }
  }
  function unbindEvents() {
    document.body.style.cursor = "";
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    if ("ontouchstart" in window) {
      document.removeEventListener("touchmove", onMouseMove);
      document.removeEventListener("touchend", onMouseUp);
    }
  }
  const isSplitterElement = (node) => node.nodeType === Node.ELEMENT_NODE && node.classList.contains("splitpanes__splitter");
  function getOrientedDiff(drag, elementSize, isRTL2) {
    let tdrag = drag[horizontal ? "top" : "left"];
    if (isRTL2 && !horizontal)
      tdrag = elementSize - tdrag;
    return tdrag;
  }
  const getCurrentDimensionName = () => getDimensionName(horizontal);
  function onMouseDown(event, splitterPane) {
    $$invalidate(7, isMouseDown = true);
    activeSplitter = splitterPane.index;
    splitterPane.setSplitterActive(true);
    const paneElement = splitterPane.element;
    let activeSplitterNode = paneElement;
    while (activeSplitterNode != null) {
      activeSplitterNode = activeSplitterNode.previousSibling;
      if (isSplitterElement(activeSplitterNode)) {
        break;
      }
    }
    if (activeSplitterNode == null) {
      console.error("Splitpane Error: Active splitter wasn't found!");
      return;
    }
    activeSplitterElement = activeSplitterNode;
    const globalMousePosition = getGlobalMousePosition(event);
    const splitterRect = getElementRect(activeSplitterElement);
    activeSplitterDrag = getOrientedDiff(positionDiff(globalMousePosition, splitterRect), splitterRect[getCurrentDimensionName()], isRTL());
    bindEvents();
  }
  function onMouseMove(event) {
    if (isMouseDown) {
      event.preventDefault();
      $$invalidate(8, isDragging = true);
      const globalMousePosition = getGlobalMousePosition(event);
      const containerComputedStyle = calcComputedStyle(container);
      const containerRectWithoutBorder = elementRectWithoutBorder(container, containerComputedStyle);
      const containerSizeWithoutBorder = containerRectWithoutBorder[getCurrentDimensionName()];
      const _isRTL = isRTL(containerComputedStyle);
      const currentMouseDrag = positionDiff(globalMousePosition, containerRectWithoutBorder);
      const tdrag = getOrientedDiff(currentMouseDrag, containerSizeWithoutBorder, _isRTL);
      calculatePanesSize(tdrag, containerSizeWithoutBorder);
      dispatch("resize", prepareSizeEvent());
    }
  }
  function onMouseUp() {
    if (isDragging) {
      dispatch("resized", prepareSizeEvent());
    }
    $$invalidate(7, isMouseDown = false);
    const pane = panes[activeSplitter];
    pane.setSplitterActive(false);
    setTimeout(
      () => {
        $$invalidate(8, isDragging = false);
        unbindEvents();
      },
      100
    );
  }
  function onSplitterClick(event, splitterPane) {
    if ("ontouchstart" in window) {
      event.preventDefault();
      const splitterIndex = splitterPane.index;
      if (dblClickSplitter) {
        if (clickedSplitter === splitterIndex) {
          if (timeoutId)
            clearTimeout(timeoutId);
          timeoutId = null;
          onSplitterDblClick(event, splitterPane);
          clickedSplitter = -1;
        } else {
          clickedSplitter = splitterIndex;
          timeoutId = setTimeout(
            () => {
              clickedSplitter = -1;
            },
            500
          );
        }
      }
    }
    if (!isDragging)
      dispatch("splitter-click", splitterPane);
  }
  function onSplitterDblClick(_event, splitterPane) {
    const splitterIndex = splitterPane.index;
    let totalMinSizes = 0;
    for (let i = 0; i < panes.length; i++) {
      const pane = panes[i];
      if (i !== splitterIndex) {
        totalMinSizes += pane.min();
      }
    }
    const maxExtendedSize = Math.min(Math.max(0, 100 - totalMinSizes), splitterPane.max());
    const totalMaxExtendedPlusMinSizes = totalMinSizes + maxExtendedSize;
    if (totalMaxExtendedPlusMinSizes >= 100) {
      for (let i = 0; i < panes.length; i++) {
        const pane = panes[i];
        if (pane !== splitterPane) {
          pane.setSz(pane.min());
        } else {
          pane.setSz(100 - totalMinSizes);
        }
      }
    } else {
      let leftSpare = 100 - totalMaxExtendedPlusMinSizes;
      splitterPane.setSz(maxExtendedSize);
      const giveBest = (pane) => {
        const min2 = pane.min();
        const max2 = pane.max();
        const szExtra = Math.min(Math.max(0, leftSpare), max2 - min2);
        pane.setSz(min2 + szExtra);
        leftSpare -= szExtra;
      };
      for (let i = splitterIndex - 1; i >= 0; i--)
        giveBest(panes[i]);
      for (let i = splitterIndex + 1; i < panes.length; i++)
        giveBest(panes[i]);
      if (leftSpare != 0) {
        console.warn("Splitpanes: there is a left spare size after computation of splitter double click, which means there are issues on the size constains of the panes.");
      }
    }
    dispatch("pane-maximize", splitterPane);
    dispatch("resized", prepareSizeEvent());
    $$invalidate(7, isMouseDown = false);
  }
  function prepareSizeEvent() {
    const arr = new Array(panes.length);
    for (let i = 0; i < panes.length; i++) {
      const pane = panes[i];
      arr[i] = {
        min: pane.min(),
        max: pane.max(),
        size: pane.sz(),
        snap: pane.snap()
      };
    }
    return arr;
  }
  function getCurrentDragPercentage(tdrag, containerSizeWithoutBorder) {
    const splitterSize = (node) => getElementRect(node)[getCurrentDimensionName()];
    const activeSplitterSize = splitterSize(activeSplitterElement);
    let splittersTotalSizeBefore = 0;
    let currentBeforeNode = activeSplitterElement.previousSibling;
    while (currentBeforeNode != null) {
      if (isSplitterElement(currentBeforeNode)) {
        splittersTotalSizeBefore += splitterSize(currentBeforeNode);
      }
      currentBeforeNode = currentBeforeNode.previousSibling;
    }
    let splittersTotalSizeAfter = 0;
    let currentAfterNode = activeSplitterElement.nextSibling;
    while (currentAfterNode != null) {
      if (isSplitterElement(currentAfterNode)) {
        splittersTotalSizeAfter += splitterSize(currentAfterNode);
      }
      currentAfterNode = currentAfterNode.nextSibling;
    }
    const totalSplitterBefore = splittersTotalSizeBefore + activeSplitterDrag;
    const totalSplitter = splittersTotalSizeBefore + activeSplitterSize + splittersTotalSizeAfter;
    return (tdrag - totalSplitterBefore) / (containerSizeWithoutBorder - totalSplitter) * 100;
  }
  function calculatePanesSize(tdrag, containerSizeWithoutBorder) {
    let paneBeforeIndex = activeSplitter - 1;
    let paneBefore = panes[paneBeforeIndex];
    let paneAfterIndex = activeSplitter;
    let paneAfter = panes[paneAfterIndex];
    let sums = {
      prevPanesSize: sumPrevPanesSize(paneBeforeIndex),
      nextPanesSize: sumNextPanesSize(paneAfterIndex),
      prevReachedMinPanes: 0,
      nextReachedMinPanes: 0
    };
    const minDrag = 0 + (pushOtherPanes ? 0 : sums.prevPanesSize);
    const maxDrag = 100 - (pushOtherPanes ? 0 : sums.nextPanesSize);
    const mouseDragPercentage = Math.max(Math.min(getCurrentDragPercentage(tdrag, containerSizeWithoutBorder), maxDrag), minDrag);
    const paneBeforeSnap = sums.prevPanesSize + paneBefore.min() + paneBefore.snap();
    const paneAfterSnap = 100 - (sums.nextPanesSize + paneAfter.min() + paneAfter.snap());
    let dragPercentage = mouseDragPercentage;
    let snapped = false;
    if (mouseDragPercentage <= paneBeforeSnap) {
      if (mouseDragPercentage > sums.prevPanesSize + paneBefore.min()) {
        dragPercentage = Math.max(paneBefore.min() + sums.prevPanesSize, 100 - (paneAfter.max() + sums.nextPanesSize));
        snapped = true;
      }
    } else if (mouseDragPercentage >= paneAfterSnap) {
      if (mouseDragPercentage < 100 - sums.nextPanesSize - paneAfter.min()) {
        dragPercentage = Math.min(100 - (paneAfter.min() + sums.nextPanesSize), paneBefore.max() + sums.prevPanesSize);
        snapped = true;
      }
    }
    const paneBeforeMaxReached = paneBefore.max() < 100 && dragPercentage >= paneBefore.max() + sums.prevPanesSize;
    const paneAfterMaxReached = paneAfter.max() < 100 && dragPercentage <= 100 - (paneAfter.max() + sums.nextPanesSize);
    if (paneBeforeMaxReached || paneAfterMaxReached) {
      if (paneBeforeMaxReached) {
        paneBefore.setSz(paneBefore.max());
        paneAfter.setSz(Math.max(100 - paneBefore.max() - sums.prevPanesSize - sums.nextPanesSize, 0));
      } else {
        paneBefore.setSz(Math.max(100 - paneAfter.max() - sums.prevPanesSize - sums.nextPanesSize, 0));
        paneAfter.setSz(paneAfter.max());
      }
    } else {
      if (pushOtherPanes && !snapped) {
        const vars = doPushOtherPanes(sums, dragPercentage);
        if (!vars) {
          return;
        }
        ({ sums, paneBeforeIndex, paneAfterIndex } = vars);
        paneBefore = panes[paneBeforeIndex];
        paneAfter = panes[paneAfterIndex];
      }
      if (paneBeforeIndex != null) {
        paneBefore.setSz(Math.min(Math.max(dragPercentage - sums.prevPanesSize - sums.prevReachedMinPanes, paneBefore.min()), paneBefore.max()));
      }
      if (paneAfterIndex != null) {
        paneAfter.setSz(Math.min(Math.max(100 - dragPercentage - sums.nextPanesSize - sums.nextReachedMinPanes, paneAfter.min()), paneAfter.max()));
      }
    }
  }
  function doPushOtherPanes(sums, dragPercentage) {
    var _a, _b;
    const splitterIndex = activeSplitter - 1;
    let paneBeforeIndex = splitterIndex;
    let paneAfterIndex = splitterIndex + 1;
    if (dragPercentage < sums.prevPanesSize + panes[paneBeforeIndex].min()) {
      paneBeforeIndex = (_a = findPrevExpandedPane(splitterIndex)) == null ? void 0 : _a.index;
      sums.prevReachedMinPanes = 0;
      if (paneBeforeIndex < splitterIndex) {
        for (let i = 0; i < panes.length; i++) {
          const pane = panes[i];
          if (i > paneBeforeIndex && i <= splitterIndex) {
            pane.setSz(pane.min());
            sums.prevReachedMinPanes += pane.min();
          }
        }
      }
      sums.prevPanesSize = sumPrevPanesSize(paneBeforeIndex);
      if (paneBeforeIndex == null) {
        sums.prevReachedMinPanes = 0;
        panes[0].setSz(panes[0].min());
        for (let i = 0; i < panes.length; i++) {
          const pane = panes[i];
          if (i > 0 && i <= splitterIndex) {
            pane.setSz(pane.min());
            sums.prevReachedMinPanes += pane.min();
          }
        }
        panes[paneAfterIndex].setSz(100 - sums.prevReachedMinPanes - panes[0].min() - sums.prevPanesSize - sums.nextPanesSize);
        return null;
      }
    }
    if (dragPercentage > 100 - sums.nextPanesSize - panes[paneAfterIndex].min()) {
      paneAfterIndex = (_b = findNextExpandedPane(splitterIndex)) == null ? void 0 : _b.index;
      sums.nextReachedMinPanes = 0;
      if (paneAfterIndex > splitterIndex + 1) {
        for (let i = 0; i < panes.length; i++) {
          const pane = panes[i];
          if (i > splitterIndex && i < paneAfterIndex) {
            pane.setSz(pane.min());
            sums.nextReachedMinPanes += pane.min();
          }
        }
      }
      sums.nextPanesSize = sumNextPanesSize(paneAfterIndex);
      const panesCount = panes.length;
      if (paneAfterIndex == null) {
        sums.nextReachedMinPanes = 0;
        panes[panesCount - 1].setSz(panes[panesCount - 1].min());
        for (let i = 0; i < panes.length; i++) {
          const pane = panes[i];
          if (i < panesCount - 1 && i >= splitterIndex + 1) {
            pane.setSz(pane.min());
            sums.nextReachedMinPanes += pane.min();
          }
        }
        panes[paneBeforeIndex].setSz(100 - sums.prevPanesSize - sums.nextReachedMinPanes - panes[panesCount - 1].min() - sums.nextPanesSize);
        return null;
      }
    }
    return { sums, paneBeforeIndex, paneAfterIndex };
  }
  const getSizeOfPane = (pane) => pane.sz();
  const sumPrevPanesSize = (splitterIndex) => sumPartial(panes, 0, splitterIndex, getSizeOfPane);
  const sumNextPanesSize = (splitterIndex) => sumPartial(panes, splitterIndex + 1, panes.length, getSizeOfPane);
  const findPrevExpandedPane = (splitterIndex) => [...panes].reverse().find((p) => p.index < splitterIndex && p.sz() > p.min());
  const findNextExpandedPane = (splitterIndex) => panes.find((p) => p.index > splitterIndex + 1 && p.sz() > p.min());
  async function tickAndResetPaneSizes() {
    isAwaitingPaneReset = true;
    await tick();
    if (isAwaitingPaneReset) {
      resetPaneSizes();
      isAwaitingPaneReset = false;
    }
  }
  function resetPaneSizes() {
    equalize();
    if (isReady)
      dispatch("resized", prepareSizeEvent());
  }
  function equalize() {
    if (panes.length === 0) {
      return;
    }
    const panesCount = panes.length;
    let leftToAllocate = 100;
    let definedSizesCount = 0;
    let undefinedSizesNotReadyCount = 0;
    let undefinedSizesSum = 0;
    let ungrowable = [];
    let unshrinkable = [];
    for (let i = 0; i < panesCount; i++) {
      const pane = panes[i];
      const sz = pane.sz();
      if (pane.givenSize == null) {
        if (pane.isReady) {
          undefinedSizesSum += sz;
          if (sz >= pane.max())
            ungrowable.push(pane);
          if (sz <= pane.min())
            unshrinkable.push(pane);
        } else {
          undefinedSizesNotReadyCount += 1;
        }
      } else {
        leftToAllocate -= sz;
        definedSizesCount++;
        ungrowable.push(pane);
        unshrinkable.push(pane);
      }
    }
    const undefinedSizesCount = panesCount - definedSizesCount;
    const undefinedSizesReadyCount = undefinedSizesCount - undefinedSizesNotReadyCount;
    let undefinedSizesNotReadySz;
    let undefinedScaleFactor;
    if (undefinedSizesReadyCount > 0) {
      undefinedSizesNotReadySz = undefinedSizesSum / undefinedSizesReadyCount;
      if (undefinedSizesNotReadySz > 0.1 && leftToAllocate > 0.1) {
        undefinedSizesSum += undefinedSizesNotReadyCount * undefinedSizesNotReadySz;
        undefinedScaleFactor = leftToAllocate / undefinedSizesSum;
      } else {
        undefinedSizesNotReadySz = 0;
        undefinedScaleFactor = 1;
      }
    } else {
      undefinedSizesNotReadySz = leftToAllocate / undefinedSizesCount;
      undefinedScaleFactor = 1;
    }
    if (leftToAllocate + undefinedSizesSum > 0.1) {
      leftToAllocate = 100;
      for (let i = 0; i < panesCount; i++) {
        const pane = panes[i];
        if (pane.givenSize == null) {
          const currentSz = pane.isReady ? pane.sz() : undefinedSizesNotReadySz;
          const sz = Math.max(Math.min(currentSz * undefinedScaleFactor, pane.max()), pane.min());
          pane.setSz(sz);
        }
        leftToAllocate -= pane.sz();
      }
      if (Math.abs(leftToAllocate) > 0.1) {
        leftToAllocate = readjustSizes(leftToAllocate, ungrowable, unshrinkable);
      }
    }
    if (!isFinite(leftToAllocate)) {
      console.warn("Splitpanes: Internal error, sizes might be NaN as a result.");
    } else if (Math.abs(leftToAllocate) > 0.1) {
      console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }
  }
  function readjustSizes(leftToAllocate, ungrowable, unshrinkable) {
    const panesCount = panes.length;
    const panesSizableCount = panesCount - (leftToAllocate > 0 ? ungrowable.length : unshrinkable.length);
    if (panesSizableCount <= 0) {
      return leftToAllocate;
    }
    const equalSpaceToAllocate = leftToAllocate / panesSizableCount;
    if (panes.length === 1) {
      panes[0].setSz(100);
      leftToAllocate = 0;
    } else
      for (let i = 0; i < panes.length; i++) {
        const pane = panes[i];
        const sz = pane.sz();
        if (leftToAllocate > 0 && !ungrowable.includes(pane)) {
          const newPaneSize = Math.max(Math.min(sz + equalSpaceToAllocate, pane.max()), pane.min());
          const allocated = newPaneSize - sz;
          leftToAllocate -= allocated;
          pane.setSz(newPaneSize);
        } else if (!unshrinkable.includes(pane)) {
          const newPaneSize = Math.max(Math.min(sz + equalSpaceToAllocate, pane.max()), pane.min());
          const allocated = newPaneSize - sz;
          leftToAllocate -= allocated;
          pane.setSz(newPaneSize);
        }
      }
    return leftToAllocate;
  }
  function verifyAndUpdatePanesOrder() {
    var _a;
    const { children: children2 } = container;
    let currentPaneIndex = 0;
    let needReorder = false;
    for (let i = 0; i < children2.length; i++) {
      const child = children2.item(i);
      const isPane = child.classList.contains("splitpanes__pane");
      const isSplitter = child.classList.contains("splitpanes__splitter");
      if (!isPane && !isSplitter) {
        (_a = child.parentNode) == null ? void 0 : _a.removeChild(child);
        console.warn("Splitpanes: Only <Pane> elements are allowed at the root of <Splitpanes>. One of your DOM nodes was removed.");
        return;
      } else if (isPane) {
        if (!needReorder && panes[currentPaneIndex].element !== child) {
          needReorder = true;
        }
        currentPaneIndex++;
      }
    }
    if (needReorder) {
      const newPanes = [];
      for (let i = 0; i < children2.length; i++) {
        const child = children2.item(i);
        const isPane = child.classList.contains("splitpanes__pane");
        if (isPane) {
          const pane = panes.find((pane2) => pane2.element === child);
          if (pane != null) {
            pane.index = newPanes.length;
            newPanes.push(pane);
          } else {
            console.warn("Splitpanes: Internal error - found a <Pane> elements which isn't tracked.");
          }
        }
      }
      panes = newPanes;
      set_store_value(veryFirstPaneKey, $veryFirstPaneKey = panes.length > 0 ? panes[0].key : void 0, $veryFirstPaneKey);
    }
  }
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      container = $$value;
      $$invalidate(5, container);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("id" in $$props2)
      $$invalidate(0, id = $$props2.id);
    if ("horizontal" in $$props2)
      $$invalidate(1, horizontal = $$props2.horizontal);
    if ("pushOtherPanes" in $$props2)
      $$invalidate(12, pushOtherPanes = $$props2.pushOtherPanes);
    if ("dblClickSplitter" in $$props2)
      $$invalidate(13, dblClickSplitter = $$props2.dblClickSplitter);
    if ("rtl" in $$props2)
      $$invalidate(14, rtl = $$props2.rtl);
    if ("firstSplitter" in $$props2)
      $$invalidate(15, firstSplitter = $$props2.firstSplitter);
    if ("style" in $$props2)
      $$invalidate(2, style = $$props2.style);
    if ("theme" in $$props2)
      $$invalidate(3, theme = $$props2.theme);
    if ("class" in $$props2)
      $$invalidate(4, clazz = $$props2.class);
    if ("$$scope" in $$props2)
      $$invalidate(18, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*horizontal*/
    2) {
      set_store_value(isHorizontal, $isHorizontal = horizontal, $isHorizontal);
    }
    if ($$self.$$.dirty[0] & /*firstSplitter*/
    32768) {
      set_store_value(showFirstSplitter, $showFirstSplitter = firstSplitter, $showFirstSplitter);
    }
  };
  return [
    id,
    horizontal,
    style,
    theme,
    clazz,
    container,
    isAfterInitialTimeoutZero,
    isMouseDown,
    isDragging,
    isHorizontal,
    showFirstSplitter,
    veryFirstPaneKey,
    pushOtherPanes,
    dblClickSplitter,
    rtl,
    firstSplitter,
    slots,
    div_binding,
    $$scope
  ];
}
class Splitpanes extends SvelteComponent {
  constructor(options) {
    super();
    init(
      this,
      options,
      instance$5,
      create_fragment$5,
      safe_not_equal,
      {
        id: 0,
        horizontal: 1,
        pushOtherPanes: 12,
        dblClickSplitter: 13,
        rtl: 14,
        firstSplitter: 15,
        style: 2,
        theme: 3,
        class: 4
      },
      null,
      [-1, -1, -1]
    );
  }
}
const carefullCallbackGenerator = (callbackObjectGetter, callbackName) => (value) => {
  const callbackObject = callbackObjectGetter();
  if (callbackObject != null) {
    callbackObject[callbackName](value);
  }
};
const carefullCallbackObject = (callbackObjectGetter, callbackNames) => Object.fromEntries(callbackNames.map((cb) => [cb, carefullCallbackGenerator(callbackObjectGetter, cb)]));
function create_if_block$4(ctx) {
  let t;
  let div;
  let div_class_value;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*$veryFirstPaneKey*/
    (ctx[4] !== /*key*/
    ctx[9] || /*$showFirstSplitter*/
    ctx[5]) && create_if_block_1$2(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[21].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[20],
    null
  );
  return {
    c() {
      if (if_block)
        if_block.c();
      t = space();
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      t = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true, style: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = `splitpanes__pane ${/*clazz*/
      ctx[0] || ""}`);
      attr(
        div,
        "style",
        /*style*/
        ctx[3]
      );
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, t, anchor);
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      ctx[22](div);
      current = true;
      if (!mounted) {
        dispose = listen(
          div,
          "click",
          /*carefullClientCallbacks*/
          ctx[11].onPaneClick
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (
        /*$veryFirstPaneKey*/
        ctx2[4] !== /*key*/
        ctx2[9] || /*$showFirstSplitter*/
        ctx2[5]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1$2(ctx2);
          if_block.c();
          if_block.m(t.parentNode, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1048576)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[20],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[20]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[20],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*clazz*/
      1 && div_class_value !== (div_class_value = `splitpanes__pane ${/*clazz*/
      ctx2[0] || ""}`)) {
        attr(div, "class", div_class_value);
      }
      if (!current || dirty & /*style*/
      8) {
        attr(
          div,
          "style",
          /*style*/
          ctx2[3]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t);
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
      ctx[22](null);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_1$2(ctx) {
  let div;
  let div_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = "splitpanes__splitter " + /*isSplitterActive*/
      (ctx[2] ? "splitpanes__splitter__active" : ""));
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (!mounted) {
        dispose = action_destroyer(
          /*splitterAction*/
          ctx[12].call(null, div)
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*isSplitterActive*/
      4 && div_class_value !== (div_class_value = "splitpanes__splitter " + /*isSplitterActive*/
      (ctx2[2] ? "splitpanes__splitter__active" : ""))) {
        attr(div, "class", div_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$4(ctx) {
  let if_block_anchor;
  let current;
  let if_block = !/*gathering*/
  ctx[10] && create_if_block$4(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!/*gathering*/
      ctx2[10])
        if_block.p(ctx2, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let dimension;
  let style;
  let $isHorizontal;
  let $veryFirstPaneKey;
  let $showFirstSplitter;
  let { $$slots: slots = {}, $$scope } = $$props;
  const { ssrRegisterPaneSize, onPaneInit, clientOnly: clientOnlyContext, isHorizontal, showFirstSplitter, veryFirstPaneKey } = getContext(KEY);
  component_subscribe($$self, isHorizontal, (value) => $$invalidate(19, $isHorizontal = value));
  component_subscribe($$self, showFirstSplitter, (value) => $$invalidate(5, $showFirstSplitter = value));
  component_subscribe($$self, veryFirstPaneKey, (value) => $$invalidate(4, $veryFirstPaneKey = value));
  let { size = null } = $$props;
  let { minSize = 0 } = $$props;
  let { maxSize = 100 } = $$props;
  let { snapSize = 0 } = $$props;
  let { class: clazz = "" } = $$props;
  const key = {};
  const gathering = !browser && hasContext(gatheringKey);
  const { undefinedPaneInitSize } = !gathering ? onPaneInit(key) : {};
  let element2;
  let sz = size ?? undefinedPaneInitSize;
  let isSplitterActive = false;
  let clientCallbacks = void 0;
  const carefullClientCallbacks = browser ? carefullCallbackObject(() => clientCallbacks, [
    "onSplitterDown",
    "onSplitterClick",
    "onSplitterDblClick",
    "onPaneClick",
    "reportGivenSizeChange"
  ]) : void 0;
  const reportGivenSizeChangeSafe = (size2) => {
    if (size2 != sz) {
      carefullClientCallbacks.reportGivenSizeChange(size2);
    }
  };
  const splitterAction = (splitter) => {
    splitter.onmousedown = carefullClientCallbacks.onSplitterDown;
    if ("ontouchstart" in window) {
      splitter.ontouchstart = carefullClientCallbacks.onSplitterDown;
    }
    splitter.onclick = carefullClientCallbacks.onSplitterClick;
    splitter.ondblclick = carefullClientCallbacks.onSplitterDblClick;
  };
  if (gathering) {
    ssrRegisterPaneSize(size);
  } else if (browser) {
    onMount(() => {
      const inst = {
        key,
        element: element2,
        givenSize: size,
        sz: () => sz,
        setSz: (v) => {
          $$invalidate(17, sz = v);
          if (size != null && size != sz) {
            $$invalidate(13, size = sz);
          }
        },
        min: () => minSize,
        max: () => maxSize,
        snap: () => snapSize,
        setSplitterActive: (isActive) => {
          $$invalidate(2, isSplitterActive = isActive);
        },
        isReady: false
      };
      clientCallbacks = clientOnlyContext.onPaneAdd(inst);
    });
    onDestroy(() => {
      clientOnlyContext.onPaneRemove(key);
    });
  }
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(1, element2);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("size" in $$props2)
      $$invalidate(13, size = $$props2.size);
    if ("minSize" in $$props2)
      $$invalidate(14, minSize = $$props2.minSize);
    if ("maxSize" in $$props2)
      $$invalidate(15, maxSize = $$props2.maxSize);
    if ("snapSize" in $$props2)
      $$invalidate(16, snapSize = $$props2.snapSize);
    if ("class" in $$props2)
      $$invalidate(0, clazz = $$props2.class);
    if ("$$scope" in $$props2)
      $$invalidate(20, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*size*/
    8192) {
      {
        if (browser && size != null) {
          reportGivenSizeChangeSafe(size);
        }
      }
    }
    if ($$self.$$.dirty & /*$isHorizontal*/
    524288) {
      $$invalidate(18, dimension = getDimensionName($isHorizontal));
    }
    if ($$self.$$.dirty & /*dimension, sz*/
    393216) {
      $$invalidate(3, style = `${dimension}: ${sz}%;`);
    }
  };
  return [
    clazz,
    element2,
    isSplitterActive,
    style,
    $veryFirstPaneKey,
    $showFirstSplitter,
    isHorizontal,
    showFirstSplitter,
    veryFirstPaneKey,
    key,
    gathering,
    carefullClientCallbacks,
    splitterAction,
    size,
    minSize,
    maxSize,
    snapSize,
    sz,
    dimension,
    $isHorizontal,
    $$scope,
    slots,
    div_binding
  ];
}
class Pane extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
      size: 13,
      minSize: 14,
      maxSize: 15,
      snapSize: 16,
      class: 0
    });
  }
}
const Sidebar_svelte_svelte_type_style_lang = "";
function create_else_block$2(ctx) {
  let div;
  let collab;
  let updating_value;
  let current;
  function collab_value_binding(value) {
    ctx[10](value);
  }
  let collab_props = { lang: "python" };
  if (
    /*$code*/
    ctx[5] !== void 0
  ) {
    collab_props.value = /*$code*/
    ctx[5];
  }
  collab = new Collab({ props: collab_props });
  binding_callbacks.push(() => bind(collab, "value", collab_value_binding));
  return {
    c() {
      div = element("div");
      create_component(collab.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(collab.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "w-full ide__splitter");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(collab, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const collab_changes = {};
      if (!updating_value && dirty & /*$code*/
      32) {
        updating_value = true;
        collab_changes.value = /*$code*/
        ctx2[5];
        add_flush_callback(() => updating_value = false);
      }
      collab.$set(collab_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(collab.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(collab.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(collab);
    }
  };
}
function create_if_block$3(ctx) {
  let splitpanes;
  let current;
  splitpanes = new Splitpanes({
    props: {
      horizontal: true,
      theme: "own",
      firstSplitter: true,
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(splitpanes.$$.fragment);
    },
    l(nodes) {
      claim_component(splitpanes.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(splitpanes, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const splitpanes_changes = {};
      if (dirty & /*$$scope, $css, $js, $html*/
      8220) {
        splitpanes_changes.$$scope = { dirty, ctx: ctx2 };
      }
      splitpanes.$set(splitpanes_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(splitpanes.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(splitpanes.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(splitpanes, detaching);
    }
  };
}
function create_default_slot_3(ctx) {
  let editor;
  let updating_value;
  let current;
  function editor_value_binding(value) {
    ctx[7](value);
  }
  let editor_props = { lang: "xml" };
  if (
    /*$html*/
    ctx[2] !== void 0
  ) {
    editor_props.value = /*$html*/
    ctx[2];
  }
  editor = new Editor({ props: editor_props });
  binding_callbacks.push(() => bind(editor, "value", editor_value_binding));
  return {
    c() {
      create_component(editor.$$.fragment);
    },
    l(nodes) {
      claim_component(editor.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(editor, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const editor_changes = {};
      if (!updating_value && dirty & /*$html*/
      4) {
        updating_value = true;
        editor_changes.value = /*$html*/
        ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      editor.$set(editor_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(editor.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(editor.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(editor, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let editor;
  let updating_value;
  let current;
  function editor_value_binding_1(value) {
    ctx[8](value);
  }
  let editor_props = { lang: "javascript" };
  if (
    /*$js*/
    ctx[3] !== void 0
  ) {
    editor_props.value = /*$js*/
    ctx[3];
  }
  editor = new Editor({ props: editor_props });
  binding_callbacks.push(() => bind(editor, "value", editor_value_binding_1));
  return {
    c() {
      create_component(editor.$$.fragment);
    },
    l(nodes) {
      claim_component(editor.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(editor, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const editor_changes = {};
      if (!updating_value && dirty & /*$js*/
      8) {
        updating_value = true;
        editor_changes.value = /*$js*/
        ctx2[3];
        add_flush_callback(() => updating_value = false);
      }
      editor.$set(editor_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(editor.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(editor.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(editor, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let editor;
  let updating_value;
  let current;
  function editor_value_binding_2(value) {
    ctx[9](value);
  }
  let editor_props = { lang: "css" };
  if (
    /*$css*/
    ctx[4] !== void 0
  ) {
    editor_props.value = /*$css*/
    ctx[4];
  }
  editor = new Editor({ props: editor_props });
  binding_callbacks.push(() => bind(editor, "value", editor_value_binding_2));
  return {
    c() {
      create_component(editor.$$.fragment);
    },
    l(nodes) {
      claim_component(editor.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(editor, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const editor_changes = {};
      if (!updating_value && dirty & /*$css*/
      16) {
        updating_value = true;
        editor_changes.value = /*$css*/
        ctx2[4];
        add_flush_callback(() => updating_value = false);
      }
      editor.$set(editor_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(editor.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(editor.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(editor, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let pane0;
  let t0;
  let pane1;
  let t1;
  let pane2;
  let current;
  pane0 = new Pane({
    props: {
      maxSize: 100,
      class: "html-pane",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  pane1 = new Pane({
    props: {
      maxSize: 100,
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  pane2 = new Pane({
    props: {
      maxSize: 100,
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(pane0.$$.fragment);
      t0 = space();
      create_component(pane1.$$.fragment);
      t1 = space();
      create_component(pane2.$$.fragment);
    },
    l(nodes) {
      claim_component(pane0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(pane1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(pane2.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(pane0, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(pane1, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(pane2, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const pane0_changes = {};
      if (dirty & /*$$scope, $html*/
      8196) {
        pane0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      pane0.$set(pane0_changes);
      const pane1_changes = {};
      if (dirty & /*$$scope, $js*/
      8200) {
        pane1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      pane1.$set(pane1_changes);
      const pane2_changes = {};
      if (dirty & /*$$scope, $css*/
      8208) {
        pane2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      pane2.$set(pane2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(pane0.$$.fragment, local);
      transition_in(pane1.$$.fragment, local);
      transition_in(pane2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(pane0.$$.fragment, local);
      transition_out(pane1.$$.fragment, local);
      transition_out(pane2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(pane0, detaching);
      if (detaching)
        detach(t0);
      destroy_component(pane1, detaching);
      if (detaching)
        detach(t1);
      destroy_component(pane2, detaching);
    }
  };
}
function create_fragment$3(ctx) {
  let section;
  let current_block_type_index;
  let if_block;
  let t;
  let div1;
  let div0;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block$3, create_else_block$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!/*$ideMode*/
    ctx2[1])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      section = element("section");
      if_block.c();
      t = space();
      div1 = element("div");
      div0 = element("div");
      this.h();
    },
    l(nodes) {
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      if_block.l(section_nodes);
      t = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      children(div0).forEach(detach);
      div1_nodes.forEach(detach);
      section_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "rotate-90");
      attr(div1, "class", "flex h-full w-[14px] cursor-col-resize border-x items-center");
      attr(section, "class", "flex min-w-[380px] w-[472px]");
    },
    m(target, anchor) {
      insert_hydration(target, section, anchor);
      if_blocks[current_block_type_index].m(section, null);
      append_hydration(section, t);
      append_hydration(section, div1);
      append_hydration(div1, div0);
      ctx[11](section);
      current = true;
      if (!mounted) {
        dispose = listen(
          div1,
          "mousedown",
          /*handleSidebarResize*/
          ctx[6]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(section, t);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(section);
      if_blocks[current_block_type_index].d();
      ctx[11](null);
      mounted = false;
      dispose();
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let $resizing;
  let $ideMode;
  let $html;
  let $js;
  let $css;
  let $code;
  component_subscribe($$self, resizing, ($$value) => $$invalidate(12, $resizing = $$value));
  component_subscribe($$self, ideMode, ($$value) => $$invalidate(1, $ideMode = $$value));
  component_subscribe($$self, html, ($$value) => $$invalidate(2, $html = $$value));
  component_subscribe($$self, js, ($$value) => $$invalidate(3, $js = $$value));
  component_subscribe($$self, css, ($$value) => $$invalidate(4, $css = $$value));
  component_subscribe($$self, code, ($$value) => $$invalidate(5, $code = $$value));
  let sidebar;
  function handleSidebarResize() {
    set_store_value(resizing, $resizing = true, $resizing);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    function handleMouseMove(e) {
      if (e.clientX > 300) {
        $$invalidate(0, sidebar.style.width = e.clientX + "px", sidebar);
        document.body.style.cursor = "col-resize";
      }
    }
    function handleMouseUp() {
      set_store_value(resizing, $resizing = false, $resizing);
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
  }
  onMount(() => {
    let splitters = document.querySelectorAll(".splitpanes__splitter");
    for (let i = 0; i < splitters.length; i++) {
      switch (i) {
        case 0:
          splitters[i].classList.add("html-splitter");
          break;
        case 1:
          splitters[i].classList.add("js-splitter");
          break;
        case 2:
          splitters[i].classList.add("css-splitter");
          break;
      }
    }
  });
  function editor_value_binding(value) {
    $html = value;
    html.set($html);
  }
  function editor_value_binding_1(value) {
    $js = value;
    js.set($js);
  }
  function editor_value_binding_2(value) {
    $css = value;
    css.set($css);
  }
  function collab_value_binding(value) {
    $code = value;
    code.set($code);
  }
  function section_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      sidebar = $$value;
      $$invalidate(0, sidebar);
    });
  }
  return [
    sidebar,
    $ideMode,
    $html,
    $js,
    $css,
    $code,
    handleSidebarResize,
    editor_value_binding,
    editor_value_binding_1,
    editor_value_binding_2,
    collab_value_binding,
    section_binding
  ];
}
class Sidebar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
  }
}
function create_else_block$1(ctx) {
  let button;
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      t = text("Switch to IDE Mode");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Switch to IDE Mode");
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "bg-slate-300 rounded-lg flex items-center justify-center py-2 px-4 h-12 hover:bg-slate-400 transition");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler_1*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$2(ctx) {
  let button;
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      t = text("Switch to Dev Mode");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Switch to Dev Mode");
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "bg-slate-300 rounded-lg flex items-center justify-center py-2 px-4 h-12 hover:bg-slate-400 transition");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[1]
        );
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$2(ctx) {
  let main;
  let section;
  let h1;
  let t0;
  let t1;
  function select_block_type(ctx2, dirty) {
    if (
      /*$ideMode*/
      ctx2[0]
    )
      return create_if_block$2;
    return create_else_block$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      main = element("main");
      section = element("section");
      h1 = element("h1");
      t0 = text("Watashiato");
      t1 = space();
      if_block.c();
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      section = claim_element(main_nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      h1 = claim_element(section_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Watashiato");
      h1_nodes.forEach(detach);
      section_nodes.forEach(detach);
      t1 = claim_space(main_nodes);
      if_block.l(main_nodes);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "font-heading text-xl");
      attr(section, "class", "flex items-center space-x-4 select-none");
      attr(main, "class", "py-2 w-full flex items-center px-3 justify-between bg-gray-100 border-b border-gray-50/50");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      append_hydration(main, section);
      append_hydration(section, h1);
      append_hydration(h1, t0);
      append_hydration(main, t1);
      if_block.m(main, null);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(main, null);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(main);
      if_block.d();
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let $ideMode;
  component_subscribe($$self, ideMode, ($$value) => $$invalidate(0, $ideMode = $$value));
  const click_handler = () => ideMode.set(!$ideMode);
  const click_handler_1 = () => ideMode.set(!$ideMode);
  return [$ideMode, click_handler, click_handler_1];
}
class Navbar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
  }
}
function create_if_block_2(ctx) {
  let button;
  let t0;
  let t1;
  let if_block_anchor;
  let mounted;
  let dispose;
  let if_block = !/*loading_pyodide*/
  ctx[4] && create_if_block_3();
  return {
    c() {
      button = element("button");
      t0 = text("Load Pyodide");
      t1 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t0 = claim_text(button_nodes, "Load Pyodide");
      button_nodes.forEach(detach);
      t1 = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      attr(button, "class", "bg-slate-300 rounded-lg flex items-center justify-center py-2 px-4 h-12 hover:bg-slate-400 transition");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t0);
      insert_hydration(target, t1, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*load_pyodide*/
          ctx[6]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (!/*loading_pyodide*/
      ctx2[4]) {
        if (if_block)
          ;
        else {
          if_block = create_if_block_3();
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if (detaching)
        detach(t1);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_3(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text("Loading pyodide...");
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", {});
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Loading pyodide...");
      span_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_1$1(ctx) {
  let button;
  let svg;
  let path;
  let t0;
  let span;
  let t1;
  let button_disabled_value;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      svg = svg_element("svg");
      path = svg_element("path");
      t0 = space();
      span = element("span");
      t1 = text("Run");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      svg = claim_svg_element(button_nodes, "svg", {
        "aria-hidden": true,
        fill: true,
        viewBox: true,
        xmlns: true,
        class: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      t0 = claim_space(button_nodes);
      span = claim_element(button_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, "Run");
      span_nodes.forEach(detach);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z");
      attr(svg, "aria-hidden", "true");
      attr(svg, "fill", "currentColor");
      attr(svg, "viewBox", "0 0 20 20");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "class", "h-8 w-8");
      attr(span, "class", "inline-block ml-2");
      attr(button, "class", "bg-green-500 disabled:bg-gray-400 rounded-lg flex items-center justify-center p-2 w-24 h-12 hover:bg-green-600 transition font-bold");
      button.disabled = button_disabled_value = !/*pyodide_loaded*/
      ctx[3];
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, svg);
      append_hydration(svg, path);
      append_hydration(button, t0);
      append_hydration(button, span);
      append_hydration(span, t1);
      if (!mounted) {
        dispose = listen(button, "click", function() {
          if (is_function(
            /*runCode*/
            ctx[1](
              /*$code*/
              ctx[5]
            )
          ))
            ctx[1](
              /*$code*/
              ctx[5]
            ).apply(this, arguments);
        });
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*pyodide_loaded*/
      8 && button_disabled_value !== (button_disabled_value = !/*pyodide_loaded*/
      ctx[3])) {
        button.disabled = button_disabled_value;
      }
    },
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$1(ctx) {
  let pre;
  let t;
  return {
    c() {
      pre = element("pre");
      t = text(
        /*output*/
        ctx[0]
      );
      this.h();
    },
    l(nodes) {
      pre = claim_element(nodes, "PRE", { class: true });
      var pre_nodes = children(pre);
      t = claim_text(
        pre_nodes,
        /*output*/
        ctx[0]
      );
      pre_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(pre, "class", "block w-full text-sm px-4 pb-8 font-mono overflow-y-auto");
    },
    m(target, anchor) {
      insert_hydration(target, pre, anchor);
      append_hydration(pre, t);
      ctx[7](pre);
    },
    p(ctx2, dirty) {
      if (dirty & /*output*/
      1)
        set_data(
          t,
          /*output*/
          ctx2[0]
        );
    },
    d(detaching) {
      if (detaching)
        detach(pre);
      ctx[7](null);
    }
  };
}
function create_fragment$1(ctx) {
  let script;
  let script_src_value;
  let t0;
  let div;
  let t1;
  let t2;
  let if_block2_anchor;
  let if_block0 = !/*pyodide_loaded*/
  ctx[3] && create_if_block_2(ctx);
  let if_block1 = (
    /*pyodide_loaded*/
    ctx[3] && create_if_block_1$1(ctx)
  );
  let if_block2 = (
    /*pyodide_loaded*/
    ctx[3] && create_if_block$1(ctx)
  );
  return {
    c() {
      script = element("script");
      t0 = space();
      div = element("div");
      if (if_block0)
        if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      t2 = space();
      if (if_block2)
        if_block2.c();
      if_block2_anchor = empty();
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1ubdv9e", document.head);
      script = claim_element(head_nodes, "SCRIPT", { src: true });
      var script_nodes = children(script);
      script_nodes.forEach(detach);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block0)
        if_block0.l(div_nodes);
      t1 = claim_space(div_nodes);
      if (if_block1)
        if_block1.l(div_nodes);
      div_nodes.forEach(detach);
      t2 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      if_block2_anchor = empty();
      this.h();
    },
    h() {
      if (!src_url_equal(script.src, script_src_value = "https://cdn.jsdelivr.net/pyodide/v0.22.1/full/pyodide.js"))
        attr(script, "src", script_src_value);
      attr(div, "class", "p-4");
    },
    m(target, anchor) {
      append_hydration(document.head, script);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      if (if_block0)
        if_block0.m(div, null);
      append_hydration(div, t1);
      if (if_block1)
        if_block1.m(div, null);
      insert_hydration(target, t2, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration(target, if_block2_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (!/*pyodide_loaded*/
      ctx2[3]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          if_block0.m(div, t1);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*pyodide_loaded*/
        ctx2[3]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_1$1(ctx2);
          if_block1.c();
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*pyodide_loaded*/
        ctx2[3]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block$1(ctx2);
          if_block2.c();
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      detach(script);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (detaching)
        detach(t2);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(if_block2_anchor);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $code;
  component_subscribe($$self, code, ($$value) => $$invalidate(5, $code = $$value));
  let tDiv;
  let pyodide = null;
  let pyodide_loaded = false;
  let loading_pyodide = false;
  let { output = "" } = $$props;
  function showStdOut(op) {
    $$invalidate(0, output = output + op + "\n");
  }
  function showStdErr(err) {
    $$invalidate(0, output = output + "Err:" + err + "\n");
  }
  onMount(async () => {
    load_pyodide();
    return () => {
      $$invalidate(3, pyodide_loaded = false);
      $$invalidate(4, loading_pyodide = false);
    };
  });
  async function load_pyodide() {
    if (pyodide_loaded)
      return;
    try {
      $$invalidate(4, loading_pyodide = true);
      pyodide = await loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.22.1/full/",
        stdout: showStdOut,
        stderr: showStdErr
      });
    } catch (e) {
      console.error(e);
    }
    if (pyodide) {
      $$invalidate(3, pyodide_loaded = true);
      $$invalidate(4, loading_pyodide = false);
    }
  }
  async function runCode() {
    if ($code == "")
      return;
    if (pyodide_loaded) {
      showStdOut(`
> ${$code}`);
      await pyodide.runPython($code);
    }
  }
  function pre_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      tDiv = $$value;
      $$invalidate(2, tDiv);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("output" in $$props2)
      $$invalidate(0, output = $$props2.output);
  };
  return [
    output,
    runCode,
    tDiv,
    pyodide_loaded,
    loading_pyodide,
    $code,
    load_pyodide,
    pre_binding
  ];
}
class Pyodide extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { output: 0, runCode: 1 });
  }
  get runCode() {
    return this.$$.ctx[1];
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_if_block_1(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "bg-transparent w-full h-full absolute left-0 top-0");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_else_block(ctx) {
  let iframe;
  return {
    c() {
      iframe = element("iframe");
      this.h();
    },
    l(nodes) {
      iframe = claim_element(nodes, "IFRAME", {
        srcdoc: true,
        sandbox: true,
        title: true,
        frameborder: true,
        width: true,
        height: true
      });
      children(iframe).forEach(detach);
      this.h();
    },
    h() {
      attr(
        iframe,
        "srcdoc",
        /*srcDoc*/
        ctx[0]
      );
      attr(iframe, "sandbox", "allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation");
      attr(iframe, "title", "output");
      attr(iframe, "frameborder", "0");
      attr(iframe, "width", "100%");
      attr(iframe, "height", "100%");
    },
    m(target, anchor) {
      insert_hydration(target, iframe, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*srcDoc*/
      1) {
        attr(
          iframe,
          "srcdoc",
          /*srcDoc*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(iframe);
    }
  };
}
function create_if_block(ctx) {
  let pyodide;
  let current;
  pyodide = new Pyodide({});
  return {
    c() {
      create_component(pyodide.$$.fragment);
    },
    l(nodes) {
      claim_component(pyodide.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(pyodide, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(pyodide.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(pyodide.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(pyodide, detaching);
    }
  };
}
function create_fragment(ctx) {
  let main;
  let navbar;
  let t0;
  let section;
  let sidebar;
  let t1;
  let div;
  let t2;
  let current_block_type_index;
  let if_block1;
  let current;
  navbar = new Navbar({});
  sidebar = new Sidebar({});
  let if_block0 = (
    /*$resizing*/
    ctx[1] && create_if_block_1()
  );
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$ideMode*/
      ctx2[2]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      main = element("main");
      create_component(navbar.$$.fragment);
      t0 = space();
      section = element("section");
      create_component(sidebar.$$.fragment);
      t1 = space();
      div = element("div");
      if (if_block0)
        if_block0.c();
      t2 = space();
      if_block1.c();
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      claim_component(navbar.$$.fragment, main_nodes);
      t0 = claim_space(main_nodes);
      section = claim_element(main_nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      claim_component(sidebar.$$.fragment, section_nodes);
      t1 = claim_space(section_nodes);
      div = claim_element(section_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block0)
        if_block0.l(div_nodes);
      t2 = claim_space(div_nodes);
      if_block1.l(div_nodes);
      div_nodes.forEach(detach);
      section_nodes.forEach(detach);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "overflow-y-auto flex-1 relative");
      attr(section, "class", "flex h-full");
      attr(main, "class", "w-screen h-screen flex flex-col overflow-hidden min-w-[700px] font-mono");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      mount_component(navbar, main, null);
      append_hydration(main, t0);
      append_hydration(main, section);
      mount_component(sidebar, section, null);
      append_hydration(section, t1);
      append_hydration(section, div);
      if (if_block0)
        if_block0.m(div, null);
      append_hydration(div, t2);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*$resizing*/
        ctx2[1]
      ) {
        if (if_block0)
          ;
        else {
          if_block0 = create_if_block_1();
          if_block0.c();
          if_block0.m(div, t2);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block1 = if_blocks[current_block_type_index];
        if (!if_block1) {
          if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block1.c();
        } else {
          if_block1.p(ctx2, dirty);
        }
        transition_in(if_block1, 1);
        if_block1.m(div, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(navbar.$$.fragment, local);
      transition_in(sidebar.$$.fragment, local);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(navbar.$$.fragment, local);
      transition_out(sidebar.$$.fragment, local);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(main);
      destroy_component(navbar);
      destroy_component(sidebar);
      if (if_block0)
        if_block0.d();
      if_blocks[current_block_type_index].d();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $js;
  let $css;
  let $html;
  let $resizing;
  let $ideMode;
  component_subscribe($$self, js, ($$value) => $$invalidate(4, $js = $$value));
  component_subscribe($$self, css, ($$value) => $$invalidate(5, $css = $$value));
  component_subscribe($$self, html, ($$value) => $$invalidate(6, $html = $$value));
  component_subscribe($$self, resizing, ($$value) => $$invalidate(1, $resizing = $$value));
  component_subscribe($$self, ideMode, ($$value) => $$invalidate(2, $ideMode = $$value));
  let srcDoc;
  let cooldownTimer;
  onMount(() => {
    setTimeout(
      () => {
      },
      1400
    );
    window.addEventListener("message", (e) => {
      e.data;
    });
  });
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*cooldownTimer, $html, $css, $js*/
    120) {
      {
        clearTimeout(cooldownTimer);
        $$invalidate(3, cooldownTimer = setTimeout(
          async () => {
            $$invalidate(0, srcDoc = `<html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Document</title></head><body>${$html}</body><style>${$css}</style><script>${$js}<\/script></html>`);
          },
          400
        ));
      }
    }
  };
  return [srcDoc, $resizing, $ideMode, cooldownTimer, $js, $css, $html];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};

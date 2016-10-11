!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return D(e.substr(6));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("2", ["3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('3');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});

$__System.registerDynamic("4", ["2"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('2'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("5", ["4"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$defineProperty = $__require('4')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("6", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  return module.exports;
});

$__System.registerDynamic("7", ["8", "9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('8'),
      defined = $__require('9');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});

$__System.registerDynamic("a", ["7", "b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $at = $__require('7')(true);
  $__require('b')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  return module.exports;
});

$__System.registerDynamic("c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function() {};
  return module.exports;
});

$__System.registerDynamic("d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  return module.exports;
});

$__System.registerDynamic("e", ["3", "f", "10", "11", "12"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('3'),
      descriptor = $__require('f'),
      setToStringTag = $__require('10'),
      IteratorPrototype = {};
  $__require('11')(IteratorPrototype, $__require('12')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});

$__System.registerDynamic("b", ["13", "14", "15", "11", "16", "17", "e", "10", "3", "12"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var LIBRARY = $__require('13'),
      $export = $__require('14'),
      redefine = $__require('15'),
      hide = $__require('11'),
      has = $__require('16'),
      Iterators = $__require('17'),
      $iterCreate = $__require('e'),
      setToStringTag = $__require('10'),
      getProto = $__require('3').getProto,
      ITERATOR = $__require('12')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});

$__System.registerDynamic("18", ["c", "d", "17", "19", "b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var addToUnscopables = $__require('c'),
      step = $__require('d'),
      Iterators = $__require('17'),
      toIObject = $__require('19');
  module.exports = $__require('b')(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  return module.exports;
});

$__System.registerDynamic("1a", ["18", "17"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('18');
  var Iterators = $__require('17');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  return module.exports;
});

$__System.registerDynamic("13", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = true;
  return module.exports;
});

$__System.registerDynamic("1b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("1c", ["1d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('1d');
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  return module.exports;
});

$__System.registerDynamic("1e", ["17", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Iterators = $__require('17'),
      ITERATOR = $__require('12')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  return module.exports;
});

$__System.registerDynamic("8", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});

$__System.registerDynamic("1f", ["8"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('8'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});

$__System.registerDynamic("20", ["21", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('21'),
      TAG = $__require('12')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  return module.exports;
});

$__System.registerDynamic("17", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {};
  return module.exports;
});

$__System.registerDynamic("22", ["20", "12", "17", "23"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var classof = $__require('20'),
      ITERATOR = $__require('12')('iterator'),
      Iterators = $__require('17');
  module.exports = $__require('23').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  return module.exports;
});

$__System.registerDynamic("24", ["25", "1c", "1e", "1d", "1f", "22"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('25'),
      call = $__require('1c'),
      isArrayIter = $__require('1e'),
      anObject = $__require('1d'),
      toLength = $__require('1f'),
      getIterFn = $__require('22');
  module.exports = function(iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function')
      throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn))
      for (length = toLength(iterable.length); length > index; index++) {
        entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        call(iterator, f, step.value, entries);
      }
  };
  return module.exports;
});

$__System.registerDynamic("26", ["3", "27", "1d", "25"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getDesc = $__require('3').getDesc,
      isObject = $__require('27'),
      anObject = $__require('1d');
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
      try {
        set = $__require('25')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  return module.exports;
});

$__System.registerDynamic("28", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  return module.exports;
});

$__System.registerDynamic("1d", ["27"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('27');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("29", ["1d", "2a", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('1d'),
      aFunction = $__require('2a'),
      SPECIES = $__require('12')('species');
  module.exports = function(O, D) {
    var C = anObject(O).constructor,
        S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };
  return module.exports;
});

$__System.registerDynamic("2b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
  };
  return module.exports;
});

$__System.registerDynamic("2c", ["2d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('2d').document && document.documentElement;
  return module.exports;
});

$__System.registerDynamic("27", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});

$__System.registerDynamic("2e", ["27", "2d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('27'),
      document = $__require('2d').document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  return module.exports;
});

$__System.registerDynamic("2f", ["25", "2b", "2c", "2e", "2d", "21", "30"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var ctx = $__require('25'),
        invoke = $__require('2b'),
        html = $__require('2c'),
        cel = $__require('2e'),
        global = $__require('2d'),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function() {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function(event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i)
          args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ($__require('21')(process) == 'process') {
        defer = function(id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function(id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })($__require('30'));
  return module.exports;
});

$__System.registerDynamic("31", ["2d", "2f", "21", "30"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var global = $__require('2d'),
        macrotask = $__require('2f').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('21')(process) == 'process',
        head,
        last,
        notify;
    var flush = function() {
      var parent,
          domain,
          fn;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        fn = head.fn;
        if (domain)
          domain.enter();
        fn();
        if (domain)
          domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent)
        parent.enter();
    };
    if (isNode) {
      notify = function() {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, {characterData: true});
      notify = function() {
        node.data = toggle = -toggle;
      };
    } else if (Promise && Promise.resolve) {
      notify = function() {
        Promise.resolve().then(flush);
      };
    } else {
      notify = function() {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last)
        last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })($__require('30'));
  return module.exports;
});

$__System.registerDynamic("f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});

$__System.registerDynamic("11", ["3", "f", "32"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('3'),
      createDesc = $__require('f');
  module.exports = $__require('32') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});

$__System.registerDynamic("15", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('11');
  return module.exports;
});

$__System.registerDynamic("33", ["15"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var redefine = $__require('15');
  module.exports = function(target, src) {
    for (var key in src)
      redefine(target, key, src[key]);
    return target;
  };
  return module.exports;
});

$__System.registerDynamic("16", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});

$__System.registerDynamic("10", ["3", "16", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var def = $__require('3').setDesc,
      has = $__require('16'),
      TAG = $__require('12')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  return module.exports;
});

$__System.registerDynamic("32", ["34"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = !$__require('34')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  return module.exports;
});

$__System.registerDynamic("35", ["23", "3", "32", "12"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = $__require('23'),
      $ = $__require('3'),
      DESCRIPTORS = $__require('32'),
      SPECIES = $__require('12')('species');
  module.exports = function(KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES])
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  return module.exports;
});

$__System.registerDynamic("36", ["2d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('2d'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  return module.exports;
});

$__System.registerDynamic("37", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});

$__System.registerDynamic("12", ["36", "37", "2d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var store = $__require('36')('wks'),
      uid = $__require('37'),
      Symbol = $__require('2d').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  return module.exports;
});

$__System.registerDynamic("38", ["12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ITERATOR = $__require('12')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function() {
        safe = true;
      };
      arr[ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  return module.exports;
});

$__System.registerDynamic("39", ["3", "13", "2d", "25", "20", "14", "27", "1d", "2a", "1b", "24", "26", "28", "12", "29", "31", "32", "33", "10", "35", "23", "38", "30"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var $ = $__require('3'),
        LIBRARY = $__require('13'),
        global = $__require('2d'),
        ctx = $__require('25'),
        classof = $__require('20'),
        $export = $__require('14'),
        isObject = $__require('27'),
        anObject = $__require('1d'),
        aFunction = $__require('2a'),
        strictNew = $__require('1b'),
        forOf = $__require('24'),
        setProto = $__require('26').set,
        same = $__require('28'),
        SPECIES = $__require('12')('species'),
        speciesConstructor = $__require('29'),
        asap = $__require('31'),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        Wrapper;
    var testResolve = function(sub) {
      var test = new P(function() {});
      if (sub)
        test.constructor = Object;
      return P.resolve(test) === test;
    };
    var USE_NATIVE = function() {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
        if (!(P2.resolve(5).then(function() {}) instanceof P2)) {
          works = false;
        }
        if (works && $__require('32')) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', {get: function() {
              thenableThenGotten = true;
            }}));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var sameConstructor = function(a, b) {
      if (LIBRARY && a === P && b === Wrapper)
        return true;
      return same(a, b);
    };
    var getConstructor = function(C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function(it) {
      var then;
      return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
    };
    var PromiseCapability = function(C) {
      var resolve,
          reject;
      this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined)
          throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve), this.reject = aFunction(reject);
    };
    var perform = function(exec) {
      try {
        exec();
      } catch (e) {
        return {error: e};
      }
    };
    var notify = function(record, isReject) {
      if (record.n)
        return;
      record.n = true;
      var chain = record.c;
      asap(function() {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function(reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              result,
              then;
          try {
            if (handler) {
              if (!ok)
                record.h = true;
              result = handler === true ? value : handler(value);
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else
                resolve(result);
            } else
              reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i)
          run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject)
          setTimeout(function() {
            var promise = record.p,
                handler,
                console;
            if (isUnhandled(promise)) {
              if (isNode) {
                process.emit('unhandledRejection', value, promise);
              } else if (handler = global.onunhandledrejection) {
                handler({
                  promise: promise,
                  reason: value
                });
              } else if ((console = global.console) && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            }
            record.a = undefined;
          }, 1);
      });
    };
    var isUnhandled = function(promise) {
      var record = promise._d,
          chain = record.a || record.c,
          i = 0,
          reaction;
      if (record.h)
        return false;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise))
          return false;
      }
      return true;
    };
    var $reject = function(value) {
      var record = this;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function(value) {
      var record = this,
          then;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      try {
        if (record.p === value)
          throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          asap(function() {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = this._d = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      $__require('33')(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = new PromiseCapability(speciesConstructor(this, P)),
              promise = reaction.promise,
              record = this._d;
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          record.c.push(reaction);
          if (record.a)
            record.a.push(reaction);
          if (record.s)
            notify(record, false);
          return promise;
        },
        'catch': function(onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
    $__require('10')(P, PROMISE);
    $__require('35')(PROMISE);
    Wrapper = $__require('23')[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {reject: function reject(r) {
        var capability = new PromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }});
    $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {resolve: function resolve(x) {
        if (x instanceof P && sameConstructor(x.constructor, this))
          return x;
        var capability = new PromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      }});
    $export($export.S + $export.F * !(USE_NATIVE && $__require('38')(function(iter) {
      P.all(iter)['catch'](function() {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject,
            values = [];
        var abrupt = perform(function() {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining)
            $.each.call(values, function(promise, index) {
              var alreadyCalled = false;
              C.resolve(promise).then(function(value) {
                if (alreadyCalled)
                  return;
                alreadyCalled = true;
                results[index] = value;
                --remaining || resolve(results);
              }, reject);
            });
          else
            resolve(results);
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function() {
          forOf(iterable, false, function(promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      }
    });
  })($__require('30'));
  return module.exports;
});

$__System.registerDynamic("3a", ["6", "a", "1a", "39", "23"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('6');
  $__require('a');
  $__require('1a');
  $__require('39');
  module.exports = $__require('23').Promise;
  return module.exports;
});

$__System.registerDynamic("3b", ["3a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('3a'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("3c", ["14", "23", "34"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('14'),
      core = $__require('23'),
      fails = $__require('34');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  return module.exports;
});

$__System.registerDynamic("19", ["3d", "9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var IObject = $__require('3d'),
      defined = $__require('9');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("3e", ["19", "3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toIObject = $__require('19'),
      getNames = $__require('3').getNames,
      toString = {}.toString;
  var windowNames = typeof window == 'object' && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  var getWindowNames = function(it) {
    try {
      return getNames(it);
    } catch (e) {
      return windowNames.slice();
    }
  };
  module.exports.get = function getOwnPropertyNames(it) {
    if (windowNames && toString.call(it) == '[object Window]')
      return getWindowNames(it);
    return getNames(toIObject(it));
  };
  return module.exports;
});

$__System.registerDynamic("3f", ["3c", "3e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('3c')('getOwnPropertyNames', function() {
    return $__require('3e').get;
  });
  return module.exports;
});

$__System.registerDynamic("40", ["3", "3f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('3');
  $__require('3f');
  module.exports = function getOwnPropertyNames(it) {
    return $.getNames(it);
  };
  return module.exports;
});

$__System.registerDynamic("41", ["40"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('40'),
    __esModule: true
  };
  return module.exports;
});

$__System.register('42', ['5', '41', '43', '3b'], function (_export) {
    var _createClass, _Object$getOwnPropertyNames, _classCallCheck, _Promise, Req;

    //this file is ass because poop comes out

    function poop(u) {
        return new Req(u);
    }

    return {
        setters: [function (_) {
            _createClass = _['default'];
        }, function (_3) {
            _Object$getOwnPropertyNames = _3['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }, function (_b) {
            _Promise = _b['default'];
        }],
        execute: function () {
            //every time we poop(), we shit out a new request object
            'use strict';

            _export('default', poop);

            Req = (function () {
                function Req(u) {
                    _classCallCheck(this, Req);

                    this.url = u;
                    this.heads = {};
                    this.cred = false;
                    this.hacks = {};
                    this.fucked = undefined;
                }

                _createClass(Req, [{
                    key: 'getlike',
                    value: function getlike(m) {
                        //return a promise for getting
                        return this.r(m);
                    }
                }, {
                    key: 'get',
                    value: function get() {
                        return this.getlike('GET');
                    }
                }, {
                    key: 'head',
                    value: function head() {
                        return this.getlike('HEAD');
                    }
                }, {
                    key: 'trace',
                    value: function trace() {
                        return this.getlike('TRACE');
                    }
                }, {
                    key: 'options',
                    value: function options() {
                        return this.getlike('OPTIONS');
                    }
                }, {
                    key: 'delete',
                    value: function _delete() {
                        return this.getlike('DELETE');
                    }
                }, {
                    key: 'putlike',
                    value: function putlike(m, d) {
                        //if you don't say so it's json. why would you send anything else like seriously
                        //unless you're chrome and can't figure out boundaries
                        if (!this.heads['Content-Type'] && !this.hacks['no-content-type']) this.heads['Content-Type'] = 'application/json';
                        return this.r(m, d); // return a promise
                    }
                }, {
                    key: 'put',
                    value: function put(d) {
                        return this.putlike('PUT', d);
                    }
                }, {
                    key: 'post',
                    value: function post(d) {
                        return this.putlike('POST', d);
                    }
                }, {
                    key: 'patch',
                    value: function patch(d) {
                        return this.putlike('PATCH', d);
                    }
                }, {
                    key: 'header',
                    value: function header(k, v) {
                        this.heads[k] = v; //add to the header map
                        return this; //return itself for chaining
                    }
                }, {
                    key: 'withCred',
                    value: function withCred(c) {
                        this.cred = c; //with cors credentials
                        return this; //chain the poop
                    }
                }, {
                    key: 'errorOn',
                    value: function errorOn(s) {
                        this.fucked = s;
                        return this;
                    }

                    //make a promise that does the pooping magic
                }, {
                    key: 'r',
                    value: function r(method, data) {
                        var _this = this;

                        return new _Promise(function (resolve, rejext) {
                            var x = new XMLHttpRequest();
                            x.open(method, _this.url, true);

                            //only care when we're done the other events can suck it
                            x.onreadystatechange = function (e) {
                                switch (x.readyState) {
                                    case 4:
                                        //return the entire xhr object because the extra work of xhr.response is so worth
                                        //being able to also do xhr.status xhr.getResponseHeader xhr.fuckyourface
                                        if (!!_this.fucked && !!_this.fucked(x)) {
                                            var _e = new Error('ajaxpoop error ' + x.status);
                                            _e.xhr = x;_e.status = x.status;
                                            rejext(_e);
                                        } else resolve(x);
                                }
                            };
                            //welp timed out
                            x.ontimeout = function (e) {
                                rejext('timed out');
                            };
                            //half the reason i did this is because these micro frameworks don't let me set or see headers easily
                            _Object$getOwnPropertyNames(_this.heads).forEach(function (k) {
                                x.setRequestHeader(k, _this.heads[k]);
                            });
                            x.withCredentials = _this.cred;
                            if (data && _this.heads['Content-Type'] == 'application/json') x.send(JSON.stringify(data));else x.send(data);
                        });
                    }
                }]);

                return Req;
            })();
        }
    };
});
$__System.register('44', ['43', '45'], function (_export) {
    var _classCallCheck, Item, Channel;

    return {
        setters: [function (_) {
            _classCallCheck = _['default'];
        }, function (_2) {
            Item = _2['default'];
        }],
        execute: function () {
            'use strict';

            Channel = function Channel(spec) {
                _classCallCheck(this, Channel);

                this.title = spec.title;
                this.description = spec.description;
                this.link = spec.link;
                this.image = spec.image;

                this.items = spec.items;

                //clusterfriend-specific
                this.id = spec.id;
                this.profile = spec.profile;
                this.isFull = spec.isFull;
            };

            _export('default', Channel);

            ;
        }
    };
});
$__System.registerDynamic("43", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.register("45", ["43"], function (_export) {
    var _classCallCheck, Item;

    return {
        setters: [function (_) {
            _classCallCheck = _["default"];
        }],
        execute: function () {
            "use strict";

            Item = function Item(spec) {
                _classCallCheck(this, Item);

                this.pubDate = spec.pubDate;
                this.description = spec.description;
                this.link = spec.link;
                this.guid = spec.guid;
                this.enclosure = spec.enclosure;
                this.comments = spec.comments;

                //clusterfriend-specific
                this.re = spec.re;
                this.feel = spec.feel;
            };

            _export("default", Item);

            ;
        }
    };
});
$__System.register('46', ['44', '45'], function (_export) {
    'use strict';

    var Channel, Item, rssNS, cfNS;

    _export('cfFrom', cfFrom);

    _export('rssFrom', rssFrom);

    function getElementNodeValue(e) {
        if (!!e && !!e.childNodes && !!e.childNodes[0]) return e.childNodes[0].nodeValue;
    }

    function getEnclosure(enclosureElement) {
        if (!!enclosureElement) return {
            url: enclosureElement.getAttribute('url'),
            length: enclosureElement.getAttribute('length'),
            type: enclosureElement.getAttribute('type')
        };
    }

    function getImage(imageElement) {
        if (!!imageElement) return {
            url: imageElement.getAttribute('url'),
            title: imageElement.getAttribute('title'),
            link: imageElement.getAttribute('link')
        };
    }

    //because it isn't an array for some reason
    function mapItems(itemElems) {
        var items = [];
        for (var i = 0; i < itemElems.length; i++) {
            var ie = itemElems[i];
            items.push(new Item({
                pubDate: getElementNodeValue(ie.getElementsByTagNameNS(rssNS, 'pubDate')[0]),
                description: getElementNodeValue(ie.getElementsByTagNameNS(rssNS, 'description')[0]),
                link: getElementNodeValue(ie.getElementsByTagNameNS(rssNS, 'link')[0]),
                guid: getElementNodeValue(ie.getElementsByTagNameNS(rssNS, 'guid')[0]),
                enclosure: getEnclosure(ie.getElementsByTagNameNS(rssNS, 'enclosure')[0]),
                re: getElementNodeValue(ie.getElementsByTagNameNS(cfNS, 're')[0]),
                feel: getElementNodeValue(ie.getElementsByTagNameNS(cfNS, 'feel')[0])
            }));
        }
        return items;
    }

    function cfFrom(rss, url) {
        var parser = new DOMParser();
        var xml = parser.parseFromString(rss, 'text/xml');

        var channelElement = xml.getElementsByTagNameNS(rssNS, 'channel')[0];
        var itemElements = xml.getElementsByTagNameNS(rssNS, 'item');

        getElementNodeValue(channelElement.getElementsByTagNameNS(cfNS, 'id')[0]);
        getElementNodeValue(channelElement.getElementsByTagNameNS(cfNS, 'id')[0]) || url;
        getElementNodeValue(channelElement.getElementsByTagNameNS(cfNS, 'id')[0]) || url || getElementNodeValue(channelElement.getElementsByTagNameNS(rssNS, 'link')[0]);

        var channelSpec = {
            title: getElementNodeValue(channelElement.getElementsByTagNameNS(rssNS, 'title')[0]),
            description: getElementNodeValue(channelElement.getElementsByTagNameNS(rssNS, 'description')[0]),
            link: getElementNodeValue(channelElement.getElementsByTagNameNS(rssNS, 'link')[0]),
            image: getImage(channelElement.getElementsByTagNameNS(rssNS, 'image')[0]),
            items: mapItems(itemElements),
            id: getElementNodeValue(channelElement.getElementsByTagNameNS(cfNS, 'id')[0]) || url || getElementNodeValue(channelElement.getElementsByTagNameNS(rssNS, 'link')[0]),
            profile: getElementNodeValue(channelElement.getElementsByTagNameNS(cfNS, 'profile')[0]),
            isFull: getElementNodeValue(channelElement.getElementsByTagNameNS(cfNS, 'isFull')[0])
        };

        return new Channel(channelSpec);
    }

    function elementFromJSProp(xml, obj, prop, ns) {
        var e = undefined;
        if (!ns) e = xml.createElement(prop);else e = xml.createElementNS(prop, ns);
        var cd = xml.createTextNode(obj[prop] || '');
        e.appendChild(cd);
        return e;
    }

    function rssFrom(channel) {
        var xml = document.implementation.createDocument(rssNS, 'rss', 'text/xml');
        var ch = xml.createElement('channel');

        ch.appendChild(elementFromJSProp(xml, channel, 'title'));
        ch.appendChild(elementFromJSProp(xml, channel, 'description'));
        ch.appendChild(elementFromJSProp(xml, channel, 'link'));
        ch.appendChild(elementFromJSProp(xml, channel, 'image'));
        ch.appendChild(elementFromJSProp(xml, channel, 'id', cfNS));
        ch.appendChild(elementFromJSProp(xml, channel, 'profile', cfNS));
        ch.appendChild(elementFromJSProp(xml, channel, 'isFull', cfNS));

        channel.items.foreach(function (item) {
            var i = xml.createElement('item');
            i.appendChild(elementFromJSProp(xml, item, 'pubDate'));
            i.appendChild(elementFromJSProp(xml, item, 'description'));
            i.appendChild(elementFromJSProp(xml, item, 'link'));
            i.appendChild(elementFromJSProp(xml, item, 'guid'));
            i.appendChild(elementFromJSProp(xml, item, 'enclosure'));
            i.appendChild(elementFromJSProp(xml, item, 're', cfNS));
            i.appendChild(elementFromJSProp(xml, item, 'feel', cfNS));
            ch.appendChild(i);
        });

        xml.appendChild(ch);
        var serializer = new XMLSerializer();
        var rss = serializer.serializeToString(xml);
        return rss;
    }

    return {
        setters: [function (_) {
            Channel = _['default'];
        }, function (_2) {
            Item = _2['default'];
        }],
        execute: function () {
            rssNS = '';
            cfNS = 'http://delek.org/schemas/clusterfriend/';
        }
    };
});
$__System.registerDynamic("47", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function symbolObservablePonyfill(root) {
    var result;
    var Symbol = root.Symbol;
    if (typeof Symbol === 'function') {
      if (Symbol.observable) {
        result = Symbol.observable;
      } else {
        result = Symbol('observable');
        Symbol.observable = result;
      }
    } else {
      result = '@@observable';
    }
    return result;
  };
  return module.exports;
});

$__System.registerDynamic("48", ["47"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('47')(global || window || this);
  return module.exports;
});

$__System.registerDynamic("49", ["48"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('48');
  return module.exports;
});

$__System.registerDynamic("4a", ["4b", "49"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  exports.ActionTypes = undefined;
  exports["default"] = createStore;
  var _isPlainObject = $__require('4b');
  var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
  var _symbolObservable = $__require('49');
  var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  }
  var ActionTypes = exports.ActionTypes = {INIT: '@@redux/INIT'};
  function createStore(reducer, initialState, enhancer) {
    var _ref2;
    if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
      enhancer = initialState;
      initialState = undefined;
    }
    if (typeof enhancer !== 'undefined') {
      if (typeof enhancer !== 'function') {
        throw new Error('Expected the enhancer to be a function.');
      }
      return enhancer(createStore)(reducer, initialState);
    }
    if (typeof reducer !== 'function') {
      throw new Error('Expected the reducer to be a function.');
    }
    var currentReducer = reducer;
    var currentState = initialState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    function ensureCanMutateNextListeners() {
      if (nextListeners === currentListeners) {
        nextListeners = currentListeners.slice();
      }
    }
    function getState() {
      return currentState;
    }
    function subscribe(listener) {
      if (typeof listener !== 'function') {
        throw new Error('Expected listener to be a function.');
      }
      var isSubscribed = true;
      ensureCanMutateNextListeners();
      nextListeners.push(listener);
      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }
        isSubscribed = false;
        ensureCanMutateNextListeners();
        var index = nextListeners.indexOf(listener);
        nextListeners.splice(index, 1);
      };
    }
    function dispatch(action) {
      if (!(0, _isPlainObject2["default"])(action)) {
        throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
      }
      if (typeof action.type === 'undefined') {
        throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
      }
      if (isDispatching) {
        throw new Error('Reducers may not dispatch actions.');
      }
      try {
        isDispatching = true;
        currentState = currentReducer(currentState, action);
      } finally {
        isDispatching = false;
      }
      var listeners = currentListeners = nextListeners;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
      return action;
    }
    function replaceReducer(nextReducer) {
      if (typeof nextReducer !== 'function') {
        throw new Error('Expected the nextReducer to be a function.');
      }
      currentReducer = nextReducer;
      dispatch({type: ActionTypes.INIT});
    }
    function observable() {
      var _ref;
      var outerSubscribe = subscribe;
      return _ref = {subscribe: function subscribe(observer) {
          if (typeof observer !== 'object') {
            throw new TypeError('Expected the observer to be an object.');
          }
          function observeState() {
            if (observer.next) {
              observer.next(getState());
            }
          }
          observeState();
          var unsubscribe = outerSubscribe(observeState);
          return {unsubscribe: unsubscribe};
        }}, _ref[_symbolObservable2["default"]] = function() {
        return this;
      }, _ref;
    }
    dispatch({type: ActionTypes.INIT});
    return _ref2 = {
      dispatch: dispatch,
      subscribe: subscribe,
      getState: getState,
      replaceReducer: replaceReducer
    }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
  }
  return module.exports;
});

$__System.registerDynamic("4c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var nativeGetPrototype = Object.getPrototypeOf;
  function getPrototype(value) {
    return nativeGetPrototype(Object(value));
  }
  module.exports = getPrototype;
  return module.exports;
});

$__System.registerDynamic("4d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isHostObject(value) {
    var result = false;
    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {}
    }
    return result;
  }
  module.exports = isHostObject;
  return module.exports;
});

$__System.registerDynamic("4e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  module.exports = isObjectLike;
  return module.exports;
});

$__System.registerDynamic("4b", ["4c", "4d", "4e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getPrototype = $__require('4c'),
      isHostObject = $__require('4d'),
      isObjectLike = $__require('4e');
  var objectTag = '[object Object]';
  var objectProto = Object.prototype;
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);
  var objectToString = objectProto.toString;
  function isPlainObject(value) {
    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return (typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
  }
  module.exports = isPlainObject;
  return module.exports;
});

$__System.registerDynamic("4f", ["4a", "4b", "50", "30"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    exports["default"] = combineReducers;
    var _createStore = $__require('4a');
    var _isPlainObject = $__require('4b');
    var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
    var _warning = $__require('50');
    var _warning2 = _interopRequireDefault(_warning);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    function getUndefinedStateErrorMessage(key, action) {
      var actionType = action && action.type;
      var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
      return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
    }
    function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
      var reducerKeys = Object.keys(reducers);
      var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
      if (reducerKeys.length === 0) {
        return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
      }
      if (!(0, _isPlainObject2["default"])(inputState)) {
        return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
      }
      var unexpectedKeys = Object.keys(inputState).filter(function(key) {
        return !reducers.hasOwnProperty(key);
      });
      if (unexpectedKeys.length > 0) {
        return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
      }
    }
    function assertReducerSanity(reducers) {
      Object.keys(reducers).forEach(function(key) {
        var reducer = reducers[key];
        var initialState = reducer(undefined, {type: _createStore.ActionTypes.INIT});
        if (typeof initialState === 'undefined') {
          throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
        }
        var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
        if (typeof reducer(undefined, {type: type}) === 'undefined') {
          throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
        }
      });
    }
    function combineReducers(reducers) {
      var reducerKeys = Object.keys(reducers);
      var finalReducers = {};
      for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];
        if (typeof reducers[key] === 'function') {
          finalReducers[key] = reducers[key];
        }
      }
      var finalReducerKeys = Object.keys(finalReducers);
      var sanityError;
      try {
        assertReducerSanity(finalReducers);
      } catch (e) {
        sanityError = e;
      }
      return function combination() {
        var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var action = arguments[1];
        if (sanityError) {
          throw sanityError;
        }
        if ("production" !== 'production') {
          var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
          if (warningMessage) {
            (0, _warning2["default"])(warningMessage);
          }
        }
        var hasChanged = false;
        var nextState = {};
        for (var i = 0; i < finalReducerKeys.length; i++) {
          var key = finalReducerKeys[i];
          var reducer = finalReducers[key];
          var previousStateForKey = state[key];
          var nextStateForKey = reducer(previousStateForKey, action);
          if (typeof nextStateForKey === 'undefined') {
            var errorMessage = getUndefinedStateErrorMessage(key, action);
            throw new Error(errorMessage);
          }
          nextState[key] = nextStateForKey;
          hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
      };
    }
  })($__require('30'));
  return module.exports;
});

$__System.registerDynamic("51", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  exports["default"] = bindActionCreators;
  function bindActionCreator(actionCreator, dispatch) {
    return function() {
      return dispatch(actionCreator.apply(undefined, arguments));
    };
  }
  function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === 'function') {
      return bindActionCreator(actionCreators, dispatch);
    }
    if (typeof actionCreators !== 'object' || actionCreators === null) {
      throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
    }
    var keys = Object.keys(actionCreators);
    var boundActionCreators = {};
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var actionCreator = actionCreators[key];
      if (typeof actionCreator === 'function') {
        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
      }
    }
    return boundActionCreators;
  }
  return module.exports;
});

$__System.registerDynamic("52", ["53"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  exports["default"] = applyMiddleware;
  var _compose = $__require('53');
  var _compose2 = _interopRequireDefault(_compose);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  }
  function applyMiddleware() {
    for (var _len = arguments.length,
        middlewares = Array(_len),
        _key = 0; _key < _len; _key++) {
      middlewares[_key] = arguments[_key];
    }
    return function(createStore) {
      return function(reducer, initialState, enhancer) {
        var store = createStore(reducer, initialState, enhancer);
        var _dispatch = store.dispatch;
        var chain = [];
        var middlewareAPI = {
          getState: store.getState,
          dispatch: function dispatch(action) {
            return _dispatch(action);
          }
        };
        chain = middlewares.map(function(middleware) {
          return middleware(middlewareAPI);
        });
        _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);
        return _extends({}, store, {dispatch: _dispatch});
      };
    };
  }
  return module.exports;
});

$__System.registerDynamic("53", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  exports["default"] = compose;
  function compose() {
    for (var _len = arguments.length,
        funcs = Array(_len),
        _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }
    if (funcs.length === 0) {
      return function(arg) {
        return arg;
      };
    } else {
      var _ret = function() {
        var last = funcs[funcs.length - 1];
        var rest = funcs.slice(0, -1);
        return {v: function v() {
            return rest.reduceRight(function(composed, f) {
              return f(composed);
            }, last.apply(undefined, arguments));
          }};
      }();
      if (typeof _ret === "object")
        return _ret.v;
    }
  }
  return module.exports;
});

$__System.registerDynamic("50", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  exports["default"] = warning;
  function warning(message) {
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (e) {}
  }
  return module.exports;
});

$__System.registerDynamic("54", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var process = module.exports = {};
  var cachedSetTimeout;
  var cachedClearTimeout;
  (function() {
    try {
      cachedSetTimeout = setTimeout;
    } catch (e) {
      cachedSetTimeout = function() {
        throw new Error('setTimeout is not defined');
      };
    }
    try {
      cachedClearTimeout = clearTimeout;
    } catch (e) {
      cachedClearTimeout = function() {
        throw new Error('clearTimeout is not defined');
      };
    }
  }());
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = cachedSetTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    cachedClearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      cachedSetTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("55", ["54"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('54');
  return module.exports;
});

$__System.registerDynamic("56", ["55"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__System._nodeRequire ? process : $__require('55');
  return module.exports;
});

$__System.registerDynamic("30", ["56"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('56');
  return module.exports;
});

$__System.registerDynamic("57", ["4a", "4f", "51", "52", "53", "50", "30"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
    var _createStore = $__require('4a');
    var _createStore2 = _interopRequireDefault(_createStore);
    var _combineReducers = $__require('4f');
    var _combineReducers2 = _interopRequireDefault(_combineReducers);
    var _bindActionCreators = $__require('51');
    var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
    var _applyMiddleware = $__require('52');
    var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
    var _compose = $__require('53');
    var _compose2 = _interopRequireDefault(_compose);
    var _warning = $__require('50');
    var _warning2 = _interopRequireDefault(_warning);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    function isCrushed() {}
    if ("production" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
      (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
    }
    exports.createStore = _createStore2["default"];
    exports.combineReducers = _combineReducers2["default"];
    exports.bindActionCreators = _bindActionCreators2["default"];
    exports.applyMiddleware = _applyMiddleware2["default"];
    exports.compose = _compose2["default"];
  })($__require('30'));
  return module.exports;
});

$__System.registerDynamic("58", ["57"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('57');
  return module.exports;
});

$__System.register('59', ['5b', '5a'], function (_export) {
    var _Object$assign, flatten;

    function onlyItemIds(channel) {
        return _Object$assign({}, channel, {
            items: channel.items.map(function (i) {
                return { guid: i.guid, pubDate: i.pubDate };
            }).sort(function (l, r) {
                if (Date.parse(l.pubDate) > Date.parse(r.pubDate)) return -1;
                if (Date.parse(l.pubDate) < Date.parse(r.pubDate)) return 1;
                return 0;
            }).map(function (i) {
                return i.guid;
            })
        });
    }

    function channels(state, action) {
        if (state === undefined) state = {};

        switch (action.type) {
            case 'receive channel':
                return _Object$assign({}, state, flatten([onlyItemIds(action.channel)], function (c) {
                    return c.id;
                }));
            case 'request channel':
                return _Object$assign({}, state, flatten([{ id: action.id, requested: true }], function (c) {
                    return c.id;
                }));
            case 'save channel':
                return _Object$assign({}, state, flatten([{ id: action.id, saving: true }], function (c) {
                    return c.id;
                }));
            default:
                return state;
        }
    }

    return {
        setters: [function (_b) {
            _Object$assign = _b['default'];
        }, function (_a) {
            flatten = _a['default'];
        }],
        execute: function () {
            'use strict';

            _export('default', channels);
        }
    };
});
$__System.register("5a", [], function (_export) {
    "use strict";

    _export("default", flatten);

    function flatten() {
        var a = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
        var idSelector = arguments.length <= 1 || arguments[1] === undefined ? function (i) {
            return i.id;
        } : arguments[1];

        return a.reduce(function (f, i) {
            f[idSelector(i)] = i;
            return f;
        }, {});
    }

    return {
        setters: [],
        execute: function () {}
    };
});
$__System.register('5c', ['5b', '5a'], function (_export) {
    var _Object$assign, flatten;

    function items(state, action) {
        if (state === undefined) state = {};

        switch (action.type) {
            case 'receive channel':
                return _Object$assign({}, state, flatten(action.channel.items, function (i) {
                    return i.guid;
                }));
            default:
                return state;
        }
    }

    return {
        setters: [function (_b) {
            _Object$assign = _b['default'];
        }, function (_a) {
            flatten = _a['default'];
        }],
        execute: function () {
            'use strict';

            _export('default', items);
        }
    };
});
$__System.registerDynamic("2d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("2a", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("25", ["2a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('2a');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});

$__System.registerDynamic("14", ["2d", "23", "25"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('2d'),
      core = $__require('23'),
      ctx = $__require('25'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});

$__System.registerDynamic("3", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});

$__System.registerDynamic("9", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("5d", ["9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('9');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("21", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});

$__System.registerDynamic("3d", ["21"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('21');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});

$__System.registerDynamic("34", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

$__System.registerDynamic("5e", ["3", "5d", "3d", "34"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('3'),
      toObject = $__require('5d'),
      IObject = $__require('3d');
  module.exports = $__require('34')(function() {
    var a = Object.assign,
        A = {},
        B = {},
        S = Symbol(),
        K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function(k) {
      B[k] = k;
    });
    return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
  }) ? function assign(target, source) {
    var T = toObject(target),
        $$ = arguments,
        $$len = $$.length,
        index = 1,
        getKeys = $.getKeys,
        getSymbols = $.getSymbols,
        isEnum = $.isEnum;
    while ($$len > index) {
      var S = IObject($$[index++]),
          keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
          length = keys.length,
          j = 0,
          key;
      while (length > j)
        if (isEnum.call(S, key = keys[j++]))
          T[key] = S[key];
    }
    return T;
  } : Object.assign;
  return module.exports;
});

$__System.registerDynamic("5f", ["14", "5e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('14');
  $export($export.S + $export.F, 'Object', {assign: $__require('5e')});
  return module.exports;
});

$__System.registerDynamic("23", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("60", ["5f", "23"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('5f');
  module.exports = $__require('23').Object.assign;
  return module.exports;
});

$__System.registerDynamic("5b", ["60"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('60'),
    __esModule: true
  };
  return module.exports;
});

$__System.register('61', ['5b'], function (_export) {
    var _Object$assign;

    function selectedItem(state, action) {
        if (state === undefined) state = {};

        switch (action.type) {
            case 'select item':
                return _Object$assign({}, state, { guid: action.guid });
            default:
                return state;
        }
    }

    return {
        setters: [function (_b) {
            _Object$assign = _b['default'];
        }],
        execute: function () {
            'use strict';

            _export('default', selectedItem);
        }
    };
});
$__System.register('62', ['5', '42', '43', '46', '58', '59', '61', '5c'], function (_export) {
    var _createClass, ajax, _classCallCheck, cfFrom, rssFrom, createStore, combineReducers, channels, selectedItem, items, clusterfriend, ClusterfriendSite;

    return {
        setters: [function (_) {
            _createClass = _['default'];
        }, function (_3) {
            ajax = _3['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }, function (_4) {
            cfFrom = _4.cfFrom;
            rssFrom = _4.rssFrom;
        }, function (_5) {
            createStore = _5.createStore;
            combineReducers = _5.combineReducers;
        }, function (_6) {
            channels = _6['default'];
        }, function (_7) {
            selectedItem = _7['default'];
        }, function (_c) {
            items = _c['default'];
        }],
        execute: function () {
            'use strict';

            clusterfriend = combineReducers({
                channels: channels,
                items: items,
                selectedItem: selectedItem
            });

            ClusterfriendSite = (function () {
                function ClusterfriendSite(spec) {
                    _classCallCheck(this, ClusterfriendSite);

                    this.store = createStore(clusterfriend);

                    var s = spec || {};
                    this.feedurl = s.feedurl || './feed.xml';
                    if (!!s.subscription) this.store.subscribe(s.subscription);
                }

                _createClass(ClusterfriendSite, [{
                    key: 'loadFeed',
                    value: function loadFeed() {
                        var _this = this;

                        ajax(this.feedurl).errorOn(function (xhr) {
                            return xhr.status > 399;
                        }).get().then(function (xhr) {
                            var cf = cfFrom(xhr.response, _this.feedurl);
                            _this.store.dispatch({
                                type: 'receive channel',
                                channel: cf
                            });
                            console.log(store.getState());

                            console.log(rssFrom(cf));

                            _this.store.dispatch({
                                type: 'select item',
                                guid: 'http://chancedixon.ca/?p=173'
                            });
                        });
                    }
                }]);

                return ClusterfriendSite;
            })();

            _export('default', ClusterfriendSite);
        }
    };
});
$__System.registerDynamic("63", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  ;
  (function(window, undefined) {
    'use strict';
    var riot = {
      version: 'v2.4.1',
      settings: {}
    },
        __uid = 0,
        __virtualDom = [],
        __tagImpl = {},
        GLOBAL_MIXIN = '__global_mixin',
        RIOT_PREFIX = 'riot-',
        RIOT_TAG = RIOT_PREFIX + 'tag',
        RIOT_TAG_IS = 'data-is',
        T_STRING = 'string',
        T_OBJECT = 'object',
        T_UNDEF = 'undefined',
        T_FUNCTION = 'function',
        SPECIAL_TAGS_REGEX = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,
        RESERVED_WORDS_BLACKLIST = /^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|parent|opts|trigger|o(?:n|ff|ne))$/,
        SVG_TAGS_LIST = ['altGlyph', 'animate', 'animateColor', 'circle', 'clipPath', 'defs', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feFlood', 'feGaussianBlur', 'feImage', 'feMerge', 'feMorphology', 'feOffset', 'feSpecularLighting', 'feTile', 'feTurbulence', 'filter', 'font', 'foreignObject', 'g', 'glyph', 'glyphRef', 'image', 'line', 'linearGradient', 'marker', 'mask', 'missing-glyph', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'switch', 'symbol', 'text', 'textPath', 'tref', 'tspan', 'use'],
        IE_VERSION = (window && window.document || {}).documentMode | 0,
        FIREFOX = window && !!window.InstallTrigger;
    riot.observable = function(el) {
      el = el || {};
      var callbacks = {},
          slice = Array.prototype.slice;
      function onEachEvent(e, fn) {
        var es = e.split(' '),
            l = es.length,
            i = 0,
            name,
            indx;
        for (; i < l; i++) {
          name = es[i];
          indx = name.indexOf('.');
          if (name)
            fn(~indx ? name.substring(0, indx) : name, i, ~indx ? name.slice(indx + 1) : null);
        }
      }
      Object.defineProperties(el, {
        on: {
          value: function(events, fn) {
            if (typeof fn != 'function')
              return el;
            onEachEvent(events, function(name, pos, ns) {
              (callbacks[name] = callbacks[name] || []).push(fn);
              fn.typed = pos > 0;
              fn.ns = ns;
            });
            return el;
          },
          enumerable: false,
          writable: false,
          configurable: false
        },
        off: {
          value: function(events, fn) {
            if (events == '*' && !fn)
              callbacks = {};
            else {
              onEachEvent(events, function(name, pos, ns) {
                if (fn || ns) {
                  var arr = callbacks[name];
                  for (var i = 0,
                      cb; cb = arr && arr[i]; ++i) {
                    if (cb == fn || ns && cb.ns == ns)
                      arr.splice(i--, 1);
                  }
                } else
                  delete callbacks[name];
              });
            }
            return el;
          },
          enumerable: false,
          writable: false,
          configurable: false
        },
        one: {
          value: function(events, fn) {
            function on() {
              el.off(events, on);
              fn.apply(el, arguments);
            }
            return el.on(events, on);
          },
          enumerable: false,
          writable: false,
          configurable: false
        },
        trigger: {
          value: function(events) {
            var arglen = arguments.length - 1,
                args = new Array(arglen),
                fns;
            for (var i = 0; i < arglen; i++) {
              args[i] = arguments[i + 1];
            }
            onEachEvent(events, function(name, pos, ns) {
              fns = slice.call(callbacks[name] || [], 0);
              for (var i = 0,
                  fn; fn = fns[i]; ++i) {
                if (fn.busy)
                  continue;
                fn.busy = 1;
                if (!ns || fn.ns == ns)
                  fn.apply(el, fn.typed ? [name].concat(args) : args);
                if (fns[i] !== fn) {
                  i--;
                }
                fn.busy = 0;
              }
              if (callbacks['*'] && name != '*')
                el.trigger.apply(el, ['*', name].concat(args));
            });
            return el;
          },
          enumerable: false,
          writable: false,
          configurable: false
        }
      });
      return el;
    };
    ;
    (function(riot) {
      var RE_ORIGIN = /^.+?\/\/+[^\/]+/,
          EVENT_LISTENER = 'EventListener',
          REMOVE_EVENT_LISTENER = 'remove' + EVENT_LISTENER,
          ADD_EVENT_LISTENER = 'add' + EVENT_LISTENER,
          HAS_ATTRIBUTE = 'hasAttribute',
          REPLACE = 'replace',
          POPSTATE = 'popstate',
          HASHCHANGE = 'hashchange',
          TRIGGER = 'trigger',
          MAX_EMIT_STACK_LEVEL = 3,
          win = typeof window != 'undefined' && window,
          doc = typeof document != 'undefined' && document,
          hist = win && history,
          loc = win && (hist.location || win.location),
          prot = Router.prototype,
          clickEvent = doc && doc.ontouchstart ? 'touchstart' : 'click',
          started = false,
          central = riot.observable(),
          routeFound = false,
          debouncedEmit,
          base,
          current,
          parser,
          secondParser,
          emitStack = [],
          emitStackLevel = 0;
      function DEFAULT_PARSER(path) {
        return path.split(/[/?#]/);
      }
      function DEFAULT_SECOND_PARSER(path, filter) {
        var re = new RegExp('^' + filter[REPLACE](/\*/g, '([^/?#]+?)')[REPLACE](/\.\./, '.*') + '$'),
            args = path.match(re);
        if (args)
          return args.slice(1);
      }
      function debounce(fn, delay) {
        var t;
        return function() {
          clearTimeout(t);
          t = setTimeout(fn, delay);
        };
      }
      function start(autoExec) {
        debouncedEmit = debounce(emit, 1);
        win[ADD_EVENT_LISTENER](POPSTATE, debouncedEmit);
        win[ADD_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
        doc[ADD_EVENT_LISTENER](clickEvent, click);
        if (autoExec)
          emit(true);
      }
      function Router() {
        this.$ = [];
        riot.observable(this);
        central.on('stop', this.s.bind(this));
        central.on('emit', this.e.bind(this));
      }
      function normalize(path) {
        return path[REPLACE](/^\/|\/$/, '');
      }
      function isString(str) {
        return typeof str == 'string';
      }
      function getPathFromRoot(href) {
        return (href || loc.href)[REPLACE](RE_ORIGIN, '');
      }
      function getPathFromBase(href) {
        return base[0] == '#' ? (href || loc.href || '').split(base)[1] || '' : (loc ? getPathFromRoot(href) : href || '')[REPLACE](base, '');
      }
      function emit(force) {
        var isRoot = emitStackLevel == 0;
        if (MAX_EMIT_STACK_LEVEL <= emitStackLevel)
          return;
        emitStackLevel++;
        emitStack.push(function() {
          var path = getPathFromBase();
          if (force || path != current) {
            central[TRIGGER]('emit', path);
            current = path;
          }
        });
        if (isRoot) {
          while (emitStack.length) {
            emitStack[0]();
            emitStack.shift();
          }
          emitStackLevel = 0;
        }
      }
      function click(e) {
        if (e.which != 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.defaultPrevented)
          return;
        var el = e.target;
        while (el && el.nodeName != 'A')
          el = el.parentNode;
        if (!el || el.nodeName != 'A' || el[HAS_ATTRIBUTE]('download') || !el[HAS_ATTRIBUTE]('href') || el.target && el.target != '_self' || el.href.indexOf(loc.href.match(RE_ORIGIN)[0]) == -1)
          return;
        if (el.href != loc.href) {
          if (el.href.split('#')[0] == loc.href.split('#')[0] || base != '#' && getPathFromRoot(el.href).indexOf(base) !== 0 || !go(getPathFromBase(el.href), el.title || doc.title))
            return;
        }
        e.preventDefault();
      }
      function go(path, title, shouldReplace) {
        if (hist) {
          path = base + normalize(path);
          title = title || doc.title;
          shouldReplace ? hist.replaceState(null, title, path) : hist.pushState(null, title, path);
          doc.title = title;
          routeFound = false;
          emit();
          return routeFound;
        }
        return central[TRIGGER]('emit', getPathFromBase(path));
      }
      prot.m = function(first, second, third) {
        if (isString(first) && (!second || isString(second)))
          go(first, second, third || false);
        else if (second)
          this.r(first, second);
        else
          this.r('@', first);
      };
      prot.s = function() {
        this.off('*');
        this.$ = [];
      };
      prot.e = function(path) {
        this.$.concat('@').some(function(filter) {
          var args = (filter == '@' ? parser : secondParser)(normalize(path), normalize(filter));
          if (typeof args != 'undefined') {
            this[TRIGGER].apply(null, [filter].concat(args));
            return routeFound = true;
          }
        }, this);
      };
      prot.r = function(filter, action) {
        if (filter != '@') {
          filter = '/' + normalize(filter);
          this.$.push(filter);
        }
        this.on(filter, action);
      };
      var mainRouter = new Router();
      var route = mainRouter.m.bind(mainRouter);
      route.create = function() {
        var newSubRouter = new Router();
        var router = newSubRouter.m.bind(newSubRouter);
        router.stop = newSubRouter.s.bind(newSubRouter);
        return router;
      };
      route.base = function(arg) {
        base = arg || '#';
        current = getPathFromBase();
      };
      route.exec = function() {
        emit(true);
      };
      route.parser = function(fn, fn2) {
        if (!fn && !fn2) {
          parser = DEFAULT_PARSER;
          secondParser = DEFAULT_SECOND_PARSER;
        }
        if (fn)
          parser = fn;
        if (fn2)
          secondParser = fn2;
      };
      route.query = function() {
        var q = {};
        var href = loc.href || current;
        href[REPLACE](/[?&](.+?)=([^&]*)/g, function(_, k, v) {
          q[k] = v;
        });
        return q;
      };
      route.stop = function() {
        if (started) {
          if (win) {
            win[REMOVE_EVENT_LISTENER](POPSTATE, debouncedEmit);
            win[REMOVE_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
            doc[REMOVE_EVENT_LISTENER](clickEvent, click);
          }
          central[TRIGGER]('stop');
          started = false;
        }
      };
      route.start = function(autoExec) {
        if (!started) {
          if (win) {
            if (document.readyState == 'complete')
              start(autoExec);
            else
              win[ADD_EVENT_LISTENER]('load', function() {
                setTimeout(function() {
                  start(autoExec);
                }, 1);
              });
          }
          started = true;
        }
      };
      route.base();
      route.parser();
      riot.route = route;
    })(riot);
    var brackets = (function(UNDEF) {
      var REGLOB = 'g',
          R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,
          R_STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,
          S_QBLOCKS = R_STRINGS.source + '|' + /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + '|' + /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,
          FINDBRACES = {
            '(': RegExp('([()])|' + S_QBLOCKS, REGLOB),
            '[': RegExp('([[\\]])|' + S_QBLOCKS, REGLOB),
            '{': RegExp('([{}])|' + S_QBLOCKS, REGLOB)
          },
          DEFAULT = '{ }';
      var _pairs = ['{', '}', '{', '}', /{[^}]*}/, /\\([{}])/g, /\\({)|{/g, RegExp('\\\\(})|([[({])|(})|' + S_QBLOCKS, REGLOB), DEFAULT, /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/, /(^|[^\\]){=[\S\s]*?}/];
      var cachedBrackets = UNDEF,
          _regex,
          _cache = [],
          _settings;
      function _loopback(re) {
        return re;
      }
      function _rewrite(re, bp) {
        if (!bp)
          bp = _cache;
        return new RegExp(re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : '');
      }
      function _create(pair) {
        if (pair === DEFAULT)
          return _pairs;
        var arr = pair.split(' ');
        if (arr.length !== 2 || /[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(pair)) {
          throw new Error('Unsupported brackets "' + pair + '"');
        }
        arr = arr.concat(pair.replace(/(?=[[\]()*+?.^$|])/g, '\\').split(' '));
        arr[4] = _rewrite(arr[1].length > 1 ? /{[\S\s]*?}/ : _pairs[4], arr);
        arr[5] = _rewrite(pair.length > 3 ? /\\({|})/g : _pairs[5], arr);
        arr[6] = _rewrite(_pairs[6], arr);
        arr[7] = RegExp('\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCKS, REGLOB);
        arr[8] = pair;
        return arr;
      }
      function _brackets(reOrIdx) {
        return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx];
      }
      _brackets.split = function split(str, tmpl, _bp) {
        if (!_bp)
          _bp = _cache;
        var parts = [],
            match,
            isexpr,
            start,
            pos,
            re = _bp[6];
        isexpr = start = re.lastIndex = 0;
        while ((match = re.exec(str))) {
          pos = match.index;
          if (isexpr) {
            if (match[2]) {
              re.lastIndex = skipBraces(str, match[2], re.lastIndex);
              continue;
            }
            if (!match[3]) {
              continue;
            }
          }
          if (!match[1]) {
            unescapeStr(str.slice(start, pos));
            start = re.lastIndex;
            re = _bp[6 + (isexpr ^= 1)];
            re.lastIndex = start;
          }
        }
        if (str && start < str.length) {
          unescapeStr(str.slice(start));
        }
        return parts;
        function unescapeStr(s) {
          if (tmpl || isexpr) {
            parts.push(s && s.replace(_bp[5], '$1'));
          } else {
            parts.push(s);
          }
        }
        function skipBraces(s, ch, ix) {
          var match,
              recch = FINDBRACES[ch];
          recch.lastIndex = ix;
          ix = 1;
          while ((match = recch.exec(s))) {
            if (match[1] && !(match[1] === ch ? ++ix : --ix))
              break;
          }
          return ix ? s.length : recch.lastIndex;
        }
      };
      _brackets.hasExpr = function hasExpr(str) {
        return _cache[4].test(str);
      };
      _brackets.loopKeys = function loopKeys(expr) {
        var m = expr.match(_cache[9]);
        return m ? {
          key: m[1],
          pos: m[2],
          val: _cache[0] + m[3].trim() + _cache[1]
        } : {val: expr.trim()};
      };
      _brackets.array = function array(pair) {
        return pair ? _create(pair) : _cache;
      };
      function _reset(pair) {
        if ((pair || (pair = DEFAULT)) !== _cache[8]) {
          _cache = _create(pair);
          _regex = pair === DEFAULT ? _loopback : _rewrite;
          _cache[9] = _regex(_pairs[9]);
        }
        cachedBrackets = pair;
      }
      function _setSettings(o) {
        var b;
        o = o || {};
        b = o.brackets;
        Object.defineProperty(o, 'brackets', {
          set: _reset,
          get: function() {
            return cachedBrackets;
          },
          enumerable: true
        });
        _settings = o;
        _reset(b);
      }
      Object.defineProperty(_brackets, 'settings', {
        set: _setSettings,
        get: function() {
          return _settings;
        }
      });
      _brackets.settings = typeof riot !== 'undefined' && riot.settings || {};
      _brackets.set = _reset;
      _brackets.R_STRINGS = R_STRINGS;
      _brackets.R_MLCOMMS = R_MLCOMMS;
      _brackets.S_QBLOCKS = S_QBLOCKS;
      return _brackets;
    })();
    var tmpl = (function() {
      var _cache = {};
      function _tmpl(str, data) {
        if (!str)
          return str;
        return (_cache[str] || (_cache[str] = _create(str))).call(data, _logErr);
      }
      _tmpl.haveRaw = brackets.hasRaw;
      _tmpl.hasExpr = brackets.hasExpr;
      _tmpl.loopKeys = brackets.loopKeys;
      _tmpl.errorHandler = null;
      function _logErr(err, ctx) {
        if (_tmpl.errorHandler) {
          err.riotData = {
            tagName: ctx && ctx.root && ctx.root.tagName,
            _riot_id: ctx && ctx._riot_id
          };
          _tmpl.errorHandler(err);
        }
      }
      function _create(str) {
        var expr = _getTmpl(str);
        if (expr.slice(0, 11) !== 'try{return ')
          expr = 'return ' + expr;
        return new Function('E', expr + ';');
      }
      var CH_IDEXPR = '\u2057',
          RE_CSNAME = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,
          RE_QBLOCK = RegExp(brackets.S_QBLOCKS, 'g'),
          RE_DQUOTE = /\u2057/g,
          RE_QBMARK = /\u2057(\d+)~/g;
      function _getTmpl(str) {
        var qstr = [],
            expr,
            parts = brackets.split(str.replace(RE_DQUOTE, '"'), 1);
        if (parts.length > 2 || parts[0]) {
          var i,
              j,
              list = [];
          for (i = j = 0; i < parts.length; ++i) {
            expr = parts[i];
            if (expr && (expr = i & 1 ? _parseExpr(expr, 1, qstr) : '"' + expr.replace(/\\/g, '\\\\').replace(/\r\n?|\n/g, '\\n').replace(/"/g, '\\"') + '"'))
              list[j++] = expr;
          }
          expr = j < 2 ? list[0] : '[' + list.join(',') + '].join("")';
        } else {
          expr = _parseExpr(parts[1], 0, qstr);
        }
        if (qstr[0]) {
          expr = expr.replace(RE_QBMARK, function(_, pos) {
            return qstr[pos].replace(/\r/g, '\\r').replace(/\n/g, '\\n');
          });
        }
        return expr;
      }
      var RE_BREND = {
        '(': /[()]/g,
        '[': /[[\]]/g,
        '{': /[{}]/g
      };
      function _parseExpr(expr, asText, qstr) {
        expr = expr.replace(RE_QBLOCK, function(s, div) {
          return s.length > 2 && !div ? CH_IDEXPR + (qstr.push(s) - 1) + '~' : s;
        }).replace(/\s+/g, ' ').trim().replace(/\ ?([[\({},?\.:])\ ?/g, '$1');
        if (expr) {
          var list = [],
              cnt = 0,
              match;
          while (expr && (match = expr.match(RE_CSNAME)) && !match.index) {
            var key,
                jsb,
                re = /,|([[{(])|$/g;
            expr = RegExp.rightContext;
            key = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, ' ') : match[1];
            while (jsb = (match = re.exec(expr))[1])
              skipBraces(jsb, re);
            jsb = expr.slice(0, match.index);
            expr = RegExp.rightContext;
            list[cnt++] = _wrapExpr(jsb, 1, key);
          }
          expr = !cnt ? _wrapExpr(expr, asText) : cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0];
        }
        return expr;
        function skipBraces(ch, re) {
          var mm,
              lv = 1,
              ir = RE_BREND[ch];
          ir.lastIndex = re.lastIndex;
          while (mm = ir.exec(expr)) {
            if (mm[0] === ch)
              ++lv;
            else if (!--lv)
              break;
          }
          re.lastIndex = lv ? expr.length : ir.lastIndex;
        }
      }
      var JS_CONTEXT = '"in this?this:' + (typeof window !== 'object' ? 'global' : 'window') + ').',
          JS_VARNAME = /[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
          JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;
      function _wrapExpr(expr, asText, key) {
        var tb;
        expr = expr.replace(JS_VARNAME, function(match, p, mvar, pos, s) {
          if (mvar) {
            pos = tb ? 0 : pos + match.length;
            if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
              match = p + '("' + mvar + JS_CONTEXT + mvar;
              if (pos)
                tb = (s = s[pos]) === '.' || s === '(' || s === '[';
            } else if (pos) {
              tb = !JS_NOPROPS.test(s.slice(pos));
            }
          }
          return match;
        });
        if (tb) {
          expr = 'try{return ' + expr + '}catch(e){E(e,this)}';
        }
        if (key) {
          expr = (tb ? 'function(){' + expr + '}.call(this)' : '(' + expr + ')') + '?"' + key + '":""';
        } else if (asText) {
          expr = 'function(v){' + (tb ? expr.replace('return ', 'v=') : 'v=(' + expr + ')') + ';return v||v===0?v:""}.call(this)';
        }
        return expr;
      }
      _tmpl.parse = function(s) {
        return s;
      };
      _tmpl.version = brackets.version = 'v2.4.0';
      return _tmpl;
    })();
    var mkdom = (function _mkdom() {
      var reHasYield = /<yield\b/i,
          reYieldAll = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/ig,
          reYieldSrc = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/ig,
          reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig;
      var rootEls = {
        tr: 'tbody',
        th: 'tr',
        td: 'tr',
        col: 'colgroup'
      },
          tblTags = IE_VERSION && IE_VERSION < 10 ? SPECIAL_TAGS_REGEX : /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;
      function _mkdom(templ, html) {
        var match = templ && templ.match(/^\s*<([-\w]+)/),
            tagName = match && match[1].toLowerCase(),
            el = mkEl('div', isSVGTag(tagName));
        templ = replaceYield(templ, html);
        if (tblTags.test(tagName))
          el = specialTags(el, templ, tagName);
        else
          setInnerHTML(el, templ);
        el.stub = true;
        return el;
      }
      function specialTags(el, templ, tagName) {
        var select = tagName[0] === 'o',
            parent = select ? 'select>' : 'table>';
        el.innerHTML = '<' + parent + templ.trim() + '</' + parent;
        parent = el.firstChild;
        if (select) {
          parent.selectedIndex = -1;
        } else {
          var tname = rootEls[tagName];
          if (tname && parent.childElementCount === 1)
            parent = $(tname, parent);
        }
        return parent;
      }
      function replaceYield(templ, html) {
        if (!reHasYield.test(templ))
          return templ;
        var src = {};
        html = html && html.replace(reYieldSrc, function(_, ref, text) {
          src[ref] = src[ref] || text;
          return '';
        }).trim();
        return templ.replace(reYieldDest, function(_, ref, def) {
          return src[ref] || def || '';
        }).replace(reYieldAll, function(_, def) {
          return html || def || '';
        });
      }
      return _mkdom;
    })();
    function mkitem(expr, key, val) {
      var item = {};
      item[expr.key] = key;
      if (expr.pos)
        item[expr.pos] = val;
      return item;
    }
    function unmountRedundant(items, tags) {
      var i = tags.length,
          j = items.length,
          t;
      while (i > j) {
        t = tags[--i];
        tags.splice(i, 1);
        t.unmount();
      }
    }
    function moveNestedTags(child, i) {
      Object.keys(child.tags).forEach(function(tagName) {
        var tag = child.tags[tagName];
        if (isArray(tag))
          each(tag, function(t) {
            moveChildTag(t, tagName, i);
          });
        else
          moveChildTag(tag, tagName, i);
      });
    }
    function addVirtual(tag, src, target) {
      var el = tag._root,
          sib;
      tag._virts = [];
      while (el) {
        sib = el.nextSibling;
        if (target)
          src.insertBefore(el, target._root);
        else
          src.appendChild(el);
        tag._virts.push(el);
        el = sib;
      }
    }
    function moveVirtual(tag, src, target, len) {
      var el = tag._root,
          sib,
          i = 0;
      for (; i < len; i++) {
        sib = el.nextSibling;
        src.insertBefore(el, target._root);
        el = sib;
      }
    }
    function _each(dom, parent, expr) {
      remAttr(dom, 'each');
      var mustReorder = typeof getAttr(dom, 'no-reorder') !== T_STRING || remAttr(dom, 'no-reorder'),
          tagName = getTagName(dom),
          impl = __tagImpl[tagName] || {tmpl: getOuterHTML(dom)},
          useRoot = SPECIAL_TAGS_REGEX.test(tagName),
          root = dom.parentNode,
          ref = document.createTextNode(''),
          child = getTag(dom),
          isOption = tagName.toLowerCase() === 'option',
          tags = [],
          oldItems = [],
          hasKeys,
          isVirtual = dom.tagName == 'VIRTUAL';
      expr = tmpl.loopKeys(expr);
      root.insertBefore(ref, dom);
      parent.one('before-mount', function() {
        dom.parentNode.removeChild(dom);
        if (root.stub)
          root = parent.root;
      }).on('update', function() {
        var items = tmpl(expr.val, parent),
            frag = document.createDocumentFragment();
        if (!isArray(items)) {
          hasKeys = items || false;
          items = hasKeys ? Object.keys(items).map(function(key) {
            return mkitem(expr, key, items[key]);
          }) : [];
        }
        var i = 0,
            itemsLength = items.length;
        for (; i < itemsLength; i++) {
          var item = items[i],
              _mustReorder = mustReorder && typeof item == T_OBJECT && !hasKeys,
              oldPos = oldItems.indexOf(item),
              pos = ~oldPos && _mustReorder ? oldPos : i,
              tag = tags[pos];
          item = !hasKeys && expr.key ? mkitem(expr, item, i) : item;
          if (!_mustReorder && !tag || _mustReorder && !~oldPos || !tag) {
            tag = new Tag(impl, {
              parent: parent,
              isLoop: true,
              hasImpl: !!__tagImpl[tagName],
              root: useRoot ? root : dom.cloneNode(),
              item: item
            }, dom.innerHTML);
            tag.mount();
            if (isVirtual)
              tag._root = tag.root.firstChild;
            if (i == tags.length || !tags[i]) {
              if (isVirtual)
                addVirtual(tag, frag);
              else
                frag.appendChild(tag.root);
            } else {
              if (isVirtual)
                addVirtual(tag, root, tags[i]);
              else
                root.insertBefore(tag.root, tags[i].root);
              oldItems.splice(i, 0, item);
            }
            tags.splice(i, 0, tag);
            pos = i;
          } else
            tag.update(item, true);
          if (pos !== i && _mustReorder && tags[i]) {
            if (isVirtual)
              moveVirtual(tag, root, tags[i], dom.childNodes.length);
            else
              root.insertBefore(tag.root, tags[i].root);
            if (expr.pos)
              tag[expr.pos] = i;
            tags.splice(i, 0, tags.splice(pos, 1)[0]);
            oldItems.splice(i, 0, oldItems.splice(pos, 1)[0]);
            if (!child && tag.tags)
              moveNestedTags(tag, i);
          }
          tag._item = item;
          defineProperty(tag, '_parent', parent);
        }
        unmountRedundant(items, tags);
        if (isOption) {
          root.appendChild(frag);
          if (FIREFOX && !root.multiple) {
            for (var n = 0; n < root.length; n++) {
              if (root[n].__riot1374) {
                root.selectedIndex = n;
                delete root[n].__riot1374;
                break;
              }
            }
          }
        } else
          root.insertBefore(frag, ref);
        if (child)
          parent.tags[tagName] = tags;
        oldItems = items.slice();
      });
    }
    var styleManager = (function(_riot) {
      if (!window)
        return {
          add: function() {},
          inject: function() {}
        };
      var styleNode = (function() {
        var newNode = mkEl('style');
        setAttr(newNode, 'type', 'text/css');
        var userNode = $('style[type=riot]');
        if (userNode) {
          if (userNode.id)
            newNode.id = userNode.id;
          userNode.parentNode.replaceChild(newNode, userNode);
        } else
          document.getElementsByTagName('head')[0].appendChild(newNode);
        return newNode;
      })();
      var cssTextProp = styleNode.styleSheet,
          stylesToInject = '';
      Object.defineProperty(_riot, 'styleNode', {
        value: styleNode,
        writable: true
      });
      return {
        add: function(css) {
          stylesToInject += css;
        },
        inject: function() {
          if (stylesToInject) {
            if (cssTextProp)
              cssTextProp.cssText += stylesToInject;
            else
              styleNode.innerHTML += stylesToInject;
            stylesToInject = '';
          }
        }
      };
    })(riot);
    function parseNamedElements(root, tag, childTags, forceParsingNamed) {
      walk(root, function(dom) {
        if (dom.nodeType == 1) {
          dom.isLoop = dom.isLoop || (dom.parentNode && dom.parentNode.isLoop || getAttr(dom, 'each')) ? 1 : 0;
          if (childTags) {
            var child = getTag(dom);
            if (child && !dom.isLoop)
              childTags.push(initChildTag(child, {
                root: dom,
                parent: tag
              }, dom.innerHTML, tag));
          }
          if (!dom.isLoop || forceParsingNamed)
            setNamed(dom, tag, []);
        }
      });
    }
    function parseExpressions(root, tag, expressions) {
      function addExpr(dom, val, extra) {
        if (tmpl.hasExpr(val)) {
          expressions.push(extend({
            dom: dom,
            expr: val
          }, extra));
        }
      }
      walk(root, function(dom) {
        var type = dom.nodeType,
            attr;
        if (type == 3 && dom.parentNode.tagName != 'STYLE')
          addExpr(dom, dom.nodeValue);
        if (type != 1)
          return;
        attr = getAttr(dom, 'each');
        if (attr) {
          _each(dom, tag, attr);
          return false;
        }
        each(dom.attributes, function(attr) {
          var name = attr.name,
              bool = name.split('__')[1];
          addExpr(dom, attr.value, {
            attr: bool || name,
            bool: bool
          });
          if (bool) {
            remAttr(dom, name);
            return false;
          }
        });
        if (getTag(dom))
          return false;
      });
    }
    function Tag(impl, conf, innerHTML) {
      var self = riot.observable(this),
          opts = inherit(conf.opts) || {},
          parent = conf.parent,
          isLoop = conf.isLoop,
          hasImpl = conf.hasImpl,
          item = cleanUpData(conf.item),
          expressions = [],
          childTags = [],
          root = conf.root,
          tagName = root.tagName.toLowerCase(),
          attr = {},
          propsInSyncWithParent = [],
          dom;
      if (impl.name && root._tag)
        root._tag.unmount(true);
      this.isMounted = false;
      root.isLoop = isLoop;
      root._tag = this;
      defineProperty(this, '_riot_id', ++__uid);
      extend(this, {
        parent: parent,
        root: root,
        opts: opts
      }, item);
      defineProperty(this, 'tags', {});
      each(root.attributes, function(el) {
        var val = el.value;
        if (tmpl.hasExpr(val))
          attr[el.name] = val;
      });
      dom = mkdom(impl.tmpl, innerHTML);
      function updateOpts() {
        var ctx = hasImpl && isLoop ? self : parent || self;
        each(root.attributes, function(el) {
          var val = el.value;
          opts[toCamel(el.name)] = tmpl.hasExpr(val) ? tmpl(val, ctx) : val;
        });
        each(Object.keys(attr), function(name) {
          opts[toCamel(name)] = tmpl(attr[name], ctx);
        });
      }
      function normalizeData(data) {
        for (var key in item) {
          if (typeof self[key] !== T_UNDEF && isWritable(self, key))
            self[key] = data[key];
        }
      }
      function inheritFromParent() {
        if (!self.parent || !isLoop)
          return;
        each(Object.keys(self.parent), function(k) {
          var mustSync = !RESERVED_WORDS_BLACKLIST.test(k) && contains(propsInSyncWithParent, k);
          if (typeof self[k] === T_UNDEF || mustSync) {
            if (!mustSync)
              propsInSyncWithParent.push(k);
            self[k] = self.parent[k];
          }
        });
      }
      defineProperty(this, 'update', function(data, isInherited) {
        data = cleanUpData(data);
        inheritFromParent();
        if (data && isObject(item)) {
          normalizeData(data);
          item = data;
        }
        extend(self, data);
        updateOpts();
        self.trigger('update', data);
        update(expressions, self);
        if (isInherited && self.parent)
          self.parent.one('updated', function() {
            self.trigger('updated');
          });
        else
          rAF(function() {
            self.trigger('updated');
          });
        return this;
      });
      defineProperty(this, 'mixin', function() {
        each(arguments, function(mix) {
          var instance;
          mix = typeof mix === T_STRING ? riot.mixin(mix) : mix;
          if (isFunction(mix)) {
            instance = new mix();
            mix = mix.prototype;
          } else
            instance = mix;
          each(Object.getOwnPropertyNames(mix), function(key) {
            if (key != 'init')
              self[key] = isFunction(instance[key]) ? instance[key].bind(self) : instance[key];
          });
          if (instance.init)
            instance.init.bind(self)();
        });
        return this;
      });
      defineProperty(this, 'mount', function() {
        updateOpts();
        var globalMixin = riot.mixin(GLOBAL_MIXIN);
        if (globalMixin)
          for (var i in globalMixin)
            if (globalMixin.hasOwnProperty(i))
              self.mixin(globalMixin[i]);
        if (impl.fn)
          impl.fn.call(self, opts);
        parseExpressions(dom, self, expressions);
        toggle(true);
        if (impl.attrs)
          walkAttributes(impl.attrs, function(k, v) {
            setAttr(root, k, v);
          });
        if (impl.attrs || hasImpl)
          parseExpressions(self.root, self, expressions);
        if (!self.parent || isLoop)
          self.update(item);
        self.trigger('before-mount');
        if (isLoop && !hasImpl) {
          root = dom.firstChild;
        } else {
          while (dom.firstChild)
            root.appendChild(dom.firstChild);
          if (root.stub)
            root = parent.root;
        }
        defineProperty(self, 'root', root);
        if (isLoop)
          parseNamedElements(self.root, self.parent, null, true);
        if (!self.parent || self.parent.isMounted) {
          self.isMounted = true;
          self.trigger('mount');
        } else
          self.parent.one('mount', function() {
            if (!isInStub(self.root)) {
              self.parent.isMounted = self.isMounted = true;
              self.trigger('mount');
            }
          });
      });
      defineProperty(this, 'unmount', function(keepRootTag) {
        var el = root,
            p = el.parentNode,
            ptag,
            tagIndex = __virtualDom.indexOf(self);
        self.trigger('before-unmount');
        if (~tagIndex)
          __virtualDom.splice(tagIndex, 1);
        if (p) {
          if (parent) {
            ptag = getImmediateCustomParentTag(parent);
            if (isArray(ptag.tags[tagName]))
              each(ptag.tags[tagName], function(tag, i) {
                if (tag._riot_id == self._riot_id)
                  ptag.tags[tagName].splice(i, 1);
              });
            else
              ptag.tags[tagName] = undefined;
          } else
            while (el.firstChild)
              el.removeChild(el.firstChild);
          if (!keepRootTag)
            p.removeChild(el);
          else {
            remAttr(p, RIOT_TAG_IS);
            remAttr(p, RIOT_TAG);
          }
        }
        if (this._virts) {
          each(this._virts, function(v) {
            if (v.parentNode)
              v.parentNode.removeChild(v);
          });
        }
        self.trigger('unmount');
        toggle();
        self.off('*');
        self.isMounted = false;
        delete root._tag;
      });
      function onChildUpdate(data) {
        self.update(data, true);
      }
      function toggle(isMount) {
        each(childTags, function(child) {
          child[isMount ? 'mount' : 'unmount']();
        });
        if (!parent)
          return;
        var evt = isMount ? 'on' : 'off';
        if (isLoop)
          parent[evt]('unmount', self.unmount);
        else {
          parent[evt]('update', onChildUpdate)[evt]('unmount', self.unmount);
        }
      }
      parseNamedElements(dom, this, childTags);
    }
    function setEventHandler(name, handler, dom, tag) {
      dom[name] = function(e) {
        var ptag = tag._parent,
            item = tag._item,
            el;
        if (!item)
          while (ptag && !item) {
            item = ptag._item;
            ptag = ptag._parent;
          }
        e = e || window.event;
        if (isWritable(e, 'currentTarget'))
          e.currentTarget = dom;
        if (isWritable(e, 'target'))
          e.target = e.srcElement;
        if (isWritable(e, 'which'))
          e.which = e.charCode || e.keyCode;
        e.item = item;
        if (handler.call(tag, e) !== true && !/radio|check/.test(dom.type)) {
          if (e.preventDefault)
            e.preventDefault();
          e.returnValue = false;
        }
        if (!e.preventUpdate) {
          el = item ? getImmediateCustomParentTag(ptag) : tag;
          el.update();
        }
      };
    }
    function insertTo(root, node, before) {
      if (!root)
        return;
      root.insertBefore(before, node);
      root.removeChild(node);
    }
    function update(expressions, tag) {
      each(expressions, function(expr, i) {
        var dom = expr.dom,
            attrName = expr.attr,
            value = tmpl(expr.expr, tag),
            parent = expr.dom.parentNode;
        if (expr.bool) {
          value = !!value;
        } else if (value == null) {
          value = '';
        }
        if (expr.value === value) {
          return;
        }
        expr.value = value;
        if (!attrName) {
          value += '';
          if (parent) {
            if (parent.tagName === 'TEXTAREA') {
              parent.value = value;
              if (!IE_VERSION)
                dom.nodeValue = value;
            } else
              dom.nodeValue = value;
          }
          return;
        }
        if (attrName === 'value') {
          dom.value = value;
          return;
        }
        remAttr(dom, attrName);
        if (isFunction(value)) {
          setEventHandler(attrName, value, dom, tag);
        } else if (attrName == 'if') {
          var stub = expr.stub,
              add = function() {
                insertTo(stub.parentNode, stub, dom);
              },
              remove = function() {
                insertTo(dom.parentNode, dom, stub);
              };
          if (value) {
            if (stub) {
              add();
              dom.inStub = false;
              if (!isInStub(dom)) {
                walk(dom, function(el) {
                  if (el._tag && !el._tag.isMounted)
                    el._tag.isMounted = !!el._tag.trigger('mount');
                });
              }
            }
          } else {
            stub = expr.stub = stub || document.createTextNode('');
            if (dom.parentNode)
              remove();
            else
              (tag.parent || tag).one('updated', remove);
            dom.inStub = true;
          }
        } else if (attrName === 'show') {
          dom.style.display = value ? '' : 'none';
        } else if (attrName === 'hide') {
          dom.style.display = value ? 'none' : '';
        } else if (expr.bool) {
          dom[attrName] = value;
          if (value)
            setAttr(dom, attrName, attrName);
          if (FIREFOX && attrName === 'selected' && dom.tagName === 'OPTION') {
            dom.__riot1374 = value;
          }
        } else if (value === 0 || value && typeof value !== T_OBJECT) {
          if (startsWith(attrName, RIOT_PREFIX) && attrName != RIOT_TAG) {
            attrName = attrName.slice(RIOT_PREFIX.length);
          }
          setAttr(dom, attrName, value);
        }
      });
    }
    function each(els, fn) {
      var len = els ? els.length : 0;
      for (var i = 0,
          el; i < len; i++) {
        el = els[i];
        if (el != null && fn(el, i) === false)
          i--;
      }
      return els;
    }
    function isFunction(v) {
      return typeof v === T_FUNCTION || false;
    }
    function getOuterHTML(el) {
      if (el.outerHTML)
        return el.outerHTML;
      else {
        var container = mkEl('div');
        container.appendChild(el.cloneNode(true));
        return container.innerHTML;
      }
    }
    function setInnerHTML(container, html) {
      if (typeof container.innerHTML != T_UNDEF)
        container.innerHTML = html;
      else {
        var doc = new DOMParser().parseFromString(html, 'application/xml');
        container.appendChild(container.ownerDocument.importNode(doc.documentElement, true));
      }
    }
    function isSVGTag(name) {
      return ~SVG_TAGS_LIST.indexOf(name);
    }
    function isObject(v) {
      return v && typeof v === T_OBJECT;
    }
    function remAttr(dom, name) {
      dom.removeAttribute(name);
    }
    function toCamel(string) {
      return string.replace(/-(\w)/g, function(_, c) {
        return c.toUpperCase();
      });
    }
    function getAttr(dom, name) {
      return dom.getAttribute(name);
    }
    function setAttr(dom, name, val) {
      dom.setAttribute(name, val);
    }
    function getTag(dom) {
      return dom.tagName && __tagImpl[getAttr(dom, RIOT_TAG_IS) || getAttr(dom, RIOT_TAG) || dom.tagName.toLowerCase()];
    }
    function addChildTag(tag, tagName, parent) {
      var cachedTag = parent.tags[tagName];
      if (cachedTag) {
        if (!isArray(cachedTag))
          if (cachedTag !== tag)
            parent.tags[tagName] = [cachedTag];
        if (!contains(parent.tags[tagName], tag))
          parent.tags[tagName].push(tag);
      } else {
        parent.tags[tagName] = tag;
      }
    }
    function moveChildTag(tag, tagName, newPos) {
      var parent = tag.parent,
          tags;
      if (!parent)
        return;
      tags = parent.tags[tagName];
      if (isArray(tags))
        tags.splice(newPos, 0, tags.splice(tags.indexOf(tag), 1)[0]);
      else
        addChildTag(tag, tagName, parent);
    }
    function initChildTag(child, opts, innerHTML, parent) {
      var tag = new Tag(child, opts, innerHTML),
          tagName = getTagName(opts.root),
          ptag = getImmediateCustomParentTag(parent);
      tag.parent = ptag;
      tag._parent = parent;
      addChildTag(tag, tagName, ptag);
      if (ptag !== parent)
        addChildTag(tag, tagName, parent);
      opts.root.innerHTML = '';
      return tag;
    }
    function getImmediateCustomParentTag(tag) {
      var ptag = tag;
      while (!getTag(ptag.root)) {
        if (!ptag.parent)
          break;
        ptag = ptag.parent;
      }
      return ptag;
    }
    function defineProperty(el, key, value, options) {
      Object.defineProperty(el, key, extend({
        value: value,
        enumerable: false,
        writable: false,
        configurable: true
      }, options));
      return el;
    }
    function getTagName(dom) {
      var child = getTag(dom),
          namedTag = getAttr(dom, 'name'),
          tagName = namedTag && !tmpl.hasExpr(namedTag) ? namedTag : child ? child.name : dom.tagName.toLowerCase();
      return tagName;
    }
    function extend(src) {
      var obj,
          args = arguments;
      for (var i = 1; i < args.length; ++i) {
        if (obj = args[i]) {
          for (var key in obj) {
            if (isWritable(src, key))
              src[key] = obj[key];
          }
        }
      }
      return src;
    }
    function contains(arr, item) {
      return ~arr.indexOf(item);
    }
    function isArray(a) {
      return Array.isArray(a) || a instanceof Array;
    }
    function isWritable(obj, key) {
      var props = Object.getOwnPropertyDescriptor(obj, key);
      return typeof obj[key] === T_UNDEF || props && props.writable;
    }
    function cleanUpData(data) {
      if (!(data instanceof Tag) && !(data && typeof data.trigger == T_FUNCTION))
        return data;
      var o = {};
      for (var key in data) {
        if (!RESERVED_WORDS_BLACKLIST.test(key))
          o[key] = data[key];
      }
      return o;
    }
    function walk(dom, fn) {
      if (dom) {
        if (fn(dom) === false)
          return;
        else {
          dom = dom.firstChild;
          while (dom) {
            walk(dom, fn);
            dom = dom.nextSibling;
          }
        }
      }
    }
    function walkAttributes(html, fn) {
      var m,
          re = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;
      while (m = re.exec(html)) {
        fn(m[1].toLowerCase(), m[2] || m[3] || m[4]);
      }
    }
    function isInStub(dom) {
      while (dom) {
        if (dom.inStub)
          return true;
        dom = dom.parentNode;
      }
      return false;
    }
    function mkEl(name, isSvg) {
      return isSvg ? document.createElementNS('http://www.w3.org/2000/svg', 'svg') : document.createElement(name);
    }
    function $$(selector, ctx) {
      return (ctx || document).querySelectorAll(selector);
    }
    function $(selector, ctx) {
      return (ctx || document).querySelector(selector);
    }
    function inherit(parent) {
      function Child() {}
      Child.prototype = parent;
      return new Child();
    }
    function getNamedKey(dom) {
      return getAttr(dom, 'id') || getAttr(dom, 'name');
    }
    function setNamed(dom, parent, keys) {
      var key = getNamedKey(dom),
          isArr,
          add = function(value) {
            if (contains(keys, key))
              return;
            isArr = isArray(value);
            if (!value)
              parent[key] = dom;
            else if (!isArr || isArr && !contains(value, dom)) {
              if (isArr)
                value.push(dom);
              else
                parent[key] = [value, dom];
            }
          };
      if (!key)
        return;
      if (tmpl.hasExpr(key))
        parent.one('mount', function() {
          key = getNamedKey(dom);
          add(parent[key]);
        });
      else
        add(parent[key]);
    }
    function startsWith(src, str) {
      return src.slice(0, str.length) === str;
    }
    var rAF = (function(w) {
      var raf = w.requestAnimationFrame || w.mozRequestAnimationFrame || w.webkitRequestAnimationFrame;
      if (!raf || /iP(ad|hone|od).*OS 6/.test(w.navigator.userAgent)) {
        var lastTime = 0;
        raf = function(cb) {
          var nowtime = Date.now(),
              timeout = Math.max(16 - (nowtime - lastTime), 0);
          setTimeout(function() {
            cb(lastTime = nowtime + timeout);
          }, timeout);
        };
      }
      return raf;
    })(window || {});
    function mountTo(root, tagName, opts) {
      var tag = __tagImpl[tagName],
          innerHTML = root._innerHTML = root._innerHTML || root.innerHTML;
      root.innerHTML = '';
      if (tag && root)
        tag = new Tag(tag, {
          root: root,
          opts: opts
        }, innerHTML);
      if (tag && tag.mount) {
        tag.mount();
        if (!contains(__virtualDom, tag))
          __virtualDom.push(tag);
      }
      return tag;
    }
    riot.util = {
      brackets: brackets,
      tmpl: tmpl
    };
    riot.mixin = (function() {
      var mixins = {},
          globals = mixins[GLOBAL_MIXIN] = {},
          _id = 0;
      return function(name, mixin, g) {
        if (isObject(name)) {
          riot.mixin('__unnamed_' + _id++, name, true);
          return;
        }
        var store = g ? globals : mixins;
        if (!mixin) {
          if (typeof store[name] === T_UNDEF) {
            throw new Error('Unregistered mixin: ' + name);
          }
          return store[name];
        }
        if (isFunction(mixin)) {
          extend(mixin.prototype, store[name] || {});
          store[name] = mixin;
        } else {
          store[name] = extend(store[name] || {}, mixin);
        }
      };
    })();
    riot.tag = function(name, html, css, attrs, fn) {
      if (isFunction(attrs)) {
        fn = attrs;
        if (/^[\w\-]+\s?=/.test(css)) {
          attrs = css;
          css = '';
        } else
          attrs = '';
      }
      if (css) {
        if (isFunction(css))
          fn = css;
        else
          styleManager.add(css);
      }
      name = name.toLowerCase();
      __tagImpl[name] = {
        name: name,
        tmpl: html,
        attrs: attrs,
        fn: fn
      };
      return name;
    };
    riot.tag2 = function(name, html, css, attrs, fn) {
      if (css)
        styleManager.add(css);
      __tagImpl[name] = {
        name: name,
        tmpl: html,
        attrs: attrs,
        fn: fn
      };
      return name;
    };
    riot.mount = function(selector, tagName, opts) {
      var els,
          allTags,
          tags = [];
      function addRiotTags(arr) {
        var list = '';
        each(arr, function(e) {
          if (!/[^-\w]/.test(e)) {
            e = e.trim().toLowerCase();
            list += ',[' + RIOT_TAG_IS + '="' + e + '"],[' + RIOT_TAG + '="' + e + '"]';
          }
        });
        return list;
      }
      function selectAllTags() {
        var keys = Object.keys(__tagImpl);
        return keys + addRiotTags(keys);
      }
      function pushTags(root) {
        if (root.tagName) {
          var riotTag = getAttr(root, RIOT_TAG_IS) || getAttr(root, RIOT_TAG);
          if (tagName && riotTag !== tagName) {
            riotTag = tagName;
            setAttr(root, RIOT_TAG_IS, tagName);
            setAttr(root, RIOT_TAG, tagName);
          }
          var tag = mountTo(root, riotTag || root.tagName.toLowerCase(), opts);
          if (tag)
            tags.push(tag);
        } else if (root.length) {
          each(root, pushTags);
        }
      }
      styleManager.inject();
      if (isObject(tagName)) {
        opts = tagName;
        tagName = 0;
      }
      if (typeof selector === T_STRING) {
        if (selector === '*')
          selector = allTags = selectAllTags();
        else
          selector += addRiotTags(selector.split(/, */));
        els = selector ? $$(selector) : [];
      } else
        els = selector;
      if (tagName === '*') {
        tagName = allTags || selectAllTags();
        if (els.tagName)
          els = $$(tagName, els);
        else {
          var nodeList = [];
          each(els, function(_el) {
            nodeList.push($$(tagName, _el));
          });
          els = nodeList;
        }
        tagName = 0;
      }
      pushTags(els);
      return tags;
    };
    riot.update = function() {
      return each(__virtualDom, function(tag) {
        tag.update();
      });
    };
    riot.vdom = __virtualDom;
    riot.Tag = Tag;
    if (typeof exports === T_OBJECT)
      module.exports = riot;
    else if (typeof define === T_FUNCTION && typeof define.amd !== T_UNDEF)
      define(function() {
        return riot;
      });
    else
      window.riot = riot;
  })(typeof window != 'undefined' ? window : void 0);
  return module.exports;
});

$__System.registerDynamic("64", ["63"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('63');
  return module.exports;
});

$__System.register('65', ['64'], function (_export, _context) {
        "use strict";

        var riot;
        return {
                setters: [function (_) {
                        riot = _.default;
                }],
                execute: function () {
                        riot.tag2('clusterfriend-item', '<article> <div>{opts.item.description}</div> <div><small>{opts.item.pubDate}</small></div> </article>', '', '', function (opts) {
                                console.log(this.opts.item);
                        });
                }
        };
});
$__System.register('66', ['64', '65'], function (_export, _context) {
  "use strict";

  var riot;
  return {
    setters: [function (_) {
      riot = _.default;
    }, function (_2) {}],
    execute: function () {

      riot.tag2('clusterfriend-channel', '<div each="{selecteditem in (!!opts.state.selectedItem.guid?[opts.state.selectedItem.guid]:[])}"> <clusterfriend-item item="{parent.opts.state.items[selecteditem]}" state="{parent.opts.state}"></clusterfriend-item> </div> <div each="{item in (!!opts.state.selectedItem.guid?[]:opts.channel.items)}"> <clusterfriend-item item="{parent.opts.state.items[item]}" state="{parent.opts.state}"></clusterfriend-item> </div>', '', '', function (opts) {});
    }
  };
});
$__System.register('67', ['62', '64', '66'], function (_export, _context) {
    "use strict";

    var riot, ClusterfriendSite;
    return {
        setters: [function (_) {
            ClusterfriendSite = _.default;
        }, function (_2) {
            riot = _2.default;
        }, function (_3) {}],
        execute: function () {

            riot.tag2('clusterfriend-app', '<clusterfriend-channel channel="{state.channels[opts.feed]}" state="{state}"></clusterfriend-channel>', '', '', function (opts) {
                this.site = new ClusterfriendSite({
                    feedurl: this.opts.feed,
                    subscription: () => {
                        this.state = this.opts.store.getState();
                        this.update();
                    }
                });
            });
        }
    };
});
$__System.register('1', ['64', '67'], function (_export) {
  'use strict';

  var riot;
  return {
    setters: [function (_) {
      riot = _['default'];
    }, function (_2) {}],
    execute: function () {

      riot.mount('*');
    }
  };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=main.js.map
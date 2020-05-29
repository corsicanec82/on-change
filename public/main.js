/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
  PATH_SEPARATOR: '.',
  TARGET: Symbol('target'),
  UNSUBSCRIBE: Symbol('unsubscribe')
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Array.isArray;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (value) {
  return _typeof(value) === 'symbol';
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = __webpack_require__(0),
    TARGET = _require.TARGET,
    UNSUBSCRIBE = _require.UNSUBSCRIBE;

var path = __webpack_require__(4);

var isArray = __webpack_require__(1);

var isSymbol = __webpack_require__(2);

var isPrimitive = function isPrimitive(value) {
  return value === null || _typeof(value) !== 'object' && typeof value !== 'function';
};

var isBuiltinWithoutMutableMethods = function isBuiltinWithoutMutableMethods(value) {
  return value instanceof RegExp || value instanceof Number;
};

var isBuiltinWithMutableMethods = function isBuiltinWithMutableMethods(value) {
  return value instanceof Date;
};

var isSameDescriptor = function isSameDescriptor(a, b) {
  return a !== undefined && b !== undefined && Object.is(a.value, b.value) && (a.writable || false) === (b.writable || false) && (a.enumerable || false) === (b.enumerable || false) && (a.configurable || false) === (b.configurable || false);
};

var shallowClone = function shallowClone(value) {
  if (isArray(value)) {
    return value.slice();
  }

  return _objectSpread({}, value);
};

var onChange = function onChange(object, _onChange) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var proxyTarget = Symbol('ProxyTarget');
  var inApply = false;
  var changed = false;
  var applyPath;
  var applyPrevious;
  var isUnsubscribed = false;
  var equals = options.equals || Object.is;
  var propCache = new WeakMap();
  var pathCache = new WeakMap();
  var proxyCache = new WeakMap();

  var handleChange = function handleChange(changePath, property, previous, value) {
    if (isUnsubscribed) {
      return;
    }

    if (!inApply) {
      _onChange(path.concat(changePath, property), value, previous);

      return;
    }

    if (inApply && applyPrevious && previous !== undefined && value !== undefined && property !== 'length') {
      var item = applyPrevious;

      if (changePath !== applyPath) {
        changePath = path.after(changePath, applyPath);
        path.walk(changePath, function (key) {
          item[key] = shallowClone(item[key]);
          item = item[key];
        });
      }

      item[property] = previous;
    }

    changed = true;
  };

  var getOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, property) {
    var props = propCache !== null && propCache.get(target);

    if (props) {
      props = props.get(property);
    }

    if (props) {
      return props;
    }

    props = new Map();
    propCache.set(target, props);
    var prop = props.get(property);

    if (!prop) {
      prop = Reflect.getOwnPropertyDescriptor(target, property);
      props.set(property, prop);
    }

    return prop;
  };

  var invalidateCachedDescriptor = function invalidateCachedDescriptor(target, property) {
    var props = propCache ? propCache.get(target) : undefined;

    if (props) {
      props.delete(property);
    }
  };

  var buildProxy = function buildProxy(value, path) {
    if (isUnsubscribed) {
      return value;
    }

    pathCache.set(value, path);
    var proxy = proxyCache.get(value);

    if (proxy === undefined) {
      proxy = new Proxy(value, handler);
      proxyCache.set(value, proxy);
    }

    return proxy;
  };

  var unsubscribe = function unsubscribe(target) {
    isUnsubscribed = true;
    propCache = null;
    pathCache = null;
    proxyCache = null;
    return target;
  };

  var ignoreProperty = function ignoreProperty(property) {
    return isUnsubscribed || options.ignoreSymbols === true && isSymbol(property) || options.ignoreUnderscores === true && property.charAt(0) === '_' || options.ignoreKeys !== undefined && options.ignoreKeys.includes(property);
  };

  var handler = {
    get: function get(target, property, receiver) {
      if (property === proxyTarget || property === TARGET) {
        return target;
      }

      if (property === UNSUBSCRIBE && pathCache !== null && pathCache.get(target) === '') {
        return unsubscribe(target);
      }

      var value = Reflect.get(target, property, receiver);

      if (isPrimitive(value) || isBuiltinWithoutMutableMethods(value) || property === 'constructor' || options.isShallow === true || ignoreProperty(property)) {
        return value;
      } // Preserve invariants


      var descriptor = getOwnPropertyDescriptor(target, property);

      if (descriptor && !descriptor.configurable) {
        if (descriptor.set && !descriptor.get) {
          return undefined;
        }

        if (descriptor.writable === false) {
          return value;
        }
      }

      return buildProxy(value, path.concat(pathCache.get(target), property));
    },
    set: function set(target, property, value, receiver) {
      if (value && value[proxyTarget] !== undefined) {
        value = value[proxyTarget];
      }

      var ignore = ignoreProperty(property);
      var previous = ignore ? null : Reflect.get(target, property, receiver);
      var isChanged = !(property in target) || !equals(previous, value);
      var result = true;

      if (isChanged) {
        result = Reflect.set(target[proxyTarget] || target, property, value);

        if (!ignore && result) {
          handleChange(pathCache.get(target), property, previous, value);
        }
      }

      return result;
    },
    defineProperty: function defineProperty(target, property, descriptor) {
      var result = true;

      if (!isSameDescriptor(descriptor, getOwnPropertyDescriptor(target, property))) {
        result = Reflect.defineProperty(target, property, descriptor);

        if (result && !ignoreProperty(property) && !isSameDescriptor()) {
          invalidateCachedDescriptor(target, property);
          handleChange(pathCache.get(target), property, undefined, descriptor.value);
        }
      }

      return result;
    },
    deleteProperty: function deleteProperty(target, property) {
      if (!Reflect.has(target, property)) {
        return true;
      }

      var ignore = ignoreProperty(property);
      var previous = ignore ? null : Reflect.get(target, property);
      var result = Reflect.deleteProperty(target, property);

      if (!ignore && result) {
        invalidateCachedDescriptor(target, property);
        handleChange(pathCache.get(target), property, previous);
      }

      return result;
    },
    apply: function apply(target, thisArg, argumentsList) {
      var compare = isBuiltinWithMutableMethods(thisArg);

      if (compare) {
        thisArg = thisArg[proxyTarget];
      }

      if (!inApply) {
        inApply = true;

        if (compare) {
          applyPrevious = thisArg.valueOf();
        }

        if (isArray(thisArg) || toString.call(thisArg) === '[object Object]') {
          applyPrevious = shallowClone(thisArg[proxyTarget]);
        }

        applyPath = path.initial(pathCache.get(target));
        var result = Reflect.apply(target, thisArg, argumentsList);
        inApply = false;

        if (changed || compare && !equals(applyPrevious, thisArg.valueOf())) {
          handleChange(applyPath, '', applyPrevious, thisArg[proxyTarget] || thisArg);
          applyPrevious = null;
          changed = false;
        }

        return result;
      }

      return Reflect.apply(target, thisArg, argumentsList);
    }
  };
  var proxy = buildProxy(object, options.pathAsArray === true ? [] : '');
  _onChange = _onChange.bind(proxy);
  return proxy;
};

onChange.target = function (proxy) {
  return proxy[TARGET] || proxy;
};

onChange.unsubscribe = function (proxy) {
  return proxy[UNSUBSCRIBE] || proxy;
};

module.exports = onChange;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    PATH_SEPARATOR = _require.PATH_SEPARATOR;

var isArray = __webpack_require__(1);

var isSymbol = __webpack_require__(2);

module.exports = {
  after: function after(path, subPath) {
    if (isArray(path)) {
      return path.slice(subPath.length);
    }

    if (subPath === '') {
      return path;
    }

    return path.slice(subPath.length + 1);
  },
  concat: function concat(path, key) {
    if (isArray(path)) {
      path = path.slice();

      if (key) {
        path.push(key);
      }

      return path;
    }

    if (key && key.toString !== undefined) {
      if (path !== '') {
        path += PATH_SEPARATOR;
      }

      if (isSymbol(key)) {
        return path + 'Symbol(' + key.description + ')';
      }

      return path + key;
    }

    return path;
  },
  initial: function initial(path) {
    if (isArray(path)) {
      return path.slice(0, -1);
    }

    if (path === '') {
      return path;
    }

    var index = path.lastIndexOf(PATH_SEPARATOR);

    if (index === -1) {
      return '';
    }

    return path.slice(0, index);
  },
  walk: function walk(path, callback) {
    if (isArray(path)) {
      path.forEach(callback);
    } else if (path !== '') {
      var position = 0;
      var index = path.indexOf(PATH_SEPARATOR);

      if (index === -1) {
        callback(path);
      } else {
        while (position < path.length) {
          if (index === -1) {
            index = path.length;
          }

          callback(path.slice(position, index));
          position = index + 1;
          index = path.indexOf(PATH_SEPARATOR, position);
        }
      }
    }
  }
};

/***/ })
/******/ ]);
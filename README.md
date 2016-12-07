## presets: 转码规则 plugin的集合
- babel-preset-es2015
- babel-preset-es2015-loose
- babel-preset-stage-0
- babel-preset-stage-1
- babel-preset-es2016

区别:

```js
// babel-preset-es2015
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sum = function () {
    function Sum() {
        _classCallCheck(this, Sum);
    }

    _createClass(Sum, [{
        key: 'add',
        value: function add() {
            console.log('hello world!');
        }
    }]);

    return Sum;
}();
```

```js
// babel-preset-es2015-loose
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sum = function () {
    function Sum() {
        _classCallCheck(this, Sum);
    }

    Sum.prototype.add = function add() {
        console.log('hello world!');
    };

    return Sum;
}();
```

```js
// babel-preset-es2016

class Sum {
    add() {
        console.log('hello world!');
    }
}
```


## plugins
- babel-plugin-add-module-exports

```js
// 使用前
const sum = (a, b) => a + b;

export default sum;
module.exports = exports["default"];
```

```js
// 使用后
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;
```



- babel-plugin-transform-es2015-modules-umd

```js
// 使用前
const sum = (a, b) => a + b;

export default sum;
module.exports = exports["default"];
```

```js
// 使用后
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.exportDefault = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const sum = (a, b) => a + b;

  exports.default = sum;
  module.exports = exports["default"];
});
```

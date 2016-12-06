## presets
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

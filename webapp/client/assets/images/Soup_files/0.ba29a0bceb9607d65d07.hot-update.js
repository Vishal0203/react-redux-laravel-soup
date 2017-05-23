webpackHotUpdate(0,{

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redboxReact2 = __webpack_require__(284);

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = __webpack_require__(280);

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(281);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _materialUi = __webpack_require__(949);

var _reactFlexboxGrid = __webpack_require__(1065);

var _application = __webpack_require__(286);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  LandingContainer: {
    displayName: 'LandingContainer'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: '/Users/Vishal/Documents/Projects/react-redux-laravel-soup/webapp/client/components/landing/LandingContainer.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: '/Users/Vishal/Documents/Projects/react-redux-laravel-soup/webapp/client/components/landing/LandingContainer.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var LandingContainer = _wrapComponent('LandingContainer')(function (_React$Component) {
  _inherits(LandingContainer, _React$Component);

  function LandingContainer(props) {
    _classCallCheck(this, LandingContainer);

    return _possibleConstructorReturn(this, (LandingContainer.__proto__ || Object.getPrototypeOf(LandingContainer)).call(this, props));
  }

  _createClass(LandingContainer, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          _materialUi.Paper,
          { zDepth: 0, style: { position: 'relative', borderRadius: 0 } },
          _react3.default.createElement(
            _reactFlexboxGrid.Grid,
            null,
            _react3.default.createElement(
              'div',
              { className: 'wrap' },
              _react3.default.createElement(
                _reactFlexboxGrid.Col,
                { xs: 12 },
                _react3.default.createElement(
                  _reactFlexboxGrid.Row,
                  { center: 'xs' },
                  _react3.default.createElement(
                    'div',
                    { style: this.styles.headerContainer },
                    _react3.default.createElement(
                      'h1',
                      { style: this.styles.heading },
                      'Jump start with ',
                      _react3.default.createElement(
                        'span',
                        { style: { color: _application.overlayColor } },
                        'Laravel ReactJS'
                      ),
                      ' Single Page application'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: 'styles',
    get: function get() {
      return {
        logo: {
          margin: '14px 10px 0 -8px'
        },
        headerContainer: {
          height: '100vh',
          display: 'table'
        },
        heading: {
          textTransform: 'uppercase',
          fontSize: '4vmin'
        }
      };
    }
  }]);

  return LandingContainer;
}(_react3.default.Component));

exports.default = LandingContainer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(80)(module)))

/***/ })

})
//# sourceMappingURL=0.ba29a0bceb9607d65d07.hot-update.js.map
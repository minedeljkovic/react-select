'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Wrapper = _react2['default'].createClass({
  displayName: 'Wrapper',

  propTypes: {
    children: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.node), _react2['default'].PropTypes.node])
  },
  render: function render() {
    // This component adds no markup
    return _react2['default'].createElement(
      'div',
      null,
      this.props.children
    );
  }
});

module.exports = Wrapper;
import React from 'react';

const Wrapper = React.createClass({
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])
  },
  render () {
    // This component adds no markup
    return <div>{this.props.children}</div>;
  }
});

module.exports = Wrapper;

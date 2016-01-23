var React = require('react');

var Base = React.createClass({
  render: function() {
    return (
      <div>
        <h1>dis a header</h1>
        {this.props.children}
        <h1>dis a footer</h1>
      </div>
    );
  }
});

module.exports = Base;

var React = require('react');

var Component =  React.createClass({
  render: function() {
    return <button className="btn btn-primary" type="button">
        {this.props.title} <span className="badge">{this.props.number}</span>
      </button>
  }
});

module.exports = Component;


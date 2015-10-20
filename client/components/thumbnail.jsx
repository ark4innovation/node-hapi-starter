var React = require('react');
var Badge = require('./badge');

var Component = React.createClass({
  render: function() {
    return <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={this.props.imageUrl}/>
          <div className="caption">
            <h3>{this.props.header}</h3>
            <p>{this.props.description}</p>
            <p><Badge number={this.props.number} title={this.props.title}/></p>
          </div>
        </div>
      </div>
  }
});

module.exports = Component;

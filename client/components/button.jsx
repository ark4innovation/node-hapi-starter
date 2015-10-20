var React = require('react');

var Component =  React.createClass({
    handleClick: function() {
        alert('button clicked')
    },
    render: function() {
        return <button onClick={this.handleClick} className={"btn " + this.props.className} type="button">
            {this.props.title} <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
        </button>
    }
});

module.exports = Component;


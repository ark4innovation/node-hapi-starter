var React = require('react');
var ReactDOM = require('react-dom');
var Dropdown = require('../components/dropdown');

function safeStringify(obj) {
    return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}


var App = React.createClass({
    render: function () {

        return (
                <Dropdown {...this.props}/>
        );
    }
});

module.exports = App;

if (typeof window !== 'undefined') {
    var container = document.getElementById("content");
    var props = JSON.parse(document.getElementById("props").innerHTML);
    var element = React.createElement(App, props);
    ReactDOM.render(element, container);
}

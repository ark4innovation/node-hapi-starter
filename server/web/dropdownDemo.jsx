var React = require('react');
var ReactDOM = require('react-dom');
var Layout = require('./layout/layout');
var Dropdown = require('../../client/components/dropdown');

var options = {
    title: 'Choose a dessert',
    items: [
        'Apple Pie',
        'Peach Cobbler',
        'Gulab Jamun'
    ]
}

var Component = React.createClass({
    render: function () {

        return (
            <Layout title="Dropdown Page">
                <h1>Demo of a Drop Down</h1>
                <Dropdown {...options}/>
            </Layout>
        );
    }
});

module.exports = Component;

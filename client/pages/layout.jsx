var React = require('react');


var Component = React.createClass({
    render: function () {

        return (
            <html>
            <head>
                <title>{this.props.title}</title>
                <link rel="stylesheet" href="/public/styles/bootstrap.min.css"></link>
                <link rel="stylesheet" href="/public/styles/font-awesome.min.css"></link>
                <link rel="stylesheet" href="/public/styles/app.min.css"></link>
            </head>
            <body>
            {this.props.children}
            <hr />
            <p>
                <a href="/">Home</a> | <a href="/about">About Us</a> | | <a href="/dropdown">Dropdown</a>
            </p>
            <script src="/public/js/core.min.js"></script>
            <script src="/public/js/pages/app.min.js" ></script>
            <script>
                var MyApp = React.createFactory(require("myApp"));
                React.render(MyApp(' + safeStringify(props) + '), '+
                'document.getElementById("content"))' +
                '</script>'
            </body>
            </html>

        );
    }
});


module.exports = Component;
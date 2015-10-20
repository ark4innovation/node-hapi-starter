/**
 * Created by arifkhan on 10/18/15.
 */

var React = require('react');
var Button = require('./button');

var Component = React.createClass({

    render: function() {
        return (
            <div className="dropdown">
                <Button className="btn-default" title={this.props.title} subTitleClassName="caret" />
                <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li><a href="#">Separated link</a></li>
                </ul>
            </div>
        );

    }

});

module.exports = Component;

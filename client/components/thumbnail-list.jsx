var React = require('react');
var Thumbnail = require('./thumbnail');

var Component = React.createClass({

    render: function () {

        console.log(this.props.thumbnailData);

        var list = this.props.thumbnailData.map(function (thumbnailProps) {
            return <Thumbnail {...thumbnailProps}/>
        });
        return <div>
            {list}
        </div>
    }
});

module.exports = Component;

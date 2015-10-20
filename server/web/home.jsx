var React = require('react');
var Layout = require('./layout/layout.jsx');
var ThumbnailList = require('../../client/components/thumbnail-list');

var options = {
    thumbnailData: [
        {
            title: 'Show Courses',
            number: 20,
            header: 'Learn React Now',
            description: 'React is a fantastic new library for making fast, dynamic pages.React is a fantastic new library for making fast, dynamic pages.React is a fantastic new library for making fast, dynamic pages.',
            imageUrl: '/public/media/react.png'
        }, {
            title: 'Show Courses',
            number: 54,
            header: 'Learn Gulp',
            description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow.Gulp will speed up your development workflow.Gulp will speed up your development workflow.',
            imageUrl: '/public/media/gulp.png'
        }
    ]
};

var Component = React.createClass({
    render: function () {

        return (
            <Layout title="Home Page">
                <h1>Welcome to the plot device.</h1>
                <ThumbnailList {...options} />
           </Layout>
        );
    }
});

module.exports = Component;

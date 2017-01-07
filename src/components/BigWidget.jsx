var React = require('react');

var BigWidget = React.createClass({
    render: function () {

        var headingStyle = {
            height: 230,
            background: '#0096d0',
            borderColor: '#0096d0'
        };
        var panelStyle = {

        }; 
        if (this.props.color) {
            panelStyle.borderColor = this.props.color;
            headingStyle.borderColor = this.props.color;
            headingStyle.background = this.props.color;
        }
        var footerStyle = {
            background: '#484d4d',
            color: '#fff',
            textAlign: 'center',
            padding: 0
        };
        var titleStyle = {
            marginBottom: 0,
            marginTop: 10
        };
        return (
            <div style={panelStyle} className="panel panel-primary">
                <div style={headingStyle} className="panel-heading "></div>
                <div style={footerStyle} className="panel-body">
                    <div className="col-xs-4">
                        <h3 style={titleStyle}>{this.props.shot_views}</h3>
                        <p>Shot Views</p>
                    </div>
                    <div className="col-xs-4">
                        <h3 style={titleStyle}>{this.props.likes}</h3>
                        <p>Likes</p>
                    </div>
                    <div className="col-xs-4">
                        <h3 style={titleStyle}>{this.props.comments}</h3>
                        <p>Comments</p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = BigWidget;
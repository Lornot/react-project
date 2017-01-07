var React = require('react');
var SmallWidjet = React.createClass({

    render: function () {
        var HeaderStyle = {
            background: '#0096d0',
            color: '#fff'
        };
        var titleStyle = {
            marginBottom: 0
        };
        var valueStyle = {
            marginTop: 0
        };

        if (this.props.color)
            HeaderStyle.background = this.props.color;

        var bodyStyle = {
            height: 60
        };

        return (
            <div className="panel panel-default">
                <div style={HeaderStyle} className="panel-heading">
                    <p style={titleStyle}>{this.props.title}</p>
                    <h3 style={valueStyle}>{this.props.value}</h3>
                </div>
                <div style={bodyStyle} className="panel-body"></div>
            </div>
        );
    }
});

module.exports = SmallWidjet;
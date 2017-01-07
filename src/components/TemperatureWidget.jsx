var React = require('react');

var TemperatureWidget = React.createClass({
    render: function () {
        var WidgetStyle = {
            background: '#ff8a00',
            marginTop: 10,
            color: '#fff',
            textAlign: 'center'
        };

        if (this.props.color)
            WidgetStyle.background = this.props.color;

        return (
            <div className="panel panel-default" style={WidgetStyle}>
                <div className="panel-body">
                    <h2>{this.props.temperature}&deg;</h2>
                    <p>{this.props.city}</p>
                </div>
            </div>
        );
    }
});

module.exports = TemperatureWidget;
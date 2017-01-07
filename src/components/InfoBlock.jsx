var React = require('react');
var InfoBlock = React.createClass({

    render: function () {
        var PanelStyle = {
            marginTop: 10
        };
        var descriptionStyle = {
            color: 'grey'
        };
        return (
          <div style={PanelStyle} className="panel panel-default">
              <div className="panel-body">
                  <h2><b>{this.props.title}</b></h2>
                  <p style={descriptionStyle}>{this.props.description}</p>
              </div>
          </div>
        );
    }
});

module.exports = InfoBlock;
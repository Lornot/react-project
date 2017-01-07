var React = require('react');
var ReactDOM = require('react-dom');
var InfoBlock = require('./components/InfoBlock.jsx');
var BigWidget = require('./components/BigWidget.jsx');
var TemperatureWidjet = require('./components/TemperatureWidget.jsx');
var SmallWidget = require('./components/SmallWidget.jsx');

ReactDOM.render(<InfoBlock title="20" description="New followers added this month" />, document.getElementById('followers'));

ReactDOM.render(<InfoBlock title="$1250" description="Average Monthly Income" />, document.getElementById('month_income'));

ReactDOM.render(<InfoBlock title="$13865" description="Yearly Income Goal" />, document.getElementById('yearly_income'));

ReactDOM.render(<BigWidget shot_views="15080" likes="12000" comments="5100" description="Yearly Income Goal" />, document.getElementById('first_big_widget'));

ReactDOM.render(<BigWidget color="#cd59ae" shot_views="6700" likes="3000" comments="2301" description="Yearly Income Goal" />, document.getElementById('second_big_widget'));

ReactDOM.render(<TemperatureWidjet temperature="18" city="Paris"/>, document.getElementById('temperature_widget'));

ReactDOM.render(<SmallWidget title="New visitors" value="1.5K"/>, document.getElementById('new_visitors'));

ReactDOM.render(<SmallWidget color="#b28ad6" title="Bounce Rate" value="50%"/>, document.getElementById('bounce_rate'));

ReactDOM.render(<SmallWidget color="#ff4826" title="Searchs" value="28%"/>, document.getElementById('searchs'));

ReactDOM.render(<SmallWidget color="#63c254" title="Traffic" value="140kb"/>, document.getElementById('traffic'));
var React = require('react');

var WeatherMessage = React.createClass({

  render:function(){

    var location = this.props.location;
    var temp  = this.props.temp;
    return (
      <div>
        <h4>It's it {temp} in {location} </h4>
      </div>
    );
  }
});

module.exports = WeatherMessage;

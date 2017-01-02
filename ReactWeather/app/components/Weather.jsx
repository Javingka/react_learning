var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap')

var Weather = React.createClass({

  getInitialState: function(){
    return {
      location: 'Miami',
      temp: 88
    }
  },

  handleNewData: function(data){
    console.log('new data', data);
    var that = this;

    openWeatherMap.getTemp( data.location).then(
        function(_temp){
          that.setState({
            location: data.location,
            temp: _temp
          });
        },
        function(err){
          alert(err);
        }
    );
  },

  render: function(){
    var location = this.state.location;
    var temp  = this.state.temp;
    return (
      <div>
        <h3> Weather Component </h3>
        <WeatherForm onNewData={this.handleNewData}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;

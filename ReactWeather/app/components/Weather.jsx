var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap')

var Weather = React.createClass({

  getInitialState: function(){
    return {
      isLoading: false
    }
  },

  handleNewData: function(data){
    console.log('new data', data);
    var that = this;

    this.setState({ isLoading: true })

    openWeatherMap.getTemp( data.location).then(
        function(_temp){
          that.setState({
            location: data.location,
            temp: _temp,
            isLoading: false
          });
        },
        function(err){
          that.setState({ isLoading: false })
          alert(err);
        }
    );
  },

  render: function(){
    var location = this.state.location;
    var temp  = this.state.temp;
    var isLoading = this.state.isLoading;

    function renderMessage(){
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3> Weather Component </h3>
        <WeatherForm onNewData={this.handleNewData}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;

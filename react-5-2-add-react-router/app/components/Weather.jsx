var React = require('react');

var WeatherMessage = React.createClass(
  getDefaultProps: function(){
    
  },

);

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    //parse the data
    var city = this.refs.city.value;

    //send the data to the server
    this.props.onNewData(city); //this means onNewData has to be a parameter passed when the object is initialized
  },

  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="city" placeholder="type a city name"></input>
        </div>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
    );
  }
});

var Weather = React.createClass({

  handleNewData: function(data){
    console.log('new data', data)
  },

  render: function(){
    return (
      <div>
        <h1> Weather Component </h1>
        <WeatherForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports = Weather;

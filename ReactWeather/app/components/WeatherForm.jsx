var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    //parse the data
    var _location = this.refs.location.value;

    //send the data to the server
    if (_location.length > 0 ) {
      this.refs.location.value = '';
      this.props.onNewData(
        {
          location: _location
        }
      ); //this means onNewData has to be a parameter passed when the object is initialized
    }
  },

  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="location" placeholder="type a city name"></input>
        </div>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;

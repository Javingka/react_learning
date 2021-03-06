var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=89527fe80a220aa9580d545bc06cdb8c&units=metric';

module.exports = {
  getTemp: function( location ){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = OPEN_WEATHER_MAP_URL + '&q=' + encodedLocation ;

    return axios.get(requestUrl).then(
      function(res){
        console.log('res success', res);
        if (res.data.cod && res.data.message){
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      },
      function(res){
        console.log('res error', res);
        throw new Error(res.data.message)

      }) //takes a url and give you back the result. returns a promise!!
  }
}

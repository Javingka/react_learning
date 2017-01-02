var React = require('react');
var ReactDOM = require('react-dom');

/*in webpack.config.js we specified the extensions we want to supoprt so doesn't need to include the jsx extension for jsx files
 you can call require only with Greeter name because in webpack.config.js there are declared the alias and the root for this project*/
var Greeter= require('Greeter');


var firstName = 'Javier C';
var msg = 'MSG teste';

ReactDOM.render(
  <Greeter name={ firstName } message={msg} />,
  document.getElementById('app')
);

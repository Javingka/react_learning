var React = require('react');

/*in webpack.config.js we specified the extensions we want to supoprt so doesn't need to include the jsx extension for jsx files
 you can call require only with Greeter name because in webpack.config.js there are declared the alias and the root for this project*/
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  
  getDefaultProps: function() {
    return {
      name:'React',
      message:'this is front the component'
    } 
  },

  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },

  handleNewData: function(updates){
    this.setState(updates);
  },

  render: function(){
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <br/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports  = Greeter;

var React = require('react');
var {Link, IndexLink} = require('react-router'); // this is an ECMAS6  syntax

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Get Weather</IndexLink >
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
      </div>
    );
  }
});

module.exports = Nav;

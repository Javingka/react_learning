//var React = require('react');
var ReactDOM = require('react-dom');

var React = require('react');
var ReactCanvas = require('react-canvas');

var Surface = ReactCanvas.Surface;
var Image = ReactCanvas.Image;
var Text = ReactCanvas.Text;

var MyComponent = React.createClass({

  render: function () {
    var surfaceWidth = window.innerWidth;
    var surfaceHeight = window.innerHeight;
    var imageStyle = this.getImageStyle();
    var textStyle = this.getTextStyle();

    return (
      <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
        <Image style={imageStyle} src='https://cdn-images-1.medium.com/max/2000/1*SdXg4o3AfvEbpO4nLNlo2g.png' />
        <Text style={textStyle}>
          Here is some text below an image.
        </Text>
      </Surface>
    );
  },

  getImageHeight: function () {
    return Math.round(window.innerHeight / 2);
  },

  getImageStyle: function () {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: this.getImageHeight()
    };
  },

  getTextStyle: function () {
    return {
      top: this.getImageHeight() + 10,
      left: 0,
      width: window.innerWidth,
      height: 20,
      lineHeight: 20,
      fontSize: 12
    };
  }

});

ReactDOM.render(
  <MyComponent />, //<h1> boilerplate app </h1>,
  document.getElementById('app')
);

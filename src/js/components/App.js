var {Component} = require('react');
var React = require('react/addons');
var Radium = require('radium');
var PureRender = require('./PureRender');
var Cuisines = require('./Cuisines');
var Router = require('react-router');

@Radium
@PureRender
class App extends Component {
  
  render(): any {
    return (
      <div>
        <Cuisines/>
      </div>
    );
  }
}

module.exports = App;

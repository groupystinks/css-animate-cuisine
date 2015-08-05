var React = require('react');
var {Route, DefaultRoute} = require('react-router');
var App = require('./components/App');


var routes = (
  <Route handler={App} name="app" path="/">
  </Route>
);

module.exports = routes;

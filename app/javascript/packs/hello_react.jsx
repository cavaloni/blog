// Run this example by adding <%= javascript_pack_tag 'App_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Home from './pages/home';

const App = props => <Home />;

App.defaultProps = {
  name: 'David'
};

App.propTypes = {
  name: PropTypes.string
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />,
    document.body.appendChild(document.createElement('div'))
  );
});

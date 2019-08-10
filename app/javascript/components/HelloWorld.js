import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log('hello')
  }
  

  render() {
    return (
      <div>
        <Fragment>Greeting: {this.props.greeting}</Fragment>
        Frigging hello
      </div>
    )
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld;

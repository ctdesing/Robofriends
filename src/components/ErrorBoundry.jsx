import React, { Component } from "react";

class ErrorBoundry extends Component {
  state = { hasError: false };

  componentDidCatch(e) {
    this.setState({hasError: true});
    console.log(e);
  }

  render() {
    return this.state.hasError ?
    <h1>Opps, an error have occured, sorry.</h1> :
    this.props.children;
  }
}

export default ErrorBoundry;
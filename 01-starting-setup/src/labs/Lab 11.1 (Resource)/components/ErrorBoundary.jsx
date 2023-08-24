import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      message: "",
    };
  }
  componentDidCatch(err) {
    this.setState({ hasError: true, message: err.message });
  }

  render() {
    if (this.state.hasError) {
      return <p>{this.state.message}</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({ error: error, errorInfo: errorInfo });
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      console.log(this.state.hasError);
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>The error: {this.state.error.toString()}</p>
          <p>Where it occured: {this.state.errorInfo.componentStack}</p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

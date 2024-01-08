import { Component } from "react";
import NotFound from "../components/NotFound/NotFound";

export default class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(err) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <NotFound />;
    }
    return this.props.children;
  }
}

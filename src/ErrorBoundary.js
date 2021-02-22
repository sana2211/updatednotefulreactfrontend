import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        hasError: false,
        error: {message:"", stack:""},
        info: {componentStack: ""}
     };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      this.setState({
        error, info
      })
      //console.log(error, info);
    }
  
    render() {
      //console.log("hasError"+this.state.hasError);
      if (this.state.hasError) {
        return (<div>
          <h1>Something went wrong.</h1>
          <hr></hr>
          <h2>{this.state.error.message}</h2>
          </div>)
      }
      else{
        return this.props.children; 
      }
     
    }
  }
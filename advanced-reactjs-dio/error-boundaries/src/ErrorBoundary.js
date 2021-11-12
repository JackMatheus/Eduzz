import React, { Component } from 'react'
import ErrorImg from './error.jpg'

class ErrorBoundary extends Component {

  constructor(props){
    super(props)
    this.state = {
      hasError: false
    }
  }
    //Funcção que verifica o erro
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    })
  }
    //retornando uma imagem(vidraça quebrada) caso de erro
  render() {
    if(this.state.hasError) {
      return <img src={ErrorImg} />
    }
    return this.props.children
  }
}

export default ErrorBoundary

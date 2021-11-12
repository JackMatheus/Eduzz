import React, { Component } from 'react'

//1- Criar class com função de i ncrement e decrement
class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
//Metodo 1
  increment = () => {
    const { count } = this.state
    this.setState({
      count: count + 1
    })
  }

  //Metodo 2
  decrement = () => {
    const { count } = this.state
    this.setState({
      count: count - 1
    })
  }

  render() {
    const { render } = this.props
    const { count } = this.state
 
    //2-return com a logica que serão utilizadas nos componentes filhoes
    return (
      <div>
        {
          // retorno das funções increment, decrement, count
          //render >>
          render({
            increment: this.increment,
            decrement: this.decrement,
            count
          })
        }
      </div>
    )
  }
}

export default Counter

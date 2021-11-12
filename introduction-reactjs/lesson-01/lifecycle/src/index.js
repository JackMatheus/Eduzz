import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./styles.css"

//1-Criando um componente com escopo de classs
class App extends Component {
//1.1-Inicialização - recebimento de props e crianção do estado
  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }
//1.2 -introduzindo componentDidMount para this.setState
  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }

  //3-Alterando no estado do copo com o this.setState
  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    })
  }
//2-Reenderizando e alterando o comportamento 
  render() {
    const { clock, copo } = this.state
    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
      </div>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

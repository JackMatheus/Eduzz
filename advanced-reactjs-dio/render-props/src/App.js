import React, { Component } from 'react'
import Counter from './Counter'

//4- recebendo as 3 funções ({ increment, decrement, count }) de Counter.js
//4.1 - Espelhando os dados no front
const Buttons = ({ increment, decrement, count }) => (
  <div>
      <h1>Valor atual: {count}</h1>
      <div>
        <button onClick={increment}>Adicionar 1</button>
      </div>
      <div>
        <button onClick={decrement}>Remover 1</button>
      </div>
  </div>
)
//0-Criando a estrutuda da classe do componente
class App extends Component {

  render () {
    return (
      <div>
        {/* 4.2-Chave: Chamando do Counter que vai passar o render , que retorna uma função , que retorna o botão (4.1) com as funções*/}
        {/* render >> */}
        <Counter render={
          ({ increment, decrement, count }) => (
            <Buttons
              increment={increment}
              decrement={decrement}
              count={count}
            />
          )
        }>

        </Counter>
      </div>
    )
  }
}


export default App
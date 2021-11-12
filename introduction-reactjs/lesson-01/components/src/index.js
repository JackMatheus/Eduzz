import React from "react"
import ReactDOM from "react-dom"
// Button em maiusculo
import Button from './Button'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import "./styles.css"

function soma(a, b) {
  alert(a + b)
}

function App() {
  return (
    <div className="App">
      {/* Reenderizando para o front */}
      Hello World
      {/* botão com a propriedade onclick, funcção soma (de 2 numeros), 2 - string name) */}
      <ComponentA>
        <Button onClick={() => soma(10, 20)} name="Jackson Mateus" />
       {/* Acessando atraves do children do componente  */}
      <ComponentB>
        <Button onClick={() => soma(40, 20)} name="Tatiane Anjos" />
      </ComponentB>
      </ComponentA>

    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

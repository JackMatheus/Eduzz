//Em App.js fica o container com toda regra de negócio
import React, { useState } from 'react'
import Button from './Component/Button'
import Calc from './Component/Calc'

function App () {
  
  // 3.1 Definindo as condições de entrada da variavel
  const [value, setValue] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(30)

  const handleClick = () => {
    setMin(10)
  }
// 3.2 Definindo as condições handleCalc
  const handleCalc = ({ target }) => {
    const value = target.value
    setValue(min + max + value)
  }

  return (
    <>
      <div>
        <Button
          onClick={handleClick}
        >
          Adicionar no carrinho
        </Button>
      </div>
      <div>
        {/* 2.0 >>>recebe do index.js as propriedades */}
        {/* 3.0 excecuta as funçoes recebidas acima App.js */}
        <h1>Valor calculado: {value}</h1>
        <Calc
          min={min}
          max={max}
          onChange={handleCalc}
        />
      </div>
    </>
  )
}

export default App
import React from 'react'
import PropType from 'prop-types'

// 0.Definindo o meu componente
function Calc(props) {
  const { min, max, onChange } = props

  return (
    <div>
      <p>
        Valor mínimo: {min}
      </p>
      <p>
        Valor máximo: {max}
      </p>
      <input type="text" onChange={onChange} />
    </div>
  )
}

// 1.0 propriedades >>> app.js

Calc.propTypes = {
  min: PropType.number.isRequired,
  max: PropType.number.isRequired,
  onChange: PropType.func.isRequired,
}

export default Calc

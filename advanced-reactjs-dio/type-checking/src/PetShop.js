import React from 'react'
import PropTypes from 'prop-types'

//1-Criando a função com as props
function PetShop (props) {

  const { dogs, cats, customers, customerName, onClick } = props
//1-return para o front 
  return (
    <div>
      <h1>Dogs: {dogs}</h1>
      <h1>Cats: {cats}</h1>
      <div>
        Quantidade de clientes: {customers}
      </div>
      <div>
        Nome do cliente: {customerName}
      </div>
      <button onClick={onClick}>Iniciar banho</button>
    </div>
  )
}
//Definindo propriedades padrão da aplicação
PetShop.defaultProps = {
  cats: 0,
  customers: []
}
//2-Mesmo nome PetShop, e sera injetado no JS
//2.1-Definindo o typo
PetShop.propTypes = {
  dogs: PropTypes.number.isRequired,
  cats: PropTypes.number,
  customers: PropTypes.array,
  customerName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  status: PropTypes.oneOf(["Completed", "Disabled"])
}


export default PetShop

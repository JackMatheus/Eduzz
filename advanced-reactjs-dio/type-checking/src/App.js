import React from 'react'
import PetShop from './PetShop'

function App () {
  const handleClick = () => {
    console.log('Iniciando o banho...')
  }
  
  return (
    //Atualiza os dados do front
    <PetShop
      dogs={2}
      customerName="Jackso Chagas"
      onClick={handleClick}
      status="done"
    />
  )
}

export default App
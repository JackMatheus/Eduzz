import React from 'react'

//Criando um botão através de uma função
function Button(props) {
//Desestruturação para pegar a propriedade name, e no callback defino onClick
  const { name, onClick } = props

  return (
    //retorno do botão para o front com as propriedades
    <button onClick={onClick}>{name}</button>
  )
}
//export default
export default Button

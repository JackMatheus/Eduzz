import React, { useRef, useEffect, useState } from 'react'

//1.0 função App
function App() {
  //referenciando
  const inputRef = useRef()
  const count = useRef(1)
  const [_, setValue] = useState(false)

  //3.0 inserindo propiedade inputRef.current.focus()
  const handleClick = () => {
    //chamando
    inputRef.current.focus()
    console.log('inputRef.current', inputRef.current)
  }

  useEffect(() => {
    setTimeout(() => {
      console.log('passou aqui')
      count.current = 300
      setValue(true)
    }, 3000)
  })

//2.0-Criando input e botão e dando foco
  return (
    <>
      <h1>Valor de count: {count.current}</h1>
      Foco: <input ref={inputRef} />
      <br />
      <br />
      <br />
      {/* //Aplicando */}
      <button onClick={handleClick}>Focar</button>
    </>
  )
}
export default App
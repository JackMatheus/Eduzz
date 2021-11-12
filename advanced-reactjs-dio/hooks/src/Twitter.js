//0 -hooks (funções) = useEffect, useState, memo 
import React, { useEffect, useState, memo } from 'react'

//1. Criando areEqual e injetando (prevProps, nextProps), e comparando o loading de atualização
const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading
}


function Twitter(props) {
  //0.1-Importando ou desestruturando e criando (tweet, setTweet)
  const { loading } = props
  const [tweet, setTweet] = useState()
  
  // useEffect - componentDidMount
  useEffect(() => {
    const { posts, loading } = props
    console.log('componentDidMount', posts)
    console.log('componentDidMount:loading', loading)
  }, [])

  // useEffect- componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate', loading)
  }, [loading])

  //useEffect - componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount: fui removido :(')
    }
  }, [])

  //0-1função handleTweet ao clicar no botão abaixo dispara todo o ciclo de vida
  const handleTweet = () => {
    setTweet('Tweet atualizado')
  }

  console.log('Tweet atualizado:', tweet)
  return (
    <div>
      <button onClick={handleTweet}>Re-render</button>
      tests
    </div>
    )
}

export default memo(Twitter, areEqual)

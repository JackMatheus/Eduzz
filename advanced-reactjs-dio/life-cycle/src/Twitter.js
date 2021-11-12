import React, { Component } from 'react'

//Criando class Twitter que extends component
class Twitter extends Component {

//3.1-Criando state: tweet -Ciclo de vida shouldComponentUpdate
  state = {
    tweet: 'title'
  }

//1-Ciclo de vida componentDidMount
  componentDidMount() {
    const { posts, loading } = this.props
    console.log('componentDidMount', posts)
    console.log('componentDidMount:loading', loading)
    
  }

  componentDidUpdate(prevProps) {
    const { loading } = this.props
    if (this.props.loading !== prevProps.loading) {
      console.log('componentDidUpdate:loading', loading)
    }
  }
//2-Ciclo de vida componentWillUnmount, simulando com um botão
  componentWillUnmount() {
    console.log('componentWillUnmount: fui removido :(')
  }

//3-Ciclo de vida shouldComponentUpdate, simulando atualizações
//(nextProps, nextState) = são argumentos
//se tweet for  !== nextState.tweet
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.tweet !== nextState.tweet
  }
//3.3-Função atualização -Ciclo de vida shouldComponentUpdate
  tweet = () => {
    this.setState({
      tweet: true
    })
  }

  render () {
    const { posts } = this.props
    console.log('render', posts)
    return (
      <div>
        {/* 3.4-Add botão - Ciclo de vida shouldComponentUpdate */}
        <button onClick={this.tweet}>Re-render</button>
        tests
      </div>
    )
  }
}

export default Twitter

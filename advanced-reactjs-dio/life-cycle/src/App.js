import React, { Component } from 'react'
import Twitter from './Twitter'

class App extends Component {

  state = {
    loading: false,
    actived: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true
      })
    }, 3000)
  }
 //2.2-Função >> Ciclo de vida componentWillUnmount, simulando com um botão
  onRemove = () => {
    this.setState({
      actived: false
    })
  }
  //1-Criei e to enviando post para o Twitter abaixo
  render () {
    
    const posts = [{
      title: 'xpto',
      description: 'foo'
    },{
      title: 'xpto',
      description: 'foo'
    }]
  //1.1-Twitter abaixo
    return (
      //2.1-Div Botão -Ciclo de vida componentWillUnmount, simulando com um botão
      <div>
        <button onClick={this.onRemove}>Remover component</button>
        {/* 2.3-Checando state.actived - Ciclo de vida componentWillUnmount, simulando com um botão */}
        {this.state.actived && (
          <Twitter posts={posts} loading={this.state.loading} />
        )}
      </div>
    )
  }
}

export default App

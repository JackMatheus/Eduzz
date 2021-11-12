import React, { Fragment } from 'react'

const store = [{
  type: 'Roupa',
  style: 'Free'
}, {
  type: 'Calçado',
  style: 'Newer'
}, {
  type: 'Camiseta',
  style: 'Under'
}]
//function Column
function Column({ type, style }) {
  return (
    <tr>
      <td>{type}</td>
      <td>{style}</td>
    </tr>
  )
}
//function Column App()
function App() {

  const renderColumns = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Column type={element.type} />
      <Column type={element.style} />
    </Fragment>
  )
  
  return (
    <table>
      
        {store.map(renderColumns)}        
      
    </table>
  )
}

export default App
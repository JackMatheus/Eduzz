import React from "react";

//1-criando um array de customers
const listCustomer = [
  {
    id: 1,
    name: 'Bruno Carneiro',
    skills: ['React', 'Node', 'CSS', 'Webpack']
  },
  {
    id: 2,
    name: 'Aline Carneiro',
    // skills 1 - objeto
    skills: ['HTML', 'React Native', 'Go', 'JS']
  },
  {
    id: 3,
    name: 'Fulano de Tal',
    skills: ['Assembly']
  },
  {
    id: 4,
    name: 'José Ciclano',
    // skills 1 - objeto
    skills: ['Reason']
  }
]

//2- Criando uma arfunction para reenderizar os customers
const App = () => {
//  na arfunction sempre é necessário passar 2 parametros , o array e a index
// na div deve-se informar a key, que vem da index do array (customer, index)
  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li>
        {/* // skills 2 - skills.map*/}
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

    // skills 3 - renderSkills (skill, index)
  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>
          {/* //dado uma lista, faço um map(retorno) */}
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};
export default App;
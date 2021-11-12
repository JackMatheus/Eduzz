import React from "react";

//Parte 1
const buttonA = <button>Histórico dos Clientes</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true;

//Parte 2 - função App de reenderização dos elementos
const App = () => {

  const renderShowHistory = (
    <div>
      Clique no botão abaixo para visualizar o histórico dos clientes
      <br />
      {buttonA}
    </div>
  );

  const renderAddCustomer = (
    <div>
      Clique abaixo para cadastrar o cliente
      <br />
      {buttonB}
    </div>
  )
   ////Parte 3 - return da parte 2
  //Logica entre {} aqui, pois é uma execução de um arquivo jsx
  const showCustomer = () => {

    if (!hasCustomer) return null;

    return (
      <div>
        <h1>Nome do Cliente: Jackson Chagas</h1>
      </div>
    );
  };

  console.log('hasCustomer', hasCustomer);

  ////Parte 3.1 - return da parte 3
  //Retorno do ternário {hasCustomer ? renderShowHistory : renderAddCustomer}
  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      
      {hasCustomer ? renderShowHistory : renderAddCustomer}
      <div>
        {showCustomer()}
      </div>
    </div>
  );
};
export default App;
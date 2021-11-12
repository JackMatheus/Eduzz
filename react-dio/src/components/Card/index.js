// Construindo componente base para os filhos
//3.2-adcionando props para alterando indice do html
// const Card = (props) => {
//     return(
//         <div className="card bg-dark">
//             <img src={props.image} className="card-img-top p-1" alt={props.children}/>
//             <div className="card-body">
//                 <h5 className="card-title">{props.children}</h5>
//                 <p className="card-text">{props.info}</p>
//                 <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-warning col-sm-12 col-lg-5">Projeto no GitHub</a>
//             </div>
//         </div> 
//     )
// }

// export default Card;
//Aqui

import {useState} from 'react';
import Button from '../Button';

// Construindo componente base para os filhos
//3.2-adcionando props para alterando indice do html
const Card = () => {
   //3.4.1.1-Desestruturando o useState (guarda o valor temporariamente), que vem de um array e uma função
   //Vou utilizar para guardar o valor da tag  <p>0</p>
   //3.5-Array e função do useState(0) para tornar a tag <p> dinamica >>
    const [valor, setValor] = useState(0);

    //3.5.1 -Função adicionar para 3.5-(event.target.value+1)}} >
    // Para evitar que execute a funçaõ add repetidadas vezes 
    function Adicionar(){
        setValor (valor+1)
    }

    function Remover(){
        setValor (valor-1)
    }

    return(
        <div className="card">
            <div className='card-header'>
                Meu primeiro Card
            </div>

            <div className='card-body'>
                <Button
                    class="btn btn-success"
                    onClick={Adicionar}
                >
                    Adicionar
                </Button>

                <Button
                    class="btn btn-danger"
                    onClick={Remover}
                >
                    Remover
                </Button>               
              
               {/*3.4 Passando de valor estatico para dinamico via função*/}
                {/* <p>0</p> */}
                {/* //3.5.1 recebendo valor */}
                <p>(valor)</p>
            </div>
            
        </div> 
    )
}

export default Card;
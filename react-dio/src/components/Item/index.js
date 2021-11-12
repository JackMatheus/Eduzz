// Construindo componente base para os filhos
//2.2-adcionando props para alterando indice do html
const Item = (props, children) => {
    return {
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
        //2.3 - add propriedade ao componente
        {children} {props.texto}
        //2.4 -Criando {props.texto} >>>2.4.1 
  Item 1
</a>
    }
}

export default Item;
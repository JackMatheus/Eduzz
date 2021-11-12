//Componentizando o botão que recebe o childrem para tornar dinamico
const Button = ({children, className, onClick})=>{
 return (
    <button 
    type="button" 
    className={className}
    //3.5-Definindo o momento em que será usado o setValor + 1
    // onClick={(event)=>{setValor(event.target.value+1)}} 
    onClick={onClick} 
    >
{children}
</button>
 )
}
//frchamento()
export default Button;
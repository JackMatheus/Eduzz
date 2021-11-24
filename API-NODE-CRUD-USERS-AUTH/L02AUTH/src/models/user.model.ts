//Criando o objeto User >> Repository
//type é um objeto
//Interface é um contrato e pode ter metodos
type User = {
    uuid?: string;
    username: string;
    password?: string;
}

export default User;
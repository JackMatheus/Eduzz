//run: parcel index.html
//Server running at http://localhost:1234

//Aula 5
interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
   }

// function redirecione(usuario: IUsuario | IAdmin){
//     if('cargo' in usuario){
//         //redirecionar para a administração
//     }
//         //redirecionar para a area de usuário
// }






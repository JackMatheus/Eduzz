//run: parcel index.html
//Server running at http://localhost:1234

//Aula 6 - Utilizando o caracter "?" para variáveis opcionais

interface IAdmin {
    id: string;
    
}


interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'normal';
}


function redirecione(usuario: IUsuario | IAdmin) {
    if (usuario.cargo) {
        //redirecionar para a administração
    }
    //redirecionar para a area de usuario
}

    






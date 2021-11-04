// Aula8 - Como importar bibliotecas com typescript
/*
interface Estudante {
    nome: string;
    idade: number; 
}

interface Estudante {
    serie: string;
    
}

const estudante: Estudante = {
 idade,nome,serie
}
*/

//Exempo com jquery

// import $ from 'jquery';
// $.fn.extends({
//     novaFuncao(){
//         console.log('Chamou a função');
//     }
// });

//

interface JQuery {

    //typings.d.ts novaFuncao(), comunica-se com typings.ts
    novaFuncao(): void;
}
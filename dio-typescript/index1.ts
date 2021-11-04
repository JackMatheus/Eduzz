// //run: parcel index.html
// //Server running at http://localhost:1234

// //Aula 1

// interface IAnimal {
//     nome: string;
//     tipo: 'terrestre' | 'aquatico';
//     domenstico: boolean;
//     // executarRugido(alturaEmDecibeis: number): void
// }

// type IAninal = {
//     nome: string;
//     tipo: 'terrestre' | 'aquatico';
//     executarRugido(alturaEmDecibeis: number): void;
// }


// interface IFelino extends IAnimal {
//     visaoNoturna: boolean;
// }

// // const animal: IAnimal = {
// //     nome: 'Elefante',
// //     tipo: 'terrestre',
// //     executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)

// // }

// interface ICanino extends IAnimal {

//     porte: 'pequeno' |'médio'|'grande'
// }

// type IDomestico = IFelino |ICanino;

// // animal.executarRugido(10);

// const animal: IDomestico = {
//     domenstico: true,
//     nome: 'cachorro',
//     porte: 'médio',
//     tipo: 'terrestre'
    
// }


//run: parcel index.html
//Server running at http://localhost:1234

// // Aula 2
// //Capturando o input do front
// const input = document.getElementById('input') as HTMLInputElement;

//adcionando um evento no botão
input.addEventListener('input', (event)=>{
    // console.log('digitei alguma merda')
    //resgatando a informação usando a propriedade event.currentTarget as HTMLInputElement;
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value)

})

//Exemplo 2
function adicionaApendiceALista2<NaoSeioquevaireceber>(array: any[], valor:NaoSeioquevaireceber) {
    // return array.map(item => item + valor);
    //
    console.log(array.map(item => item + valor))
}
adicionaApendiceALista2([1,2,3,4,5],5);
// adicionaApendiceALista2(['a','b','c','c','d'],'e');




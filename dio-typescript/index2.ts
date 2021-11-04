//run: parcel index.html
//Server running at http://localhost:1234

// Aula 2
//Capturando o input do front
const input = document.getElementById('input') as HTMLInputElement;

//adcionando um evento no botão
input.addEventListener('input', (event)=>{
    // console.log('digitei alguma merda')
    //resgatando a informação usando a propriedade event.currentTarget as HTMLInputElement;
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value)

})



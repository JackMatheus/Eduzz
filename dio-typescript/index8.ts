//run: parcel index.html
//Server running at http://localhost:1234

// Aula8 - Como importar bibliotecas com typescript

//arquivo typings.d.ts
import $ from 'jquery';
$.fn.extend({
    //typings.ts novaFuncao(), comunica-se com typings.d.ts
    novaFuncao(){
        console.log('Chamou nova função');
    }
});

$('body').novaFuncao();

//$ - chamando o item
$('body').novaFuncao();

//    






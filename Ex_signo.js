
//VERIFCA SE A PESSOA É DE LIBRA

import prompt from 'prompt-sync'
let ler= prompt ();


console.log ('informe o mês')
let mes = ler();

let semestre = mes == "setembro" || mes ==  "outubro";


console.log ('informe o dia')
let dia = ler();

let dia2 = dia >= "22" || dia <=  "23";

let resul = dia2 



console.log(` ela é de libra: ${semestre}. nasceu no dia ${dia2} `);

//MOSTRA SE O CLIMA ESTA BOM PARA SAIR

import prompt from 'prompt-sync';
let ler = prompt();


console.log('quer ir ao parque? informe a temperatura!!');
let temp = ler();

let clima = temp >= 23 ;
let clima2 = clima <=30;

let resul = (clima==clima2)



console.log (`ta bom pra sair? ${resul}`);
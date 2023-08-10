
//VERIFICA SE O NUMERO É PAR

import prompt from 'prompt-sync';
let ler = prompt();


console.log('informe um número!!');
let nmr = ler();


let resul = nmr %2 == 0;

console.log(`O NÚMERO É PAR: ${resul}`);

//COMPARA AS AREAS DE DOIS QUADRADOS

import prompt from 'prompt-sync';
let ler = prompt();


console.log('informe a altura do primeiro quadrado');
let alt1= Number (ler());

console.log('informe a base do segundo quadrado');
let base1 =Number (ler());

console.log('informe a altura do terceiro quadrado');
let alt2= Number (ler());

console.log('informe a altura do quarto quadrado');
let base2 =Number (ler());


let resultado1 = alt1 * base1;

let resultado2= alt2 * base2;

let final = resultado1 == resultado2;

console.log (`os dois são iguais ${final} `)
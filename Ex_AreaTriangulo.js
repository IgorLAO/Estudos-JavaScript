
//CALCULA A AREA DE UM TRIANGULO

import prompt from 'prompt-sync';
let ler = prompt();


console.log('digite a base')
let base = Number(ler());


console.log('digite a altura')
let altura = Number( ler ());


let area = base * altura

let resultado = area / 2 ;
console.log('a area do triangulo é ' + resultado);
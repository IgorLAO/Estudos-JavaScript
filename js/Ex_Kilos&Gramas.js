
// 1. Implementar uma função para converter kilos para gramas.
// Obs: 1KG equivale a 1000 gramas


import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite a quantidade de kilos');
let kilos = Number(ler());

let resultado = kilos *1000

console.log(` a conversao de kilos para  gramas é ${resultado}Gramas`);



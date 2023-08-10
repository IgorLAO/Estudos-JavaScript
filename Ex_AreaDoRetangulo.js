
//CALCULA A AREA DO RETANGULO

import prompt from 'prompt-sync'
let ler = prompt();

console.log('---------------------------------')
console.log('|||Calcular area do retangulo||||');
console.log('---------------------------------')


console.log('digite a base do retangulo');
let base = ler ();

console.log('digite a altura');
let altura = ler();


let area = base * altura;

console.log('a area é ' + area);
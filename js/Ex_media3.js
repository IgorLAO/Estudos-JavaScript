
//MOSTRA A MEDIA

import prompt from 'prompt-sync'
let ler = prompt();


console.log('digite a primeira nota')
let nota1 =Number (ler());
console.log('digite a primeira nota')
let nota2 =Number (ler());
console.log('digite a primeira nota')
let nota3 =Number (ler());
console.log('digite a primeira nota')
let nota4 =Number (ler());
console.log('digite a primeira nota')
let nota5 =Number (ler());

let resultado= nota1 + nota2 + nota3 + nota4 + nota5;

let resultado2= resultado/2

console.log('o resultado e  '+ resultado2);
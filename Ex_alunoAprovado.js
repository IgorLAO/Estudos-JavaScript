
//VERIFICA SE O ALUNO FOI APROVADO

import prompt from 'prompt-sync'
let ler= prompt ();



console.log('digite a primeira nota')
let nota1 =Number (ler());
 

console.log('digite a segunda nota')
let nota2 =Number( ler());

 
console.log('digite a terceira nota')
let nota3 =Number(   ler());

console.log('digite a quarta nota')
let nota4 =Number(   ler());

console.log('digite a quinta nota')
let nota5 =Number(   ler());

let resultado= nota1 + nota2 + nota3 + nota4 + nota5;

let resultado2 = resultado/2

let resultado3 = resultado2 >=6;

console.log(`O aluno foi aprovado ${resultado3}`);
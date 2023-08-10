import prompt from 'prompt-sync';
let ler = prompt();


console.log ('informe o primeiro número :')
let n1 = Number (ler());


console.log ('informe o segundo número:')
let n2 = Number (ler());
 
console.log ('informe o terceiro número :')
let n3 = Number (ler());

let r1 = dobro (n1);
let r2 = dobro (n2);
let r3 = dobro (n3);


console. log(` p dobro é ${n1} é ${r1}, ${n2} é  ${r2 } e ${n3} é ${r3} `);


function dobro (a){
let x = (a*2);
return x;



}
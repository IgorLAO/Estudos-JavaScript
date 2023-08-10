

import { media } from './media';




import prompt from 'prompt-sync';
let ler = prompt();


console.log ('informe o primeiro número :')
let n1 = Number (ler());


console.log ('informe o segundo número:')
let n2 = Number (ler());
 
console.log ('informe o terceiro número :')
let n3 = Number (ler());

let r = media(n1 + n2 + n3);


console.log (`a media é: ${r}` );


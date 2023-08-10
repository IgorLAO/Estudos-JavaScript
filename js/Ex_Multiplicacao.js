import prompt from 'prompt-sync'
let ler= prompt();

console.log('Bem vindo a calculadora!')

console.log('Digite um numero')
let n1 = ler();

console.log('digite outro numero')
let n2 = ler();

let multiplicaçao = n1 * n2


console.log("a multiplicação entre " + n1 + " e " + n2 + " é: " + multiplicaçao );

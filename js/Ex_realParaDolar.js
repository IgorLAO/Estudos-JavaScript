
// 2. Implementar uma função para converter reais em dólares.
// Exemplo de resposta: "R$ 515 equivalem a US$ 10.0"


import prompt from 'prompt-sync';
let ler = prompt();

console.log('digite o valor em R$');
let reis = Number(ler());

let resultado = reis * 5.15;

console.log(`A conversão de R$ para Dólares será ${resultado}`);
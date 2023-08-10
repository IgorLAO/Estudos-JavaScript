
// 3. Implementar uma função para converter dólares em reais.
// Exemplo de resposta: "US$ 1 equivalem a R$ 5.15"


import prompt from 'prompt-sync';
let ler = prompt();


console.log('informe o valor em dolares');
let dolares = Number(ler());



let resultado = dolares * 5.15;

console.log(`o valor em reais é R$${resultado}`);

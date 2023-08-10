// 6. Implementar uma função para calcular o total de uma venda de açaí a partir das quantidades
// compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí pequeno é R$ 13,50,
// médio R$ 15,00
// e o grande é R$ 17,50.

import prompt from 'prompt-sync';
let ler = prompt();

console.log('Compras de açaí');
console.log('Digite o tamanho do açaí (pequeno, medio ou grande):');
let tamanho = ler();

let pequeno = 13.50;
const medio = 15.00;
let grande = 17.50;

let valor;

if (tamanho === 'pequeno') {
  valor = pequeno;
} else if (tamanho === 'medio') {
  valor = medio;
} else if (tamanho === 'grande') {
  valor = grande;
}

console.log('Digite a quantidade:');
let quantidade = Number(ler());

let total = valor * quantidade;

console.log(`O total da venda é R$ ${total}`);




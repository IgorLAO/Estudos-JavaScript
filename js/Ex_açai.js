// 5. Implementar uma função para calcular o total de uma venda de açaí a partir da quantidade
// de açaís comprados, sabendo que o estabelecimento oferece um tamanho único para o açaí no valor de R$
// 13,50.
// Exemplo da mensagem de resposta: "Na compra de 4 açaís o valor pago é R$ 54"


import prompt from 'prompt-sync';
let ler = prompt();


console.log('informe a quantidade de açai')
let açai = Number(ler());

let resultado = açai * 13.50;

console.log(`Na compra de ${açai} açaís o valor pago é R$ ${resultado}`);



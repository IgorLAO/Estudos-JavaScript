// 4. Implementar uma função que retorne uma mensagem formatada com o valor das parcelas de uma compra,
// a partir do valor total da compra e da quantidade do parcelamento.
// Exemplo da mensagem de resposta: "Sua compra de R$ 1200 em 10x de R$ 120 foi concluída"


import prompt from 'prompt-sync';
let ler = prompt();


console.log ('Informe o valor da compra');
let compra = Number(ler());

console.log ('Qantas vezes irá parcelar?');
let parcela = Number (ler());

let resultado = compra / parcela;

console.log(`A sua compra de ${compra} em ${parcela}X de ${resultado} foi concliuída`);ççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççç6

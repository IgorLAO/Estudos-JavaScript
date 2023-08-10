

//Implemente uma função com a mesma situação acima(exercicio 6), mas adicionando um cupom de desconto (em %)
//no total da compra.


import prompt from 'prompt-sync';
let ler = prompt();

console.log('Compras de açaí');
console.log('Digite o tamanho do açaí (pequeno, medio ou grande):');
let tamanho = ler();

let pequeno = 13.50;
let medio = 15.00;
let grande = 17.50;

let valor;

if (tamanho ===   'pequeno') {
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


console.log('PARABENS VOCE GANHOUM UM CUPOM');
console.log('aperte enter para ganhar um cupom de 10% de desconto');
let desconto = 10
let porcentagem = (desconto/100) * total ;

let descontofinal = total - porcentagem.toFixed(2);

console.log(`O total da venda é R$ ${total}. com desconto  de 10% fica ${descontofinal}`);
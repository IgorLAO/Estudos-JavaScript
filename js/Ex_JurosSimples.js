//Faça um programa que calcule o juros simples, o usuário informa o valor do capital, a taxa e o tempo em
//meses,o programa deve retornar o valor total que ele ira pagar, ou seja o montante:
//Juros = (capital*taxa*tempo)/100;
//Montante = capital+juros;
//Exemplo de mensagem de resposta: O Montante pago pelo empréstimo de R$ VALOR é R$ VALOR.

import prompt from 'prompt-sync';
let ler = prompt();


console.log('o informa o valor do capital');
let capital = ler()

console.log('o informa a taxa');
let taxa = ler();

console.log('o informa o tempo em meses');
let tempo = ler();


let juros = (capital * taxa * tempo)/100;

let montante = capital + juros;

console.log(`O Montante pago pelo empréstimo de R$ ${capital} é R$ ${montante}`);
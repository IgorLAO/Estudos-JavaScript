import prompt from 'prompt-sync';
let ler = prompt()

console.log ('seja bem-vindo');
console.log('Qual seu nome?');
let pessoa = ler();
 
console.log ('Olá, seja bem ' + pessoa);
console.log ('como posso ajudar?')
let ajuda = ler();

console.log('nao posso ajudar com isso')
 console.log ('fala um numero')
  let numero = Number( ler());


  let dobro = numero * 2;

  console.log('o dobro desse numero é ' + dobro)
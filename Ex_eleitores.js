//Escreva um algoritmo para ler a o número total de eleitores de um município, o numero
//de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
//em relação ao total de eleitores


import prompt from 'prompt-sync';
let ler = prompt();

console.log('quantas pessoas votaram?')
let totalpessoas = ler();


console.log('quantas pessoas votaram em branco');
let brancos = ler();

console.log('quantas pessoas votaram nulo');
let nulo = ler();

console.log('quantas pessoas sao validas?');
let valido = ler();


let percentualbrancos = (brancos / totalpessoas) * 100;
let percentualNulos = (nulo / totalpessoas) * 100;
let percentualValidos = (valido / totalpessoas) * 100;

console.log(`o percentual de votos brancos é ${percentualbrancos}`)
console.log(`o percentual de votos brancos é ${percentualNulos}`)
console.log(`o percentual de votos brancos é ${percentualValidos}`)
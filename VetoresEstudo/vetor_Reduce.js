import prompt from 'prompt-sync'
let ler = prompt();

let numeros = [61,16,11,1,2,5,2,1,,13]


// let numeroMaior = numeros.filter( n => n < 10).map(n => n * 2)
//embora o map() seja mais facil o reduce e mais divertido, pq da coisa na cabeca. tipo usar for em vez do while


let dobro = numeros.reduce((acumulador, currentNumber) => {

    if( currentNumber > 0){
         acumulador.push(currentNumber * 2)

    }

    return acumulador

},[])

console.log(dobro)
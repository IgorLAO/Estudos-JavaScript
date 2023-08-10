import prompt from 'prompt-sync'
let ler = prompt();


console.log(' digite a quantidade de numeros')
let qtd = Number(ler())

let array = []

for(let i = 0; i < qtd; i++){
    array.push((i + 1))

}

console.log(array)

let media = array.reduce((a,b) => a= a+b) / array.length

console.log(' a soma de todos e ' + media)




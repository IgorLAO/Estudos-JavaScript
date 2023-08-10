
//VERIFICA EM QUAL SEMESTRE ESTAMOS 

import prompt from 'prompt-sync'
let ler= prompt ();


console.log ('informe o mês')
let mes = ler();




let semestre = mes == "janeiro" || mes ==  "janeiro"|| mes == "fevereiro "|| mes == "março" || mes == "abril" ||mes == "maio" || mes== "junho";



console.log(`o mês ${mes} faz parte do primeiro semestre? ${semestre}`)
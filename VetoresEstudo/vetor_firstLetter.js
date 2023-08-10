let nomes = [   "igor", "maria", "jose", "lenin", "marx", "italo", "elisa", "eliseu", "jesus",
"ana", "pedro", "joana", "lucas", "carla", "carlos", "sandra", "eduardo", "lara",
"rafael", "alice", "rodrigo", "dabriela", "fernando", "patricia", "vitor", "paula",
"thiago", "amanda", "gustavo", "fernando", "fernando", "fernando", "fernando", "fernando"]


let contarLetras = nomes.reduce((acumulator, currentString) =>{

    let firstLetter = currentString[0]//DEFINE A PRIMEIRA LETRA DE CADA NOME. VENDO O INDICE 0 DE CADA PALAVRA OU SEJA  A PRIMEIRA LETRA
 
    if(acumulator[firstLetter]){
        acumulator[firstLetter] ++// SE EXISTIR APENAS ACRESCENTA O 1 a acumulator[firstLetter] DE LETRAS REPETIDAS

    }   else{
        acumulator[firstLetter] = 1 // SE NAO.  acumulator[firstLetter] e igual a um

    }

    return acumulator

}, {})

console.log(contarLetras)
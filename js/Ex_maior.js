let num = [1,2,3,4,2]

let maior = num[0]

for(let i = 1; i < num.length; i++){
    if(maior < num[i]){
        maior = num[i]

    }

}

console.log(maior)
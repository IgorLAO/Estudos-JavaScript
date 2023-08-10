import prompt from 'prompt-sync';
  const ler = prompt();


  let produtos = [
    {tamanho: "pequeno", preco: 15.00 },
    {tamanho: "medio", preco: 20.00 },
    {tamanho: "grande", preco: 25.00 }
  ]

  let recibo = []

  do{
    console.log(" digite o tamanho desejado")
    let tamanhoDesejado = ler()


    let tamanhoEncontrado = produtos.find((produto) => produto.tamanho == tamanhoDesejado)
	//estudar o metodo find(). muito interessante


    if(tamanhoEncontrado){
      recibo.push((tamanhoEncontrado.preco))

    }
    else{
      console.log(" tamanho nao encontrado")
    }

    console.log(" quer algo mais? (sim/nao)")
    let algoMais = ler()

    if(algoMais != "sim"){
      break;
    }




  } while(true)



  console.log('Recibo:');
  console.log(recibo);


  let total_pagar = recibo.reduce((acumulador, currentValue) => {
    return acumulador + currentValue

  }, 0 )

  console.log(total_pagar)
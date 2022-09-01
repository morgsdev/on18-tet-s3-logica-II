//Array chamado 'clienteLilit' contendo vários objetos
//cada objeto tem duas propriedades: produto e valor
let clienteLilit = {
  pagamentoPixOuAvista: true,
  carrinho: [
    {
      produto: 'Bolsa pequena',
      valor: 49.0
    },
    {
      produto: 'Cinto preto',
      valor: 62.0
    },
    {
      produto: 'Jaqueta Jeans',
      valor: 350.0
    },
    {
      produto: 'Calça preta',
      valor: 290.0
    },
    {
      produto: 'Blusa simples',
      valor: 35.0
    },
    {
      produto: 'Calça jeans clara',
      valor: 130.0
    },
    {
      produto: 'Blusa preta gola alta',
      valor: 60.0
    },
    {
      produto: 'Short verde canelado',
      valor: 80.0
    },
    {
      produto: 'Salto agulha 39',
      valor: 250.0
    },
    {
      produto: 'Tênis casual preto',
      valor: 120.0
    },
    {
      produto: 'meia calça transparente',
      valor: 80.0
    }
  ]
}

let clienteAdriana = {
  pagamentoPix: true,
  pagamentoAvista: true,
  carrinho: [
    {
      produto: 'Bolsa pequena',
      valor: 49.0
    },
  ]
}

let clienteReprograma = [
  {
    produto: 'Jaqueta Jeans',
    valor: 350.0
  },
  {
    produto: 'Calça preta',
    valor: 290.0
  },
  {
    produto: 'Calça jeans clara',
    valor: 130.0
  },
  {
    produto: 'Salto agulha 39',
    valor: 250.0
  },
  {
    produto: 'Tênis casual preto',
    valor: 120.0
  }
]

//Tentativa 1 sozinha

// let compraTotal = clienteLilit.carrinho

// for (let itensComprados of compraTotal) {
//   console.log(itensComprados);
// } if (itensComprados <= 59){
//   alert("O valor da sua compra não dá direito ao desconto!");
// }else if (itensComprados >=60 && itensComprados <= 99){
//   alert("O valor da sua compra dá direito a 10% de desconto!");
// }else if (itensComprados >=100 && itensComprados <= 199){
//   alert("O valor da sua compra dá direito a 20% de desconto");
// }else {
//   alert("O valor da sua compra dá direito a 30% de desconto")
// }

// -------------------------------------------------------------------------------------

// Tentativa 2 - após a revisão da quarta

// let cliente = 0

// function valorTotalCarrinho (cliente){
//   let comprasDaCliente
//   for (let compra of cliente){
//     if (compra.valor <= 59){
//       console.log("O valor da compra não dá direito a desconto.")
//     }else if (compra.valor >=60 && compra.valor <= 99){
//       console.log("O valor da compra dá 10% de desconto")
//     }else if(compra >= 100 && compra <= 199){
//       console.log("O valor da compra dá 20% de desconto")
//     }else {
//       console.log("O valor da compra dá 50% de desconto")
//     }
//   }
//   console.log(comprasDaCliente);
// }

// valorTotalCarrinho(clienteAdriana)
// console.log("-----------------------");
// valorTotalCarrinho(clienteLilit)

// -------------------------------------------------------------------------------------

//Tentativa 3 após a revisão da quarta

// function somarListaDaCliente (lista){
//   let listaCliente = {}
//   for (let compras of lista){
//     if (compras.valor <= 59){
//       listaCliente[compras.valor] = "Sua compra não dá direito ao desconto."
//     }else if (compras.valor >= 60 && compras.valor <= 99){
//       listaCliente[compras.valor] = "Sua compra dá direito a 10% desconto."
//     }else if (compras.valor >= 100 && compras.valor <= 199){
//       listaCliente[compras.valor] = "Sua compra dá direito a 20% desconto."
//     }else{
//       listaCliente[compras.valor] = "Sua compra dá direito a 50% desconto."
//     }
//   }
//   console.table(listaCliente)
// }

// somarListaDaCliente(clienteLilit)
// console.log("---------------------------");
// somarListaDaCliente(clienteAdriana)
// console.log("---------------------------");
// somarListaDaCliente(clienteReprograma)

// -------------------------------------------------------------------------------------

// Tentativa 4 com ajuda da Julia:

function carrinhoCliente(cliente) {
  let valorTotal = 0
  let valorTotalComDesconto = 0

  for (let produto of cliente.carrinho) {
    let produtoEmPromocao = produto.valor
    if (produtoEmPromocao >= 60 && produtoEmPromocao <= 99) {
      produtoEmPromocao = produtoEmPromocao - produtoEmPromocao * 0.10
      console.log("Produto com 10% de desconto");
    } else if (produtoEmPromocao >= 100 && produtoEmPromocao <= 199) {
      produtoEmPromocao = produtoEmPromocao - produtoEmPromocao * 0.20
      console.log("Produto com 20% de desconto");
    } else {
      produtoEmPromocao = produtoEmPromocao - produtoEmPromocao * 0.50
      console.log("Produto com 50% de desconto");
    }
    console.log(produtoEmPromocao);
    valorTotalComDesconto = valorTotalComDesconto + produtoEmPromocao
    valorTotal = valorTotal + produto.valor
  }

  // console.log(produto.valor); //ele mostra os 11 itens
  // console.log(valorTotal);
  console.log(`O valor total da compra é ${valorTotal}`);
  console.log(`O valor total com desconto é ${valorTotalComDesconto}`);
}
carrinhoCliente(`cliente ${dia}/${mes + 1}/${ano}`)

function darMaisBrinde(cliente) {
  if (valorTotalComDesconto >= 800 || cliente.carrinho.length >= 9) {
    console.log("Você ganhou um cupom no valor de R$50,00");
  } else {
    pagamentoPixOuAvista == true
    console.log("Você ganhou mais 5% de desconto na sua compra!")
  }
}
darMaisBrinde(`cliente ${dia}/${mes + 1}/${ano}`)

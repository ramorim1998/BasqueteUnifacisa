var carrinho = 0.00;
var nome = document.getElementById("nome");
nome.innerHTML = sessionStorage.getItem("nome");
//função de compras, adicionando os valores dos produtos ao carrinho
function compra(value){
    var valor = parseFloat(value);
    carrinho += valor;
    document.getElementById("valor").innerHTML = 'R$ ' + carrinho;
}

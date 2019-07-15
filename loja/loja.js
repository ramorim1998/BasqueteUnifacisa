var carrinho = 0.00;
//função de compras, adicionando os valores dos produtos ao carrinho
function compra(value){
    var valor = parseFloat(value);
    carrinho += valor;
    document.getElementById("valor").innerHTML = 'R$ ' + carrinho;
}
function nome(){
    document.getElementById("nome").innerHTML = sessionStorage.getItem("nome");
}
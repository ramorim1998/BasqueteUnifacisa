var carrinho = 0.00;
function compra(value){
    var valor = parseFloat(value);
    carrinho += valor;
    document.getElementById("valor").innerHTML = 'R$ ' + carrinho;
}

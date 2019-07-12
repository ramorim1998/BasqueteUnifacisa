function entrar(){
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var cpf = document.getElementById("cpf");
    var senha = document.getElementById("senha");
    var confirme_senha = document.getElementById("confirme-senha");

    if(nome.value!="" && email.value !="" && cpf.value !="" && senha.value !="" && confirme_senha.value == senha.value){
        window.location = "../loja/loja.html";
    }else{
        alert('nome invalido')
    }

}

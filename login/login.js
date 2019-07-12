function entrar(){
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var cpf = document.getElementById("cpf");
    var senha = document.getElementById("senha");
    var confirme_senha = document.getElementById("confirme-senha");

    if(nome.value!="" || nome.value!=null){
        document.getElementsByTagName("p").style.color = "orange";
    }
}

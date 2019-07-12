function entrar(){
   /**  var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var cpf = document.getElementById("cpf");
    var senha = document.getElementById("senha");
    var confirme_senha = document.getElementById("confirme-senha");*/
    // validação de informações do usuario para acesso a loja;
    var infos = [ document.getElementById("nome"),document.getElementById("email"),document.getElementById("cpf")
,document.getElementById("senha"), document.getElementById("confirme-senha")]
    if(!infos.includes("")){
       window.location.href = '../loja/loja.html';
    }else{
        document.getElementById("feedback").style.color = "red";
        document.getElementById("feedback").innerHTML = "preencha todos os campos para concluir!"
    }

}

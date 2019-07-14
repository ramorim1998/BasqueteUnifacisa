var email = document.getElementById("email");
function entrar(){
   /**  var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var cpf = document.getElementById("cpf");
    var senha = document.getElementById("senha");
    var confirme_senha = document.getElementById("confirme-senha");*/
    // validação de informações do usuario para acesso a loja;
    var infos = [ document.getElementById("nome"),IsEmail(email),document.getElementById("cpf")
,document.getElementById("senha"), document.getElementById("confirme-senha")]

    if(!infos.includes("") || infos.includes(true)){
       window.location.href = '../loja/loja.html';
    }else{
        document.getElementById("feedback").style.color = "red";
        document.getElementById("feedback").innerHTML = "preencha todos os campos para concluir!"
    }

}
function IsEmail(email){
    var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
    var check=/@[w-]+./;
    var checkend=/.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
    else {return true;}
}
function senha(){
    
}
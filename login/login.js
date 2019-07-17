
function entrar(){
    // validação de informações do usuario para acesso a loja;
    var nome = document.getElementById("nome").value;
   var email = document.getElementById("email").value;
   var cpf = document.getElementById("cpf").value;
   var senha = document.getElementById("senha").value;
   var confirme = document.getElementById("confirme-senha").value;

       if(nome != "", email != "", cpf!="", senha !="", confirme == senha){
          window.location.href = "../loja/loja.html";
           localStorage.setItem('nome',nome);
       }else{
           document.getElementById("feedback").style.color = "red";
           document.getElementById("feedback").innerHTML = "preencha todos os campos para concluir!"
       }
       
}


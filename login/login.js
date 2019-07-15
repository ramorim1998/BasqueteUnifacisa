
function entrar(){
    // validação de informações do usuario para acesso a loja;
   var email = document.getElementById("email");
   var infos = [ document.getElementById("nome").value,document.getElementById("email").value,document.getElementById("cpf").value
   ,document.getElementById("senha").value, document.getElementById("confirme-senha").value];
   //verificação se os valores passados foram corretos, para que haja acesso a loja
       if(!infos.includes("") && infos[3] == infos[4]){
          window.location.href = '../loja/loja.html';
         sessionStorage.setItem("nome","joaquim");
       }else{
           document.getElementById("feedback").style.color = "red";
           document.getElementById("feedback").innerHTML = "preencha todos os campos para concluir!"
       }
       
}


document.getElementById("botaoEnviar").addEventListener("click", validaformulario)

function validaformulario(){

 if(document.getElementById("Nome").value != "" &&                       document.getElementById("Email").value !="" && 
    document.getElementById("Telefone").value !=""){
     alert("Prontinho! Você receberá todas as novidades por email.")
  }else{
     alert("Por favor, preencha os campos de nome, email e telefone.")
  } 
}







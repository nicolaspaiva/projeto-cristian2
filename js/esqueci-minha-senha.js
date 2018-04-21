$(document).ready(function(){
   $('#esqueci-minha-senha').submit(function(e){
      swal("Intruções enviadas", "As intruções para a recuperação da senha foram enviadas para o seu e-mail.", "success");
      e.preventDefault();
   });
});
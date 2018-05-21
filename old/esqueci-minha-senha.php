<?php include 'header.php'; ?>
<div id="background-image-home"></div>
<form id="esqueci-minha-senha" class="form-signin text-center">
    <img class="mb-4" src="images/logo.png" alt="" width="72" height="72">
    <label class="mb-4">Informe seu e-mail ou login e enviaremos instruções para você criar sua senha.</label>
    <label for="inputEmail" class="sr-only">E-mail</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="E-mail" required autofocus>
    <button class="btn btn-lg btn-block" type="submit">Enviar</button>
    <a class="link-esqueci-senha" href="index.php"><i class="fa fa-chevron-circle-left"></i> Voltar</a>
</form>
<?php include 'footer.php'; ?>
<?php include 'header.php'; ?>
<div id="background-image-home"></div>
<form class="form-signin text-center" action="dashboard.php">
    <img class="mb-4" src="images/logo.png" alt="" width="72" height="72">
    <label for="inputEmail" class="sr-only">E-mail</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="E-mail" required autofocus>
    <label for="inputPassword" class="sr-only">Senha</label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required>
    <button class="btn btn-lg btn-block" type="submit">Entrar</button>
    <a class="link-esqueci-senha" href="esqueci-minha-senha.php">Esqueceu sua senha <i class="fa fa-question-circle"></i></a>
</form>
<?php include 'footer.php'; ?>
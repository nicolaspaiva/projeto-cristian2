<?php include 'header-dashboard.php'; ?>
<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 class="display-4">Alterar senha</h1>
</div>
<div class="container">
    <form>
        <div class="row">
            <div class="col-md-4 form-group">
                <label>Senha atual</label>
                <input type="password" class="form-control"/>
            </div>
            <div class="col-md-4 form-group">
                <label>Nova senha</label>
                <input type="password" class="form-control"/>
            </div>
            <div class="col-md-4 form-group">
                <label>Confirmação da nova senha</label>
                <input type="password" class="form-control"/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-right">
                <button class="btn btn-custom">Trocar senha</button>
            </div>
        </div>
    </form>
</div>
<?php include 'footer.php'; ?>
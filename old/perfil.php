<?php include 'header-dashboard.php'; ?>
<div class="container">
    <div class="row">
        <div  class="col-md-5">
            <div id="profile">
                <div id="complement-theme"></div>
                <div class="row">
                    <div class="col-md-4">
                        <div id="image"></div>                
                    </div>
                    <div id="info-profile" class="col-md-8">
                        <div id="name">Nícolas Paiva</div>
                        <div id="level">GOLD 1</div>
                        <div id="info-level-progress">17/20 aventuras realizadas</div>
                        <div id="level-progress"><div id="real-progress-level" class="_50"></div></div>
                        <div class="col-md-12">
                            <div id="row-medals" class="row">
                                <div class="medal _1"></div>
                                <div class="medal _2"></div>
                                <div class="medal _3"></div>
                                <div class="medal _4"><div class="disabled _40"></div></div>
                                <div class="medal _5 disabled"><div class="disabled _85"></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-7">
            <form id="perfil-form">
                <div id="title-form">Alterar dados pessoais</div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Apelido</label>
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label>Nome</label>
                        <input type="text" disabled="disabled" class="form-control"/>
                    </div>
                    <div class="col-md-6">
                        <label>E-mail</label>
                        <input type="text" disabled="disabled" class="form-control"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label>Nome</label>
                        <input type="text" disabled="disabled" class="form-control"/>
                    </div>
                    <div class="col-md-6">
                        <label>E-mail</label>
                        <input type="text" disabled="disabled" class="form-control"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 mt-3">
                        <button type="submit" class="btn btn-success">Salvar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>    
</div>
<?php
include 'footer.php';


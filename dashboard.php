<?php include 'header-dashboard.php'; ?>
<div class="container">
    <div class="row">
        <div id="pontuacao-atual" class="col-md-4 mt-5">
            <img src="images/trofeu.png" width="64" height="64"/>
            <div class="bar">
                <div class="current-type">Nível atual: <span>GOLD 1</span></div>
                <div class="text-bar">Completados 23/30 testes para ser GOLD 2</div>
                <div class="full-bar">
                    <div class="current-bar"></div>
                </div>
            </div>
        </div>
        <div class="col-md-1"></div>
        <a href="pergunta.php" id="iniciar-teste" class="col-md-7 mt-5">
            INICIAR TESTE DE HOJE
        </a>
    </div>
    <div class="card-deck mb-3 text-center">
        <div class="title-session">Principais ofertas</div>    
        <div class="card mb-4 box-shadow">
            <div class="card-header">
                <h4 class="my-0 font-weight-normal"><b>$</b>150</h4>
            </div>
            <div class="card-body">
                <div class="card-title pricing-card-title">
                    <img src="images/cafe.png" width="64" height="64"/>
                </div>
                <ul class="list-unstyled mt-3 mb-4">
                    <li>Café da tarde especial</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-outline-primary btn-outline-custom">Adquirir</button>
            </div>
        </div>
        <div class="card mb-4 box-shadow">
            <div class="card-header">
                <h4 class="my-0 font-weight-normal"><b>$</b>150</h4>
            </div>
            <div class="card-body">
                <div class="card-title pricing-card-title">
                    <img src="images/camisa.png" width="64" height="64"/>
                </div>
                <ul class="list-unstyled mt-3 mb-4">
                    <li>Camisa Google</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-outline-primary btn-outline-custom">Adquirir</button>
            </div>
        </div>
        <div class="card mb-4 box-shadow">
            <div class="card-header">
                <h4 class="my-0 font-weight-normal"><b>$</b>170</h4>
            </div>
            <div class="card-body">
                <div class="card-title pricing-card-title">
                    <img src="images/bone.png" width="64" height="64"/>
                </div>
                <ul class="list-unstyled mt-3 mb-4">
                    <li>Boné Google</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-outline-primary btn-outline-custom">Adquirir</button>
            </div>
        </div>
        <div class="col-md-12">
            <a href="loja.php" class="btn btn-custom">Ver todas ofertas</a>
        </div>
    </div>
</div>
<?php
include 'footer.php';

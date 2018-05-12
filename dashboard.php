<?php include 'header-dashboard.php'; ?>
<div class="container">
    <div id="first-box" class="row">
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
        <a href="pergunta.php" id="iniciar-teste" class="col-md-7 mt-5"></a>
    </div>
</div>
<?php
include 'footer.php';

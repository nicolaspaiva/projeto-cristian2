<?php include 'header.php'; ?>
<div id="background-image-home"></div>
<form class="form-signin text-center" action="dashboard.php">
    <div class="header-question">
        <div class="title-category-question">PLANOS</div>
    </div>
    <div class="question">
        <div class="box-question box-question-1"></div>
        <div class="box-question box-question-2"></div>
        <div class="box-question box-question-3"></div>
        <div class="box-question box-question-4"></div>
        <div class="box-question box-question-5"><div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</div></div>
        <div class="box-type-answer"></div>
    </div>
    <div class="box-answer-question">
        <div class="answer-question" data-type="correct"><div>Lorem ipsum dolor sit amet</div></div>
        <div class="answer-question" data-type="incorrect"><div>Lorem ipsum dolor sit amet</div></div>
        <div class="answer-question" data-type="incorrect"><div>Lorem ipsum dolor sit amet</div></div>
        <div class="answer-question" data-type="incorrect"><div>Lorem ipsum dolor sit amet</div></div>
    </div>
    <div class="footer-question">
        <a href="dashboard.php" class="more-time-question" title="Sair do teste"><i class="fa fa-close"></i></a>
        <div class="help-question-question" title="Retirar 2 opções"><i class="fa fa-bomb"></i></div>
        <a href="pergunta.php" class="try-again-question" title="Trocar pergunta"><i class="fa fa-repeat"></i></a>
        <a href="pergunta.php" class="next-question" title="Próxima pergunta"><i class="fa fa-chevron-circle-right"></i></a>
    </div>
</form>
<?php include 'footer.php'; ?>
$(document).ready(function () {
    if ($('.answer-question').length) {
        var count = 100;
        $('.answer-question').each(function () {
            var this_ = $(this);
            count += 200;
            setTimeout(function () {
                this_.fadeIn('slow');
            }, count);
        });
        $('.answer-question').click(function () {
            $('.answer-question').each(function () {
                if (!$(this).hasClass('disabled')) {
                    if ($(this).data('type') == 'correct') {
                        $(this).addClass('correct');
                    } else {
                        $(this).addClass('incorrect');
                    }
                }
            });
            if ($(this).data('type') == 'correct') {
                correto();
            } else {
                incorreto();
            }
        });
    }

    $('.help-question-question').click(function () {
        var count = 0;
        $('.answer-question').each(function () {
            if (count == 1 || count == 2) {
                $(this).addClass('disabled');
            }
            count++;
        });
    });
});

function correto() {
    $('.box-type-answer').text('Correto');
    $('.box-type-answer').addClass('correto');
    showTypeAnswer();
}

function incorreto() {
    $('.box-type-answer').text('Incorreto');
    $('.box-type-answer').addClass('incorreto');
    showTypeAnswer();
}

function showTypeAnswer() {
    $('.box-type-answer').fadeIn('slow');
    $('.box-question').css('opacity', '0.25');
    setTimeout(function(){
        location.reload();
    }, 2000);
}
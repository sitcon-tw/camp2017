var scrollHeight, distance
const height = document.documentElement.clientHeight || document.body.clientHeight
const pages = ['about', 'coc', 'coc1', 'schedule', 'schedule1', 'subject', 'active', 'experience']

function bar() {
    scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
    distance = (scrollHeight - height) / height;
    if (scrollHeight >= height) {
        $('#bar').addClass('scrolled')
    } else {
        $('#bar').removeClass('scrolled')
    }
    for (var i = 0; i < pages.length; ++i) {
        if (distance >= i && distance < (i + 1)) {
            $("#bar").addClass(pages[i])
            $('#'+pages[i]).addClass('animation')
        } else {
            $("#bar").removeClass(pages[i])
            $('#'+pages[i]).removeClass('animation')
        }
    }
}

$(document).ready(function () {
    bar()
    $(window).scroll(function () {
        bar()
    })
    $('.scroll').click(function () {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 300);
    });
})
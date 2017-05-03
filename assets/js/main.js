var scrollHeight, distance
const height = document.documentElement.clientHeight || document.body.clientHeight
const pages = ['sitcon', 'camp', 'coc', 'apply', 'experience']

function bar() {
    scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
    distance = (scrollHeight - (height - 400)) / height;
    if (scrollHeight >= 400) {
        $('#bar').addClass('scrolled')
    } else {
        $('#bar').removeClass('scrolled')
    }
    for (var i = 0; i < pages.length; ++i) {
        if (distance >= i && distance < (i + 1)) {
            $("#bar").addClass(pages[i])
        } else {
            $("#bar").removeClass(pages[i])
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
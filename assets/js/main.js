var scrollHeight, distance
const height = document.documentElement.clientHeight || document.body.clientHeight
const pages = ['about', 'coc', 'schedule', 'subject', 'experience', 'footer']

function bar() {
    scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
    distance = (scrollHeight - height + 60) / height;
    if (scrollHeight >= (height - 60)) {
        $('#bar').addClass('scrolled')
    } else {
        $('#bar').removeClass('scrolled')
    }
    for (var i = 0; i < pages.length; ++i) {
        // console.log($('#' + pages[i]).offset().top, scrollHeight)
        if ((scrollHeight >= ($('#' + pages[i]).offset().top - 60)) && (scrollHeight < ($('#' + pages[i + 1]).offset().top - 57))) {
            $('#bar').addClass(pages[i])
        } else {
            $('#bar').removeClass(pages[i])
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
    $('.toggle').click(function () {
        $('.toggle').toggleClass('active')
        $('#nav').toggleClass('active')
        $('#nav>ul').toggleClass('active')
    })
    if (((navigator.userAgent).indexOf('Safari') > -1) && !((navigator.userAgent).indexOf('Chrome') > -1)) {
        // $('.row').before().css('transform', 'translateX(-.5em)')
        $('.timeline').append('<style>.row:before{transform: translateX(-.5em);}</style>')
    }
})
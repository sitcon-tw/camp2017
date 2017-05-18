var scrollHeight, distance
const height = document.documentElement.clientHeight || document.body.clientHeight
const pages = ['about', 'schedule', 'subject', 'apply', 'team', 'experience', 'coc', 'footer']

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
    if ((!!navigator.userAgent.match('Trident'))) {
        $('body').append('<div class="warning"><img src="assets/images/ie.png"><h1 class="title">注意！請使用這個時代的瀏覽器！</h1><p>按一下以繼續用恐龍的角度瀏覽</p></div>')
    }
    $('.warning').click( function() {
        $('.warning').hide()
    })
})
$(document)
    .on('click', 'a[href*="#"]', function() {
        if ( this.hash ) {
            $.bbq.pushState( '#/' + this.hash.slice(1) );
            return false;
        }
    })
    .ready(function() {
        $(window).bind('hashchange', function(event) {
            var tgt = location.hash.replace(/^#\/?/,'');
            if ( document.getElementById(tgt) ) {
                $.smoothScroll({scrollTarget: '#' + tgt});
            }
        });

        $(window).trigger('hashchange');
    });

/* Back top
 -----------------------------------------------*/
$(document).ready(function() {
    var height = document.documentElement.clientHeight/3.5;
    $(window).scroll(function () {
        if ($(this).scrollTop() > height) {
            $('.go-top').fadeIn(height);
        } else {
            $('.go-top').fadeOut(height);
        }
    });
    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    })
});


$('#indicatorContainer').radialIndicator({
    barColor: {
        0: '#FF0000',
        33: '#FFFF00',
        66: '#0066FF',
        100: '#33CC33'
    },
    percentage: true,
    barWidth: 15,
    initValue: 70,
    roundCorner : true,
    percentage: true
});
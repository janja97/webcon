$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if(scroll >= 100) {
        $('.fixed-top').addClass('sticky');
    } else {
        $('.fixed-top').removeClass('sticky');
    }
});

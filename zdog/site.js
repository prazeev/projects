$(function() {
var items = $("li");
var animating = false;

$(".btn-floating.btn-large.waves-effect.waves-light.green.accent-4").click(function() {
    clearTimeout($.data(this, 'scrollTimer'));
    if (!animating) {
        $.data(this, 'scrollTimer', setTimeout(function() {
            items.each(function(key, value) {
                if (($(value).offset().top - 50) > $(window).scrollTop()) {
                    animating = true;
                    $('body').animate( { scrollTop: Number($(value).offset().top)-Number(50) + 'px' }, 250);
                    setTimeout(function() { animating = false; }, 300);
                    return false;
                }
            });
        }, 200));
    }
});;
});
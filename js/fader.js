$(document).ready( () => {
    $('#monitor-logo').fadeIn(1500);
    $('#monitor-title').fadeIn(2500)
})

$(window).scroll(function() {
    $('.product-item').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+470) {
        $(this).css('opacity', 1);
      }
    });
});

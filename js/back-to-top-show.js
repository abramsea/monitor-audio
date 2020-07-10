
const scrollUp = `
    <a class="back-to-top" href="#series"><i class="fas fa-chevron-circle-up"></i></a>
    `

$('body').append(scrollUp);

$(window).scroll(function(){
    if($(window).scrollTop()>600){
        $('.back-to-top').fadeIn()
    }
})

$(window).scroll(function(){
    if($(window).scrollTop()<600){
        $('.back-to-top').fadeOut()
    }
})
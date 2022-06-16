$('.topLeft').click(function(){
    $('.gnb_open').animate({left:0},300);
    $('.dark').fadeIn(300);
});

$('.dark').click(function(){
    $('.dark').fadeOut(200);
    $('.gnb_open').animate({left: '-320px'},200);
    $('.loginPop').hide();
});

$('.btn_charactor').click(function(){
    $(this).find('span').toggleClass('on');
    $('.characterWrap').slideToggle(300);
});

$('.btn_category').click(function(){
    $(this).find('span').toggleClass('on');
    $('.categoryWrap').slideToggle(300);
});

$('.log').click(function(){
    $('.gnb_open').animate({left: '-320px'},200);
    $('.loginPop').show();
})

$('.w2-section__btn').on('click',function(){
    $('.w2-section__bg').css('display','none');
    $('.w2-section__btn').css('display','none');
    $('.w2-section__sub').css('display','none');
    $('.w2-section__video').css('display','block');
    $('.w2-section__item').css('margin-top', '49px');
    $('.w2-section__desc').css('margin-bottom', '100px');
    document.getElementById('w2-section__video').play();
});

$('.w5-section__item:nth-child(1)').hover(function (){
    $('.w5-section__item-img-1').toggleClass('hover');
});
$('.w5-section__item:nth-child(2)').hover(function (){
    $('.w5-section__item-img-2').toggleClass('hover');
    $('.w5-section__item-img-3').toggleClass('hover');
});
$('.w5-section__item:nth-child(3)').hover(function (){
    $('.w5-section__item-img-4').toggleClass('hover');
});
$('.w5-section__item:nth-child(4)').hover(function (){
    $('.w5-section__item-img-5').toggleClass('hover');
    $('.w5-section__item-img-6').toggleClass('hover');
    $('.w5-section__item-img-7').toggleClass('hover');
});

new WOW().init();


var target = $('.w4-section');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight + 200;
var scrollbool = true;
var anim_counter = 0;
var animate = true;
function anim(){
    if(animate){
        switch (anim_counter){
            case 0:
                animate = false;
                setTimeout( () => $('.w4-section__img-a-1-1').css('display','block').addClass('animate__fadeInDown'), 500);
                setTimeout( () => $('.w4-section__img-a-1-2').css('display','block').addClass('animate__fadeInDown'), 500);
                setTimeout( () => $('.progress-bar__inner').css('width','13%'), 500);

                setTimeout( () => $('.w4-section__img-a-2-1').css('display', 'block').addClass('animate__fadeInRight'), 1000);
                setTimeout( () => $('.w4-section__img-a-2-2').css('display', 'block').addClass('animate__fadeInLeft'), 1000);
                setTimeout(() => $('.progress-bar__inner').css('width','26%'), 1000);

                setTimeout( () => $('.w4-section__img-a-3').css('display', 'block').addClass('animate__fadeInDown'), 1500);
                setTimeout(() => $('.progress-bar__inner').css('width','33%'), 1500);
                setTimeout(() => animate = true,1500);
                anim_counter++;
                break;
            case 1:
                animate = false;
                $('.w4-section__img-a-3').removeClass('animate__fadeInDown').addClass('animate__fadeOut');
                setTimeout( () => $('.w4-section__img-m-3').css('display','block'), 500);
                setTimeout( () => $('.w4-section__img-m-1').css('display','none'), 500);
                setTimeout( () => $('.w4-section__img-a-5-1').css('display','block').addClass('animate__fadeIn'), 500);
                setTimeout( () => $('.w4-section__img-a-5-2').css('display','block').addClass('animate__fadeIn'), 500);
                setTimeout( () => $('.progress-bar__inner').css('width','46%'), 500);

                setTimeout( () => $('.w4-section__img-a-6-1').css('display','block').addClass('animate__fadeIn'), 1000);
                setTimeout( () => $('.w4-section__img-a-6-2').css('display','block').addClass('animate__fadeIn'), 1000);
                setTimeout( () => $('.w4-section__img-a-5-1').css('display','none'), 1000);
                setTimeout( () => $('.w4-section__img-a-5-2').css('display','none'), 1000);
                setTimeout( () => $('.w4-section__title').html('We make the market better'),1000);
                setTimeout( () => $('.w4-section__logo span').css('color', 'rgb(140, 203, 23)').html('Good market'),1000);
                setTimeout( () => $('.w4-section__desc').html('Working mechanism of earning without interference.<br> Best market price no matter the stock'), 1000);
                setTimeout( () => $('.w4-section__logo-red').css('display', 'none'), 1000);
                setTimeout( () => $('.w4-section__logo-green').css('display', 'block'), 1000);
                setTimeout( () => $('.w4-section__img-a-1-1').removeClass('animate__fadeInDown').addClass('animate__fadeOutDown'), 1000);
                setTimeout( () => $('.w4-section__img-a-1-2').removeClass('animate__fadeInDown').addClass('animate__fadeOutDown'), 1000);
                setTimeout( () => $('.w4-section__img-a-2-1').removeClass('animate__fadeInRight').addClass('animate__fadeOutDown'), 1000);
                setTimeout( () => $('.w4-section__img-a-2-2').removeClass('animate__fadeInLeft').addClass('animate__fadeOutDown'), 1000);
                setTimeout( () => $('.progress-bar__inner').css('width','59%'), 1000);

                setTimeout( () => $('.w4-section__img-m-2').css('display','block'), 1500);
                setTimeout( () => $('.w4-section__img-m-3').css('display','none'), 1500);
                setTimeout( () => $('.w4-section__img-a-7-1').css('display','block').addClass('animate__fadeIn'), 1500);
                setTimeout( () => $('.w4-section__img-a-7-2').css('display','block').addClass('animate__fadeIn'), 1500);
                setTimeout( () => $('.w4-section__img-a-6-1').css('display','none'), 1500);
                setTimeout( () => $('.w4-section__img-a-6-2').css('display','none'), 1500);
                setTimeout( () => $('.progress-bar__inner').css('width','66%'), 1500);
                setTimeout(() => animate = true,1500);
                anim_counter++;
                break;
            case 2:
                animate = false;
                setTimeout( () => $('.w4-section__img-a-8').css('display','block').addClass('animate__fadeInUp'), 500);
                setTimeout( () => $('.w4-section__img-a-line').css('display','block').addClass('animate__fadeIn'), 500);
                setTimeout( () => $('.progress-bar__inner').css('width','73%'), 500);
                setTimeout( () => $('.w4-section__img-a-9').css('display','block').addClass('animate__fadeInUp'), 1000);
                setTimeout( () => $('.progress-bar__inner').css('width','81%'), 1000);
                setTimeout( () => $('.w4-section__img-a-10').css('display','block').addClass('animate__fadeInUp'), 1500);
                setTimeout( () => $('.progress-bar__inner').css('width','88%'), 1500);

                setTimeout( () => $('.w4-section__img-a-7-1').css('display','block').removeClass('animate__fadeIn').addClass('animate__fadeOut'), 2000);
                setTimeout( () => $('.w4-section__img-a-7-2').css('display','block').removeClass('animate__fadeIn').addClass('animate__fadeOut'), 2000);
                setTimeout( () => $('.w4-section__img-a-11').css('display','block').addClass('animate__fadeInUp'), 2000);
                setTimeout( () => $('.w4-section__img-a-12').css('display','block').addClass('animate__fadeInUp'), 2000);
                setTimeout( () => $('.w4-section__img-a-13').css('display','block').addClass('animate__fadeInUp'), 2000);
                setTimeout( () => $('.progress-bar__inner').css('width','95%'), 2000);

                setTimeout( () => $('.w4-section__img-a-14').css('display','block').addClass('animate__fadeIn'), 2500);
                setTimeout( () => $('.w5-section').css('display','block'), 2500);
                setTimeout( () => $('.w6-section').css('display','block'), 2500);
                setTimeout( () => $('.footer').css('display','block'), 2500);
                setTimeout( () => $('.progress-bar__inner').css('width','calc(100% + 2px)'), 2500);
                anim_counter++;
                break;
        }
    }
}
$(document.body).on('DOMMouseScroll mousewheel',function(e) {
    console.log('scroll');
    if (window.innerWidth > 1023) {
        if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
            var winScrollTop = $(window).scrollTop();
            console.log(winScrollTop+" "+scrollToElem);
            if (winScrollTop > scrollToElem) {
                if (scrollbool) {
                    $('body').css('overflow-x','hidden');
                    $('html, body').animate({
                        scrollTop: ($(".w4-section").offset().top )
                    }, 500);
                    setTimeout(() => $('body').css('overflow-x','auto'), 1000);
                    scrollbool = false;
                }
                anim();

            }
        }
    }
})
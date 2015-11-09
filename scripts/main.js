(function() {

    console.log("loaded!");

    init();

    'use strict';

    var querySelector = document.querySelector.bind(document);

    //var navdrawerContainer = querySelector('.navdrawer-container');
    var body = document.body;
    //var appbarElement = querySelector('.app-bar');
    //var menuBtn = querySelector('.menu');
    var main = querySelector('main');
    /*
      function closeMenu() {
        body.classList.remove('open');
        appbarElement.classList.remove('open');
        navdrawerContainer.classList.remove('open');
      }

      function toggleMenu() {
        body.classList.toggle('open');
        appbarElement.classList.toggle('open');
        navdrawerContainer.classList.toggle('open');
        navdrawerContainer.classList.add('opened');
      }
    */
    console.log("greater than 500");

    var header = querySelector(header);

    var aboutOffset = $('.about-card').offset().top;
    var portfolioOffset = $('.portfolio-card').offset().top;
    var specializationOffset = $('.specialization-card').offset().top;

    var winX = $(window).width();
    var winY = $(window).height();

    var winYScreenPc = (winY * 0.75);

    $('main').scroll(function() {
        var xVal = $('.mdl-layout__content').scrollTop();


        console.log(xVal);

        if (xVal < aboutOffset-(winYScreenPc)) {
            console.log(aboutOffset);
            console.log("above about");


            $('.about-card .mdl-card__supporting-text').removeClass(
                'text-after'
            );
        }
        if (xVal > aboutOffset-(winYScreenPc)) {
            console.log(aboutOffset);
            console.log("below about");


            $('.about-card .mdl-card__supporting-text').addClass(
                'text-after'
            );
        }
        if (xVal < specializationOffset-(winYScreenPc)) {
            console.log(specializationOffset);
            console.log("above specialization");


            $('.specialization-card .mdl-card__supporting-text').removeClass(
                'text-after'
            );
        }
        if (xVal > specializationOffset-(winYScreenPc)) {
            console.log(specializationOffset);
            console.log("below specialization");


            $('.specialization-card .mdl-card__supporting-text').addClass(
                'text-after'
            );
        }
        if (xVal < portfolioOffset-(winYScreenPc)) {
            console.log(portfolioOffset);
            console.log("above portfolio");


            $('.portfolio-card .mdl-card__supporting-text').removeClass(
                'text-after'
            );
        }
        if (xVal > portfolioOffset-(winYScreenPc)) {
            console.log(portfolioOffset);
            console.log("below portfolio");


            $('.portfolio-card .mdl-card__supporting-text').addClass(
                'text-after'
            );
        }
    });

    // main.addEventListener('click', closeMenu);
    //menuBtn.addEventListener('click', toggleMenu);

})();

function init(){
    $('.about-card .mdl-card__supporting-text').addClass(
        'text-initial'
    );
    $('.specialization-card .mdl-card__supporting-text').addClass(
        'text-initial'
    );
    $('.portfolio-card .mdl-card__supporting-text').addClass(
        'text-initial'
    );
    console.log("added text-initial");
}

$(document).ready( function() {
    $('.headline-text').addClass(
        'text-after'
    );
    console.log("document loaded");
});
(function () {
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
  var title = querySelector('.mdl-layout-title').textContent;

  console.log(title);
  var aboutOffset = $('#about').offset().top;
  var specOffset = $('#specialization').offset().top;
  var designOffset = $('#design').offset().top;
  var developmentOffset = $('#development').offset().top;
  var contactOffset = $('#contact').offset().top;

  $('main').scroll(function(){
    var xVal = $('main').scrollTop();
    

    console.log(xVal);

    if(xVal < aboutOffset){
      console.log(aboutOffset);
      console.log("above about");
      document.getElementsByClassName('mdl-layout-title')[0].textContent = 'Carl Sim';
      
      $('.mdl-layout--fixed-header').css(
        'color', '#212121'
      );
    
    }
    if(xVal > aboutOffset-150){
      console.log(aboutOffset);
      console.log("past about");
      document.getElementsByClassName('mdl-layout-title')[0].textContent = 'About';
      
      $('.mdl-layout--fixed-header').css(
        'color', '#E0E0E0'
      );
     
    }
    if(xVal > specOffset-150){
      console.log("special");
      document.getElementsByClassName('mdl-layout-title')[0].textContent = 'Specialization';
      
      $('.mdl-layout--fixed-header').css(
        'color', '#00E5FF'
      );
      
    }
    if(xVal > designOffset-150){
      console.log("design");
      document.getElementsByClassName('mdl-layout-title')[0].textContent = 'Design';
      
      $('.mdl-layout--fixed-header').css(
        'color', '#0097A7'
      );
    }
    if(xVal > developmentOffset-150){
      console.log("design");
      document.getElementsByClassName('mdl-layout-title')[0].textContent = 'Development';
      
      $('.mdl-layout--fixed-header').css(
        'color', '#D32F2F'
      );
    }
    if(xVal > contactOffset-150){
      console.log("design");
      document.getElementsByClassName('mdl-layout-title')[0].textContent = 'Contact';
      
      $('.mdl-layout--fixed-header').css(
        'color', '#424242'
      );
      
    }
  });

 // main.addEventListener('click', closeMenu);
//menuBtn.addEventListener('click', toggleMenu);

})();

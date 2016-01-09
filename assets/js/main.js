(function () {
  'use strict';
  var url = window.location.href,
    navList = document.querySelectorAll('.nav > ul > li > a');

  for (var i = 0; i < navList.length; i++) {
    navList[i].className.replace(' select','');
    if(url.match(/\/\/\S*/)[0] === navList[i].href.match(/\/\/\S*/)[0]){
      navList[i].className = navList[i].className + ' select';
    }
  } 
}());
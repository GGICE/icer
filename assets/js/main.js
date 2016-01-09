(function () {
  'use strict';
  var url = window.location.href,
    navList = document.querySelectorAll('.nav > ul > li > a');

  for (var i = 0; i < navList.length; i++) {
    navList[i].className.replace(' nav-select','');
    if(url === navList[i].href){
      navList[i].className = navList[i].className + ' nav-select';
    }
  } 
}());
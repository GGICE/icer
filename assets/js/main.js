(function () {
  'use strict';
  var $ = {
    addClass: function (el, className) {
      if(!el.className.match(className)){
        el.className = el.className + ' ' + className;
      }
    },
    removeClass: function (el, className) {
      var reg = new RegExp(className,'g');
      el.className = el.className.replace(reg, '');
    }
  }

  function scroll() {
    var header = document.querySelector('.header'),
      headerTitle = document.querySelector('.header-title');

    if (headerTitle) {
      window.onscroll = function (e) {
        if (window.pageYOffset > 140) {
          $.addClass(headerTitle, 'show');
        }else{
          $.removeClass(headerTitle, 'show');
        }
      }
    }
  }

  scroll();
}());
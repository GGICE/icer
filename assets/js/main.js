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

  function nav() {
    var url = window.location.href.match(/\/\/\S*/)[0],
      navList = document.querySelectorAll('.nav > ul > li > a'),
      tags = document.querySelectorAll('.post-meta > a'),
      i = 0, 
      href;

    for (i; i < navList.length; i++) {
      $.removeClass(navList[i], 'select');
      href = navList[i].href.match(/\/\/\S*/)[0];

      if (url === href) {
        $.addClass(navList[i], 'select');
        break;
      }

      if (tags[0] && (href === tags[0].href.match(/\/\/\S*/)[0])) {
        $.addClass(navList[i], 'select');
        break;
      }

      if (tags[1] && (href === tags[1].href.match(/\/\/\S*/)[0])) {
        $.addClass(navList[i], 'select');
        break;
      } 
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

  nav();
  scroll();
}());
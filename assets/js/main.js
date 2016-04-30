(function () {
  'use strict';
  var $ = {
    addClass: function (el, className) {
      if(!el.className.match(className)){
        el.className = el.className + ' ' + className;
      }
    },
    removeClass: function (el, className) {
      var reg = new RegExp('( |)' + className,'g');
      el.className = el.className.replace(reg, '');
    },
    hide: function(el) {
     el.style.display = 'none';
    },
    show: function(el) {
      el.style.display = 'block';
    },
    isShow: function(el) {
      var display = window.getComputedStyle(el).display;
      return display !== 'none';
    }
  }

  function scroll() {
    var header = document.querySelector('.header'),
      headerTitle = document.querySelector('.header-title');

    if (headerTitle) {
      window.onscroll = function (e) {
        if (window.pageYOffset > 140) {
          $.show(headerTitle);
        }else{
          $.hide(headerTitle);
        }
      }
    }
  }

  function addEventListener() {
      var more = document.querySelector('.icon-more'),
      shade = document.querySelector('.shade'),
      nav = document.querySelector('.nav');

    more.addEventListener('click', function(event){
      event.stopPropagation();
      $.show(shade);
      $.show(nav);
    });
    nav.addEventListener('touchend', function(event) {
      event.stopPropagation();
    });
    document.addEventListener('click', function() {
      $.hide(shade);
      if($.isShow(more)) {
        $.hide(nav);
      }
    });
    document.addEventListener('touchend', function() {
      $.hide(shade);
      if($.isShow(more)) {
        $.hide(nav);
      }
    });
  }

  scroll();
  addEventListener();
}());

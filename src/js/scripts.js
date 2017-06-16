/* eslint-disable module-strict */

(function() {
  'use strict';
  // Not on browser
  if (typeof document === 'undefined') {
    return;
  }

  // Primitive mobile detection
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  var toggledTarget;
  function toggleTarget(event) {
    var target = document.body.querySelector(
      event.target.getAttribute('data-target')
    );

    if (target) {
      event.preventDefault();

      if (toggledTarget === target) {
        toggledTarget.classList.toggle('in');
      } else {
        toggledTarget &&
          toggledTarget.classList.remove('in');
        target.classList.add('in');
      }

      toggledTarget = target;
    }
  }

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    var mobile = isMobile();

    if (mobile) {
      document
        .querySelector('.nav-site-wrapper a[data-target]')
        .addEventListener('click', toggleTarget);
    }
  }

})();

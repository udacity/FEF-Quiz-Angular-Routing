(function() {

  var app = angular.module('routingQuizApp');
  var content = document.querySelectorAll('.container')[1];
  var homeLink = document.querySelector('#homeLink');
  var redLink = document.querySelector('#redBrickLink');
  var blueLink = document.querySelector('#blueBrickLink');

  function checkSubpageContent() {
    window.removeEventListener('hashchange', checkSubpageContent);
    window.addEventListener('hashchange', seeNestedCartOnSubpage);

    if (content.innerHTML.indexOf('Red Bricks') >= 0) {
      window.dispatchEvent(new CustomEvent('navigate-to-brick-page', {'detail': 'passed'}));
    }

    blueLink.click();
  }

  function seeNestedCartOnSubpage() {
    window.removeEventListener('hashchange', seeNestedCartOnSubpage);

    if (content.querySelectorAll('a').length >= 1) {
      window.dispatchEvent(new CustomEvent('cart-on-subpage', {'detail': 'passed'}));
    }

    homeLink.click();
  }

  window.addEventListener('hashchange', checkSubpageContent);

  if (app.requires.indexOf('ui.router') >= 0) {
    window.dispatchEvent(new CustomEvent('app-requires-ui-router', {'detail': 'passed'}));
  }

  redLink.click();

})();

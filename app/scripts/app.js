'use strict';

/**
 * @ngdoc overview
 * @name routingQuizApp
 * @description
 * # routingQuizApp
 *
 * Main module of the application.
 */
angular
  .module('routingQuizApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/instructions.html'
      })
      .state('redBrick', {
        url: '/bricks/red',
        templateUrl: 'views/bricks.html',
        controller: 'RedBricksCtrl as brick'
      })
      .state('redBrick.cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl as cart'
      })
      .state('blueBrick', {
        url: '/bricks/blue',
        templateUrl: 'views/bricks.html',
        controller: 'BlueBricksCtrl as brick'
      })
      .state('blueBrick.cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl as cart'
      })
      .state('greenBrick', {
        url: '/bricks/green',
        templateUrl: 'views/bricks.html',
        controller: 'GreenBricksCtrl as brick'
      })
      .state('greenBrick.cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl as cart'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl as cart'
      });
  }]);

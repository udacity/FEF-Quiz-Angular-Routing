'use strict';

/**
 * @ngdoc function
 * @name routingQuizApp.controller:GreenBricksCtrl
 * @description
 * # GreenBricksCtrl
 * Controller of the routingQuizApp
 */
angular.module('routingQuizApp')
  .controller('GreenBricksCtrl', ['purchaseManager', function (manager) {
    this.name = 'Green Bricks';

    this.bricks = {
      '2x4': {
        quantity: 13,
        price: 0.04
      },
      '2x8': {
        quantity: 41,
        price: 0.08
      }
    };

    this.addToCart = function(size, price) {
      manager.purchase('green', size, price);
    };
  }]);

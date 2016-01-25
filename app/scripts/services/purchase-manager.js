'use strict';

/**
 * @ngdoc service
 * @name routingQuizApp.purchaseManager
 * @description
 * # purchaseManager
 * Service in the routingQuizApp.
 */
angular.module('routingQuizApp')
  .service('purchaseManager', function () {
    this.total = 0.00;

    this.contents = [];

    this.purchase = function(color, size, price) {
      this.contents.push({'color': color, 'size': size});
      this.total += price;
    };
  });

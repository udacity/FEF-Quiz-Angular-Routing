'use strict';

/**
 * @ngdoc function
 * @name routingQuizApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the routingQuizApp
 */
angular.module('routingQuizApp')
  .controller('CartCtrl', ['purchaseManager', function (manager) {
    this.info = manager;
  }]);

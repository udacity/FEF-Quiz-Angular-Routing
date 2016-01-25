'use strict';

describe('Controller: RedBricksCtrl', function () {

  // load the controller's module
  beforeEach(module('routingQuizApp'));

  var RedBricksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RedBricksCtrl = $controller('RedBricksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RedBricksCtrl.awesomeThings.length).toBe(3);
  });
});

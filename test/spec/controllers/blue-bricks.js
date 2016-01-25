'use strict';

describe('Controller: BlueBricksCtrl', function () {

  // load the controller's module
  beforeEach(module('routingQuizApp'));

  var BlueBricksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlueBricksCtrl = $controller('BlueBricksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BlueBricksCtrl.awesomeThings.length).toBe(3);
  });
});

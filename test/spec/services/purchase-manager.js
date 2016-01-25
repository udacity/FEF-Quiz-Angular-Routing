'use strict';

describe('Service: purchaseManager', function () {

  // load the service's module
  beforeEach(module('routingQuizApp'));

  // instantiate service
  var purchaseManager;
  beforeEach(inject(function (_purchaseManager_) {
    purchaseManager = _purchaseManager_;
  }));

  it('should do something', function () {
    expect(!!purchaseManager).toBe(true);
  });

});

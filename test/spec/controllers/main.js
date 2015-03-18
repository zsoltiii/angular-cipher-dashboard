'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angular-cipher-dashboard'));
  beforeEach(module('zsoltiii.angular-cipher-filters'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should set a default text to encode on main page', function () {
    expect(scope.textAreaText.length).toBeGreaterThan(3);
  });
});

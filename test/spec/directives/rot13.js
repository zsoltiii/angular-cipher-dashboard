'use strict';

describe('Directive: rot13', function () {

  // load the directive's module
  beforeEach(module('angular-cipher-dashboard'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));
/*
  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rot13></rot13>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rot13 directive');
  }));*/
});

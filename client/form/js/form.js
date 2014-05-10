/*global angular */

var PersonCtrl = function($scope){
  $scope.person = {
    name: '',
    email: ''
  };
  $scope.debug = JSON.stringify($scope.person);
  $scope.change = function() {
    $scope.debug = JSON.stringify($scope.person);
  };
  $scope.save = function() {
    $scope.debug = 'saved';
  };
};

var UserController = function($scope){
  $scope.master= {};

  $scope.update = function(user) {
    $scope.master= angular.copy(user);
  };

  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };

  $scope.isUnchanged = function(user) {
    return angular.equals(user, $scope.master);
  };

  $scope.reset();
}

var app = angular.module('cust-validate-fmt', []);

var INTEGER_REGEXP = /^\-?\d*$/;
app.directive('integer', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        if (INTEGER_REGEXP.test(viewValue)) {
          // it is valid
          ctrl.$setValidity('integer', true);
          return viewValue;
        } else {
          // it is invalid, return undefined (no model update)
          ctrl.$setValidity('integer', false);
          return undefined;
        }
      });
    }
  };
});

var FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/;
app.directive('smartFloat', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        if (FLOAT_REGEXP.test(viewValue)) {
          ctrl.$setValidity('float', true);
          return parseFloat(viewValue.replace(',', '.'));
        } else {
          ctrl.$setValidity('float', false);
          return undefined;
        }
      });
    }
  };
});

// 注意 contenteditable 要小寫
angular.module('Contenteditable', []).directive('contenteditable', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      // view -> model
      elm.bind('blur', function() {
        scope.$apply(function() {
          ctrl.$setViewValue(elm.html());
        });
      });

      // model -> view
      ctrl.$render = function(value) {
        elm.html(value);
      };

      // load init value from DOM
      ctrl.$setViewValue(elm.html());
    }
  };
});
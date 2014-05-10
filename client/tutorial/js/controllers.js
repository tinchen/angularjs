'use strict';

/* global angular */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phones',
  function($scope, Phones) {
    $scope.phones = Phones.query(); // 此為非同步的函式呼叫，直接回傳 future 物件
    $scope.orderProp = 'age';
  }
]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phones',
  function($scope, $routeParams, Phones) {
    // $routeParams.phoneId 是從 $routeProvider 自動帶入
    $scope.phone = Phones.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    // 設定「大圖示」的圖片 url
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }
]);

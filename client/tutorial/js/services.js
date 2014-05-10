'use strict';

/* global angular */

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

// 定義一個名稱為 Phones 的 RESTful Service
phonecatServices.factory('Phones', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      // $http.get('phones/phones.json')
      query: { method:'GET', params:{ phoneId:'phones' }, isArray: true }
    });
  }]);

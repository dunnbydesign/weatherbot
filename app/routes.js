/* globals angular */

'use strict'

angular.module('weatherApp')
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controller: 'CurrentCtrl',
        controllerAs: 'current',
        templateUrl: './views/current/current.html'
      })
      .when('/forecast', {
        controller: 'ForecastCtrl',
        controllerAs: 'forecast',
        templateUrl: './views/forecast/forecast.html'
      })

    $locationProvider.html5Mode(true)
  }])

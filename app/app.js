'use strict';

angular.module('Wardoo', [
    'ngRoute',
    'ngCookies'
])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
		.when('/', {
			templateUrl: 'components/home/homeView.html'
		})
}])
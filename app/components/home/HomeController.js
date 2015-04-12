'use strict';

angular.module('Home')

.controller('HomeController',
	['$rootScope', '$scope', '$filter',
	function ($rootScope, $scope, $filter) {
		$rootScope.title = $filter('translate')('HOME.TITLE');
	}
]);
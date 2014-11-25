'use strict';

angular.module('Authentication')

.controller('LogoutController',
	['$location', 'AuthenticationService',
	function ($location, AuthenticationService) {
		AuthenticationService.ClearCredentials();
		$location.path('/');
	}
]);
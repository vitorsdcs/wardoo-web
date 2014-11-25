'use strict';

angular.module('Authentication')

.controller('LoginController',
	['$scope', '$rootScope', '$location', 'AuthenticationService',
	function ($scope, $rootScope, $location, AuthenticationService) {
		AuthenticationService.ClearCredentials();
		
		$scope.login = function () {
			$scope.dataLoading = true;
			AuthenticationService.Login($scope.username, $scope.password, function (response) {
				console.log(response);
				if (response.access_token) {
					AuthenticationService.SetCredentials($scope.username, response.access_token);
					$location.path('/');
				} else {
					$scope.error = response.error_description;
					$scope.dataLoading = false;
				}
			});
		};
	}
]);
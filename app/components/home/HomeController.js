'use strict';

angular.module('Home')

.controller('HomeController', ['$scope', function ($scope) {
	$scope.greeting = "Greetings visitor!";
	
	if ($scope.globals.currentUser) {
		$scope.greeting = "Greetings " + $scope.globals.currentUser.username + "!";
	}
}]);
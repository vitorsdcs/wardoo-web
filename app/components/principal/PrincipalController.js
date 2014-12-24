'use strict';

angular.module('Principal')

.controller('PrincipalListController',
	['$scope', 'PrincipalsFactory', 'PrincipalFactory', '$location',
	function ($scope, PrincipalsFactory, PrincipalFactory, $location) {
		$scope.editPrincipal = function(principalId) {
			$location.path('/principals/' + principalId);
		};
		
		$scope.deletePrincipal = function(principalId) {
			PrincipalFactory.delete({ id: principalId });
			$scope.principals = PrincipalsFactory.query();
		};
		
		$scope.createNewPrincipal = function() {
			$location.path('/principals/add');
		};
		
		$scope.principals = PrincipalsFactory.query();
	}
])

.controller('PrincipalCreationController',
	['$scope', 'PrincipalsFactory', '$location',
	function ($scope, PrincipalsFactory, $location) {
		$scope.createNewPrincipal = function () {
			// Sanitize contacts
			$scope.contacts = [];
			for (var contact in $scope.principal.person.contacts) {
				$scope.contacts.push($scope.principal.person.contacts[contact]);
			}
			$scope.principal.person.contacts = $scope.contacts;
			
			PrincipalsFactory.create($scope.principal);
			$location.path('/principals');
		}
	}
]);
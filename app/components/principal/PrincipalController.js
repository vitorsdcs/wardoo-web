'use strict';

angular.module('Principal')

.controller('PrincipalListController',
	['$scope', 'PrincipalsFactory', 'PrincipalFactory', '$location', 'ngProgress',
	function ($scope, PrincipalsFactory, PrincipalFactory, $location, ngProgress) {
		ngProgress.color('#186FB6');
		ngProgress.start();
		$scope.loading = true;
		$scope.empty = true;
		$scope.principals = PrincipalsFactory.query();
		$scope.principals.$promise.then(function (result) {
			$scope.principals = result;
			$scope.empty = $scope.principals.length == 0;
			$scope.loading = false;
			ngProgress.complete();
		});
		
		$scope.createNewPrincipal = function() {
			$location.path('/principals/add');
		};
		
		$scope.editPrincipal = function(principalId) {
			$location.path('/principals/' + principalId);
		};
		
		$scope.deletePrincipal = function(principalId) {
			PrincipalFactory.delete({ id: principalId });
			$scope.principals = PrincipalsFactory.query();
		};
		
		$scope.calculateAge = function calculateAge(birthDate) {
			var ageDifMs = Date.now() - new Date(birthDate).getTime();
			var ageDate = new Date(ageDifMs);
			return Math.abs(ageDate.getUTCFullYear() - 1970);
		};
	}
])

.controller('PrincipalCreationController',
	['$scope', 'PrincipalsFactory', '$location',
	function ($scope, PrincipalsFactory, $location) {
		$scope.createNewPrincipal = function () {
			$scope.principal.credential["user"] = {"role": "PRINCIPAL"};
			
			// Sanitize contacts
			$scope.contacts = [];
			for (var contact in $scope.principal.person.contacts) {
				if ($scope.principal.person.contacts[contact].value.indexOf("@") > -1)
					$scope.principal.person.contacts[contact].type = "EMAIL";
				else
					$scope.principal.person.contacts[contact].type = "PHONE";
				
				$scope.contacts.push($scope.principal.person.contacts[contact]);
			}
			$scope.principal.person.contacts = $scope.contacts;
			
			PrincipalsFactory.create($scope.principal);
			$location.path('/principals');
		}
		
		$scope.cancel = function() {
			$location.path('/principals');
		};
	}
]);
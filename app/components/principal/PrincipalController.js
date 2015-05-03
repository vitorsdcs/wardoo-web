'use strict';

angular.module('Principal')

.controller('PrincipalListController',
	['$rootScope', '$scope', 'PrincipalsFactory', 'PrincipalFactory', '$location', '$filter',
	function ($rootScope, $scope, PrincipalsFactory, PrincipalFactory, $location, $filter) {
		$rootScope.title = $filter('translate')('PRINCIPAL.TITLE');
		
		$scope.loading = true;
		$scope.empty = true;
		$scope.principals = PrincipalsFactory.query();
		$scope.principals.$promise.then(function (result) {
			$scope.principals = result;
			$scope.empty = $scope.principals.length == 0;
			$scope.loading = false;
		});
		
		$scope.createNewPrincipal = function() {
			$location.path('/principals/add');
		};
		
		$scope.editPrincipalProfile = function(principalId) {
			$location.path('/principal/' + principalId + '/edit/profile');
		};
	}
])

.controller('PrincipalCreationController',
	['$rootScope', '$scope', 'PrincipalsFactory', '$location', '$filter',
	function ($rootScope, $scope, PrincipalsFactory, $location, $filter) {
		$rootScope.title = $filter('translate')('PRINCIPAL.CREATE');
		
		$scope.createNewPrincipal = function () {
			// Add role.
			$scope.principal.user['role'] = 'PRINCIPAL';
			$scope.principal.user['school'] = { 'id': $scope.principal.school.id };
			
			// Sanitize contacts.
			$scope.contacts = [];
			for (var contact in $scope.principal.person.contacts) {
				if ($scope.principal.person.contacts[contact].value.indexOf('@') > -1)
					$scope.principal.person.contacts[contact].type = 'EMAIL';
				else
					$scope.principal.person.contacts[contact].type = 'PHONE';
				
				$scope.contacts.push($scope.principal.person.contacts[contact]);
			}
			$scope.principal.person.contacts = $scope.contacts;
			
			// Convert date to Y-m-d format.
			$scope.principal.person.birthDate = $filter('date')(new Date($scope.principal.person.birthDate), 'yyyy-MM-dd');
			
			PrincipalsFactory.create($scope.principal, function() {
				$location.path('/principals');
			});
		}
		
		$scope.cancel = function() {
			$location.path('/principals');
		};
	}
])

.controller('PrincipalEditProfileController',
	['$rootScope', '$scope', 'PrincipalsFactory', 'PrincipalFactory', '$location', '$filter', '$routeParams',
	function ($rootScope, $scope, PrincipalsFactory, PrincipalFactory, $location, $filter, $routeParams) {
		$rootScope.title = $filter('translate')('PRINCIPAL.EDIT');
		
		$scope.principal = PrincipalFactory.show({id: $routeParams.id});
		$scope.principal.$promise.then(function (result) {
			$scope.principal.person.birthDate = $filter('date')($scope.principal.person.birthDate, 'dd/MM/yyyy');
			delete $scope.principal.$promise;
			delete $scope.principal.$resolved;
		});
		
		$scope.updatePrincipal = function () {
			// Sanitize contacts.
			$scope.contacts = [];
			for (var contact in $scope.principal.person.contacts) {
				if ($scope.principal.person.contacts[contact].value.indexOf('@') > -1)
					$scope.principal.person.contacts[contact].type = 'EMAIL';
				else
					$scope.principal.person.contacts[contact].type = 'PHONE';
				
				$scope.contacts.push($scope.principal.person.contacts[contact]);
			}
			$scope.principal.person.contacts = $scope.contacts;
			
			// Convert date to Y-m-d format.
			$scope.principal.person.birthDate = $filter('date')(new Date($scope.principal.person.birthDate), 'yyyy-MM-dd');
			
			PrincipalsFactory.update($scope.principal, function() {
				$location.path('/principals');
			});
		}
		
		$scope.cancel = function() {
			$location.path('/principals');
		};
	}
]);
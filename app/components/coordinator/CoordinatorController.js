'use strict';

angular.module('Coordinator')

.controller('CoordinatorListController',
	['$rootScope', '$scope', 'CoordinatorsFactory', 'CoordinatorFactory', '$location', '$filter',
	function ($rootScope, $scope, CoordinatorsFactory, CoordinatorFactory, $location, $filter) {
		$rootScope.title = $filter('translate')('COORDINATOR.TITLE');
		
		$scope.loading = true;
		$scope.empty = true;
		$scope.coordinators = CoordinatorsFactory.query();
		$scope.coordinators.$promise.then(function (result) {
			$scope.coordinators = result;
			$scope.empty = $scope.coordinators.length == 0;
			$scope.loading = false;
		});
		
		$scope.createNewCoordinator = function() {
			$location.path('/coordinators/add');
		};
		
		$scope.editCoordinatorProfile = function(coordinatorId) {
			$location.path('/coordinator/' + coordinatorId + '/edit/profile');
		};
	}
])

.controller('CoordinatorCreationController',
	['$rootScope', '$scope', 'CoordinatorsFactory', '$location', '$filter',
	function ($rootScope, $scope, CoordinatorsFactory, $location, $filter) {
		$rootScope.title = $filter('translate')('COORDINATOR.CREATE');
		
		$scope.createNewCoordinator = function () {
			// Add role.
			$scope.coordinator.user['role'] = 'COORDINATOR';
			$scope.coordinator.user['school'] = { 'id': $scope.coordinator.school.id };
			
			// Sanitize contacts.
			$scope.contacts = [];
			for (var contact in $scope.coordinator.person.contacts) {
				if ($scope.coordinator.person.contacts[contact].value.indexOf('@') > -1)
					$scope.coordinator.person.contacts[contact].type = 'EMAIL';
				else
					$scope.coordinator.person.contacts[contact].type = 'PHONE';
				
				$scope.contacts.push($scope.coordinator.person.contacts[contact]);
			}
			$scope.coordinator.person.contacts = $scope.contacts;
			
			// Convert date to Y-m-d format.
			$scope.coordinator.person.birthDate = $filter('date')(new Date($scope.coordinator.person.birthDate), 'yyyy-MM-dd');
			
			CoordinatorsFactory.create($scope.coordinator, function() {
				$location.path('/coordinators');
			});
		}
		
		$scope.cancel = function() {
			$location.path('/coordinators');
		};
	}
])

.controller('CoordinatorEditProfileController',
	['$rootScope', '$scope', 'CoordinatorsFactory', 'CoordinatorFactory', '$location', '$filter', '$routeParams',
	function ($rootScope, $scope, CoordinatorsFactory, CoordinatorFactory, $location, $filter, $routeParams) {
		$rootScope.title = $filter('translate')('COORDINATOR.EDIT');
		
		$scope.coordinator = CoordinatorFactory.show({id: $routeParams.id});
		$scope.coordinator.$promise.then(function (result) {
			$scope.coordinator.person.birthDate = $filter('date')($scope.coordinator.person.birthDate, 'dd/MM/yyyy');
		});
		
		$scope.updateCoordinator = function () {
			// Sanitize contacts.
			$scope.contacts = [];
			for (var contact in $scope.coordinator.person.contacts) {
				if ($scope.coordinator.person.contacts[contact].value.indexOf('@') > -1)
					$scope.coordinator.person.contacts[contact].type = 'EMAIL';
				else
					$scope.coordinator.person.contacts[contact].type = 'PHONE';
				
				$scope.contacts.push($scope.coordinator.person.contacts[contact]);
			}
			$scope.coordinator.person.contacts = $scope.contacts;
			
			// Convert date to Y-m-d format.
			$scope.coordinator.person.birthDate = $filter('date')(new Date($scope.coordinator.person.birthDate), 'yyyy-MM-dd');
			
			CoordinatorFactory.update($scope.coordinator, function() {
				$location.path('/coordinators');
			});
		}
		
		$scope.cancel = function() {
			$location.path('/coordinators');
		};
	}
]);
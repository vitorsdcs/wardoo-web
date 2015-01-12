'use strict';

angular.module('Coordinator')

.controller('CoordinatorListController',
	['$scope', 'CoordinatorsFactory', 'CoordinatorFactory', '$location', 'ngProgress',
	function ($scope, CoordinatorsFactory, CoordinatorFactory, $location, ngProgress) {
		ngProgress.color('#186FB6');
		ngProgress.start();
		$scope.loading = true;
		$scope.empty = true;
		$scope.coordinators = CoordinatorsFactory.query();
		$scope.coordinators.$promise.then(function (result) {
			$scope.coordinators = result;
			$scope.empty = $scope.coordinators.length == 0;
			$scope.loading = false;
			ngProgress.complete();
		});
		
		$scope.createNewCoordinator = function() {
			$location.path('/coordinators/add');
		};
		
		$scope.editCoordinator = function(coordinatorId) {
			$location.path('/coordinators/' + coordinatorId);
		};
		
		$scope.deleteCoordinator = function(coordinatorId) {
			CoordinatorFactory.delete({ id: coordinatorId });
			$scope.coordinators = CoordinatorsFactory.query();
		};
		
		$scope.calculateAge = function calculateAge(birthDate) {
			var ageDifMs = Date.now() - new Date(birthDate).getTime();
			var ageDate = new Date(ageDifMs);
			return Math.abs(ageDate.getUTCFullYear() - 1970);
		};
	}
])

.controller('CoordinatorCreationController',
	['$scope', 'CoordinatorsFactory', '$location', '$filter',
	function ($scope, CoordinatorsFactory, $location, $filter) {
		$scope.createNewCoordinator = function () {
			// Add role.
			$scope.coordinator.credential['user'] = {'role': 'COORDINATOR'};
			
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
			
			CoordinatorsFactory.create($scope.coordinator);
			$location.path('/coordinators');
		}
		
		$scope.cancel = function() {
			$location.path('/coordinators');
		};
	}
]);
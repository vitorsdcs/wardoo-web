'use strict';

angular.module('Coordinator')

.controller('CoordinatorListController',
	['$scope', 'CoordinatorsFactory', 'CoordinatorFactory', '$location',
	function ($scope, CoordinatorsFactory, CoordinatorFactory, $location) {
		$scope.editCoordinator = function(coordinatorId) {
			$location.path('/coordinators/' + coordinatorId);
		};
		
		$scope.deleteCoordinator = function(coordinatorId) {
			CoordinatorFactory.delete({ id: coordinatorId });
			$scope.coordinators = CoordinatorsFactory.query();
		};
		
		$scope.createNewCoordinator = function() {
			$location.path('/coordinators/add');
		};
		
		$scope.coordinators = CoordinatorsFactory.query();
	}
])

.controller('CoordinatorCreationController',
	['$scope', 'CoordinatorsFactory', '$location',
	function ($scope, CoordinatorsFactory, $location) {
		$scope.createNewCoordinator = function () {
			// Sanitize contacts
			$scope.contacts = [];
			for (var contact in $scope.coordinator.person.contacts) {
				$scope.contacts.push($scope.coordinator.person.contacts[contact]);
			}
			$scope.coordinator.person.contacts = $scope.contacts;
			
			CoordinatorsFactory.create($scope.coordinator);
			$location.path('/coordinators');
		}
	}
]);
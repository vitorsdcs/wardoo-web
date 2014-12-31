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
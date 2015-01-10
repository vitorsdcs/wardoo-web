'use strict';

angular.module('Responsible')

.controller('ResponsibleListController',
	['$scope', 'ResponsiblesFactory', 'ResponsibleFactory', '$location', 'ngProgress',
	function ($scope, ResponsiblesFactory, ResponsibleFactory, $location, ngProgress) {
		ngProgress.color('#186FB6');
		ngProgress.start();
		$scope.loading = true;
		$scope.empty = true;
		$scope.responsibles = ResponsiblesFactory.query();
		$scope.responsibles.$promise.then(function (result) {
			$scope.responsibles = result;
			$scope.empty = $scope.responsibles.length == 0;
			$scope.loading = false;
			ngProgress.complete();
		});
		
		$scope.createNewResponsible = function() {
			$location.path('/responsibles/add');
		};
		
		$scope.editResponsible = function(responsibleId) {
			$location.path('/responsibles/' + responsibleId);
		};
		
		$scope.deleteResponsible = function(responsibleId) {
			ResponsibleFactory.delete({ id: responsibleId });
			$scope.responsibles = ResponsiblesFactory.query();
		};
		
		$scope.calculateAge = function calculateAge(birthDate) {
			var ageDifMs = Date.now() - new Date(birthDate).getTime();
			var ageDate = new Date(ageDifMs);
			return Math.abs(ageDate.getUTCFullYear() - 1970);
		};
	}
])

.controller('ResponsibleCreationController',
	['$scope', 'ResponsiblesFactory', '$location',
	function ($scope, ResponsiblesFactory, $location) {
		$scope.createNewResponsible = function () {
			$scope.responsible.credential["user"] = {"role": "RESPONSIBLE"};
			
			// Sanitize contacts
			$scope.contacts = [];
			for (var contact in $scope.responsible.person.contacts) {
				if ($scope.responsible.person.contacts[contact].value.indexOf("@") > -1)
					$scope.responsible.person.contacts[contact].type = "EMAIL";
				else
					$scope.responsible.person.contacts[contact].type = "PHONE";
				
				$scope.contacts.push($scope.responsible.person.contacts[contact]);
			}
			$scope.responsible.person.contacts = $scope.contacts;
			
			ResponsiblesFactory.create($scope.responsible);
			$location.path('/responsibles');
		}
		
		$scope.cancel = function() {
			$location.path('/responsibles');
		};
	}
]);
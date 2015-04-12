'use strict';

angular.module('Responsible')

.controller('ResponsibleListController',
	['$rootScope', '$scope', 'ResponsiblesFactory', 'ResponsibleFactory', '$location', '$filter',
	function ($rootScope, $scope, ResponsiblesFactory, ResponsibleFactory, $location, $filter) {
		$rootScope.title = $filter('translate')('RESPONSIBLE.TITLE');
		
		$scope.loading = true;
		$scope.empty = true;
		$scope.responsibles = ResponsiblesFactory.query();
		$scope.responsibles.$promise.then(function (result) {
			$scope.responsibles = result;
			$scope.empty = $scope.responsibles.length == 0;
			$scope.loading = false;
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
	['$rootScope', '$scope', 'ResponsiblesFactory', '$location', '$filter',
	function ($rootScope, $scope, ResponsiblesFactory, $location, $filter) {
		$rootScope.title = $filter('translate')('RESPONSIBLE.CREATE');
		
		$scope.createNewResponsible = function () {
			// Add role.
			$scope.responsible.user['role'] = 'RESPONSIBLE';
			$scope.responsible.user['school'] = { 'id': $scope.responsible.school.id };
			
			// Sanitize contacts.
			$scope.contacts = [];
			for (var contact in $scope.responsible.person.contacts) {
				if ($scope.responsible.person.contacts[contact].value.indexOf('@') > -1)
					$scope.responsible.person.contacts[contact].type = 'EMAIL';
				else
					$scope.responsible.person.contacts[contact].type = 'PHONE';
				
				$scope.contacts.push($scope.responsible.person.contacts[contact]);
			}
			$scope.responsible.person.contacts = $scope.contacts;
			
			// Convert date to Y-m-d format.
			$scope.responsible.person.birthDate = $filter('date')(new Date($scope.responsible.person.birthDate), 'yyyy-MM-dd');
			
			ResponsiblesFactory.create($scope.responsible, function() {
				$location.path('/responsibles');
			});
		}
		
		$scope.cancel = function() {
			$location.path('/responsibles');
		};
	}
]);
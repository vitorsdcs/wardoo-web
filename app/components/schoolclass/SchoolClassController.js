'use strict';

angular.module('SchoolClass')

.controller('SchoolClassListController',
	['$rootScope', '$scope', 'SchoolClassesFactory', 'SchoolClassFactory', '$location', '$filter',
	function ($rootScope, $scope, SchoolClassesFactory, SchoolClassFactory, $location, $filter) {
		$rootScope.title = $filter('translate')('SCHOOLCLASS.TITLE');
		
		$scope.loading = true;
		$scope.empty = true;
		$scope.schoolclasses = SchoolClassesFactory.query();
		$scope.schoolclasses.$promise.then(function (result) {
			$scope.schoolclasses = result;
			$scope.empty = $scope.schoolclasses.length == 0;
			$scope.loading = false;
		});
		
		$scope.createNewSchoolClass = function() {
			$location.path('/schoolclasses/add');
		};
	}
])

.controller('SchoolClassCreationController',
	['$rootScope', '$scope', 'SchoolClassesFactory', 'TeachersFactory', '$location', '$filter',
	function ($rootScope, $scope, SchoolClassesFactory, TeachersFactory, $location, $filter) {
		$rootScope.title = $filter('translate')('SCHOOLCLASS.CREATE');
		
		$scope.teachers = TeachersFactory.query();
		$scope.teachers.$promise.then(function (result) {
			$scope.teachers = result;
		});
		
		$scope.createNewSchoolClass = function () {
			$scope.schoolclass.identification['degree'] = { 'id': 1 };
			
			SchoolClassesFactory.create($scope.schoolclass, function() {
				$location.path('/schoolclasses');
			});
		}
		
		$scope.cancel = function() {
			$location.path('/schoolclasses');
		};
	}
]);
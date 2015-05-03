'use strict';

angular.module('Student')

.controller('StudentListController',
	['$rootScope', '$scope', 'StudentsFactory', 'StudentFactory', '$location', '$filter',
	function ($rootScope, $scope, StudentsFactory, StudentFactory, $location, $filter) {
		$rootScope.title = $filter('translate')('STUDENT.TITLE');
		
		$scope.loading = true;
		$scope.empty = true;
		$scope.students = StudentsFactory.query();
		$scope.students.$promise.then(function (result) {
			$scope.students = result;
			$scope.empty = $scope.students.length == 0;
			$scope.loading = false;
		});
		
		$scope.createNewStudent = function() {
			$location.path('/students/add');
		};
		
		$scope.editStudent = function(studentId) {
			$location.path('/students/' + studentId);
		};
		
		$scope.deleteStudent = function(studentId) {
			StudentFactory.delete({ id: studentId });
			$scope.students = StudentsFactory.query();
		};
		
		$scope.calculateAge = function calculateAge(birthDate) {
			var ageDifMs = Date.now() - new Date(birthDate).getTime();
			var ageDate = new Date(ageDifMs);
			return Math.abs(ageDate.getUTCFullYear() - 1970);
		};
	}
])

.controller('StudentCreationController',
	['$rootScope', '$scope', 'StudentsFactory', 'ResponsiblesFactory', '$location', '$filter',
	function ($rootScope, $scope, StudentsFactory, ResponsiblesFactory, $location, $filter) {
		$rootScope.title = $filter('translate')('STUDENT.CREATE');
		
		$scope.responsibles = ResponsiblesFactory.query();
		$scope.responsibles.$promise.then(function (result) {
			$scope.responsibles = result;
		});
		
		$scope.createNewStudent = function () {
			// Add role.
			$scope.student.user['role'] = 'STUDENT';
			$scope.student.user['school'] = { 'id': $scope.student.school.id };
			
			// Convert date to Y-m-d format.
			$scope.student.person.birthDate = $filter('date')(new Date($scope.student.person.birthDate), 'yyyy-MM-dd');
			
			StudentsFactory.create($scope.student, function() {
				$location.path('/students');
			});
		}
		
		$scope.cancel = function() {
			$location.path('/students');
		};
	}
]);
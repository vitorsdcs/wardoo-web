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
		
		$scope.editStudentProfile = function(studentId) {
			$location.path('/student/' + studentId + '/edit/profile');
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
			$scope.student.user = { 'role': 'STUDENT', 'school': { 'id': $scope.student.school.id } }
			
			// Convert date to Y-m-d format.
			$scope.student.person.birthDate = $filter('date')(new Date($scope.student.person.birthDate), 'yyyy-MM-dd');
			
			console.dir($scope.student);
			
			StudentsFactory.create($scope.student, function() {
				$location.path('/students');
			});
		}
		
		$scope.cancel = function() {
			$location.path('/students');
		};
	}
])

.controller('StudentEditProfileController',
	['$rootScope', '$scope', 'StudentsFactory', 'StudentFactory', 'ResponsiblesFactory', '$location', '$filter', '$routeParams',
	function ($rootScope, $scope, StudentsFactory, StudentFactory, ResponsiblesFactory, $location, $filter, $routeParams) {
		$rootScope.title = $filter('translate')('STUDENT.EDIT');
		
		$scope.responsibles = ResponsiblesFactory.query();
		$scope.responsibles.$promise.then(function (result) {
			$scope.responsibles = result;
		});
		
		$scope.student = StudentFactory.show({id: $routeParams.id});
		$scope.student.$promise.then(function (result) {
			$scope.student.person.birthDate = $filter('date')($scope.student.person.birthDate, 'dd/MM/yyyy');
			delete $scope.student.$promise;
			delete $scope.student.$resolved;
		});
		
		$scope.updateStudent = function () {
			// Add role.
			$scope.student.user['role'] = 'STUDENT';
			$scope.student.user['school'] = { 'id': $scope.student.school.id };
			
			// Convert date to Y-m-d format.
			$scope.student.person.birthDate = $filter('date')(new Date($scope.student.person.birthDate), 'yyyy-MM-dd');
			
			StudentsFactory.update($scope.student, function() {
				$location.path('/students');
			});
		}
		
		$scope.cancel = function() {
			$location.path('/students');
		};
	}
]);
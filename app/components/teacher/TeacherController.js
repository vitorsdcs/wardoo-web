'use strict';

angular.module('Teacher')

.controller('TeacherListController',
	['$rootScope', '$scope', 'TeachersFactory', 'TeacherFactory', '$location', '$filter',
	function ($rootScope, $scope, TeachersFactory, TeacherFactory, $location, $filter) {
		$rootScope.title = $filter('translate')('TEACHER.TITLE');
		
		$scope.loading = true;
		$scope.empty = true;
		$scope.teachers = TeachersFactory.query();
		$scope.teachers.$promise.then(function (result) {
			$scope.teachers = result;
			$scope.empty = $scope.teachers.length == 0;
			$scope.loading = false;
		});
		
		$scope.createNewTeacher = function() {
			$location.path('/teachers/add');
		};
		
		$scope.editTeacherProfile = function(teacherId) {
			$location.path('/teacher/' + teacherId + '/edit/profile');
		};
	}
])

.controller('TeacherCreationController',
	['$rootScope', '$scope', 'TeachersFactory', '$location', '$filter',
	function ($rootScope, $scope, TeachersFactory, $location, $filter) {
		$rootScope.title = $filter('translate')('TEACHER.CREATE');
		
		$scope.createNewTeacher = function () {
			// Add role.
			$scope.teacher.user['role'] = 'TEACHER';
			$scope.teacher.user['school'] = { 'id': $scope.teacher.school.id };
			
			// Sanitize contacts.
			$scope.contacts = [];
			for (var contact in $scope.teacher.person.contacts) {
				if ($scope.teacher.person.contacts[contact].value.indexOf('@') > -1)
					$scope.teacher.person.contacts[contact].type = 'EMAIL';
				else
					$scope.teacher.person.contacts[contact].type = 'PHONE';
				
				$scope.contacts.push($scope.teacher.person.contacts[contact]);
			}
			$scope.teacher.person.contacts = $scope.contacts;
			
			// Convert date to Y-m-d format.
			$scope.teacher.person.birthDate = $filter('date')(new Date($scope.teacher.person.birthDate), 'yyyy-MM-dd');
			
			TeachersFactory.create($scope.teacher, function() {
				$location.path('/teachers');
			});
		}
		
		$scope.cancel = function() {
			$location.path('/teachers');
		};
	}
])

.controller('TeacherEditProfileController',
	['$rootScope', '$scope', 'TeachersFactory', 'TeacherFactory', '$location', '$filter', '$routeParams',
	function ($rootScope, $scope, TeachersFactory, TeacherFactory, $location, $filter, $routeParams) {
		$rootScope.title = $filter('translate')('TEACHER.EDIT');
		
		$scope.teacher = TeacherFactory.show({id: $routeParams.id});
		$scope.teacher.$promise.then(function (result) {
			$scope.teacher.person.birthDate = $filter('date')($scope.teacher.person.birthDate, 'dd/MM/yyyy');
		});
		
		$scope.updateTeacher = function () {
			// Sanitize contacts.
			$scope.contacts = [];
			for (var contact in $scope.teacher.person.contacts) {
				if ($scope.teacher.person.contacts[contact].value.indexOf('@') > -1)
					$scope.teacher.person.contacts[contact].type = 'EMAIL';
				else
					$scope.teacher.person.contacts[contact].type = 'PHONE';
				
				$scope.contacts.push($scope.teacher.person.contacts[contact]);
			}
			$scope.teacher.person.contacts = $scope.contacts;
			
			// Convert date to Y-m-d format.
			$scope.teacher.person.birthDate = $filter('date')(new Date($scope.teacher.person.birthDate), 'yyyy-MM-dd');
			
			TeacherFactory.update($scope.teacher, function() {
				$location.path('/teachers');
			});
		}
		
		$scope.cancel = function() {
			$location.path('/teachers');
		};
	}
]);
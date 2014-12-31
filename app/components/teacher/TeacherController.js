'use strict';

angular.module('Teacher')

.controller('TeacherListController',
	['$scope', 'TeachersFactory', 'TeacherFactory', '$location',
	function ($scope, TeachersFactory, TeacherFactory, $location) {
		$scope.editTeacher = function(teacherId) {
			$location.path('/teachers/' + teacherId);
		};
		
		$scope.deleteTeacher = function(teacherId) {
			TeacherFactory.delete({ id: teacherId });
			$scope.teachers = TeachersFactory.query();
		};
		
		$scope.createNewTeacher = function() {
			$location.path('/teachers/add');
		};
		
		$scope.teachers = TeachersFactory.query();
	}
])

.controller('TeacherCreationController',
	['$scope', 'TeachersFactory', '$location',
	function ($scope, TeachersFactory, $location) {
		$scope.createNewTeacher = function () {
			// Sanitize contacts
			$scope.contacts = [];
			for (var contact in $scope.teacher.person.contacts) {
				$scope.contacts.push($scope.teacher.person.contacts[contact]);
			}
			$scope.teacher.person.contacts = $scope.contacts;
			
			TeachersFactory.create($scope.teacher);
			$location.path('/teachers');
		}
	}
]);
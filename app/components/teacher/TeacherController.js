'use strict';

angular.module('Teacher')

.controller('TeacherListController',
	['$scope', 'TeachersFactory', 'TeacherFactory', '$location', 'ngProgress',
	function ($scope, TeachersFactory, TeacherFactory, $location, ngProgress) {
		ngProgress.color('#186FB6');
		ngProgress.start();
		$scope.loading = true;
		$scope.empty = true;
		$scope.teachers = TeachersFactory.query();
		$scope.teachers.$promise.then(function (result) {
			$scope.teachers = result;
			$scope.empty = $scope.teachers.length == 0;
			$scope.loading = false;
			ngProgress.complete();
		});
		
		$scope.createNewTeacher = function() {
			$location.path('/teachers/add');
		};
		
		$scope.editTeacher = function(teacherId) {
			$location.path('/teachers/' + teacherId);
		};
		
		$scope.deleteTeacher = function(teacherId) {
			TeacherFactory.delete({ id: teacherId });
			$scope.teachers = TeachersFactory.query();
		};
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
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
		
		$scope.calculateAge = function calculateAge(birthDate) {
			var ageDifMs = Date.now() - new Date(birthDate).getTime();
			var ageDate = new Date(ageDifMs);
			return Math.abs(ageDate.getUTCFullYear() - 1970);
		};
	}
])

.controller('TeacherCreationController',
	['$scope', 'TeachersFactory', '$location',
	function ($scope, TeachersFactory, $location) {
		$scope.createNewTeacher = function () {
			$scope.teacher.credential["user"] = {"role": "TEACHER"};
			
			// Sanitize contacts
			$scope.contacts = [];
			for (var contact in $scope.teacher.person.contacts) {
				if ($scope.teacher.person.contacts[contact].value.indexOf("@") > -1)
					$scope.teacher.person.contacts[contact].type = "EMAIL";
				else
					$scope.teacher.person.contacts[contact].type = "PHONE";
				
				$scope.contacts.push($scope.teacher.person.contacts[contact]);
			}
			$scope.teacher.person.contacts = $scope.contacts;
			
			TeachersFactory.create($scope.teacher);
			$location.path('/teachers');
		}
		
		$scope.cancel = function() {
			$location.path('/teachers');
		};
	}
]);
'use strict';

angular.module('Teacher')

.factory('TeachersFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/teachers', {}, {
			query: { method: 'GET', isArray: true },
			create: { method: 'POST' },
			update: { method: 'PUT' }
		});
	}
])

.factory('TeacherFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/teachers/:id', {}, {
			show: { method: 'GET' },
			delete: { method: 'DELETE', params: {id: '@id'} }
		});
	}
]);
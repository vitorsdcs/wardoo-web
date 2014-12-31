'use strict';

angular.module('Teacher')

.factory('TeachersFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/teachers', {}, {
			query: { method: 'GET', isArray: true },
			create: { method: 'POST' }
		});
	}
])

.factory('TeacherFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/teachers/:id', {}, {
			show: { method: 'GET' },
			update: { method: 'PUT', params: {id: '@id'} },
			delete: { method: 'DELETE', params: {id: '@id'} }
		});
	}
]);
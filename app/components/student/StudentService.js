'use strict';

angular.module('Student')

.factory('StudentsFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/students', {}, {
			query: { method: 'GET', isArray: true },
			create: { method: 'POST' },
			update: { method: 'PUT' }
		});
	}
])

.factory('StudentFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/students/:id', {}, {
			show: { method: 'GET' },
			delete: { method: 'DELETE', params: {id: '@id'} }
		});
	}
]);
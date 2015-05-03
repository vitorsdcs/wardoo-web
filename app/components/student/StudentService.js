'use strict';

angular.module('Student')

.factory('StudentsFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/students', {}, {
			query: { method: 'GET', isArray: true },
			create: { method: 'POST' }
		});
	}
])

.factory('StudentFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/students/:id', {}, {
			show: { method: 'GET' },
			update: { method: 'PUT', params: {id: '@id'} },
			delete: { method: 'DELETE', params: {id: '@id'} }
		});
	}
]);
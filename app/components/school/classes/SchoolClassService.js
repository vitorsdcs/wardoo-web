'use strict';

angular.module('SchoolClass')

.factory('SchoolClassesFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/classes', {}, {
			query: { method: 'GET', isArray: true },
			create: { method: 'POST' },
			update: { method: 'PUT' }
		});
	}
])

.factory('SchoolClassFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/classes/:id', {}, {
			show: { method: 'GET' },
			delete: { method: 'DELETE', params: {id: '@id'} }
		});
	}
]);
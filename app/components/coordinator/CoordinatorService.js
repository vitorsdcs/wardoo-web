'use strict';

angular.module('Coordinator')

.factory('CoordinatorsFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/coordinators', {}, {
			query: { method: 'GET', isArray: true },
			create: { method: 'POST' },
			update: { method: 'PUT' }
		});
	}
])

.factory('CoordinatorFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/coordinators/:id', {}, {
			show: { method: 'GET' },
			delete: { method: 'DELETE', params: {id: '@id'} }
		});
	}
]);
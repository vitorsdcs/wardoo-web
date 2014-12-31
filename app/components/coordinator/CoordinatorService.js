'use strict';

angular.module('Coordinator')

.factory('CoordinatorsFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/coordinators', {}, {
			query: { method: 'GET', isArray: true },
			create: { method: 'POST' }
		});
	}
])

.factory('CoordinatorFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/coordinators/:id', {}, {
			show: { method: 'GET' },
			update: { method: 'PUT', params: {id: '@id'} },
			delete: { method: 'DELETE', params: {id: '@id'} }
		});
	}
]);
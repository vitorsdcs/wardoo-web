'use strict';

angular.module('Responsible')

.factory('ResponsiblesFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/responsibles', {}, {
			query: { method: 'GET', isArray: true },
			create: { method: 'POST' }
		});
	}
])

.factory('ResponsibleFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/responsibles/:id', {}, {
			show: { method: 'GET' },
			update: { method: 'PUT', params: {id: '@id'} },
			delete: { method: 'DELETE', params: {id: '@id'} }
		});
	}
]);
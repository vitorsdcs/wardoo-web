'use strict';

angular.module('Responsible')

.factory('ResponsiblesFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/responsibles', {}, {
			query: { method: 'GET', isArray: true },
			create: { method: 'POST' },
			update: { method: 'PUT' }
		});
	}
])

.factory('ResponsibleFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/responsibles/:id', {}, {
			show: { method: 'GET' },
			delete: { method: 'DELETE', params: {id: '@id'} }
		});
	}
]);
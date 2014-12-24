'use strict';

angular.module('Principal')

.factory('PrincipalsFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/principals', {}, {
			query: { method: 'GET', isArray: true },
			create: { method: 'POST' }
		});
	}
])

.factory('PrincipalFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/principals/:id', {}, {
			show: { method: 'GET' },
			update: { method: 'PUT', params: {id: '@id'} },
			delete: { method: 'DELETE', params: {id: '@id'} }
		});
	}
]);
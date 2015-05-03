'use strict';

angular.module('Principal')

.factory('PrincipalsFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/principals', {}, {
			query: { method: 'GET', isArray: true },
			create: { method: 'POST' },
			update: { method: 'PUT' }
		});
	}
])

.factory('PrincipalFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/principals/:id', {}, {
			show: { method: 'GET' },
			delete: { method: 'DELETE', params: {id: '@id'} }
		});
	}
]);
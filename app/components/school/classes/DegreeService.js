'use strict';

angular.module('Degree')

.factory('DegreesFactory', ['$resource',
	function($resource) {
		return $resource('/wardoo/degrees/school/:id', {}, {
			query: { method: 'GET', isArray: true },
		});
	}
]);
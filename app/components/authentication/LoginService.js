'use strict';

angular.module('Authentication')

.factory('AuthenticationService', ['$http', '$cookieStore', '$rootScope', '$timeout',
	function ($http, $cookieStore, $rootScope, $timeout) {
		var service = {};
		
		service.Login = function (username, password, callback) {
			$http({
				method: 'POST',
				url: '/wardoo/oauth/token',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				data: $.param({ username: username, password: password, client_id: 'wardoo', grant_type: 'password' })
			})
				.success(function (response) {
					callback(response);
				})
				.error(function (response) {
					callback(response);
				});
		};
		
		service.SetCredentials = function (username, token) {
			$rootScope.globals = {
				currentUser: {
					username: username,
					token: token
				}
			};
			
			$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
			$cookieStore.put('globals', $rootScope.globals);
		};
		
		service.ClearCredentials = function () {
			$rootScope.globals = {};
			$cookieStore.remove('globals');
			$http.defaults.headers.common.Authorization = 'Bearer ';
		};
		
		return service;
	}
]);
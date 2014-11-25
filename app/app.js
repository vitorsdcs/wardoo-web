'use strict';

angular.module('Home', []);
angular.module('Authentication', []);

angular.module('Wardoo', [
	'Home',
	'Authentication',
    'ngRoute',
    'ngCookies'
])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: 'app/components/home/HomeView.html',
		})
		
		.when('/login', {
			title: 'Login',
			controller: 'LoginController',
			templateUrl: 'app/components/authentication/LoginView.html',
			hideMenus: true,
		})
		
		.when('/logout', {
			controller: 'LogoutController',
			template: '',
		})
		
		.otherwise({ redirectTo: '/' });
}])

.run(['$rootScope', '$location', '$cookieStore', '$http',
	function($rootScope, $location, $cookieStore, $http) {
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			$rootScope.title = current.$$route.title;
			$rootScope.hideMenus = !current.$$route.hideMenus;
			$rootScope.isLoggedIn = $rootScope.globals.currentUser ? true : false;
			$rootScope.isLoggedOut = $rootScope.globals.currentUser ? false : true;
		});
		
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + $rootScope.globals.currentUser.token;
        }
	}
]);
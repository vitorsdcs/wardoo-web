'use strict';

angular.module('Home', []);
angular.module('Authentication', []);
angular.module('Principal', []);

angular.module('Wardoo', [
	'Home',
	'Authentication',
	'Principal',
    'ngRoute',
    'ngCookies',
	'ngResource',
])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
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
		
		.when('/principals', {
			controller: 'PrincipalListController',
			templateUrl: 'app/components/principal/PrincipalList.html',
		})
		
		.when('/principals/add', {
			controller: 'PrincipalCreationController',
			templateUrl: 'app/components/principal/PrincipalCreation.html',
		})
		
		$locationProvider.html5Mode(true);
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
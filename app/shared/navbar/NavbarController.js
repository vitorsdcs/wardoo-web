'use strict';

angular.module('Navbar')

.controller('NavbarController',
	['$rootScope', '$scope', '$cookieStore', '$route',
	function ($rootScope, $scope, $cookieStore, $route) {
		$rootScope.$watch('windowWidth', function(width, oldWidth) {
			$scope.toggleSidebar($rootScope.windowWidth);
		});
		
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			$rootScope.hideNavbar = current.$$route.hideNavbar === true || $rootScope.isLoggedOut;
		});
		
		$scope.toggleSidebarPreference = function() {
			$cookieStore.put('forceHideSidebar', !$cookieStore.get('forceHideSidebar'));
			$scope.toggleSidebar($rootScope.windowWidth);
		};
		
		$scope.toggleSidebar = function(windowWidth) {
			$rootScope.hideSidebar = $route.current.$$route.hideSidebar === true || $rootScope.isLoggedOut || $cookieStore.get('forceHideSidebar') || windowWidth < 768;
		};
	}
]);
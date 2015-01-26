'use strict';

angular.module('Sidebar')

.controller('SidebarController',
	['$rootScope', '$scope', '$cookieStore', '$route',
	function ($rootScope, $scope, $cookieStore, $route) {
		$rootScope.$watch('windowWidth', function(width, oldWidth) {
			$scope.isInit = width == oldWidth;
			$scope.isMobile = width < 768;
			$scope.wasMobile = oldWidth < 768;
			$scope.hasChanged = $scope.isMobile && !$scope.wasMobile || !$scope.isMobile && $scope.wasMobile;
			
			// Hide sidebar if on a small screen or if resizing the browser window.
			if (($scope.hasChanged && $scope.isMobile) || ($scope.isInit && $scope.isMobile)) {
				$cookieStore.put('forceHideSidebar', true);
				$scope.toggleSidebar();
			}
			// Show sidebar if resizing to a larger screen.
			if (($scope.hasChanged && !$scope.isMobile) || ($scope.isInit && !$scope.isMobile)) {
				$cookieStore.put('forceHideSidebar', false);
				$scope.toggleSidebar();
			}
		});
		
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			$scope.toggleSidebar();
		});
		
		$scope.toggleSidebarPreference = function() {
			$cookieStore.put('forceHideSidebar', !$cookieStore.get('forceHideSidebar'));
			$scope.toggleSidebar();
		};
		
		$scope.toggleSidebar = function() {
			$rootScope.hideSidebar = $route.current.$$route.hideSidebar === true || $rootScope.isLoggedOut || $cookieStore.get('forceHideSidebar');
		};
	}
]);
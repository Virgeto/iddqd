
(function(){
	"use strict"

currencyApp.controller('currencyController' , function($scope, $location, $http, $interval, $routeParams){
	
});
})();

currencyApp.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
})
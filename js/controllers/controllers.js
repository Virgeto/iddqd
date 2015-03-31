
(function(){
	"use strict"

currencyApp.controller('currencyController' , function($scope, $location, $http, $interval, $routeParams, $anchorScroll){
	  $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }
});
currencyApp.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
	    $location.hash($routeParams.scrollTo);
	    $anchorScroll();  
  });
});
})();



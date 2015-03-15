
(function(){
	"use strict"

currencyApp.controller('currencyController' , function($scope, $location, $http, $interval, $routeParams){
	
       var id = $routeParams.id;

	$http.get('json/currencyList.json').
             success(function(data) {
               $scope.currencyList = data;
             }).
             error(function(data, status, headers, config) {
               alert('List is NOT loaded');
             });

	$http.get('json/academy.json')
           .success(function(data) {
             // $scope.academy = data;
             // var id = data[0].id;
             // console.log(id);
               switch(id) {
                   case "usd":
                       $scope.academy = data[0];
                       console.log($scope.academy.id);
                       break;
                   case "eur":
                       $scope.academy = data[1];
                       break;
                   case "gbp":
                       $scope.academy = data[2];
                       break;
                   case "chf":
                       $scope.academy = data[3];
                       break;
                   case "dkk":
                       $scope.academy = data[4];
                       break;
                   case "nok":
                       $scope.academy = data[5];
                       break;
                   case "sek":
                       $scope.academy = data[6];
                       break;
                   case "ron":
                       $scope.academy = data[7];
                       break;
                   case "rub":
                       $scope.academy = data[8];
                       break;
                   case "try":
                       $scope.academy = data[9];
                       break;
                   default:
                       $scope.academy = data[10];
                 }
           })
         .error(function(data, status, headers, config) {
               alert('academy ne!');
           });
});
})();
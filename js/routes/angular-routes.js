currencyApp.config(function($routeProvider){
                                $routeProvider
                                    .when('/home',{templateUrl: 'partials/under_construction.html', controller: 'currencyController'})
                                    .otherwise({redirectTo : '/home', templateUrl: 'partials/home.html', controller:'currencyController'});
                                })

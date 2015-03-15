currencyApp.config(function($routeProvider){
                                $routeProvider
                                    .when('/home',{templateUrl: 'partials/home.html', controller: 'currencyController'})
                                    .otherwise({redirectTo : '/home', templateUrl: 'partials/home.html', controller:'currencyController'});
                                })

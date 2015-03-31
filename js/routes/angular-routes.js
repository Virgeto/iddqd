currencyApp.config(function($routeProvider){
                                $routeProvider
                                    .when('/home',{templateUrl: 'partials/home.html', controller: 'currencyController'})
                                    .when('/quotes',{templateUrl: 'partials/currency.html', controller: 'currencyController'})
                                    .when('/contact',{templateUrl: 'partials/contact.html', controller: 'currencyController'})
                                    .when('/western',{templateUrl: 'partials/western_union.html', controller: 'currencyController'})
                                    .otherwise({redirectTo : '/home', templateUrl: 'partials/home.html', controller:'currencyController'});
                                })

(function () {
    "use strict";
    angular.module('app', ['ngRoute','officeuifabric.core',
  'officeuifabric.components.dropdown','lokijs'])
    
    .config(['$routeProvider',function ($routeProvider) {  
        $routeProvider  
            .when('/', {  
                templateUrl: 'app/view/home.tpl.html',  
                controller: 'homeCtrl'  
            })  
            .when('/recommend', {  
                templateUrl: 'app/view/recommend.tpl.html',  
                controller: 'recommendCtrl'
            })
            .when('/help', {  
                templateUrl: 'app/view/help.tpl.html' 
               // controller: 'mainCtrl'  
            })     
            .otherwise({  
                redirectTo: '/'  
            });  
    }]); 
    
}());


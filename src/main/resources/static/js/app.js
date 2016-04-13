angular.module("eMusicStore", ["ngRoute"])
        
        .config(function ($routeProvider, $locationProvider) {
        	
        	//$locationProvider.html5Mode(true);
        	
            $routeProvider.when("#/product/productList/all", {
                templateUrl: "views/productList.html",
                controller: "mainPageCtrl"
            });
            $routeProvider.when("#/about", {
                templateUrl: "views/about.html"
            });
            $routeProvider.when("/checkout", {
                templateUrl: "views/checkoutSummary.html"
              
            });
            $routeProvider.when("#/products", {
                templateUrl: "productList.html"
            });
            $routeProvider.when("/complete", {
                templateUrl: "views/thankYou.html"
            });
            $routeProvider.when("/placeorder", {
                templateUrl: "views/placeOrder.html"
            });
            $routeProvider.otherwise({
                templateUrl: "index.html"
            }); 
        })
         .controller("mainPageCtrl", function($scope){
        	 $scope.name = "hello!";
         });   
        

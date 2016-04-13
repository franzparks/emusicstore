//Apps
var app = angular.module('eMusicStore', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider.
	    when('/',{templateUrl: 'views/carousel.html'}).
		when('/about',{templateUrl: 'views/about.html'}).
		when('/products',{templateUrl: 'views/productList.html',controller: 'ProductsCtrl'}).
		when('/product/viewProduct/1',{templateUrl: 'views/viewProduct.html',controller: 'ProductCtrl'}).
		otherwise({ redirectTo: '/' });

});




//Controllers

app.controller('MainController', function($scope) {
	$scope.text = "Hello World!!!!";
});

app.controller('ProductsCtrl', function($scope) {
	$scope.products = [
	    {"productId":"1", "productName":"Guiter", "productCategory":"Instruments","productCondition": "New", "productPrice": "230"},
	    {"productId":"1", "productName":"Grand Piano", "productCategory":"Instruments","productCondition": "New", "productPrice": "2330"} 
	   
	]
});

app.controller('ProductCtrl', function($scope) {
	$scope.product = {"productId":"1", "productName":"Grand Piano",
			
 "productCategory":"Instruments","productCondition": "New", "productPrice": "2330"};
});
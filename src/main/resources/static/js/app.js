//Apps
var app = angular.module('eMusicStore', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider.
	    when('/',{templateUrl: 'views/carousel.html'}).
		when('/about',{templateUrl: 'views/about.html'}).
		when('/products',{templateUrl: 'views/productList.html',controller: 'DesignCtrl'}).
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

app.controller('DesignCtrl', function($scope) {
	$scope.designers = [
	    {"name":"Inna", "family":"Doe"}, 
	    {"name":"Anna", "family":"Smith"},
	    {"name":"Yafit", "family":"Jones"}
	]
});
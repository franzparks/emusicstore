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

app.controller('DevCtrl', function($scope) {
	$scope.developers = [
	    {"name":"John", "family":"Doe"}, 
	    {"name":"Anna", "family":"Smith"},
	    {"name":"Peter", "family":"Jones"},
	    {"name":"Alex", "family":"Volkov"}, 
	    {"name":"Yaniv", "family":"Smith"},
	]
});

app.controller('DesignCtrl', function($scope) {
	$scope.designers = [
	    {"name":"Inna", "family":"Doe"}, 
	    {"name":"Anna", "family":"Smith"},
	    {"name":"Yafit", "family":"Jones"}
	]
});
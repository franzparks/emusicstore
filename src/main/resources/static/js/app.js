//Services
angular.module("getProducts.services", ["ngResource"]).
 factory('Product', function ($resource) {
       var Product = $resource('/products/:productId',{ productId:'@id'});
         Product.prototype.isNew = function(){
        return (typeof(this.id) === 'undefined');
      }
     return Product;
    });
//Apps
var app = angular.module('eMusicStore', ['ngRoute','getProducts.services']);
 

app.config(function($routeProvider){
	$routeProvider
	    .when('/',{templateUrl: 'views/carousel.html'})
		.when('/about',{templateUrl: 'views/about.html'})
		.when('/products',{templateUrl: 'views/productList.html',controller: 'ProductListCtrl'})
		.when('/products/:productId',{templateUrl: 'views/viewProduct.html',controller: 'ProductDetailsCtrl'})
        .when('/products/new', {templateUrl: 'views/addProduct.html', controller: 'ProductCreateCtrl'})
		.otherwise({ redirectTo: '/' });

});


//Controllers

app.controller('MainController', function($scope) {
	$scope.text = "Hello World!!!!";
});

app.controller('ProductListCtrl', function($scope,Product,$resource) {
	$scope.products = [
	    {"productId":"1", "productName":"Guiter", "productCategory":"Instruments","productCondition": "New", "productPrice": "230"},
	    {"productId":"1", "productName":"Grand Piano", "productCategory":"Instruments","productCondition": "New", "productPrice": "2330"} 
	   
	]
	
	// $scope.products = Product.query();
	
	
});

app.controller('ProductCtrl', function($scope) {
	$scope.product = {"productId":"1", "productName":"Grand Piano",
			
 "productCategory":"Instruments","productCondition": "New", "productPrice": "2330"};
});

 
app.controller('ProductCreateCtrl', function($scope, $routeParams, $location, Product) {
 
    $scope.product = new Product();
 
    $scope.save = function () {
        $scope.product.$save(function (product, headers) {
            toastr.success("Submitted New Product");
            $location.path('/');
        });
    };
});
 
 
app.controller('ProductDetailsCtrl', function($scope, $routeParams, $location, Product) {
    var productId = $routeParams.productId;
    $scope.product = Product.get({productId: productId});
});
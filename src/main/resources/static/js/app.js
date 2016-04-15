//Services
angular.module('services', ['ngResource']).
factory("ProductService", function ($resource) {
    return $resource(
        'http://localhost:8080/products/:productId', {}, {
        get: {
            method: 'GET',
            transformRequest: function(data, headers){
                headers = {'Content-Type': 'application/json'};
                console.log(data);
                return data;
            },
            transformResponse: function(data, headers){
                //console.log(Object.keys(data));
                return data;
            }
         
        },
        query: {
            method: 'GET',
            isArray: false,
            transformResponse: function(data, header) {
              return angular.fromJson(data);
            }
          }
        	 	
    }

    );
});

//Apps
var app = angular.module('eMusicStore', ['ngRoute','services']);

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

app.controller('ProductListCtrl', function($scope,ProductService) {
	$scope.products1 = [
	    {"productId":"1", "productName":"Guiter", "productCategory":"Instruments","productCondition": "New", "productPrice": "230"},
	    {"productId":"1", "productName":"Grand Piano", "productCategory":"Instruments","productCondition": "New", "productPrice": "2330"} 
	   
	]
	
	$scope.products = []
	ProductService.query(function (data) {
		$scope.products = data["_embedded"]["products"];
        //console.log("this data : "+Object.keys(data));
		//console.log("this data : "+data["_embedded"]["products"][0]["productName"]);
    }, function () {
        console.log('FAILURE');
    });
	
	
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
    $scope.product = {"productId":"1", "productName":"Grand Piano",
			
    		 "productCategory":"Instruments","productCondition": "New", "productPrice": "2330", "productManufacturer":"Sony"};
});
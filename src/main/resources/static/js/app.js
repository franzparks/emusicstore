//Services
angular.module('services', ['ngResource']).
factory("ProductService", function ($resource) {
    return $resource(
        '/products/:productId', {}, {
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
        	 	
    });
    
    
    
});

//Apps
var app = angular.module('eMusicStore', ['ngRoute','services']);
app.service('sharedData', function(){
	  var productList = [];
	  var index = 0;
      var addProducts = function(data){
    	 productList = data;
      }
	  var getProducts = function(){
		  return productList;
	  };
	  
	  var addIndex = function(data){
	    	 index = data;
	      }
		  var getIndex = function(){
			  return index;
		  };
		  
	  
	  return {
		    addProducts: addProducts,
		    getProducts: getProducts,
		    addIndex : addIndex,
		    getIndex : getIndex
		  };

	});

app.config(function($routeProvider){
	$routeProvider
	    .when('/',{templateUrl: 'views/carousel.html'})
		.when('/about',{templateUrl: 'views/about.html'})
		.when('/products',{templateUrl: 'views/productList.html',controller: 'ProductListCtrl'})
		.when('/products/product/details',{templateUrl: 'views/viewProduct.html',controller: 'ProductListCtrl'})
        .when('/products/new', {templateUrl: 'views/addProduct.html', controller: 'ProductCreateCtrl'})
		.otherwise({ redirectTo: '/' });

});


//Controllers

app.controller('MainController', function($scope) {
	$scope.text = "Hello World!!!!";
});

app.controller('ProductListCtrl', function($scope,ProductService, sharedData) {
	
	$scope.products = []
	 $scope.prod = {};

	ProductService.query(function (data) {
		$scope.products = data["_embedded"]["products"];
		sharedData.addProducts($scope.products);
		//$scope.prod = $scope.products[0];
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
 
 
app.controller('ProductDetailsCtrl', function($scope,sharedData) {
	$scope.product = {};
	$scope.index = 0;
	$scope.details = function(index){
	   //console.log("index before :"+$scope.index);
	   sharedData.addIndex(index);
	  // console.log("index after :"+$scope.index);
	   //$scope.product = sharedData.getProducts()[$scope.index];
    };
    
    //console.log("am here now :"+$higherScope.index);
    $scope.product = sharedData.getProducts()[sharedData.getIndex()];
    
});
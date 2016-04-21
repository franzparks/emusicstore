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
	  var cartItems = {};
	  var index = 0;
	  
      var addProducts = function(data){
    	 productList = data;
      };
	  var getProducts = function(){
		  return productList;
	  };
	  var addCartItem = function(product){
		  var productKey = product["productName"]+product["productCondition"]+product["productManufacturer"]+product["productPrice"]+
		  product["productCategory"];
		  
		  if(cartItems[productKey]){
			var prod = cartItems[productKey];
		    prod["quantity"] += 1;
		    prod["totalPrice"] = prod["productPrice"] * prod["quantity"];
		    cartItems[productKey] =  prod;  
		  }else{
				product["quantity"] = 1; 
				product["totalPrice"] = product["productPrice"];
			    cartItems[productKey] = product;
		  }
	   }
	  var getCartItems = function(){
			  return cartItems;
	  };
	  var addIndex = function(data){
	    	 index = data;
	   };
	  var getIndex = function(){
			  return index;
	  };
		  
	  
	  return {
		    addProducts: addProducts,
		    getProducts: getProducts,
		    addCartItem: addCartItem,
		    getCartItems: getCartItems,
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
        .when('/customer/cart', {templateUrl: 'views/cart.html', controller: 'cartCtrl'})
		.otherwise({ redirectTo: '/' });
	
});

app.config(function($httpProvider){
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
});

//Controllers

app.controller('MainCtrl', function($scope,$http, $location) {
	$scope.self = "";
    $http.get("/user").success(function(data) {
      $scope.user = data.userAuthentication.details.name;
      $scope.authenticated = true;
      console.log("here now!! : "+$scope.authenticated);
      
    }).error(function() {
      $scope.user = "N/A";
      $scope.authenticated = false;
    });
    
    $scope.logout = function() {
        $http.post('/logout', {}).success(function() {
          $scope.authenticated = false;
          $location.path("/");
        }).error(function(data) {
          console.log("Logout failed + "+data)
          $scope.authenticated = false;
        });
      };
});

app.controller('ProductListCtrl', function($scope,ProductService, sharedData) {
	
	$scope.products = []
	 $scope.prod = {};

	ProductService.query(function (data) {
		$scope.products = data["_embedded"]["products"];
		sharedData.addProducts($scope.products);
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
	$scope.details = function(index){
	   sharedData.addIndex(index);
    };
    
    $scope.product = sharedData.getProducts()[sharedData.getIndex()];
    
    $scope.addToCart = function(){
		sharedData.addCartItem($scope.product);
	};
	
    
});



app.controller('cartCtrl', function($scope,sharedData){
	$scope.cartItems = [];
	$scope.grandTotal = 0.00;
	
	var items = sharedData.getCartItems();
	
	 for(var key in items){
		$scope.cartItems.push(items[key]);
	}
	
	$scope.updateGrandTotal = function(){
		var total = 0;
		for(var i = 0; i < $scope.cartItems.length; ++i){
			total += $scope.cartItems[i].totalPrice;
		}
		
		return total;
	};
	
	$scope.grandTotal = $scope.updateGrandTotal();
	$scope.removeFromCart = function(index){
		console.log("removed index : "+ index);
		$scope.cartItems.splice(index,1);
		$scope.grandTotal = $scope.updateGrandTotal();
	};
	
	$scope.clearCart = function(){
		$scope.cartItems = [];
		$scope.grandTotal = 0.00;
	};
});



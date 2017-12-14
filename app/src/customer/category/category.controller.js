/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .controller('CategoryController', function ($scope, CategoryFactory, $state, $rootScope) {
        // console.log(IndexService.fetchAllProducts());
        // IndexService.fetchAllProducts()
        //     .then(function (response) {
        //         $scope.products=response.data;
        //         console.log($scope.products);
        //     })
        //     .catch(function () {
        //         $scope.products=[];
        //     });
        CategoryFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products = response.data.data;
                $scope.productFilter = $scope.products;

                $scope.addProductFilter = function (nameCategory) {
                    $scope.productFilter = [];
                    if (nameCategory == "products") {
                        $scope.productFilter = $scope.products;
                    }
                    else {
                        $.each($scope.products, function () {
                            // console.log(typeof this);
                            if ((this.category.name).indexOf(nameCategory) >= 0) {
                                $scope.productFilter.push(this);
                            }
                        });
                    }
                    console.log($scope.productFilter);
                };

                $rootScope.addSearchItem = function (nameProduct) {
                    $scope.productFilter = [];
                    $.each($scope.products, function () {
                        // console.log(typeof this);
                        if ((this.name).indexOf(nameProduct) >= 0 ||
                            (this.name).toUpperCase().indexOf(nameProduct.toUpperCase()) >= 0) {
                            $scope.productFilter.push(this);
                        }
                    });
                    $state.go('category');
                    console.log($scope.productFilter);
                };

                $rootScope.addProductFilterNavbar = function (nameCategory, typeCategory) {
                    $scope.productFilter = [];
                    $.each($scope.products, function () {
                        // console.log(typeof this);
                        if ((this.category.name).indexOf(nameCategory) >= 0 && this.category.type == typeCategory) {
                            $scope.productFilter.push(this);
                        }
                    });
                    console.log($scope.productFilter);
                    $state.go('category');
                };
            })
            .catch(function () {
                $scope.products = [];
            });
    });
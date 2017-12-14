/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .controller('DetailController', function ($scope, DetailFactory, $stateParams, AuthService, $localStorage, $rootScope) {
        // console.log(IndexService.fetchAllProducts());
        // IndexService.fetchAllProducts()
        //     .then(function (response) {
        //         $scope.products=response.data;
        //         console.log($scope.products);
        //     })
        //     .catch(function () {
        //         $scope.products=[];
        //     });

        DetailFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products = response.data.data;
                var temp = true;

                function checkExitsID(id, array) {
                    $.each(array, function (index, value) {
                        if (id === value._id) {
                            temp = false;
                        }
                    });
                }

                if (AuthService.isAuthenticated()) {
                    $scope.user = $localStorage.user;
                    $scope.isLogin = true;
                    $rootScope.baskets = $localStorage.basket;
                    console.log($scope.baskets);
                }

                $.each($scope.products, function () {
                    if (this._id == $stateParams.id) {
                        $scope.item = this;
                    }
                });
                $scope.addToCart = function addToCart() {
                    if ($localStorage.basket.length == 0) {
                        $scope.item.numberProduct = 1;
                        $localStorage.basket.push($scope.item);
                        $('#addBasket').text("Added");
                    }
                    else {
                        checkExitsID($scope.item._id, $rootScope.baskets);
                        console.log(temp);
                        if (temp) {
                            $scope.item.numberProduct = 1;
                            $localStorage.basket.push($scope.item);
                            $('#addBasket').text("Added");
                        }
                        else {
                            $('#addBasket').text("Added");
                        }
                    }
                    console.log($localStorage.basket);
                };
            })
            .catch(function () {
                $scope.products = [];
            });
    });
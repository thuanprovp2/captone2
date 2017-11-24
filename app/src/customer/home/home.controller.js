/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .controller('HomeController',function ($scope,HomeFactory) {
        // console.log(IndexService.fetchAllProducts());
        // IndexService.fetchAllProducts()
        //     .then(function (response) {
        //         $scope.products=response.data;
        //         console.log($scope.products);
        //     })
        //     .catch(function () {
        //         $scope.products=[];
        //     });

        HomeFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products=response.data.data;
                console.log($scope.products);
            })
            .catch(function () {
                $scope.products=[];
            });
    });
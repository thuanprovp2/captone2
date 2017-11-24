/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .controller('CategoryController',function ($scope,CategoryFactory) {
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
                $scope.products=response.data.data;
            })
            .catch(function () {
                $scope.products=[];
            });
    });
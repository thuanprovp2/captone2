/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .controller('DetailController', function ($scope, DetailFactory, $stateParams) {
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
                $.each($scope.products,function () {
                   if(this._id==$stateParams.id){
                       $scope.item=this;
                   }
                });

                console.log($scope.item);
            })
            .catch(function () {
                $scope.products = [];
            });
    });
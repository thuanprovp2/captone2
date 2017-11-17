/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('basket',{
            parent:'site',
            url:'/basket',
            views:{
                'content@':{
                    templateUrl:'src/customer/basket/basket.html',
                    controller:'BasketController'
                }
            }
        })
    });
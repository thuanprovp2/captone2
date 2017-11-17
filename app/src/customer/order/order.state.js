/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('order',{
            parent:'site',
            url:'/order',
            views:{
                'content@':{
                    templateUrl:'src/customer/order/order.html',
                    controller:'OrderController'
                }
            }
        })
    });
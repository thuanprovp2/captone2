/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('checkout',{
            parent:'site',
            url:'/checkout',
            views:{
                'content@':{
                    templateUrl:'src/customer/checkout/checkout1.html',
                    controller:'CheckoutController'
                }
            }
        })
    });
/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('list-order',{
            parent:'site',
            url:'/list-order',
            views:{
                'content@':{
                    templateUrl:'src/customer/list-order/list-order.html',
                    controller:'ListOrderController'
                }
            }
        })
    });
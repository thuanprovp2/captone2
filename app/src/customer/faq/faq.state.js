/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('faq',{
            parent:'site',
            url:'/faq',
            views:{
                'content@':{
                    templateUrl:'src/customer/faq/faq.html',
                    controller:'FaqController'
                }
            }
        })
    });
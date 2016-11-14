"use strict";

var myApp = angular.module('myApp', [])

    .controller('myController',function ($scope) {

        $scope.repeatString = function () {

            let finalString = "";
            for(let i = 0 ; i < $scope.numberInput ; i++)
            {
                finalString += $scope.stringInput;
            }
            $scope.stringInput = finalString;


        }


})


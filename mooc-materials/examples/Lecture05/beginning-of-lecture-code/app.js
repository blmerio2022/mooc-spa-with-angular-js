(function () {
    'use strict';

    // define a module that is corresponding to the element html in index.html
    // with the attribute ng-app = 'myFirstApp'
    angular.module('myFirstApp', [])

        // define a controller that is corresponding to the element div
        // with attribut ng-controller = 'MyFirstController'
    .controller('MyFirstController', function ($scope) {
        // bind data between controller (viewModel) and
        // the element div (view represented in index.html) :
        $scope.name = "Boulmane";
        $scope.sayHello = function (){
          return "Hello coursera"
        };
    });

})();

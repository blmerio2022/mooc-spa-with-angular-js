(function () {
    'use strict';

    // define a module that is corresponding to the element html in index.html
    // with the attribute ng-app = 'myFirstApp'
    angular.module('MyFirstApp', [])

        // define a controller that is corresponding to the element div
        // with attribut ng-controller = 'MyFirstController'
        .controller('MyFirstController', function ($scope) {
            // bind data between controller (viewModel) and
            // the element div (view represented in index.html) :
            $scope.name = "";
            $scope.totalValue = 0;
            $scope.displayNumeric = function (){
            $scope.totalValue = calculateNumericForString($scope.name);
            }

            function calculateNumericForString(string){
                var totalStringValue = 0;
                for (var i = 0; i < string.length; i++){
                    totalStringValue += string.charCodeAt(i);
                }
                return totalStringValue;
            }

        });

})();

(function () {
  'use strict';

  angular.module('LunchChecker', [])
      .controller('LunchCheckerController', lunchCheckerController);

  lunchCheckerController.$inject = ['$scope', '$filter'];
  function lunchCheckerController ($scope, $filter,) {
    $scope.message = "";
    $scope.lunchMenuItems = "";

    $scope.displayMessage = function () {
      $scope.message = checkLunchItems($scope.lunchMenuItems);
    };

    function checkLunchItems (itemsString) {
      const separator = ",";
      var message = "";
      var itemsArray = itemsString.split(separator);
      // delete empty items from the itemsArray
      itemsArray = deleteEmptyItems(itemsArray);

      //
      if (itemsArray.length === 0 || itemsString === "" || typeof itemsString === 'undefined') {
        message = "Please enter data first";
      }else if (itemsArray.length <= 3 && itemsArray.length >= 1){
        message = "Enjoy!";
      }else{
        message = "Too much!";
      }
      return message;
    }

  }

  // delete empty items from the itemsArray
  function deleteEmptyItems(itemsArray){
    var filtered = itemsArray.filter(function (el) {
      return el != "";
    });
    return filtered;
  }



})();

(function () {
  'use strict';

  var enjoyMessage  = "Enjoy!";
  var tooMuchMessage = "Too much!";
  var enterDataMessage = "Please enter data first";

  angular.module('LunchChecker', [])
      .controller('LunchCheckerController', lunchCheckerController);

  lunchCheckerController.$inject = ['$scope', '$filter'];
  function lunchCheckerController ($scope, $filter) {
    $scope.message = "";
    $scope.lunchMenuItems = "";
    $scope.customStyle = {};




    $scope.displayMessage = function () {
      $scope.message = checkLunchItems($scope.lunchMenuItems);

      // message text style in html doc
      if ($scope.message == enjoyMessage || $scope.message == tooMuchMessage){
        $scope.messageElementStyle = {"color":"green"};
        $scope.inputElementStyle = {"border" : "1px solid green"};
      }else if ($scope.message == enterDataMessage){
        $scope.messageElementStyle = {"color":"red"};
        $scope.inputElementStyle = {"border" : "1px solid red"};
      }

      // input box border style

    };

    function checkLunchItems (itemsString) {
      const separator = ",";
      var message = "";
      var itemsArray = itemsString.split(separator);
      // delete empty items from the itemsArray
      itemsArray = deleteEmptyItems(itemsArray);

      //
      if (itemsArray.length === 0 || itemsString === "" || typeof itemsString === 'undefined') {
        message = enterDataMessage;
      }else if (itemsArray.length <= 3 && itemsArray.length >= 1){
        message = enjoyMessage;
      }else{
        message = tooMuchMessage;
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

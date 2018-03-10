(function(){
    var app = angular.module('movimientos', []);

    app.directive("nombremov", function() {
      return {
        restrict: 'E',
        templateUrl: "desc_mov"
      },


       app.directive("tipomov", function() {
      return {
        restrict: 'E',
        templateUrl: "tipo_mov"
      },

        app.directive("valormov", function() {
      return {
        restrict: 'E',
        templateUrl: "valor_mov"
      },

    });
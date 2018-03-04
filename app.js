 
  (function() {
    var app = angular.module('movimiento', []);

    app.controller('Controller', ['$http', function($http){
      var datos = this;
      datos.movimientos = [];

      $http.get('http://www.titandesarrollo.com/_api/movimientos').success(function(data){
       datos.movimientos = data;
       
       });
    }]);

    app.controller('RController', function() {
      this.review = {};

      this.addReview = function(movimientos) {
        movimientos.reviews.push(this.review);

        this.review = {};
      };
    });
  })();
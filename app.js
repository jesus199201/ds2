var app = angular.module('Movimiento', []);
    app.controller("control", function ($scope, $http) {
        $scope.movnom = "";
        $scope.movtip="";
        $scope.movvalor= "";
    
        
        $scope.get = Function(){       
        var movimiento=this;
            
       
        
        
        
        
        
        $scope.Save = function () {
      
        var httpreq = {
                method: 'POST',
                url: 'http://www.titandesarrollo.com/_api/movimientos',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'dataType': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js'
                },
                data: { MovNom: $scope.movnom },
                data: { MovTipo: $scope.movtip },
                data: { MovVa: $scope.movvalor}
            
            }
            $http(httpreq).success(function (response) {
                $scope.fillList();
                alert("Se Ha Ingresado a la tabla.");
            })
        };
        /*
        
        $scope.Delete = function (SID) {
            if (confirm("estas seguro de eliminar")) {
                var httpreq = {
                    method: 'POST',
                    url: 'Default.aspx/Delete',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'dataType': 'json'
                    },
                    data: { StudentID: SID }
                }
                $http(httpreq).success(function (response) {
                    $scope.fillList();
                    alert("Deleted successfully.");
                })
            }
        };
        */
        
        $scope.fillList = function () {
            $scope.movnom  = "";
            $scope.movtip = "";
            $scope.movvalorv= "";
            var httpreq = {
                method: 'POST',
                url: 'http://www.titandesarrollo.com/_api/movimientos',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'dataType': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js'
                },
                data: {}
            }
            $http(httpreq).success(function (response) {
                $scope.movimientoList = response.d;
            })
        };
        $scope.fillList();
    });
        
        
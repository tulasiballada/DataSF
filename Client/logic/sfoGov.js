angular.module('sfoGov', [
         , 'ngStorage',
       'myApp'
      
     
]).controller('sfoGovController', function ($scope,Excel, $http, $state,$window,$timeout, $stateParams,$localStorage) {
     $scope.save = true;
    $scope.update = false;


    function getSfoGovList() {
       $http.get("http://localhost:3000/getData").then(function (response) {
        console.log(response)
            $scope.ListOfSfoGov = response.data.data;
         
        })
    };
    getSfoGovList();

  $scope.addSfoGovDetails = function (entitySfoGov) {
  var Obj = {
            "time": $scope.entitySfoGov.time
            , "airline": $scope.entitySfoGov.airline
           , "flight_number": $scope.entitySfoGov.flight_number
            , "transaction": $scope.entitySfoGov.transaction
            , "terminal": $scope.entitySfoGov.terminal
            , "gate": $scope.entitySfoGov.gate
            ,"remark":$scope.entitySfoGov.remark
             
        }
        $http.post("http://localhost:3000/postData", Obj).then(function(response){
                $scope.entitySfoGov = {};
        $scope.sfoGateForm.$setPristine();
        $scope.sfoGateForm.$setUntouched();

swal({
                title: "SFOGOV Details"
                , text: "Saved successfully"
                , type: "success"
                , confirmButtonColor: "#007AFF"
            }); 

})
   };



if($stateParams.flight_number){
  $http.get("http://localhost:3000/sfoGov/"+$stateParams.flight_number).then(function (response) {
    $scope.entitySfoGov = response.data.data;
$scope.entitySfoGov.time =new Date(response.data.data.time);
});
}




    $scope.deleteSfoGov = function (flight_number) {
        swal({
  title: 'Are you sure?',
  text: "Your want to delete this sfoGov",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, cancel!',
  confirmButtonClass: 'btn btn-success',
  cancelButtonClass: 'btn btn-danger',
  buttonsStyling: false
}).then(function () {
    $http.delete("http://localhost:3000/deleteSfoGov/"+flight_number).then(function (response) {
          $scope.entitySfoGov = {};
           window.location.reload(false); 
 swal(
  'SfoGov',
  'SfoGov Deleted Successfully',
  'success'
)
}, function (dismiss) {

  if (dismiss === 'cancel') {
    swal(
      'Cancelled'
    
    )
  }
})
             });
        };




  //Update code
    $scope.updateSfoGov = function (flight_number) {

var Obj = {
  "time": $scope.entitySfoGov.time
            , "airline": $scope.entitySfoGov.airline
           , "flight_number": $scope.entitySfoGov.flight_number
            , "transaction": $scope.entitySfoGov.transaction
            , "terminal": $scope.entitySfoGov.terminal
            , "gate": $scope.entitySfoGov.gate
            ,"remark":$scope.entitySfoGov.remark
               
        }

        $http.put("http://localhost:3000/putData"+'/'+flight_number,Obj).then(function (response) {
               $state.go('menu.sfoGovList');
                swal({
                title: "SfoGov Details"
                , text: "Updated successfully"
                , type: "success"
                , confirmButtonColor: "#007AFF"
            }); 
                    
          })
     
        
    };



    $scope.Export = function () {
      $("#tblCustomers").table2excel({
          filename: "Table.xls"
      });
  }

});
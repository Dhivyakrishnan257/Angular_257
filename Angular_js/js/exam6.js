var app6=angular.module('app6',[]);

app6.controller('gListCtrl',function($scope){

  $scope.groceries=[
    {item:"Tomatoes", purchased:false},
    {item:"Potatoes", purchased:false},
    {item:"Bread",purchased:false},
    {item:"Hummus",purchased:false}
  ];
  $scope.addItem= function(newItem){
    if(!(newItem===undefined || newItem=== "")){
      $scope.groceries.push({
        item:newItem, purchased:false
      });
      $scope.missingNewItemError="";
    }else{
      $scope.missingNewItemError="Please Enter an Item";
    }
  };
});

app6.controller('userCtrl',function($scope){
  $scope.user=[{
    fname:"Dhivya",
    lname:"krishnan",
    street:"123,Main street",
    subscribe:"Subscribe",
    delivery:"Email"
  }];

  $scope.saveUser=function(userInfo){
    if($scope.userForm.$valid){
      $scope.user.push({
        fname:userInfo.fname,
        lname:userInfo.lname,
        street:userInfo.street,
        subscribe:userInfo.subscribe,
        delivery:userInfo.delivery
      });
      console.log("User Saved");
    }
    else{
      console.log("Error:Couldn't Save User");
    }
  };
});

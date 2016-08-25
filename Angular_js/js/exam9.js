var app9=angular.module('app9',[]);

app9.controller('mainCtrl',function($scope){
  $scope.students=[
    {name:"George Thomas", gpa:3.5},
      {name:"Susy Smith", gpa:3.4},
        {name:"Aaron Yan", gpa:3.6},
          {name:"Zhi Shu", gpa:3.9},
            {name:"Hyun Jung", gpa:3.7}

  ];
  $scope.student={
    gpas:[
        {name:"Susy Smith", gpa:3.5},
         {name:"George Thomas", gpa:3.4},
          {name:"Aaron Yan", gpa:3.8},
            {name:"Hyun Jung", gpa:3.7},
            {name:"Zhi Shu", gpa:3.9}

    ]
  };
  $scope.currDate=new Date();
  $scope.randomStr="I want nobody! nobody! but you.";
  $scope.randArray=[
    "Tomato",
    "Potato",
    "Bread",
    "Pickles",
    "Raisins"
  ];

  $scope.weather=[
    {day:"Monday",rain:false},
    {day:"Tuesday" ,rain:true}
  ];
});

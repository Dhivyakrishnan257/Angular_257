'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController($http) {
      var self = this;
      self.orderProp = 'year';
      self.currentPage = 0;
     self.pageSize=4;
      $http.get('phones/crimes.json').then(function(response) {
        self.phones = response.data;
        self.pageCount=Math.ceil(self.phones.length/self.pageSize);
    // self.removeItem = function removeItem(phone) {
      //   var index =self.phones.indexOf(phone);
        // if (index !== -1) {
          //   self.phones.splice(index, 1);
    //}
  //};

    });
  }
});

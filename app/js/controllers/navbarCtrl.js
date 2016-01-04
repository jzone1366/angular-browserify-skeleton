'use strict';

function NavbarCtrl($location) {
  'ngInject';
  
  var vm = this;
  vm.brand = 'Angular-Skeleton';
  
  vm.isActive = function(route) {
    return route === $location.path();
  };
}

module.exports = {
  name: 'NavbarCtrl',
  fn: NavbarCtrl
};

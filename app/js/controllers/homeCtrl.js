'use strict';

function HomeCtrl() {
	'ngInject';
	
	var vm = this;
	vm.header = 'Angular-Skeleton';
}

module.exports = {
  name: 'HomeCtrl',
  fn: HomeCtrl
};

'use strict';

function AboutCtrl() {
	'ngInject';
	
	var vm = this;
	vm.header = 'About Page';
}

module.exports = {
  name: 'AboutCtrl',
  fn: AboutCtrl
};

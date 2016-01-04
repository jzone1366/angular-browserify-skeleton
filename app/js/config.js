'use strict';

function Config($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'home.html',
    title: 'Home',
    controller: 'HomeCtrl',
    controllerAs: 'hc'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'about.html',
    title: 'About',
    controller: 'AboutCtrl',
    controllerAs: 'ac'
  });

  $urlRouterProvider.otherwise('/home');
}

module.exports = Config;

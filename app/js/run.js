'use strict';

function Run($rootScope, AppSettings) {
  'ngInject';

  $rootScope.$on('$stateChangeSuccess', function(event, toState) {
    $rootScope.pageTitle = '';

    if(toState.title) {
      $rootScope.pageTitle += toState.title + ' | ';
    }

    $rootScope.pageTitle += AppSettings.appTitle;
  });
}

module.exports = Run;

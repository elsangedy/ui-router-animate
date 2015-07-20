angular.module('uiRouterSample', ['ui.router', 'ngAnimate'])

.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])

.config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('alunos', {
      url: '/alunos',
      views: {
        'master': {
          controller: function($scope) {
            var navbar = this;

            navbar.title = 'Alunos';

            navbar.actions = [
              {
                state: 'alunos.ativos',
                name: 'ativos'
              },
              {
                state: 'alunos.inativos',
                name: 'inativos'
              }
            ];

            navbar.effect = '';

            $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState) {
              if(toState.name == 'alunos.inativos') {
                navbar.effect = 'slide-left';
              } else if(toState.name == 'alunos.ativos') {
                navbar.effect = 'slide-right';
              }
            });
          },
          controllerAs: 'navbar',
          templateUrl: 'tpl/navbar.html'
        }
      }
    })
    .state('alunos.ativos', {
      url: '/ativos',
      views: {
        'content@alunos': {
          template: '<div class="text-center"><h1>Page 1</h1></div>'
        }
      }
    })
    .state('alunos.inativos', {
      url: '/inativos',
      views: {
        'content@alunos': {
         template: '<div class="text-center"><h1>Page 2</h1></div>'
        }
      }
    });

}]);

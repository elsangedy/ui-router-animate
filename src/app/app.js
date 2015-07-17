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
          template: [
            '<div ui-view="navbar">',
              '<div class="navbar navbar-fixed-top">',
                '<div class="navbar-inner">',
                  '<div class="container">',
                    '<ul class="nav">',
                      '<li ui-sref-active="active">',
                        '<a ui-sref="alunos.ativos">ativos</a>',
                      '</li>',
                      '<li ui-sref-active="active">',
                        '<a ui-sref="alunos.inativos">inativos</a>',
                      '</li>',
                    '</ul>',
                  '</div>',
                '</div>',
              '</div>',
            '</div>',
            '<div class="ui-view-container">',
              '<div ui-view="content"></div>',
            '</div>'
          ].join('')
        }
      }
    })
    .state('alunos.ativos', {
      url: '/ativos',
      views: {
        'content@alunos': {
          template: '<p class="lead">Ativos</p>'
        }
      }
    })
    .state('alunos.inativos', {
      url: '/inativos',
      views: {
        'content@alunos': {
          template: '<p class="lead">Inativos</p>'
        }
      }
    });

}]);

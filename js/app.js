function config($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: "views/pendu.html",
		controller: "penduCtrl"
	})
	.when('/:session', {
		templateUrl: "views/session.html",
		controller: "sessionCtrl"
	})
	.otherwise({
		redirectTo: '/'
	})
}

angular.module('pendu', ['ngRoute'])
.config(config)
.controller('penduCtrl', penduCtrl)
.controller('sessionCtrl', sessionCtrl)
.service('penduService', penduService)
function penduCtrl($scope, $location, penduService) {
	$scope.title = "Pendu";

	$scope.sendWord = function(word) {
		var dato = { word: word };
		$scope.word = "";
		penduService.postWord(dato)
		.then(function(res) {
			localStorage.setItem("found", res.data.found);
			$location.path("/" + res.data.id);
		}, function(res) {
			console.warn(res);
		})
	}
}
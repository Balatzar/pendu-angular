function sessionCtrl($scope, $routeParams, penduService) {
	$scope.title = "Jeu !";
	$scope.found = localStorage.getItem("found");

	$scope.sendChar = function(char) {
		dato = {char: char};
		$scope.char = "";
		penduService.postChar($routeParams.session, dato)
		.then(function(res) {
			console.log(res.data)
			game(res.data)
		}, function(res) {
			console.warn(res);
		})
	}

	function game(data) {
		if (data.code == 4) {
			$scope.status = "Gagné";
		} else if (data.code == 3) {
			$scope.status = "Perdu";
		} else if (data.code == 2) {
			$scope.status = "Mauvais input";
		} else if (data.code == 5) {
			$scope.status = "Vous avez déjà envoyé cette lettre";
		} else if (data.code == 6) {
			$scope.status = "Nope";
		} else {
			$scope.status = "Lettre trouvée !";
		}
		$scope.found = data.found;
		$scope.image = data.image;
	}
}
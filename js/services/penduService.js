function penduService($http) {
	return {
		postWord: function(data) {
			return $http.post('http://localhost:8080/api/pendu', data);
		},
		postChar: function(id, data) {
			return $http.post('http://localhost:8080/api/pendu/' + id, data);
		}
	}
}
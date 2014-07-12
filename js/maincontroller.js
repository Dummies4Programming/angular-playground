app.controller("MainController", function($scope, $http){
	$scope.understand = "<h1> asd </h1>";
	$scope.inputValue = "";

	$scope.selectedPerson = 
	{
		id: 3,
		name: 'Leon',
		music: [
			'Asd'
		]
	};
	$scope.selectedGenre = null;
	$scope.people = [
		{
			id: 0,
			name: 'Leon',
			music: [
				'Rock',
				'Metal',
				'Dubstep',
				'Electro'
			]
		},
		{
			id: 1,
			name: 'Chris',
			music: [
				'Indie',
				'Drumstep',
				'Dubstep',
				'Electro'
			]
		},
		{
			id: 2,
			name: 'Harry',
			music: [
				'Rock',
				'Metal',
				'Thrash Metal',
				'Heavy Metal'
			]
		},
		{
			id: 3,
			name: 'Allyce',
			music: [
				'Pop',
				'RnB',
				'Hip Hop'
			]
		}
	];
	$scope.newPerson = null;
	$scope.addNew = function() {
		$http.get('http://rest-service.guides.spring.io/greeting').
		success(function(data){
			$scope.greeting = data
		});
		if ($scope.newPerson != null && $scope.newPerson != "") {
			$scope.people.push({
				id: $scope.people.length,
				name: $scope.newPerson,
				music: []
			});
		}
		
	}
});
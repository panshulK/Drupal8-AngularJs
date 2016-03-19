app.controller('TaskList', function($scope, $http, GetTasks){
    // Call the GetTasks service and the tasks method
    // Then pass the data form this to the scope
        GetTasks.tasks(function(data){
            $scope.tasks = data;
        })
    

    // When the newTask form element is submitted, access this function.
    $scope.newTask = function(){

        // Get our data from the form
        var package = {};
            package.title = [{ 'value': $scope.title }]
            package.body = [{ 'value': $scope.body }]
            package._links = { "type": { "href": "http://localhost/drupal/rest/type/node/task" }}

       $http({
	    url: 'http://localhost/drupal/entity/node',
	    method: 'POST',
	    data: package,
	    headers: {
		"Authorization": "Basic cGFuc2h1bDpwYW5zaHVs",
		"X-CSRF-Token" : "Th0W-Mb24ZOG6oYW0q-aXrEjroVPfppTOTrOD2EhxgQ",
		"Content-Type" : "application/hal+json",
	    },
	})
	.success(function(data, status, headers, config){
		$scope.title = '';
		$scope.body = '';
		
		GetTasks.tasks(function(data){
			$scope.tasks = data;		
		})
	})
    }	
});


// Create a controller to handle viewing the task
// Pass in $routeParams which enables us to get the ID passed
// This is definedby the $routeProvider in app config
app.controller('singleTask', function($scope, $http, $routeParams){
	$http.get('http://localhost/drupal/tasks/' + $routeParams.id)
    	.success(function(data){
       		 $scope.task = data[0];
   	 })		
});

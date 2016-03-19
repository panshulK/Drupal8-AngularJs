// Set up a service to get all tasks, pass in the http dependency
app.service('GetTasks', function($http){ 
    this.tasks = getTasks;

    function getTasks(callback){
        $http.get('http://localhost/drupal/tasks')
        // On success, pass the results to the view via the scope object
        .success(function(data){
            callback(data);
        })
    }
	
})

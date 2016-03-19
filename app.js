var app = angular.module('taskApp', ['ngRoute', 'ngSanitize']);

// Configure the application routes
app.config(
	['$routeProvider', '$locationProvider',
	    function($routeProvider, $locationProvider){
	        $routeProvider
	        .when('/task/:id', {
	            templateUrl: 'single_task.html',
	            controller: 'singleTask'
	        })
	        // Ensure hashes are removed from URL and back button works
	        $locationProvider.html5Mode(true);
	    }
	]
);

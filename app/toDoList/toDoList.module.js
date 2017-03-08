angular
	.module('toDoList', [
		'ui.router',
		'toDoList.list',
		'toDoList.create',
		'toDoList.completed',
		])
	

	.config(appConfig);




function appConfig($urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
}
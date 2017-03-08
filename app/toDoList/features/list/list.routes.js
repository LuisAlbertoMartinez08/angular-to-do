angular
	.module('toDoList.list')
	.config(listConfig);

function listConfig($stateProvider) {
	$stateProvider.state({
		name: 'list',
		url: '/',
		templateUrl: '/toDoList/features/list/list.html',
		controller: 'LCtrl',
		controllerAs: 'LVM'
	})
}
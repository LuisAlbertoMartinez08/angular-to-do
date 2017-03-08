angular
	.module('toDoList.completed')
	.config(completedConfig);

function completedConfig($stateProvider) {
	$stateProvider.state({
						name: 'completed',
						url: '/completed',
						templateUrl: '/toDoList/features/completed/completed.html',
						controller: 'CompCtrl',
						controllerAs: 'CompVM'
						})
}
angular
	.module('toDoList.completed')
	.controller('CompCtrl', CompCtrl);

function CompCtrl($scope, $http) {
	var vm = this;

	vm.items = [];

	$http({
		method: 'GET',
		url: '/api/table'
	}).then(function(response){
		console.log(response);
		response.data.forEach(function(element){
			vm.items.push(element);
		});
	});
}
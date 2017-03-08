angular
	.module('toDoList.list')
	.controller('LCtrl', LCtrl);

function LCtrl(table) {
	var vm = this;

	vm.today = new Date();

	vm.items = [];

	table.getItem(vm.items);
				vm.update = function(id) {
				table.updateItem(id, true)
	}
}
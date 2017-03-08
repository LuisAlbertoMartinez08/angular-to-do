angular 
	.module('toDoList.create')
	.controller('CreateCtrl', CreateCtrl); //ask whats going on here?

function CreateCtrl($scope, table) {
	var vm = this; // does it always have to be named vm?

	// vm.items =  
	// 		{
	// 			toDoItem: '',
	// 			dueDate: '',
	// 		};

	// resetView()

	// function resetView() {
	// 	vm.items = 
	// 		{
	// 			toDoItem: '',
	// 			dueDate: '',
	// 		}
	// 		table.getItem(vm.items);
	// 		console.log(vm.items);
	// }


	// vm.addItem = function(toDoItem, dueDate) {
	// 	vm.items.toDoItem = toDoItem;
	// 	vm.items.dueDate = dueDate;
	// 	table.addItem(vm.item);
	// 	console.log(vm.item)
	// 	resetView()
	// }


	//logs an error 




vm.toDoItem = '',
vm.dueDate = '',
vm.addToDo = addToDo;

function addToDo(){
	var newToDo = {
		toDo: vm.toDoItem,
		dueDate: vm.dueDate
	};
	table.addToDo(newToDo);
	vm.toDoItem = '';
	vm.dueDate = '';

	console.log(newToDo);
 }


}





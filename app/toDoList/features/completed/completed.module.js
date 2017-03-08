angular.module('toDoList.completed', [
			'toDoList.component.navbar',
			'toDoList.component.todo',
			'toDoList.component.table' // is the order important when u include dependencies to the module?
	]);
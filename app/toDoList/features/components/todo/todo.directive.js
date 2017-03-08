angular
	.module('toDoList.component.todo')
	.directive('todo', Todo);

function Todo() {
	return {
		restrict: 'E',
		scope: {
			itemData: "="
		},
		templateUrl: '/toDoList/features/components/todo/todo.html',
		controller: ItemCtrl,
		controllerAs: 'TodoVM',
		bindToController: true
	}
}

function TodoCtrl() {
	var vm = this;
}
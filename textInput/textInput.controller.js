angular.module('gettersSetters')
.controller('TextInputController', TextInputController)

function TextInputController() {
	const vm = this

	vm.submit = (name) => {
		vm.name = name
	}
}

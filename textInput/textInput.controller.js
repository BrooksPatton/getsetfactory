angular.module('gettersSetters')
.controller('TextInputController', TextInputController)

function TextInputController(NameService) {
	const vm = this

	vm.submit = (name) => {
		NameService.set(name)
	}
}

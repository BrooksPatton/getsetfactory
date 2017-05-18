angular.module('gettersSetters')
.controller('DisplayNameController', DisplayNameController)

function DisplayNameController(NameService) {
	const vm = this
	vm.name = ''

	vm.getName = () => {
		const num = Math.floor(Math.random() * 600)

		NameService.get(num).then(data => {
			vm.name = data.title
			vm.url = data.img
			vm.alt = data.alt
		})
	}
}

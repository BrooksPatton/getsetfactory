angular.module('gettersSetters')
.service('NameService', NameService)

function NameService($http) {
	const vm = this
	let episodes = {}

	vm.get = (num) => {
		if(episodes[num]) {
			return episodes[num]
		} else {
			return $http.get('https://galvanize-cors.herokuapp.com/https://xkcd.com/' + num + '/info.0.json').then(res => {
				episodes[num] = res.data
				return res.data
			})
		}
	}

	vm.set = (str) => {
		name.push(str)
	}
}

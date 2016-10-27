(function () {
	
	let app = angular.module('WallyWorld');

	app.component('categories', {
		controller: Categories,
		controllerAs: 'cc',
		bindings: {
		},
		templateUrl: 'templates/categories.html'
	});

	function Categories() {

	}
})();
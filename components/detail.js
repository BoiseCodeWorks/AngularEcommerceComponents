(function () {

	let app = angular.module('WallyWorld');

	app.component('detail', {
		controller: Detail,
		controllerAs: 'dc',
		bindings: {
		},
		templateUrl: 'templates/detail.html'
	});

	Detail.$inject = ['$state', '$stateParams', 'categoryService'];

	function Detail($state, $stateParams, categoryService) {

		let dc = this;
		let itemId = $stateParams.id;
		let item = null;

		categoryService.getProduct(itemId)
			.then(function (product) {

				console.log(product);

				dc.item = product.data;
			})
			.catch(function (error) {
				console.log(error);
			});
	}

})();
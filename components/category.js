(function () {

	let app = angular.module('WallyWorld');

	app.component('category', {
		controller: Category,
		controllerAs: 'cc',
		bindings: {
		},
		templateUrl: 'templates/category.html'
	});

	Category.$inject = ['$state', '$stateParams', 'categoryService'];

	function Category($state, $stateParams, categoryService) {

		let cc = this;
		let categoryId = $stateParams.id;
		let start = $stateParams.start || 1;

		cc.items = [];
		cc.totalItems = 0;
		cc.currentPage = 1;

		cc.setPage = function (pageNo) {
			cc.currentPage = pageNo;
		};

		cc.pageChanged = function () {
			let newPage = cc.currentPage * 10 - 9;
			$state.go('category', { id: categoryId, start: newPage });
		};

		categoryService.getProducts(categoryId, start)
			.then(function (products) {

				console.log(products);

				cc.items = products.data.items;
				cc.totalItems = products.data.totalResults;
			})
			.catch(function (error) {
				console.log(error);
			});
	}
})();
(function () {
	
	let app = angular.module('WallyWorld');

	app.component('product', {
		controller: Product,
		controllerAs: 'pc',
		bindings: {
			item: '<'
		},
		templateUrl: 'templates/product.html'
	});

	Product.$inject = ['$rootScope', '$state'];
	
	function Product($rootScope, $state) {

		let pc = this;

		pc.showDetails = function (itemId) {
			$state.go('detail', { id: itemId });
		};

		pc.addToCart = function (item) {
			$rootScope.$broadcast('BuyItem', { item: item, qty: 1 });
		};
		
	}
})();
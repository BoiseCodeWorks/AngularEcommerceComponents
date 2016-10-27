(function () {
	
	let app = angular.module('WallyWorld');

	app.factory('cartService', CartService);

	CartService.$inject = ['$rootScope'];

	function CartService($rootScope) {

		let items = [];

		$rootScope.$on('BuyItem', function (event, data) {

			let index = items.findIndex((item) => {
				return item.item.itemId === data.item.itemId;
			});	
			
			if (index > -1) {
				items[index].qty += data.qty;
			}
			else {
				items.push(data);
			}

			$rootScope.$broadcast('CartUpdated', items);
		});	
		
		return {
			items: items
		};
	}	
})();
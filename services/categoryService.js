(function () {

	let app = angular.module('WallyWorld');

	app.factory('categoryService', CategoryService);

	CategoryService.$inject = ['$http', 'PaginatedApiUrl', 'ProductDetailApiUrl'];

	function CategoryService($http, apiUrl, detailApiUrl) {

		function getProducts(categoryId, start) {

			let url = apiUrl + categoryId + '&start=' + start;		

			return $http({
				method: 'jsonp',
				url: url,
				params: {
					callback: 'JSON_CALLBACK'
				}
			});
		}

		function getProduct(itemId) {

			let url = detailApiUrl.replace('{itemId}', itemId);	

			return $http({
				method: 'jsonp',
				url: url,
				params: {
					callback: 'JSON_CALLBACK'
				}
			});
		}
		return {
			getProducts: getProducts,
			getProduct: getProduct
		};
	}
})();
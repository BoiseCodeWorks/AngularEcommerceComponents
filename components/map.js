(function () {

	let app = angular.module('WallyWorld');
	app.component('storeLocator', {
		controller: StoreLocator,
		controllerAs: 'slc',
		bindings: {
		},
		templateUrl: 'templates/map.html'
	});

	StoreLocator.$inject = ['$rootScope', 'NgMap'];

	function StoreLocator($rootScope, NgMap) {

		let mc = this;

		// $rootScope.$on('mapInitialized', function (evt, map) {
		// 	console.log('Map Init');
		// });

		//console.log('NgMap: ', NgMap);
		
		// NgMap.getMap().then(function (map) {
		// 	mc.map = map;
		// });

	}
})();
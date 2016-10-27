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

		let slc = this;

		slc.markers = [{
			"no": 3094,
			"name": "Boise Walmart Neighborhood Market",
			"country": "US",
			"coordinates": [-116.2760806, 43.6343486],
			"streetAddress": "3233 N. Cole Rd.",
			"city": "Boise",
			"stateProvCode": "ID",
			"zip": "83704",
			"phoneNumber": "(208) 501-7025",
			"sundayOpen": true,
			"timezone": "MST"
		}, {
			"no": 2508,
			"name": "Boise Walmart Supercenter",
			"country": "US",
			"coordinates": [-116.284808, 43.592826],
			"streetAddress": "8300 W Overland Rd",
			"city": "Boise",
			"stateProvCode": "ID",
			"zip": "83709",
			"phoneNumber": "(208) 321-9077",
			"sundayOpen": true,
			"timezone": "MST"
		}, {
			"no": 2861,
			"name": "Boise Walmart Supercenter",
			"country": "US",
			"coordinates": [-116.283599, 43.66992],
			"streetAddress": "7319 W State St",
			"city": "Boise",
			"stateProvCode": "ID",
			"zip": "83714",
			"phoneNumber": "(208) 853-0541",
			"sundayOpen": true,
			"timezone": "MST"
		}, {
			"no": 2862,
			"name": "Meridian Walmart Supercenter",
			"country": "US",
			"coordinates": [-116.343373, 43.618101],
			"streetAddress": "4051 E Fairview Ave",
			"city": "Meridian",
			"stateProvCode": "ID",
			"zip": "83642",
			"phoneNumber": "(208) 373-7908",
			"sundayOpen": true,
			"timezone": "MST"
		}, {
			"no": 3093,
			"name": "Meridian Walmart",
			"country": "US",
			"coordinates": [-116.40247, 43.588905],
			"streetAddress": "795 West Overland Road",
			"city": "Meridian",
			"stateProvCode": "ID",
			"zip": "83642",
			"phoneNumber": "(208) 917-6902",
			"sundayOpen": true,
			"timezone": "MST"
		}, {
			"no": 5841,
			"name": "Meridian Walmart Supercenter",
			"country": "US",
			"coordinates": [-116.436338, 43.650236],
			"streetAddress": "5001 N. Ten Mile Rd.",
			"city": "Meridian",
			"stateProvCode": "ID",
			"zip": "83646",
			"phoneNumber": "(208) 982-3045",
			"sundayOpen": true,
			"timezone": "MST"
		}, {
			"no": 3739,
			"name": "Nampa Walmart Supercenter",
			"country": "US",
			"coordinates": [-116.510876, 43.602905],
			"streetAddress": "5875 E Franklin Rd",
			"city": "Nampa",
			"stateProvCode": "ID",
			"zip": "83687",
			"phoneNumber": "(208) 461-6481",
			"sundayOpen": true,
			"timezone": "MST"
		}, {
			"no": 2781,
			"name": "Nampa Walmart Supercenter",
			"country": "US",
			"coordinates": [-116.569909, 43.548914],
			"streetAddress": "2100 12Th Ave Rd",
			"city": "Nampa",
			"stateProvCode": "ID",
			"zip": "83686",
			"phoneNumber": "(208) 467-5047",
			"sundayOpen": true,
			"timezone": "MST"
		}, {
			"no": 4180,
			"name": "Nampa Walmart Neighborhood Market",
			"country": "US",
			"coordinates": [-116.6140707, 43.5664486],
			"streetAddress": "175 S Middleton Rd",
			"city": "Nampa",
			"stateProvCode": "ID",
			"zip": "83651",
			"phoneNumber": "(208) 546-3337",
			"sundayOpen": true,
			"timezone": "MST"
		}, {
			"no": 2780,
			"name": "Caldwell Walmart Supercenter",
			"country": "US",
			"coordinates": [-116.646208, 43.631125],
			"streetAddress": "5108 Cleveland Blvd",
			"city": "Caldwell",
			"stateProvCode": "ID",
			"zip": "83607",
			"phoneNumber": "(208) 455-0066",
			"sundayOpen": true,
			"timezone": "MST"
		}, {
			"no": 4494,
			"name": "Caldwell Walmart Neighborhood Market",
			"country": "US",
			"coordinates": [-116.69127479, 43.63345071],
			"streetAddress": "622 E. Ustick Road",
			"city": "Caldwell",
			"stateProvCode": "ID",
			"zip": "83605",
			"phoneNumber": "(208) 454-5640",
			"sundayOpen": true,
			"timezone": "MST"
		}, {
			"no": 2782,
			"name": "Mountain Home Walmart Supercenter",
			"country": "US",
			"coordinates": [-115.6679356, 43.1366956],
			"streetAddress": "2745 American Legion Blvd",
			"city": "Mountain Home",
			"stateProvCode": "ID",
			"zip": "83647",
			"phoneNumber": "(208) 587-0601",
			"sundayOpen": true,
			"timezone": "MST"
		}, {
			"no": 1951,
			"name": "Ontario Walmart Supercenter",
			"country": "US",
			"coordinates": [-116.939, 44.0274],
			"streetAddress": "1775 E Idaho Ave",
			"city": "Ontario",
			"stateProvCode": "OR",
			"zip": "97914",
			"phoneNumber": "(541) 889-7400",
			"sundayOpen": true,
			"timezone": "MST"
		}]

	}
})();
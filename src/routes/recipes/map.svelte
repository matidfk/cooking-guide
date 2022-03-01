<script>
	export const ssr = false;
	import { onMount } from 'svelte';
	// @ts-ignore
	import recipes from '/src/recipes.json';
	import jsVectorMap from 'jsvectormap';
	import 'jsvectormap/dist/maps/world.js';
	import 'jsvectormap/dist/css/jsvectormap.css';

	function loadMap() {
		let countries = {};
		recipes.forEach((recipe) => {
			countries[recipe.countryOfOrigin.toUpperCase()] = 1;
		});

		const map = new jsVectorMap({
			selector: '#map',
			map: 'world',
			backgroundColor: '#009',
			visualizeData: {
				scale: ['#000', '#fff'],
				values: countries
			},
			onRegionTooltipShow: function (tooltip, code) {
				console.log(code);
				tooltip._tooltip.innerHTML += '<br>';
				// go through backwards to show newest recipes first
				recipes
					.slice()
					.reverse()
					.forEach((recipe) => {
						if (recipe.countryOfOrigin.toUpperCase() == code)
							tooltip._tooltip.innerHTML += `<img src="${recipe.image}" style="height: 40px">`;
					});
			}
		});
	}

	onMount(loadMap);
</script>

<a href="/recipes/list">list</a>

<div id="map" />

<style>
	#map {
		width: 100vw;
		height: 90vh;
		position: relative;
	}
</style>

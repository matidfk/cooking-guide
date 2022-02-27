<script>
	import RecipeCard from './RecipeCard.svelte';
	// @ts-ignore
	import recipes from '/src/recipes.json';

	let mode = "list";
</script>

<span on:click="{() => {mode = "list"}}">list</span>
<span on:click="{() => {mode = "world"}}">world</span>

{#if mode == "list"}
	<div id="container">
		<div id="cards">
			{#each recipes as recipe, index}
				<RecipeCard {index} />
			{/each}
		</div>
	</div>
{/if}

{#if mode == "world"}
<br>
    poo idk


{/if}

<style scoped>
	#cards {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 70%;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	#container {
		width: 100%;
		position: relative;
	}
</style>

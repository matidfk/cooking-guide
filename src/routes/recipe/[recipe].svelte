<script>
    import { page } from '$app/stores';
    // @ts-ignore
    import recipes from '/src/recipes.json';
    const recipe = recipes[$page.params.recipe];
</script>

<div id="container">
	<h1>{recipe.name}</h1>

	<p>{recipe.description}</p>

	<h2>Ingredients:</h2>
	<ul>
		{#each recipe.ingredients as ing}
			<li><b>{ing.amount}{ing.unit}</b> {ing.type}</li>
		{/each}
	</ul>

	<h2>Instructions:</h2>
	<ol>
		{#each recipe.instructions as ins}
			<li>{ins.text}</li>
            <br>
		{/each}
	</ol>
</div>

<style scoped>
    #container {
        padding: 1rem;
    }
</style>

<script>
    export let recipe;
</script>

<h1>{recipe.name}</h1>

<p>{recipe.description}</p>

<h2>Ingredients:</h2>
<ul>
    {#each recipe.ingredients as ing}
        <li><b>{ing.amount}</b> {ing.unit} {ing.type}</li>
    {/each}
</ul>

<h2>Instructions:</h2>
<ol>
    {#each recipe.instructions as ins}
        <li>{ins.text}</li>
    {/each}
</ol>
<style scoped>
    h1 {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: xx-large;
        text-align: center;
    }
</style>
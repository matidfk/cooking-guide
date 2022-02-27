<script>
    import RecipeCard from "./RecipeCard.svelte";

    export let recipes;
</script>
<div id="container">
    <div id="cards">
        {#each recipes as recipe}
            <RecipeCard recipe={recipe}></RecipeCard>
        {/each}
        {#each recipes as recipe}
            <RecipeCard recipe={recipe}></RecipeCard>
        {/each}
    </div>
</div>
<style scoped>
    #cards {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 70%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-template-rows: repeat(auto-fill, 500px);
        gap: 1rem;
        justify-content: stretch;
    }

    #container {
        width: 100%;
        position: relative;

    }
</style>
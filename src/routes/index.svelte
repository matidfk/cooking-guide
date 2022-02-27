<script>
    import Recipe from './Recipe.svelte';
    import RecipesList from './RecipesList.svelte';
    import '../style.css'
    // @ts-ignore
    import recipes from '/src/recipes.json';
</script>

<RecipesList recipes={recipes}></RecipesList>

<style>
</style>
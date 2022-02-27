<script>
    export let index;
    // @ts-ignore
	import recipes from '/src/recipes.json';
    const recipe = recipes[index];
</script>

<a href="recipe/{index}" id="card" style="background-image: url('{recipe.image}')">
    <div id="top">
        <div id="name"><h2>{recipe.name}</h2></div>
        <div id="time">⏱ {recipe.cookTime + recipe.prepTime} min</div>
    </div>
    <div id="description">{recipe.description}</div>
</a>

<style scoped>
    * {
        --border-radius: 0.5rem;
    }

    h2 {
        margin: 0;
    }

    #card {
        flex: 300px;
        position: relative;
        height: 300px;
        border-radius: var(--border-radius);
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
        background-size: cover;
    }

    #card > * {
        position: absolute;
    }

    #top {
        left: 0;
        right: 0;
        top: 0;
        text-align: right;
    }

    #name {
        text-align: center;
        padding: 0.5rem;
        
        background-color: rgba(255, 255, 255, 1);

        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
    }

    #time {
        font-weight: bolder;
        padding: 0.5rem;
        display: inline-block;
        background-color: rgba(255, 255, 255, 1);
    }

    #description {
        left: 0;
        bottom: 0;
        right: 0;
        padding: 0.5rem;
        text-align: center;
        
        background-color: rgba(255, 255, 255, 0.6);
        
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }

</style>
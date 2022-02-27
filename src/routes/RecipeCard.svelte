<script>
    export let recipe;
</script>

<div id="card" style="background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FggkYajJDa9BBezg_IWDYwHaEK%26pid%3DApi&f=1')">
    <div id="top">
        <div id="name">{recipe.name}</div>
        <div id="cook-time">⏱ {recipe.cookTime + recipe.prepTime} min</div>
    </div>
    <div id="description">{recipe.description}</div>
</div>

<style scoped>
    * {
        --border-radius: 0.5rem;
    }

    #card {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: var(--border-radius);
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
        background-size: cover;
    }

    #card * {
        position: absolute;
    }

    #top {
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
    }

    #name {
        width: 100%;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        background-color: white;

        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
    }

    #cook-time {
        padding: 0.5rem;
        display:inline-block;
        background-color: white;
    }

    #description {
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
        background-color: rgba(255, 255, 255, 0.4);
        bottom: 0px;
        padding: 0.5rem;
        text-align: center;
    }
</style>
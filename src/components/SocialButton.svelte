<script>
    export let icon;
    export let link;
    export let alt = "social icon button";
    export let text = null
</script>

<style>
    h2 {
        color: white
    }

    img {
        height: 40px;
        width: 40px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 13px;
        margin-right: 13px;
    }
</style>

<div>
    <a href={link}> <img src={icon} alt={alt}/> </a>
    {#if text } <h2> {text} </h2> {/if}
</div>
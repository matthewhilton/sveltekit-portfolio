<script>
    import { query, gql, operationStore } from '@urql/svelte'
    import FeaturedItem from './FeaturedItem.svelte';

    export let type;

    const workitemquery = gql`
        query($type: String!) {
        workitems(where: { type: $type}, orderBy: pagepriority_DESC) {
            title
            year
            featured
            shortdescription
            slug
            id
            pagepriority
            cover {
            url
            }
            stackitems {
            id
            logo {
                url
            }
            title
            }
        }
    }
    `

    const posts = operationStore(workitemquery, { type })

    query(posts)
    
</script>

<style>
    #gallery {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>

{#if $posts.fetching}
 <p> Loading... </p>
{/if}

{#if $posts.data}
    <div id="gallery">
        {#each $posts.data.workitems as item}
        <FeaturedItem data={item} />
        {/each}
    </div>
{/if}


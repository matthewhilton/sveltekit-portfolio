<script>
	import { page } from '$app/stores';
	import { query, gql, operationStore } from '@urql/svelte';
	import Lazy from 'svelte-lazy';

	const workitemquery = gql`
		query GetWorkitem($slug: String!) {
			workitem(where: { slug: $slug }) {
				title
				year
				description
				images {
					id
					url
				}
				cover {
					url
				}
				studyunit {
					title
					color
					code
				}
				stackitems {
					id
					logo {
						url
					}
					title
				}
				githubUrl
			}
		}
	`;

	const item = operationStore(workitemquery, { slug: $page.params.slug });
	query(item);
</script>

<div id="outer">
    <div id="page">
        <a href="/" id="back"> <img src="/arrow-left-solid.svg" /> Back </a>
        {#if $item.data}
            <Lazy height={700}>
                <img id="cover" alt="cover" src={$item.data.workitem.cover.url} />
            </Lazy>
            <h1>{$item.data.workitem.title}</h1>

            <div id="subtitle">
                <h2> {$item.data.workitem.year} </h2>
            </div>
            <p>{$item.data.workitem.description}</p>
        {:else if $item.fetching}
            <p>Loading...</p>
        {:else}
            <p>Error</p>
        {/if}
    </div>
</div>

<style>
    #back img {
        width: 18px;
        margin-right: 10px;
    }

    #back {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
        color: white;
        font-weight: 700;
        text-align: left;
        width: 100%;
        margin-top: 40px;
    }

	#cover {
		max-width: 900px;
        width: 100%;
	}

    #outer {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px
    }

	#page {
        display: flex;
        flex-direction: column;
        width: 65%;
	}

    @media only screen and (max-width: 900px) {
        #page {
            width: auto;
        }
    }
</style>

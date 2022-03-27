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
        <div id="coverbox">
            <Lazy height={700}>
                
                <img id="cover" alt="cover" src={$item.data.workitem.cover.url} />
            
            </Lazy>
        </div>
            <h1>{$item.data.workitem.title}</h1>

            <div id="subtitle">
                <h2> {$item.data.workitem.year} </h2>

                <div id="stackitems">
                    {#each $item.data.workitem.stackitems as stackitem}
                        <img class="stackitem" src={stackitem.logo.url} alt={stackitem.title} />
                    {/each}
                </div>
            </div>

            {#if $item.data.workitem.githubUrl != null}
                <a href={$item.data.workitem.githubUrl}><b> Github Repository </b></a>
            {/if}
            <p>{$item.data.workitem.description}</p>

            <div id="imagegallery">
                {#each $item.data.workitem.images as image}
                    <Lazy height={700}>
                        <img src={image.url} />
                    </Lazy>
                {/each}
            </div>
        {:else if $item.fetching}
            <p>Loading...</p>
        {:else}
            <p>Error</p>
        {/if}
    </div>
</div>

<style>

    #imagegallery {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    #imagegallery img {
        width: auto;
        max-height: 500px;
    }

    a {
        margin-top: 10px;
        color: white;
    }
    h1 {
        margin: 0;
    }

    .stackitem {
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }

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

    #coverbox {
        display: flex;
        flex-direction: column;
        align-items: center;
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

    p {
        font-size: 120%;
        text-align: justify;
    }

    @media only screen and (max-width: 900px) {
        #page {
            width: auto;
        }

        #imagegallery img {
            width: auto;
            max-width: 80%;
            max-height: none;
        }
    }
</style>

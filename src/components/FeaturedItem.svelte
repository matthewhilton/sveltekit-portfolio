<script>
	import Lazy from 'svelte-lazy';

	export let data = {};
</script>

<div id="container">
	<a href={`/item/${data.slug}`}>
		<Lazy height={700}>
			<img alt="cover" src={data.cover.url} />
		</Lazy>
	</a>
	<h1 id="title">{data.title}</h1>
</div>

<style>
	img {
		max-width: 500px;
		width: auto;
		height: 200px;
	}

	#container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#title {
		font-size: 20px;
	}
</style>

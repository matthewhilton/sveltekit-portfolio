import { initClient } from '@urql/svelte'

initClient({
  url:  import.meta.env.VITE_GRAPHQL_URL
})
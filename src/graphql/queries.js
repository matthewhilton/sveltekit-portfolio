import { gql } from '@urql/svelte';

export const GET_FEATURED_WORKITEMS = gql`
query {
  workitems(where: { type: "dev"}, orderBy: pagepriority_DESC) {
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
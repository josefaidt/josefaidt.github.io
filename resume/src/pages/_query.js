export default `{
  user(login: "josefaidt") {
    id
    url
    avatarUrl
    name
    repositories(orderBy: {field: PUSHED_AT, direction: DESC}, first: 10, ownerAffiliations: OWNER, isFork: false, privacy: PUBLIC) {
      totalCount
      edges {
        node {
          id
          name
          description
          url
          homepageUrl
          
          stargazers {
            totalCount
          }
          watchers {
            totalCount
          }
          forks {
            totalCount
          }
        }
      }
    }
  }
}`

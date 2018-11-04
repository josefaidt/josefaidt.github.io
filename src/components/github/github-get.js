import token from './key'

const query = `
  query {
    user(login: "josefaidt") {
      id
      url,
      name
      avatarUrl
      repositories(orderBy: {field: UPDATED_AT, direction: DESC}, first: 30) {
        totalCount
        edges {
          node {
            id
            name
            description
            url
          }
        }
      }
    }
  }
  `

fetch('https://api.github.com/graphql', {
  method: 'POST',
  body: JSON.stringify({ query: query }),
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => res.text())
  .then(body => {
    const userInfo = JSON.parse(body).data.user
    const repos = shapeRepos(userInfo.repositories.edges)
    console.log(repos)
    console.log(JSON.parse(body))
    console.log(userInfo)
  }) // {"data":{"repository":{"issues":{"totalCount":247}}}}
  .catch(error => console.error(error))

function shapeData(responseBody) {
  return new Promise((resolve, reject) => {
    const githubInfo = {
      url: responseBody.user.url,
      name: responseBody.user.name,
      avatarUrl: responseBody.user.avatarUrl,
      respositories: responseBody.user.edges.map()
    }
    resolve(githubInfo)
  })
}

function shapeRepos(repositories) {
  const repos = []
  repositories.forEach(i => {
    repos.push({
      name: i.node.name,
      description: i.node.description,
      url: i.node.url
    })
  })
  return repos
}

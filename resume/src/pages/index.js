import React from 'react'
import fetch from 'node-fetch'
import Card from '../components/Card'
import Grid from '../components/Grid'
import Container from '../components/Container'
import projects from '../data/projects.json'
import query from './_query'

const HomePage = ({ repositories, projects }) => {
  return (
    <Container>
      <section aria-label="contact information">
        <header>
          <h1>Josef Aidt</h1>
        </header>
        <p>
          <strong>Email:</strong> josef.aidt@gmail.com <br />
          <strong>Website:</strong> josefaidt.dev <br />
          <strong>Twitter:</strong> @josefaidt <br />
          <strong>Twitch:</strong> twitch.tv/josefaidt <br />
          <strong>Github:</strong> github.com/josefaidt <br />
        </p>
      </section>
      <section>
        <header>
          <h2>Personal Projects</h2>
        </header>
        <Grid>
          {projects.map((project, i) => (
            <Card key={i}>
              <h4>{project.name}</h4>
              {/* <p>
                <a href={project.url}>
                  {project.urlLabel || project.url.replace(/https?:\/\//, '')} &rarr;
                </a>
              </p> */}
              <p>{project.description}</p>
              <div className="card--technologies">
                {project.technologies.map((technology, k) => (
                  <div key={k}>{technology}</div>
                ))}
              </div>
            </Card>
          ))}
        </Grid>
      </section>
      <section>
        <header>
          <h2>Work Experience</h2>
        </header>
        <article>
          <header>
            <h3>Full-Stack JavaScript Developer at IBM</h3>
            <p>Baton Rouge, LA</p>
            <p>December 2018 - Present</p>
          </header>
          <ul>
            <li>Established local front-end development group chapter, leads bi-weekly meetups</li>
            <li>Build learning management system (Node.js, React)</li>
          </ul>
        </article>
        <article>
          <header>
            <h3>Business Intelligence Developer at FMOL Health System</h3>
            <p>Baton Rouge, LA</p>
            <p>August 2017 - December 2018</p>
          </header>
          <ul>
            <li>Build and support Lawson ERP submodules (HTML5, CSS3, JavaScript)</li>
            <li>
              Design financial, human resources, and logistics reports (Oracle SQL, Microsoft SQL,
              Tableau)
            </li>
          </ul>
        </article>
        <article>
          <header>
            <h3>IS Support Analyst at FMOL Health System</h3>
            <p>Baton Rouge, LA</p>
            <p>October 2013 - August 2017</p>
          </header>
          <ul>
            <li>Lead large-scale endpoint deployments</li>
            <li>
              Build inventory receiving application infrastructure (MySQL, Microsoft Server, PHP)
            </li>
          </ul>
        </article>
      </section>
    </Container>
  )
}

export async function getStaticProps(context) {
  const getGithubData = async () => {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    })
    const data = await res.json()
    return data?.data
  }
  const githubData = await getGithubData()
  return {
    props: { projects, repositories: githubData.user.repositories }, // will be passed to the page component as props
  }
}

export default HomePage

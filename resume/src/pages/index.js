import React from 'react'
import fetch from 'node-fetch'
import Card from '../components/Card'
import Grid from '../components/Grid'
import Container from '../components/Container'
import projects from '../data/projects.json'
import experience from '../data/experience.json'
import query from '../data/gh-query'
import { technologies as cardTechnologies } from '../components/Card/Card.module.css'
import styles from '../styles.module.css'

const HomePage = ({ repositories, projects, experience }) => {
  return (
    <Container>
      <section aria-label="contact information">
        <header>
          <h1>Josef Aidt</h1>
        </header>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:josef.aidt@gmail.com" target="_blank" rel="noopener noreferrer">
            josef.aidt@gmail.com
          </a>{' '}
          <br />
          <strong>Website:</strong> <a href="https://josefaidt.dev">josefaidt.dev</a> <br />
          <strong>Twitter:</strong>{' '}
          <a href="https://twitter.com/josefaidt" target="_blank" rel="noopener noreferrer">
            @josefaidt
          </a>{' '}
          <br />
          <strong>Twitch:</strong>{' '}
          <a href="https://twitch.tv/josefaidt" target="_blank" rel="noopener noreferrer">
            twitch.tv/josefaidt
          </a>{' '}
          <br />
          <strong>Github:</strong>{' '}
          <a href="https://github.com/josefaidt" target="_blank" rel="noopener noreferrer">
            github.com/josefaidt
          </a>{' '}
          <br />
        </p>
      </section>
      <section>
        <header>
          <h2>Personal Projects</h2>
        </header>
        <Grid>
          {projects.map((project, i) => (
            <Card key={i}>
              <header className={styles.cardHeader}>
                <h4 className={styles.cardTitle}>{project.name}</h4>
                <a
                  className={styles.cardLaunch}
                  href={project.url}
                  target="_blank"
                  style={{ alignSelf: 'flex-start' }}
                >
                  {project.type.toLowerCase() !== 'download' ? 'Launch ' : ''}
                  {[
                    project.type[0].toUpperCase(),
                    project.type.toLowerCase() === 'npm'
                      ? project.type.slice(1).toUpperCase()
                      : project.type.slice(1).toLowerCase(),
                  ].join('')}{' '}
                  <svg className={styles.cardLaunchIcon} height="32" width="32" viewBox="0 0 32 32">
                    <title>Launch Project</title>
                    <path d="M6 2v24h24v-24h-24zM28 24h-20v-20h20v20zM4 28v-21l-2-2v25h25l-2-2h-21z" />
                    <path d="M11 8l5 5-6 6 3 3 6-6 5 5v-13z" />
                  </svg>
                </a>
              </header>
              {/* <p>
                <a href={project.url}>
                {project.urlLabel || project.url.replace(/https?:\/\//, '')} &rarr;
                </a>
              </p> */}
              <p className={styles.cardDescription}>{project.description}</p>
              <div className={cardTechnologies}>
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
        {experience.map((xp, i) => (
          <article key={i}>
            <header className={styles.xpHeader}>
              <h3 className={styles.xpTitle}>
                {xp.title} at {xp.company}
              </h3>
              <p className={styles.xpDate}>
                {xp.startDate} &ndash; {xp.endDate}
              </p>
            </header>
            <ul>
              {xp.responsibilities.map((responsibility, k) => (
                <li key={k}>{responsibility}</li>
              ))}
            </ul>
          </article>
        ))}
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
  return {
    props: { projects, experience }, // will be passed to the page component as props
  }
}

export default HomePage

import React from 'react'
import { graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Layout from 'components/Skeleton'
import SEO from 'components/seo'
import Icon from 'components/Icon'
import Line from 'components/styles/Line'
import { Title, SubtitleFlex } from 'components/styles/Titles.css'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO
      keywords={[`gatsby`, `application`, `react`, `josef aidt`, `josef`, `aidt`, `resume`]}
      title="Résumé"
    />
    <Title>
      <h1>Résumé</h1>
      <Icon icon="pdf" link={data.allFile.edges[0].node.publicURL} />
    </Title>
    <Line />
    <h2>Objective</h2>
    <p>
      I am looking to challenge my abilities in web development and engineering. By applying my
      operational IT background, I seek to further my abilities in JavaScript’s Node.js and its
      growing role in web applications and infrastructure.
    </p>
    <br />
    <h2>Work Experience</h2>
    <Line />
    <div>
      <SubtitleFlex>
        <h3>
          Frontend UI Developer{' '}
          <OutboundLink href="https://twitter.com/IBM" target="_blank">
            @IBM
          </OutboundLink>
        </h3>
        <span>
          Present
          <br />
          Dec 2018
        </span>
      </SubtitleFlex>
      <ul>
        <li>
          Uses frontend development technologies to build fully-accessible, interactive websites
        </li>
        <li>Utilizes Agile methodologies to accomplish daily tasks, using JIRA</li>
        <li>Applies IBM Enterprise Design Thinking to website build and design</li>
      </ul>
      <SubtitleFlex>
        <h3>
          Programmer{' '}
          <OutboundLink
            href="https://www.linkedin.com/company/franciscan-missionaries-of-our-lady-health-system/about/"
            target="_blank"
          >
            @FMOL Health System
          </OutboundLink>
        </h3>
        <span>
          Dec 2018
          <br />
          Aug 2017
        </span>
      </SubtitleFlex>
      <ul>
        <li>
          Used JavaScript and JQuery to accomplish various tasks within mature ERP environment,
          Lawson Infor
        </li>
        <li>
          Designed and developed internal charitable giving campaigns, front-end benefits enrollment
          form changes, and interfacing with external companies
        </li>
        <li>
          Engineered pure front-end JavaScript cryptography solution to pass encrypted employee user
          information to an intranet site, using C# and Windows’s native cryptography library to
          deliver employee benefits statements
        </li>
        <li>
          Leveraged MSSQL Server Reporting Services and Crystal Reports to deliver reports such as
          supply chain asset management, financial reporting, and employee turnover; primarily from
          ERP’s Oracle database
        </li>
        <li>
          Utilized Tableau to visualize – and enhance – legacy reporting to provide interactive,
          meaningful results
        </li>
      </ul>
    </div>
    <div>
      <SubtitleFlex>
        <h3>
          IS Support Analyst{' '}
          <OutboundLink
            href="https://www.linkedin.com/company/franciscan-missionaries-of-our-lady-health-system/about/"
            target="_blank"
          >
            @FMOL Health System
          </OutboundLink>
        </h3>
        <span>
          Aug 2017
          <br />
          May 2014
        </span>
      </SubtitleFlex>
      <ul>
        <li>
          Managed, tested, and deployed VDI inventory. Created and managed standardization
          documentation.
        </li>
        <li>
          Database Design – mobile app and PHP web services integration developed to streamline
          equipment receiving process, and interface with existing asset management database
        </li>
        <li>Virtualized (P2V) legacy hospital applications hosted by local support into VMWare</li>
        <li>
          PowerShell and batch scripting automation of time-consuming tasks (reporting Bitlocker
          encryption status, IE versions, mass editing of configuration files, removing manually
          installed software)
        </li>
        <li>
          Lead multiple projects to provide streamlined deployment processes and documentation
          practices
        </li>
        <li>
          VDI endpoint deployment projects to replace thick client installations on multiple units
          across hospital units and its clinics (~1,200 devices overall)
        </li>
        <li>
          Replace and install new clients in high-intensity areas: multiple OR wings, ER, and CVL
          departments
        </li>
        <li>Orchestrated equipment relocation during a hospital unit renovation project</li>
        <li>
          Mentored new interns and high school work study students on general troubleshooting,
          documentation, deployments, and disposal procedures
        </li>
      </ul>
    </div>
    <br />
    <h2>Language and Technology Proficiencies</h2>
    <Line />
    <ul>
      <li>Node.js web and console applications </li>
      <li>Front-end: HTML/CSS, SCSS, JavaScript</li>
      <li>Object-Oriented Design</li>
      <li>Scripting: Python, PowerShell, batch, bash</li>
      <li>Database: SQL, MySQL, Oracle SQL, MongoDB</li>
      <li>Modern Build Tools: Webpack, Parcel, Rollup, Babel</li>
      <li>“Legacy” Build Tools: Grunt, Gulp</li>
      <li>Package Managers: npm, primarily Yarn</li>
      <li>Azure Cloud web app bots</li>
      <li>Methodologies: Agile, SCRUM (using Trello, JIRA)</li>
    </ul>
    <br />
    <h2>Education</h2>
    <Line />
    <div>
      <h3>Louisiana State University, Baton Rouge, LA</h3>
      <p>
        Bachelor of Science &ndash; Information Systems and Decision Sciences <br />
        Activities: LSU Tiger Marching Band, Association of IT Professionals LSU Chapter
      </p>
    </div>
    <br />
    <h2>Accomplishments</h2>
    <Line />
    <div>
      <h3>Boy Scouts of America &ndash; Eagle Scout</h3>
      <p>
        2009 Philmont Scout Ranch attendee <br />
        2010 Centennial National Scout Jamboree attendee
      </p>
    </div>
    <br />
    <h2>Volunteer Work</h2>
    <Line />
    <div>
      <h3>Geaux BIG Baton Rouge 2015</h3>
      <p>
        Annual event held by LSU Campus Life to give a streamlined opportunity for students to give
        back to the community; involves simple tasks such as landscaping, pressure washing,
        painting, and elderly assistance
      </p>
      <h3>Our Lady of the Lake RMC</h3>
      <p>
        Provided DJ and music entertainment services for community events such as annual Easter and
        Halloween celebrations. Also participated as a member of the company-sponsored team for the
        Jambalaya Jam 2018 event, which benefits the Capital Area United Way campaign.
      </p>
      <h3>Krewe of Apollo Baton Rouge</h3>
      <p>
        Provided DJ and music entertainment services for various events such as local concerts,
        crowning galas, and fundraising ball
      </p>
    </div>
  </Layout>
)

export const queryResume = graphql`
  query {
    allFile(filter: { name: { eq: "jaidt_Resume" } }) {
      edges {
        node {
          name
          relativePath
          relativeDirectory
          publicURL
        }
      }
    }
  }
`

export default AboutPage

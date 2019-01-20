import React, { Component } from 'react'
import styled from 'styled-components'
import { theme } from './Meta'
import { GithubIcon, LinkedinIcon, SpotifyIcon } from './icons'

const Container = styled.div`
  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: row;
    .nav {
      z-index: 1;
    }
  }
`

const StyledFooter = styled.footer`
  margin: 0.5rem auto;
  max-width: 600px;
  .footer-container {
    background: linear-gradient(whitesmoke);
    display: flex;
    justify-content: space-between;
  }

  .icons {
    display: flex;
  }
  .icon a {
    padding: 0 10px;
  }
  .icon svg {
    fill: ${theme.almostblack};
    height: 1.5rem;
  }
  .icon svg:hover {
    fill: ${theme.red};
    transition: ease 0.3s;
    /* stroke: ${theme.black}; */
    /* width: 2rem;
    height: 1.5rem; */
  }

  @media only screen and (max-width: 760px) {
    /* filter: brightness(85%); */
    background-color: WHITESMOKE;
    position: relative;
    /* border-top: 1px solid ${theme.almostblack}; */
    padding: 1rem;
    bottom: 9vh;
    /* margin-bottom: 7vh; */
  }
`

// class Footer extends Component {
//   // componentDidMount() {
//   //   window.addEventListener('scroll', this.trackScrolling)
//   // }

//   // componentWillUnmount() {
//   //   window.removeEventListener('scroll', this.trackScrolling)
//   // }

//   // isBottom(el) {
//   //   return el.getBoundingClientRect().bottom <= window.innerHeight
//   // }
//   // trackScrolling = () => {
//   //   const wrappedElement = document.querySelectorAll('.footer')[0]
//   //   if (this.isBottom(wrappedElement)) {
//   //     console.log('footer reached')
//   //     console.log(this)
//   //     // const navProps = this.props.children
//   //     // navProps.toggle()
//   //     document.removeEventListener('scroll', this.trackScrolling)
//   //   }
//   // }

//   render() {
//     return (
//       <div>
//         {/* {this.props.children} */}
//         <StyledFooter className="footer">
//           <div className="footer-container">
//             <div className="signature">
//               © {new Date().getFullYear()}, Built with
//               {` `}
//               <a href="https://www.gatsbyjs.org">Gatsby</a>
//             </div>
//             <div className="icons">
//               <GithubIcon link="https://github.com/josefaidt" />
//               <LinkedinIcon link="https://linkedin.com/in/josefaidt" />
//               <SpotifyIcon link="https://open.spotify.com/user/1215285465?si=oxVZ8WelTQyZBdr97Tz4fQ" />
//             </div>
//           </div>
//         </StyledFooter>
//       </div>
//     )
//   }
// }
const Footer = ({ children }) => (
  <div>
    {children}
    <StyledFooter className="footer">
      <div className="footer-container">
        <div className="signature">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
        <div className="icons">
          <GithubIcon link="https://github.com/josefaidt" />
          <LinkedinIcon link="https://linkedin.com/in/josefaidt" />
          <SpotifyIcon link="https://open.spotify.com/user/1215285465?si=oxVZ8WelTQyZBdr97Tz4fQ" />
        </div>
      </div>
    </StyledFooter>
  </div>
)
export default Footer

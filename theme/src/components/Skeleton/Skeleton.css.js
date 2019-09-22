import styled from 'styled-components'
import theme from '../styles/_theme'

const StyledLayout = styled.div`
  background: white;
  color: ${theme.almostblack};
  font-family: 'Open Sans';
  font-size: 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  .footer {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }
  .content {
    flex: 1 0 auto;
    height: 100%;
  }
  a {
    color: ${theme.red};
    transition: color 0.2s ease;
  }
  a:hover {
    color: ${theme.red4};
    transition: color 0.2s ease;
  }
  @media only screen and (max-width: 760px) {
    .content {
      padding-bottom: 5rem;
    }
  }
  .col2 {
    background-color: red;
  }
`

export default StyledLayout

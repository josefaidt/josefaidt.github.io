import styled from 'styled-components'

const StyledLayout = styled.div`
  background: white;
  color: ${props => props.theme.text};
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
  @media only screen and (max-width: 760px) {
    .content {
      padding-bottom: 5rem;
    }
  }
`

export default StyledLayout

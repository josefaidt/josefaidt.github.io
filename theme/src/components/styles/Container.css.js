import styled from 'styled-components'

const Container = styled.main`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  font-size: 1rem;

  @media only screen and (max-width: 480px) {
    margin: 0 0.8rem;
  }
`

export default Container

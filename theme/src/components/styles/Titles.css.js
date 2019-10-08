// currently only used in Resume.js
import styled from 'styled-components'

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`
const SubtitleFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: auto;
  span {
    font-style: italic;
    font-size: 0.9rem;
    margin-top: -1rem;
  }
  @media only screen and (max-width: 760px) {
    flex-direction: column;
    text-align: center;
  }
`

export { Title, SubtitleFlex }

import styled from 'styled-components'

const StyledTagList = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  div {
    display: flex;
    flex-wrap: wrap;
  }
`

const StyledTag = styled.span`
  background-color: ${props => props.theme.text};
  color: white;
  border-radius: 5px;
  padding: 0.1rem 0.5rem;
  text-align: center;
  margin: 0 0.3rem 0.3rem 0;
  font-size: 0.7rem;
  color: white;
  &:hover {
  }
`

export { StyledTagList, StyledTag }

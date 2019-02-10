import styled from 'styled-components'
import theme from './theme'

const StyledIcons = styled.div.attrs(({ height }) => ({
  height: height || '1.5rem',
}))`
  display: flex;
  align-items: center;

  .icon {
    padding: 0 10px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .icon svg {
    fill: ${theme.almostblack};
    height: ${props => props.height};
  }
  .icon svg:hover {
    fill: ${theme.red};
    transition: ease 0.3s;
  }
`

export default StyledIcons

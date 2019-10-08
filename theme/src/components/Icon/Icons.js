import React from 'react'
import styled, { ThemeContext } from 'styled-components'

const StyledIcons = styled.div.attrs(({ iHeight }) => ({
  height: iHeight || '1.3rem',
}))`
  display: flex;
  align-items: center;

  .icon {
    padding: 0 10px;
    height: 100%;
    display: flex;
    align-items: center;

    color: ${props => props.theme.text};
    fill: ${props => props.theme.text};
  }

  .icon a {
    display: flex;
    span {
      position: relative;
      padding-left: 0.3rem;
    }
  }

  .icon svg {
    fill: ${props => props.theme.text};
    height: ${props => props.iconHeight};
    /* filter: brightness(100%); */
  }

  .share {
    color: ${props => props.theme.text};
    font-weight: bold;
    text-shadow: 0rem 0.05rem ${props => props.theme.text};
  }

  .icon:hover .share,
  .icon:hover svg {
    color: ${props => props.theme.primary};
    fill: ${props => props.theme.accent};
    transition: ease 0.3s;
  }
`

const Icons = props => {
  const theme = React.useContext(ThemeContext)
  return <StyledIcons theme={theme} {...props} />
}

Icons.defaultProps = {
  iconHeight: '2rem',
}

export default StyledIcons

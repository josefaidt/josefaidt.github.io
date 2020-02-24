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

    color: ${({ theme }) => theme.colors.text};
    fill: ${({ theme }) => theme.colors.text};
  }

  .icon a {
    display: flex;
    span {
      position: relative;
      padding-left: 0.3rem;
    }
  }

  .icon svg {
    fill: ${({ theme }) => theme.colors.text};
    height: ${props => props.iconHeight};
    /* filter: brightness(100%); */
  }

  .share {
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
    text-shadow: 0rem 0.05rem ${({ theme }) => theme.colors.text};
  }

  .icon:hover .share,
  .icon:hover svg {
    color: ${({ theme }) => theme.colors.primary};
    fill: ${({ theme }) => theme.colors.accent};
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

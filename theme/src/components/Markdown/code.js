import React from 'react'
import styled, { ThemeContext } from 'styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import prismTheme from './prismTheme'

const StyledInlineCode = styled.code`
  padding: 0.3rem;
  font-size: 0.85rem;
  border-radius: 5px;
  background-color: ${props => props.theme.backgroundContrast};
  ::after {
    content: '';
  }
`

const StyledCode = styled.code`
  border-radius: 5px;
  background-color: ${props => props.theme.backgroundContrast};
`

const Code = props => {
  const theme = React.useContext(ThemeContext)
  return <StyledCode theme={theme} {...props} />
}

const InlineCode = props => {
  const theme = React.useContext(ThemeContext)
  return <StyledInlineCode theme={theme} {...props} />
}

const CodeBlock = ({ children, className = '' }) => {
  const language = className.replace(/language-/, '')
  return (
    <Highlight {...defaultProps} code={children} language={language} theme={prismTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.slice(0, tokens.length - 1).map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export { InlineCode, Code, CodeBlock }

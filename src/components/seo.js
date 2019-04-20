import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, image: imageSlug, meta, keywords, title, url }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description
        const metaImage =
          `${data.site.siteMetadata.siteUrl}${imageSlug}` || data.site.siteMetadata.image
        const metaTitle = title || data.site.siteMetadata.title
        const metaUrl = url || data.site.siteMetadata.siteUrl
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `title`,
                property: `og:title`,
                content: `${data.site.siteMetadata.title.split('')[0]}: ${metaTitle}`,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: `${data.site.siteMetadata.siteUrl}${data.site.siteMetadata.image}`,
              },
              {
                property: `author`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:site`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
            title={metaTitle}
            titleTemplate={`${data.site.siteMetadata.title.split('')[0]}: %s`}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  image: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
        siteUrl
      }
    }
  }
`

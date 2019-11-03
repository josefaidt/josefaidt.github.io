import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ description, lang, meta, keywords, title, siteUrl, image, imageAlt }) => {
  const {
    site,
    file: { publicURL: favicon },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
        file(
          sourceInstanceName: { eq: "content/assets" }
          name: { eq: "favicon" }
          relativeDirectory: { eq: "images" }
        ) {
          publicURL
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  // const metaImage =
  //   `${site.siteMetadata.siteUrl}${imageSlug}` || site.siteMetadata.image
  const metaTitle = title || site.siteMetadata.title
  const metaUrl = siteUrl || site.siteMetadata.siteUrl
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
          content: `${site.siteMetadata.title.split('')[0]}: ${metaTitle}`,
        },
        {
          name: `title`,
          property: `title`,
          content: `${site.siteMetadata.title.split('')[0]}: ${metaTitle}`,
        },
        {
          property: `og:site_name`,
          content: `${site.siteMetadata.title}`,
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
          content: image || favicon,
        },
        {
          property: `author`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: image || favicon,
        },
        {
          name: `twitter:image:alt`,
          content: image ? imageAlt || 'josef aidt custom image' : 'josef aidt J',
        },
        {
          name: `twitter:card`,
          content: 'summary_large_image',
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
      titleTemplate={`${site.siteMetadata.title}: %s`}
    >
      <link rel="icon" href={favicon} />
    </Helmet>
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
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  siteUrl: PropTypes.string,
}

export default SEO

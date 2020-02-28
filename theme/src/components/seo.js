import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({
  description,
  lang,
  meta,
  keywords,
  title,
  siteUrl,
  image,
  imageAlt,
  isBlogPost,
  ...rest
}) => {
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
      title={metaTitle}
      titleTemplate={`${site.siteMetadata.title}: %s`}
    >
      <link rel="icon" href={favicon} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />

      <meta property="og:url" content={metaUrl} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image || favicon} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image || favicon} />
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

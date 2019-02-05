import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ description, lang, image, meta, keywords, pathname, title }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            titleTemplate,
            defaultDescription,
            siteUrl,
            defaultImage,
            social: { twitterUsername },
          },
        },
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: `${siteUrl}${image || defaultImage}`,
          url: `${siteUrl}${pathname || '/'}`,
          keywords: keywords,
        }

        return (
          <>
            <Helmet
              title={seo.title}
              titleTemplate={titleTemplate}
              htmlAttributes={{
                lang,
              }}
            >
              <meta name="description" content={seo.description} />
              <meta name="image" content={seo.image} />
              {seo.url && <meta property="og:url" content={seo.url} />}
              {/* {(article ? true : null) && <meta property="og:type" content="article" />} */}
              {seo.title && <meta property="og:title" content={seo.title} />}
              {seo.description && <meta property="og:description" content={seo.description} />}
              {seo.image && <meta property="og:image" content={seo.image} />}
              <meta name="twitter:card" content="summary_large_image" />
              {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
              {seo.title && <meta name="twitter:title" content={seo.title} />}
              {seo.description && <meta name="twitter:description" content={seo.description} />}
              {seo.image && <meta name="twitter:image" content={seo.image} />}
              {seo.keywords && <meta name="keywords" content={seo.keywords} />}
            </Helmet>
          </>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  title: null,
  description: null,
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
        defaultTitle: title
        defaultDescription: description
        author
        defaultImage: image
        siteUrl: url
        social {
          twitterUsername: twitter
        }
      }
    }
  }
`

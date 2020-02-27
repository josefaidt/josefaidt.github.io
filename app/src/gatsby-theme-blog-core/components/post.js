import React from 'react'
import BlogPost from '@josefaidt/gatsby-theme/src/layouts/blogpost'
import SEO from '@josefaidt/gatsby-theme/src/components/seo'
import getShareImage from '@jlengstorf/get-share-image'
import { useTheme } from '@josefaidt/gatsby-theme'

const Post = ({ location, data }) => {
  const theme = useTheme()
  const { blogPost, previous, next } = data
  // return <BlogPost data={data}></BlogPost>
  const socialImage = getShareImage({
    title: blogPost.title,
    tagline: blogPost.keywords.map(k => `#${k}`).join('  '),
    cloudName: 'dbxon0kwl',
    imagePublicID: 'blog/blog-card2',
    textColor: theme.text.slice(1),
  })
  return (
    <>
      <BlogPost data={data}></BlogPost>
      <SEO image={socialImage} imageAlt={`Blog post card`} />
    </>
  )
}

export default Post

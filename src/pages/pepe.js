import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

export default function BlogIndex({ data: { site }, location }) {
  const siteTitle = site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`yoga`, `madrid`, `meditacion`, `alitasyoga`]}
      />
      this is a pepe
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomeQuery2 {
    site {
      siteMetadata {
        title
      }
    }
  }
`

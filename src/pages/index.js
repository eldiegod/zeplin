import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

export default function BlogIndex({ location }) {
  const siteTitle = 'site.siteMetadata.title'
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`yoga`, `madrid`, `meditacion`, `alitasyoga`]}
      />
      <div className="bg-teal-darkest">this is a page</div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

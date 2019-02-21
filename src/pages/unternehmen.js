import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

export default function BlogIndex({ data: { site }, location }) {
  const siteTitle = site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Unternehmen"
        keywords={[`unternehmen`, `Über uns`, `Ansprechpartner`, `Geschichte`]}
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

import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const Container = styled.div`
  p {
    white-space: pre-line;
    margin-bottom: 16px;
  }
`
export default function AGBs({ data }) {
  console.dir(data)
  return (
    <Layout hardDriveCover>
      <SEO title="AGBs" keywords={[`AGBS`]} />
      <div className="futura text-grey text-center mt-32">
        {/* Agbs */}
        <div className="mx-auto px-4 max-w-lg mb-32">
          <div className="futura font-light text-5xl mb-8 text-left">AGBs</div>
          <Container
            className="text-lg leading-normal text-justify"
            dangerouslySetInnerHTML={{ __html: data.agbs.edges[0].node.html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const AGBsQuery = graphql`
  query {
    agbs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/agbs.md/" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`

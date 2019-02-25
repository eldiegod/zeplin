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
export default function Impressum({ data }) {
  // console.dir(data)
  return (
    <Layout hardDriveCover>
      <SEO
        title="Datenschutzerklärung"
        keywords={[`Datenschutzerklärung`, `Impressum`]}
      />
      <div className="futura text-grey text-center mt-32">
        {/* Datenschutzerklärung */}
        <div className="mx-auto px-8 max-w-lg ">
          <div className="futura font-light text-4xl sm:text-5xl mb-8 text-left">
            Datenschutzerklärung
          </div>
          <Container
            className="text-lg leading-normal text-justify"
            dangerouslySetInnerHTML={{
              __html: data.datenschutz.edges[0].node.html,
            }}
          />
        </div>
        {/* separator */}
        <div className="my-32 mx-auto border border-blue w-64" />
        {/* Impressum */}
        <div
          name="impressum"
          id="impressum"
          className="mx-auto px-8 max-w-lg mb-32"
        >
          <div className="futura font-light text-4xl sm:text-5xl mb-8 text-left">
            Impressum
          </div>
          <Container
            className="text-lg leading-normal text-justify"
            dangerouslySetInnerHTML={{
              __html: data.impressum.edges[0].node.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const ImpressumQuery = graphql`
  query {
    impressum: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/impressum.md/" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
    datenschutz: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/datenschutz.md/" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import Cover from './Cover'

const Layout = ({ location, children }) => {
  return (
    <StaticQuery
      query={layoutQuery}
      render={data => {
        console.dir(data)
        return (
          <div>
            <Header logoImg={data.logo} />
            <Cover coverImg={data.cover} logoWhiteImg={data.logoWhite} />
            {children}
            <Footer />
          </div>
        )
      }}
    />
  )
}

export default Layout

export const layoutQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    logo: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fixed(width: 234, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logoWhite: file(absolutePath: { regex: "/logo-white.png/" }) {
      childImageSharp {
        fixed(width: 300, height: 38) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cover: file(absolutePath: { regex: "/cover.jpg/" }) {
      childImageSharp {
        fluid(maxHeight: 608) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import Cover from './Cover'

const Layout = ({ children, noCover }) => {
  return (
    <StaticQuery
      query={layoutQuery}
      render={data => {
        // console.dir(data)
        return (
          <div>
            <Header logoImg={data.logo} />
            {!noCover && (
              <Cover coverImg={data.cover} logoWhiteImg={data.logoWhite} />
            )}
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
    logo: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fixed(width: 234, height: 30) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    logoWhite: file(absolutePath: { regex: "/logo-white.png/" }) {
      childImageSharp {
        fixed(width: 300, height: 38) {
          ...GatsbyImageSharpFixed_tracedSVG
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

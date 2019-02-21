import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ location, children }) => {
  return (
    <StaticQuery
      query={layoutQuery}
      render={data => {
        console.dir(data)
        return (
          <div>
            <Header logoImg={data.logo} />
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
  }
`

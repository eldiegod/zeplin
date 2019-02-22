import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, noCover = false, hardDriveCover = false }) => {
  return (
    <StaticQuery
      query={layoutQuery}
      render={data => {
        // console.dir(data)
        const coverImg = hardDriveCover ? data.harddrive : data.cover
        return (
          <div>
            <Header
              noCover={noCover}
              logoImg={data.logo}
              logoWhiteImg={data.logoWhite}
              coverImg={coverImg}
              coverMobileImg={data.coverMobile}
              menuIcon={data.menuIcon}
            />
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
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
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
    coverMobile: file(absolutePath: { regex: "/coverMobile.jpg/" }) {
      childImageSharp {
        fluid(maxHeight: 900) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    harddrive: file(absolutePath: { regex: "/harddrive.jpg/" }) {
      childImageSharp {
        fluid(maxHeight: 608) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menuIcon: file(absolutePath: { regex: "/menuIcon.png/" }) {
      childImageSharp {
        fixed(width: 26, height: 22) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`

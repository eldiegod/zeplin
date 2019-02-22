import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'

export default function Kontakt({ data }) {
  const { logo } = data
  console.dir(data)
  return (
    <Layout noCover>
      <SEO
        title="Kontakt"
        keywords={[`leistungsportfolio`, `IT-Helpdesk`, `Karriere`, `SOFTWARE`]}
      />
      <div className="futura text-grey text-left sm:text-center ">
        {/* map */}
        <div>
          <iframe
            className="border-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.7605694421536!2d8.586389315781075!3d49.54567087936079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797d0057836c683%3A0xfc06286c02b6cd81!2sNeuer+Weg+5%2C+68519+Viernheim%2C+Germany!5e0!3m2!1sen!2ses!4v1550839137686"
            width="100%"
            height="608"
            frameborder="0"
            allowfullscreen
          />
        </div>
        {/* logo */}
        <div className="px-8 mt-32">
          <Img fluid={logo.childImageSharp.fluid} />
        </div>
        {/* separator */}
        <div className="mx-8 my-8 sm:my-16 sm:mx-auto border border-blue w-64" />
        {/* Kontakt */}
        <div className="px-8 mx-auto max-w-lg mb-32">
          <div className="text-lg leading-normal">
            Neuer Weg 5,
            <br />
            D-68519 Viernheim
            <br /> <br />
            Telefon: +49 6204-966240
            <br />
            Telefax: +49 6204-966220
            <br />
            E-Mail-Adresse: info@tcig.de
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query KontaktfolioQuery {
    logo: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 492) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

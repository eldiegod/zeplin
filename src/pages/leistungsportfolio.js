import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'

export default function Leistungsportfolio({ data }) {
  const { thing1, thing2, thing3, thing4, rechteck } = data
  console.dir(data)
  return (
    <Layout>
      <SEO
        title="Leistungsportfolio"
        keywords={[`leistungsportfolio`, `IT-Helpdesk`, `Karriere`, `SOFTWARE`]}
      />
      <div className="futura text-grey text-center min-h-screen">
        {/* uber uns */}
        <div>
          <div className="mx-auto px-4 max-w-lg mt-32">
            <div className="mt-1 font-light text-5xl">Leistungsportfolio</div>
            <div className="mt-8 text-lg leading-normal">
              Wir von TCI Trident Computer bieten Ihnen ein breites Spektrum an
              IT-Dienstleistungen. Sie sparen sich Personal und Kosten und
              profitieren darüber hinaus von der Haftungssicherheit durch
              Serviceverträge, unserem kundenorientierten Arbeiten und einem
              24/7 Bereitschaftsservice in Notfällen. Hohe Qualitäts- und
              Dokumentationsstandards sind unsere Norm, wir bieten außerdem eine
              Kleinserienfertigung von spezialisierten EDV-Systemen mit hoher
              Ausfallsicherheit und dedizierte Datensicherungslösungen mit hohem
              lndividualisierungsgrad.
            </div>
          </div>
        </div>
        {/* circles */}
        <div className="mx-auto max-w-full mt-32">
          <div className="lg:px-16 xl:px-32 mx-auto mt-16 text-lg flex justify-center lg:justify-between flex-wrap">
            <div className="inline-block mx-4">
              <div className="bg-blue rounded-full w-48 h-48 flex items-center justify-center">
                <Img fixed={thing1.childImageSharp.fixed} />
              </div>
              <div className="mt-4 sm:mt-8 din tracking-wide text-lg text-2xl">
                BERATUNG & VERTRÄGE
              </div>
            </div>
            <div className="inline-block mx-4">
              <div className="bg-blue rounded-full w-48 h-48 flex items-center justify-center">
                <Img fixed={thing2.childImageSharp.fixed} />
              </div>
              <div className="mt-4 sm:mt-8 din tracking-wide text-lg text-2xl">
                SERVICE
              </div>
            </div>
            <div className="mt-16 md:mt-0 inline-block mx-4">
              <div className="bg-blue rounded-full w-48 h-48 flex items-center justify-center">
                <Img fixed={thing3.childImageSharp.fixed} />
              </div>
              <div className="mt-4 sm:mt-8 din tracking-wide text-lg text-2xl">
                SOFTWARE{' '}
              </div>
            </div>
            <div className="mt-16 md:mt-0 inline-block mx-4">
              <div className="bg-blue rounded-full w-48 h-48 flex items-center justify-center">
                <Img fixed={thing4.childImageSharp.fixed} />
              </div>
              <div className="mt-4 sm:mt-8 din tracking-wide text-lg text-2xl">
                HARDWARE
              </div>
            </div>
          </div>
        </div>
        {/* big blue image */}
        <div className="mt-32">
          <Img fluid={rechteck.childImageSharp.fluid} />
        </div>
        {/* Geschichte*/}
        <div className="mx-auto max-w-lg my-32">
          <div
            name="it-helpdesk"
            id="it-helpdesk"
            className="mt-1 font-light text-5xl"
          >
            IT-Helpdesk
          </div>
          <div className="mt-6 din tracking-wide text-lg text-xl">
            <div>SPAMFILTER </div>
            <a
              className="mt-2 futura text-lg no-underline hover:underline leading-normal text-blue-link"
              href="https://www.spamfilter.tcinet.de"
              target="blank"
              rel="noopener"
            >
              www.spamfilter.tcinet.de
            </a>
          </div>
          <div className="mt-6 din tracking-wide text-lg text-xl">
            <div>SUPPORTMAILADRESSE </div>
            <a
              className="mt-2 futura text-lg no-underline hover:underline leading-normal text-blue-link"
              href="mailto:service@tcig.de"
            >
              service@tcig.de
            </a>
          </div>
        </div>
        {/* separator */}
        <div className="my-16 mx-auto border border-blue w-64" />
        {/* Karriere */}
        <div>
          <div className="mx-auto px-4 max-w-lg mt-16">
            <div
              name="karriere"
              id="karriere"
              className="mt-1 font-light text-5xl"
            >
              Karriere
            </div>
            <div className="mt-8 text-lg leading-normal">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes
            </div>
          </div>
        </div>
        {/* separator */}
        <div className="mx-auto max-w-lg">
          <div className="mb-8 mt-16 mx-auto border border-blue w-full" />
        </div>
        <div className="mb-32">
          {[...new Array(4).fill(1)].map((_, index) => (
            <div>
              <div className="mx-auto px-4 max-w-lg text-left mt-6 din text-lg text-4xl">
                <div className="tracking-wide">LOREM IPSUM</div>
                <div className="mt-2 text-lg futura leading-normal text-justify">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes.
                </div>
              </div>
              <div className="mx-auto max-w-lg">
                <div className="my-8 mx-auto border border-blue w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query LeistungsportfolioQuery {
    thing1: file(absolutePath: { regex: "/thing1.png/" }) {
      childImageSharp {
        fixed(width: 105, height: 118) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    thing2: file(absolutePath: { regex: "/thing2.png/" }) {
      childImageSharp {
        fixed(width: 110, height: 83) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    thing3: file(absolutePath: { regex: "/thing3.png/" }) {
      childImageSharp {
        fixed(width: 111, height: 131) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    thing4: file(absolutePath: { regex: "/thing4.png/" }) {
      childImageSharp {
        fixed(width: 105, height: 105) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    rechteck: file(absolutePath: { regex: "/rechteck.jpg/" }) {
      childImageSharp {
        fluid(maxHeight: 608) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

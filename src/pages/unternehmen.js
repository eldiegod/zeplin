import React from 'react'
import { graphql } from 'gatsby'
import Responsive from 'react-responsive'

import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Slider from '../components/Slider'
import * as Screen from '../components/Responsive'

export default function Unternehmen({ data }) {
  const { guy1, guy2, guy3 } = data
  const sliderContent = [
    {
      img: guy1,
      title: 'ANDREAS SCHNEIDER',
      subtitle: 'Projektleitung & Projektberatung',
    },
    {
      img: guy2,
      title: 'STEFFEN SCHNEIDER',
      subtitle: 'Datev & Projektleitung',
    },
    {
      img: guy3,
      title: 'DENNIS VORONTSOV',
      subtitle: 'Verwaltung, Vertrieb & Einkauf',
    },
  ]
  console.dir(data)
  return (
    <Layout>
      <SEO
        title="Unternehmen"
        keywords={[`unternehmen`, `Über uns`, `Ansprechpartner`, `Geschichte`]}
      />
      <div className="futura text-grey text-left sm:text-center min-h-screen">
        {/* uber uns */}
        <div>
          <div className="mx-auto max-w-lg px-8">
            <div className="din tracking-wide text-lg mt-32 text-2xl">
              DAS UNTERNEHMEN
            </div>
            <div className="mt-1 font-light text-5xl">Über uns</div>
            <div className="mt-8 text-lg leading-normal text-justify">
              Mit unserem Unternehmen mit Hauptsitz in Viernheim liefern wir
              Ihnen individuelle IT Beratung und Betreuung sowie eine
              kundenspezifische Konzipierung von IT Lösungen. Die TCI Trident
              Computer GmbH ist Ihr richtiger Ansprechpartner, wenn Sie Lösungen
              in den Bereichen Firewall/Backend, VPN Sicherheit oder Datenschutz
              suchen. Außerdem bieten wir eine Bandbreite anderer Services an,
              wie zum Beispiel USV und Serverwartungen, Dokumentationen und
              Bestands­Analysen, IT-Service-Abdeckung und die Reparatur von
              Peripherie und Anwendersystemen. Auch Softwaresupport von Datev-
              und Warenwirtschaftssystemen ist eines unserer vielfältigen
              Dienstleistungsmerkmale.{' '}
            </div>
          </div>
        </div>
        {/* separator */}
        <div className="mt-16 sm:mt-32 ml-8 sm:mx-auto border border-blue w-64" />
        {/* das team */}
        <div className="mx-auto px-8 max-w-xl">
          <div className="din tracking-wide text-lg mt-16 sm:mt-32 text-2xl">
            DAS TEAM
          </div>
          <div className="mt-1 font-light text-5xl">Ansprechpartner</div>
          <Responsive maxWidth={935}>
            <Slider content={sliderContent} />
          </Responsive>
          <Responsive minWidth={936}>
            <div className="mx-auto mt-16 text-lg text-center">
              {sliderContent.map((content, index, array) => {
                const isLastOrFirst = index === 0 || index + 1 === array.length
                const mx = isLastOrFirst ? '' : 'mx-16'
                return (
                  <div className={`inline-block ${mx}`}>
                    <Img fixed={content.img.childImageSharp.fixed} />
                    <div className="mt-8 din tracking-wide text-lg text-2xl">
                      {content.title}
                    </div>
                    <div className="text-normal leading-normal">
                      {content.subtitle}
                    </div>
                  </div>
                )
              })}
              {/* <div className="inline-block">
                <Img fixed={guy1.childImageSharp.fixed} />
                <div className="mt-8 din tracking-wide text-lg text-2xl">
                  ANDREAS SCHNEIDER
                </div>
                <div className="text-normal leading-normal">
                  Projektleitung & Projektberatung
                </div>
              </div>
              <div className="inline-block sm:ml-16 md:mx-16">
                <Img className="" fixed={guy2.childImageSharp.fixed} />
                <div className="mt-8 din tracking-wide text-lg text-2xl">
                  ANDREAS SCHNEIDER
                </div>
                <div className="text-normal leading-normal">
                  Projektleitung & Projektberatung
                </div>
              </div>
              <div className="inline-block sm:mt-8 md:mt-0">
                <Img fixed={guy3.childImageSharp.fixed} />
                <div className="mt-8 din tracking-wide text-lg text-2xl">
                  ANDREAS SCHNEIDER
                </div>
                <div className="text-normal leading-normal">
                  Projektleitung & Projektberatung
                </div>
              </div> */}
            </div>
          </Responsive>
        </div>

        {/* vision */}
        <div className="px-8 bg-blue my-32 py-32 text-white">
          <div className="mx-auto max-w-lg">
            <div className="font-bold" style={{ fontSize: '90px' }}>
              Vision
            </div>
            <div className="mt-8 text-lg leading-normal text-justify">
              Cliente Semper Fidelis, dem Kunden immer treu ergeben. So lautet
              unser Motto, und das ist auch unsere Herangehensweise an Ihr
              IT-Problem. Uns ist vor allem die zukunftsorientierte Konzeption
              Ihrer individuellen Lösung wichtig, denn wir arbeiten nah an
              unseren Kunden und betreuen Sie langfristig. IT-Probleme schnell,
              sicher und vor allem effizient lösen ist unsere Stärke, mit
              unserem abgestimmten Team aus Programmierern, Kaufleuten und
              System-Integratoren und unserem Know-How aus über 25 Jahren IT
              stehen wir an Ihrer Seite. Hier bekommen sie Dienstleistungen von
              A bis Z aus einer Hand und individuelle Lösungsansätze anhand
              ihrer Vorgaben.
            </div>
          </div>
        </div>
        {/* Geschichte*/}
        <div>
          <div className="px-8 mx-auto max-w-lg mb-32">
            <div className="din tracking-wide text-lg mt-32 text-2xl">
              DAS UNTERNEHMEN
            </div>
            <div className="mt-1 font-light text-5xl">Geschichte</div>
            <div className="mt-8 text-lg leading-normal text-justify">
              Die TCI Trident Computer GmbH wurde im Jahr 1989 gegründet und
              expandierte bereits im selben Jahr und den beiden Folgejahren nach
              China (TCI Taiwan, 1989), Norwegen (MIPS Norwegen, 1990) und
              Russland (TCI Russia, 1991 ). 1996-1998 erfolgte der Umstieg von
              Hardwaredistribution zu Consulting und Service, 2003 die
              Umstrukturierung mit dem Fokus von International auf National. In
              2004 wurde der Kundenstamm optimiert, um unseren Kunden einen
              besseren individuellen Service bieten zu können. 2011 folgte die
              Implementierung einer Kleinserienproduktion von PC-Systemen, 2015
              die Kleinserienproduktion von Firewall Servern. Die Umstellung auf
              schnelle Internetkanäle in der Folge, gab uns die Möglichkeit mehr
              und bessere lnhouse und Cloudlösungen anzubieten.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query UnternehmenQuery {
    guy1: file(absolutePath: { regex: "/guy1.jpg/" }) {
      childImageSharp {
        fixed(width: 248, height: 248, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    guy2: file(absolutePath: { regex: "/guy2.jpg/" }) {
      childImageSharp {
        fixed(width: 248, height: 248, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    guy3: file(absolutePath: { regex: "/guy3.jpg/" }) {
      childImageSharp {
        fixed(width: 248, height: 248, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`

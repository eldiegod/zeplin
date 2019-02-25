import React, { useState } from 'react'
import Responsive from 'react-responsive'

import { Link } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

import Footer from './Footer'

const linksData = [
  { to: '/unternehmen', text: 'UNTERNEHMEN' },
  { to: '/leistungsportfolio', text: 'LEISTUNGSPORTFOLIO' },
  { to: '/leistungsportfolio#it-helpdesk', text: 'IT-HELPDESK' },
  { to: '/kontakt', text: 'KONTAKT' },
  { to: '/leistungsportfolio#karriere', text: 'KARRIERE' },
]

const Header = ({
  logoImg,
  coverImg,
  coverMobileImg,
  logoWhiteImg,
  menuIcon,
  closeIcon,
  noCover = false,
}) => {
  const [mobileMenuIsActive, setMobileMenuActive] = useState(false)
  return (
    <>
      {/* mobile menu */}
      <Responsive maxWidth={895}>
        <div className="">
          {mobileMenuIsActive ? (
            <div className="px-8 pt-6 pb-1 flex flex-col justify-between h-screen bg-blue ">
              <div className="flex justify-between">
                <div
                  className="cursor-pointer"
                  onClick={() => setMobileMenuActive(false)}
                >
                  <Img fixed={closeIcon.childImageSharp.fixed} />
                </div>
                <div style={{ width: '166px' }}>
                  <Img fluid={logoWhiteImg.childImageSharp.fluid} />
                </div>
              </div>
              <div className="mt-16 flex flex-grow flex-col content-center">
                {linksData.map((l, index) => (
                  <div onClick={() => setMobileMenuActive(false)} key={index}>
                    <MyLinkMobile to={l.to}>{l.text}</MyLinkMobile>
                    {/* separator */}
                    {linksData.length !== index + 1 && (
                      <div className="my-4 border-t border-white w-16" />
                    )}
                  </div>
                ))}
              </div>
              {/* mobile footer */}
              <Footer />
            </div>
          ) : (
            <BgImage
              className="px-8 py-6 bg-center flex flex-col justify-between h-screen"
              fluid={coverMobileImg.childImageSharp.fluid}
            >
              <div className="flex justify-between">
                <div
                  className="cursor-pointer"
                  onClick={() => setMobileMenuActive(true)}
                >
                  <Img fixed={menuIcon.childImageSharp.fixed} />
                </div>
                <div className="" style={{ width: '166px' }}>
                  <Img fluid={logoWhiteImg.childImageSharp.fluid} />
                </div>
              </div>
              <div>
                <div
                  className="futura font-bold text-white"
                  style={{ fontSize: '47px' }}
                >
                  Cliente
                  <br /> Semper Fi
                </div>
              </div>
            </BgImage>
          )}
        </div>
      </Responsive>
      {/* desktop stuff */}
      <Responsive minWidth={896}>
        {/* header */}
        <div className="px-8 w-full flex items-center h-20 bg-white">
          <div className="flex-none">
            <Link to="/unternehmen">
              <Img fixed={logoImg.childImageSharp.fixed} />
            </Link>
          </div>
          <div className="flex flex-grow justify-end content-center">
            {linksData.map((l, index) => (
              <MyLinkDesktop key={index} to={l.to}>
                {l.text}
              </MyLinkDesktop>
            ))}
          </div>
        </div>
        {/* cover */}
        {!noCover && (
          <div>
            <BackgroundImage
              className="pl-8 pb-6 bg-center flex flex-col justify-end"
              fluid={coverImg.childImageSharp.fluid}
              style={{
                height: '608px',
              }}
            >
              <div className="flex-none" style={{ width: '300px' }}>
                <Img fluid={logoWhiteImg.childImageSharp.fluid} />
              </div>
              <div
                className="futura font-bold text-white"
                style={{ fontSize: '89px' }}
              >
                Cliente Semper Fi
              </div>
            </BackgroundImage>
          </div>
        )}
      </Responsive>
    </>
  )
}

const MyLinkMobile = ({ children, to }) => {
  return (
    <Link
      className="tracking-wide din uppercase no-underline text-white text-3xl"
      to={to}
    >
      {children}
    </Link>
  )
}

const MyLinkDesktop = ({ children, to }) => {
  return (
    <Link
      className="pt-2 tracking-wide din uppercase no-underline hover:underline px-4 text-grey  text-lg"
      to={to}
    >
      {children}
    </Link>
  )
}

// hack to set bg position to center succesfully
const BgImage = styled(BackgroundImage)`
  :last-child ::after {
    background-position: center;
  }
`

export default Header

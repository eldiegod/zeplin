import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const linksData = [
  { to: '/unternehmen', text: 'UNTERNEHMEN' },
  { to: '/', text: 'LEISTUNGSPORTFOLIO' },
  { to: '/', text: 'IT-HELPDESK' },
  { to: '/', text: 'KONTAKT' },
  { to: '/', text: 'KARRIERE' },
]
const Header = ({ logoImg }) => {
  return (
    <div className="px-8 w-full flex items-center h-20 bg-white">
      <div className="flex-none">
        <Img fixed={logoImg.childImageSharp.fixed} />
      </div>
      <div className="flex flex-grow justify-end content-center">
        {linksData.map((l, index) => (
          <MyLink key={index} to={l.to}>
            {l.text}
          </MyLink>
        ))}
      </div>
    </div>
  )
}

const MyLink = ({ children, to }) => {
  return (
    <Link
      className="pt-2 tracking-wide din uppercase no-underline hover:underline px-4 text-grey  text-lg"
      to={to}
    >
      {children}
    </Link>
  )
}

export default Header

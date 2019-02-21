import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const linksData = [
  { to: '/', text: 'UNTERNEHMEN' },
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
      <div className="flex flex-grow justify-end">
        {linksData.map(l => (
          <MyLink to={l.to}>{l.text}</MyLink>
        ))}
      </div>
    </div>
  )
}

const MyLink = ({ children, to }) => {
  return (
    <Link
      className="uppercase no-underline hover:underline px-4 text-grey font-lg"
      to={to}
    >
      {children}
    </Link>
  )
}

export default Header

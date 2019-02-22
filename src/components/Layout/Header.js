import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const linksData = [
  { to: '/unternehmen', text: 'UNTERNEHMEN' },
  { to: '/leistungsportfolio', text: 'LEISTUNGSPORTFOLIO' },
  { to: '/leistungsportfolio#it-helpdesk', text: 'IT-HELPDESK' },
  { to: '/kontakt', text: 'KONTAKT' },
  { to: '/leistungsportfolio#karriere', text: 'KARRIERE' },
]
const Header = ({ logoImg }) => {
  return (
    <div className="px-8 w-full flex items-center h-20 bg-white">
      <div className="flex-none">
        <Link to="/unternehmen">
          <Img fixed={logoImg.childImageSharp.fixed} />
        </Link>
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

import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className="flex content-center justify-center items-center pt-2 h-12 bg-blue text-white text-lg">
      <Link
        className="px-6 text-white tracking-wide din uppercase no-underline hover:underline"
        to={'/datenschutz'}
      >
        IMPRESSUM
      </Link>
      |
      <Link
        className="px-6 text-white tracking-wide din uppercase no-underline hover:underline"
        to={'/datenschutz'}
      >
        DATENSCHUTZ
      </Link>
      |
      <Link
        className="px-6 text-white tracking-wide din uppercase no-underline hover:underline"
        to={'/agbs'}
      >
        AGBs
      </Link>
    </footer>
  )
}

export default Footer

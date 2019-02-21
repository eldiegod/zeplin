import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Cover = ({ coverImg, logoWhiteImg }) => {
  return (
    <div>
      <BgImage
        className="pl-8 pb-6 bg-center flex flex-col justify-end"
        fluid={coverImg.childImageSharp.fluid}
        style={{
          height: '608px',
        }}
      >
        <div className="flex-none">
          <Img fixed={logoWhiteImg.childImageSharp.fixed} />
        </div>
        <div className="din-bold text-white" style={{ fontSize: '109px' }}>
          Cliente Semper Fi
        </div>
      </BgImage>
    </div>
  )
}

export default Cover

// hack to set bg position to center succesfully
const BgImage = styled(BackgroundImage)`
  :last-child ::after {
    background-position: center;
  }
`

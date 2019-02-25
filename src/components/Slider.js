import React, { useState } from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const Slider = ({ content }) => {
  const [index, setIndex] = useState(0)
  const increment = () => {
    if (index + 1 >= content.length) return
    setIndex(index + 1)
  }
  const decrement = () => {
    if (index <= 0) return
    setIndex(index - 1)
  }
  return (
    <StaticQuery
      query={sliderQuery}
      render={data => {
        console.log(data)
        return (
          <div className="mt-16 text-center">
            <div className="flex items-center justify-between sm:justify-around">
              <button onClick={decrement}>
                <Img fixed={data.leftArrow.childImageSharp.fixed} />
              </button>
              <Img fixed={content[index].img.childImageSharp.fixed} />
              <button onClick={increment}>
                <Img fixed={data.rightArrow.childImageSharp.fixed} />
              </button>
            </div>
            <div className="mt-8 din tracking-wide text-lg text-2xl">
              {content[index].title}
            </div>
            <div className="text-normal text-lg leading-normal">
              {content[index].subtitle}
            </div>
          </div>
        )
      }}
    />
  )
}

export default Slider

export const sliderQuery = graphql`
  query {
    leftArrow: file(absolutePath: { regex: "/leftArrow.png/" }) {
      childImageSharp {
        fixed(width: 32, height: 63) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    rightArrow: file(absolutePath: { regex: "/rightArrow.png/" }) {
      childImageSharp {
        fixed(width: 32, height: 63) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
